# Design: Multi-Axis Category Filter

## Technical Approach

Generalize the existing single-axis `useTechFilter` into a multi-axis `useProjectFilter` hook that manages 4 independent filter axes (tech, domain, platform, tags). Each axis has its own URL param and localStorage key. The flat `TechFilterBar` becomes a compound `FilterBar` with collapsible accordion sections and removable active chips above. Logic: AND between axes, OR within an axis.

## Architecture Decisions

### Decision: Compound FilterBar component structure

| Option | Tradeoff | Decision |
|--------|----------|----------|
| Single monolithic FilterBar with props per axis | Simple but prop explosion (4× label, 4× options, 4× selected) — violates composition patterns | Rejected |
| Compound components (FilterBar.Accordion, FilterBar.ChipGroup, FilterBar.ActiveChips) | More files, but each section is self-contained; consumers compose exactly what they need | **Chosen** |
| Separate components per axis | Duplication; harder to maintain consistent UX across axes | Rejected |

**Rationale**: Follows the compound component pattern from `vercel-composition-patterns`. The accordion sections and chip bar are distinct responsibilities. A single `FilterBar` wrapper provides context (axis configs, toggle handlers) that subcomponents consume.

### Decision: Categories stored in `data` block, not locale-specific blocks

| Option | Tradeoff | Decision |
|--------|----------|----------|
| `categories` inside `data` block | Non-translatable, but categories are structural metadata not user-facing text | **Chosen** |
| `categories` inside `en`/`es` blocks | Duplicated across locales; categories don't need translation, only their labels do | Rejected |
| Separate `config/categories-data.ts` | Loses co-location with project definition; harder to maintain | Rejected |

**Rationale**: Categories like `domain: "health"` are stable identifiers, not display text. Display labels come from i18n. Keeping them in `data` matches how `techStack` works today.

### Decision: One generic hook vs. one hook per axis

| Option | Tradeoff | Decision |
|--------|----------|----------|
| `useProjectFilter` with axis registry | Single hook manages all axes; more complex but DRY | **Chosen** |
| `useTechFilter` + `useDomainFilter` + ... | 4 hooks, 4× URL sync logic, easy to get out of sync | Rejected |
| Extend `useTechFilter` with config object | Still monolithic, naming is misleading | Rejected |

**Rationale**: The existing `useTechFilter` already handles URL sync, localStorage, and popstate. Generalizing it to accept an axis config keeps one sync mechanism, one state shape, and one clear API.

## Data Flow

```
ProjectModule.data.categories  ──→  useProjectFilter(allAxes)
                                          │
                            ┌─────────────┼─────────────┐
                            │             │             │
                     selectedTechs  selectedDomain  selectedPlatform ...
                            │             │             │
                            └──────┬──────┴──────┬──────┘
                                   │             │
                              FilterBar     filteredProjects
                          (accordion +         (AND between
                           chips)              axes, OR within)
                                   │             │
                              URL params   ProjectCard list
                         (?tech=...&domain=...)
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `i18n/types.ts` | Modify | Add `ProjectCategories` interface and `categories` to `ProjectItem` and `ProjectModule.data` |
| `config/categories.tsx` | Create | Define axis configs: `DOMAINS`, `PLATFORMS`, `TAGS` with id, label-key, icon, color |
| `hooks/useProjectFilter.ts` | Create | Multi-axis hook replacing `useTechFilter`. Manages 4 axes, each with URL param + localStorage |
| `hooks/useTechFilter.ts` | Delete | Replaced by `useProjectFilter` |
| `components/molecules/FilterBar.tsx` | Create | Compound component: `FilterBar`, `FilterBar.ActiveChips`, `FilterBar.Section` |
| `components/molecules/TechFilterBar.tsx` | Delete | Replaced by `FilterBar` |
| `components/organisms/Projects.tsx` | Modify | Import `useProjectFilter` and `FilterBar`; wire multi-axis logic; update filter predicate to AND-between-axes |
| `i18n/types.ts` | Modify | Add filter section labels to `Dictionary.projects.actions` |
| `i18n/locales/es.ts` | Modify | Add `filter_domain`, `filter_platform`, `filter_tags`, `clear_all` labels |
| `i18n/locales/en.ts` | Modify | Add `filter_domain`, `filter_platform`, `filter_tags`, `clear_all` labels |
| `i18n/modules/projects/*.ts` (×8) | Modify | Add `categories: { domain, platform, tags }` to each project's `data` block |
| `components/atoms/Badge.tsx` | No change | Reused as-is for filter chips |

## Interfaces / Contracts

### ProjectCategories (new in `i18n/types.ts`)

```typescript
export type Domain = "health" | "fintech" | "logistics" | "retail" | "productivity";
export type Platform = "web" | "mobile" | "api" | "landing";
export type VerticalTag = "ai-ml" | "iot-wearables" | "hackathon" | "research" | "enterprise";

export interface ProjectCategories {
   domain: Domain[];
   platform: Platform[];
   tags: VerticalTag[];
}
```

### ProjectItem / ProjectModule changes

```typescript
// Add to ProjectItem interface:
export interface ProjectItem {
   // ...existing fields...
   categories: ProjectCategories;
}

// Add to ProjectModule.data:
export interface ProjectModule {
   data: {
      // ...existing fields...
      categories: ProjectCategories;
   };
   // ...en/es unchanged...
}
```

### CategoryAxis config (new in `config/categories.tsx`)

```typescript
export interface CategoryOption {
   id: string;
   name: string;       // display label (resolved via i18n at runtime)
   icon?: React.ElementType;
   bgColor: string;
}

export interface CategoryAxis {
   key: "domain" | "platform" | "tags";
   urlParam: string;    // "domain", "platform", "tag"
   storageKey: string;  // "portfolio-domain-filter"
   options: CategoryOption[];
}

export const CATEGORY_AXES: CategoryAxis[] = [
   {
      key: "domain",
      urlParam: "domain",
      storageKey: "portfolio-domain-filter",
      options: [
         { id: "health", name: "Health", bgColor: "#10b981" },
         { id: "fintech", name: "Fintech", bgColor: "#3b82f6" },
         { id: "logistics", name: "Logistics", bgColor: "#f59e0b" },
         { id: "retail", name: "Retail", bgColor: "#ec4899" },
         { id: "productivity", name: "Productivity", bgColor: "#8b5cf6" },
      ],
   },
   // ...platform, tags similarly
];
```

### useProjectFilter hook

```typescript
interface UseProjectFilterReturn {
   selections: Record<string, string[]>;  // { tech: [...], domain: [...], ... }
   toggle: (axis: string, value: string) => void;
   clearAxis: (axis: string) => void;
   clearAll: () => void;
   hasActiveFilter: boolean;
}

function useProjectFilter(
   axes: CategoryAxis[],
   allValues: Record<string, string[]>  // { tech: [...], domain: [...], ... }
): UseProjectFilterReturn;
```

### Filter predicate logic

```typescript
// In Projects.tsx useMemo:
function projectMatchesFilters(project: ProjectItem, selections: Record<string, string[]>): boolean {
   // AND between axes
   return Object.entries(selections).every(([axis, selected]) => {
      if (selected.length === 0) return true;  // no filter on this axis = pass
      // OR within axis
      if (axis === "tech") {
         return project.techStack.some(t => selected.includes(t));
      }
      const catValues = project.categories[axis as keyof ProjectCategories] ?? [];
      return catValues.some(v => selected.includes(v));
   });
}
```

### Dictionary changes

```typescript
// Add to Dictionary.projects.actions:
actions: {
   // ...existing...
   filter_tech: string;
   filter_domain: string;
   filter_platform: string;
   filter_tags: string;
   clear_filters: string;
   clear_all: string;
}
```

## Component Composition: FilterBar

Following compound component patterns — no boolean prop explosion:

```tsx
// Usage in Projects.tsx:
<FilterBar
   axes={CATEGORY_AXES}
   selections={selections}
   onToggle={handleToggle}
   onClearAxis={handleClearAxis}
   onClearAll={handleClearAll}
   hasActiveFilter={hasActiveFilter}
   labels={{ tech: dict.projects.actions.filter_tech, domain: dict.projects.actions.filter_domain, ... }}
   clearLabel={dict.projects.actions.clear_all}
/>
```

```tsx
// FilterBar internal structure:
function FilterBar({ axes, selections, ... }) {
   return (
      <div className="flex flex-col gap-3 w-full">
         {/* Active chips — shown when any axis has selections */}
         <FilterBar.ActiveChips
            axes={axes}
            selections={selections}
            onRemove={onToggle}
            onClearAll={onClearAll}
            clearLabel={clearLabel}
         />

         {/* Accordion sections — one per axis */}
         {axes.map(axis => (
            <FilterBar.Section
               key={axis.key}
               axis={axis}
               selected={selections[axis.key] ?? []}
               onToggle={(val) => onToggle(axis.key, val)}
               onClear={() => onClearAxis(axis.key)}
               label={labels[axis.key]}
            />
         ))}
      </div>
   );
}
```

Each `FilterBar.Section` is a collapsible accordion with its own toggle state. Chips render inline within the section when expanded, or as a compact count when collapsed.

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit | `useProjectFilter` hook: URL sync, localStorage, toggle/clear, multi-axis logic | Render hook with `@testing-library/react-hooks` |
| Unit | Filter predicate: AND between axes, OR within axis | Pure function tests |
| Unit | `FilterBar` sections: expand/collapse, chip toggle | Component render + click events |
| Integration | Projects component: filter by single axis, multi-axis, clear all | Render Projects with mock dict, verify filtered count |
| E2E | URL params update correctly when toggling filters | Navigate, check URL, reload, verify state restored |

## Migration / Rollout

No data migration required. The change is additive:
1. New `categories` field on project data (optional initially — projects without categories still work)
2. Old `?tech=` URL params remain compatible
3. Feature is backward-compatible: if no category params in URL, no filtering happens on those axes

Rollout: All changes ship together in one commit. No feature flag needed — the accordion is hidden behind the existing "Filter" button toggle.

## Open Questions

- None — all design decisions resolved with user in proposal phase.

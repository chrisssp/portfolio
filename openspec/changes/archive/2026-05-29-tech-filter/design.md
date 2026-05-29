# Design: Technology Filtering for Projects Section

## Technical Approach

Extend the existing Projects organism with OR-based tech filtering. A new `useTechFilter` hook manages selection state with URL search params as primary persistence and localStorage as fallback. A new `TechFilterBar` molecule renders selectable badges. The existing `Badge` atom gains optional interactive/selected props. `Projects.tsx` conditionally hides Featured/Others tabs when filters are active.

## Architecture Decisions

### Decision: Hook vs. URL-only state

**Choice**: `useTechFilter` hook with dual persistence (URL params + localStorage)
**Alternatives considered**: URL-only state; React Context; Zustand
**Rationale**: URL params enable shareable filtered views. localStorage preserves state across detail page round-trips (navigating away loses URL state on hard refresh). Context is overkill for a single-section state. Zustand adds a dependency. The hook keeps the feature self-contained.

### Decision: OR filter logic vs AND

**Choice**: OR (show project if techStack intersects selectedTechs)
**Alternatives considered**: AND (show only if ALL selected techs present)
**Rationale**: Matches proposal. OR is more useful for portfolio browsing — "show me React OR TypeScript projects" surfaces more results. AND is too restrictive for 30+ techs.

### Decision: Badge backward compatibility

**Choice**: Add optional `interactive`, `selected`, `onClick` props to Badge
**Alternatives considered**: New InteractiveBadge component; render prop pattern
**Rationale**: Optional props keep the API surface small. Existing usages (non-interactive) remain unchanged. A separate component adds import overhead for minimal differentiation.

### Decision: Filter bar duplication strategy

**Choice**: Same `TechFilterBar` component rendered twice (top + bottom), bottom conditionally shown when filteredProjects.length > 3
**Alternatives considered**: CSS sticky; portal; single bar with position logic
**Rationale**: Simple, no CSS tricks needed. Two explicit instances are easier to reason about and maintain than a sticky solution that fights with scroll behavior.

## Data Flow

```
Projects.tsx
├── useTechFilter(allTechs) → selectedTechs, toggleTech, clearTechs
├── useMemo: filteredProjects = filter by selectedTechs OR tabs
│
├── TechFilterBar (top)
│   ├── receives: allTechs, selectedTechs, onToggle, onClear
│   └── renders Badge × N (interactive, selected state)
│
├── ProjectCard × filteredProjects
│   ├── passes: selectedTechs, onTechClick → FeatureCard
│   └── FeatureCard → Badge (interactive when onTechClick provided)
│
└── TechFilterBar (bottom, conditional: filteredProjects.length > 3)
```

State mutations flow: User clicks Badge → toggleTech(techId) → useTechFilter updates selectedTechs → Projects re-renders → filteredProjects recalculates via useMemo → FilterPills conditionally hidden → URL + localStorage synced.

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `hooks/useTechFilter.ts` | Create | Custom hook: selectedTechs state, URL/localStorage persistence, stale tech cleanup |
| `components/molecules/TechFilterBar.tsx` | Create | Horizontal pill bar with Badge components, clear-all button, flex-wrap layout |
| `components/atoms/Badge.tsx` | Modify | Add optional `interactive`, `selected`, `onClick` props with conditional styling |
| `components/molecules/FeatureCard.tsx` | Modify | Accept `selectedTechs` and `onTechClick`, thread to Badge instances |
| `components/molecules/ProjectCard.tsx` | Modify | Accept and pass through `selectedTechs` and `onTechClick` |
| `components/organisms/Projects.tsx` | Modify | Integrate useTechFilter, conditional tab/filter logic, dual filter bar, empty state |
| `i18n/types.ts` | Modify | Add `filter_tech`, `clear_filters`, `no_projects_match` to `projects.actions` |
| `i18n/locales/es.ts` | Modify | Add Spanish translations for new action keys |
| `i18n/locales/en.ts` | Modify | Add English translations for new action keys |

## Detailed Props Interfaces

### hooks/useTechFilter.ts

```typescript
function useTechFilter(allTechs: string[]): {
  selectedTechs: string[];
  toggleTech: (techId: string) => void;
  clearTechs: () => void;
  hasActiveFilter: boolean;
}
```

- URL param: `?tech=react,typescript` (comma-separated)
- localStorage key: `portfolio:tech-filter`
- On mount: read URL → localStorage → empty array
- On change: `history.replaceState` + `localStorage.setItem`
- `popstate` listener syncs URL changes
- Stale cleanup: filter out tech IDs not in `allTechs`

### TechFilterBarProps

```typescript
interface TechFilterBarProps {
  allTechs: string[];
  selectedTechs: string[];
  onToggle: (techId: string) => void;
  onClear: () => void;
}
```

- Sorts techs: selected first (by selection order), then alphabetical
- "Clear all" button at start when `selectedTechs.length > 0`
- Each tech rendered as `<Badge interactive selected={isSelected} onClick={() => onToggle(id)} />`

### Badge (extended)

```typescript
interface BadgeProps {
  tech: TechConfig;
  interactive?: boolean;
  selected?: boolean;
  onClick?: () => void;
}
```

- Default behavior (no new props): identical to current
- `interactive && !selected`: cursor-pointer, no ring
- `interactive && selected`: cursor-pointer, ring-2 ring-white-off/50 ring-offset-1 ring-offset-surface
- `onClick` + interactive: `role="button"`, `onKeyDown` for Enter/Space

### FeatureCard (extended)

```typescript
interface FeatureCardProps {
  // ...existing props unchanged
  selectedTechs?: string[];
  onTechClick?: (techId: string) => void;
}
```

- When `onTechClick` is provided, Badge instances receive `interactive` + `onClick`
- `selected` state derived from `selectedTechs?.includes(techId)`

### ProjectCard (extended)

```typescript
interface ProjectCardProps {
  // ...existing props unchanged
  selectedTechs?: string[];
  onTechClick?: (techId: string) => void;
}
```

- Pure pass-through to FeatureCard

## Responsive Behavior

| Breakpoint | FilterBar | FilterPills (tabs) | Layout |
|------------|-----------|-------------------|--------|
| < 640px (sm) | Horizontal scroll, compact badges (gap-1.5, px-2) | Full width, 2-col grid | Single column cards |
| 640–1024px (md) | Flex wrap, medium badges (gap-2, px-2.5) | Full width, 2-col grid | Single column cards |
| > 1024px (lg) | Flex wrap, larger badges (gap-3, px-3.5) | Auto width, right-aligned | FeatureCard side-by-side |

- Filter bar: `flex flex-wrap gap-2 overflow-x-auto` on mobile, `flex-wrap` on desktop
- "Clear all" button: text-only on mobile, text + icon on desktop
- Bottom filter bar: same responsive treatment, hidden when ≤3 projects visible

## Edge Cases and Error Handling

1. **Empty tech stack**: Projects with `techStack: []` are never shown when any filter is active (they have no intersection with selectedTechs)
2. **Stale tech ID in URL**: If URL contains a tech ID not in `TECHNOLOGIES` config or `allTechs`, it's silently removed on mount
3. **No projects match**: Show empty state with `no_projects_match` message + clear filters button
4. **Detail page round-trip**: On navigating to `/{lang}/projects/{id}`, save selectedTechs to localStorage. On returning, read localStorage. On returning from detail, restore state.
5. **Browser back/forward**: `popstate` listener updates selectedTechs from URL params
6. **Hash navigation conflicts**: Existing `hashchange` handler for `#project-{id}` runs independently — tech filter state doesn't interfere with scroll-to-project behavior
7. **Mobile horizontal scroll**: Filter bar gets `overflow-x-auto` + `scrollbar-none` for smooth horizontal swipe

## Implementation Order

1. **i18n types + locales** — Add new keys to types.ts, es.ts, en.ts (no behavioral change)
2. **Badge.tsx** — Add optional props, keep backward compatible (no behavioral change)
3. **useTechFilter.ts** — New hook with persistence logic (testable in isolation)
4. **TechFilterBar.tsx** — New molecule, depends on Badge + hook return shape
5. **FeatureCard.tsx** — Add optional selectedTechs/onTechClick props (backward compatible)
6. **ProjectCard.tsx** — Thread props through (backward compatible)
7. **Projects.tsx** — Integrate everything: hook, filter bar, conditional tabs, empty state

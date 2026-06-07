# Design: filter-simplification

## Overview

Reduce the portfolio filter from 4 independent axes to 2 (tech + focus). The focus axis merges domain, platform, and tags into a single OR-based axis with visual subgroups. This cuts UI complexity in half while preserving all filtering power for a portfolio browsing context.

---

## Architecture Decisions

### D1: Config Structure — Flat options with subgroup metadata

**Decision**: Replace `CATEGORY_AXES` array with a single `FOCUS_AXIS` config. `FilterAxisKey` narrows to `"tech" | "focus"`. Remove `CategoryAxisKey` entirely.

**Alternatives considered**:
- *Nested subgroups as separate axes*: Keeps 4 axes under the hood. rejected — defeats the simplification goal.
- *Keep existing CATEGORY_AXES, merge only at UI layer*: Same problem. The hook and URL model would still be 4-axis.

**Rationale**: The config is the single source of truth for axis structure. Changing it here propagates cleanly to hook, URL, storage, and UI.

### D2: Focus Axis — All options in flat list, subgroup labels separate

**Decision**: The `focus` axis stores all options (domain + platform + tags) in a flat `options[]` array. Subgroup labels are carried as metadata on the axis config, not as separate axis structures.

```ts
interface FocusAxisConfig {
  key: "focus";
  urlParam: "focus";
  storageKey: "portfolio-focus-filter";
  options: CategoryOption[];        // all 13 items flat
  subgroups: SubgroupConfig[];      // visual grouping only
}

interface SubgroupConfig {
  label: string;
  optionIds: string[];              // references into options[]
}
```

**Rationale**: Filtering logic only needs a flat list of selected values matched against `project.categories.domain + platform + tags`. Subgroups are purely presentation — the FilterBar renders them as labeled sections within the Focus accordion, but the underlying data model stays simple.

### D3: URL Migration — Silent merge on read, drop on write

**Decision**: On mount, `readSelectionsFromUrl()` checks for legacy params (`domain`, `platform`, `tag`) AND the new `focus` param. All found values merge into a single `focus[]`. On write (`syncToUrl`), only `tech` and `focus` params are written — legacy params naturally disappear from the URL on next user interaction.

**Rationale**: No redirect needed. Bookmarked old URLs auto-migrate. Results broaden (OR vs AND) which is acceptable for portfolio browsing.

### D4: localStorage Migration — Merge once, delete old keys

**Decision**: On mount, check if `portfolio-focus-filter` exists. If not, read legacy keys (`portfolio-domain-filter`, `portfolio-platform-filter`, `portfolio-tag-filter`), merge values, write to new key, delete old keys. One-time operation per visitor.

**Rationale**: Clean migration with no leftover state. The delete ensures no stale data accumulates.

### D5: Filter Logic — AND across axes, OR within focus

**Decision**: For the `focus` axis, check if the project matches ANY of the selected focus values across `categories.domain`, `categories.platform`, and `categories.tags`. For `tech`, check if any selected tech matches `techStack + ecosystem.techStack`. Axes combine with AND.

**Alternatives considered**:
- *OR between tech and focus*: Too loose — "react OR health" would show non-React health projects. AND is correct.

**Rationale**: Matches the spec requirement and preserves meaningful filtering: "show me React projects in Health" works correctly.

### D6: Active Chips — No axis prefix

**Decision**: Chips show only the option name (e.g., "Health"), not "Focus: Health". The axis context is implicit from the filter section structure.

**Rationale**: With only 2 axes, the prefix adds noise without value. The existing chip design already uses color/icon to distinguish options.

---

## Data Flow

```
User clicks chip → toggle("focus", "health")
  ↓
useProjectFilter updates selections: { tech: [], focus: ["health"] }
  ↓
syncToUrl writes: ?focus=health
syncToStorage writes: portfolio-focus-filter = ["health"]
  ↓
Projects.tsx recomputes filteredProjects:
  - focus axis: project.categories.domain.includes("health")
                 || project.categories.platform.includes("health")
                 || project.categories.tags.includes("health")
  - tech axis: (empty, no constraint)
  → Result: all projects where any category contains "health"
```

**Legacy URL flow**:
```
Page loads with ?domain=health&platform=web
  ↓
readSelectionsFromUrl():
  - reads "focus" param → null
  - reads legacy "domain" param → ["health"]
  - reads legacy "platform" param → ["web"]
  - merges → focus: ["health", "web"]
  ↓
syncToUrl writes: ?focus=health,web (legacy params dropped)
```

---

## File Change Map

### 1. `config/categories.tsx`

**Remove**: `CATEGORY_AXES`, `CategoryAxisKey`, `CategoryAxis` interface.
**Change**: `FilterAxisKey` → `"tech" | "focus"`. Add `SubgroupConfig`, `FocusAxisConfig`.
**Add**: `FOCUS_AXIS` constant with all options flat + subgroup metadata.

Key changes:
- Type: `FilterAxisKey = "tech" | "focus"`
- Remove: `CategoryAxisKey`, `CATEGORY_AXES`
- Add: `SubgroupConfig { label: string; optionIds: string[] }`
- Add: `FOCUS_AXIS: FocusAxisConfig` with 13 options + 2 subgroups

### 2. `hooks/useProjectFilter.ts`

**Change**: `DEFAULT_AXES` from 4 entries to 2. `SelectionState` from `Record<FilterAxisKey, string[]>` (4 keys) to 2 keys.
**Add**: Legacy URL param migration in `readSelectionsFromUrl()`. Legacy localStorage migration in `readSelectionsFromStorage()`.
**Remove**: None.

Key changes:
- `DEFAULT_AXES`: 2 entries (tech + focus)
- `createEmptySelections()`: returns `{ tech: [], focus: [] }`
- `readSelectionsFromUrl()`: also reads `domain`, `platform`, `tag` params, merges into `focus`
- `readSelectionsFromStorage()`: checks legacy keys, merges into `portfolio-focus-filter`, deletes old keys
- `syncToUrl()`: only writes `tech` and `focus` params

### 3. `components/molecules/FilterBar.tsx`

**Change**: `FilterAxisConfig` interface gains optional `subgroups?: SubgroupConfig[]`.
**Add**: Subgroup rendering within `Section` component — when subgroups exist, render labeled groups of chips instead of a flat grid.
**Remove**: None.

Key changes:
- `FilterAxisConfig` interface: add `subgroups?: { label: string; optionIds: string[] }[]`
- `Section` component: if `axis.subgroups` exists, render each subgroup with a label header + its chips
- `ActiveChips`: remove axis label prefix from chip display (show only option name)

### 4. `components/organisms/Projects.tsx`

**Change**: Build `allValues` for 2 keys instead of 4. Build `filterAxes` with 2 axes. `filterSelections` maps to 2 keys. Filter logic checks merged categories for focus.
**Remove**: `allDomains`, `allPlatforms`, `allTags` as separate `useMemo` — replace with single `allFocusOptions` that collects unique IDs from domain + platform + tags across all projects.

Key changes:
- `allFocusOptions`: merged set of unique domain + platform + tag IDs from all projects
- `allValues`: `{ tech: allTechs, focus: allFocusOptions }`
- `filterAxes`: 2 axes — tech + focus (from `FOCUS_AXIS` config)
- `filterSelections`: `{ tech: selections.tech, focus: selections.focus }`
- `filterLabels`: `{ tech: filter_tech, focus: filter_focus }`
- `filteredProjects`: for `focus` axis, check `project.categories.domain + platform + tags` with OR; for `tech`, same as before

### 5. `i18n/types.ts`

**Change**: `Dictionary.filters` from `{ domain, platform, tags }` to `{ focus: Record<string, string> }`. Add `filter_focus` to `projects.actions`.
**Remove**: `filter_domain`, `filter_platform`, `filter_tags` from `projects.actions`.

Key changes:
- `Dictionary.projects.actions`: remove `filter_domain`, `filter_platform`, `filter_tags`; add `filter_focus`
- `Dictionary.filters`: replace `{ domain, platform, tags }` with `{ focus: Record<string, string> }` containing all 13 option labels

### 6. `i18n/locales/en.ts`

**Change**: Replace `filter_domain`, `filter_platform`, `filter_tags` with `filter_focus: "Focus"`. Replace `filters.domain`, `filters.platform`, `filters.tags` with `filters.focus` containing all 13 options.

### 7. `i18n/locales/es.ts`

**Change**: Same structure as en.ts. `filter_focus: "Enfoque"`. `filters.focus` with Spanish translations for all 13 options.

---

## Verification Strategy

1. **URL migration**: Load with `?domain=health&platform=web` → verify focus shows "health" and "web" selected
2. **localStorage migration**: Set legacy keys manually → reload → verify new key populated, old keys deleted
3. **Filter logic**: Select tech=react AND focus=health → verify only React+Health projects show
4. **OR within focus**: Select focus=health AND focus=web → verify projects matching EITHER show
5. **Clear behavior**: Clear tech → focus remains. Clear all → both empty
6. **Chip display**: Verify chips show option name only, no axis prefix
7. **Subgroup rendering**: Focus section shows "Industry / Vertical" and "Platform" subgroups with correct chips

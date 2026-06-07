# Tasks: filter-simplification

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~200 |
| 800-line budget risk | Low |
| Chained PRs recommended | No |
| Delivery strategy | single-pr (direct commits) |
| Chain strategy | size-exception |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: size-exception
400-line budget risk: Low

## Phase 1: Types & Config

- [x] 1.1 Narrow `FilterAxisKey` to `"tech" | "focus"`; remove `CategoryAxisKey`, `CategoryAxis` in `config/categories.tsx`
- [x] 1.2 Add `SubgroupConfig` interface + `FOCUS_AXIS` constant with 13 options in 2 subgroups (Industry/Vertical, Platform)
- [x] 1.3 Update `i18n/types.ts`: replace `filter_domain/platform/tags` with `filter_focus`; restructure `filters` to `{ focus: Record<string, string> }`

## Phase 2: Hook Migration

- [x] 2.1 Reduce `useProjectFilter`: `DEFAULT_AXES` to 2, `SelectionState` to `{ tech, focus }`
- [x] 2.2 Add legacy URL param migration in `readSelectionsFromUrl()` (domain → focus, platform → focus, tag → focus)
- [x] 2.3 Add legacy localStorage migration in `readSelectionsFromStorage()` (merge old keys, delete after migration)
- [x] 2.4 Update `syncToUrl()` and `syncToStorage()` to only write `tech` + `focus`

## Phase 3: FilterBar UI

- [x] 3.1 Add `subgroups` support to `FilterAxisConfig` interface in `FilterBar.tsx`
- [x] 3.2 Render subgroups within Focus accordion section (labeled groups)
- [x] 3.3 Remove axis prefix from active chips (no more "Focus: health", just "health")

## Phase 4: Project Integration

- [x] 4.1 Build `allFocusOptions` and `allValues` for 2 axes in `Projects.tsx`
- [x] 4.2 Update `filteredProjects` logic: focus axis checks OR across `categories.domain + platform + tags`
- [x] 4.3 Update `filterAxes`, `filterSelections`, `filterLabels` to 2-axis model

## Phase 5: Locales & Cleanup

- [x] 5.1 Update `i18n/locales/en.ts` with `filter_focus` label and new `filters.focus` structure
- [x] 5.2 Update `i18n/locales/es.ts` with same structure, Spanish translations
- [x] 5.3 Verify build passes (`npm run build` or equivalent)

## Phase 6: Manual Verification

- [x] 6.1 Load with legacy URL `?domain=health&platform=web` → verify migration and correct results
- [x] 6.2 Select tech + focus filters → verify AND logic between axes, OR logic within focus
- [x] 6.3 Clear filters → verify state resets completely
- [x] 6.4 Verify subgroup rendering in Focus section

# Tasks: Tech Filter Implementation

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 250-350 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | Single PR |
| Delivery strategy | auto-chain |
| Chain strategy | pending |
Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: pending
400-line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Implement tech filter feature | PR 1 | All changes in one PR |

## Phase 1: Foundation

- [x] 1.1 Create `hooks/useTechFilter.ts` with filter state management logic (URL params, localStorage, toggle, clear, hasActiveFilter)
- [x] 1.2 Modify `components/atoms/Badge.tsx` to add interactive, selected, and onClick props with conditional styling

## Phase 2: New Component and Integration

- [x] 2.1 Create `components/molecules/TechFilterBar.tsx` component with props for allTechs, selectedTechs, onToggle, onClear
- [x] 2.2 Modify `components/organisms/Projects.tsx` to:
    - Collect allTechs from dict.projects.items (memoized)
    - Use useTechFilter hook with allTechs
    - Implement filter logic: show all projects when no active filter, filter by OR when active
    - Hide tabs when filter active
    - Show TechFilterBar above project list (always)
    - Show TechFilterBar below when filtered projects length > 3
    - Pass selectedTechs and onTechClick to ProjectCard
    - Handle empty state with "no projects match" message

## Phase 3: Propagate Filter State

- [x] 3.1 Modify `components/molecules/ProjectCard.tsx` to pass through selectedTechs and onTechClick props to FeatureCard
- [x] 3.2 Modify `components/molecules/FeatureCard.tsx` to:
    - Accept selectedTechs and onTechClick props
    - Pass them to Badge components as interactive, selected, and onClick

## Phase 4: Internationalization

- [x] 4.1 Update `i18n/types.ts` to add filter_tech, clear_filters, and no_projects_match strings to actions interface
- [x] 4.2 Update `i18n/locales/es.ts` with Spanish translations for the new action strings
- [x] 4.3 Update `i18n/locales/en.ts` with English translations for the new action strings

## Phase 5: UX Refinements

- [x] 5.1 Add toggle button for filter bar visibility (hidden by default, auto-shows on badge click)
- [x] 5.2 Fix badge opacity logic (only dim when hasActiveFilter is true)
- [x] 5.3 Accessibility contrast audit for filter bar label and badge opacity

## Phase 6: Visual Polish

- [x] 6.1 Switch badge selection indicator from ring to filled/outlined pattern with check icon

## Phase 7: Fixes

- [x] 7.1 Pass hasActiveFilter to TechFilterBar and Badge instances
- [x] 7.2 Adjust outlined badge border color for dark tech colors (lighten when needed)
- [x] 7.3 Fix outlined badge text/icon contrast in light mode (use text-body/60)

## Phase 8: Final Polish

- [x] 8.1 Add "Clear filters" button to empty state for better UX
- [x] 8.2 Add horizontal scroll for filter bar on mobile (flex-nowrap + overflow-x-auto)

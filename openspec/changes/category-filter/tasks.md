# Tasks: Multi-Axis Category Filter

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 350-450 |
| 400-line budget risk | Medium |
| Chained PRs recommended | Yes |
| Suggested split | Single PR with size exception |
| Delivery strategy | ask-on-risk |
| Decision needed before apply: | Yes |
| Chained PRs recommended: | Yes |
| Chain strategy: | size-exception |
| 400-line budget risk: | Medium |

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Foundation: types, hook, category config | PR 1 | Base branch; tests included |
| 2 | Core: FilterBar component, Projects integration | PR 2 | Depends on PR 1 |
| 3 | Data: Add categories to all projects, i18n updates | PR 3 | Independent but depends on types |
| 4 | Testing & verification | PR 4 | Verification of all previous work |

## Phase 1: Foundation / Infrastructure

- [ ] 1.1 Create `config/categories.tsx` with Domain, Platform, and Tags axis configs
- [ ] 1.2 Create `hooks/useProjectFilter.ts` replacing `useTechFilter` with multi-axis logic
- [ ] 1.3 Add `ProjectCategories` interface and update `ProjectItem` in `i18n/types.ts`
- [ ] 1.4 Delete `hooks/useTechFilter.ts`
- [ ] 1.5 Delete `components/molecules/TechFilterBar.tsx`

## Phase 2: Core Implementation

- [ ] 2.1 Create `components/molecules/FilterBar.tsx` as compound component with ActiveChips and Section subcomponents
- [ ] 2.2 Modify `components/organisms/Projects.tsx` to use `useProjectFilter` and `FilterBar`
- [ ] 2.3 Implement filter predicate logic in Projects.tsx with AND-between-axes, OR-within-axis
- [ ] 2.4 Add URL parameter sync and localStorage persistence for all four axes

## Phase 3: Data Integration / Wiring

- [ ] 3.1 Add `categories` data to all 8 project modules:
    - i18n/modules/projects/coppelnexus.ts
    - i18n/modules/projects/azkali.ts
    - i18n/modules/projects/7dcompass.ts
    - i18n/modules/projects/iapex.ts
    - i18n/modules/projects/flacks.ts
    - i18n/modules/projects/dabetai.ts
    - i18n/modules/projects/puntofiel.ts
    - i18n/modules/projects/mtrpa.ts
- [ ] 3.2 Add filter section labels to `Dictionary.projects.actions` in i18n/types.ts
- [ ] 3.3 Add translation strings for new filter axes in `i18n/locales/en.ts`
- [ ] 3.4 Add translation strings for new filter axes in `i18n/locales/es.ts`

## Phase 4: Testing / Verification

- [ ] 4.1 Write unit tests for `useProjectFilter` hook covering:
    - Toggle values on single axis
    - Combine multiple axes
    - Multiple values within one axis
    - URL parameter sync on mount
    - Browser back/forward navigation
    - localStorage persistence
    - Clear per-axis and clear all functionality
- [ ] 4.2 Write unit tests for `FilterBar` component:
    - Accordion expand/collapse sections
    - Section count badge display
    - Active filter chips rendering
    - Chip removal functionality
    - Clear button per axis
    - Clear all filters control
- [ ] 4.3 Integration test: Projects component filtering by single axis, multi-axis, and clear all
- [ ] 4.4 E2E test: URL params update correctly when toggling filters and persist on reload
- [ ] 4.5 Verify backward compatibility: existing tech-only filter flow still works
- [ ] 4.6 Verify success criteria:
    - 4-axis filter works: tech, domain, platform, tags
    - Active chips appear for all axes, removable individually
    - URL params sync for all axes, bookmarkable
    - All 8 projects have category data
    - No regression in existing tech-only filter flow

## Implementation Order

1. Start with Phase 1 to establish types, hook, and core infrastructure
2. Proceed to Phase 2 to build the FilterBar UI and integrate with Projects
3. Complete Phase 3 to add data to projects and update i18n
4. Finish with Phase 4 for comprehensive testing and verification

The FilterBar component and useProjectFilter hook are the most complex parts and should be implemented early to uncover any design issues. Adding categories to projects is repetitive but straightforward and can be done in parallel with i18n updates.
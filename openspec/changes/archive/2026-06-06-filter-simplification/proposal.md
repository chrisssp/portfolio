# Proposal: filter-simplification

## Intent

The portfolio currently exposes 4 independent filter axes (tech, domain, platform, tags). Users must scan 4 accordion sections and understand which dimension each belongs to. For a portfolio browsing experience, this is over-engineered — most visitors don't think in "domain vs platform vs tags." Consolidating to 2 axes (tech + focus) reduces cognitive load while keeping the same filtering power.

## Scope

### In Scope
- Collapse domain, platform, tags into a single `focus` axis with visual subgroups ("Industry / Vertical" and "Platform")
- Update `FilterAxisKey` type from 4 values to 2 (`"tech" | "focus"`)
- Legacy URL param migration: `domain`, `platform`, `tag` silently merge into `focus` on read
- Legacy localStorage migration: old keys merge into `portfolio-focus-filter`
- Update FilterBar to render subgroups within the Focus section
- Update i18n types and locale files for the new axis structure
- Update filter logic in Projects organism to check merged categories

### Out of Scope
- Project data files (`i18n/modules/projects/*.ts`) — categories structure stays as-is
- Adding tests (none exist today, not in this change)
- PR workflow — direct commits to main

## Capabilities

### Modified Capabilities
- `project-filter`: Requirements change from 4-axis AND model to 2-axis model (tech OR focus). URL param keys change. localStorage keys change. Filter logic shifts from AND-between-categories to OR-within-focus.

## Approach

1. **config/categories.tsx**: Replace `CATEGORY_AXES` array with `FOCUS_AXIS` config containing subgroups. Change `FilterAxisKey` to `"tech" | "focus"`.
2. **hooks/useProjectFilter.ts**: Reduce `DEFAULT_AXES` to 2 entries. Add legacy URL/storage migration in read functions. Update `SelectionState` type.
3. **components/molecules/FilterBar.tsx**: Render subgroup labels within the Focus accordion section.
4. **components/organisms/Projects.tsx**: Build focus axis options by merging domain+platform+tags. Filter logic: for `focus`, check `project.categories.domain + platform + tags`.
5. **i18n/types.ts + locales**: Add `filter_focus` label, restructure `filters` object for subgroups.

## Affected Areas

| Area | Impact | Description |
|------|--------|------------|
| `config/categories.tsx` | Modified | Replace 3 category axes with 1 focus axis config |
| `hooks/useProjectFilter.ts` | Modified | 2-axis model, legacy migration |
| `components/molecules/FilterBar.tsx` | Modified | Subgroup rendering |
| `components/organisms/Projects.tsx` | Modified | Merged filter logic |
| `i18n/types.ts` | Modified | New filter label types |
| `i18n/locales/en.ts` | Modified | English focus labels |
| `i18n/locales/es.ts` | Modified | Spanish focus labels |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Semantic change: AND→OR between categories broadens results | Medium | Documented decision; acceptable for portfolio browsing |
| Legacy bookmarks show different results after auto-migration | Low | Results broaden, never narrow; acceptable tradeoff |
| No test suite — manual verification only | Medium | Thorough manual testing across filter combinations |
| Subgroup UI in FilterBar requires careful visual treatment | Low | Follow existing accordion design language |

## Rollback Plan

Revert the commit. No data migration occurs — URL and localStorage writes are idempotent. Old params are never deleted from URL on read, only not written. Reverting restores the 4-axis behavior immediately.

## Dependencies

None.

## Success Criteria

- [ ] FilterBar shows 2 sections: Tecnología and Focus
- [ ] Focus section displays "Industry / Vertical" and "Platform" subgroups
- [ ] `?domain=health&platform=web` auto-migrates to `?focus=health,web`
- [ ] Legacy localStorage keys merge into new key on first load
- [ ] All existing filter combinations still produce correct project subsets
- [ ] No regressions in filter chip display or clear-all behavior

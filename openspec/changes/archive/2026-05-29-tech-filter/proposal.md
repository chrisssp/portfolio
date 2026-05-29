# Proposal: Technology Filtering for Projects Section

## Intent

Visitors to the portfolio currently can't filter projects by technology. When someone wants to see "only React projects" or "all Python projects," they must scroll through all items. This limits discoverability and makes the portfolio less useful as a tech-specific showcase.

Adding tech filtering lets visitors instantly narrow projects by the technologies they care about, making the portfolio more scannable and useful for recruiters, collaborators, and hiring managers evaluating specific tech skills.

## Scope

### In Scope
- `TechFilterBar` component — horizontal scrollable pill bar with all techs used across projects
- `selectedTechs` state (Set<string>) managed in `Projects.tsx`
- Clicking a tech badge on a `ProjectCard` toggles that tech as a filter (additive OR)
- Clicking a pill in the `TechFilterBar` does the same
- Selected techs visually highlighted in both the filter bar AND card badges
- "Clear all" button when ≥1 tech is selected
- Tech filter overrides Featured/Others tabs — tabs hidden when techs active, all matching projects shown
- When no techs active, tabs resume normal behavior
- Persistence via URL search params (`?tech=react,typescript`) + localStorage fallback for detail page round-trip
- Dual filter bar placement (top + bottom) only when >3 projects shown
- Responsive at all breakpoints

### Out of Scope
- Ecosystem filtering (separate feature)
- Multi-select AND logic (OR only for this phase)
- Filter by project category or date range
- Search/text input filtering
- Animated filter transitions beyond existing fade-up

## Capabilities

### New Capabilities
- `tech-filter-bar`: Horizontal scrollable pill bar component with tech selection, clear-all, and active state styling
- `tech-filter-state`: State management hook for selectedTechs, persistence (URL params + localStorage), and filter logic
- `tech-filter-badges`: Interactive badge behavior in ProjectCard — click to toggle filter, visual selected state

### Modified Capabilities
- `projects-section`: Projects.tsx gains tech filter state, conditional tab visibility, dual filter bar placement, and updated project filtering logic

## Approach

**State Management**: Extract `useTechFilter` custom hook into `hooks/useTechFilter.ts`. Manages `selectedTechs` as `Set<string>`, syncs to URL search params on client, reads localStorage for detail-page round-trips.

**Filter Logic**: Single `useMemo` in Projects.tsx replaces current one — when `selectedTechs.size > 0`, filter `dict.projects.items` where `project.techStack` intersects `selectedTechs` (OR). When empty, fall back to featured/others tab logic.

**Component Architecture**:
- `TechFilterBar` (new molecule): receives available techs, selected set, onToggle callback, onClear callback. Renders horizontal scrollable row of `Badge`-style pills.
- `Badge` (atom modification): add optional `selected` and `onClick` props. When selected, add ring/highlight. When onClick provided, add cursor-pointer.
- `Projects.tsx` (organism): add `TechFilterBar` above and conditionally below project list. Conditionally hide `FilterPills` when techs active.

**Persistence Flow**:
1. On mount, read `?tech=` from URL. If present, populate state.
2. On tech toggle, update URL params via `history.replaceState`.
3. Before navigating to detail page, save selectedTechs to localStorage.
4. On return from detail, check localStorage and restore state.

**Affected Areas**:

| Area | Impact | Description |
|------|--------|-------------|
| `components/organisms/Projects.tsx` | Modified | Add tech filter state, dual filter bar, conditional tabs |
| `components/molecules/FeatureCard.tsx` | Modified | Pass selectedTechs and onTechClick to Badge |
| `components/molecules/ProjectCard.tsx` | Modified | Thread selectedTechs and onTechClick through |
| `components/atoms/Badge.tsx` | Modified | Add selected/onClick props, visual selected state |
| `hooks/useTechFilter.ts` | New | Custom hook for filter state + persistence |
| `components/molecules/TechFilterBar.tsx` | New | Horizontal pill bar component |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| URL params get long with many techs | Low | Max ~30 techs, URL still manageable. Could compress to abbreviations if needed. |
| localStorage stale after code deploy | Low | Clear localStorage on version mismatch (check git SHA or build hash) |
| Badge click conflicts with navigation | Med | Stop propagation on badge click, prevent default. Badge onClick is separate from Link wrapping ProjectCard. |
| Filter state lost on hard refresh without URL params | Low | localStorage is fallback; URL params are primary. Both must be populated. |

## Rollback Plan

1. Remove `TechFilterBar` component and `useTechFilter` hook
2. Restore `Badge.tsx` to original (remove selected/onClick props)
3. Revert `Projects.tsx` to original filter logic (featured/others only)
4. Revert `FeatureCard.tsx` and `ProjectCard.tsx` to original (remove tech click threading)
5. Remove localStorage reads on project detail page
6. All changes are additive — no existing behavior is modified, only extended

## Dependencies

- Existing `TECHNOLOGIES` config (30+ entries) — no changes needed
- Existing `Badge` component — extends with optional props (backward compatible)
- Existing `ProjectItem.techStack` array — already provides tech IDs needed for filtering

## Success Criteria

- [ ] Clicking a tech badge on a card filters to all projects using that tech
- [ ] TechFilterBar appears above project list, pills match card badges
- [ ] Selected techs highlighted in both filter bar and card badges
- [ ] "Clear all" button removes all tech filters in one click
- [ ] Tabs (Featured/Others) hidden when tech filter active, visible when inactive
- [ ] Navigating to project detail and back preserves tech filter state
- [ ] Works correctly at mobile, tablet, and desktop breakpoints
- [ ] Bottom filter bar only shown when >3 projects displayed

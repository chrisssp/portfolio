# Proposal: Multi-Axis Category Filter

## Intent

The project section currently only filters by technology (techStack). Users need to filter by **domain** (health, fintech), **platform** (web, mobile), and **vertical tags** (ai-ml, hackathon) to find relevant projects faster — e.g., "show me all mobile health projects using React."

## Scope

### In Scope
- Extend `ProjectItem` data model with `categories: { domain: string[]; platform: string[]; tags: string[] }`
- Create `config/categories.tsx` defining category labels, icons, and colors for each axis
- Generalize `useTechFilter` → `useProjectFilter` (multi-axis hook)
- Build accordion filter UI with collapsible sections + removable active chips
- Add category data to all 8 project modules
- Update URL scheme: `?tech=react,typescript&domain=health&platform=mobile&tag=hackathon`
- i18n labels for new filter axes (sections: Tecnología, Dominio, Plataforma, Vertical)
- Keep current tech filter behavior intact (becomes one accordion section)

### Out of Scope
- No category badges on project cards (techStack badges only)
- No changes to project detail pages or card layout
- No backend/API changes

## Capabilities

### Modified Capabilities
- `project-filter`: Extend from single-axis (tech) to multi-axis filtering (tech + domain + platform + tags). UI changes from flat chip bar to collapsible accordion with active chips.

## Approach

Generalize the existing `useTechFilter` pattern: single hook manages all axes, each axis has its own URL param and localStorage key. Accordion sections collapse independently; active selections render as chips above. Different axes combine with AND logic; values within one axis combine with OR.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `i18n/types.ts` | Modified | Add `categories` to `ProjectItem` |
| `hooks/useTechFilter.ts` | Modified | Generalize → `useProjectFilter` multi-axis |
| `components/molecules/TechFilterBar.tsx` | Modified | Expand → accordion with collapsible sections + chips |
| `config/categories.tsx` | New | Category definitions (domain, platform, tags) |
| `i18n/modules/projects/*.ts` (×8) | Modified | Add category arrays to each project |
| `i18n/locales/es.ts`, `en.ts` | Modified | Add i18n labels for new sections |
| `components/organisms/Projects.tsx` | Modified | Use new multi-axis filter hook |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| URL param breaking bookmarked shared links | Low | Old `?tech=` param stays; new params additive |
| Filter state complexity (4 axes × N values) | Medium | Keep each axis independent; same toggle/clear UX |

## Rollback Plan

Revert `useTechFilter.ts` to original single-axis implementation. Remove `categories` from project data. Remove accordion UI, restore `TechFilterBar`. Old URL params remain compatible.

## Dependencies

- None

## Success Criteria

- [ ] 4-axis filter works: tech, domain, platform, tags
- [ ] Active chips appear for all axes, removable individually
- [ ] URL params sync for all axes, bookmarkable
- [ ] All 8 projects have category data
- [ ] No regression in existing tech-only filter flow

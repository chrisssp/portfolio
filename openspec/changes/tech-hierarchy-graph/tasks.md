# Tasks: Tech Hierarchy Graph

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~110–160 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | Single direct commit |
| Delivery strategy | single-pr |
| Chain strategy | size-exception |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: size-exception
400-line budget risk: Low

## Phase 1: Hierarchy Definition

- [x] 1.1 Add `TECH_PARENTS` static record to `config/technologies.tsx` mapping each tech to its implied parents (angular→typescript, reactnative→react+typescript, etc.)
- [x] 1.2 Create `lib/tech-hierarchy.ts` with `expandTechStack(techStack: string[]): string[]` using BFS traversal and `getEcosystemTechs()` for aggregating sub-item techs

## Phase 2: Filter Integration

- [x] 2.1 In `components/organisms/Projects.tsx` — modify `allTechs` to aggregate techs from both `project.techStack` AND `project.ecosystem.items[].techStack`
- [x] 2.2 In `components/organisms/Projects.tsx` — modify `filteredProjects` matching logic to use `expandTechStack(project.techStack)` instead of raw `project.techStack.some()`

## Phase 3: Verification

- [x] 3.1 Verify `npm run build` succeeds with no TS errors
- [x] 3.2 Manual check: filter by `typescript` shows Angular/React/NestJS projects
- [x] 3.3 Manual check: filter by `astro` shows dabetai (ecosystem tech)
- [x] 3.4 Manual check: existing filters (domain, platform, tags) still work

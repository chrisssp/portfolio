# Proposal: Tech Hierarchy Graph

## Intent

Project filtering shows ALL technologies as badges and matches by literal `techStack` entries only. This creates three problems:

1. **Redundant badges**: Angular implies TypeScript, React Native implies React + TypeScript, Supabase implies PostgreSQL. Showing both parent and child is visual noise.
2. **Missing matches**: Filtering by "TypeScript" misses Angular/NestJS/Next.js projects that don't list TypeScript explicitly.
3. **Hidden techs**: Technologies only in ecosystem sub-items (e.g., Astro in dabetai's landing page) don't appear as filterable options.

## Scope

### In Scope
- `TECH_PARENTS` record in `config/technologies.tsx` mapping tech → implied techs
- `expandTechStack()` utility that traverses the graph to collect all implied techs
- `allTechs` aggregation that includes ecosystem sub-item techStacks
- Modified filtering logic in `Projects.tsx` to match using expanded tech stacks

### Out of Scope
- Visual badge deduplication (hiding parent badges when child is shown) — future work
- Recursive depth limits or cycle detection (graph is acyclic by design)
- Changes to filter UI, URL params, or localStorage behavior

## Capabilities

### New Capabilities
- `tech-hierarchy`: Tech implication graph definition and graph traversal utility (`TECH_PARENTS`, `expandTechStack()`)

### Modified Capabilities
- `project-filter`: Tech filtering uses expanded stacks; `allTechs` aggregates ecosystem sub-item techs

## Approach

1. Add `TECH_PARENTS` in `config/technologies.tsx`:
   ```ts
   export const TECH_PARENTS: Record<string, string[]> = {
     angular: ['typescript'],
     reactnative: ['react', 'typescript'],
     nextjs: ['react', 'nodejs'],
     nestjs: ['typescript', 'nodejs'],
     supabase: ['postgresql'],
     springboot: ['java'],
     express: ['nodejs'],
     expo: ['reactnative'],
     // ...
   };
   ```

2. Add `expandTechStack(techs: string[]): string[]` — BFS traversal of `TECH_PARENTS`, returns deduplicated set of all direct + implied techs.

3. Modify `allTechs` in `Projects.tsx` to also collect techs from `project.ecosystem[].techStack`.

4. Modify `filteredProjects` matching: for `axis === "tech"`, compare `selected` against `expandTechStack(project.techStack)` instead of literal `project.techStack`.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `config/technologies.tsx` | Modified | Add `TECH_PARENTS` record and import `expandTechStack` |
| `components/organisms/Projects.tsx` | Modified | Use expanded stacks for `allTechs` and filtering |
| New: `lib/tech-hierarchy.ts` | New | `expandTechStack()` utility function |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Graph misses an implication | Low | Graph is static, manually curated; easy to extend |
| Performance on large project lists | Low | BFS on small graph (~30 nodes), memoized per project |
| Breaking existing filter behavior | Low | Expanded stack is a superset; literal matches still work |

## Rollback Plan

Remove `TECH_PARENTS` from `config/technologies.tsx`, delete `lib/tech-hierarchy.ts`, revert `Projects.tsx` `allTechs` and `filteredProjects` to literal matching.

## Dependencies

None.

## Success Criteria

- [ ] Filtering by "TypeScript" shows Angular, NestJS, Next.js, React Native projects
- [ ] Filtering by "Astro" shows dabetai (from ecosystem sub-item)
- [ ] `allTechs` includes techs from ecosystem sub-items
- [ ] Existing literal-matching filters still work (no regressions)

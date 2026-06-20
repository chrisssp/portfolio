# Design: Tech Hierarchy Graph

## Technical Approach

Add a static tech implication graph (`TECH_PARENTS`) and a BFS traversal utility (`expandTechStack()`) to enable semantic tech filtering. When a user filters by "TypeScript", projects using Angular, NestJS, or Next.js match because those technologies imply TypeScript in the graph. The `allTechs` aggregation also includes techs from ecosystem sub-items so they appear as filter options.

## Architecture Decisions

### Decision: Static `Record<string, string[]>` for the graph

| Option | Tradeoff | Decision |
|--------|----------|----------|
| Static Record in config | Simple, no runtime overhead, easy to extend. Graph is ~30 nodes, manually curated. | **Chosen** |
| Separate JSON/YAML file | Extra import complexity, same result | Rejected |
| Class-based graph object | Overkill for a small acyclic graph | Rejected |

**Rationale**: The graph is small, acyclic by design, and changes infrequently. A plain Record keeps the mental model simple and colocated with `TECHNICLOGIES`.

### Decision: BFS traversal (iterative, not recursive)

| Option | Tradeoff | Decision |
|--------|----------|----------|
| BFS (iterative queue) | Predictable stack, easy to reason about, natural dedup via visited set | **Chosen** |
| DFS (recursive) | Simpler code but risk of stack overflow on deep chains (expo→reactnative→react→typescript) | Rejected |
| Graph library (e.g., graphlib) | Overkill for ~30 nodes, adds dependency | Rejected |

**Rationale**: BFS is the right tool for "collect all reachable nodes." The graph is small enough that performance is identical either way, but BFS avoids any recursion concerns and the visited set naturally prevents duplicates.

### Decision: Modify `filteredProjects` in Projects.tsx (not useProjectFilter hook)

| Option | Tradeoff | Decision |
|--------|----------|----------|
| Modify filter matching in Projects.tsx | Keeps hook generic; matching logic is project-specific | **Chosen** |
| Add expand logic inside useProjectFilter | Couples hook to tech hierarchy concept; hook is generic URL/storage sync | Rejected |
| Create a new filteredProjects hook | Extra abstraction for a single use case | Rejected |

**Rationale**: `useProjectFilter` is a generic state-sync hook (URL ↔ localStorage ↔ React state). The tech-specific matching logic belongs in the component that understands project data.

## Data Flow

```
config/technologies.tsx          lib/tech-hierarchy.ts
  TECH_PARENTS ──────────────→ expandTechStack()
       │                              │
       ▼                              ▼
Projects.tsx                   Projects.tsx
  allTechs: ──collect from──→ allTechs: ──expand each──→ filter options
  project.techStack            project.techStack +         (includes implied)
                               ecosystem[].techStack

  filteredProjects: ──expand──→ expandedStack = expandTechStack(project.techStack)
  axis === "tech"               selected.some(s => expandedStack.includes(s))
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `lib/tech-hierarchy.ts` | **Create** | `expandTechStack()` BFS utility |
| `config/technologies.tsx` | **Modify** | Add `TECH_PARENTS` record (~20 entries) |
| `components/organisms/Projects.tsx` | **Modify** | Expand `allTechs` to include ecosystem techs; modify `filteredProjects` tech matching to use `expandTechStack()` |

No changes to: `FeatureCard.tsx`, `useProjectFilter.ts`, `i18n/types.ts`.

## Interfaces / Contracts

```ts
// lib/tech-hierarchy.ts
import { TECH_PARENTS } from "@/config/technologies";

export function expandTechStack(techs: string[]): string[] {
  const visited = new Set<string>();
  const queue = [...techs];

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (visited.has(current)) continue;
    visited.add(current);

    const parents = TECH_PARENTS[current];
    if (parents) {
      for (const parent of parents) {
        if (!visited.has(parent)) queue.push(parent);
      }
    }
  }

  return Array.from(visited);
}
```

```ts
// config/technologies.tsx — new export
export const TECH_PARENTS: Record<string, string[]> = {
  angular: ["typescript"],
  "angular-material": ["angular"],
  reactnative: ["react", "typescript"],
  nextjs: ["react", "nodejs"],
  nestjs: ["typescript", "nodejs"],
  supabase: ["postgresql"],
  springboot: ["java"],
  express: ["nodejs"],
  expo: ["reactnative"],
  ionic: ["typescript"],
  capacitor: ["typescript"],
  django: ["python"],
  fastapi: ["python"],
  scikitlearn: ["python"],
  xgboost: ["python"],
  prisma: ["postgresql"],
  gluestack: ["reactnative"],
};
```

Key changes in `Projects.tsx`:

```ts
// allTechs — collect from ecosystem sub-items too
const allTechs = useMemo(() => {
  const techSet = new Set<string>();
  for (const project of dict.projects.items) {
    for (const tech of project.techStack) techSet.add(tech);
    for (const item of project.ecosystem?.items ?? []) {
      for (const tech of item.techStack) techSet.add(tech);
    }
  }
  return Array.from(techSet).sort();
}, [dict.projects.items]);

// filteredProjects — tech axis uses expanded stack
if (axis === "tech") {
  const expanded = expandTechStack(project.techStack);
  return selected.some((tech) => expanded.includes(tech));
}
```

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit | `expandTechStack()` returns correct implied techs, handles unknown keys, deduplicates | Manual verification with known inputs (angular→typescript, expo→reactnative→react→typescript) |
| Integration | `allTechs` includes ecosystem techs; filter by "TypeScript" shows Angular projects | Manual browser testing against real project data |
| E2E | Filter regression — existing literal matches still work | Manual: verify featured/all tabs, filter toggle, URL param sync |

No automated test infrastructure exists in this project; testing is manual.

## Migration / Rollout

No migration required. The `TECH_PARENTS` graph is additive — existing filter behavior is preserved because expanded stacks are supersets of literal stacks. If the graph is wrong, filtering still works (just misses implied matches).

## Open Questions

- [ ] Should `gluestack` imply `react` in addition to `reactnative`? (Current: only `reactnative`)
- [ ] Should `tanstackquery` and `zustand` be added to the graph? (They're UI libs, not framework-level implications — likely no)

# Design: GitHub Stats in Header

## Technical Approach

Client-side React atom (`GitHubStats`) with a custom hook (`useGitHubStats`) that fetches public GitHub data via two unauthenticated endpoints. In-memory module-level cache (5-min TTL) prevents excessive API calls. Component renders inline between nav links and language/theme controls in the existing `Header.tsx`. Desktop-only via responsive utilities.

## Architecture Decisions

### Decision: Module-level cache vs React Context vs localStorage

**Choice**: Module-level variables with `Date.now()` timestamp
**Alternatives considered**: React Context (shared state), localStorage (persists across sessions), SWR/React Query (dedicated caching library)
**Rationale**: Simplest approach — no external deps, no serialization overhead, no context providers needed. Module scope = shared across all mounts in the same page lifecycle. localStorage adds complexity for zero benefit (stats re-fetch every 5 min anyway). SWR is overkill for two endpoints with a fixed 5-min TTL.

### Decision: Hook in component file vs separate hooks/ directory

**Choice**: `useGitHubStats` in its own file at `hooks/useGitHubStats.ts`
**Alternatives considered**: Colocated in `GitHubStats.tsx`
**Rationale**: Follows existing pattern — `hooks/` directory already has `useScrollReveal.ts` and `useProjectFilter.ts`. Keeps the atom component purely presentational and the hook independently testable.

### Decision: Skeleton vs invisible spacer for loading state

**Choice**: Invisible spacer with fixed width matching final content
**Alternatives considered**: Animated skeleton shimmer, loading spinner
**Rationale**: The stat line is small (~120px wide). A shimmer skeleton would add visual noise. An invisible spacer (`w-[120px]`) prevents layout shift while loading, then the real content replaces it. Spec allows either approach; spacer is simpler and matches the project's minimal aesthetic.

## Data Flow

    Header.tsx
       │
       └─→ <GitHubStats dict={dict.nav} />
              │
              └─→ useGitHubStats()
                     │
                     ├─→ Check module cache (starsCache/eventsCache)
                     │      │
                     │      ├─ HIT (< 5 min) → return cached values
                     │      │
                     │      └─ MISS → fetch both endpoints in parallel
                     │              │
                     │              ├─ success → write to cache, return data
                     │              └─ error → return { stars: 0, events: 0, error: true }
                     │
                     └─→ Returns { stars, events, loading }

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `hooks/useGitHubStats.ts` | Create | Custom hook: fetch logic, module cache, AbortController |
| `components/atoms/GitHubStats.tsx` | Create | Presentational atom: FaGithub icon + stat line |
| `components/molecules/Header.tsx` | Modify | Import and render `<GitHubStats>` between nav and controls |
| `i18n/types.ts` | Modify | Add `githubStars`, `githubEvents`, `githubActivity` to `Dictionary.nav` |
| `i18n/modules/nav.ts` | Modify | Add en/es translations for the 3 new keys |

## Interfaces / Contracts

### `useGitHubStats` return type

```typescript
interface GitHubStatsData {
   stars: number;
   events: number;
   loading: boolean;
   error: boolean;
}

// Signature
function useGitHubStats(): GitHubStatsData
```

### `GitHubStats` component props

```typescript
interface GitHubStatsProps {
   githubStars: string;   // e.g. "stars" / "estrellas"
   githubEvents: string;  // e.g. "events" / "eventos"
   githubActivity: string; // e.g. "activity" / "actividad"
}

// Usage in Header.tsx
<GitHubStats
   githubStars={dict.nav.githubStars}
   githubEvents={dict.nav.githubEvents}
   githubActivity={dict.nav.githubActivity}
/>
```

### i18n keys to add to `Dictionary.nav`

```typescript
githubStars: string;
githubEvents: string;
githubActivity: string;
```

**Values:**
- `en`: `stars`, `events`, `activity`
- `es`: `estrellas`, `eventos`, `actividad`

## State Machine

```
                    ┌──────────┐
                    │  IDLE    │  (cache hit)
                    │ return   │  ──→ done
                    │ cached   │
                    └────┬─────┘
                         │ (cache miss or first mount)
                         ▼
                    ┌──────────┐
               ┌───→│ LOADING  │  loading=true, render spacer
               │    └────┬─────┘
               │         │
               │    ┌────┴────┐
               │    │         │
               ▼    ▼         ▼
          ┌────────┐  ┌────────────┐
          │ SUCCESS│  │   ERROR    │
          │ write  │  │ error=true │
          │ cache  │  │ render     │
          │ render │  │ nothing    │
          └────────┘  └────────────┘
```

## Layout / Responsiveness

**Header integration** — inserted as a sibling in the flex row between nav links and the language/theme controls div:

```tsx
{/* Between nav links and controls — desktop only */}
<div className="hidden md:flex items-center">
   <GitHubStats {...githubProps} />
</div>
```

**GitHubStats internal layout** (matching Header's existing Tailwind patterns):

```tsx
<div className="hidden md:flex items-center gap-2 text-sm text-body/60 font-medium px-3">
   <FaGithub className="size-4 shrink-0" />
   <span>{stars} ★</span>
   <span className="opacity-40">·</span>
   <span>{events} {githubActivity}</span>
</div>
```

- `hidden md:flex` — hidden below 768px, flex on desktop
- `text-body/60` — subdued tone, matches Header's secondary text
- `text-sm` — matches Header's nav link sizing
- `gap-2` — consistent with Header's inner spacing
- `px-3` — visual separation from nav and controls

**Loading spacer** — replaces content while loading:

```tsx
<div className="hidden md:block w-[120px] h-5" aria-hidden="true" />
```

## Migration / Rollout

No migration required. All changes are additive — new files and optional i18n keys. No existing behavior modified. Feature is opt-in via the component render; removing the import from Header fully rolls back.

## Open Questions

None — all technical decisions are resolved.

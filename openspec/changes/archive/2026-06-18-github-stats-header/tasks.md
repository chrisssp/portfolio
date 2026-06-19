# Tasks: GitHub Stats in Header

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 150–220 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | Single PR |
| Delivery strategy | ask-always |
| Chain strategy | pending |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: pending
400-line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | GitHub Stats feature complete | PR 1 | All tasks; base branch = main; tests/docs included |

## Phase 1: Foundation / Types & i18n

- [x] T-01 Add `githubStars`, `githubEvents`, `githubActivity` to `Dictionary.nav` interface in `i18n/types.ts`
- [x] T-02 Add English translations for the 3 new keys in `i18n/modules/nav.ts` (en: stars, events, activity)
- [x] T-03 Add Spanish translations for the 3 new keys in `i18n/modules/nav.ts` (es: estrellas, eventos, actividad)

## Phase 2: Hook & Data Layer

- [x] T-04 Create `hooks/useGitHubStats.ts` with `useGitHubStats` hook returning `{ stars, events, loading, error }`
- [x] T-05 Implement module-level cache (5-min TTL) with `Date.now()` timestamp
- [x] T-06 Implement parallel fetch to `/users/chrisssp/repos` and `/users/chrisssp/events/public` with `AbortController`
- [x] T-07 Calculate stars as sum of `stargazers_count`; events as count within last 90 days
- [x] T-08 Handle errors gracefully: return `{ stars: 0, events: 0, error: true }` on failure

## Phase 3: Component & Integration

- [x] T-09 Create `components/atoms/GitHubStats.tsx` with props `{ githubStars, githubEvents, githubActivity }`
- [x] T-10 Implement loading spacer: `hidden md:block w-[120px] h-5` while loading
- [x] T-11 Implement success state: `FaGithub` icon + `{stars} ★ · {events} {githubActivity}` (localized)
- [x] T-12 Implement error/empty state: render nothing (hidden, no layout shift)
- [x] T-13 Modify `components/molecules/Header.tsx`: import `GitHubStats` and `useGitHubStats`
- [x] T-14 Insert `<GitHubStats {...githubProps} />` between nav links and language/theme controls inside `hidden md:flex` wrapper
- [x] T-15 Pass i18n props from `dict.nav` to `GitHubStats` component

## Phase 4: Verification

- [x] T-16 Verify desktop layout: stats appear between nav and controls at md+ breakpoints
- [x] T-17 Verify mobile: stats hidden below md breakpoint
- [x] T-18 Verify loading state: no layout shift, spacer maintains width
- [x] T-19 Verify i18n: English shows "activity", Spanish shows "actividad"
- [x] T-20 Verify cache: no duplicate fetch within 5 minutes (manual test)
- [x] T-21 Verify graceful degradation: network error shows nothing, no console errors
- [x] T-22 Run lint/typecheck: `pnpm lint && pnpm typecheck` pass
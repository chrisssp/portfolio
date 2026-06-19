# Proposal: GitHub Stats in Header

## Intent

The portfolio header currently shows navigation, language toggle, and theme switch — but no social proof. Adding GitHub activity stats (total stars, recent public events) provides immediate credibility for visitors (recruiters, collaborators) evaluating the developer's open-source presence. No backend needed; public GitHub API provides the data.

## Scope

### In Scope
- Fetch total GitHub stars across all public repos via `https://api.github.com/users/chrisssp/repos?per_page=100`
- Fetch public events count (last 90 days) via `https://api.github.com/users/chrisssp/events/public?per_page=100`
- Display stats as a subtle line in the desktop header nav area (left of language/theme controls)
- Loading skeleton or fallback while data loads
- i18n keys for labels (`stars`, `events`, `activity`) in `en` and `es`
- Client-side fetch with in-memory cache (revalidate every 5 minutes to stay under 60 req/hr limit)

### Out of Scope
- Authentication or private repo stats
- Per-repo breakdown or detailed activity charts
- Backend API route or database caching
- Stats on mobile menu (desktop only for v1)
- Trend/history graphs

## Capabilities

### New Capabilities
- `github-stats`: Fetches and caches GitHub star count and recent event count from public API; renders as a compact stat line in the header

### Modified Capabilities
- `header`: Accepts and renders `GitHubStats` component next to existing nav controls

## Approach

**Data Fetching**: Custom `useGitHubStats` hook calls both endpoints on mount. Uses `AbortController` for cleanup. Returns `{ stars, events, loading, error }`.

**Caching**: Store result in module-level variable with timestamp. Reuse within 5-minute window. No external deps needed — simple `Date.now()` check.

**Component**: New `GitHubStats` atom — renders FaGithub icon + "17 ★ · 99 activity" (or localized). Gracefully degrades: shows nothing on error, shows skeleton while loading.

**Header Integration**: Insert `GitHubStats` between nav links and the language/theme controls in `Header.tsx`. Desktop only (hidden on `md:hidden` or similar).

**i18n**: Add `githubStars`, `githubEvents`, `githubActivity` keys to `Dictionary.nav` interface and both locale modules.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `components/atoms/GitHubStats.tsx` | New | Stat line component with fetch logic |
| `components/molecules/Header.tsx` | Modified | Import and render GitHubStats |
| `i18n/types.ts` | Modified | Add 3 keys to `nav` interface |
| `i18n/modules/nav.ts` | Modified | Add en/es translations |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| GitHub API rate limit (60 req/hr unauthenticated) | Low | 5-min cache reduces calls to ~12/hr; fails gracefully |
| API downtime or network error | Low | Component hides on error, no layout shift |
| Header layout breaks at certain breakpoints | Low | Use responsive utilities, test on common widths |

## Rollback Plan

1. Remove `GitHubStats.tsx` component
2. Remove import/render from `Header.tsx`
3. Remove added i18n keys from types and locale modules
4. All changes are additive — no existing behavior modified

## Dependencies

- Public GitHub API (no auth required for public user data)
- Existing `FaGithub` icon from `react-icons/fa` (already imported in Header)

## Success Criteria

- [ ] Stats display in header showing total stars and 90-day activity count
- [ ] Stats load without blocking header render (skeleton or graceful fallback)
- [ ] Works in both English and Spanish locales
- [ ] Layout remains correct at all breakpoints (mobile menu unaffected)
- [ ] Stays within GitHub API rate limit under normal browsing

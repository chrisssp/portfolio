# GitHub Stats Specification

## Purpose

Display GitHub social proof (total stars, recent public activity) as a compact stat line in the desktop header. Fetches from public GitHub API, caches client-side, degrades gracefully on failure. Desktop-only for v1.

## Requirements

### Requirement: GitHub Data Fetching

The system SHALL fetch total stars across all public repos via `https://api.github.com/users/chrisssp/repos?per_page=100` and public events count (last 90 days) via `https://api.github.com/users/chrisssp/events/public?per_page=100`. Requests MUST use `AbortController` for cleanup on unmount.

#### Scenario: Successful fetch

- GIVEN component mounts
- WHEN GitHub API responds with repos and events
- THEN stars count equals sum of `stargazers_count` across all returned repos
- AND events count equals events with `created_at` within last 90 days

#### Scenario: API rate limit or network error

- GIVEN component mounts
- WHEN GitHub API returns 403 (rate limit) or network fails
- THEN component renders nothing (hidden, no layout shift)

#### Scenario: Partial data available

- GIVEN repos endpoint succeeds but events endpoint fails
- THEN stars display normally and events show as 0 or hidden

### Requirement: In-Memory Cache

The system SHALL store fetched data in a module-level variable with a `Date.now()` timestamp. Subsequent fetches within 5 minutes MUST reuse cached data. Cache MUST reset after the 5-minute window.

#### Scenario: Cache hit within 5 minutes

- GIVEN stats were fetched 2 minutes ago
- WHEN component re-renders or remounts
- THEN no new API call is made and cached values display

#### Scenario: Cache expired after 5 minutes

- GIVEN stats were fetched 6 minutes ago
- WHEN component mounts
- THEN a fresh API call is made and data updates

### Requirement: Compact Stat Line UI

The system SHALL render a `GitHubStats` atom component showing FaGithub icon followed by formatted stats: `{stars} ★ · {events} activity` (localized). Component MUST be hidden on mobile (`hidden md:flex` or equivalent). Stat line MUST NOT cause layout shift during loading.

#### Scenario: Loading state

- GIVEN component is fetching data for the first time
- THEN a skeleton placeholder of equivalent width renders (or invisible spacer)
- AND header layout remains stable

#### Scenario: Success state with data

- GIVEN API returns 17 stars and 99 events
- THEN stat line shows GitHub icon + "17 ★ · 99 activity" (localized)

#### Scenario: Error or empty state

- GIVEN API call fails or returns zero stars and zero events
- THEN component renders nothing
- AND no layout shift occurs in the header

### Requirement: Header Integration

The system SHALL render `GitHubStats` in `Header.tsx` between the nav links container and the language/theme controls group. Component MUST only render in desktop view (hidden below `md` breakpoint).

#### Scenario: Desktop layout

- GIVEN viewport is md or wider
- THEN stats appear between nav links and language/theme toggle

#### Scenario: Mobile viewport

- GIVEN viewport is below md
- THEN GitHubStats is not rendered (hidden via responsive class)

### Requirement: i18n Support

The system SHALL add three keys to `Dictionary.nav`: `githubStars` (label for stars), `githubEvents` (label for events/activity), `githubActivity` (combined activity label). Both `en` and `es` locale modules MUST include these keys.

#### Scenario: English rendering

- GIVEN locale is `en`
- THEN stat line reads "{stars} ★ · {events} activity"

#### Scenario: Spanish rendering

- GIVEN locale is `es`
- THEN stat line reads "{stars} ★ · {events} actividad"

## Acceptance Criteria

- [ ] Stats display in desktop header showing total stars and 90-day activity count
- [ ] Data fetches client-side with `AbortController` cleanup
- [ ] Cache prevents re-fetching within 5 minutes
- [ ] Graceful degradation: no display on error, no layout shift
- [ ] Loading state does not push header content
- [ ] Hidden on mobile viewports (below `md`)
- [ ] i18n keys present in both `en` and `es` locales
- [ ] Stays within GitHub API rate limit (≤60 req/hr unauthenticated)

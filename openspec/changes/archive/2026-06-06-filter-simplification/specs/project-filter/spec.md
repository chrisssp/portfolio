# Delta for project-filter

## MODIFIED Requirements

### Requirement: Multi-Axis Filter State

The system SHALL maintain selection state for two axes: `tech` and `focus`. Each axis defaults to empty string array. The `focus` axis merges legacy `domain`, `platform`, and `tags`. Values within `focus` combine with OR across all source categories.

(Previously: 4 axes)

#### Scenario: Toggle and combine

- GIVEN no filters are active
- WHEN user selects "react" on tech and "health" on focus
- THEN only projects matching tech=react AND (domain|platform|tags contains "health") show
- AND URL is `?tech=react&focus=health`

#### Scenario: Multiple values within focus

- GIVEN no filters are active
- WHEN user selects "health" and "web" on focus
- THEN projects matching domain contains "health" OR platform contains "web" show
- AND URL is `?focus=health,web`

### Requirement: URL Parameter Sync

The system SHALL reflect active filters in URL search params using keys `tech` and `focus` with comma-separated slugs. Empty axes produce no param. URL changes MUST NOT trigger navigation. Legacy params `domain`, `platform`, `tag` SHALL merge into `focus` on read, dropped on write.

(Previously: 4 keys; no legacy migration)

#### Scenario: Load from URL on mount

- GIVEN page loads with `?tech=react&focus=fintech`
- THEN both filters show selected and projects are filtered accordingly

#### Scenario: Legacy URL param migration

- GIVEN page loads with `?domain=health&platform=web`
- THEN focus shows "health" and "web" with OR filtering

#### Scenario: Browser back/forward navigation

- GIVEN filters are `?tech=react&focus=health`
- WHEN user presses back
- THEN filter state reverts to previous URL and project list updates

### Requirement: localStorage Persistence

The system SHALL persist each axis to a localStorage key: `portfolio-tech-filter` and `portfolio-focus-filter`. URL params take precedence over localStorage on mount. Legacy keys `portfolio-domain-filter`, `portfolio-platform-filter`, `portfolio-tag-filter` SHALL merge into `portfolio-focus-filter` on first load, then delete.

(Previously: 4 localStorage keys; no legacy migration)

#### Scenario: Restore from localStorage

- GIVEN no URL params and localStorage has `portfolio-focus-filter` with `["health"]`
- WHEN page loads
- THEN focus filter shows "health" selected

#### Scenario: Legacy localStorage migration

- GIVEN localStorage has `portfolio-domain-filter` with `["health"]` and no `portfolio-focus-filter`
- WHEN page loads
- THEN `portfolio-focus-filter` is created with `["health"]` and old key is deleted

### Requirement: Accordion Filter UI

The filter UI SHALL render as an accordion with two sections: Tecnología and Focus (i18n equivalents). Focus SHALL display subgroups: "Industry / Vertical" and "Platform". Sections expand/collapse independently. Sections with active filters MUST show a count badge.

(Previously: 4 accordion sections)

#### Scenario: Expand/collapse and badge

- GIVEN accordion visible with "health" and "web" on focus
- WHEN user clicks a section header
- THEN section expands and Focus header shows badge count "2"

### Requirement: Active Filter Chips

Selected values across BOTH axes SHALL render as removable chips above the accordion. Each chip shows axis label prefix and value. Removing a chip deselects that value.

(Previously: chips across ALL 4 axes)

#### Scenario: Remove a chip

- GIVEN chips for tech=react, focus=health
- WHEN user removes "Focus: health"
- THEN "health" is deselected, chip disappears, projects re-filter

### Requirement: Clear Per-Axis and Clear All

Each section SHALL include a "Clear" button when that axis has selections. A global "Clear all filters" control SHALL reset both axes.

(Previously: clear across 4 axes)

#### Scenario: Clear one axis

- GIVEN tech=react and focus=health are selected
- WHEN user clears Tecnología
- THEN tech is emptied and focus=health remains

### Requirement: Filter Logic (AND across, OR within)

Filters across axes combine with AND. Filters within focus combine with OR across domain + platform + tags. Empty axis = "all" (no constraint).

(Previously: AND across 4 axes, OR within each axis)

#### Scenario: Empty axis means no constraint

- GIVEN tech=react is selected and focus is empty
- THEN all projects with techStack containing "react" show

#### Scenario: Focus OR across categories

- GIVEN focus="health,web" selected
- THEN projects matching domain contains "health" OR platform contains "web" show

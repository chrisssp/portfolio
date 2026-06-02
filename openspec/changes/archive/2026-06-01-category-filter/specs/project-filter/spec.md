# Project Filter Specification

## Purpose

Multi-axis project filtering across four dimensions: tech, domain, platform, tags. Users combine axes to narrow projects (e.g., "mobile health projects using React"). Filter state syncs to URL params and persists via localStorage.

## Requirements

### Requirement: Multi-Axis Filter State

The system SHALL maintain independent selection state for each of four axes: `tech`, `domain`, `platform`, and `tag`. Each axis holds a string array. All axes default to empty (no filter).

#### Scenario: Toggle value on one axis

- GIVEN no filters are active
- WHEN the user selects "react" on tech
- THEN only projects with techStack containing "react" are shown
- AND URL param is `?tech=react`

#### Scenario: Combine multiple axes

- GIVEN "react" is selected on tech
- WHEN the user selects "health" on domain
- THEN only projects matching tech=react AND domain=health are shown
- AND URL params are `?tech=react&domain=health`

#### Scenario: Multiple values within one axis

- GIVEN "react" is selected on tech
- WHEN the user also selects "angular" on tech
- THEN projects matching tech=react OR tech=angular are shown
- AND URL param is `?tech=react,angular`

### Requirement: URL Parameter Sync

The system SHALL reflect all active filters in URL search params using keys `tech`, `domain`, `platform`, `tag`. Values are comma-separated slugs. Empty axes produce no param. URL changes MUST NOT trigger page navigation.

#### Scenario: Load from URL on mount

- GIVEN the page loads with `?tech=react&domain=fintech`
- THEN both filters show selected and projects are filtered accordingly

#### Scenario: Browser back/forward navigation

- GIVEN filters are `?tech=react&domain=health`
- WHEN the user presses back
- THEN filter state reverts to previous URL params and project list updates

### Requirement: localStorage Persistence

The system SHALL persist each axis to a separate localStorage key: `portfolio-tech-filter`, `portfolio-domain-filter`, `portfolio-platform-filter`, `portfolio-tag-filter`. URL params take precedence over localStorage on mount.

#### Scenario: Restore from localStorage

- GIVEN no URL params and localStorage has `portfolio-domain-filter` with `["health"]`
- WHEN the page loads
- THEN domain filter shows "health" selected

### Requirement: Accordion Filter UI

The filter UI SHALL render as an accordion with four collapsible sections: Tecnología, Dominio, Plataforma, Vertical (i18n equivalents). Sections expand/collapse independently. Sections with active filters MUST show a count badge on the collapsed header.

#### Scenario: Expand/collapse sections

- GIVEN the accordion is visible
- WHEN the user clicks a section header
- THEN that section expands and others remain in current state

#### Scenario: Section count badge

- GIVEN "health" and "fintech" are selected on domain
- WHEN all sections are collapsed
- THEN the Dominio header shows badge count "2"

### Requirement: Active Filter Chips

Selected values across ALL axes SHALL render as removable chips above the accordion. Each chip shows axis label prefix and value. Removing a chip deselects that value from its axis.

#### Scenario: Remove a chip

- GIVEN chips for tech=react, domain=health, platform=mobile
- WHEN the user clicks remove on "Dominio: health"
- THEN "health" is deselected, the chip disappears, and projects re-filter

### Requirement: Clear Per-Axis and Clear All

Each accordion section SHALL include a "Clear" button when that axis has selections. A global "Clear all filters" control SHALL reset all four axes.

#### Scenario: Clear one axis

- GIVEN tech=react and domain=health are selected
- WHEN the user clicks "Clear" in Tecnología
- THEN tech is emptied and domain=health remains active

### Requirement: Filter Logic (AND across, OR within)

Filters across axes combine with AND. Filters within one axis combine with OR. An empty axis is treated as "all" (no constraint).

#### Scenario: Empty axis means no constraint

- GIVEN tech=react is selected and domain is empty
- THEN all projects with techStack containing "react" are shown

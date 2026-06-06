# Delta for Project Filter

## MODIFIED Requirements

### Requirement: Filter Logic (AND across, OR within)

Filters across axes combine with AND. Filters within one axis combine with OR. For the `tech` axis, comparison uses expanded tech stacks via `expandTechStack()` instead of literal `techStack` values. An empty axis is treated as "all" (no constraint).

(Previously: literal `techStack` matching only)

#### Scenario: Empty axis means no constraint

- GIVEN tech=react is selected and domain is empty
- THEN all projects with expanded techStack containing "react" are shown

#### Scenario: Expanded match catches implied techs

- GIVEN tech=typescript is selected
- WHEN a project has techStack `['angular']` and `TECH_PARENTS` maps `angular → typescript`
- THEN the project IS shown (expanded stack includes typescript)

#### Scenario: Literal match still works

- GIVEN tech=react is selected
- WHEN a project has techStack `['react', 'tailwind']`
- THEN the project IS shown

## ADDED Requirements

### Requirement: Ecosystem Tech Aggregation

The system SHALL aggregate technology keys from `project.ecosystem[].techStack` into `allTechs`. Technologies from ecosystem sub-items MUST appear as filterable options alongside top-level techStack values.

#### Scenario: Ecosystem sub-item techs appear in filter options

- GIVEN a project has `ecosystem: [{ techStack: ['astro'] }]`
- WHEN the tech filter panel renders
- THEN `'astro'` appears as a selectable tech option

#### Scenario: Ecosystem sub-item techs match in filtering

- GIVEN tech=astro is selected
- WHEN a project has top-level techStack `[]` but ecosystem `[{ techStack: ['astro'] }]`
- THEN the project IS shown

#### Scenario: No ecosystem items

- GIVEN a project has no `ecosystem` field
- WHEN `allTechs` is computed
- THEN only top-level `techStack` values are included for that project

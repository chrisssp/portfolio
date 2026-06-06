# Tech Hierarchy Specification

## Purpose

Define a technology implication graph where certain technologies inherently imply others (e.g., Angular implies TypeScript). Provides a traversal utility to expand a tech stack into all direct and implied technologies.

## Requirements

### Requirement: Tech Implication Graph

The system SHALL maintain a `TECH_PARENTS` record mapping each technology key to an array of technology keys it implies. Keys are lowercase slug strings. The graph is static, manually curated, and acyclic by design.

#### Scenario: Direct implication

- GIVEN `TECH_PARENTS` contains `{ angular: ['typescript'] }`
- WHEN `expandTechStack` is called with `['angular']`
- THEN the result includes both `'angular'` and `'typescript'`

#### Scenario: Transitive implication

- GIVEN `TECH_PARENTS` contains `{ expo: ['reactnative'], reactnative: ['react', 'typescript'] }`
- WHEN `expandTechStack` is called with `['expo']`
- THEN the result includes `'expo'`, `'reactnative'`, `'react'`, and `'typescript'`

#### Scenario: No implication

- GIVEN `TECH_PARENTS` contains `{ react: [] }`
- WHEN `expandTechStack` is called with `['react']`
- THEN the result is `['react']` only

### Requirement: Expand Tech Stack Utility

The system SHALL expose an `expandTechStack(techs: string[]): string[]` function that performs BFS traversal of `TECH_PARENTS` starting from the input array. The output MUST be a deduplicated array containing all input techs plus all transitively implied techs.

#### Scenario: Deduplication

- GIVEN `TECH_PARENTS` contains `{ angular: ['typescript'], nestjs: ['typescript'] }`
- WHEN `expandTechStack` is called with `['angular', 'nestjs']`
- THEN `'typescript'` appears exactly once in the result

#### Scenario: Empty input

- GIVEN any `TECH_PARENTS` graph
- WHEN `expandTechStack` is called with `[]`
- THEN the result is `[]`

#### Scenario: Unknown tech passthrough

- GIVEN `TECH_PARENTS` does not contain key `'unknownlib'`
- WHEN `expandTechStack` is called with `['unknownlib']`
- THEN the result is `['unknownlib']` (no error, no removal)

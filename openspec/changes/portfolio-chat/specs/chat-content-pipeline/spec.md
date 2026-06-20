# chat-content-pipeline Specification

## Purpose

Build-time Node script that extracts bilingual portfolio content from i18n modules into a structured JSON knowledge base served from `public/`. This JSON powers the chatbot's retrieval layer.

## Requirements

### Requirement: Content Extraction

The system SHALL extract content from all i18n modules (`hero`, `about`, `experience`, 8 projects: `7dcompass`, `azkali`, `coppelnexus`, `dabetai`, `flacks`, `iapex`, `mtrpa`, `puntofiel`) into a flat JSON array.

#### Scenario: Successful extraction

- GIVEN the i18n modules directory contains valid bilingual (EN/ES) files
- WHEN `scripts/generate-content-json.ts` executes
- THEN `public/portfolio-content.json` contains entries with: `section`, `locale`, `title`, `description`, `fullDescription`, `challenge`, `ecosystem`, `techStack`, `categories`, `experience`, `education`, `skills`

#### Scenario: Missing module

- GIVEN one i18n module file is missing or malformed
- WHEN the script runs
- THEN the script logs a warning identifying the failed module AND continues processing remaining modules

### Requirement: Section Tagging

Each JSON entry MUST include a `section` field identifying its category: `project`, `experience`, `education`, `about`, `hero`, or `skills`.

#### Scenario: Project entries

- GIVEN a project module is loaded (e.g., `7dcompass`)
- WHEN the entry is written to JSON
- THEN `section` is `"project"` AND `title` and `techStack` are present

#### Scenario: Experience entries

- GIVEN the experience module is loaded
- WHEN entries are written
- THEN each experience entry has `section: "experience"` with company, role, and date fields

### Requirement: Bilingual Support

The system MUST produce separate entries per locale (EN and ES) for every content section.

#### Scenario: Dual locale output

- GIVEN a module has both `en` and `es` translations
- WHEN extraction completes
- THEN the JSON contains one entry with `locale: "en"` and another with `locale: "es"` for the same section

### Requirement: Build Integration

The script MUST run as part of the Next.js build pipeline via a `postbuild` or `predev` npm script.

#### Scenario: Build produces JSON

- GIVEN a clean `next build` is triggered
- WHEN the build completes
- THEN `public/portfolio-content.json` exists and is up-to-date

#### Scenario: Dev server starts with JSON

- GIVEN `next dev` is started
- WHEN the dev server boots
- THEN the content JSON is generated before the server begins listening

### Requirement: JSON Structure

The JSON MUST be a flat array of content objects. Each object MUST contain at minimum: `id`, `section`, `locale`, `title`, `description`.

#### Scenario: JSON schema compliance

- GIVEN extraction completes successfully
- WHEN `portfolio-content.json` is read
- THEN every array element has the required fields AND the file is valid JSON

# Proposal: CV Componentization

## Intent
Refactor 14 CV (.typ) files to use shared modules, reducing duplication and improving maintainability.

## Scope
- Extract common sections (Education, Languages) into shared modules
- Create a template function that wraps the resume setup
- Update all 14 CV files to use the shared modules
- Preserve all existing content exactly as-is

## Approach
1. Use existing shared modules: `_shared/template.typ`, `_shared/sections.typ`, `_shared/sections.es.typ`
2. Rewrite each CV file to import shared modules and use `#cv-start()` function
3. Replace Education/Languages sections with `#education` and `#languages` from shared modules
4. Keep Profile, Skills, Experience, Projects content unchanged

## Success Criteria
- All 14 CV files compile without errors
- PDF output matches original (zero content changes)
- Each CV file reduced from ~170 lines to ~60 lines
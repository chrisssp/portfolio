# Spec: CV Componentization

## Requirements

### R1: Shared Module Integration
- Each CV file must import from `_shared/template.typ` and `_shared/sections.typ` (or `_shared/sections.es.typ` for Spanish)
- Import paths must be correct: root CVs use `"_shared/template.typ"`, subdirectory CVs use `"../_shared/template.typ"`

### R2: Template Function Usage
- Each CV must use `#cv-start(primary: [...], location: "...")[ ... ]` to wrap the entire CV
- The `primary` parameter must contain the exact content from the original `primary-info:` field
- The `location` parameter must contain the exact value from the original `tertiary-info:` field

### R3: Content Preservation
- Profile, Technical Skills, Professional Experience, and Featured Projects sections must remain exactly as-is
- All emphasis (`*bold*`, `_italic_`) and links must be preserved
- Order of entries must be preserved

### R4: Education/Languages Replacement
- Education section must be replaced with `#education` from shared modules
- Languages section must be replaced with `#languages` from shared modules
- The shared modules include their section headings (`== Education`, `== Languages`)

### R5: Compilation
- All 14 CV files must compile without errors using `~/.cargo/bin/typst compile`

## Scenarios

### Scenario 1: Root EN CV
- Input: `CV_Christian_Serrano_Software_Engineer.typ`
- Action: Rewrite to use shared modules
- Expected: Compiles without errors, PDF matches original

### Scenario 2: Root ES CV
- Input: `CV_Christian_Serrano_Ingeniero_de_Software.typ`
- Action: Rewrite to use shared modules
- Expected: Compiles without errors, PDF matches original

### Scenario 3: Subdirectory EN CV
- Input: `angular/CV_Christian_Serrano_Angular_Developer.en.typ`
- Action: Rewrite with `../_shared/template.typ` import
- Expected: Compiles without errors, PDF matches original

### Scenario 4: Subdirectory ES CV
- Input: `angular/CV_Christian_Serrano_Angular_Developer.es.typ`
- Action: Rewrite with `../_shared/sections.es.typ` import
- Expected: Compiles without errors, PDF matches original
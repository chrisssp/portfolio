# Design: CV Componentization

## Architecture
The refactored CVs will follow a modular architecture:

```
CV File
├── Import shared modules
├── #cv-start() wrapper
│   ├── primary: [exact content from original primary-info]
│   ├── location: "exact location from original tertiary-info"
│   └── body:
│       ├── Profile/Perfil section (unchanged)
│       ├── Technical Skills/Habilidades section (unchanged)
│       ├── Professional Experience/Experiencia section (unchanged)
│       ├── Featured Projects/Proyectos section (unchanged)
│       ├── #education (from shared module)
│       └── #languages (from shared module)
```

## Import Strategy
- Root CVs (in `public/assets/docs/cvs/`): import from `"_shared/template.typ"` and `"_shared/sections.typ"` or `"_shared/sections.es.typ"`
- Subdirectory CVs (in `angular/`, `backend-java/`, etc.): import from `"../_shared/template.typ"` and `"../_shared/sections.typ"` or `"../_shared/sections.es.typ"`

## Content Mapping
For each CV file, extract:
1. `primary-info` content → becomes `primary` parameter
2. `tertiary-info` value → becomes `location` parameter
3. All sections between `== Profile`/`== Perfil` and `== Education`/`== Educación` → remain unchanged in body
4. Education/Languages sections → replaced with `#education` and `#languages`

## Validation
After rewriting each file, compile with:
```bash
~/.cargo/bin/typst compile <file.typ>
```
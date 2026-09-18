#import "../_shared/template.typ": r2c2-entry-list, multi-line-text, single-line-entry

#let education = [
  == Educación
  #r2c2-entry-list(
    (
      entry-header-args: (
        top-left: [*Universidad Tecnológica del Centro de Veracruz*],
        top-right: [Abr 2026],
        bottom-left: [Ingeniería en desarrollo y gestión de software],
        bottom-right: [Cuitláhuac, Veracruz, México],
      )
    ),
    (
      entry-header-args: (
        top-left: [*Universidad Tecnológica del Centro de Veracruz*],
        top-right: [Ago 2024],
        bottom-left: [TSU en desarrollo de software multiplataforma],
        bottom-right: [Cuitláhuac, Veracruz, México],
      ),

    ),
  )
]

#let languages = [
  == Idiomas
  #multi-line-text(
    single-line-entry([*Español:*], [Nativo], []),
    single-line-entry([*Inglés:*], [B1+ (Competencia técnica)], [])
  )
]

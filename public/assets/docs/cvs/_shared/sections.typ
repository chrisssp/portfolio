#import "../_shared/template.typ": r2c2-entry-list, multi-line-text, single-line-entry

#let education = [
  == Education
  #r2c2-entry-list(
    (
      entry-header-args: (
        top-left: [*Universidad Tecnológica del Centro de Veracruz*],
        top-right: [Apr 2026],
        bottom-left: [B.E. in Software Development and Management],
        bottom-right: [Cuitláhuac, Veracruz, Mexico],
      )
    ),
    (
      entry-header-args: (
        top-left: [*Universidad Tecnológica del Centro de Veracruz*],
        top-right: [Aug 2024],
        bottom-left: [Associate Degree (TSU) in Multiplatform Software Development],
        bottom-right: [Cuitláhuac, Veracruz, Mexico],
      ),
      list-items: (
        [_Graduated 1st in Class (Final GPA: 9.82/10)_],
      ),
    ),
  )
]

#let languages = [
  == Languages
  #multi-line-text(
    single-line-entry([*Spanish:*], [Native], []),
    single-line-entry([*English:*], [B1+ (Intermediate - Active progress)], [])
  )
]

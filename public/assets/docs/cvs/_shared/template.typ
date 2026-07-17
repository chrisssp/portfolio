#import "@preview/pro-academic-cv:0.1.0": resume, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text

#let contact-info = [
  +52 271 266 73 65 | #link("mailto:christian.serrano.puertos@gmail.com")[christian.serrano.puertos\@gmail.com]
]

#let cv-start(title, lang, body) = {
  let location = if lang == "es" {
    "Córdoba, Veracruz, México · Remote-first · Disponible para cambio de residencia"
  } else {
    "Córdoba, Veracruz, Mexico · Remote-first · Open to relocation"
  }

  show: resume.with(
    paper: "us-letter",
    heading-settings: (
      above-spacing: 1.2em,
      below-spacing: 0.6em,
      section-title-size: 1.1em,
      section-title-weight: "semibold",
      section-note-size: 0.8em,
      section-note-weight: "light",
      section-line-above-spacing: -0.85em,
      line-length: 100%,
      line-stroke: 0.04em + black,
    ),
    font-settings: (
      font-family: "TeX Gyre Pagella",
      font-size: 10pt,
      author-font-size: 25pt,
      lang: lang,
    ),
    author-info: (
      name: "Christian Serrano",
      primary-info: [#title \ #contact-info],
      secondary-info: [
        #link("https://chrisssp.me")[chrisssp.me] | #link("https://linkedin.com/in/chrisssp")[linkedin.com/in/chrisssp] | #link("https://github.com/chrisssp")[github.com/chrisssp]
      ],
      tertiary-info: location,
    ),
    author-position: center
  )
  body
}

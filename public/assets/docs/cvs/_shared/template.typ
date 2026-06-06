#import "@preview/pro-academic-cv:0.1.0": resume, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text

#let contact-info = [
  +52 271 266 73 65 | #link("mailto:christian.serrano.puertos@gmail.com")[christian.serrano.puertos\@gmail.com]
]

#let cv-start(title, lang, body) = {
  let location = if lang == "es" {
    "Córdoba, Veracruz, México"
  } else {
    "Córdoba, Veracruz, Mexico"
  }

  show: resume.with(
    author-info: (
      name: "Christian Serrano",
      primary-info: [#title \ #contact-info],
      secondary-info: [
        #link("https://chrisssp.vercel.app")[chrisssp.vercel.app] | #link("https://linkedin.com/in/chrisssp")[linkedin.com/in/chrisssp] | #link("https://github.com/chrisssp")[github.com/chrisssp]
      ],
      tertiary-info: location,
    ),
    author-position: center
  )
  body
}

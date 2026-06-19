// Cover Letter Template — Shared layout
// Based on Christian Serrano's original cover letter format

#let cover-letter(
  role: "",
  company: "",
  lang: "en",
  body,
) = {
  set page(
    paper: "us-letter",
    margin: (top: 1in, bottom: 0.9in, left: 1in, right: 1in),
  )

  set text(font: ("Libertinus Serif", "Liberation Serif", "Times New Roman"), size: 11pt, lang: lang)

  set par(justify: false, leading: 0.65em)

  // ── Letterhead ──────────────────────────────────────────────
  align(right)[
    #text(weight: "bold", size: 14pt)[Christian Serrano] \
    #role \
    +52 271 266 73 65 \
    #link("mailto:christian.serrano.puertos@gmail.com") \
    #link("https://chrisssp.vercel.app") \
    #link("https://linkedin.com/in/chrisssp")
  ]

  v(1.2em)

  // Date
  {
    let today = datetime.today()
    let months-en = ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
    let months-es = ("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre")
    let month = if lang == "es" { months-es.at(today.month() - 1) } else { months-en.at(today.month() - 1) }
    if lang == "es" {
      [#today.day() de #month de #today.year()]
    } else {
      [#month #today.day(), #today.year()]
    }
  }

  v(1em)

  // Greeting — personalized with company name
  if lang == "es" {
    [Estimado equipo de reclutamiento de #text(weight: "bold")[#company],]
  } else {
    [Dear #text(weight: "bold")[#company] Hiring Team,]
  }

  v(0.6em)

  // Body
  body

  // Closing
  v(1.5em)

  [
    #if lang == "es" {
      [Saludos cordiales,]
    } else {
      [Best regards,]
    }

    #text(weight: "bold", size: 12pt)[Christian Serrano]
  ]
}

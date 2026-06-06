#import "@preview/pro-academic-cv:0.1.0": *

#show: resume.with(
  author-info: (
    name: "Christian Serrano",
    primary-info: [
      Backend Engineer | Node.js & TypeScript \
      +52 271 266 73 65 | #link("mailto:christian.serrano.puertos@gmail.com")[christian.serrano.puertos\@gmail.com]
    ],
    secondary-info: [
      #link("https://chrisssp.vercel.app")[chrisssp.vercel.app] | #link("https://linkedin.com/in/chrisssp")[linkedin.com/in/chrisssp] | #link("https://github.com/chrisssp")[github.com/chrisssp]
    ],
    tertiary-info: "Córdoba, Veracruz, Mexico",
  ),
  author-position: center
)

== Profile
Backend engineer specialized in Node.js, TypeScript, and API architecture. Experienced designing REST APIs, database schemas, and backend systems for financial, logistics, and enterprise applications. Focused on clean architecture, performance optimization, and secure, maintainable code.

== Technical Skills
#multi-line-list(
  single-line-entry([*Backend:*], [Node.js, Express, NestJS, TypeScript, REST APIs], []),
  single-line-entry([*Databases:*], [PostgreSQL, MongoDB, Supabase, Firebase], []),
  single-line-entry([*Infrastructure:*], [Docker, Git, Linux], []),
  single-line-entry([*Frontend:*], [React, Angular, React Native (integration context)], []),
  single-line-entry([*Tools:*], [Git, Linux, Figma, OWASP security practices], []),
  single-line-entry([*Methodologies:*], [Scrum, Kanban, XP, Design Thinking, SDD], []),
  single-line-entry([*Familiar:*], [Java (Spring Boot), Python (Django, FastAPI)], [])
)

== Professional Experience
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [*Seven D Construction*],
      top-right: [January 2026 -- April 2026],
      bottom-left: [Software Engineer (Remote)],
      bottom-right: [Chicago, IL, USA / Mexico],
    ),
    list-items: (
      [Led the evolution of #link("https://chrisssp.vercel.app/en/projects/7dcompass")[*7D-Compass*] (Node.js/PostgreSQL), automating payment reconciliation and reducing operational time by *95%*.],
      [Implemented a centralized audit engine reconciling *\$2.3M USD* in transactions through complex validation logic.],
      [Optimized system security using *JWT/Bcrypt* following *OWASP* standards.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Coppel (Genius Arena Hackathon — Talent Land 2025)*],
      top-right: [April 2025],
      bottom-left: [4th Place & Team Lead],
      bottom-right: [Guadalajara, Jalisco, Mexico],
    ),
    list-items: (
      [Architected and built the backend for #link("https://chrisssp.vercel.app/en/projects/coppel-nexus")[*Coppel Nexus*] using Express, MongoDB, and Firebase for real-time referral tracking.],
      [Selected among 1,400+ participants nationwide for the on-site phase of Talent Land 2025.],
      [Designed the API schema and database structure to support mobile + web clients simultaneously.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Banco Azteca (Genius Arena Hackathon — Talent Land 2026)*],
      top-right: [April 2026],
      bottom-left: [Participant & Team Lead],
      bottom-right: [Santa Fe, CDMX, Mexico],
    ),
    list-items: (
      [Led the development of #link("https://chrisssp.vercel.app/en/projects/azkali")[*Azkali*]'s backend, orchestrating Gemini AI logic with Supabase for real-time storage and RLS-protected database.],
      [Selected among 1,500 participants nationwide for the on-site phase of Talent Land 2026.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*PepsiCo*],
      top-right: [May 2024 -- August 2024],
      bottom-left: [Software Developer (Remote)],
      bottom-right: [Azcapotzalco, CDMX, Mexico],
    ),
    list-items: (
      [Developed #link("https://chrisssp.vercel.app/en/projects/mtrpa")[*Master Template Rutas Power App*], automating processing of *+100k records* and reducing manual errors to zero.],
      [Optimized processing time by 70% through backend automation and database optimization.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Flack's Barber Shop*],
      top-right: [October 2022 -- April 2024],
      bottom-left: [Full Stack Developer - Freelancer],
      bottom-right: [Córdoba, Veracruz, Mexico],
    ),
    list-items: (
      [Developed a REST API with Node.js and PostgreSQL to centralize inventory, sales, and appointment data.],
      [Deployed a full digital ecosystem (Web & Mobile) backed by a unified API layer.],
    )
  )
)

== Featured Projects
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/en/projects/7dcompass")[*7D-Compass*]],
      top-right: [],
      bottom-left: [_Node.js, PostgreSQL, Angular_],
      bottom-right: [],
    ),
    list-items: (
      [Backend system for payment reconciliation and operational management in construction.],
      [Reduced operational time by 95% through automated audit engine and validation logic.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/en/projects/coppel-nexus")[*Coppel Nexus*]],
      top-right: [],
      bottom-left: [_Express, MongoDB, Firebase, React, React Native_],
      bottom-right: [],
    ),
    list-items: (
      [Backend API for gamified referral ecosystem supporting mobile + web frontends.],
      [Real-time referral tracking, user management, and route optimization for field collaborators.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/en/projects/iapex")[*IAPEX*]],
      top-right: [],
      bottom-left: [_Node.js, Python, PostgreSQL, AI_],
      bottom-right: [],
    ),
    list-items: (
      [Hybrid AI ecosystem for locating missing patients in healthcare institutions.],
      [Multi-language backend integrating facial recognition and textual search.],
    )
  )
)

== Education
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [*Universidad Tecnológica del Centro de Veracruz*],
      top-right: [April 2026],
      bottom-left: [B.E. in Software Development and Management],
      bottom-right: [Cuitláhuac, Veracruz, Mexico],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Universidad Tecnológica del Centro de Veracruz*],
      top-right: [August 2024],
      bottom-left: [Associate Degree (TSU) in Multiplatform Software Development],
      bottom-right: [Cuitláhuac, Veracruz, Mexico],
    ),
    list-items: (
      [_Graduated 1st in Class (Final GPA: 9.82/10)_],
    ),
  ),
)

== Languages
#multi-line-text(
  single-line-entry([*Spanish:*], [Native], []),
  single-line-entry([*English:*], [B1 (Intermediate - Active progress)], [])
)

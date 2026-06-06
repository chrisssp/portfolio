#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.typ": education, languages
#import "../_shared/experiences.en.typ": exp-7d, exp-coppel, exp-azteca, exp-pepsico, exp-flacks
#import "../_shared/projects.en.typ": proj-7d, proj-coppel, proj-iapex

#cv-start(
  [Backend Engineer | Node.js & TypeScript],
  "en",
)[
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
      ..exp-7d,
      list-items: (
        [Led the evolution of #link("https://chrisssp.vercel.app/en/projects/7dcompass")[*7D-Compass*] (Node.js/PostgreSQL), automating payment reconciliation and reducing operational time by *95%*.],
        [Implemented a centralized audit engine reconciling *\$2.3M USD* in transactions through complex validation logic.],
        [Optimized system security using *JWT/Bcrypt* following *OWASP* standards.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Architected and built the backend for #link("https://chrisssp.vercel.app/en/projects/coppel-nexus")[*Coppel Nexus*] using Express, MongoDB, and Firebase for real-time referral tracking.],
        [Selected among 1,400+ participants nationwide for the on-site phase of Talent Land 2025.],
        [Designed the API schema and database structure to support mobile + web clients simultaneously.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Led the development of #link("https://chrisssp.vercel.app/en/projects/azkali")[*Azkali*]'s backend, orchestrating Gemini AI logic with Supabase for real-time storage and RLS-protected database.],
        [Selected among 1,500 participants nationwide for the on-site phase of Talent Land 2026.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Developed #link("https://chrisssp.vercel.app/en/projects/mtrpa")[*Master Template Rutas Power App*], automating processing of *+100k records* and reducing manual errors to zero.],
        [Optimized processing time by 70% through backend automation and database optimization.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Developed a REST API with Node.js and PostgreSQL to centralize inventory, sales, and appointment data.],
        [Deployed a full digital ecosystem (Web & Mobile) backed by a unified API layer.],
      )
    )
  )

  == Featured Projects
  #r2c2-entry-list(
    (
      ..proj-7d([_Node.js, PostgreSQL, Angular_]),
      list-items: (
        [Backend system for payment reconciliation and operational management in construction.],
        [Reduced operational time by 95% through automated audit engine and validation logic.],
      ),
    ),
    (
      ..proj-coppel([_Express, MongoDB, Firebase, React, React Native_]),
      list-items: (
        [Backend API for gamified referral ecosystem supporting mobile + web frontends.],
        [Real-time referral tracking, user management, and route optimization for field collaborators.],
      ),
    ),
    (
      ..proj-iapex([_Node.js, Python, PostgreSQL, AI_]),
      list-items: (
        [Hybrid AI ecosystem for locating missing patients in healthcare institutions.],
        [Multi-language backend integrating facial recognition and textual search.],
      )
    )
  )

  #education
  #languages
]

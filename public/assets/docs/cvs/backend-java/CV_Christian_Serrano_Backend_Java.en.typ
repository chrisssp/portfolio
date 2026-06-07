#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.typ": education, languages
#import "../_shared/experiences.en.typ": exp-7d, exp-pepsico, exp-coppel, exp-azteca, exp-flacks
#import "../_shared/projects.en.typ": proj-iapex, proj-7d, proj-dabetai

#cv-start(
  [Backend Engineer | Java & Spring Boot],
  "en",
)[
  == Profile
  Backend engineer with +2 years of experience building production software, specialized in Java and Spring Boot. Experienced building enterprise REST APIs and data-driven backend systems. Strong foundation in software design patterns, object-oriented architecture, and database design. Focused on writing clean, maintainable, and well-structured enterprise applications.

  == Technical Skills
  #multi-line-list(
    single-line-entry([*Backend:*], [Java, Spring Boot, JPA/Hibernate, REST APIs, Maven], []),
    single-line-entry([*Databases:*], [PostgreSQL, MongoDB], []),
    single-line-entry([*Frontend:*], [Angular, Ionic, TypeScript], []),
    single-line-entry([*Infrastructure:*], [Docker, Git, Linux], []),
    single-line-entry([*Other Languages:*], [Node.js, Python, TypeScript], []),
    single-line-entry([*Methodologies:*], [Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiar:*], [React, React Native, Django, FastAPI], [])
  )

  == Professional Experience
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Led the evolution of #link("https://chrisssp.vercel.app/en/projects/7dcompass")[*7D-Compass*] (Angular/Node.js/PostgreSQL), automating payment reconciliation and reducing operational time by *95%*.],
        [Implemented a centralized audit engine reconciling *\$2.3M USD* in transactions through backend validation logic.],
        [Optimized system security using *JWT/Bcrypt* following *OWASP* standards.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Developed #link("https://chrisssp.vercel.app/en/projects/mtrpa")[*Master Template Rutas Power App*] (Angular/MongoDB), automating processing of *+100k records* and reducing manual errors to zero.],
        [Optimized backend processing time by 70% through efficient data pipelines.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Built #link("https://chrisssp.vercel.app/en/projects/coppel-nexus")[*Coppel Nexus*], a full-stack referral ecosystem, leading team through XP and Kanban methodologies.],
        [Selected among 1,400+ participants nationwide for the on-site phase of Talent Land 2025.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Led the development of #link("https://chrisssp.vercel.app/en/projects/azkali")[*Azkali*], an AI copilot built in a 48-hour sprint.],
        [Selected among 1,500 participants nationwide for the on-site phase of Talent Land 2026.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Deployed #link("https://chrisssp.vercel.app/en/projects/flacks-cc")[*Flack's Cut & Connect*], a full digital ecosystem automating 100% of appointments.],
        [Developed a REST API with Node.js and PostgreSQL for inventory and sales management.],
      )
    )
  )

  == Featured Projects
  #r2c2-entry-list(
    (
      ..proj-iapex([_Java, Spring Boot, PostgreSQL, Angular, Ionic, Python_]),
      list-items: (
        [Hybrid AI ecosystem for locating missing patients in healthcare institutions.],
        [Designed and built Spring Boot backend with REST APIs, JPA repositories, and PostgreSQL integration.],
        [Architected under strict privacy protocols and medical data security standards.],
      ),
    ),
    (
      ..proj-7d([_Node.js, PostgreSQL, Angular_]),
      list-items: (
        [Backend system for payment reconciliation and operational management.],
        [Reduced operational time by 95% through automated workflows and audit engine.],
      )
    ),
    (
      ..proj-dabetai([_Python, React Native, NestJS, Wearables_]),
      list-items: (
        [Preventive diabetes platform connecting wearables with medical supervision.],
        [Developed real-time risk prediction algorithms for nephropathy and retinopathy.],
      )
    )
  )

  #education
  #languages
]

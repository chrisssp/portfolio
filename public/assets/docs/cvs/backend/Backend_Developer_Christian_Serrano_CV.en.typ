#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.typ": education, languages
#import "../_shared/experiences.en.typ": exp-7d, exp-pepsico, exp-coppel, exp-azteca, exp-flacks
#import "../_shared/projects.en.typ": proj-iapex, proj-7d, proj-dabetai

#cv-start(
  [Backend Developer | Java, .NET, Node.js & Python],
  "en",
)[
  == Profile
  Backend engineer with *+2 years* of experience building production software, specialized in Java, .NET, Node.js, and Python. Experienced designing and building REST APIs, microservices, and data-intensive backend systems across multiple enterprise stacks. Strong foundation in software design patterns, object-oriented architecture, database design, and system security. Focused on writing clean, maintainable, and well-structured backend applications. Experienced in Linux environments and AI-augmented development workflows.

  == Technical Skills
  #multi-line-list(
    single-line-entry([*Backend (JVM & .NET):*], [Java, Spring Boot, .NET, JPA/Hibernate, Maven], []),
    single-line-entry([*Backend (Scripting):*], [Node.js (Express, NestJS), Python (Django, FastAPI), REST APIs, TypeScript], []),
    single-line-entry([*Databases:*], [PostgreSQL, MongoDB, MySQL, SQL Server], []),
    single-line-entry([*Infrastructure:*], [Docker, Git, Linux], []),
    single-line-entry([*Frontend (Integration):*], [Angular, React, React Native], []),
    single-line-entry([*Methodologies:*], [Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiar with:*], [Kotlin, Firebase, Supabase], [])
  )

  == Professional Experience
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Led the evolution of #link("https://chrisssp.vercel.app/en/projects/7dcompass")[*7D-Compass*] (Node.js/PostgreSQL), automating payment reconciliation and reducing operational time by *95%*.],
        [Implemented a centralized audit engine reconciling *\$5.5M USD* in transactions through complex backend validation logic.],
        [Optimized system security using *JWT/Bcrypt* following *OWASP* standards.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Developed #link("https://chrisssp.vercel.app/en/projects/mtrpa")[*Master Template Rutas Power App*] (Angular/MongoDB), automating processing of *+100k records* and reducing manual errors to zero.],
        [Optimized backend processing time by 70% through efficient data pipelines and database optimization.],
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
      ..exp-flacks,
      list-items: (
        [Built a REST API with Java (Spring Boot) and PostgreSQL to centralize inventory, sales, and appointment data.],
        [Deployed a full digital ecosystem backed by a unified API layer serving web and mobile clients.],
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
        [Backend system for payment reconciliation and operational management in construction.],
        [Reduced operational time by 95% through automated audit engine and backend validation logic.],
      )
    ),
    (
      ..proj-dabetai([_Python, React Native, NestJS, Wearables_]),
      list-items: (
        [Preventive diabetes platform connecting wearables with medical supervision.],
        [Developed real-time risk prediction algorithms using Python for nephropathy and retinopathy.],
      )
    )
  )

  #education
  #languages
]

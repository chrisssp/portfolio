#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.typ": education, languages
#import "../_shared/experiences.en.typ": exp-7d, exp-pepsico, exp-coppel, exp-azteca, exp-flacks
#import "../_shared/projects.en.typ": proj-mtrpa, proj-iapex, proj-7d

#cv-start(
  [Angular Developer | Frontend Engineer],
  "en",
)[
  == Profile
  Frontend engineer with +2 years of experience building production software, specialized in Angular, TypeScript, and Ionic. Experienced building enterprise-grade web applications with complex state management and RxJS-driven reactive architectures. Focused on modular, testable, and scalable frontend solutions for data-intensive business applications.

  == Technical Skills
  #multi-line-list(
    single-line-entry([*Frontend:*], [Angular, TypeScript, RxJS, TailwindCSS, HTML/CSS], []),
    single-line-entry([*Mobile:*], [Ionic, Capacitor], []),
    single-line-entry([*State & Data:*], [NgRx, Angular Router, REST APIs], []),
    single-line-entry([*Backend:*], [Node.js (Express, NestJS), Java (Spring Boot)], []),
    single-line-entry([*Databases:*], [PostgreSQL, MongoDB], []),
    single-line-entry([*Tools & OS:*], [Git, Linux, Figma, Docker], []),
    single-line-entry([*Methodologies:*], [Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiar:*], [React, React Native, Python], [])
  )

  == Professional Experience
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Led the evolution of #link("https://chrisssp.vercel.app/en/projects/7dcompass")[*7D-Compass*], an Angular/Node.js platform for payment reconciliation, reducing operational time by *95%*.],
        [Implemented a centralized audit engine to reconcile *\$2.3M USD* in transactions.],
        [Optimized Angular frontend performance (*3.2x* TTI) and strengthened system security using *JWT/Bcrypt* following *OWASP* standards.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Developed #link("https://chrisssp.vercel.app/en/projects/mtrpa")[*Master Template Rutas Power App*], an Angular/MongoDB web app replacing legacy Excel workflows.],
        [Automated processing of *+100k records*, reducing manual errors to zero.],
        [Designed the solution optimizing processing time by 70% through full-stack automation.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Built #link("https://chrisssp.vercel.app/en/projects/coppel-nexus")[*Coppel Nexus*], a full-stack web + mobile ecosystem (React/Node.js), in a 72-hour sprint.],
        [Selected among 1,400+ participants nationwide for the on-site phase of Talent Land 2025.],
        [Managed the team by strictly implementing *XP* and *Kanban* methodologies.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Led the development of #link("https://chrisssp.vercel.app/en/projects/azkali")[*Azkali*], an AI copilot built in a *48-hour* sprint using React Native and Gemini AI.],
        [Selected among 1,500 participants nationwide for the on-site phase of Talent Land 2026.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Deployed #link("https://chrisssp.vercel.app/en/projects/flacks-cc")[*Flack's Cut & Connect*], a complete digital ecosystem (Web & Mobile) automating 100% of appointments.],
        [Developed a REST API with Node.js and PostgreSQL to centralize inventory and sales.],
      )
    )
  )

  == Featured Projects
  #r2c2-entry-list(
    (
      ..proj-mtrpa([_Angular, TypeScript, MongoDB, Express_]),
      list-items: (
        [Centralized web app replacing legacy Excel workflows for PepsiCo's logistics operations.],
        [Automated processing of over 100,000 records, reducing manual errors to zero.],
        [Optimized processing time by 70% through end-to-end automation.],
      ),
    ),
    (
      ..proj-iapex([_Angular, Ionic, Spring Boot, Django, PostgreSQL, AI_]),
      list-items: (
        [Hybrid AI ecosystem for locating missing patients in healthcare institutions.],
        [Implemented a hybrid information fusion engine (Facial recognition + Textual).],
        [Architected under strict privacy protocols and medical data security standards.],
      ),
    ),
    (
      ..proj-7d([_Angular, Node.js, PostgreSQL_]),
      list-items: (
        [Platform for payment reconciliation and operational management for construction.],
        [Reduced operational time by 95% through automated workflows and audit engine.],
      )
    )
  )

  #education
  #languages
]

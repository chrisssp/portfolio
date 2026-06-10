#import "_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "_shared/sections.typ": education, languages
#import "_shared/experiences.en.typ": exp-7d, exp-azteca, exp-coppel, exp-pepsico, exp-flacks
#import "_shared/projects.en.typ": proj-iapex, proj-dabetai, proj-puntofiel

#cv-start(
  [Software Engineer | Full-Stack and Mobile Developer],
  "en",
)[
  == Profile
  Software engineer with *+2 years* of experience building production software. Focused on building efficient web and mobile ecosystems, experienced in Linux environments, prioritizing scalability, clean code, and performance. Translates business requirements into maintainable architectures through process automation and AI-augmented development workflows.

  == Technical Skills
  #multi-line-list(
    single-line-entry([*Frontend & Mobile:*], [React, React Native, Angular, Ionic, TypeScript, TailwindCSS, Astro], []),
    single-line-entry([*Backend:*], [Node.js (NestJS, Express), Java (Spring Boot), Python (Django, FastAPI), REST APIs, Supabase], []),
    single-line-entry([*Data & Infrastructure:*], [PostgreSQL, MongoDB, Supabase, Docker, Docker Compose], []),
    single-line-entry([*Tools & OS:*], [Git, GitHub, Linux, Figma, Claude Code, OpenCode, MCP], []),
    single-line-entry([*Methodologies:*], [SDD (Spec-Driven Development), Agile, Multi-model orchestration, Scrum, Kanban, XP, Design Thinking], []),
    single-line-entry([*Familiar with:*], [.NET, Kotlin, MySQL, Firebase, SQL Server], [])
  )

  == Professional Experience
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Led the evolution of *7D-Compass* (Angular/Node.js/PostgreSQL), automating payment reconciliation and reducing operational time by *95%*.],
        [Implemented a centralized audit engine to reconcile *\$5.5M USD* in transactions, detecting critical financial discrepancies through validation logic.],
        [Optimized frontend performance (*3.2x* TTI) and strengthened system security using *JWT/Bcrypt* following *OWASP* standards.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Led the development of *Azkali* during a *48-hour* sprint, creating a behavioral AI copilot to mitigate impulsive spending in Gen Z using *Design Thinking* methodology.],
        [Selected among 1,500 participants nationwide for the on-site phase of Talent Land 2026.],
        [Implemented a real-time impulsivity analysis engine using *Gemini 2.5 Flash-Lite*, translating monetary costs into operational opportunity costs.],
        [Architected the multi-platform ecosystem integrating *React Native* and *Supabase*, incorporating gamification mechanics.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Built *Coppel Nexus*, a gamified referral ecosystem for corporate expansion (React Native/Node.js).],
        [Selected among 1,400+ participants nationwide for the on-site phase of Talent Land 2025.],
        [Managed the team by strictly implementing *XP* and *Kanban* methodologies.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Developed *Master Template Rutas Power App*, a centralized Web App (Angular/MongoDB) replacing legacy Excel workflows.],
        [Automated processing of *+100k records*, reducing manual errors to zero.],
        [Designed the solution optimizing processing time by 70%.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Deployed *Flack's Cut and Connect*, a complete digital ecosystem (Web and Mobile), automating 100% of appointments.],
        [Built a REST API with Java (Spring Boot) and PostgreSQL to centralize inventory and sales.],
      )
    )
  )

  == Featured Projects
  #r2c2-entry-list(
    (
      ..proj-iapex([_Angular, Ionic, Spring Boot, Django, PostgreSQL, AI_]),
      list-items: (
        [Hybrid AI ecosystem for locating missing patients in healthcare institutions.],
        [Implemented a *hybrid information fusion* engine (Facial recognition + Textual).],
        [Designed the architecture under strict privacy protocols and medical data security standards.],
      ),
    ),
    (
      ..proj-dabetai([_React Native, NestJS, Expo, Python, Wearables_]),
      list-items: (
        [Diabetes preventive platform connecting wearables with medical supervision.],
        [Developed real-time risk prediction algorithms for nephropathy and retinopathy.],
        [Improved physician-patient response efficiency by *40%* through automated alerts.],
      )
    ),
    (
      ..proj-puntofiel([_React Native, Expo, Supabase, TanStack Query, Zustand_]),
      list-items: (
        [Loyalty application for local businesses with a rewards and coupon system using QR codes.],
        [Implemented granular data security using *Row Level Security (RLS)* from PostgreSQL on Supabase.],
        [Designed a scalable interface focused on merchant productivity and client agility.],
      )
    )
  )

  #education
  #languages
]

#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.typ": education, languages
#import "../_shared/experiences.en.typ": exp-7d, exp-coppel, exp-azteca, exp-pepsico, exp-flacks
#import "../_shared/projects.en.typ": proj-azkali, proj-coppel, proj-7d

#cv-start(
  [Frontend Developer | Angular & React],
  "en",
)[
  == Profile
  Frontend engineer with *+2 years* of experience building production software, specialized in Angular, React, and TypeScript. Experienced building enterprise-grade web applications and cross-platform mobile experiences across multiple frontend ecosystems. Strong foundation in reactive architectures, state management, component-driven design, and responsive UI. Focused on delivering intuitive, performant, and accessible user interfaces. Experienced in Linux environments and AI-augmented development workflows.

  == Technical Skills
  #multi-line-list(
    single-line-entry([*Frontend:*], [Angular, React, React Native, TypeScript, RxJS, TailwindCSS, HTML/CSS, Next.js], []),
    single-line-entry([*Mobile:*], [Ionic, Capacitor, Expo], []),
    single-line-entry([*State & Data:*], [NgRx, Zustand, TanStack Query, REST APIs, Supabase], []),
    single-line-entry([*Backend:*], [Node.js (Express, NestJS), Java (Spring Boot), Python (Django, FastAPI), REST APIs], []),
    single-line-entry([*Databases:*], [PostgreSQL, MongoDB], []),
    single-line-entry([*Tools & OS:*], [Git, Linux, Figma, Docker], []),
    single-line-entry([*Methodologies:*], [Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiar with:*], [.NET, Kotlin, MySQL, Firebase, SQL Server], [])
  )

  == Professional Experience
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Led the evolution of #link("https://chrisssp.vercel.app/en/projects/7dcompass")[*7D-Compass*] (Angular/Node.js/PostgreSQL), automating payment reconciliation and reducing operational time by *95%*.],
        [Optimized Angular frontend performance (*3.2x* TTI) through lazy loading, change detection optimization, and bundle analysis.],
        [Designed a centralized audit engine reconciling *\$5.5M USD* in transactions with interactive dashboards.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Built #link("https://chrisssp.vercel.app/en/projects/coppel-nexus")[*Coppel Nexus*], a full-stack React + React Native ecosystem for gamified referral management in a 72-hour sprint.],
        [Selected among 1,400+ participants nationwide for the on-site phase of Talent Land 2025.],
        [Managed the team by strictly implementing *XP* and *Kanban* methodologies.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Led the development of #link("https://chrisssp.vercel.app/en/projects/azkali")[*Azkali*] during a *48-hour* sprint, a React Native + React AI copilot with Gemini integration.],
        [Selected among 1,500 participants nationwide for the on-site phase of Talent Land 2026.],
        [Architected the multi-platform ecosystem using *React Native* (Expo), React web, and *Supabase*.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Developed #link("https://chrisssp.vercel.app/en/projects/mtrpa")[*Master Template Rutas Power App*] (Angular/MongoDB), a centralized web application replacing legacy Excel workflows.],
        [Automated processing of *+100k records*, reducing manual errors to zero.],
        [Designed the Angular architecture optimizing processing time by 70% through full-stack automation.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Deployed #link("https://chrisssp.vercel.app/en/projects/flacks-cc")[*Flack's Cut & Connect*], a complete digital ecosystem (React-based Web & Mobile), automating 100% of appointments.],
        [Built responsive interfaces with React and integrated with a Java (Spring Boot) REST API.],
      )
    )
  )

  == Featured Projects
  #r2c2-entry-list(
    (
      ..proj-azkali([_React, React Native, Supabase, Gemini AI_]),
      list-items: (
        [Behavioral AI copilot that generates cognitive friction on impulsive purchases by showing costs in work hours.],
        [Cross-platform ecosystem (React Native mobile + React web) built in a 48-hour sprint.],
        [Integrated Gemini 2.5 Flash-Lite for real-time spending analysis and gamification mechanics.],
      ),
    ),
    (
      ..proj-coppel([_React, React Native, MongoDB, Firebase, Express_]),
      list-items: (
        [Gamified referral ecosystem with field-ready mobile app and management web portal.],
        [Architected three-tier system: mobile (React Native), web (React), and backend API.],
        [Streamlined micro-business onboarding for Coppel's nationwide network.],
      ),
    ),
    (
      ..proj-7d([_Angular, Node.js, PostgreSQL_]),
      list-items: (
        [Platform for payment reconciliation and operational management in construction.],
        [Optimized frontend performance (3.2x TTI) through Angular best practices and lazy loading.],
        [Reduced operational time by 95% and reconciled \$5.5M USD in transactions.],
      )
    )
  )

  #education
  #languages
]

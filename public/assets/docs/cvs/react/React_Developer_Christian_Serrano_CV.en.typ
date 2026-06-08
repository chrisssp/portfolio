#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.typ": education, languages
#import "../_shared/experiences.en.typ": exp-coppel, exp-azteca, exp-7d, exp-pepsico, exp-flacks
#import "../_shared/projects.en.typ": proj-azkali, proj-coppel, proj-puntofiel

#cv-start(
  [React Developer | Frontend & Mobile Engineer],
  "en",
)[
  == Profile
  Frontend engineer with *+2 years* of experience building production software, specialized in React, React Native, and TypeScript. Experienced building responsive web applications and cross-platform mobile experiences with modern state management and component architecture. Focused on performance, clean code, and translating business requirements into intuitive user interfaces. Experienced in Linux environments and AI-augmented development workflows.

  == Technical Skills
  #multi-line-list(
    single-line-entry([*Frontend & Mobile:*], [React, React Native, Angular, Ionic, TypeScript, TailwindCSS, Expo, Next.js, Astro], []),
    single-line-entry([*State & Data:*], [Zustand, TanStack Query, Supabase, Firebase], []),
    single-line-entry([*Backend:*], [Node.js (Express, NestJS), Java (Spring Boot), Python (Django, FastAPI), REST APIs], []),
    single-line-entry([*Databases:*], [PostgreSQL, MongoDB], []),
    single-line-entry([*Tools & OS:*], [Git, Linux, Figma, Docker & Docker Compose], []),
    single-line-entry([*Methodologies:*], [Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiar with:*], [.NET, Kotlin, MySQL, Firebase, SQL Server], [])
  )

  == Professional Experience
  #r2c2-entry-list(
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
      ..exp-7d,
      list-items: (
        [Led the evolution of #link("https://chrisssp.vercel.app/en/projects/7dcompass")[*7D-Compass*] (Angular/Node.js/PostgreSQL), automating payment reconciliation and reducing operational time by *95%*.],
        [Implemented a centralized audit engine to reconcile *\$5.5M USD* in transactions.],
        [Optimized frontend performance (*3.2x* TTI) and strengthened system security using *JWT/Bcrypt* following *OWASP* standards.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Developed #link("https://chrisssp.vercel.app/en/projects/mtrpa")[*Master Template Rutas Power App*], a centralized Web App (Angular/MongoDB) replacing legacy Excel workflows.],
        [Automated processing of *+100k records*, reducing manual errors to zero.],
        [Optimized processing time by 70% through full-stack automation.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Deployed #link("https://chrisssp.vercel.app/en/projects/flacks-cc")[*Flack's Cut & Connect*], a complete digital ecosystem (React-based Web & Mobile), automating 100% of appointments.],
        [Built a REST API with Java (Spring Boot) and PostgreSQL to centralize inventory and sales.],
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
      ..proj-puntofiel([_React Native, Expo, Supabase, TanStack Query, Zustand_]),
      list-items: (
        [Loyalty application for local businesses with reward system and QR-based coupons.],
        [Implemented granular data security using PostgreSQL Row Level Security.],
        [Designed scalable interface focused on merchant productivity and customer agility.],
      )
    )
  )

  #education
  #languages
]

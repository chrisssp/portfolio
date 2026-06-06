#import "@preview/pro-academic-cv:0.1.0": *

#show: resume.with(
  author-info: (
    name: "Christian Serrano",
    primary-info: [
      React Developer | Frontend & Mobile Engineer \
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
Frontend engineer specialized in React, React Native, and TypeScript. Experienced building responsive web applications and cross-platform mobile experiences with modern state management and component architecture. Focused on performance, clean code, and translating business requirements into intuitive user interfaces.

== Technical Skills
#multi-line-list(
  single-line-entry([*Frontend & Mobile:*], [React, React Native, TypeScript, TailwindCSS, Expo, Next.js], []),
  single-line-entry([*State & Data:*], [Zustand, TanStack Query, Supabase, Firebase], []),
  single-line-entry([*Backend:*], [Node.js (Express, NestJS), REST APIs], []),
  single-line-entry([*Databases:*], [PostgreSQL, MongoDB], []),
  single-line-entry([*Tools & OS:*], [Git, Linux, Figma, Docker], []),
  single-line-entry([*Methodologies:*], [Scrum, Kanban, XP, Design Thinking, SDD], []),
  single-line-entry([*Familiar:*], [Angular, Ionic, Java, Python], [])
)

== Professional Experience
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [*Coppel (Genius Arena Hackathon — Talent Land 2025)*],
      top-right: [April 2025],
      bottom-left: [4th Place & Team Lead],
      bottom-right: [Guadalajara, Jalisco, Mexico],
    ),
    list-items: (
      [Built #link("https://chrisssp.vercel.app/en/projects/coppel-nexus")[*Coppel Nexus*], a full-stack React + React Native ecosystem for gamified referral management in a 72-hour sprint.],
      [Selected among 1,400+ participants nationwide for the on-site phase of Talent Land 2025.],
      [Managed the team by strictly implementing *XP* and *Kanban* methodologies.],
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
      [Led the development of #link("https://chrisssp.vercel.app/en/projects/azkali")[*Azkali*] during a *48-hour* sprint, a React Native + React AI copilot with Gemini integration.],
      [Selected among 1,500 participants nationwide for the on-site phase of Talent Land 2026.],
      [Architected the multi-platform ecosystem using *React Native* (Expo), React web, and *Supabase*.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Seven D Construction*],
      top-right: [January 2026 -- April 2026],
      bottom-left: [Software Engineer (Remote)],
      bottom-right: [Chicago, IL, USA / Mexico],
    ),
    list-items: (
      [Led the evolution of #link("https://chrisssp.vercel.app/en/projects/7dcompass")[*7D-Compass*] (Angular/Node.js/PostgreSQL), automating payment reconciliation and reducing operational time by *95%*.],
      [Implemented a centralized audit engine to reconcile *\$2.3M USD* in transactions.],
      [Optimized frontend performance (*3.2x* TTI) and strengthened system security using *JWT/Bcrypt* following *OWASP* standards.],
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
      [Developed #link("https://chrisssp.vercel.app/en/projects/mtrpa")[*Master Template Rutas Power App*], a centralized Web App (Angular/MongoDB) replacing legacy Excel workflows.],
      [Automated processing of *+100k records*, reducing manual errors to zero.],
      [Optimized processing time by 70% through full-stack automation.],
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
      [Deployed #link("https://chrisssp.vercel.app/en/projects/flacks-cc")[*Flack's Cut & Connect*], a complete digital ecosystem (React-based Web & Mobile), automating 100% of appointments.],
      [Developed a REST API with Node.js and PostgreSQL to centralize inventory and sales.],
    )
  )
)

== Featured Projects
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/en/projects/azkali")[*Azkali*]],
      top-right: [],
      bottom-left: [_React, React Native, Supabase, Gemini AI_],
      bottom-right: [],
    ),
    list-items: (
      [Behavioral AI copilot that generates cognitive friction on impulsive purchases by showing costs in work hours.],
      [Cross-platform ecosystem (React Native mobile + React web) built in a 48-hour sprint.],
      [Integrated Gemini 2.5 Flash-Lite for real-time spending analysis and gamification mechanics.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/en/projects/coppel-nexus")[*Coppel Nexus*]],
      top-right: [],
      bottom-left: [_React, React Native, MongoDB, Firebase, Express_],
      bottom-right: [],
    ),
    list-items: (
      [Gamified referral ecosystem with field-ready mobile app and management web portal.],
      [Architected three-tier system: mobile (React Native), web (React), and backend API.],
      [Streamlined micro-business onboarding for Coppel's nationwide network.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/en/projects/puntofiel")[*PuntoFiel*]],
      top-right: [],
      bottom-left: [_React Native, Expo, Supabase, TanStack Query, Zustand_],
      bottom-right: [],
    ),
    list-items: (
      [Loyalty application for local businesses with reward system and QR-based coupons.],
      [Implemented granular data security using PostgreSQL Row Level Security.],
      [Designed scalable interface focused on merchant productivity and customer agility.],
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

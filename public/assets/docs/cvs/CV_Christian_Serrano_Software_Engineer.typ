#import "@preview/pro-academic-cv:0.1.0": *

#show: resume.with(
  author-info: (
    name: "Christian Serrano",
    primary-info: [
      Software Engineer | Full-Stack & Mobile Developer \
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
Focused on building efficient web and mobile ecosystems. Experienced in Linux environments, prioritizing scalability, clean code, and performance. Translates business requirements into maintainable architectures through process automation and AI-augmented development workflows.

== Technical Skills
#multi-line-list(
  single-line-entry([*Frontend & Mobile:*], [React, React Native, Angular, Ionic, TypeScript, TailwindCSS], []),
  single-line-entry([*Backend:*], [Node.js (NestJS, Express), Java (Spring Boot), Python (Django, FastAPI), Supabase], []),
  single-line-entry([*Data & Infrastructure:*], [PostgreSQL, MongoDB, Supabase, Docker], []),
  single-line-entry([*Tools & OS:*], [Git, Linux, Figma, Claude Code, OpenCode, MCP], []),
  single-line-entry([*Methodologies:*], [SDD (Spec-Driven Development), Multi-model orchestration, Scrum, Kanban, XP, Design Thinking], []),
  single-line-entry([*Familiar with:*], [.NET, Kotlin, MySQL, Firebase, SQL Server], [])
)

== Professional Experience
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [*Seven D Construction*],
      top-right: [January 2026 -- May 2026],
      bottom-left: [Software Engineer (Remote)],
      bottom-right: [Chicago, IL, USA / Mexico],
    ),
    list-items: (
      [Led the evolution of #link("https://chrisssp.vercel.app/en/projects/7dcompass")[*7D-Compass*] (Angular/Node.js/PostgreSQL), automating payment reconciliation and reducing operational time by *95%*.],
      [Implemented a centralized audit engine to reconcile *\$2.3M USD* in transactions, detecting critical financial discrepancies through validation logic.],
      [Optimized frontend performance (*3.2x* TTI) and strengthened system security using *JWT/Bcrypt* following *OWASP* standards.],
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
      [Led the development of #link("https://chrisssp.vercel.app/en/projects/azkali")[*Azkali*] during a *48-hour* sprint, creating a behavioral AI copilot to mitigate impulsive spending in Gen Z using *Design Thinking* methodology.],
      [Selected among 1,500 participants nationwide for the on-site phase of Talent Land 2026.],
      [Implemented a real-time impulsivity analysis engine using *Gemini 2.5 Flash-Lite*, translating monetary costs into operational opportunity costs.],
      [Architected the multi-platform ecosystem integrating *React Native* and *Supabase*, incorporating gamification mechanics.],
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
      [Built #link("https://chrisssp.vercel.app/en/projects/coppel-nexus")[*Coppel Nexus*], a gamified referral ecosystem for corporate expansion (React Native/Node.js).],
      [Selected among 1,400+ participants nationwide for the on-site phase of Talent Land 2025.],
      [Managed the team by strictly implementing *XP* and *Kanban* methodologies.],
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
      [Designed the "Master Template Rutas Power App" solution, optimizing processing time by 70%.],
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
      [Deployed #link("https://chrisssp.vercel.app/en/projects/flacks-cc")[*Flack's Cut & Connect*], a complete digital ecosystem (Web & Mobile), automating 100% of appointments.],
      [Developed a REST API with Node.js and PostgreSQL to centralize inventory and sales.],
    )
  )
)

== Featured Projects
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/en/projects/iapex")[*IAPEX*]],
      top-right: [],
      bottom-left: [_Angular, Ionic, Spring Boot, Django, PostgreSQL, AI_],
      bottom-right: [],
    ),
    list-items: (
      [Hybrid AI ecosystem for locating missing patients in healthcare institutions.],
      [Implemented a *hybrid information fusion* engine (Facial recognition + Textual).],
      [Designed the architecture under strict privacy protocols and medical data security standards.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/en/projects/dabetai")[*dabetai*]],
      top-right: [],
      bottom-left: [_React Native, NestJS, Expo, Python, Wearables_],
      bottom-right: [],
    ),
    list-items: (
      [Diabetes preventive platform connecting wearables with medical supervision.],
      [Developed real-time risk prediction algorithms for nephropathy and retinopathy.],
      [Improved physician-patient response efficiency by *40%* through automated alerts.],
    )
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/en/projects/puntofiel")[*PuntoFiel*]],
      top-right: [],
      bottom-left: [_React Native, Expo, Supabase, TanStack Query, Zustand_],
      bottom-right: [],
    ),
    list-items: (
      [Loyalty application for local businesses with a rewards and coupon system using QR codes.],
      [Implemented granular data security using *Row Level Security (RLS)* from PostgreSQL on Supabase.],
      [Designed a scalable interface focused on merchant productivity and client agility.],
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

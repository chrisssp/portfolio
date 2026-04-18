#import "@preview/pro-academic-cv:0.1.0": *

#show: resume.with(
  author-info: (
    name: "Christian Serrano",
    primary-info: [
      Software Engineer | Full-Stack & Mobile Developer \
      +52 271 266 73 65 | #link("mailto:christian.serrano.puertos@gmail.com")[christian.serrano.puertos\@gmail.com]
    ],
    secondary-info: [
      #link("https://linkedin.com/in/chrisssp")[linkedin.com/in/chrisssp] | #link("https://github.com/chrisssp")[github.com/chrisssp]
    ],
    tertiary-info: "Córdoba, Veracruz, México",
  ),
  author-position: center
)

== Profile
Focused on building efficient web and mobile ecosystems. Experienced in operating within Linux environments, prioritizing scalability, clean code, and performance. Results-oriented professional skilled in translating business requirements into maintainable architectures and process automation.

== Technical Skills
#multi-line-list(
  single-line-entry([*Frontend & Mobile:*], [React, React Native, Angular, Ionic, TypeScript, TailwindCSS], []),
  single-line-entry([*Backend:*], [Node.js (NestJS, Express), Java (Spring Boot), Supabase], []),
  single-line-entry([*Data & Infrastructure:*], [PostgreSQL, MongoDB, Supabase, Docker], []),
  single-line-entry([*Tools & OS:*], [Git, Linux, Figma], []),
  single-line-entry([*Familiar with:*], [Kotlin, Python (Django, FastAPI), MySQL, Firebase], [])
)

== Professional Experience
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [*Seven D Construction*],
      top-right: [January 2026 -- April 2026],
      bottom-left: [Software Engineer Intern (Remote)],
      bottom-right: [Chicago, IL / Mexico],
    ),
    list-items: (
      [Led the evolution of #link("https://7d-compass.com/")[*7D-Compass*] (Angular/Node.js/PostgreSQL), automating payment reconciliation and reducing operational time by *95%*.],
      [Implemented a centralized audit engine to reconcile *\$2.3M USD* in transactions, detecting critical financial discrepancies through validation logic.],
      [Optimized frontend performance (*3.2x* TTI) and strengthened system security using *JWT/Bcrypt* following *OWASP* standards.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Banco Azteca (Talent Land 2026)*],
      top-right: [April 2026],
      bottom-left: [Hackathon Participant & Team Lead],
      bottom-right: [CDMX, Santa Fe],
    ),
    list-items: (
      [Led the development of #link("https://azkali-landing.vercel.app/")[*Azkali*] during a *48-hour* sprint, creating a behavioral AI copilot to mitigate impulsive spending in Gen Z using *Design Thinking* methodology.],
      [Implemented a real-time impulsivity analysis engine using *Gemini 2.5 Flash-Lite*, translating monetary costs into operational opportunity costs.],
      [Architected the multi-platform ecosystem integrating *React Native*, *FastAPI*, and *Supabase*, incorporating gamification mechanics.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Coppel (Talent Land 2025)*],
      top-right: [April 2025],
      bottom-left: [4th Place & Team Lead],
      bottom-right: [Guadalajara, Jalisco],
    ),
    list-items: (
      [Built a gamified referral ecosystem in a 4-day sprint (React Native/Node.js).],
      [Managed the team by strictly implementing *XP* and *Kanban* methodologies.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*PepsiCo*],
      top-right: [May 2024 -- August 2024],
      bottom-left: [Software Engineer Intern (Remote)],
      bottom-right: [Veracruz, Mexico],
    ),
    list-items: (
      [Developed a centralized Web App (Angular/MongoDB) replacing legacy Excel workflows.],
      [Automated processing of *+100k records*, reducing manual errors to zero.],
      [Designed the "Master Template Rutas" solution, optimizing processing time by 70%.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Flack's Barber Shop*],
      top-right: [October 2022 -- April 2024],
      bottom-left: [Full Stack Developer - Freelancer],
      bottom-right: [Veracruz, Mexico],
    ),
    list-items: (
      [Deployed a complete digital ecosystem (Web & Mobile), automating 100% of appointments.],
      [Developed a REST API with Node.js and PostgreSQL to centralize inventory and sales.],
    )
  )
)

== Featured Projects
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [#link("https://github.com/aescobar80/IAPEX_APP-WEB")[*IAPEX*]],
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
      top-left: [#link("https://github.com/dabetai-org/dabetai-mobileapp")[*dabetai*]],
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
      top-left: [#link("https://github.com/chrisssp/puntofiel-mobileapp")[*Punto Fiel*]],
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
      bottom-right: [Cuitláhuac, Ver.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Universidad Tecnológica del Centro de Veracruz*],
      top-right: [August 2024],
      bottom-left: [Associate Degree (TSU) in Multiplatform Software Development],
      bottom-right: [Cuitláhuac, Ver.],
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

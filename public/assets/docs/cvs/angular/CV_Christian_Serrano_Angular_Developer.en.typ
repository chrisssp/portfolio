#import "@preview/pro-academic-cv:0.1.0": *

#show: resume.with(
  author-info: (
    name: "Christian Serrano",
    primary-info: [
      Angular Developer | Frontend Engineer \
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
Frontend engineer specialized in Angular, TypeScript, and Ionic. Experienced building enterprise-grade web applications with complex state management and RxJS-driven reactive architectures. Focused on modular, testable, and scalable frontend solutions for data-intensive business applications.

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
    entry-header-args: (
      top-left: [*Seven D Construction*],
      top-right: [January 2026 -- April 2026],
      bottom-left: [Software Engineer (Remote)],
      bottom-right: [Chicago, IL, USA / Mexico],
    ),
    list-items: (
      [Led the evolution of #link("https://chrisssp.vercel.app/en/projects/7dcompass")[*7D-Compass*], an Angular/Node.js platform for payment reconciliation, reducing operational time by *95%*.],
      [Implemented a centralized audit engine to reconcile *\$2.3M USD* in transactions.],
      [Optimized Angular frontend performance (*3.2x* TTI) and strengthened system security using *JWT/Bcrypt* following *OWASP* standards.],
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
      [Developed #link("https://chrisssp.vercel.app/en/projects/mtrpa")[*Master Template Rutas Power App*], an Angular/MongoDB web app replacing legacy Excel workflows.],
      [Automated processing of *+100k records*, reducing manual errors to zero.],
      [Designed the solution optimizing processing time by 70% through full-stack automation.],
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
      [Built #link("https://chrisssp.vercel.app/en/projects/coppel-nexus")[*Coppel Nexus*], a full-stack web + mobile ecosystem (React/Node.js), in a 72-hour sprint.],
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
      [Led the development of #link("https://chrisssp.vercel.app/en/projects/azkali")[*Azkali*], an AI copilot built in a *48-hour* sprint using React Native and Gemini AI.],
      [Selected among 1,500 participants nationwide for the on-site phase of Talent Land 2026.],
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
      [Deployed #link("https://chrisssp.vercel.app/en/projects/flacks-cc")[*Flack's Cut & Connect*], a complete digital ecosystem (Web & Mobile) automating 100% of appointments.],
      [Developed a REST API with Node.js and PostgreSQL to centralize inventory and sales.],
    )
  )
)

== Featured Projects
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/en/projects/mtrpa")[*Master Template Rutas Power App*]],
      top-right: [],
      bottom-left: [_Angular, TypeScript, MongoDB, Express_],
      bottom-right: [],
    ),
    list-items: (
      [Centralized web app replacing legacy Excel workflows for PepsiCo's logistics operations.],
      [Automated processing of over 100,000 records, reducing manual errors to zero.],
      [Optimized processing time by 70% through end-to-end automation.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/en/projects/iapex")[*IAPEX*]],
      top-right: [],
      bottom-left: [_Angular, Ionic, Spring Boot, Django, PostgreSQL, AI_],
      bottom-right: [],
    ),
    list-items: (
      [Hybrid AI ecosystem for locating missing patients in healthcare institutions.],
      [Implemented a hybrid information fusion engine (Facial recognition + Textual).],
      [Architected under strict privacy protocols and medical data security standards.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/en/projects/7dcompass")[*7D-Compass*]],
      top-right: [],
      bottom-left: [_Angular, Node.js, PostgreSQL_],
      bottom-right: [],
    ),
    list-items: (
      [Platform for payment reconciliation and operational management for construction.],
      [Reduced operational time by 95% through automated workflows and audit engine.],
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

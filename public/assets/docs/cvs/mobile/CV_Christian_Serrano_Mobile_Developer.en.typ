#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.typ": education, languages
#import "../_shared/experiences.en.typ": exp-coppel, exp-azteca, exp-flacks, exp-7d, exp-pepsico
#import "../_shared/projects.en.typ": proj-coppel, proj-azkali, proj-puntofiel

#cv-start(
  [Mobile Developer | React Native Engineer],
  "en",
)[
  == Profile
  Mobile developer specialized in React Native and Expo. Experienced building cross-platform applications from concept to deployment — with focus on native performance, smooth UI/UX, and seamless backend integration. Proven ability to deliver production-ready mobile solutions under tight deadlines.

  == Technical Skills
  #multi-line-list(
    single-line-entry([*Mobile:*], [React Native, Expo, TypeScript, TailwindCSS, GlueStack, Nativewind], []),
    single-line-entry([*Frontend:*], [React, Angular, Ionic], []),
    single-line-entry([*Backend & APIs:*], [Node.js (Express, NestJS), REST APIs, Supabase], []),
    single-line-entry([*Databases:*], [PostgreSQL, MongoDB, Firebase], []),
    single-line-entry([*Tools & OS:*], [Git, Linux, Figma, Docker, EAS Build], []),
    single-line-entry([*Methodologies:*], [Scrum, Kanban, XP, Design Thinking], []),
    single-line-entry([*Familiar:*], [Java, Python, Spring Boot], [])
  )

  == Professional Experience
  #r2c2-entry-list(
    (
      ..exp-coppel,
      list-items: (
        [Built #link("https://chrisssp.vercel.app/en/projects/coppel-nexus")[*Coppel Nexus*], a React Native + Expo mobile app for field collaborators to register micro-businesses on-site.],
        [Selected among 1,400+ participants nationwide for the on-site phase of Talent Land 2025.],
        [Managed the team by strictly implementing *XP* and *Kanban* methodologies in a 72-hour sprint.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Led the development of #link("https://chrisssp.vercel.app/en/projects/azkali")[*Azkali*], a React Native AI copilot with conversational interface and behavioral economics engine.],
        [Selected among 1,500 participants nationwide for the on-site phase of Talent Land 2026.],
        [Architected the cross-platform experience using *Expo*, *Nativewind*, and *Supabase* in a 48-hour sprint.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Deployed #link("https://chrisssp.vercel.app/en/projects/flacks-cc")[*Flack's Cut & Connect*], a complete mobile + web ecosystem automating 100% of appointment scheduling.],
        [Developed a REST API with Node.js and PostgreSQL for real-time inventory and sales sync.],
      )
    ),
    (
      ..exp-7d,
      list-items: (
        [Led the evolution of #link("https://chrisssp.vercel.app/en/projects/7dcompass")[*7D-Compass*], reducing operational time by *95%* and reconciling *\$2.3M USD* in transactions.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Developed a centralized web app processing *+100k records*, reducing manual errors to zero.],
      )
    )
  )

  == Featured Projects
  #r2c2-entry-list(
    (
      ..proj-coppel([_React Native, Expo, MongoDB, Express_]),
      list-items: (
        [Field-ready mobile app for micro-business referral and onboarding for Coppel's national network.],
        [Real-time tracking of collaborator routes, progress, and referral status.],
      ),
    ),
    (
      ..proj-azkali([_React Native, Expo, Supabase, Gemini AI_]),
      list-items: (
        [Behavioral AI copilot with conversational interface for financial coaching targeting Gen Z.],
        [Cross-platform mobile experience built with Expo and Nativewind for native-quality UI.],
      ),
    ),
    (
      ..proj-puntofiel([_React Native, Expo, Supabase, TanStack Query, Zustand_]),
      list-items: (
        [Loyalty app for local businesses with QR-based rewards and coupon system.],
        [Implemented granular data security using PostgreSQL Row Level Security.],
      )
    )
  )

  #education
  #languages
]

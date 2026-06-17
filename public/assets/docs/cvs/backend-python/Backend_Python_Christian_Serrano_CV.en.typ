#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.typ": education, languages
#import "../_shared/experiences.en.typ": exp-7d, exp-pepsico, exp-coppel, exp-azteca, exp-flacks
#import "../_shared/projects.en.typ": proj-iapex, proj-dabetai, proj-azkali

#cv-start(
  [Backend Engineer | Python, Django and FastAPI],
  "en",
)[
  == Profile
  Backend engineer with experience building production software, specialized in Python, Django, and FastAPI. Experienced building REST APIs, data processing systems, and AI-integrated backend solutions. Focused on clean code, testability, automation, and scalable architectures. Proven track record delivering full-stack projects with a strong backend foundation. Experienced in Linux environments and AI-augmented development workflows.

  == Technical Skills
  #multi-line-list(
    single-line-entry([*Backend:*], [Python, Django, FastAPI, REST APIs, Celery, Microservices], []),
    single-line-entry([*AI & Data:*], [Gemini API, LangChain, Pandas, NumPy], []),
    single-line-entry([*Databases:*], [PostgreSQL, MongoDB, Supabase], []),
    single-line-entry([*Infrastructure:*], [Docker, Docker Compose, Git, GitHub, Linux, CI/CD, GitHub Actions, pytest], []),
    single-line-entry([*Other Languages:*], [Node.js, Java, TypeScript], []),
    single-line-entry([*Frontend:*], [React, Angular, TypeScript], []),
    single-line-entry([*Methodologies:*], [Agile, Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiar with:*], [.NET, Kotlin, MySQL, Firebase, SQL Server, AWS, Azure, GraphQL, Vercel, Netlify], [])
  )

  == Professional Experience
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Led the evolution of *7D-Compass* (Angular/Node.js/PostgreSQL), automating payment reconciliation and reducing operational time by *95%*.],
        [Implemented a centralized audit engine reconciling *\$5.5M USD* in transactions through backend validation logic.],
        [Optimized system security using *JWT/Bcrypt* following *OWASP* standards.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Developed *Master Template Rutas Power App* (Angular/MongoDB), automating processing of *+100k records* and reducing manual errors to zero.],
        [Designed backend data pipelines optimizing processing time by 70%.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Built *Coppel Nexus*, a full-stack referral ecosystem (React Native/Node.js), leading team through XP and Kanban.],
        [Selected among 1,400+ participants nationwide for the on-site phase of Talent Land 2025.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Led the development of *Azkali*, an AI copilot integrating Gemini 2.5 Flash-Lite in a 48-hour sprint.],
        [Selected among 1,500 participants nationwide for the on-site phase of Talent Land 2026.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Deployed *Flack's Cut and Connect*, a full digital ecosystem automating 100% of appointments.],
        [Built a REST API with Java (Spring Boot) and PostgreSQL for inventory and sales management.],
      )
    )
  )

  == Featured Projects
  #r2c2-entry-list(
    (
      ..proj-iapex([_Python, Django, Spring Boot, PostgreSQL, AI_]),
      list-items: (
        [Hybrid AI ecosystem for locating missing patients in healthcare institutions.],
        [Built Django backend with REST APIs, PostgreSQL integration, and AI orchestration.],
        [Implemented hybrid information fusion engine (Facial recognition + Textual search).],
      ),
    ),
    (
      ..proj-dabetai([_Python, React Native, NestJS, Wearables_]),
      list-items: (
        [Preventive diabetes platform connecting wearables with medical supervision.],
        [Developed real-time risk prediction algorithms using Python for nephropathy and retinopathy.],
        [Improved physician-patient response efficiency by 40% through automated alerts.],
      ),
    ),
    (
      ..proj-azkali([_React Native, Supabase, Gemini AI, Python_]),
      list-items: (
        [Behavioral AI copilot integrating Gemini 2.5 Flash-Lite for real-time spending analysis.],
        [Python-based backend logic for behavioral economics engine and gamification mechanics.],
      )
    )
  )

  #education
  #languages
]

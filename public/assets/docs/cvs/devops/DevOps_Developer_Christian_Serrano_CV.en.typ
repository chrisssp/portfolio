#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.typ": education, languages
#import "../_shared/experiences.en.typ": exp-7d, exp-pepsico, exp-flacks, exp-coppel, exp-azteca
#import "../_shared/projects.en.typ": proj-iapex, proj-7d, proj-dabetai

#cv-start(
  [DevOps Engineer | CI/CD, Infrastructure & Automation],
  "en",
)[
  == Profile
  DevOps engineer with experience building and automating production infrastructure. Skilled in Linux environments, containerization with Docker, CI/CD pipelines on GitHub Actions, and cloud-native deployment workflows. Focused on infrastructure automation, system security, and building reliable, scalable deployment processes that bridge development and operations. Combines a strong software engineering background with hands-on infrastructure management and AI-augmented tooling.

  == Technical Skills
  #multi-line-list(
    single-line-entry([*CI/CD & Automation:*], [GitHub Actions, CI/CD Pipelines, Automated Deployments, Process Automation, Git], []),
    single-line-entry([*Containers & Virtualization:*], [Docker, Docker Compose, Linux, Vercel, Netlify], []),
    single-line-entry([*Cloud & Infrastructure:*], [AWS, Azure, Supabase, Microservices, GraphQL], []),
    single-line-entry([*Scripting & Programming:*], [Node.js, Python, Bash, TypeScript, REST APIs], []),
    single-line-entry([*Databases & Data:*], [PostgreSQL, MongoDB, Supabase, MySQL, SQL Server], []),
    single-line-entry([*Security & Compliance:*], [JWT, Bcrypt, OWASP Standards, Row Level Security, Data Privacy], []),
    single-line-entry([*Monitoring & Observability:*], [Performance Optimization (3.2x TTI), Audit Engines, Validation Logic], []),
    single-line-entry([*Methodologies:*], [SDD (Spec-Driven Development), Agile, Scrum, Kanban, XP, Design Thinking], []),
    single-line-entry([*Tools & OS:*], [Git, GitHub, Linux, Claude Code, OpenCode, MCP, Figma, JUnit, Jest, Cypress], []),
    single-line-entry([*Familiar with:*], [.NET, Kotlin, Firebase, Kafka, Java, Spring Boot, Angular, React], [])
  )

  == Professional Experience
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Led the evolution of *7D-Compass*, automating payment reconciliation via CI/CD workflows and reducing operational time by *95%*.],
        [Implemented a centralized audit engine reconciling *\$5.5M USD* in transactions through automated validation logic and infrastructure monitoring.],
        [Containerized the application stack using *Docker* and *Docker Compose*, streamlining deployments across environments.],
        [Optimized system security with *JWT/Bcrypt* following *OWASP* standards and improved frontend delivery performance by *3.2x*.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Automated processing of *+100k records* replacing legacy Excel workflows with a centralized web application, eliminating manual errors.],
        [Optimized backend processing time by 70% through efficient data pipelines and infrastructure configuration.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Designed and deployed a full digital ecosystem (Web + Mobile) backed by a *REST API* with Java Spring Boot and PostgreSQL.],
        [Architected the infrastructure for centralized inventory, sales, and appointment management serving multiple client platforms.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Built the infrastructure for *Coppel Nexus*, a gamified referral ecosystem (React Native/Node.js) during a 72-hour sprint.],
        [Managed CI/CD pipelines and deployment workflows as Team Lead, coordinating multi-platform releases.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Led development of *Azkali's* infrastructure, integrating *Supabase* for real-time storage with *Row Level Security*.],
        [Orchestrated Gemini AI logic with cloud database infrastructure during a 48-hour sprint.],
      )
    )
  )

  == Featured Projects
  #r2c2-entry-list(
    (
      ..proj-7d([_Node.js, PostgreSQL, Docker, Angular, CI/CD_]),
      list-items: (
        [Infrastructure for payment reconciliation and operational management in construction.],
        [Dockerized stack with automated CI/CD pipelines reducing operational time by 95%.],
        [Centralized audit engine with validation infrastructure for financial transactions.],
      )
    ),
    (
      ..proj-iapex([_Spring Boot, PostgreSQL, Angular, Ionic, Python, Docker_]),
      list-items: (
        [Hybrid AI ecosystem for locating missing patients in healthcare institutions.],
        [Designed infrastructure under strict privacy protocols and medical data security standards.],
        [Deployed multi-service architecture integrating facial recognition and text search.],
      )
    ),
    (
      ..proj-dabetai([_Python, React Native, NestJS, Wearables, Docker_]),
      list-items: (
        [Preventive diabetes platform connecting wearables with medical supervision.],
        [Infrastructure for real-time risk prediction algorithms and automated alert delivery.],
        [Reduced physician-patient response time by 40% through automated notification pipelines.],
      )
    )
  )

  #education
  #languages
]

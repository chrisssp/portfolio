#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.typ": education, languages
#import "../_shared/experiences.en.typ": exp-azteca, exp-7d, exp-coppel, exp-pepsico, exp-flacks
#import "../_shared/projects.en.typ": proj-azkali, proj-iapex, proj-dabetai

#cv-start(
  [AI/ML Engineer | Intelligent Systems Developer],
  "en",
)[
  == Profile
  Software engineer with hands-on experience building AI-powered applications and intelligent systems. Skilled in integrating LLMs, developing real-time inference pipelines, and designing ML-driven solutions for behavioral analytics, predictive healthcare, and natural language processing. Focused on translating complex business problems into production-ready AI systems with clean architecture and scalable infrastructure. Experienced in Linux environments and AI-augmented development workflows.

  == Technical Skills
  #multi-line-list(
    single-line-entry([*AI & ML:*], [Gemini API, LangChain, LLM Orchestration, Prompt Engineering, RAG, Behavioral Analytics, NLP], []),
    single-line-entry([*Languages:*], [Python, TypeScript, Java, SQL], []),
    single-line-entry([*Frameworks:*], [Django, FastAPI, Node.js (NestJS, Express), React Native, Expo], []),
    single-line-entry([*Data & Storage:*], [PostgreSQL, Supabase, MongoDB, Firebase, Row Level Security], []),
    single-line-entry([*ML/Data Tools:*], [Pandas, NumPy, Real-time Inference, Time Series, Predictive Modeling], []),
    single-line-entry([*Infrastructure:*], [Docker, Docker Compose, Git, GitHub, Linux, CI/CD, GitHub Actions], []),
    single-line-entry([*Methodologies:*], [Agile, Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiar with:*], [TensorFlow, PyTorch, Scikit-learn, Hugging Face, AWS, Azure], [])
  )

  == Professional Experience
  #r2c2-entry-list(
    (
      ..exp-azteca,
      list-items: (
        [Led the development of *Azkali*, an AI copilot integrating *Gemini 2.5 Flash-Lite* for real-time behavioral spending analysis.],
        [Built a real-time impulsivity detection engine translating monetary costs into operational opportunity costs using *Design Thinking*.],
        [Selected among 1,500 participants nationwide for the on-site phase of Talent Land 2026.],
      )
    ),
    (
      ..exp-7d,
      list-items: (
        [Led the evolution of *7D-Compass*, automating payment reconciliation and reducing operational time by *95%*.],
        [Implemented a centralized audit engine reconciling *\$5.5M USD* in transactions through complex validation logic.],
        [Optimized system security using *JWT/Bcrypt* following *OWASP* standards.],
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
      ..proj-azkali([_Python, Gemini AI, React Native, Supabase_]),
      list-items: (
        [Behavioral AI copilot that generates cognitive friction on impulsive purchases by showing costs in work hours.],
        [Integrated *Gemini 2.5 Flash-Lite* for real-time spending analysis and gamification mechanics.],
        [Architected the multi-platform ecosystem using *React Native* (Expo) and *Supabase*.],
      ),
    ),
    (
      ..proj-iapex([_Python, Django, Spring Boot, PostgreSQL, AI_]),
      list-items: (
        [Hybrid AI ecosystem for locating missing patients in healthcare institutions.],
        [Implemented a *hybrid information fusion* engine (Facial recognition + Textual search).],
        [Designed the architecture under strict privacy protocols and medical data security standards.],
      ),
    ),
    (
      ..proj-dabetai([_Python, React Native, NestJS, Wearables_]),
      list-items: (
        [Preventive diabetes platform connecting wearables with medical supervision.],
        [Developed real-time *risk prediction algorithms* for nephropathy and retinopathy.],
        [Improved physician-patient response efficiency by *40%* through automated alerts.],
      ),
    )
  )

  #education
  #languages
]

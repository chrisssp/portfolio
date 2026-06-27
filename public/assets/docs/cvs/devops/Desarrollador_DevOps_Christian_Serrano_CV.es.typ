#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.es.typ": education, languages
#import "../_shared/experiences.es.typ": exp-7d, exp-pepsico, exp-flacks, exp-coppel, exp-azteca
#import "../_shared/projects.es.typ": proj-iapex, proj-7d, proj-dabetai

#cv-start(
  [Ingeniero DevOps | CI/CD, infraestructura y automatización],
  "es",
)[
  == Perfil
  Ingeniero DevOps con experiencia automatizando infraestructura de producción. Capacitado en entornos Linux, contenerización con Docker, pipelines de CI/CD en GitHub Actions y flujos de despliegue cloud-native. Enfocado en automatización de infraestructura, seguridad de sistemas y construcción de procesos de despliegue confiables y escalables que integran desarrollo y operaciones. Combina una sólida formación en ingeniería de software con gestión práctica de infraestructura y herramientas aumentadas por IA.

  == Habilidades técnicas
  #multi-line-list(
    single-line-entry([*CI/CD y automatización:*], [GitHub Actions, Pipelines CI/CD, despliegues automatizados, automatización de procesos], []),
    single-line-entry([*Contenedores y virtualización:*], [Docker, Docker Compose, Linux, Vercel, Netlify], []),
    single-line-entry([*Cloud e infraestructura:*], [AWS, Azure, Supabase, Microservicios, GraphQL], []),
    single-line-entry([*Scripting y programación:*], [Node.js, Python, Bash, TypeScript, APIs REST], []),
    single-line-entry([*Bases de datos:*], [PostgreSQL, MongoDB, Supabase, MySQL, SQL Server], []),
    single-line-entry([*Seguridad y cumplimiento:*], [JWT, Bcrypt, Estándares OWASP, Row Level Security, privacidad de datos], []),
    single-line-entry([*Monitoreo y observabilidad:*], [Optimización de rendimiento (3.2x TTI), motores de auditoría, validación], []),
    single-line-entry([*Metodologías:*], [SDD (Spec-Driven Development), Agile, Scrum, Kanban, XP, Design Thinking], []),
    single-line-entry([*Herramientas y OS:*], [Git, GitHub, Linux, Claude Code, OpenCode, MCP, Figma, JUnit, Jest, Cypress], []),
    single-line-entry([*Familiarizado con:*], [.NET, Kotlin, Firebase, Kafka, Java, Spring Boot, Angular, React], [])
  )

  == Experiencia profesional
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Lideré la evolución de *7D-Compass*, automatizando la conciliación de pagos mediante flujos CI/CD y reduciendo el tiempo operativo en un *95%*.],
        [Implementé un motor de auditoría centralizado para conciliar *\$5.5M USD* en transacciones mediante lógica de validación automatizada y monitoreo de infraestructura.],
        [Contenericé el stack de la aplicación usando *Docker* y *Docker Compose*, optimizando despliegues entre entornos.],
        [Optimicé la seguridad del sistema con *JWT/Bcrypt* siguiendo estándares *OWASP* y mejoré el rendimiento de entrega del frontend en *3.2x*.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Automaticé el procesamiento de *+100k registros* reemplazando flujos legacy en Excel con una aplicación web centralizada, eliminando errores manuales.],
        [Optimicé el tiempo de procesamiento del backend en un 70% mediante pipelines de datos eficientes y configuración de infraestructura.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Diseñé y desplegué un ecosistema digital completo (Web + Móvil) respaldado por una *API REST* con Java Spring Boot y PostgreSQL.],
        [Arquitecturé la infraestructura para inventario centralizado, ventas y gestión de citas sirviendo a múltiples plataformas cliente.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Construí la infraestructura para *Coppel Nexus*, un ecosistema de referidos gamificado (React Native/Node.js) durante un sprint de 72 horas.],
        [Gestioné pipelines CI/CD y flujos de despliegue como líder de equipo, coordinando lanzamientos multiplataforma.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Lideré el desarrollo de la infraestructura de *Azkali*, integrando *Supabase* para almacenamiento en tiempo real con *Row Level Security*.],
        [Orquesté lógica de IA Gemini con infraestructura de base de datos cloud durante un sprint de 48 horas.],
      )
    )
  )

  == Proyectos destacados
  #r2c2-entry-list(
    (
      ..proj-7d([_Node.js, PostgreSQL, Docker, Angular, CI/CD_]),
      list-items: (
        [Infraestructura para conciliación de pagos y gestión operativa en construcción.],
        [Stack contenerizado con pipelines CI/CD automatizados reduciendo el tiempo operativo en 95%.],
        [Motor de auditoría centralizado con infraestructura de validación para transacciones financieras.],
      )
    ),
    (
      ..proj-iapex([_Spring Boot, PostgreSQL, Angular, Ionic, Python, Docker_]),
      list-items: (
        [Ecosistema de IA híbrida para la localización de pacientes extraviados en instituciones de salud.],
        [Diseñé la infraestructura bajo estrictos protocolos de privacidad y seguridad de datos médicos.],
        [Desplegué arquitectura multi-servicio integrando reconocimiento facial y búsqueda textual.],
      )
    ),
    (
      ..proj-dabetai([_Python, React Native, NestJS, Wearables, Docker_]),
      list-items: (
        [Plataforma preventiva para diabetes que conecta wearables con supervisión médica.],
        [Infraestructura para algoritmos de predicción de riesgo en tiempo real y entrega automatizada de alertas.],
        [Reduje el tiempo de respuesta médico-paciente en un 40% mediante pipelines automatizados de notificación.],
      )
    )
  )

  #education
  #languages
]

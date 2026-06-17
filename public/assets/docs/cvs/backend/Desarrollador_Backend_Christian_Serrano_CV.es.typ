#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.es.typ": education, languages
#import "../_shared/experiences.es.typ": exp-7d, exp-pepsico, exp-coppel, exp-azteca, exp-flacks
#import "../_shared/projects.es.typ": proj-iapex, proj-7d, proj-dabetai

#cv-start(
  [Desarrollador Backend | Java, .NET, Node.js y Python],
  "es",
)[
  == Perfil
  Ingeniero backend con experiencia construyendo software en producción, especializado en Java, .NET, Node.js y Python. Experiencia diseñando y construyendo APIs REST, microservicios y sistemas backend con alto volumen de datos en múltiples stacks enterprise. Base sólida en patrones de diseño, arquitectura orientada a objetos, diseño de bases de datos y seguridad de sistemas. Enfocado en escribir aplicaciones backend limpias, mantenibles y bien estructuradas. Con experiencia en entornos Linux y flujos de desarrollo aumentados por IA.

  == Habilidades técnicas
  #multi-line-list(
    single-line-entry([*Backend (JVM & .NET):*], [Java, Spring Boot, .NET, JPA/Hibernate, Maven, Microservicios, Kafka], []),
    single-line-entry([*Backend (Scripting):*], [Node.js (Express, NestJS), Python (Django, FastAPI), APIs REST, TypeScript, GraphQL], []),
    single-line-entry([*Bases de datos:*], [PostgreSQL, MongoDB, MySQL, SQL Server], []),
    single-line-entry([*Infraestructura:*], [Docker, Docker Compose, Git, GitHub, Linux, CI/CD, GitHub Actions, JUnit, Mockito, Jest], []),
    single-line-entry([*Frontend (Integración):*], [Angular, React, TypeScript], []),
    single-line-entry([*Metodologías:*], [Agile, Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiarizado con:*], [Kotlin, Firebase, Supabase, AWS, Azure, Vercel, Netlify], [])
  )

  == Experiencia profesional
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Lideré la evolución de *7D-Compass* (Node.js/PostgreSQL), automatizando conciliación de pagos y reduciendo tiempo operativo en *95%*.],
        [Implementé un motor de auditoría centralizado conciliando *\$5.5M USD* en transacciones mediante lógica de validación backend.],
        [Optimicé seguridad usando *JWT/Bcrypt* siguiendo estándares *OWASP*.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Desarrollé *Master Template Rutas Power App* (Angular/MongoDB), automatizando *+100k registros* y reduciendo errores manuales a cero.],
        [Optimicé el tiempo de procesamiento backend en un 70% mediante pipelines de datos eficientes.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Arquitecté y construí el backend de *Coppel Nexus* con Express, MongoDB y Firebase para tracking de referidos en tiempo real.],
        [Seleccionados entre más de 1,400 participantes a nivel nacional para la fase presencial de Talent Land 2025.],
        [Diseñé el esquema de API y estructura de base de datos para soportar clientes móvil y web simultáneamente.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Lideré el desarrollo del backend de *Azkali*, orquestando lógica de IA Gemini con Supabase para almacenamiento en tiempo real y base de datos protegida con RLS.],
        [Seleccionados entre 1,500 participantes de todo el país para la fase presencial de Talent Land 2026.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Construí una API REST con Java (Spring Boot) y PostgreSQL para centralizar inventario, ventas y citas.],
        [Desplegué un ecosistema digital completo respaldado por una capa de API unificada para clientes web y móviles.],
      )
    )
  )

  == Proyectos destacados
  #r2c2-entry-list(
    (
      ..proj-iapex([_Java, Spring Boot, PostgreSQL, Angular, Ionic, Python_]),
      list-items: (
        [Ecosistema de IA híbrida para localización de pacientes extraviados en instituciones de salud.],
        [Diseñé y construí backend Spring Boot con APIs REST, repositorios JPA e integración PostgreSQL.],
        [Arquitecté bajo estrictos protocolos de privacidad y seguridad de datos médicos.],
      ),
    ),
    (
      ..proj-7d([_Node.js, PostgreSQL, Angular_]),
      list-items: (
        [Sistema backend para conciliación de pagos y gestión operativa en construcción.],
        [Reduje tiempo operativo en 95% mediante flujos automatizados y motor de auditoría backend.],
      )
    ),
    (
      ..proj-dabetai([_Python, React Native, NestJS, Wearables_]),
      list-items: (
        [Plataforma preventiva para diabetes que conecta wearables con supervisión médica.],
        [Desarrollé algoritmos de predicción de riesgo en tiempo real usando Python para nefropatía y retinopatía.],
      )
    )
  )

  #education
  #languages
]

#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.es.typ": education, languages
#import "../_shared/experiences.es.typ": exp-7d, exp-coppel, exp-azteca, exp-pepsico, exp-flacks
#import "../_shared/projects.es.typ": proj-7d, proj-coppel, proj-iapex

#cv-start(
  [Ingeniero Backend | Node.js y TypeScript],
  "es",
)[
  == Perfil
  Ingeniero backend con *+2 años* de experiencia construyendo software en producción, especializado en Node.js, TypeScript y arquitectura de APIs. Experiencia diseñando APIs REST, esquemas de bases de datos y sistemas backend para aplicaciones financieras, logísticas y empresariales. Enfocado en arquitectura limpia, optimización de rendimiento y código seguro y mantenible. Con experiencia en entornos Linux y flujos de desarrollo aumentados por IA.

  == Habilidades técnicas
  #multi-line-list(
    single-line-entry([*Backend:*], [Node.js, Express, NestJS, TypeScript, Java (Spring Boot), Python (Django, FastAPI), APIs REST], []),
    single-line-entry([*Bases de datos:*], [PostgreSQL, MongoDB, Supabase, Firebase], []),
    single-line-entry([*Infraestructura:*], [Docker, Docker Compose, Git, Linux], []),
    single-line-entry([*Frontend (ctx integración):*], [React, Angular, React Native, Astro], []),
    single-line-entry([*Herramientas:*], [Git, GitHub, Linux, Figma, OWASP], []),
    single-line-entry([*Metodologías:*], [Agile, Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiarizado con:*], [.NET, Kotlin, MySQL, Firebase, SQL Server], [])
  )

  == Experiencia profesional
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Lideré la evolución de *7D-Compass* (Node.js/PostgreSQL), automatizando la conciliación de pagos y reduciendo tiempo operativo en *95%*.],
        [Implementé un motor de auditoría centralizado conciliando *\$5.5M USD* en transacciones mediante lógica de validación.],
        [Optimicé seguridad usando *JWT/Bcrypt* siguiendo estándares *OWASP*.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Arquitecté y construí el backend de *Coppel Nexus* con Express, MongoDB y Firebase para tracking de referidos en tiempo real.],
        [Seleccionados entre más de 1,400 participantes a nivel nacional para la fase presencial de Talent Land 2025.],
        [Diseñé el esquema de API y base de datos para soportar clientes móvil + web simultáneamente.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Lideré el desarrollo del backend de *Azkali*, orquestando lógica de Gemini AI con Supabase para almacenamiento en tiempo real.],
        [Seleccionados entre 1,500 participantes de todo el país para la fase presencial de Talent Land 2026.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Desarrollé *Master Template Rutas Power App*, automatizando el procesamiento de *+100k registros* reduciendo errores manuales a cero.],
        [Optimicé el tiempo de procesamiento en un 70% mediante automatización backend y optimización de BD.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Construí una API REST con Java (Spring Boot) y PostgreSQL para centralizar inventario, ventas y citas.],
        [Desplegué un ecosistema digital completo (Web y móvil) respaldado por una capa de API unificada.],
      )
    )
  )

  == Proyectos destacados
  #r2c2-entry-list(
    (
      ..proj-7d([_Node.js, PostgreSQL, Angular_]),
      list-items: (
        [Sistema backend para conciliación de pagos y gestión operativa en construcción.],
        [Reduje tiempo operativo en 95% mediante motor de auditoría automatizado y lógica de validación.],
      ),
    ),
    (
      ..proj-coppel([_Express, MongoDB, Firebase, React, React Native_]),
      list-items: (
        [API backend para ecosistema de referidos gamificado soportando frontends móvil + web.],
        [Tracking de referidos en tiempo real, gestión de usuarios y optimización de rutas.],
      ),
    ),
    (
      ..proj-iapex([_Node.js, Python, PostgreSQL, IA_]),
      list-items: (
        [Ecosistema de IA híbrida para localización de pacientes extraviados en instituciones de salud.],
        [Backend multileguaJE integrando reconocimiento facial y búsqueda textual.],
      )
    )
  )

  #education
  #languages
]

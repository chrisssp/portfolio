#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.es.typ": education, languages
#import "../_shared/experiences.es.typ": exp-coppel, exp-azteca, exp-7d, exp-pepsico, exp-flacks
#import "../_shared/projects.es.typ": proj-azkali, proj-coppel, proj-puntofiel

#cv-start(
  [Desarrollador React | Frontend y Móvil],
  "es",
)[
  == Perfil
  Ingeniero frontend con experiencia construyendo software en producción, especializado en React, React Native y TypeScript. Experiencia construyendo aplicaciones web responsivas y experiencias móviles cross-platform con arquitectura de componentes y manejo de estado moderno. Enfocado en rendimiento, código limpio y traducir requerimientos de negocio en interfaces de usuario intuitivas. Con experiencia en entornos Linux y flujos de desarrollo aumentados por IA.

  == Habilidades técnicas
  #multi-line-list(
    single-line-entry([*Frontend y Móvil:*], [React, React Native, TypeScript, TailwindCSS, Expo, Next.js, Redux, Performance, Web Vitals, SEO], []),
    single-line-entry([*Estado y datos:*], [Zustand, Redux, TanStack Query, Supabase, Firebase], []),
    single-line-entry([*Backend:*], [Node.js (Express, NestJS), Java (Spring Boot), Python, APIs REST], []),
    single-line-entry([*Bases de datos:*], [PostgreSQL, MongoDB], []),
    single-line-entry([*Herramientas:*], [Git, GitHub, Linux, Figma, Docker, Docker Compose, CI/CD, GitHub Actions, Vercel, Netlify, Jest, Cypress], []),
    single-line-entry([*Metodologías:*], [Agile, Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiarizado con:*], [.NET, Kotlin, MySQL, Firebase, SQL Server, AWS, Azure, GraphQL], [])
  )

  == Experiencia profesional
  #r2c2-entry-list(
    (
      ..exp-coppel,
      list-items: (
        [Construí *Coppel Nexus*, un ecosistema full-stack React + React Native para referidos gamificados en un sprint de 72 horas.],
        [Seleccionados entre más de 1,400 participantes a nivel nacional para la fase presencial de Talent Land 2025.],
        [Dirigí al equipo implementando estrictamente metodologías *XP* y *Kanban*.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Lideré el desarrollo de *Azkali* en un sprint de *48 horas*, un copiloto con IA en React Native + React con integración Gemini.],
        [Seleccionados entre 1,500 participantes de todo el país para la fase presencial de Talent Land 2026.],
        [Arquitecté el ecosistema multiplataforma usando *React Native* (Expo), React web y *Supabase*.],
      )
    ),
    (
      ..exp-7d,
      list-items: (
        [Lideré la evolución de *7D-Compass* (Angular/Node.js/PostgreSQL), automatizando la conciliación de pagos y reduciendo el tiempo operativo en un *95%*.],
        [Implementé un motor de auditoría centralizado para conciliar *\$5.5M USD* en transacciones.],
        [Optimicé rendimiento frontend (*3.2x* TTI) y fortalecí seguridad con *JWT/Bcrypt* siguiendo *OWASP*.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Desarrollé *Master Template Rutas Power App*, una Web App (Angular/MongoDB) reemplazando flujos legacy en Excel.],
        [Automaticé el procesamiento de *+100k registros*, reduciendo errores manuales a cero.],
        [Optimicé el tiempo de procesamiento en un 70% mediante automatización full-stack.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Desplegué *Flack's Cut and Connect*, un ecosistema digital completo (Web y móvil con React) automatizando el 100% de las citas.],
        [Construí una API REST con Java (Spring Boot) y PostgreSQL para centralizar inventario y ventas.],
      )
    )
  )

  == Proyectos destacados
  #r2c2-entry-list(
    (
      ..proj-azkali([_React, React Native, Supabase, Gemini IA_]),
      list-items: (
        [Copiloto de IA conductual que genera fricción cognitiva en compras impulsivas mostrando costos en horas de trabajo.],
        [Ecosistema multiplataforma (React Native mobile + React web) construido en un sprint de 48 horas.],
        [Integré Gemini 2.5 Flash-Lite para análisis de gastos en tiempo real con mecánicas de gamificación.],
      ),
    ),
    (
      ..proj-coppel([_React, React Native, MongoDB, Firebase, Express_]),
      list-items: (
        [Ecosistema de referidos gamificado con app móvil para campo y portal web de administración.],
        [Arquitecté un sistema de tres capas: móvil (React Native), web (React) y backend.],
        [Aceleré el registro de microempresas para la red nacional de Coppel.],
      ),
    ),
    (
      ..proj-puntofiel([_React Native, Expo, Supabase, TanStack Query, Zustand_]),
      list-items: (
        [App de fidelización para negocios locales con sistema de recompensas y cupones QR.],
        [Implementé seguridad de datos granular usando Row Level Security de PostgreSQL.],
        [Diseñé interfaz escalable centrada en productividad del comerciante y agilidad del cliente.],
      )
    )
  )

  #education
  #languages
]

#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.es.typ": education, languages
#import "../_shared/experiences.es.typ": exp-7d, exp-coppel, exp-azteca, exp-pepsico, exp-flacks
#import "../_shared/projects.es.typ": proj-azkali, proj-coppel, proj-7d

#cv-start(
  [Desarrollador Frontend | Angular & React],
  "es",
)[
  == Perfil
  Ingeniero frontend con *+2 años* de experiencia construyendo software en producción, especializado en Angular, React y TypeScript. Experiencia construyendo aplicaciones web enterprise y experiencias móviles cross-platform en múltiples ecosistemas frontend. Base sólida en arquitecturas reactivas, manejo de estado, diseño basado en componentes e interfaces responsivas. Enfocado en entregar interfaces de usuario intuitivas, rápidas y accesibles. Con experiencia en entornos Linux y flujos de desarrollo aumentados por IA.

  == Habilidades técnicas
  #multi-line-list(
    single-line-entry([*Frontend:*], [Angular, React, React Native, TypeScript, RxJS, TailwindCSS, HTML/CSS, Next.js], []),
    single-line-entry([*Móvil:*], [Ionic, Capacitor, Expo], []),
    single-line-entry([*Estado y datos:*], [NgRx, Zustand, TanStack Query, APIs REST, Supabase], []),
    single-line-entry([*Backend:*], [Node.js (Express, NestJS), Java (Spring Boot), Python (Django, FastAPI), APIs REST], []),
    single-line-entry([*Bases de datos:*], [PostgreSQL, MongoDB], []),
    single-line-entry([*Herramientas:*], [Git, Linux, Figma, Docker], []),
    single-line-entry([*Metodologías:*], [Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiarizado con:*], [.NET, Kotlin, MySQL, Firebase, SQL Server], [])
  )

  == Experiencia profesional
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Lideré la evolución de #link("https://chrisssp.vercel.app/es/projects/7dcompass")[*7D-Compass*] (Angular/Node.js/PostgreSQL), automatizando conciliación de pagos y reduciendo tiempo operativo en *95%*.],
        [Optimicé rendimiento frontend Angular (*3.2x* TTI) mediante lazy loading, optimización de change detection y análisis de bundle.],
        [Diseñé un motor de auditoría centralizado conciliando *\$5.5M USD* en transacciones con dashboards interactivos.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Construí #link("https://chrisssp.vercel.app/es/projects/coppel-nexus")[*Coppel Nexus*], un ecosistema full-stack React + React Native para referidos gamificados en un sprint de 72 horas.],
        [Seleccionados entre más de 1,400 participantes a nivel nacional para la fase presencial de Talent Land 2025.],
        [Dirigí al equipo implementando estrictamente metodologías *XP* y *Kanban*.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Lideré el desarrollo de #link("https://chrisssp.vercel.app/es/projects/azkali")[*Azkali*] en un sprint de *48 horas*, un copiloto con IA en React Native + React con integración Gemini.],
        [Seleccionados entre 1,500 participantes de todo el país para la fase presencial de Talent Land 2026.],
        [Arquitecté el ecosistema multiplataforma usando *React Native* (Expo), React web y *Supabase*.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Desarrollé #link("https://chrisssp.vercel.app/es/projects/mtrpa")[*Master Template Rutas Power App*] (Angular/MongoDB), una aplicación web centralizada reemplazando flujos legacy en Excel.],
        [Automaticé el procesamiento de *+100k registros*, reduciendo errores manuales a cero.],
        [Diseñé la arquitectura Angular optimizando el tiempo de procesamiento en un 70% mediante automatización full-stack.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Desplegué #link("https://chrisssp.vercel.app/es/projects/flacks-cc")[*Flack's Cut & Connect*], un ecosistema digital completo (Web y móvil con React) automatizando el 100% de las citas.],
        [Construí interfaces responsivas con React integradas con una API REST en Java (Spring Boot).],
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
      ..proj-7d([_Angular, Node.js, PostgreSQL_]),
      list-items: (
        [Plataforma para conciliación de pagos y gestión operativa en construcción.],
        [Optimicé rendimiento frontend (3.2x TTI) con mejores prácticas Angular y lazy loading.],
        [Reduje tiempo operativo en 95% y concilié \$5.5M USD en transacciones.],
      )
    )
  )

  #education
  #languages
]

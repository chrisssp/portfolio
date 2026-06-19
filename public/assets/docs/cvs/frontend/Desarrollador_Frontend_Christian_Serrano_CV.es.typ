#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.es.typ": education, languages
#import "../_shared/experiences.es.typ": exp-7d, exp-coppel, exp-azteca, exp-pepsico, exp-flacks
#import "../_shared/projects.es.typ": proj-iapex, proj-dabetai, proj-7d

#cv-start(
  [Desarrollador Frontend | Angular y React],
  "es",
)[
  == Perfil
  Ingeniero frontend con experiencia construyendo software en producción, especializado en Angular, React y TypeScript. Experiencia construyendo aplicaciones web enterprise y experiencias móviles cross-platform en múltiples ecosistemas frontend. Base sólida en arquitecturas reactivas, manejo de estado, diseño basado en componentes e interfaces responsivas. Enfocado en entregar interfaces de usuario intuitivas, rápidas y accesibles. Con experiencia en entornos Linux y flujos de desarrollo aumentados por IA.

  == Habilidades técnicas
  #multi-line-list(
    single-line-entry([*Frontend:*], [Angular, React, React Native, TypeScript, RxJS, TailwindCSS, HTML/CSS, Next.js, Astro, Angular Material, Performance, Web Vitals, SEO], []),
    single-line-entry([*Móvil:*], [Ionic, Capacitor, Expo], []),
    single-line-entry([*Estado y datos:*], [NgRx, Redux, Zustand, TanStack Query, APIs REST, Supabase], []),
    single-line-entry([*Backend:*], [Node.js (Express, NestJS), Java (Spring Boot), Python, APIs REST], []),
    single-line-entry([*Bases de datos:*], [PostgreSQL, MongoDB], []),
    single-line-entry([*Herramientas:*], [Git, GitHub, Linux, Figma, Docker, Docker Compose, CI/CD, GitHub Actions, Vercel, Netlify, Jest, Cypress], []),
    single-line-entry([*Metodologías:*], [Agile, Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiarizado con:*], [.NET, Kotlin, MySQL, Firebase, SQL Server, AWS, Azure, GraphQL], [])
  )

  == Experiencia profesional
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Lideré la evolución de *7D-Compass* (Angular/Node.js/PostgreSQL), automatizando conciliación de pagos y reduciendo tiempo operativo en *95%*.],
        [Optimicé rendimiento frontend Angular (*3.2x* TTI) mediante lazy loading, optimización de change detection y análisis de bundle.],
        [Diseñé un motor de auditoría centralizado conciliando *\$5.5M USD* en transacciones con dashboards interactivos.],
      )
    ),
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
        [Lideré el desarrollo de *Azkali* en un sprint de *48 horas*, un copiloto con IA en React Native con integración Gemini.],
        [Seleccionados entre 1,500 participantes de todo el país para la fase presencial de Talent Land 2026.],
        [Arquitecté el ecosistema multiplataforma usando *React Native* (Expo) y *Supabase*.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Desarrollé *Master Template Rutas Power App* (Angular/MongoDB), una aplicación web centralizada reemplazando flujos legacy en Excel.],
        [Automaticé el procesamiento de *+100k registros*, reduciendo errores manuales a cero.],
        [Diseñé la arquitectura Angular optimizando el tiempo de procesamiento en un 70% mediante automatización full-stack.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Desplegué *Flack's Cut and Connect*, un ecosistema digital completo (Web y móvil con React) automatizando el 100% de las citas.],
        [Construí interfaces responsivas con React integradas con una API REST en Java (Spring Boot).],
      )
    )
  )

  == Proyectos destacados
  #r2c2-entry-list(
    (
      ..proj-iapex([_Angular, Ionic, Spring Boot, PostgreSQL, IA_]),
      list-items: (
        [Ecosistema de IA híbrida para localización de pacientes extraviados en instituciones de salud.],
        [Construí frontend cross-platform con app web Angular y app móvil Ionic.],
        [Implementé un motor de fusión de información híbrido (Reconocimiento facial + Textual).],
      ),
    ),
    (
      ..proj-dabetai([_React Native, NestJS, Python, Wearables_]),
      list-items: (
        [Plataforma preventiva para diabetes que conecta wearables con supervisión médica.],
        [Desarrollé frontend móvil cross-platform con visualización de datos de salud en tiempo real.],
        [Mejoré la eficiencia de respuesta médico-paciente en un *40%* mediante interfaces de alerta intuitivas.],
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

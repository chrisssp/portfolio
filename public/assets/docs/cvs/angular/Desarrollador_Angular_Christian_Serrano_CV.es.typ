#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.es.typ": education, languages
#import "../_shared/experiences.es.typ": exp-7d, exp-pepsico, exp-coppel, exp-azteca, exp-flacks
#import "../_shared/projects.es.typ": proj-mtrpa, proj-iapex, proj-7d

#cv-start(
  [Desarrollador Angular | Ingeniero Frontend],
  "es",
)[
  == Perfil
  Ingeniero frontend con experiencia construyendo software en producción, especializado en Angular, TypeScript e Ionic. Experiencia construyendo aplicaciones web empresariales con manejo de estado complejo y arquitecturas reactivas impulsadas por RxJS. Enfocado en soluciones frontend modulares, testeables y escalables para aplicaciones de negocio intensivas en datos. Con experiencia en entornos Linux y flujos de desarrollo aumentados por IA.

  == Habilidades técnicas
  #multi-line-list(
    single-line-entry([*Frontend:*], [Angular, TypeScript, RxJS, TailwindCSS, HTML/CSS, Angular Material, Performance, Web Vitals, SEO, Angular Universal], []),
    single-line-entry([*Móvil:*], [Ionic, Capacitor], []),
    single-line-entry([*Estado y datos:*], [NgRx, Redux, Angular Router, APIs REST], []),
    single-line-entry([*Backend:*], [Node.js (Express, NestJS), Java (Spring Boot), Python, APIs REST], []),
    single-line-entry([*Bases de datos:*], [PostgreSQL, MongoDB], []),
    single-line-entry([*Herramientas:*], [Git, GitHub, Linux, Figma, Docker, Docker Compose, CI/CD, GitHub Actions, Vercel, Netlify, Jest, Karma, Jasmine], []),
    single-line-entry([*Metodologías:*], [Agile, Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiarizado con:*], [.NET, Kotlin, MySQL, Firebase, SQL Server, AWS, Azure, GraphQL], [])
  )

  == Experiencia profesional
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Lideré la evolución de *7D-Compass*, una plataforma Angular/Node.js para conciliación de pagos, reduciendo el tiempo operativo en un *95%*.],
        [Implementé un motor de auditoría centralizado para conciliar *\$5.5M USD* en transacciones.],
        [Optimicé rendimiento frontend Angular (*3.2x* TTI) y fortalecí seguridad con *JWT/Bcrypt* bajo *OWASP*.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Desarrollé *Master Template Rutas Power App*, una Web App Angular/MongoDB reemplazando flujos legacy en Excel.],
        [Automaticé el procesamiento de *+100k registros*, reduciendo errores manuales a cero.],
        [Diseñé la solución optimizando el tiempo de procesamiento en un 70%.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Construí *Coppel Nexus*, un ecosistema full-stack (React/Node.js) en un sprint de 72 horas.],
        [Seleccionados entre más de 1,400 participantes a nivel nacional para la fase presencial de Talent Land 2025.],
        [Dirigí al equipo aplicando estrictamente metodologías *XP* y *Kanban*.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Lideré el desarrollo de *Azkali*, un copiloto de IA construido en un sprint de *48 horas*.],
        [Seleccionados entre 1,500 participantes de todo el país para la fase presencial de Talent Land 2026.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Desplegué *Flack's Cut and Connect*, un ecosistema digital completo (Web y móvil) automatizando el 100% de las citas.],
        [Construí una API REST con Java (Spring Boot) y PostgreSQL para centralizar inventario y ventas.],
      )
    )
  )

  == Proyectos destacados
  #r2c2-entry-list(
    (
      ..proj-mtrpa([_Angular, TypeScript, MongoDB, Express_]),
      list-items: (
        [Web App centralizada que reemplazó flujos legacy en Excel para operaciones logísticas de PepsiCo.],
        [Automaticé el procesamiento de más de 100,000 registros, eliminando errores manuales.],
        [Optimicé el tiempo de procesamiento en un 70% mediante automatización integral.],
      ),
    ),
    (
      ..proj-iapex([_Angular, Ionic, Spring Boot, Django, PostgreSQL, IA_]),
      list-items: (
        [Ecosistema de IA híbrida para localización de pacientes extraviados en instituciones de salud.],
        [Implementé un motor de fusión de información híbrida (Reconocimiento facial + Textual).],
        [Arquitecté bajo estrictos protocolos de privacidad y seguridad de datos médicos.],
      ),
    ),
    (
      ..proj-7d([_Angular, Node.js, PostgreSQL_]),
      list-items: (
        [Plataforma de conciliación de pagos y gestión operativa para construcción.],
        [Reduje el tiempo operativo en un 95% mediante flujos automatizados y motor de auditoría.],
      )
    )
  )

  #education
  #languages
]

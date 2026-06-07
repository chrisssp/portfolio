#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.es.typ": education, languages
#import "../_shared/experiences.es.typ": exp-7d, exp-pepsico, exp-coppel, exp-azteca, exp-flacks
#import "../_shared/projects.es.typ": proj-iapex, proj-7d, proj-dabetai

#cv-start(
  [Ingeniero Backend | Java & Spring Boot],
  "es",
)[
  == Perfil
  Ingeniero backend con +2 años de experiencia construyendo software en producción, especializado en Java y Spring Boot. Experiencia construyendo APIs REST empresariales y sistemas backend impulsados por datos. Base sólida en patrones de diseño, arquitectura orientada a objetos y diseño de bases de datos. Enfocado en escribir aplicaciones enterprise limpias, mantenibles y bien estructuradas.

  == Habilidades técnicas
  #multi-line-list(
    single-line-entry([*Backend:*], [Java, Spring Boot, JPA/Hibernate, APIs REST, Maven], []),
    single-line-entry([*Bases de datos:*], [PostgreSQL, MongoDB], []),
    single-line-entry([*Frontend:*], [Angular, Ionic, TypeScript], []),
    single-line-entry([*Infraestructura:*], [Docker, Git, Linux], []),
    single-line-entry([*Otros lenguajes:*], [Node.js, Python, TypeScript], []),
    single-line-entry([*Metodologías:*], [Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiarizado con:*], [React, React Native, Django, FastAPI], [])
  )

  == Experiencia profesional
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Lideré la evolución de #link("https://chrisssp.vercel.app/es/projects/7dcompass")[*7D-Compass*] (Angular/Node.js/PostgreSQL), automatizando conciliación de pagos y reduciendo tiempo operativo en *95%*.],
        [Implementé un motor de auditoría centralizado conciliando *\$2.3M USD* en transacciones mediante lógica de validación.],
        [Optimicé seguridad usando *JWT/Bcrypt* siguiendo estándares *OWASP*.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Desarrollé #link("https://chrisssp.vercel.app/es/projects/mtrpa")[*Master Template Rutas Power App*] (Angular/MongoDB), automatizando *+100k registros* y reduciendo errores manuales a cero.],
        [Optimicé el tiempo de procesamiento backend en un 70% mediante pipelines de datos eficientes.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Construí #link("https://chrisssp.vercel.app/es/projects/coppel-nexus")[*Coppel Nexus*], un ecosistema full-stack de referidos, liderando el equipo con XP y Kanban.],
        [Seleccionados entre más de 1,400 participantes a nivel nacional para la fase presencial de Talent Land 2025.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Lideré el desarrollo de #link("https://chrisssp.vercel.app/es/projects/azkali")[*Azkali*], un copiloto de IA construido en un sprint de 48 horas.],
        [Seleccionados entre 1,500 participantes de todo el país para la fase presencial de Talent Land 2026.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Desplegué #link("https://chrisssp.vercel.app/es/projects/flacks-cc")[*Flack's Cut & Connect*], un ecosistema digital completo automatizando el 100% de las citas.],
        [Desarrollé una API REST con Node.js y PostgreSQL para gestión de inventario y ventas.],
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
        [Sistema backend para conciliación de pagos y gestión operativa.],
        [Reduje tiempo operativo en 95% mediante flujos automatizados y motor de auditoría.],
      )
    ),
    (
      ..proj-dabetai([_Python, React Native, NestJS, Wearables_]),
      list-items: (
        [Plataforma preventiva para diabetes que conecta wearables con supervisión médica.],
        [Desarrollé algoritmos de predicción de riesgo en tiempo real para nefropatía y retinopatía.],
      )
    )
  )

  #education
  #languages
]

#import "@preview/pro-academic-cv:0.1.0": *

#show: resume.with(
  author-info: (
    name: "Christian Serrano",
    primary-info: [
      Ingeniero Backend | Java & Spring Boot \
      +52 271 266 73 65 | #link("mailto:christian.serrano.puertos@gmail.com")[christian.serrano.puertos\@gmail.com]
    ],
    secondary-info: [
      #link("https://chrisssp.vercel.app")[chrisssp.vercel.app] | #link("https://linkedin.com/in/chrisssp")[linkedin.com/in/chrisssp] | #link("https://github.com/chrisssp")[github.com/chrisssp]
    ],
    tertiary-info: "Córdoba, Veracruz, México",
  ),
  author-position: center
)

== Perfil
Ingeniero backend especializado en Java y Spring Boot. Experiencia construyendo APIs REST empresariales y sistemas backend impulsados por datos. Base sólida en patrones de diseño, arquitectura orientada a objetos y diseño de bases de datos. Enfocado en escribir aplicaciones enterprise limpias, mantenibles y bien estructuradas.

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
    entry-header-args: (
      top-left: [*Seven D Construction*],
      top-right: [Enero 2026 -- Abril 2026],
      bottom-left: [Ingeniero de software (Remoto)],
      bottom-right: [Chicago, IL, USA / México],
    ),
    list-items: (
      [Lideré la evolución de #link("https://chrisssp.vercel.app/es/projects/7dcompass")[*7D-Compass*] (Angular/Node.js/PostgreSQL), automatizando conciliación de pagos y reduciendo tiempo operativo en *95%*.],
      [Implementé un motor de auditoría centralizado conciliando *\$2.3M USD* en transacciones mediante lógica de validación.],
      [Optimicé seguridad usando *JWT/Bcrypt* siguiendo estándares *OWASP*.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*PepsiCo*],
      top-right: [Mayo 2024 -- Agosto 2024],
      bottom-left: [Desarrollador de software (Remoto)],
      bottom-right: [Azcapotzalco, CDMX, México],
    ),
    list-items: (
      [Desarrollé #link("https://chrisssp.vercel.app/es/projects/mtrpa")[*Master Template Rutas Power App*] (Angular/MongoDB), automatizando *+100k registros* y reduciendo errores manuales a cero.],
      [Optimicé el tiempo de procesamiento backend en un 70% mediante pipelines de datos eficientes.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Coppel (Genius Arena Hackathon — Talent Land 2025)*],
      top-right: [Abril 2025],
      bottom-left: [4to lugar y líder de equipo],
      bottom-right: [Guadalajara, Jalisco, México],
    ),
    list-items: (
      [Construí #link("https://chrisssp.vercel.app/es/projects/coppel-nexus")[*Coppel Nexus*], un ecosistema full-stack de referidos, liderando el equipo con XP y Kanban.],
      [Seleccionados entre más de 1,400 participantes a nivel nacional para la fase presencial de Talent Land 2025.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Banco Azteca (Genius Arena Hackathon — Talent Land 2026)*],
      top-right: [Abril 2026],
      bottom-left: [Participante y líder de equipo],
      bottom-right: [Santa Fe, CDMX, México],
    ),
    list-items: (
      [Lideré el desarrollo de #link("https://chrisssp.vercel.app/es/projects/azkali")[*Azkali*], un copiloto de IA construido en un sprint de 48 horas.],
      [Seleccionados entre 1,500 participantes de todo el país para la fase presencial de Talent Land 2026.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Flack's Barber Shop*],
      top-right: [Octubre 2022 -- Abril 2024],
      bottom-left: [Desarrollador full stack - Freelancer],
      bottom-right: [Córdoba, Veracruz, México],
    ),
    list-items: (
      [Desplegué #link("https://chrisssp.vercel.app/es/projects/flacks-cc")[*Flack's Cut & Connect*], un ecosistema digital completo automatizando el 100% de las citas.],
      [Desarrollé una API REST con Node.js y PostgreSQL para gestión de inventario y ventas.],
    )
  )
)

== Proyectos destacados
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/es/projects/iapex")[*IAPEX*]],
      top-right: [],
      bottom-left: [_Java, Spring Boot, PostgreSQL, Angular, Ionic, Python_],
      bottom-right: [],
    ),
    list-items: (
      [Ecosistema de IA híbrida para localización de pacientes extraviados en instituciones de salud.],
      [Diseñé y construí backend Spring Boot con APIs REST, repositorios JPA e integración PostgreSQL.],
      [Arquitecté bajo estrictos protocolos de privacidad y seguridad de datos médicos.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/es/projects/7dcompass")[*7D-Compass*]],
      top-right: [],
      bottom-left: [_Node.js, PostgreSQL, Angular_],
      bottom-right: [],
    ),
    list-items: (
      [Sistema backend para conciliación de pagos y gestión operativa.],
      [Reduje tiempo operativo en 95% mediante flujos automatizados y motor de auditoría.],
    )
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/es/projects/dabetai")[*dabetai*]],
      top-right: [],
      bottom-left: [_Python, React Native, NestJS, Wearables_],
      bottom-right: [],
    ),
    list-items: (
      [Plataforma preventiva para diabetes que conecta wearables con supervisión médica.],
      [Desarrollé algoritmos de predicción de riesgo en tiempo real para nefropatía y retinopatía.],
    )
  )
)

== Educación
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [*Universidad Tecnológica del Centro de Veracruz*],
      top-right: [Abril 2026],
      bottom-left: [Ingeniería en desarrollo y gestión de software],
      bottom-right: [Cuitláhuac, Veracruz, México],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Universidad Tecnológica del Centro de Veracruz*],
      top-right: [Agosto 2024],
      bottom-left: [TSU en desarrollo de software multiplataforma],
      bottom-right: [Cuitláhuac, Veracruz, México],
    ),
    list-items: (
      [_Graduado como 1er lugar de la generación (Promedio final: 9.82/10)_],
    ),
  ),
)

== Idiomas
#multi-line-text(
  single-line-entry([*Español:*], [Nativo], []),
  single-line-entry([*Inglés:*], [B1 (Intermedio - En progreso activo)], [])
)

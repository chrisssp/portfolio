#import "@preview/pro-academic-cv:0.1.0": *

#show: resume.with(
  author-info: (
    name: "Christian Serrano",
    primary-info: [
      Desarrollador Angular | Ingeniero Frontend \
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
Ingeniero frontend especializado en Angular, TypeScript e Ionic. Experiencia construyendo aplicaciones web empresariales con manejo de estado complejo y arquitecturas reactivas impulsadas por RxJS. Enfocado en soluciones frontend modulares, testeables y escalables para aplicaciones de negocio intensivas en datos.

== Habilidades técnicas
#multi-line-list(
  single-line-entry([*Frontend:*], [Angular, TypeScript, RxJS, TailwindCSS, HTML/CSS], []),
  single-line-entry([*Móvil:*], [Ionic, Capacitor], []),
  single-line-entry([*Estado y Datos:*], [NgRx, Angular Router, APIs REST], []),
  single-line-entry([*Backend:*], [Node.js (Express, NestJS), Java (Spring Boot)], []),
  single-line-entry([*Bases de datos:*], [PostgreSQL, MongoDB], []),
  single-line-entry([*Herramientas:*], [Git, Linux, Figma, Docker], []),
  single-line-entry([*Metodologías:*], [Scrum, Kanban, XP, Design Thinking, SDD], []),
  single-line-entry([*Familiarizado con:*], [React, React Native, Python], [])
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
      [Lideré la evolución de #link("https://chrisssp.vercel.app/es/projects/7dcompass")[*7D-Compass*], una plataforma Angular/Node.js para conciliación de pagos, reduciendo el tiempo operativo en un *95%*.],
      [Implementé un motor de auditoría centralizado para conciliar *\$2.3M USD* en transacciones.],
      [Optimicé rendimiento frontend Angular (*3.2x* TTI) y fortalecí seguridad con *JWT/Bcrypt* bajo *OWASP*.],
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
      [Desarrollé #link("https://chrisssp.vercel.app/es/projects/mtrpa")[*Master Template Rutas Power App*], una Web App Angular/MongoDB reemplazando flujos legacy en Excel.],
      [Automaticé el procesamiento de *+100k registros*, reduciendo errores manuales a cero.],
      [Diseñé la solución optimizando el tiempo de procesamiento en un 70%.],
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
      [Construí #link("https://chrisssp.vercel.app/es/projects/coppel-nexus")[*Coppel Nexus*], un ecosistema full-stack (React/Node.js) en un sprint de 72 horas.],
      [Seleccionados entre más de 1,400 participantes a nivel nacional para la fase presencial de Talent Land 2025.],
      [Dirigí al equipo aplicando estrictamente metodologías *XP* y *Kanban*.],
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
      [Lideré el desarrollo de #link("https://chrisssp.vercel.app/es/projects/azkali")[*Azkali*], un copiloto de IA construido en un sprint de *48 horas*.],
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
      [Desplegué #link("https://chrisssp.vercel.app/es/projects/flacks-cc")[*Flack's Cut & Connect*], un ecosistema digital completo (Web y móvil) automatizando el 100% de las citas.],
      [Desarrollé una API REST con Node.js y PostgreSQL para centralizar inventario y ventas.],
    )
  )
)

== Proyectos destacados
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/es/projects/mtrpa")[*Master Template Rutas Power App*]],
      top-right: [],
      bottom-left: [_Angular, TypeScript, MongoDB, Express_],
      bottom-right: [],
    ),
    list-items: (
      [Web App centralizada que reemplazó flujos legacy en Excel para operaciones logísticas de PepsiCo.],
      [Automaticé el procesamiento de más de 100,000 registros, eliminando errores manuales.],
      [Optimicé el tiempo de procesamiento en un 70% mediante automatización integral.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/es/projects/iapex")[*IAPEX*]],
      top-right: [],
      bottom-left: [_Angular, Ionic, Spring Boot, Django, PostgreSQL, IA_],
      bottom-right: [],
    ),
    list-items: (
      [Ecosistema de IA híbrida para localización de pacientes extraviados en instituciones de salud.],
      [Implementé un motor de fusión de información híbrida (Reconocimiento facial + Textual).],
      [Arquitecté bajo estrictos protocolos de privacidad y seguridad de datos médicos.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/es/projects/7dcompass")[*7D-Compass*]],
      top-right: [],
      bottom-left: [_Angular, Node.js, PostgreSQL_],
      bottom-right: [],
    ),
    list-items: (
      [Plataforma de conciliación de pagos y gestión operativa para construcción.],
      [Reduje el tiempo operativo en un 95% mediante flujos automatizados y motor de auditoría.],
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

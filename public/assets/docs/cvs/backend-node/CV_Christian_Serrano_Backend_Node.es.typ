#import "@preview/pro-academic-cv:0.1.0": *

#show: resume.with(
  author-info: (
    name: "Christian Serrano",
    primary-info: [
      Ingeniero Backend | Node.js & TypeScript \
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
Ingeniero backend especializado en Node.js, TypeScript y arquitectura de APIs. Experiencia diseñando APIs REST, esquemas de bases de datos y sistemas backend para aplicaciones financieras, logísticas y empresariales. Enfocado en arquitectura limpia, optimización de rendimiento y código seguro y mantenible.

== Habilidades técnicas
#multi-line-list(
  single-line-entry([*Backend:*], [Node.js, Express, NestJS, TypeScript, APIs REST], []),
  single-line-entry([*Bases de datos:*], [PostgreSQL, MongoDB, Supabase, Firebase], []),
  single-line-entry([*Infraestructura:*], [Docker, Git, Linux], []),
  single-line-entry([*Frontend (ctx integración):*], [React, Angular, React Native], []),
  single-line-entry([*Herramientas:*], [Git, Linux, Figma, OWASP], []),
  single-line-entry([*Metodologías:*], [Scrum, Kanban, XP, Design Thinking, SDD], []),
  single-line-entry([*Familiarizado con:*], [Java (Spring Boot), Python (Django, FastAPI)], [])
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
      [Lideré la evolución de #link("https://chrisssp.vercel.app/es/projects/7dcompass")[*7D-Compass*] (Node.js/PostgreSQL), automatizando la conciliación de pagos y reduciendo tiempo operativo en *95%*.],
      [Implementé un motor de auditoría centralizado conciliando *\$2.3M USD* en transacciones mediante lógica de validación.],
      [Optimicé seguridad usando *JWT/Bcrypt* siguiendo estándares *OWASP*.],
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
      [Arquitecté y construí el backend de #link("https://chrisssp.vercel.app/es/projects/coppel-nexus")[*Coppel Nexus*] con Express, MongoDB y Firebase para tracking de referidos en tiempo real.],
      [Seleccionados entre más de 1,400 participantes a nivel nacional para la fase presencial de Talent Land 2025.],
      [Diseñé el esquema de API y base de datos para soportar clientes móvil + web simultáneamente.],
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
      [Lideré el desarrollo del backend de #link("https://chrisssp.vercel.app/es/projects/azkali")[*Azkali*], orquestando lógica de Gemini AI con Supabase para almacenamiento en tiempo real.],
      [Seleccionados entre 1,500 participantes de todo el país para la fase presencial de Talent Land 2026.],
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
      [Desarrollé #link("https://chrisssp.vercel.app/es/projects/mtrpa")[*Master Template Rutas Power App*], automatizando el procesamiento de *+100k registros* reduciendo errores manuales a cero.],
      [Optimicé el tiempo de procesamiento en un 70% mediante automatización backend y optimización de BD.],
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
      [Desarrollé una API REST con Node.js y PostgreSQL para centralizar inventario, ventas y citas.],
      [Desplegué un ecosistema digital completo (Web y móvil) respaldado por una capa de API unificada.],
    )
  )
)

== Proyectos destacados
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/es/projects/7dcompass")[*7D-Compass*]],
      top-right: [],
      bottom-left: [_Node.js, PostgreSQL, Angular_],
      bottom-right: [],
    ),
    list-items: (
      [Sistema backend para conciliación de pagos y gestión operativa en construcción.],
      [Reduje tiempo operativo en 95% mediante motor de auditoría automatizado y lógica de validación.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/es/projects/coppel-nexus")[*Coppel Nexus*]],
      top-right: [],
      bottom-left: [_Express, MongoDB, Firebase, React, React Native_],
      bottom-right: [],
    ),
    list-items: (
      [API backend para ecosistema de referidos gamificado soportando frontends móvil + web.],
      [Tracking de referidos en tiempo real, gestión de usuarios y optimización de rutas.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/es/projects/iapex")[*IAPEX*]],
      top-right: [],
      bottom-left: [_Node.js, Python, PostgreSQL, IA_],
      bottom-right: [],
    ),
    list-items: (
      [Ecosistema de IA híbrida para localización de pacientes extraviados en instituciones de salud.],
      [Backend multileguaJE integrando reconocimiento facial y búsqueda textual.],
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

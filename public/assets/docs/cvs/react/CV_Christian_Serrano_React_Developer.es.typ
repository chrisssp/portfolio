#import "@preview/pro-academic-cv:0.1.0": *

#show: resume.with(
  author-info: (
    name: "Christian Serrano",
    primary-info: [
      Desarrollador React | Frontend & Mobile \
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
Ingeniero frontend especializado en React, React Native y TypeScript. Experiencia construyendo aplicaciones web responsivas y experiencias móviles cross-platform con arquitectura de componentes y manejo de estado moderno. Enfocado en rendimiento, código limpio y traducir requerimientos de negocio en interfaces de usuario intuitivas.

== Habilidades técnicas
#multi-line-list(
  single-line-entry([*Frontend y Móvil:*], [React, React Native, TypeScript, TailwindCSS, Expo, Next.js], []),
  single-line-entry([*Estado y Datos:*], [Zustand, TanStack Query, Supabase, Firebase], []),
  single-line-entry([*Backend:*], [Node.js (Express, NestJS), APIs REST], []),
  single-line-entry([*Bases de datos:*], [PostgreSQL, MongoDB], []),
  single-line-entry([*Herramientas:*], [Git, Linux, Figma, Docker], []),
  single-line-entry([*Metodologías:*], [Scrum, Kanban, XP, Design Thinking, SDD], []),
  single-line-entry([*Familiarizado con:*], [Angular, Ionic, Java, Python], [])
)

== Experiencia profesional
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [*Coppel (Genius Arena Hackathon — Talent Land 2025)*],
      top-right: [Abril 2025],
      bottom-left: [4to lugar y líder de equipo],
      bottom-right: [Guadalajara, Jalisco, México],
    ),
    list-items: (
      [Construí #link("https://chrisssp.vercel.app/es/projects/coppel-nexus")[*Coppel Nexus*], un ecosistema full-stack React + React Native para referidos gamificados en un sprint de 72 horas.],
      [Seleccionados entre más de 1,400 participantes a nivel nacional para la fase presencial de Talent Land 2025.],
      [Dirigí al equipo implementando estrictamente metodologías *XP* y *Kanban*.],
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
      [Lideré el desarrollo de #link("https://chrisssp.vercel.app/es/projects/azkali")[*Azkali*] en un sprint de *48 horas*, un copiloto con IA en React Native + React con integración Gemini.],
      [Seleccionados entre 1,500 participantes de todo el país para la fase presencial de Talent Land 2026.],
      [Arquitecté el ecosistema multiplataforma usando *React Native* (Expo), React web y *Supabase*.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Seven D Construction*],
      top-right: [Enero 2026 -- Abril 2026],
      bottom-left: [Ingeniero de software (Remoto)],
      bottom-right: [Chicago, IL, USA / México],
    ),
    list-items: (
      [Lideré la evolución de #link("https://chrisssp.vercel.app/es/projects/7dcompass")[*7D-Compass*] (Angular/Node.js/PostgreSQL), automatizando la conciliación de pagos y reduciendo el tiempo operativo en un *95%*.],
      [Implementé un motor de auditoría centralizado para conciliar *\$2.3M USD* en transacciones.],
      [Optimicé rendimiento frontend (*3.2x* TTI) y fortalecí seguridad con *JWT/Bcrypt* siguiendo *OWASP*.],
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
      [Desarrollé #link("https://chrisssp.vercel.app/es/projects/mtrpa")[*Master Template Rutas Power App*], una Web App (Angular/MongoDB) reemplazando flujos legacy en Excel.],
      [Automaticé el procesamiento de *+100k registros*, reduciendo errores manuales a cero.],
      [Optimicé el tiempo de procesamiento en un 70% mediante automatización full-stack.],
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
      [Desplegué #link("https://chrisssp.vercel.app/es/projects/flacks-cc")[*Flack's Cut & Connect*], un ecosistema digital completo (Web y móvil con React) automatizando el 100% de las citas.],
      [Desarrollé una API REST con Node.js y PostgreSQL para centralizar inventario y ventas.],
    )
  )
)

== Proyectos destacados
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/es/projects/azkali")[*Azkali*]],
      top-right: [],
      bottom-left: [_React, React Native, Supabase, Gemini IA_],
      bottom-right: [],
    ),
    list-items: (
      [Copiloto de IA conductual que genera fricción cognitiva en compras impulsivas mostrando costos en horas de trabajo.],
      [Ecosistema multiplataforma (React Native mobile + React web) construido en un sprint de 48 horas.],
      [Integré Gemini 2.5 Flash-Lite para análisis de gastos en tiempo real con mecánicas de gamificación.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/es/projects/coppel-nexus")[*Coppel Nexus*]],
      top-right: [],
      bottom-left: [_React, React Native, MongoDB, Firebase, Express_],
      bottom-right: [],
    ),
    list-items: (
      [Ecosistema de referidos gamificado con app móvil para campo y portal web de administración.],
      [Arquitecté un sistema de tres capas: móvil (React Native), web (React) y backend.],
      [Aceleré el registro de microempresas para la red nacional de Coppel.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://chrisssp.vercel.app/es/projects/puntofiel")[*PuntoFiel*]],
      top-right: [],
      bottom-left: [_React Native, Expo, Supabase, TanStack Query, Zustand_],
      bottom-right: [],
    ),
    list-items: (
      [App de fidelización para negocios locales con sistema de recompensas y cupones QR.],
      [Implementé seguridad de datos granular usando Row Level Security de PostgreSQL.],
      [Diseñé interfaz escalable centrada en productividad del comerciante y agilidad del cliente.],
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

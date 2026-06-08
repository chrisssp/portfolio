#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.es.typ": education, languages
#import "../_shared/experiences.es.typ": exp-coppel, exp-azteca, exp-flacks, exp-7d, exp-pepsico
#import "../_shared/projects.es.typ": proj-coppel, proj-azkali, proj-puntofiel

#cv-start(
  [Desarrollador Móvil | React Native],
  "es",
)[
  == Perfil
  Desarrollador móvil con *+2 años* de experiencia construyendo software en producción, especializado en React Native y Expo. Experiencia construyendo aplicaciones cross-platform desde el concepto hasta el deployment, con foco en rendimiento nativo, UI/UX fluida e integración seamless con servicios backend. Capacidad comprobada de entregar apps funcionales bajo plazos ajustados. Con experiencia en entornos Linux y flujos de desarrollo aumentados por IA.

  == Habilidades técnicas
  #multi-line-list(
    single-line-entry([*Móvil:*], [React Native, Expo, TypeScript, TailwindCSS, GlueStack, Nativewind], []),
    single-line-entry([*Frontend:*], [React, Angular, Ionic], []),
    single-line-entry([*Backend y APIs:*], [Node.js (Express, NestJS), Java (Spring Boot), Python, APIs REST, Supabase], []),
    single-line-entry([*Bases de datos:*], [PostgreSQL, MongoDB, Firebase], []),
    single-line-entry([*Herramientas:*], [Git, Linux, Figma, Docker, EAS Build], []),
    single-line-entry([*Metodologías:*], [Scrum, Kanban, XP, Design Thinking], []),
    single-line-entry([*Familiarizado con:*], [.NET, Kotlin, MySQL, Firebase, SQL Server], [])
  )

  == Experiencia profesional
  #r2c2-entry-list(
    (
      ..exp-coppel,
      list-items: (
        [Construí #link("https://chrisssp.vercel.app/es/projects/coppel-nexus")[*Coppel Nexus*], una app React Native + Expo para que colaboradores en campo registren microempresas in-situ.],
        [Seleccionados entre más de 1,400 participantes a nivel nacional para la fase presencial de Talent Land 2025.],
        [Dirigí al equipo aplicando estrictamente metodologías *XP* y *Kanban* en un sprint de 72 horas.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Lideré el desarrollo de #link("https://chrisssp.vercel.app/es/projects/azkali")[*Azkali*], un copiloto de IA con interfaz conversacional y motor de economía conductual.],
        [Seleccionados entre 1,500 participantes de todo el país para la fase presencial de Talent Land 2026.],
        [Arquitecté la experiencia multiplataforma usando *Expo*, *Nativewind* y *Supabase* en un sprint de 48 horas.],
      )
    ),
    (
      ..exp-flacks,
      list-items: (
        [Desplegué #link("https://chrisssp.vercel.app/es/projects/flacks-cc")[*Flack's Cut & Connect*], un ecosistema móvil + web completo automatizando el 100% de las citas.],
        [Construí una app nativa Android (Java) y una app híbrida (Ionic) para la plataforma digital de la barbería.],
      )
    ),
    (
      ..exp-7d,
      list-items: (
        [Lideré la evolución de plataforma web reduciendo tiempo operativo en *95%* y conciliando *\$5.5M USD* en transacciones.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Desarrollé una web app procesando *+100k registros*, reduciendo errores manuales a cero.],
      )
    )
  )

  == Proyectos destacados
  #r2c2-entry-list(
    (
      ..proj-coppel([_React Native, Expo, MongoDB, Express_]),
      list-items: (
        [App móvil para referidos y registro de microempresas en campo para la red nacional de Coppel.],
        [Seguimiento en tiempo real de rutas de colaboradores, progreso y estado de referidos.],
      ),
    ),
    (
      ..proj-azkali([_React Native, Expo, Supabase, Gemini IA_]),
      list-items: (
        [Copiloto de IA conductual con interfaz conversacional para coaching financiero para Gen Z.],
        [Experiencia móvil multiplataforma con Expo y Nativewind para UI de calidad nativa.],
      ),
    ),
    (
      ..proj-puntofiel([_React Native, Expo, Supabase, TanStack Query, Zustand_]),
      list-items: (
        [App de fidelización para negocios locales con sistema QR de recompensas y cupones.],
        [Implementé seguridad granular con Row Level Security de PostgreSQL.],
      )
    )
  )

  #education
  #languages
]

#import "_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "_shared/sections.es.typ": education, languages
#import "_shared/experiences.es.typ": exp-7d, exp-azteca, exp-coppel, exp-pepsico, exp-flacks
#import "_shared/projects.es.typ": proj-iapex, proj-dabetai, proj-puntofiel

#cv-start(
  [Ingeniero de software | Desarrollador full-stack y móvil],
  "es",
)[
  == Perfil
  Ingeniero de software con experiencia construyendo software en producción. Enfocado en la construcción de ecosistemas web y móviles eficientes, con conocimiento operando en entornos Linux, priorizando la escalabilidad, el código limpio y el rendimiento. Orientado a traducir requerimientos de negocio en arquitecturas mantenibles mediante automatización de procesos y flujos de desarrollo aumentados por IA.

  == Habilidades técnicas
  #multi-line-list(
    single-line-entry([*Frontend y móvil:*], [React, React Native, Angular, Ionic, TypeScript, TailwindCSS, Performance, Web Vitals, SEO], []),
    single-line-entry([*Backend:*], [Node.js (NestJS, Express), Java (Spring Boot), Python (Django, FastAPI), APIs REST, Supabase], []),
    single-line-entry([*Datos e infraestructura:*], [PostgreSQL, MongoDB, Supabase, Docker, Docker Compose, CI/CD, GitHub Actions, Microservicios, GraphQL], []),
    single-line-entry([*Herramientas y OS:*], [Git, GitHub, Linux, Figma, Claude Code, OpenCode, MCP, Vercel, Netlify, JUnit, Jest, Cypress], []),
    single-line-entry([*Metodologías:*], [SDD (Spec-Driven Development), Agile, Orquestación multi-modelo, Scrum, Kanban, XP, Design Thinking], []),
    single-line-entry([*Familiarizado con:*], [.NET, Kotlin, MySQL, Firebase, SQL Server, AWS, Azure], [])
  )

  == Experiencia profesional
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Lideré la evolución de *7D-Compass* (Angular/Node.js/PostgreSQL) automatizando la conciliación de pagos y reduciendo el tiempo operativo en un *95%*.],
        [Implementé un motor de auditoría centralizado para conciliar *\$5.5M USD* en transacciones, detectando discrepancias financieras críticas mediante lógica de validación.],
        [Optimicé el rendimiento del frontend (*3.2x* TTI) y fortalecí la seguridad del sistema mediante *JWT/Bcrypt* siguiendo estándares *OWASP*.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Lideré la desarrollo de *Azkali* en un sprint de *48 horas*, creando un copiloto con IA conductual para mitigar gastos impulsivos en la Gen Z bajo una metodología *Design Thinking*],
        [Seleccionados entre 1,500 participantes de todo el país para la fase presencial de Talent Land 2026.],
        [Implementé un motor de análisis de impulsividad en tiempo real utilizando *Gemini 2.5 Flash-Lite*, traduciendo costos monetarios a costo de oportunidad operativo.],
        [Arquitecté el ecosistema multiplataforma integrando *React Native* y *Supabase*, incorporando mecánicas de gamificación.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Construí *Coppel Nexus*, un ecosistema de referidos gamificado para expansión corporativa en un sprint de 4 días (React Native/Node.js).],
        [Seleccionados entre más de 1,400 participantes a nivel nacional para la fase presencial de Talent Land 2025.],
        [Dirigí al equipo implementando estrictamente metodologías *XP* y *Kanban*.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Desarrollé *Master Template Rutas Power App*, una Web App centralizada (Angular/MongoDB) reemplazando flujos legacy en Excel.],
        [Automaticé el procesamiento de *+100k registros*, reduciendo errores manuales a cero.],
        [Diseñé la solución optimizando el tiempo de procesamiento en un 70%.],
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
      ..proj-iapex([_Angular, Ionic, Spring Boot, Django, PostgreSQL, IA_]),
      list-items: (
        [Ecosistema de IA híbrida para la localización de pacientes extraviados en instituciones de salud.],
        [Implementé un motor de *fusión de información híbrida* (Reconocimiento facial + Textual).],
        [Diseñé la arquitectura bajo estrictos protocolos de privacidad y seguridad de datos médicos.],
      ),
    ),
    (
      ..proj-dabetai([_React Native, NestJS, Expo, Python, Wearables_]),
      list-items: (
        [Plataforma preventiva para diabetes que conecta wearables con supervisión médica.],
        [Desarrollé algoritmos de predicción de riesgo en tiempo real para nefropatía y retinopatía.],
        [Mejoré la eficiencia de respuesta médico-paciente en un *40%* mediante alertas automatizadas.],
      )
    ),
    (
      ..proj-puntofiel([_React Native, Expo, Supabase, TanStack Query, Zustand_]),
      list-items: (
        [Aplicación de fidelización para negocios locales con sistema de recompensas y cupones mediante códigos QR.],
        [Implementé seguridad de datos granular usando *Row Level Security (RLS)* de PostgreSQL en Supabase.],
        [Diseñé una interfaz escalable centrada en la productividad del comerciante y la agilidad del cliente.],
      )
    )
  )

  #education
  #languages
]

#import "@preview/pro-academic-cv:0.1.0": *

#show: resume.with(
  author-info: (
    name: "Christian Serrano",
    primary-info: [
      Software Engineer | Full-Stack & Mobile Developer \
      +52 271 266 73 65 | #link("mailto:christian.serrano.puertos@gmail.com")[christian.serrano.puertos\@gmail.com]
    ],
    secondary-info: [
      #link("https://linkedin.com/in/chrisssp")[linkedin.com/in/chrisssp] | #link("https://github.com/chrisssp")[github.com/chrisssp]
    ],
    tertiary-info: [
      Córdoba, Veracruz, México | #link("https://chrisssp.vercel.app")[chrisssp.vercel.app]
    ],
  ),
  author-position: center
)

== Perfil
Enfocado en la construcción de ecosistemas web y móviles eficientes. Conocimiento operando en entornos Linux, priorizando la escalabilidad, el código limpio y el rendimiento. Orientado a traducir requerimientos de negocio en arquitecturas mantenibles y automatización de procesos.

== Habilidades técnicas
#multi-line-list(
  single-line-entry([*Frontend & Mobile:*], [React, React Native, Angular, Ionic, TypeScript, TailwindCSS], []),
  single-line-entry([*Backend:*], [Node.js (NestJS, Express), Java (Spring Boot), Supabase], []),
  single-line-entry([*Datos & Infraestructura:*], [PostgreSQL, MongoDB, Supabase, Docker], []),
  single-line-entry([*Herramientas & OS:*], [Git, Linux, Figma], []),
  single-line-entry([*Familiarizado con:*], [Kotlin, Python (Django, FastAPI), MySQL, Firebase], [])
)

== Experiencia profesional
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [*Seven D Construction*],
      top-right: [Enero 2026 -- Abril 2026],
      bottom-left: [Ingeniero de Software Intern (Remoto)],
      bottom-right: [Chicago, IL / México],
    ),
    list-items: (
      [Lideré la evolución de #link("https://7d-compass.com/")[*7D-Compass*] (Angular/Node.js/PostgreSQL) automatizando la conciliación de pagos y reduciendo el tiempo operativo en un *95%*.],
      [Implementé un motor de auditoría centralizado para conciliar *\$2.3M USD* en transacciones, detectando discrepancias financieras críticas mediante lógica de validación.],
      [Optimicé el rendimiento del frontend (*3.2x* TTI) y fortalecí la seguridad del sistema mediante *JWT/Bcrypt* siguiendo estándares *OWASP*.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Banco Azteca (Talent Land 2026)*],
      top-right: [Abril 2026],
      bottom-left: [Participante de Hackathon y Líder de Equipo],
      bottom-right: [CDMX, Santa Fe],
    ),
    list-items: (
      [Lideré el desarrollo de #link("https://azkali-landing.vercel.app/")[*Azkali*] en un sprint de *48 horas*, creando un copiloto con IA conductual para mitigar gastos impulsivos en la Gen Z bajo una metodología *Design Thinking*],
      [Implementé un motor de análisis de impulsividad en tiempo real utilizando *Gemini 2.5 Flash-Lite*, traduciendo costos monetarios a costo de oportunidad operativo.],
      [Arquitecté el ecosistema multiplataforma integrando *React Native*, *FastAPI* y *Supabase*, incorporando mecánicas de gamificación.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Coppel (Talent Land 2025)*],
      top-right: [Abril 2025],
      bottom-left: [4to Lugar y Líder de Equipo],
      bottom-right: [Guadalajara, Jalisco],
    ),
    list-items: (
      [Construí un ecosistema de referidos gamificado en un sprint de 4 días (React Native/Node.js).],
      [Dirigí al equipo implementando estrictamente metodologías *XP* y *Kanban*.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*PepsiCo*],
      top-right: [Mayo 2024 -- Agosto 2024],
      bottom-left: [Ingeniero de Software Intern (Remoto)],
      bottom-right: [Veracruz, México],
    ),
    list-items: (
      [Desarrollé una Web App centralizada (Angular/MongoDB) reemplazando flujos legacy en Excel.],
      [Automaticé el procesamiento de *+100k registros*, reduciendo errores manuales a cero.],
      [Diseñé la solución "Master Template Rutas", optimizando el tiempo de procesamiento en un 70%.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Flack's Barber Shop*],
      top-right: [Octubre 2022 -- Abril 2024],
      bottom-left: [Desarrollador Full Stack - Freelancer],
      bottom-right: [Veracruz, México],
    ),
    list-items: (
      [Desplegué un ecosistema digital completo (Web & Mobile) automatizando el 100% de las citas.],
      [Desarrollé una API REST con Node.js y PostgreSQL para centralizar inventario y ventas.],
    )
  )
)

== Proyectos destacados
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [#link("https://github.com/aescobar80/IAPEX_APP-WEB")[*IAPEX*]],
      top-right: [],
      bottom-left: [_Angular, Ionic, Spring Boot, Django, PostgreSQL, IA_],
      bottom-right: [],
    ),
    list-items: (
      [Ecosistema de IA híbrida para la localización de pacientes extraviados en instituciones de salud.],
      [Implementé un motor de *fusión de información híbrida* (Reconocimiento facial + Textual).],
      [Diseñé la arquitectura bajo estrictos protocolos de privacidad y seguridad de datos médicos.],
    ),
  ),
  (
    entry-header-args: (
      top-left: [#link("https://github.com/dabetai-org/dabetai-mobileapp")[*dabetai*]],
      top-right: [],
      bottom-left: [_React Native, NestJS, Expo, Python, Wearables_],
      bottom-right: [],
    ),
    list-items: (
      [Plataforma preventiva para diabetes que conecta wearables con supervisión médica.],
      [Desarrollé algoritmos de predicción de riesgo en tiempo real para nefropatía y retinopatía.],
      [Mejoré la eficiencia de respuesta médico-paciente en un *40%* mediante alertas automatizadas.],
    )
  ),
  (
    entry-header-args: (
      top-left: [#link("https://github.com/chrisssp/puntofiel-mobileapp")[*Punto Fiel*]],
      top-right: [],
      bottom-left: [_React Native, Expo, Supabase, TanStack Query, Zustand_],
      bottom-right: [],
    ),
    list-items: (
      [Aplicación de fidelización para negocios locales con sistema de recompensas y cupones mediante códigos QR.],
      [Implementé seguridad de datos granular usando *Row Level Security (RLS)* de PostgreSQL en Supabase.],
      [Diseñé una interfaz escalable centrada en la productividad del comerciante y la agilidad del cliente.],
    )
  )
)

== Educación
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [*Universidad Tecnológica del Centro de Veracruz*],
      top-right: [Abril 2026],
      bottom-left: [Ingeniería en Desarrollo y Gestión de Software],
      bottom-right: [Cuitláhuac, Ver.],
    )
  ),
  (
    entry-header-args: (
      top-left: [*Universidad Tecnológica del Centro de Veracruz*],
      top-right: [Agosto 2024],
      bottom-left: [TSU en Desarrollo de Software Multiplataforma],
      bottom-right: [Cuitláhuac, Ver.],
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

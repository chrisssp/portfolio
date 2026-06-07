#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.es.typ": education, languages
#import "../_shared/experiences.es.typ": exp-7d, exp-pepsico, exp-coppel, exp-azteca, exp-flacks
#import "../_shared/projects.es.typ": proj-iapex, proj-dabetai, proj-azkali

#cv-start(
  [Ingeniero Backend | Python & Django],
  "es",
)[
  == Perfil
  Ingeniero backend con +2 años de experiencia construyendo software en producción, especializado en Python, Django y FastAPI. Experiencia construyendo APIs REST, sistemas de procesamiento de datos y soluciones backend integradas con IA. Enfocado en código limpio, testeabilidad, automatización y arquitecturas escalables. Trayectoria comprobada entregando proyectos full-stack con bases sólidas en backend.

  == Habilidades técnicas
  #multi-line-list(
    single-line-entry([*Backend:*], [Python, Django, FastAPI, APIs REST, Celery], []),
    single-line-entry([*IA y Datos:*], [Gemini API, LangChain, Pandas, NumPy], []),
    single-line-entry([*Bases de datos:*], [PostgreSQL, MongoDB, Supabase], []),
    single-line-entry([*Infraestructura:*], [Docker, Git, Linux], []),
    single-line-entry([*Otros lenguajes:*], [Node.js, Java, TypeScript], []),
    single-line-entry([*Frontend:*], [React, React Native, Angular], []),
    single-line-entry([*Metodologías:*], [Scrum, Kanban, XP, Design Thinking, SDD], []),
  )

  == Experiencia profesional
  #r2c2-entry-list(
    (
      ..exp-7d,
      list-items: (
        [Lideré la evolución de #link("https://chrisssp.vercel.app/es/projects/7dcompass")[*7D-Compass*] (Angular/Node.js/PostgreSQL), automatizando conciliación de pagos y reduciendo tiempo operativo en *95%*.],
        [Implementé un motor de auditoría centralizado conciliando *\$5.5M USD* en transacciones.],
        [Optimicé seguridad usando *JWT/Bcrypt* siguiendo estándares *OWASP*.],
      )
    ),
    (
      ..exp-pepsico,
      list-items: (
        [Desarrollé #link("https://chrisssp.vercel.app/es/projects/mtrpa")[*Master Template Rutas Power App*] (Angular/MongoDB), automatizando *+100k registros* y reduciendo errores manuales a cero.],
        [Diseñé pipelines de datos backend optimizando el tiempo de procesamiento en 70%.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Construí #link("https://chrisssp.vercel.app/es/projects/coppel-nexus")[*Coppel Nexus*], un ecosistema full-stack de referidos (React Native/Node.js), liderando con XP y Kanban.],
        [Seleccionados entre más de 1,400 participantes a nivel nacional para la fase presencial de Talent Land 2025.],
      )
    ),
    (
      ..exp-azteca,
      list-items: (
        [Lideré el desarrollo de #link("https://chrisssp.vercel.app/es/projects/azkali")[*Azkali*], un copiloto de IA integrando Gemini 2.5 Flash-Lite en un sprint de 48 horas.],
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
      ..proj-iapex([_Python, Django, Spring Boot, PostgreSQL, IA_]),
      list-items: (
        [Ecosistema de IA híbrida para localización de pacientes extraviados en instituciones de salud.],
        [Construí backend Django con APIs REST, integración PostgreSQL y orquestación de IA.],
        [Implementé motor de fusión de información híbrida (Reconocimiento facial + Búsqueda textual).],
      ),
    ),
    (
      ..proj-dabetai([_Python, React Native, NestJS, Wearables_]),
      list-items: (
        [Plataforma preventiva para diabetes que conecta wearables con supervisión médica.],
        [Desarrollé algoritmos de predicción de riesgo en tiempo real con Python para nefropatía y retinopatía.],
        [Mejoré eficiencia de respuesta médico-paciente en 40% mediante alertas automatizadas.],
      ),
    ),
    (
      ..proj-azkali([_React Native, Supabase, Gemini IA, Python_]),
      list-items: (
        [Copiloto de IA conductual integrando Gemini 2.5 Flash-Lite para análisis de gastos en tiempo real.],
        [Lógica backend en Python para motor de economía conductual y mecánicas de gamificación.],
      )
    )
  )

  #education
  #languages
]

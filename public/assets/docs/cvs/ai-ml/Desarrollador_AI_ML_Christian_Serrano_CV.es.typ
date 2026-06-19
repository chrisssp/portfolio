#import "../_shared/template.typ": cv-start, r2c2-entry-list, multi-line-list, single-line-entry, multi-line-text
#import "../_shared/sections.es.typ": education, languages
#import "../_shared/experiences.es.typ": exp-azteca, exp-7d, exp-coppel, exp-pepsico, exp-flacks
#import "../_shared/projects.es.typ": proj-azkali, proj-iapex, proj-dabetai

#cv-start(
  [Ingeniero AI/ML | Desarrollador de Sistemas Inteligentes],
  "es",
)[
  == Perfil
  Ingeniero de software con experiencia práctica construyendo aplicaciones potenciadas por IA y sistemas inteligentes. Dominio en integración de LLMs, desarrollo de pipelines de inferencia en tiempo real y diseño de soluciones basadas en ML para análisis conductual, healthcare predictivo y procesamiento de lenguaje natural. Enfocado en traducir problemas de negocio complejos en sistemas de IA listos para producción con arquitectura limpia e infraestructura escalable. Con experiencia en entornos Linux y flujos de desarrollo aumentados por IA.

  == Habilidades técnicas
  #multi-line-list(
    single-line-entry([*AI y ML:*], [Gemini API, LangChain, Orquestación de LLMs, Prompt Engineering, RAG, Análisis Conductual, NLP], []),
    single-line-entry([*Lenguajes:*], [Python, TypeScript, Java, SQL], []),
    single-line-entry([*Frameworks:*], [Django, FastAPI, Node.js (NestJS, Express), React Native, Expo], []),
    single-line-entry([*Datos y Storage:*], [PostgreSQL, Supabase, MongoDB, Firebase, Row Level Security], []),
    single-line-entry([*Herramientas ML:*], [Pandas, NumPy, Inferencia en Tiempo Real, Series Temporales, Modelado Predictivo], []),
    single-line-entry([*Infraestructura:*], [Docker, Docker Compose, Git, GitHub, Linux, CI/CD, GitHub Actions], []),
    single-line-entry([*Metodologías:*], [Agile, Scrum, Kanban, XP, Design Thinking, SDD], []),
    single-line-entry([*Familiarizado con:*], [TensorFlow, PyTorch, Scikit-learn, Hugging Face, AWS, Azure], [])
  )

  == Experiencia profesional
  #r2c2-entry-list(
    (
      ..exp-azteca,
      list-items: (
        [Lideré el desarrollo de *Azkali*, un copiloto de IA integrando *Gemini 2.5 Flash-Lite* para análisis conductual de gastos en tiempo real.],
        [Construí un motor de detección de impulsividad traduciendo costos monetarios a costo de oportunidad operativo usando *Design Thinking*.],
        [Seleccionados entre 1,500 participantes de todo el país para la fase presencial de Talent Land 2026.],
      )
    ),
    (
      ..exp-7d,
      list-items: (
        [Lideré la evolución de *7D-Compass*, automatizando conciliación de pagos y reduciendo tiempo operativo en *95%*.],
        [Implementé un motor de auditoría centralizado conciliando *\$5.5M USD* en transacciones mediante lógica de validación compleja.],
        [Optimicé seguridad usando *JWT/Bcrypt* siguiendo estándares *OWASP*.],
      )
    ),
    (
      ..exp-coppel,
      list-items: (
        [Construí *Coppel Nexus*, un ecosistema de referidos gamificado para expansión corporativa (React Native/Node.js).],
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
      ..proj-azkali([_Python, Gemini AI, React Native, Supabase_]),
      list-items: (
        [Copiloto de IA conductual que genera fricción cognitiva en compras impulsivas mostrando costos en horas de trabajo.],
        [Integré *Gemini 2.5 Flash-Lite* para análisis de gastos en tiempo real con mecánicas de gamificación.],
        [Arquitecté el ecosistema multiplataforma usando *React Native* (Expo) y *Supabase*.],
      ),
    ),
    (
      ..proj-iapex([_Python, Django, Spring Boot, PostgreSQL, IA_]),
      list-items: (
        [Ecosistema de IA híbrida para localización de pacientes extraviados en instituciones de salud.],
        [Implementé un motor de *fusión de información híbrida* (Reconocimiento facial + Búsqueda textual).],
        [Diseñé la arquitectura bajo estrictos protocolos de privacidad y seguridad de datos médicos.],
      ),
    ),
    (
      ..proj-dabetai([_Python, React Native, NestJS, Wearables_]),
      list-items: (
        [Plataforma preventiva para diabetes que conecta wearables con supervisión médica.],
        [Desarrollé *algoritmos de predicción de riesgo* en tiempo real para nefropatía y retinopatía.],
        [Mejoré la eficiencia de respuesta médico-paciente en un *40%* mediante alertas automatizadas.],
      ),
    )
  )

  #education
  #languages
]

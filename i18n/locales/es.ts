import { Dictionary } from "../types";

export const es: Dictionary = {
   nav: {
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre mí",
      goBack: "Volver",
   },
   hero: {
      role: "FullStack & Mobile Developer",
      description: "Ingeniero soluciones web y móviles escalables y seguras traduciendo requisitos de negocio complejos en software eficiente. Especializado en cerrar la brecha entre la lógica y la experiencia de usuario usando metodologías ágiles.",
      actions: {
         cv: "CV",
         email: "Correo",
         linkedin: "LinkedIn",
         github: "GitHub",
      },
   },
   about: {
      title: "Sobre mí",
      p1: "Soy un ingeniero de 21 años radicado en México, impulsado por la disciplina y la curiosidad. Ya sea automatizando un flujo de trabajo manual, aprendiendo piano o construyendo estructuras en Minecraft, me obsesiona la optimización y la creatividad.",
      p2: "Creo en el poder de la comunidad. Participo activamente en Hackathons y eventos tecnológicos, buscando constantemente aprender de los mejores y compartir conocimientos.",
      quote: "Talk is cheap, show me the code",
      educationTitle: "Formación Académica",
      education: [
         {
            institution: "Universidad Tecnológica del Centro de Veracruz.",
            degree: "TSU Desarrollo de Software Multiplataforma",
            date: "Agosto 2024",
            achievement: "Graduado con el mejor promedio de la generación: 9.82.",
         },
         {
            institution: "Universidad Tecnológica del Centro de Veracruz.",
            degree: "Ingeniería en Desarrollo y Gestión de Software",
            date: "Esperado 2026",
         }
      ],
   },
   experience: {
      title: "Experiencia",
      items: [
         {
            role: "Desarrollador Full Stack - Proyecto Integrador",
            company: "Flack’s Barber Shop",
            date: "Octubre 2022",
            description: "Desplegué un ecosistema digital integral (Web y Móvil) que automatiza el 100% de la programación de citas y el seguimiento de inventario para el negocio.",
         },
         {
            role: "Pasante de Ingeniería de Software",
            company: "PepsiCo (México)",
            date: "Abril 2024",
            description: "Diseñé una aplicación web centralizada (Angular/MongoDB) para reemplazar los flujos de trabajo heredados en Excel, agilizando el procesamiento de más de 100,000 registros y reduciendo los errores manuales.",
         },
         {
            role: "Finalista de Hackathon y Líder de Equipo",
            company: "Coppel Nexus (Talent Land 2025)",
            date: "Abril 2025",
            description: "Aseguré un lugar en el podio al arquitecturar un ecosistema de referidos gamificado para Coppel (React/Node.js) en un sprint de 4 días, aplicando estrictamente metodologías XP y Kanban.",
            link: {
               url: "#",
               label: "Ver certificado de participación",
            }
         },
         {
            role: "Pasante de Ingeniería de Software",
            company: "Seven D Construction (Chicago, IL)",
            date: "Actualmente",
            description: "Liderando la expansión de \"Seven D Compass\" mediante la implementación de módulos de conciliación financiera y tableros de análisis predictivo utilizando Angular e Ionic.",
         }
      ],
   },
   projects: {
      title: "Proyectos",
      subtitle: "¿Quieres ver más? Revisa mi GitHub",
      sections: {
         challenge: "El desafío",
         challengeTitle: "Desafío",
         solutionTitle: "Solución",
         ecosystem: "Ecosistema",
      },
      items: [
         {
            id: "iapex",
            featured: true,
            title: "IAPEX (Encuéntrame)",
            subtitle: "Ecosistema Híbrido de IA para Identificación de Pacientes",
            description: "Sistema biométrico impulsado por IA que identifica pacientes inconscientes en segundos, con el objetivo de reducir los retrasos en la identificación de emergencias en más del 90% en comparación con los protocolos manuales.",
            fullDescription: "Una plataforma centralizada que cierra la brecha entre los pacientes hospitalizados no identificados y las familias buscadoras utilizando un motor de Fusión de Información Híbrida (Facial + Textual) para maximizar la precisión de la identificación.",
            imagePath: "/assets/images/projects/iapex/general.png",
            heroImagePath: "/assets/images/projects/iapex/hero.png",
            techStack: ["angular", "bootstrap", "react", "ionic", "springboot", "postgresql", "fastapi", "mongodb"],
            links: [
               { type: "video", url: "#" },
               { type: "demo", url: "#" }
            ],
            challenge: {
               description: "Los hospitales dependen de protocolos manuales y aislados para registrar a personas desconocidas, creando una desconexión de datos crítica con las familias que buscan a ciegas en morgues y salas de emergencia.",
               solution: "Un ecosistema enfocado en la privacidad que conecta datos institucionales (Portal Web) con consultas públicas (Cliente Móvil) a través de un núcleo seguro de coincidencia biométrica."
            },
            ecosystem: {
               items: [
                  {
                     title: "El Núcleo Neural (IA Híbrida)",
                     description: "El corazón de IAPEX. Fusiona embeddings de FaceNet (distancia euclidiana) con filtros de texto para clasificar candidatos, reduciendo significativamente los falsos positivos en comparación con el reconocimiento estándar.",
                     imagePath: "/assets/images/projects/iapex/specific1.png",
                     techStack: ["fastapi", "mongodb", "postgresql"],
                     link: { type: "paper", url: "#", label: "Leer artículo" }
                  },
                  {
                     title: "El Cliente Móvil (Lado de la Familia)",
                     description: "Interfaz móvil para que las familias ingresen descripciones. Muestra posibles coincidencias basadas en puntajes de similitud, protegiendo la privacidad del paciente hasta su verificación.",
                     imagePath: "/assets/images/projects/iapex/specific2.png",
                     techStack: ["react", "ionic", "tailwindcss"]
                  },
                  {
                     title: "El Portal Web (Lado Institucional)",
                     description: "Portal web seguro para que el personal médico registre pacientes utilizando rasgos morfológicos y fotografías bajo un estricto control de acceso basado en roles (RBAC).",
                     imagePath: "/assets/images/projects/iapex/specific3.png",
                     techStack: ["angular", "bootstrap", "nestjs"]
                  }
               ]
            }
         },
         {
            id: "dabetai",
            featured: true,
            title: "dabetai",
            subtitle: "Ecosistema Preventivo Impulsado por Wearables para Complicaciones de la Diabetes",
            description: "Ecosistema preventivo de complicaciones de la diabetes que conecta wearables con tableros médicos, permitiendo la predicción de riesgos en tiempo real y mejorando la eficiencia de respuesta médico-paciente en ~40%.",
            fullDescription: "Una plataforma de salud integral que va más allá del simple monitoreo hacia la prevención activa. dabetai aprovecha la tecnología wearable y la IA para predecir complicaciones críticas antes de que se vuelvan irreversibles.",
            imagePath: "/assets/images/projects/dabetai/general.png",
            heroImagePath: "/assets/images/projects/dabetai/hero.png",
            techStack: ["astro", "angular", "reactnative", "expo", "tailwindcss", "nestjs", "postgresql", "fastapi", "mongodb"],
            links: [
               { type: "video", url: "#" },
               { type: "demo", url: "#" }
            ],
            challenge: {
               description: "La gestión de la diabetes suele ser reactiva y aislada. Los pacientes carecen de visibilidad sobre la progresión silenciosa de complicaciones peligrosas (Retinopatía, Nefropatía, etc.), mientras que los médicos sufren por la falta de datos continuos en tiempo real.",
               solution: "Un ecosistema interconectado que fusiona datos biológicos en tiempo real de wearables con supervisión clínica, utilizando modelos predictivos para alertar tanto a pacientes como a médicos sobre riesgos específicos de complicaciones."
            },
            ecosystem: {
               items: [
                  {
                     title: "Núcleo de Predicción de Complicaciones (IA)",
                     description: "El corazón del sistema. Procesa datos de usuarios y sensores para pronosticar el riesgo de complicaciones específicas: Retinopatía, Nefropatía, Neuropathía y Pie Diabético.",
                     imagePath: "/assets/images/projects/dabetai/specific1.png",
                     techStack: ["fastapi", "mongodb", "postgresql"],
                     link: { type: "paper", url: "#", label: "Leer artículo" }
                  },
                  {
                     title: "App Móvil (Centro del Paciente)",
                     description: "Actúa como el centro neurálgico para el paciente. Más allá del registro estándar (glucosa/comida), se sincroniza con wearables (relojes inteligentes, CGM) para extraer biomarcadores como la frecuencia cardíaca y la calidad del sueño en tiempo real.",
                     imagePath: "/assets/images/projects/dabetai/specific2.png",
                     techStack: ["reactnative", "expo", "tailwindcss"]
                  },
                  {
                     title: "Portal Médico (Supervisión)",
                     description: "Permite a los médicos vincularse con las cuentas de los pacientes para supervisión remota. Transforma los datos diarios sin procesar en conocimientos clínicos, permitiendo a los médicos recibir alertas e intervenir de forma remota.",
                     imagePath: "/assets/images/projects/dabetai/specific3.png",
                     techStack: ["angular", "tailwindcss"]
                  }
               ]
            }
         },
         {
            id: "puntofiel",
            featured: true,
            title: "PuntoFiel",
            description: "Plataforma de lealtad offline-first que digitaliza la retención de clientes para negocios locales, eliminando las tarjetas físicas y aumentando el compromiso del usuario mediante recompensas gamificadas.",
            imagePath: "/assets/images/projects/puntofiel/general.png",
            techStack: ["reactnative", "tailwindcss", "expo", "gluestack", "supabase", "postgresql", "prisma"],
            links: [
               { type: "github", url: "#" },
               { type: "demo", url: "#" },
               { type: "video", url: "#" }
            ],
         },
         {
            id: "mtrpa",
            title: "MTRPA (PepsiCo)",
            description: "Herramienta de automatización empresarial que migra más de 100,000 registros de Excel a MongoDB, reduciendo el tiempo de procesamiento de datos en ~70% y eliminando errores de entrada manual.",
            imagePath: "/assets/images/projects/mtrpa/general.png",
            techStack: ["angular", "bootstrap", "springboot", "postgresql", "mongodb"],
            links: [
               { type: "demo", url: "#" }
            ],
         },
         {
            id: "coppel-nexus",
            title: "Coppel Nexus",
            description: "Sistema de referidos fintech de alto nivel para Coppel, diseñado para escalar alianzas corporativas con microempresas a través de una experiencia gamificada en React Native, construida en menos de 4 días.",
            imagePath: "/assets/images/projects/coppel-nexus/general.png",
            techStack: ["react", "reactnative", "tailwindcss", "nestjs", "firebase", "expo"],
            links: [
               { type: "github", url: "#" },
               { type: "demo", url: "#" },
               { type: "video", url: "#" }
            ],
         },
         {
            id: "flacks",
            title: "Flack’s Cut & Connect",
            description: "Transformación digital completa para un negocio local, automatizando el 100% de la programación de citas y el seguimiento de inventario para reducir drásticamente la carga administrativa.",
            imagePath: "/assets/images/projects/flacks/general.png",
            techStack: ["angular", "bootstrap", "ionic", "springboot", "postgresql", "laravel", "android", "java"],
            links: [
               { type: "github", url: "#" },
               { type: "demo", url: "#" }
            ],
         }
      ],
      actions: {
         view_code: "Ver código",
         view_demo: "Ver en acción",
         view_design: "Ver detalles",
         view_video: "Ver demo",
         view_details: "Ver detalles",
         read_paper: "Leer artículo",
         tab_featured: "Destacados",
         tab_all: "Otros"
      },
   },
   cta: {
      title: "¿Listo para construir algo extraordinario?",
      description: "Actualmente estoy disponible para roles de tiempo completo y proyectos desafiantes. Hablemos de cómo puedo ayudar a tu equipo a escalar.",
      actions: {
         talk: "Hablemos",
         copy: "Copiar correo",
      },
   },
   footer: {
      rights: "0 errores, 14 advertencias, 100% por Christian Serrano 🤓👆",
   },
};

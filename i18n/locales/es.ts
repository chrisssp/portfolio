import { Dictionary } from "../types";

export const es: Dictionary = {
   nav: {
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre mí",
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
      items: [
         {
            title: "IAPEX (Encuéntrame)",
            description: "Sistema biométrico impulsado por IA que identifica pacientes inconscientes en segundos, con el objetivo de reducir los retrasos en la identificación de emergencias en más del 90% en comparación con los protocolos manuales.",
            imagePath: "/assets/images/projects/iapex/general.png",
            techStack: ["angular", "bootstrap", "react", "ionic", "springboot", "postgresql", "fastapi", "mongodb"],
            links: [
               { type: "video", url: "#" },
               { type: "demo", url: "#" }
            ],
         },
         {
            title: "dabetai",
            description: "Ecosistema preventivo de complicaciones de la diabetes que conecta wearables con tableros médicos, permitiendo la predicción de riesgos en tiempo real y mejorando la eficiencia de respuesta médico-paciente en ~40%.",
            imagePath: "/assets/images/projects/dabetai/general.png",
            techStack: ["astro", "angular", "reactnative", "expo", "tailwindcss", "nestjs", "postgresql", "fastapi", "mongodb"],
            links: [
               { type: "video", url: "#" },
               { type: "demo", url: "#" }
            ],
         },
         {
            title: "PuntoFiel",
            description: "Plataforma de lealtad offline-first que digitaliza la retención de clientes para negocios locales, eliminando las tarjetas físicas y aumentando el compromiso del usuario mediante recompensas gamificadas.",
            imagePath: "/assets/images/projects/puntofiel/general.png",
            techStack: ["reactnative", "tailwindcss", "expo", "gluestack", "supabase", "postgresql", "prisma"],
            links: [
               { type: "github", url: "#" },
               { type: "demo", url: "#" },
               { type: "video", url: "#" }
            ],
         }
      ],
      actions: {
         view_code: "Ver código",
         view_demo: "Ver en acción",
         view_design: "Ver detalles",
         view_video: "Ver demo",
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

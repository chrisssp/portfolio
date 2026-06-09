export const projectMtrpa = {
   data: {
      id: "mtrpa",
      imagePath: "/assets/images/projects/mtrpa/general.webp",
      heroImagePath: "/assets/images/projects/mtrpa/hero.webp",
      techStack: [
         "angular",
         "bootstrap",
         "mongodb",
         "springboot",
         "java",
         "typescript",
      ],
      categories: {
         domain: ["logistics"],
         platform: ["web", "api"],
         tags: ["enterprise"],
      },
      ecosystem: [
         {
            imagePath:
               "/assets/images/projects/mtrpa/web-app-operations-hub.webp",
            techStack: ["angular", "bootstrap"],
         },
         {
            imagePath: "/assets/images/projects/mtrpa/backend-api.webp",
            techStack: ["mongodb", "springboot", "java"],
         },
      ],
   },
   en: {
      title: "Master Template Rutas Power App (PepsiCo)",
      subtitle: "Logistics Operations Centralization Platform",
      description:
         "Centralized operations hub for PepsiCo's supply chain, replacing fragmented Excel workflows and manual follow-ups.",
      fullDescription:
         "Routes, approvals, and reporting live in one role-based flow with clearer oversight. It replaces scattered documents with a shared operational view, making handoffs smoother and decisions faster across the supply chain area.",
      ctaHighlight:
         "MTRPA replaced fragmented Excel workflows across PepsiCo's supply chain with a centralized, role-based platform. Let's talk about how I can digitize your operations.",
      challenge: {
         description:
            "Logistics operations relied on manual Excel workflows across teams, causing delays, duplicated work, and inconsistent data quality.",
         solution:
            "A centralized web app with role-based access and automated validation, backed by a Spring Boot API and MongoDB for reliable, auditable data management.",
      },
      ecosystem: {
         items: [
            {
               title: "Web App (Operations Hub)",
               description:
                  "Angular + Bootstrap interface that centralizes logistics routes, approvals, and reporting for multiple roles.",
            },
            {
               title: "Backend API",
               description:
                  "Spring Boot + MongoDB backend providing validation, auditing, and secure data access for all workflows.",
            },
         ],
      },
   },
   es: {
      title: "Master Template Rutas Power App (PepsiCo)",
      subtitle: "Plataforma de centralización operativa en logística",
      description:
         "Hub operativo para la cadena de suministro de PepsiCo, sustituyendo flujos dispersos en Excel y seguimientos manuales.",
      fullDescription:
         "Rutas, aprobaciones y reportes viven en un flujo por roles con mayor control. Sustituye documentos dispersos por una visión operativa compartida, agilizando traspasos y decisiones en la cadena de suministro.",
      challenge: {
         description:
            "La logística se gestionaba en archivos Excel desconectados, con alta fricción y errores humanos frecuentes.",
         solution:
            "Una web app centralizada con acceso por roles y validaciones automáticas, respaldada por una API Spring Boot con MongoDB.",
      },
      ecosystem: {
         items: [
            {
               title: "App web (hub operativo)",
               description:
                  "Interfaz Angular + Bootstrap que centraliza rutas, aprobaciones y reportes para múltiples roles.",
            },
            {
               title: "Backend API",
               description:
                  "Backend Spring Boot + MongoDB con validaciones, auditoría y acceso seguro para los flujos críticos.",
            },
         ],
      },
      ctaHighlight:
         "MTRPA reemplazó flujos dispersos en Excel en la cadena de suministro de PepsiCo con una plataforma centralizada por roles. Hablemos sobre cómo puedo digitalizar tus operaciones.",
   },
};

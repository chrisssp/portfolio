export const projectCoppelNexus = {
   data: {
      id: "coppel-nexus",
      imagePath: "/assets/images/projects/coppel-nexus/general.webp",
      techStack: [
         "reactnative",
         "react",
         "tailwindcss",
         "mongodb",
         "firebase",
         "typescript",
      ],
      categories: {
         domain: ["logistics"],
         platform: ["web", "mobile", "api"],
         tags: ["hackathon"],
      },
      links: [
         {
            type: "github",
            url: "https://github.com/karl262/CoppelNexus-MobileApp",
         },
         { type: "video", url: "https://youtu.be/QOrzY2dIhsw" },
      ],
      certificates: [
         {
            filePath:
               "/assets/docs/certificates/Certificado_TalentLand_2025_Christian_Serrano.pdf",
            issuer: "Talent Land 2025",
            date: "April 2025",
         },
      ],
      galleryImages: [
         "/assets/images/projects/coppel-nexus/mobile-app-field-collaborators.webp",
         "/assets/images/projects/coppel-nexus/web-app-admin-and-tracking.webp",
         "/assets/images/projects/coppel-nexus/backend-api.webp",
      ],
      ecosystem: [
         {
            imagePath:
               "/assets/images/projects/coppel-nexus/mobile-app-field-collaborators.webp",
            techStack: ["reactnative", "expo", "tailwindcss"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/karl262/CoppelNexus-MobileApp",
               },
            ],
         },
         {
            imagePath:
               "/assets/images/projects/coppel-nexus/web-app-admin-and-tracking.webp",
            techStack: ["react", "tailwindcss"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/chrisssp/coppel-nexus-web",
               },
            ],
         },
         {
            imagePath: "/assets/images/projects/coppel-nexus/backend-api.webp",
            techStack: ["mongodb", "firebase", "express"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/VivianaVM07/apiCoppelNexus",
               },
            ],
         },
      ],
   },
   en: {
      title: "Coppel Nexus",
      subtitle: "Referral Ecosystem for Field Acquisition Teams",
      description:
         "Referral ecosystem for Coppel that makes field onboarding of micro-businesses faster and easier.",
      fullDescription:
         "It turns referrals into a single, trackable flow that keeps collaborators and internal teams aligned. The result is a faster, clearer path for micro-businesses to join Coppel Emprende and for teams to follow progress without losing momentum.",
      challenge: {
         description:
            "Onboarding micro-businesses across multiple locations required manual tracking, inconsistent follow-up, and lacked visibility on collaborator performance.",
         solution:
            "A unified ecosystem with a field-ready mobile app, a management web portal, and a backend that tracks referrals, progress, and collaborator routes in real time.",
      },
      certificates: [{ title: "Genius Arena Hackathon — Participation" }],
      ecosystem: {
         items: [
            {
               title: "Mobile App (Field Collaborators)",
               description:
                  "React Native + Expo app for collection collaborators to visit micro-businesses and refer them to Coppel Emprende.",
            },
            {
               title: "Web App (Admin and Tracking)",
               description:
                  "Web platform to register micro-businesses, track course progress, and manage collaborator routes and workload.",
            },
            {
               title: "Backend API",
               description:
                  "MongoDB + Firebase backend with Express for user, referral, and progress tracking.",
            },
         ],
      },
      ctaHighlight:
         "Coppel Nexus unified field acquisition into a trackable flow across mobile, web, and backend. Let's talk about how I can build a similar connected ecosystem for your operations.",
   },
   es: {
      title: "Coppel Nexus",
      subtitle: "Ecosistema de referidos para equipos en campo",
      description:
         "Ecosistema de referidos para Coppel que facilita y acelera el registro de microempresas en campo.",
      fullDescription:
         "Convierte los referidos en un flujo único y trazable que alinea a colaboradores y equipos internos. El resultado es un camino más rápido y claro para que las microempresas se sumen a Coppel Emprende y se pueda dar seguimiento sin fricción.",
      challenge: {
         description:
            "El alta de microempresas era manual y fragmentado, con poca visibilidad sobre el progreso de cursos y el trabajo de los colaboradores.",
         solution:
            "Un ecosistema web y móvil con app en campo, portal administrativo y backend centralizado para seguimiento de referidos y rutas.",
      },
      certificates: [{ title: "Genius Arena Hackathon — Participación" }],
      ecosystem: {
         items: [
            {
               title: "App móvil (colaboradores en campo)",
               description:
                  "App en React Native + Expo para colaboradores de cobranza que visitan microempresas y generan referidos a Coppel Emprende.",
            },
            {
               title: "App web (administración y seguimiento)",
               description:
                  "Plataforma web para registrar microempresas, dar seguimiento a cursos y gestionar rutas de trabajo.",
            },
            {
               title: "Backend API",
               description:
                  "Backend en MongoDB + Firebase con Express para usuarios, referidos y progreso.",
            },
         ],
      },
      ctaHighlight:
         "Coppel Nexus unificó la adquisición en campo en un flujo rastreable en móvil, web y backend. Hablemos sobre cómo puedo construir un ecosistema similar para tus operaciones.",
   },
};

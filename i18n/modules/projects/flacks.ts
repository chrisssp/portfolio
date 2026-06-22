export const projectFlacks = {
   data: {
      id: "flacks-cc",
      imagePath: "/assets/images/projects/flacks-cc/general.webp",
      heroImagePath: "/assets/images/projects/flacks-cc/hero.webp",
      techStack: [
         "angular",
         "bootstrap",
         "ionic",
         "java",
         "springboot",
         "postgresql",
         "typescript",
         "android",
      ],
      categories: {
         domain: ["retail"],
         platform: ["web", "mobile", "api"],
         tags: ["enterprise"],
      },
      links: [{ type: "github", url: "https://github.com/flacks-cc" }],
      galleryImages: [
         "/assets/images/projects/flacks-cc/web-app-landing-and-admin.webp",
         "/assets/images/projects/flacks-cc/hybrid-mobile-app-pwa.webp",
         "/assets/images/projects/flacks-cc/native-mobile-app-android.webp",
         "/assets/images/projects/flacks-cc/backend-api.webp",
      ],
      certificates: [
         {
            filePath:
               "/assets/docs/certificates/Carta_Aval_Flacks_Christian_Serrano.pdf",
            issuer: "Flack's Barber Shop",
         },
         {
            filePath:
               "/assets/docs/certificates/Certificado_Expotecnologia_UTCV_2023_Christian_Serrano.pdf",
            issuer: "UTCV — Expotecnologías 2023",
            date: "2023",
         },
      ],
      ecosystem: [
         {
            imagePath:
               "/assets/images/projects/flacks-cc/web-app-landing-and-admin.webp",
            techStack: ["angular", "bootstrap"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/flacks-cc/web-app",
               },
            ],
         },
         {
            imagePath:
               "/assets/images/projects/flacks-cc/hybrid-mobile-app-pwa.webp",
            techStack: ["angular", "ionic", "typescript"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/flacks-cc/mobile-app",
               },
            ],
         },
         {
            imagePath:
               "/assets/images/projects/flacks-cc/native-mobile-app-android.webp",
            techStack: ["java", "android"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/flacks-cc/mobile-app-android",
               },
            ],
         },
         {
            imagePath: "/assets/images/projects/flacks-cc/backend-api.webp",
            techStack: ["java", "springboot", "postgresql"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/flacks-cc/api",
               },
            ],
         },
      ],
   },
   en: {
      title: "Flack's Cut & Connect",
      subtitle: "Multiplatform Booking and Commerce Ecosystem",
      description:
         "A complete booking-and-sales ecosystem for a barber shop, designed to reduce friction for clients and keep operations tidy.",
      fullDescription:
         "It brings together reservations, catalog, and sales into a single, consistent flow for staff and clients. The experience keeps the shop organized, reduces missed appointments, and makes the day-to-day operation feel lighter without losing the personal touch.",
      challenge: {
         description:
            "Manual scheduling, scattered customer data, and disconnected sales channels caused double bookings, lost revenue, and low visibility into customer behavior.",
         solution:
            "A unified ecosystem that centralizes reservations, catalog, sales, and staff management, with role-based flows for admins, employees, and customers across web and mobile.",
      },
      ecosystem: {
         items: [
            {
               title: "Web App (Landing + Admin)",
               description:
                  "Landing page plus an administrative panel to manage CRUD operations, appointment scheduling, and reservation management for the business.",
            },
            {
               title: "Hybrid Mobile App (PWA)",
               description:
                  "Customer-facing app to browse catalogs, reserve services/products, manage a cart, authenticate (email or Google), post reviews, and track history.",
            },
            {
               title: "Native Mobile App (Android)",
               description:
                  "Native Android build mirroring the hybrid app features for better device integration and performance.",
            },
            {
               title: "Backend API",
               description:
                  "Spring Boot backend with PostgreSQL to centralize data, appointments, reservations, products, and user roles.",
            },
         ],
      },
      certificates: [
         { title: "Flack's Barber Shop — Endorsement Letter (Apr 2024)" },
         { title: "UTCV — Expotecnologías 2023 Participation" },
      ],
      ctaHighlight:
         "Flack's unified reservations, catalog, and sales across web, hybrid, and native Android into one consistent flow. Let's discuss how I can streamline your multiplatform operations.",
   },
   es: {
      title: "Flack's Cut & Connect",
      subtitle: "Ecosistema multiplataforma de reservas y comercio",
      description:
         "Ecosistema integral para una barbería, pensado para reducir fricción en reservas y mantener la operación ordenada.",
      fullDescription:
         "Reúne citas, catálogo y ventas en un solo flujo coherente para clientes y equipo de trabajo. La experiencia mantiene la barbería ordenada, reduce ausencias y hace más ligera la operación sin perder el trato cercano.",
      challenge: {
         description:
            "La gestión manual de citas y ventas generaba duplicidad, baja trazabilidad y poca visibilidad sobre el comportamiento del cliente.",
         solution:
            "Un ecosistema unificado con flujos por roles que centraliza reservaciones, catálogo, ventas y administración en web y móvil.",
      },
      ecosystem: {
         items: [
            {
               title: "Aplicación web (landing + admin)",
               description:
                  "Landing page y panel administrativo para CRUD, programación de citas y gestión de reservaciones.",
            },
            {
               title: "App móvil híbrida (PWA)",
               description:
                  "App para clientes con catálogos, reservas de servicios/productos, carrito, autenticación (correo o Google), reseñas e historial.",
            },
            {
               title: "App móvil nativa (Android)",
               description:
                  "Versión Android nativa que replica la estructura de la híbrida con mejor integración del dispositivo.",
            },
            {
               title: "Backend API",
               description:
                  "Backend en Spring Boot con PostgreSQL para centralizar datos, roles, citas, reservaciones y ventas.",
            },
         ],
      },
      certificates: [
         { title: "Flack's Barber Shop — Carta aval (Abr 2024)" },
         { title: "UTCV — Participación en Expotecnologías 2023" },
      ],
      ctaHighlight:
         "Flack's unificó reservaciones, catálogo y ventas en web, híbrido y Android nativo en un flujo coherente. Hablemos sobre cómo puedo optimizar tus operaciones multiplataforma.",
   },
};

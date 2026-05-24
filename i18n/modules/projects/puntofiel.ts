export const projectPuntoFiel = {
   data: {
      id: "puntofiel",
      imagePath: "/assets/images/projects/puntofiel/general.webp",
      heroImagePath: "/assets/images/projects/puntofiel/hero.webp",
      techStack: [
         "reactnative",
         "expo",
         "supabase",
         "tailwindcss",
         "tanstackquery",
         "zustand",
      ],
      links: [
         {
            type: "github",
            url: "https://github.com/chrisssp/puntofiel-mobile-app",
         },
         { type: "video", url: "https://youtu.be/k2Ea1Mi4Ou8" },
      ],
      ecosystem: [
         {
            imagePath: "/assets/images/projects/puntofiel/general.webp",
            techStack: ["reactnative", "expo", "tanstackquery", "zustand"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/chrisssp/puntofiel-mobile-app",
               },
            ],
         },
         {
            imagePath: "/assets/images/projects/puntofiel/specific2.webp",
            techStack: ["supabase", "postgresql"],
         },
      ],
   },
   en: {
      title: "PuntoFiel",
      subtitle: "Role-Based Loyalty Platform for Local Businesses",
      description:
         "Role-based loyalty app that connects customers, owners, and staff with a simple, transparent rewards flow.",
      fullDescription:
         "Customers earn and redeem rewards with QR, while owners manage staff, catalog, promotions, and audit activity with clarity. It balances customer engagement with day-to-day control, so loyalty feels simple for users and useful for businesses.",
      challenge: {
         description:
            "Small businesses needed a loyalty system that could serve customers, employees, and owners without complex hardware or manual tracking.",
         solution:
            "A role-based mobile app with QR point assignment, rewards redemption, and administrative tooling, backed by secure Supabase data policies.",
      },
      ecosystem: {
         items: [
            {
               title: "Mobile App (Customers, Owners, Employees)",
               description:
                  "Role-based app where customers find affiliated businesses, earn points with QR scans, and redeem rewards, while owners manage staff, products, rewards, raffles, and promotions with an audit section.",
            },
            {
               title: "Backend (Supabase + PostgreSQL)",
               description:
                  "Secure backend with PostgreSQL and Supabase policies for rewards, points, and auditability across roles.",
            },
         ],
      },
   },
   es: {
      title: "PuntoFiel",
      subtitle: "Plataforma de lealtad por roles para negocios locales",
      description:
         "App de lealtad por roles que conecta clientes, dueños y empleados con un flujo de recompensas simple y transparente.",
      fullDescription:
         "Los clientes ganan y canjean recompensas con QR, mientras los dueños gestionan personal, catálogo, promociones y auditoría con claridad. Equilibra el engagement del cliente con el control diario del negocio, haciendo la lealtad simple y útil.",
      challenge: {
         description:
            "Los negocios locales necesitaban un sistema de lealtad que funcionara para clientes, empleados y dueños sin procesos manuales ni poca trazabilidad.",
         solution:
            "Una app móvil por roles con QR para puntos y canjes, más herramientas administrativas y auditoría, respaldadas por Supabase.",
      },
      ecosystem: {
         items: [
            {
               title: "App móvil (clientes, dueños, empleados)",
               description:
                  "App por roles donde los clientes encuentran negocios afiliados, ganan puntos con QR y canjean recompensas, mientras los dueños gestionan empleados, productos, recompensas, rifas, promociones y auditoría.",
            },
            {
               title: "Backend (Supabase + PostgreSQL)",
               description:
                  "Backend seguro con PostgreSQL y políticas de Supabase para recompensas, puntos y trazabilidad.",
            },
         ],
      },
   },
};

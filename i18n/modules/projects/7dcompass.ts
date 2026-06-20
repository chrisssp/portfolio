export const project7dCompass = {
   data: {
      id: "7dcompass",
      featured: true,
      imagePath: "/assets/images/projects/7dcompass/general.webp",
      heroImagePath: "/assets/images/projects/7dcompass/hero.webp",
      techStack: [
         "angular",
         "angular-material",
         "nodejs",
         "postgresql",
         "typescript",
      ],
      categories: {
         domain: ["fintech", "logistics"],
         platform: ["web", "mobile", "api"],
         tags: ["enterprise"],
      },
      links: [{ type: "demo", url: "https://7d-compass.com/" }],
      certificates: [
         {
            filePath:
               "/assets/docs/certificates/Recomendation_7D_Construction_Christian_Serrano_en.pdf",
            issuer: "Seven D Construction",
         },
      ],
      ecosystem: [
         {
            imagePath:
               "/assets/images/projects/7dcompass/administrative-web-portal.webp",
            techStack: ["angular", "angular-material", "typescript"],
         },
         {
            imagePath:
               "/assets/images/projects/7dcompass/on-site-mobile-app.webp",
            techStack: ["angular", "angular-material"],
         },
         {
            imagePath:
               "/assets/images/projects/7dcompass/nodejs-audit-engine.webp",
            techStack: ["nodejs", "postgresql", "express"],
         },
      ],
   },
   en: {
      title: "7D-Compass",
      subtitle: "Fintech Audit & Reconciliation Platform for Construction",
      description:
         "Financial reconciliation platform for the construction industry, automating audits for $5.5M USD in transactions and reducing operational time by 95%.",
      fullDescription:
         "7D-Compass is a high-performance auditing ecosystem designed for Seven D Construction (Chicago). It automates 95% of financial reconciliation by centralizing bank records and operational data into a single audit workflow.",
      challenge: {
         description:
            "Manual reconciliation of millions in construction transactions was error-prone and took hundreds of work hours monthly. Discrepancies often went undetected for billing cycles.",
         solution:
            "A centralized audit engine with complex validation logic that flags discrepancies in real-time, reducing the monthly reconciliation window from weeks to hours.",
      },
      certificates: [
         { title: "Seven D Construction — Recommendation Letter (Jun 2026)" },
      ],
      ecosystem: {
         items: [
            {
               title: "Administrative Web Portal",
               description:
                  "Centralized dashboard for office staff to manage financial data, visualize predictive analytics, and oversee automated audit results with granular RBAC.",
            },
            {
               title: "On-Site Mobile App",
               description:
                  "Cross-platform mobile client for field workers to log real-time operational data, ensuring seamless data flow from the job site to the auditing engine.",
            },
            {
               title: "Node.js Audit Engine",
               description:
                  "High-throughput backend that processes $5.5M USD in transactions, performing complex reconciliation between multiple data sources.",
            },
         ],
      },
      ctaHighlight:
         "7D-Compass automated audits for $5.5M USD in transactions, reducing reconciliation from weeks to hours. Let's discuss how I can bring similar financial automation to your projects.",
   },
   es: {
      title: "7D-Compass",
      subtitle:
         "Plataforma fintech de auditoría y conciliación para construcción",
      description:
         "Plataforma de conciliación financiera para la industria de la construcción, automatizando auditorías de $5.5M USD en transacciones y reduciendo el tiempo operativo en un 95%.",
      fullDescription:
         "7D-Compass es un ecosistema de auditoría de alto rendimiento diseñado para Seven D Construction (Chicago). Automatiza el 95% de la conciliación financiera al centralizar registros bancarios y datos operativos en un solo flujo de auditoría.",
      challenge: {
         description:
            "La conciliación manual de millones en transacciones de construcción era propensa a errores y consumía cientos de horas mensuales. Las discrepancias a menudo no se detectaban durante ciclos de facturación completos.",
         solution:
            "Un motor de auditoría centralizado con lógica de validación compleja que marca discrepancias en tiempo real, reduciendo la ventana de conciliación mensual de semanas a horas.",
      },
      certificates: [
         {
            title: "Seven D Construction — Carta de recomendación (Jun 2026)",
            filePath:
               "/assets/docs/certificates/Recomendacion_7D_Construction_Christian_Serrano_es.pdf",
         },
      ],
      ecosystem: {
         items: [
            {
               title: "Portal web administrativo",
               description:
                  "Panel centralizado para el personal de oficina que permite gestionar datos financieros, visualizar analíticas predictivas y supervisar resultados de auditoría con RBAC granular.",
            },
            {
               title: "App móvil on-site",
               description:
                  "Cliente móvil multiplataforma para trabajadores de campo que registra datos operativos en tiempo real, asegurando un flujo de datos continuo desde la obra hasta el motor de auditoría.",
            },
            {
               title: "Motor de auditoría Node.js",
               description:
                  "Backend de alto rendimiento que procesa $5.5M USD en transacciones, realizando conciliaciones complejas entre múltiples fuentes de datos de forma automatizada.",
            },
         ],
      },
      ctaHighlight:
         "7D-Compass automatizó auditorías de $5.5M USD en transacciones, reduciendo la conciliación de semanas a horas. Hablemos sobre cómo puedo llevar una automatización financiera similar a tus proyectos.",
   },
};

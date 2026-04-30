export const project7dCompass = {
   data: {
      id: "7dcompass",
      featured: true,
      imagePath: "/assets/images/projects/7dcompass/general.png",
      heroImagePath: "/assets/images/projects/7dcompass/hero.png",
      techStack: ["angular", "nodejs", "postgresql", "typescript", "ionic"],
      links: [{ type: "demo", url: "https://7d-compass.com/" }],
      ecosystem: [
         {
            imagePath: "/assets/images/projects/7dcompass/specific1.png",
            techStack: ["angular", "tailwindcss", "typescript"],
         },
         {
            imagePath: "/assets/images/projects/7dcompass/specific2.png",
            techStack: ["angular", "ionic", "capacitor"],
         },
         {
            imagePath: "/assets/images/projects/7dcompass/specific3.png",
            techStack: ["nodejs", "postgresql", "express"],
         },
      ],
   },
   en: {
      title: "7D-Compass",
      subtitle: "Fintech Audit & Reconciliation Platform for Construction",
      description:
         "Financial reconciliation platform for the construction industry, automating audits for $2.3M USD in transactions and reducing operational time by 95%.",
      fullDescription:
         "7D-Compass is a high-performance auditing ecosystem designed for Seven D Construction (Chicago). It automates 95% of financial reconciliation by centralizing bank records and operational data through a robust Angular/Node.js architecture.",
      challenge: {
         description:
            "Manual reconciliation of millions in construction transactions was error-prone and took hundreds of work hours monthly. Discrepancies often went undetected for billing cycles.",
         solution:
            "A centralized audit engine with complex validation logic that flags discrepancies in real-time, reducing the monthly reconciliation window from weeks to hours.",
      },
      ecosystem: {
         items: [
            {
               title: "Administrative Web Portal",
               description:
                  "Centralized dashboard for office staff to manage financial data, visualize predictive analytics, and oversee automated audit results with granular RBAC.",
            },
            {
               title: "On-site Mobile App",
               description:
                  "Cross-platform mobile client for field workers to log real-time operational data, ensuring seamless data flow from the job site to the auditing engine.",
            },
            {
               title: "Node.js Audit Engine",
               description:
                  "High-throughput backend that processes $2.3M USD in transactions, performing complex reconciliation between multiple data sources.",
            },
         ],
      },
   },
   es: {
      title: "7D-Compass",
      subtitle:
         "Plataforma fintech de auditoría y conciliación para construcción",
      description:
         "Plataforma de conciliación financiera para la industria de la construcción, automatizando auditorías de $2.3M USD en transacciones y reduciendo el tiempo operativo en un 95%.",
      fullDescription:
         "7D-Compass es un ecosistema de auditoría de alto rendimiento diseñado para Seven D Construction (Chicago). Automatiza el 95% de la conciliación financiera al centralizar registros bancarios y datos operativos mediante una arquitectura robusta en Angular/Node.js.",
      challenge: {
         description:
            "La conciliación manual de millones en transacciones de construcción era propensa a errores y consumía cientos de horas mensuales. Las discrepancias a menudo no se detectaban durante ciclos de facturación completos.",
         solution:
            "Un motor de auditoría centralizado con lógica de validación compleja que marca discrepancias en tiempo real, reduciendo la ventana de conciliación mensual de semanas a horas.",
      },
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
                  "Backend de alto rendimiento que procesa $2.3M USD en transacciones, realizando conciliaciones complejas entre múltiples fuentes de datos de forma automatizada.",
            },
         ],
      },
   },
};

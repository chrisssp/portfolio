export const projectDabetai = {
   data: {
      id: "dabetai",
      featured: true,
      imagePath: "/assets/images/projects/dabetai/general.webp",
      heroImagePath: "/assets/images/projects/dabetai/hero.webp",
      techStack: [
         "astro",
         "angular",
         "reactnative",
         "expo",
         "tailwindcss",
         "nestjs",
         "postgresql",
         "fastapi",
         "mongodb",
         "python",
      ],
      links: [
         { type: "landing", url: "https://dabetai.netlify.app/" },
         { type: "github", url: "https://github.com/dabetai-org" },
         {
            type: "paper",
            url: "/assets/docs/papers/Prevención-de-Riesgos-de-la-Diabetes-Mediante-una-Plataforma-Inteligente-de-Monitorización-y-Predicción-de-Complicaciones-con-Inteligencia-Artificial.pdf",
         },
      ],
      certificates: [
         {
            filePath:
               "/assets/docs/certificates/Constancia_Congreso_Multidisciplinario_2024_Christian_Serrano.pdf",
            issuer: "VII Congreso Multidisciplinario",
            date: "Oct 2024",
         },
      ],
      ecosystem: [
         {
            imagePath: "/assets/images/projects/dabetai/specific1.webp",
            techStack: ["astro", "tailwindcss"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/dabetai-org/landing",
               },
               {
                  type: "demo",
                  url: "https://dabetai.netlify.app/",
               },
            ],
         },
         {
            imagePath: "/assets/images/projects/dabetai/specific2.webp",
            techStack: [
               "fastapi",
               "mongodb",
               "postgresql",
               "scikitlearn",
               "xgboost",
            ],
            links: [
               {
                  type: "paper",
                  url: "/assets/docs/papers/Prevención-de-Riesgos-de-la-Diabetes-Mediante-una-Plataforma-Inteligente-de-Monitorización-y-Predicción-de-Complicaciones-con-Inteligencia-Artificial.pdf",
               },
               {
                  type: "github",
                  url: "https://github.com/dabetai-org/ai-models",
               },
            ],
         },
         {
            imagePath: "/assets/images/projects/dabetai/specific3.webp",
            techStack: ["reactnative", "expo", "tailwindcss"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/dabetai-org/mobile-app",
               },
            ],
         },
         {
            imagePath: "/assets/images/projects/dabetai/specific4.webp",
            techStack: ["angular", "tailwindcss"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/dabetai-org/web-app",
               },
            ],
         },
         {
            imagePath: "/assets/images/projects/dabetai/specific5.webp",
            techStack: ["nestjs", "postgresql"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/dabetai-org/api",
               },
            ],
         },
         {
            imagePath: "/assets/images/projects/dabetai/specific6.webp",
            techStack: ["fastapi", "python", "mongodb"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/dabetai-org/ai-api",
               },
            ],
         },
      ],
   },
   en: {
      title: "dabetai",
      subtitle:
         "Wearables-Driven Preventive Ecosystem for Diabetes Complications",
      description:
         "Preventive ecosystem connecting wearables with medical dashboards, enabling real-time risk prediction and improving response efficiency by ~40%.",
      fullDescription:
         "A comprehensive health platform moving beyond simple monitoring to active prevention. dabetai predicts critical complications like Retinopathy and Nephropathy before they become irreversible.",
      challenge: {
         description:
            "Diabetes management is often reactive. Patients lack visibility into the silent progression of dangerous complications, while doctors suffer from a lack of continuous, real-time data.",
         solution:
            "An interconnected ecosystem that fuses real-time biological data with clinical oversight, utilizing predictive models to alert both patients and doctors about specific risks.",
      },
      ecosystem: {
         items: [
            {
               title: "Landing Page",
               description:
                  "Educational and marketing landing page that presents the preventive ecosystem, highlighting how wearables and AI integrate to deliver real-time diabetes risk prevention.",
            },
            {
               title: "Complication Prediction Core (AI)",
               description:
                  "The system's heart. It processes user and sensor data to forecast the risk of specific complications: Retinopathy, Nephropathy, Neuropathy, and Diabetic Foot.",
            },
            {
               title: "Mobile App (Patient Hub)",
               description:
                  "Acts as the central hub for the patient. Beyond standard logging (glucose/food), it syncs with wearables (CGMs) to extract biomarkers like heart rate and sleep quality in real-time.",
            },
            {
               title: "Medical Portal (Oversight)",
               description:
                  "Allows physicians to link with patient accounts for remote supervision. It transforms raw daily data into clinical insights, enabling doctors to receive alerts and intervene remotely.",
            },
            {
               title: "RESTful API",
               description:
                  "Core backend API powering the ecosystem, handling authentication, patient management, clinical data integration, and secure communication between all components.",
            },
            {
               title: "AI Inference API",
               description:
                  "Dedicated API for AI model inference, processing real-time biometric data to deliver risk predictions for diabetes complications through optimized endpoints.",
            },
         ],
      },
      certificates: [
         {
            title: "VII Congreso Multidisciplinario 2024 — Poster Presentation",
         },
      ],
   },
   es: {
      title: "dabetai",
      subtitle:
         "Ecosistema preventivo impulsado por wearables para complicaciones de la diabetes",
      description:
         "Ecosistema preventivo de complicaciones de la diabetes que conecta wearables con tableros médicos, permitiendo la predicción de riesgos y mejorando la eficiencia en ~40%.",
      fullDescription:
         "Una plataforma de salud integral que va más allá del simple monitoreo hacia la prevención activa. dabetai predice complicaciones críticas como retinopatía y nefropatía antes de que sean irreversibles.",
      challenge: {
         description:
            "La gestión de la diabetes suele ser reactiva. Los pacientes carecen de visibilidad sobre la progresión silenciosa de complicaciones, mientras que los médicos sufren por la falta de datos continuos en tiempo real.",
         solution:
            "Un ecosistema interconectado que fusiona datos biológicos en tiempo real con supervisión clínica, utilizando modelos predictivos para alertar sobre riesgos específicos.",
      },
      ecosystem: {
         items: [
            {
               title: "Landing Page",
               description:
                  "Landing Page educativa y de marketing que presenta el ecosistema preventivo, destacando cómo los wearables y la IA se integran para la prevención de riesgos de la diabetes en tiempo real.",
            },
            {
               title: "Núcleo de predicción (IA)",
               description:
                  "El corazón del sistema. Procesa datos de usuarios y sensores para pronosticar el riesgo de complicaciones específicas: retinopatía, nefropatía, neuropatía y pie diabético.",
            },
            {
               title: "App móvil (Patient Hub)",
               description:
                  "Actúa como el centro neurálgico para el paciente. Sincroniza con wearables para extraer biomarcadores como frecuencia cardíaca y calidad del sueño en tiempo real.",
            },
            {
               title: "Portal médico (supervisión)",
               description:
                  "Permite a los médicos vincularse con pacientes para supervisión remota, transformando datos diarios en conocimientos clínicos y alertas tempranas.",
            },
            {
               title: "API RESTful",
               description:
                  "API backend central que impulsa el ecosistema, manejando autenticación, gestión de pacientes, integración de datos clínicos y comunicación segura entre todos los componentes.",
            },
            {
               title: "API de inferencia (IA)",
               description:
                  "API dedicada para la inferencia de modelos de IA, procesando datos biométricos en tiempo real para entregar predicciones de riesgo de complicaciones de la diabetes mediante endpoints optimizados.",
            },
         ],
      },
      certificates: [
         {
            title: "VII Congreso Multidisciplinario 2024 — Presentación de cartel",
         },
      ],
   },
};

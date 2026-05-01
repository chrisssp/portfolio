export const projectDabetai = {
   data: {
      id: "dabetai",
      featured: true,
      imagePath: "/assets/images/projects/dabetai/general.png",
      heroImagePath: "/assets/images/projects/dabetai/hero.png",
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
      links: [{ type: "github", url: "https://github.com/dabetai-org" }],
      ecosystem: [
         /* {
            imagePath: "/assets/images/projects/dabetai/general.png",
            techStack: ["astro", "tailwindcss", "react"]
         }, */
         {
            imagePath: "/assets/images/projects/dabetai/specific1.png",
            techStack: [
               "fastapi",
               "mongodb",
               "postgresql",
               "scikitlearn",
               "xgboost",
            ],
            link: {
               type: "github",
               url: "https://github.com/dabetai-org/dabetai-aiapi",
            },
         },
         {
            imagePath: "/assets/images/projects/dabetai/specific2.png",
            techStack: ["reactnative", "expo", "tailwindcss"],
            link: {
               type: "github",
               url: "https://github.com/dabetai-org/dabetai-mobileapp",
            },
         },
         {
            imagePath: "/assets/images/projects/dabetai/specific3.png",
            techStack: ["angular", "tailwindcss"],
            link: {
               type: "github",
               url: "https://github.com/dabetai-org/dabetai-webapp",
            },
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
         "A comprehensive health platform moving beyond simple monitoring to active prevention. dabetai leverages wearable technology and AI to predict critical complications like Retinopathy and Nephropathy before they become irreversible.",
      challenge: {
         description:
            "Diabetes management is often reactive. Patients lack visibility into the silent progression of dangerous complications, while doctors suffer from a lack of continuous, real-time data.",
         solution:
            "An interconnected ecosystem that fuses real-time biological data with clinical oversight, utilizing predictive models to alert both patients and doctors about specific risks.",
      },
      ecosystem: {
         items: [
            /* {
               title: "Product Landing Page",
               description: "Educational and marketing landing page focused on explaining the preventive ecosystem and hardware integration with wearables.",
               link: { label: "Visit landing" }
            }, */
            {
               title: "Complication Prediction Core (AI)",
               description:
                  "The system's heart. It processes user and sensor data to forecast the risk of specific complications: Retinopathy, Nephropathy, Neuropathy, and Diabetic Foot.",
               link: { label: "Go to code" },
            },
            {
               title: "Mobile App (Patient Hub)",
               description:
                  "Acts as the central hub for the patient. Beyond standard logging (glucose/food), it syncs with wearables (CGMs) to extract biomarkers like heart rate and sleep quality in real-time.",
               link: { label: "Go to code" },
            },
            {
               title: "Medical Portal (Oversight)",
               description:
                  "Allows physicians to link with patient accounts for remote supervision. It transforms raw daily data into clinical insights, enabling doctors to receive alerts and intervene remotely.",
               link: { label: "Go to code" },
            },
         ],
      },
   },
   es: {
      title: "dabetai",
      subtitle:
         "Ecosistema preventivo impulsado por wearables para complicaciones de la diabetes",
      description:
         "Ecosistema preventivo de complicaciones de la diabetes que conecta wearables con tableros médicos, permitiendo la predicción de riesgos y mejorando la eficiencia en ~40%.",
      fullDescription:
         "Una plataforma de salud integral que va más allá del simple monitoreo hacia la prevención activa. dabetai aprovecha la tecnología wearable y la IA para predecir complicaciones críticas como retinopatía y nefropatía antes de que sean irreversibles.",
      challenge: {
         description:
            "La gestión de la diabetes suele ser reactiva. Los pacientes carecen de visibilidad sobre la progresión silenciosa de complicaciones, mientras que los médicos sufren por la falta de datos continuos en tiempo real.",
         solution:
            "Un ecosistema interconectado que fusiona datos biológicos en tiempo real con supervisión clínica, utilizando modelos predictivos para alertar sobre riesgos específicos.",
      },
      ecosystem: {
         items: [
            /* {
               title: "Landing page del producto",
               description: "Landing page educativa y de marketing enfocada en explicar el ecosistema preventivo y la integración de hardware con wearables.",
               link: { label: "Visitar landing" }
            }, */
            {
               title: "Núcleo de predicción (IA)",
               description:
                  "El corazón del sistema. Procesa datos de usuarios y sensores para pronosticar el riesgo de complicaciones específicas: retinopatía, nefropatía, neuropatía y pie diabético.",
               link: { label: "Ver código" },
            },
            {
               title: "App móvil (Patient Hub)",
               description:
                  "Actúa como el centro neurálgico para el paciente. Sincroniza con wearables para extraer biomarcadores como frecuencia cardíaca y calidad del sueño en tiempo real.",
               link: { label: "Ver código" },
            },
            {
               title: "Portal médico (supervisión)",
               description:
                  "Permite a los médicos vincularse con pacientes para supervisión remota, transformando datos diarios en conocimientos clínicos y alertas tempranas.",
               link: { label: "Ver código" },
            },
         ],
      },
   },
};

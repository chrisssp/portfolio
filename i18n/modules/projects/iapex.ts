export const projectIapex = {
   data: {
      id: "iapex",
      featured: true,
      imagePath: "/assets/images/projects/iapex/general.png",
      heroImagePath: "/assets/images/projects/iapex/hero.png",
      techStack: [
         "angular",
         "react",
         "ionic",
         "springboot",
         "django",
         "postgresql",
         "python",
      ],
      links: [
         { type: "github", url: "https://github.com/iapex-org" },
         { type: "video", url: "https://youtu.be/WPlo9SK-dgw" },
         {
            type: "paper",
            url: "https://virtual.cuautitlan.unam.mx/intar/wp-content/uploads/sites/19/2025/12/166-A-Hybrid-Artificial-Intelligent-System-for-Missing-JORGE-CHRISTIAN-SERRANO-PUERTOS.pdf",
         },
      ],
      ecosystem: [
         {
            imagePath: "/assets/images/projects/iapex/specific1.png",
            techStack: ["django", "postgresql", "scikitlearn", "python"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/iapex-org/core-api",
               },
               {
                  type: "paper",
                  url: "https://virtual.cuautitlan.unam.mx/intar/wp-content/uploads/sites/19/2025/12/166-A-Hybrid-Artificial-Intelligent-System-for-Missing-JORGE-CHRISTIAN-SERRANO-PUERTOS.pdf",
               },
            ],
         },
         {
            imagePath: "/assets/images/projects/iapex/specific2.png",
            techStack: ["react", "ionic", "tailwindcss"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/iapex-org/mobile-app",
               },
            ],
         },
         {
            imagePath: "/assets/images/projects/iapex/specific3.png",
            techStack: ["angular", "bootstrap", "springboot"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/iapex-org/web-app",
               },
            ],
         },
      ],
   },
   en: {
      title: "IAPEX (Encuéntrame)",
      subtitle: "Hybrid AI Ecosystem for Patient Identification",
      description:
         "Biometric system identifying unconscious patients in seconds, reducing emergency ID delays by over 90% compared to manual protocols.",
      fullDescription:
         "A centralized platform bridging the gap between unidentified hospital patients and searching families using a hybrid fusion of facial and textual signals to maximize identification accuracy under strict privacy protocols.",
      challenge: {
         description:
            "Hospitals rely on isolated, manual protocols to register 'John Does,' creating a critical data disconnect with families who search blindly in morgues and ERs.",
         solution:
            "A privacy-focused ecosystem connecting institutional data with public queries through a secure biometric matching core, reducing identification time from days to seconds.",
      },
      ecosystem: {
         items: [
            {
               title: "Neural Core",
               description:
                  "The heart of IAPEX. Fuses FaceNet embeddings (Euclidean distance) with text filters to rank candidates, significantly reducing false positives compared to standard recognition.",
            },
            {
               title: "The Mobile Client (Family Side)",
               description:
                  "Secure interface for families to input descriptions. It displays potential matches based on similarity scores, protecting patient privacy until verification.",
            },
            {
               title: "The Web Portal (Institutional Side)",
               description:
                  "Secure web portal for medical staff to register patients using morphological traits and photographs under strict RBAC (Role-Based Access Control).",
            },
         ],
      },
   },
   es: {
      title: "IAPEX (Encuéntrame)",
      subtitle: "Ecosistema híbrido de IA para identificación de pacientes",
      description:
         "Sistema biométrico que identifica pacientes inconscientes en segundos, reduciendo los retrasos en la identificación de emergencias en más del 90% frente a protocolos manuales.",
      fullDescription:
         "Una plataforma centralizada que cierra la brecha entre los pacientes hospitalizados no identificados y las familias buscadoras utilizando una fusión híbrida de señales faciales y textuales para maximizar la precisión bajo estrictos protocolos de privacidad.",
      challenge: {
         description:
            "Los hospitales dependen de protocolos manuales y aislados para registrar a personas desconocidas, creando una desconexión de datos crítica con las familias que buscan a ciegas en morgues y salas de emergencia.",
         solution:
            "Un ecosistema enfocado en la privacidad que conecta datos institucionales con consultas públicas a través de un núcleo seguro de coincidencia biométrica, reduciendo el tiempo de identificación de días a segundos.",
      },
      ecosystem: {
         items: [
            {
               title: "Núcleo neural",
               description:
                  "El corazón de IAPEX. Fusiona embeddings de FaceNet (distancia euclidiana) con filtros de texto para clasificar candidatos, reduciendo significativamente los falsos positivos comparado con el reconocimiento estándar.",
            },
            {
               title: "Cliente móvil",
               description:
                  "Interfaz segura para que las familias ingresen descripciones y visualicen posibles coincidencias basadas en puntajes de similitud, protegiendo la privacidad hasta la verificación.",
            },
            {
               title: "Portal web institucional",
               description:
                  "Portal web seguro para que el personal médico registre pacientes utilizando rasgos morfológicos y fotografías bajo un estricto control de acceso basado en roles (RBAC).",
            },
         ],
      },
   },
};

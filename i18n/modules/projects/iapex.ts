export const projectIapex = {
   data: {
      id: "iapex",
      featured: true,
      imagePath: "/assets/images/projects/iapex/general.png",
      heroImagePath: "/assets/images/projects/iapex/hero.png",
      techStack: ["angular", "ionic", "springboot", "django", "postgresql", "python"],
      links: [
         { type: "github", url: "https://github.com/aescobar80/IAPEX_APP-WEB" },
         { type: "video", url: "https://youtu.be/WPlo9SK-dgw" }
      ],
      ecosystem: [
         {
            imagePath: "/assets/images/projects/iapex/specific1.png",
            techStack: ["django", "postgresql", "scikitlearn", "python"],
            link: { type: "github", url: "https://github.com/aescobar80/API-REST-IAPEX" }
         },
         {
            imagePath: "/assets/images/projects/iapex/specific2.png",
            techStack: ["angular", "ionic", "tailwindcss"],
            link: { type: "github", url: "https://github.com/aescobar80/IAPEX-MOBILE-APP" }
         },
         {
            imagePath: "/assets/images/projects/iapex/specific3.png",
            techStack: ["angular", "bootstrap", "springboot"],
            link: { type: "github", url: "https://github.com/aescobar80/IAPEX_APP-WEB" }
         }
      ]
   },
   en: {
      title: "IAPEX (Encuéntrame)",
      subtitle: "Hybrid AI Ecosystem for Patient Identification",
      description: "Biometric system identifying unconscious patients in seconds, reducing emergency ID delays by over 90% compared to manual protocols.",
      fullDescription: "A centralized platform bridging the gap between unidentified hospital patients and searching families using a Hybrid Information Fusion engine (Facial + Textual) to maximize identification accuracy under strict privacy protocols.",
      challenge: {
         description: "Hospitals rely on isolated, manual protocols to register 'John Does,' creating a critical data disconnect with families who search blindly in morgues and ERs.",
         solution: "A privacy-focused ecosystem connecting institutional data with public queries through a secure biometric matching core, reducing identification time from days to seconds."
      },
      ecosystem: {
         items: [
            {
               title: "Neural Core",
               description: "The heart of IAPEX. Fuses FaceNet embeddings (Euclidean distance) with text filters to rank candidates, significantly reducing false positives compared to standard recognition.",
               link: { label: "Go to code" }
            },
            {
               title: "The Mobile Client (Family Side)",
               description: "Secure interface for families to input descriptions. It displays potential matches based on similarity scores, protecting patient privacy until verification.",
               link: { label: "Go to code" }
            },
            {
               title: "The Web Portal (Institutional Side)",
               description: "Secure web portal for medical staff to register patients using morphological traits and photographs under strict RBAC (Role-Based Access Control).",
               link: { label: "Go to code" }
            }
         ]
      }
   },
   es: {
      title: "IAPEX (Encuéntrame)",
      subtitle: "Ecosistema híbrido de IA para identificación de pacientes",
      description: "Sistema biométrico impulsado por IA que identifica pacientes inconscientes en segundos, reduciendo los retrasos en la identificación de emergencias en más del 90% frente a protocolos manuales.",
      fullDescription: "Una plataforma centralizada que cierra la brecha entre los pacientes hospitalizados no identificados y las familias buscadoras utilizando un motor de fusión de información híbrida (facial + textual) para maximizar la precisión bajo estrictos protocolos de privacidad.",
      challenge: {
         description: "Los hospitales dependen de protocolos manuales y aislados para registrar a personas desconocidas, creando una desconexión de datos crítica con las familias que buscan a ciegas en morgues y salas de emergencia.",
         solution: "Un ecosistema enfocado en la privacidad que conecta datos institucionales con consultas públicas a través de un núcleo seguro de coincidencia biométrica, reduciendo el tiempo de identificación de días a segundos."
      },
      ecosystem: {
         items: [
            {
               title: "Núcleo neural",
               description: "El corazón de IAPEX. Fusiona embeddings de FaceNet (distancia euclidiana) con filtros de texto para clasificar candidatos, reduciendo significativamente los falsos positivos comparado con el reconocimiento estándar.",
               link: { label: "Ver código" }
            },
            {
               title: "Cliente móvil",
               description: "Interfaz segura para que las familias ingresen descripciones y visualicen posibles coincidencias basadas en puntajes de similitud, protegiendo la privacidad hasta la verificación.",
               link: { label: "Ver código" }
            },
            {
               title: "Portal web institucional",
               description: "Portal web seguro para que el personal médico registre pacientes utilizando rasgos morfológicos y fotografías bajo un estricto control de acceso basado en roles (RBAC).",
               link: { label: "Ver código" }
            }
         ]
      }
   }
};

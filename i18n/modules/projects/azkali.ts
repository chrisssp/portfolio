export const projectAzkali = {
   data: {
      id: "azkali",
      featured: true,
      imagePath: "/assets/images/projects/azkali/general.png",
      heroImagePath: "/assets/images/projects/azkali/hero.png",
      techStack: [
         "react",
         "reactnative",
         "fastapi",
         "supabase",
         "tailwindcss",
         "expo",
         "postgresql",
         "gemini",
      ],
      links: [
         { type: "demo", url: "https://azkali-landing.vercel.app/" },
         { type: "github", url: "https://github.com/chrisssp/azkali" },
         { type: "video", url: "https://youtu.be/orvfws_kxcc" },
      ],
      ecosystem: [
         {
            imagePath: "/assets/images/projects/azkali/specific1.png",
            techStack: ["react", "tailwindcss"],
            link: { type: "demo", url: "https://azkali-landing.vercel.app/" },
         },
         {
            imagePath: "/assets/images/projects/azkali/specific2.png",
            techStack: ["reactnative", "expo", "tailwindcss", "gluestack"],
         },
         {
            imagePath: "/assets/images/projects/azkali/specific3.png",
            techStack: ["fastapi", "supabase", "postgresql", "gemini"],
         },
      ],
   },
   en: {
      title: "Azkali",
      subtitle: "Behavioral AI Financial Copilot for Gen Z",
      description:
         "AI-powered financial copilot that generates cognitive friction on impulsive purchases by showing costs in work hours, redirecting capital to savings.",
      fullDescription:
         "Azkali is a cross-platform ecosystem that leverages Gemini 2.5 Flash-Lite to analyze spending habits in real-time. Built in a 48h sprint during Talent Land 2026, it transforms informal users into banked clients by translating monetary costs into work-hour opportunity costs.",
      challenge: {
         description:
            "Gen Z faces high levels of impulsive spending and low financial literacy. Traditional banking apps feel rigid and fail to engage younger informal workers who lack saving habits.",
         solution:
            "An AI copilot integrated with partners like Grupo Salinas that uses behavioral economics to trigger saving actions at the point of purchase through gamification and rewards.",
      },
      ecosystem: {
         items: [
            {
               title: "Product Landing Page",
               description:
                  "High-conversion landing page built with React. It serves as the primary touchpoint for users, explaining the behavioral AI engine and value proposition.",
               link: { label: "Visit landing" },
            },
            {
               title: "AI Mobile Experience",
               description:
                  "React Native application featuring a conversational AI interface. It uses Nativewind for styling and Expo for seamless hardware integration, providing a fluid UX for Gen Z.",
            },
            {
               title: "AI & Supabase Backend",
               description:
                  "Robust backend using FastAPI to orchestrate Gemini AI logic. It leverages Supabase for real-time storage, RLS-protected database, and authentication.",
            },
         ],
      },
   },
   es: {
      title: "Azkali",
      subtitle: "Copiloto financiero con IA conductual para la Gen Z",
      description:
         "Copiloto financiero impulsado por IA que genera fricción cognitiva en compras impulsivas al mostrar costos en horas de trabajo, redirigiendo capital al ahorro.",
      fullDescription:
         "Azkali es un ecosistema multiplataforma que aprovecha Gemini 2.5 Flash-Lite para analizar hábitos de gasto en tiempo real. Construido en un sprint de 48h durante Talent Land 2026, transforma a usuarios informales en clientes bancarizados al traducir costos monetarios en horas de trabajo.",
      challenge: {
         description:
            "La Gen Z enfrenta altos niveles de gasto impulsivo y baja educación financiera. Las apps bancarias tradicionales se sienten rígidas y no logran atraer a trabajadores informales jóvenes sin hábitos de ahorro.",
         solution:
            "Un copiloto de IA integrado con socios como Grupo Salinas que utiliza economía conductual para disparar acciones de ahorro en el punto de compra mediante gamificación.",
      },
      ecosystem: {
         items: [
            {
               title: "Landing page del producto",
               description:
                  "Landing page de alta conversión construida con React. Sirve como el principal punto de contacto para los usuarios, explicando el motor de IA conductual y la propuesta de valor.",
               link: { label: "Visitar landing" },
            },
            {
               title: "Experiencia móvil con IA",
               description:
                  "Aplicación en React Native con una interfaz de IA conversacional. Utiliza Nativewind para el estilo y Expo para una integración perfecta, proporcionando una UX fluida para la Gen Z.",
            },
            {
               title: "Backend con IA y Supabase",
               description:
                  "Backend robusto que utiliza FastAPI para orquestar la lógica de Gemini AI. Aprovecha Supabase para almacenamiento en tiempo real, base de datos protegida con RLS y autenticación.",
            },
         ],
      },
   },
};

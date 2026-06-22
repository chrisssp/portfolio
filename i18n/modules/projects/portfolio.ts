export const projectPortfolio = {
   data: {
      id: "portfolio",
      imagePath: "/assets/images/projects/portfolio/general.webp",
      techStack: ["nextjs", "typescript", "tailwindcss", "nodejs", "gemini"],
      categories: {
         domain: [],
         platform: ["web"],
         tags: [],
      },
      links: [{ type: "github", url: "https://github.com/chrisssp/portfolio" }],
      ecosystem: [
         {
            imagePath:
               "/assets/images/projects/portfolio/ecosystem-frontend.webp",
            techStack: ["nextjs", "typescript", "tailwindcss"],
            links: [
               { type: "github", url: "https://github.com/chrisssp/portfolio" },
            ],
         },
         {
            imagePath:
               "/assets/images/projects/portfolio/ecosystem-chatbot.webp",
            techStack: ["nextjs", "groq", "gemini"],
         },
         {
            imagePath: "/assets/images/projects/portfolio/ecosystem-i18n.webp",
            techStack: ["nextjs", "typescript"],
         },
      ],
   },
   en: {
      title: "chrisssp Portfolio",
      subtitle: "AI-Powered Digital Portfolio",
      description:
         "Modern bilingual portfolio built with Next.js, featuring a dynamic project showcase and an AI assistant to answer questions about my experience.",
      fullDescription:
         "A performant, bilingual portfolio built from scratch with Next.js App Router, featuring bilingual support, a project showcase with filtering, and an AI-powered assistant that answers questions about my work using RAG.",
      challenge: {
         description:
            "Traditional portfolios are static — visitors browse and leave without engaging. I wanted a site that could answer questions dynamically.",
         solution:
            "An interactive portfolio with an AI chatbot using Groq and Gemini with RAG, bilingual i18n architecture, and optimized delivery for fast Core Web Vitals across all devices.",
      },
      ecosystem: {
         items: [
            {
               title: "Next.js Frontend",
               description:
                  "App Router with i18n, Server Components, streaming, and optimized images delivering fast Core Web Vitals across all devices.",
            },
            {
               title: "AI Chatbot (RAG)",
               description:
                  "Custom chat API using AI SDK with Groq (primary) and Gemini (fallback), smart query classification, and token-budgeted RAG.",
            },
            {
               title: "Bilingual Content System",
               description:
                  "i18n architecture with locale-specific dictionaries, auto-generated content JSON for the chatbot, and full bilingual support across all pages and metadata.",
            },
         ],
      },
      ctaHighlight:
         "I built this portfolio from scratch — from the AI chatbot to the bilingual i18n system. Let's talk about how I can bring that same care to your next project.",
   },
   es: {
      title: "chrisssp Portfolio",
      subtitle: "Portafolio digital con IA",
      description:
         "Portafolio bilingüe moderno construido con Next.js, con una vitrina dinámica de proyectos y un asistente de IA que responde preguntas sobre mi experiencia.",
      fullDescription:
         "Un portafolio bilingüe y de alto rendimiento construido desde cero con Next.js App Router, con soporte bilingüe, una vitrina de proyectos con filtros, y un asistente con IA que responde preguntas sobre mi trabajo usando RAG.",
      challenge: {
         description:
            "Los portafolios tradicionales son estáticos — los visitantes navegan y se van sin interactuar. Quería un sitio que respondiera preguntas dinámicamente.",
         solution:
            "Un portafolio interactivo con un chatbot de IA usando Groq y Gemini con RAG, arquitectura i18n bilingüe, y entrega optimizada para Core Web Vitals rápidos en todos los dispositivos.",
      },
      ecosystem: {
         items: [
            {
               title: "Frontend Next.js",
               description:
                  "App Router con i18n, Server Components, streaming e imágenes optimizadas que ofrecen Core Web Vitals rápidos en todos los dispositivos.",
            },
            {
               title: "Chatbot con IA (RAG)",
               description:
                  "API de chat personalizada con AI SDK usando Groq (principal) y Gemini (fallback), clasificación inteligente de consultas y RAG con presupuesto de tokens.",
            },
            {
               title: "Sistema de contenido bilingüe",
               description:
                  "Arquitectura i18n con diccionarios por locale, generación automática de JSON de contenido y soporte bilingüe completo en todas las páginas y metadatos.",
            },
         ],
      },
      ctaHighlight:
         "Construí este portafolio desde cero — desde el chatbot con IA hasta el sistema i18n bilingüe. Hablemos sobre cómo puedo llevar ese mismo nivel de detalle a tu próximo proyecto.",
   },
};

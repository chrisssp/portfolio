export const projectRataCueva = {
   data: {
      id: "ratacueva",
      imagePath: "/assets/images/projects/ratacueva/general.webp",
      techStack: ["nextjs", "typescript", "tailwindcss", "express", "mongodb"],
      categories: {
         domain: ["retail"],
         platform: ["web", "api"],
         tags: [],
      },
      links: [
         { type: "github", url: "https://github.com/ratacueva-org" },
         { type: "landing", url: "https://ratacueva.vercel.app" },
      ],
      ecosystem: [
         {
            imagePath: "/assets/images/projects/ratacueva/ecosystem-web.webp",
            techStack: ["nextjs", "typescript", "tailwindcss"],
            links: [{ type: "landing", url: "https://ratacueva.vercel.app" }],
         },
         {
            imagePath: "/assets/images/projects/ratacueva/ecosystem-api.webp",
            techStack: ["express", "mongodb", "typescript"],
            links: [
               {
                  type: "github",
                  url: "https://github.com/ratacueva-org/ratacueva-api",
               },
            ],
         },
      ],
   },
   en: {
      title: "RataCueva",
      subtitle: "Gaming E-Commerce Platform",
      description:
         "Full-stack e-commerce platform for gaming accessories, with real-time inventory and a RESTful API backend.",
      fullDescription:
         "A complete e-commerce solution for gaming accessories built with Next.js 15 App Router and a separate Express API with MongoDB, featuring MercadoPago payment processing and a responsive product catalog.",
      challenge: {
         description:
            "Building a production-grade e-commerce platform with real-time inventory and secure payment processing.",
         solution:
            "Microservices-inspired architecture: Next.js 15 frontend with SSR, Express API with MongoDB, and webhook-based payment flow via MercadoPago.",
      },
      ecosystem: {
         items: [
            {
               title: "Next.js Web App",
               description:
                  "Frontend built with Next.js 15 App Router, Server Components, Server Actions for form handling, and Framer Motion for smooth UI transitions.",
            },
            {
               title: "Express REST API",
               description:
                  "Backend API with Express and MongoDB, handling products, categories, inventory, cart, orders, and MercadoPago payment webhooks.",
            },
         ],
      },
      ctaHighlight:
         "A full e-commerce platform from storefront to payment processing — built with Next.js 15 and Express. Let's talk about your next project.",
   },
   es: {
      title: "RataCueva",
      subtitle: "Plataforma de e-commerce gaming",
      description:
         "Plataforma de e-commerce para accesorios gaming, con inventario en tiempo real y una API RESTful.",
      fullDescription:
         "Una solución completa de e-commerce para accesorios gaming construida con Next.js 15 App Router y un backend Express con MongoDB separado, con procesamiento de pagos con MercadoPago y un catálogo responsivo.",
      challenge: {
         description:
            "Construir un e-commerce de nivel productivo con inventario en tiempo real y procesamiento de pagos seguro.",
         solution:
            "Arquitectura inspirada en microservicios: frontend Next.js 15 con SSR, API Express con MongoDB y flujo de pagos vía webhooks con MercadoPago.",
      },
      ecosystem: {
         items: [
            {
               title: "Web App Next.js",
               description:
                  "Frontend construido con Next.js 15 App Router, Server Components, Server Actions para formularios y Framer Motion para transiciones fluidas.",
            },
            {
               title: "API REST Express",
               description:
                  "API backend con Express y MongoDB, manejando productos, categorías, inventario, carrito, órdenes y webhooks de pago de MercadoPago.",
            },
         ],
      },
      ctaHighlight:
         "Una plataforma de e-commerce completa desde la tienda hasta el procesamiento de pagos — construida con Next.js 15 y Express. Hablemos sobre tu próximo proyecto.",
   },
};

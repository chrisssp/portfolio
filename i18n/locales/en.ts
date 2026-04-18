import { Dictionary } from "../types";

export const en: Dictionary = {
   nav: {
      experience: "Experience",
      projects: "Projects",
      about: "About me",
   },
   hero: {
      role: "FullStack & Mobile Developer",
      description: "I engineer scalable, secure web and mobile solutions by translating complex business requirements into efficient software. Specialized in bridging the gap between logic and user experience using Agile methodologies.",
      actions: {
         cv: "CV",
         email: "Email",
         linkedin: "LinkedIn",
         github: "GitHub",
      },
   },
   about: {
      title: "About me",
      p1: "I am a 21-year-old Engineer based in Mexico, driven by discipline and curiosity. Whether I'm automating a manual workflow, learning piano, or building structures in Minecraft, I am obsessed with optimization and creativity.",
      p2: "I believe in the power of community. I actively participate in Hackathons and tech events, constantly seeking to learn from the best and share knowledge.",
      quote: "Talk is cheap, show me the code",
      educationTitle: "Academic Background",
      education: [
         {
            institution: "Universidad Tecnológica del Centro de Veracruz.",
            degree: "TSU Multiplatform Software Development",
            date: "August 2024",
            achievement: "Graduated Top of Class with a 9.82 GPA.",
         },
         {
            institution: "Universidad Tecnológica del Centro de Veracruz.",
            degree: "Software Development & Management",
            date: "Expected 2026",
         }
      ],
   },
   experience: {
      title: "Experience",
      items: [
         {
            role: "Full Stack Developer - Integrator project",
            company: "Flack’s Barber Shop",
            date: "October 2022",
            description: "Deployed a comprehensive digital ecosystem (Web & Mobile) that automates 100% of appointment scheduling and inventory tracking for the business.",
         },
         {
            role: "Software Engineer Intern",
            company: "PepsiCo (Mexico)",
            date: "April 2024",
            description: "Engineered a centralized Web App (Angular/MongoDB) to replace legacy Excel workflows, streamlining the processing of 100k+ records and reducing manual errors.",
         },
         {
            role: "Hackathon Finalist & Team Lead",
            company: "Coppel Nexus (Talent Land 2025)",
            date: "April 2025",
            description: "Secured a podium place by architecting a gamified referral ecosystem for Coppel (React/Node.js) in a 4-days sprint, strictly applying XP and Kanban methodologies.",
            link: {
               url: "#",
               label: "View certificate of participation",
            }
         },
         {
            role: "Software Engineer Intern",
            company: "Seven D Construction (Chicago, IL)",
            date: "Currently",
            description: "Spearheading the \"Seven D Compass\" expansion by implementing financial reconciliation modules and predictive analytics dashboards using Angular & Ionic.",
         }
      ],
   },
   projects: {
      title: "Projects",
      subtitle: "Do you want to see more? Check my GitHub",
      items: [
         {
            title: "IAPEX (Encuéntrame)",
            description: "AI-powered biometric system that identifies unconscious patients in seconds, aiming to reduce emergency identification delays by over 90% compared to manual protocols.",
            imagePath: "/assets/images/projects/iapex.png",
            techStack: ["angular", "bootstrap", "react", "ionic", "springboot", "postgresql", "fastapi", "mongodb"],
            links: [
               { type: "video", url: "#" },
               { type: "demo", url: "#" }
            ],
         },
         {
            title: "dabetai",
            description: "Diabetes complications preventive ecosystem connecting wearables with medical dashboards, enabling real-time risk prediction and improving patient-doctor response efficiency by ~40%.",
            imagePath: "/assets/images/projects/dabetai.png",
            techStack: ["astro", "angular", "reactnative", "expo", "tailwindcss", "nestjs", "postgresql", "fastapi", "mongodb"],
            links: [
               { type: "video", url: "#" },
               { type: "demo", url: "#" }
            ],
         },
         {
            title: "PuntoFiel",
            description: "Offline-first loyalty platform that digitizes customer retention for local businesses, eliminating physical cards and increasing user engagement through gamified rewards.",
            imagePath: "/assets/images/projects/puntofiel.png",
            techStack: ["reactnative", "tailwindcss", "expo", "gluestack", "supabase", "postgresql", "prisma"],
            links: [
               { type: "github", url: "#" },
               { type: "demo", url: "#" },
               { type: "video", url: "#" }
            ],
         }
      ],
      actions: {
         view_code: "Go to code",
         view_demo: "See in action",
         view_design: "View details",
         view_video: "Watch demo",
      },
   },
   cta: {
      title: "Ready to build something extraordinary?",
      description: "I'm currently available for full-time roles and challenging projects. Let's discuss how I can help your team scale.",
      actions: {
         talk: "Let's talk",
         copy: "Copy email",
      },
   },
   footer: {
      rights: "0 errors, 14 warnings, 100% by Christian Serrano 🤓👆",
   },
};

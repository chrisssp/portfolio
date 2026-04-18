import { Dictionary } from "../types";

export const en: Dictionary = {
   nav: {
      experience: "Experience",
      projects: "Projects",
      about: "About me",
      goBack: "Go back",
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
      sections: {
         challenge: "The challenge",
         challengeTitle: "Challenge",
         solutionTitle: "Solution",
         ecosystem: "Ecosystem",
      },
      items: [
         {
            id: "iapex",
            featured: true,
            title: "IAPEX (Encuéntrame)",
            subtitle: "Hybrid AI Ecosystem for Patient Identification",
            description: "AI-powered biometric system that identifies unconscious patients in seconds, aiming to reduce emergency identification delays by over 90% compared to manual protocols.",
            fullDescription: "A centralized platform bridging the gap between unidentified hospital patients and searching families using a Hybrid Information Fusion engine (Facial + Textual) to maximize identification accuracy.",
            imagePath: "/assets/images/projects/iapex/general.png",
            heroImagePath: "/assets/images/projects/iapex/hero.png",
            techStack: ["angular", "bootstrap", "react", "ionic", "springboot", "postgresql", "fastapi", "mongodb"],
            links: [
               { type: "video", url: "#" },
               { type: "demo", url: "#" }
            ],
            challenge: {
               description: "Hospitals rely on isolated, manual protocols to register \"John Does,\" creating a critical data disconnect with families who are searching blindly in morgues and ERs.",
               solution: "A privacy-focused ecosystem connecting institutional data (Web Portal) with public queries (Mobile Client) through a secure biometric matching core."
            },
            ecosystem: {
               items: [
                  {
                     title: "The Neural Core (Hybrid AI)",
                     description: "The heart of IAPEX. Fuses FaceNet embeddings (Euclidean distance) with text filters to rank candidates, significantly reducing false positives compared to standard recognition.",
                     imagePath: "/assets/images/projects/iapex/specific1.png",
                     techStack: ["fastapi", "mongodb", "postgresql"],
                     link: { type: "paper", url: "#", label: "Read paper" }
                  },
                  {
                     title: "The Mobile Client (Family Side)",
                     description: "Mobile interface for families to input descriptions. It displays potential matches based on similarity scores, protecting patient privacy until verification.",
                     imagePath: "/assets/images/projects/iapex/specific2.png",
                     techStack: ["react", "ionic", "tailwindcss"]
                  },
                  {
                     title: "The Web Portal (Institutional Side)",
                     description: "Secure web portal for medical staff to register patients using morphological traits and photographs under strict RBAC (Role-Based Access Control).",
                     imagePath: "/assets/images/projects/iapex/specific3.png",
                     techStack: ["angular", "bootstrap", "nestjs"]
                  }
               ]
            }
         },
         {
            id: "dabetai",
            featured: true,
            title: "dabetai",
            subtitle: "Wearables-Driven Preventive Ecosystem for Diabetes Complications",
            description: "Diabetes complications preventive ecosystem connecting wearables with medical dashboards, enabling real-time risk prediction and improving patient-doctor response efficiency by ~40%.",
            fullDescription: "A comprehensive health platform moving beyond simple monitoring to active prevention. dabetai leverages wearable technology and AI to predict critical complications before they become irreversible.",
            imagePath: "/assets/images/projects/dabetai/general.png",
            heroImagePath: "/assets/images/projects/dabetai/hero.png",
            techStack: ["astro", "angular", "reactnative", "expo", "tailwindcss", "nestjs", "postgresql", "fastapi", "mongodb"],
            links: [
               { type: "video", url: "#" },
               { type: "demo", url: "#" }
            ],
            challenge: {
               description: "Diabetes management is often reactive and isolated. Patients lack visibility into the silent progression of dangerous complications (Retinopathy, Nephropathy, etc.), while doctors suffer from a lack of continuous, real-time patient data.",
               solution: "An interconnected ecosystem that fuses real-time biological data from wearables with clinical oversight, utilizing predictive models to alert both patients and doctors about specific complication risks."
            },
            ecosystem: {
               items: [
                  {
                     title: "Complication Prediction Core (AI)",
                     description: "The system's heart. It processes user and sensor data to forecast the risk of specific complications: Retinopathy, Nephropathy, Neuropathy, and Diabetic Foot.",
                     imagePath: "/assets/images/projects/dabetai/specific1.png",
                     techStack: ["fastapi", "mongodb", "postgresql"],
                     link: { type: "paper", url: "#", label: "Read paper" }
                  },
                  {
                     title: "Mobile App (Patient Hub)",
                     description: "Acts as the central hub for the patient. Beyond standard logging (glucose/food), it syncs with wearables (smartwatches, CGMs) to extract biomarkers like heart rate and sleep quality in real-time.",
                     imagePath: "/assets/images/projects/dabetai/specific2.png",
                     techStack: ["reactnative", "expo", "tailwindcss"]
                  },
                  {
                     title: "Medical Portal (Oversight)",
                     description: "Allows physicians to link with patient accounts for remote supervision. It transforms raw daily data into clinical insights, enabling doctors to receive alerts and intervene remotely.",
                     imagePath: "/assets/images/projects/dabetai/specific3.png",
                     techStack: ["angular", "tailwindcss"]
                  }
               ]
            }
         },
         {
            id: "puntofiel",
            featured: true,
            title: "PuntoFiel",
            description: "Offline-first loyalty platform that digitizes customer retention for local businesses, eliminating physical cards and increasing user engagement through gamified rewards.",
            imagePath: "/assets/images/projects/puntofiel/general.png",
            techStack: ["reactnative", "tailwindcss", "expo", "gluestack", "supabase", "postgresql", "prisma"],
            links: [
               { type: "github", url: "#" },
               { type: "demo", url: "#" },
               { type: "video", url: "#" }
            ],
         },
         {
            id: "mtrpa",
            title: "MTRPA (PepsiCo)",
            description: "Enterprise automation tool migrating 100k+ records from Excel to MongoDB, cutting data processing time by ~70% and eliminating manual entry errors.",
            imagePath: "/assets/images/projects/mtrpa/general.png",
            techStack: ["angular", "bootstrap", "springboot", "postgresql", "mongodb"],
            links: [
               { type: "demo", url: "#" }
            ],
         },
         {
            id: "coppel-nexus",
            title: "Coppel Nexus",
            description: "Top-ranked fintech referral system for Coppel, designed to scale corporate partnerships with micro-businesses through a gamified React Native experience, built in under 4 days.",
            imagePath: "/assets/images/projects/coppel-nexus/general.png",
            techStack: ["react", "reactnative", "tailwindcss", "nestjs", "firebase", "expo"],
            links: [
               { type: "github", url: "#" },
               { type: "demo", url: "#" },
               { type: "video", url: "#" }
            ],
         },
         {
            id: "flacks",
            title: "Flack’s Cut & Connect",
            description: "Full-cycle digital transformation for a local business, automating 100% of appointment scheduling and inventory tracking to drastically reduce administrative overhead.",
            imagePath: "/assets/images/projects/flacks/general.png",
            techStack: ["angular", "bootstrap", "ionic", "springboot", "postgresql", "laravel", "android", "java"],
            links: [
               { type: "github", url: "#" },
               { type: "demo", url: "#" }
            ],
         }
      ],
      actions: {
         view_code: "Go to code",
         view_demo: "See in action",
         view_design: "View details",
         view_video: "Watch demo",
         view_details: "View details",
         read_paper: "Read paper",
         tab_featured: "Featured",
         tab_all: "Others"
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

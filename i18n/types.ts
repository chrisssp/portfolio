// src/i18n/types.ts

// --------------------------------------------------------
// 1. Interfaces Auxiliares (Estructuras de datos repetitivas)
// --------------------------------------------------------

export interface ExperienceItem {
   role: string;
   company: string;
   date: string;
   description: string;
   // Opcional: Para botones como "Ver certificado"
   link?: {
      url: string;
      label: string; // "Ver certificado de participación"
   };
}

export interface EducationItem {
   institution: string;
   degree: string;
   date: string;
   achievement?: string; // Ej: "Promedio 9.82"
}

export interface ProjectItem {
   title: string;
   description: string;
   imagePath: string; // Ruta a la imagen en /public/assets/images/projects/
   // Array de IDs de tecnologías (ej: "react", "java").
   // El componente TechBadge decidirá el icono y color.
   techStack: string[];
   links: {
      type: "github" | "demo" | "figma" | "video"; // Tipos de botones soportados
      url: string;
   }[];
}

// --------------------------------------------------------
// 2. La Interfaz Maestra (Contrato de Traducción)
// --------------------------------------------------------

export interface Dictionary {
   // --- Navigation ---
   nav: {
      experience: string;
      projects: string;
      about: string;
   };

   // --- Hero Section ---
   hero: {
      role: string;
      description: string;
      // Etiquetas para los botones de redes/contacto
      actions: {
         cv: string; // "CV"
         email: string; // "Email"
         linkedin: string; // "LinkedIn"
         github: string; // "GitHub"
      };
   };

   // --- About Me Section ---
   about: {
      title: string;
      p1: string;
      p2: string;
      quote: string; // "Talk is cheap..."
      educationTitle: string;
      education: EducationItem[];
   };

   // --- Experience Section ---
   experience: {
      title: string;
      items: ExperienceItem[];
   };

   // --- Projects Section ---
   projects: {
      title: string;
      subtitle: string;
      items: ProjectItem[];
      // Etiquetas genéricas para los botones de las cards
      actions: {
         view_code: string; // "Ver Código"
         view_demo: string; // "Ver Demo"
         view_design: string; // "Ver Diseño"
         view_video: string; // "Ver Video"
      };
   };

   // --- Call to Action (CTA) Section ---
   cta: {
      title: string;
      description: string;
      actions: {
         talk: string; // "Hablemos" o "Let's talk"
         copy: string; // "Copiar correo"
      };
   };

   // --- Footer ---
   footer: {
      rights: string;
   };
}

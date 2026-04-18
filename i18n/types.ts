// src/i18n/types.ts

// --------------------------------------------------------
// 1. Interfaces Auxiliares
// --------------------------------------------------------

export interface ExperienceItem {
   role: string;
   company: string;
   location: string;
   remote?: string;
   product?: string;
   projectId?: string; // ID del proyecto para scroll
   date: string;
   description: string;
   link?: {
      url: string;
      label: string;
   };
}

export interface ProjectLink {
   type: "github" | "demo" | "figma" | "video" | "paper";
   url: string;
}

export interface EcosystemItem {
   title: string;
   description: string;
   imagePath: string;
   techStack: string[];
   link?: {
      type: "paper" | "github" | "demo";
      url: string;
      label: string;
   };
}

export interface ProjectItem {
   id: string; // Slug para la URL
   featured?: boolean; // Si aparece en la vista destacada
   title: string;
   subtitle?: string; // Título largo en la página de detalle
   description: string; // Resumen para la card
   fullDescription?: string; // Descripción larga para el detalle
   imagePath: string; // Imagen para la card (general.png)
   heroImagePath?: string; // Imagen para el hero del detalle (hero.png)
   techStack: string[];
   links: ProjectLink[];
   
   // Campos específicos para el detalle
   challenge?: {
      description: string;
      solution: string;
   };
   ecosystem?: {
      items: EcosystemItem[];
   };
}

export interface EducationItem {
   institution: string;
   degree: string;
   date: string;
   achievement?: string;
}

// --------------------------------------------------------
// 2. Interfaz Principal del Diccionario
// --------------------------------------------------------

export interface Dictionary {
   nav: {
      experience: string;
      projects: string;
      about: string;
      goBack: string;
   };

   hero: {
      role: string;
      description: string;
      actions: {
         cv: string;
         email: string;
         linkedin: string;
         github: string;
      };
   };

   about: {
      title: string;
      p1: string;
      p2: string;
      philosophy: string;
      quote: string;
      educationTitle: string;
      education: EducationItem[];
   };

   experience: {
      title: string;
      items: ExperienceItem[];
   };

   projects: {
      title: string;
      subtitle: string;
      items: ProjectItem[];
      sections: {
         challenge: string;
         challengeTitle: string;
         solutionTitle: string;
         ecosystem: string;
      };
      actions: {
         view_code: string;
         view_demo: string;
         view_design: string;
         view_video: string;
         view_details: string;
         read_paper: string;
         tab_featured: string;
         tab_all: string;
      };
   };

   cta: {
      title: string;
      description: string;
      actions: {
         talk: string;
         copy: string;
      };
   };

   footer: {
      rights: string;
   };
}

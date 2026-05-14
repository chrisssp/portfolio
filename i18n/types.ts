// src/i18n/types.ts

// --------------------------------------------------------
// 1. Interfaces auxiliares
// --------------------------------------------------------

export interface ExperienceItem {
   role: string;
   company: string;
   location: string;
   remote?: string;
   product?: string;
   projectId?: string;
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
   links?: ProjectLink[];
}

export interface ProjectItem {
   id: string;
   featured?: boolean;
   subtitle?: string;
   description: string;
   fullDescription?: string;
   imagePath: string;
   heroImagePath?: string;
   techStack: string[];
   links: ProjectLink[];
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

export interface ProjectModule {
   data: {
      id: string;
      featured?: boolean;
      imagePath: string;
      heroImagePath?: string;
      techStack: string[];
      links: { type: string; url: string }[];
      ecosystem?: {
         imagePath: string;
         techStack: string[];
         links?: ProjectLink[];
      }[];
   };
   en: {
      title: string;
      subtitle: string;
      description: string;
      fullDescription: string;
      challenge?: {
         description: string;
         solution: string;
      };
      ecosystem?: {
         items: {
            title: string;
            description: string;
         }[];
      };
   };
   es: {
      title: string;
      subtitle: string;
      description: string;
      fullDescription: string;
      challenge?: {
         description: string;
         solution: string;
      };
      ecosystem?: {
         items: {
            title: string;
            description: string;
         }[];
      };
   };
}

// --------------------------------------------------------
// 2. Interfaz principal del diccionario
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
         cvLink: string;
         email: string;
         emailMenu: {
            send: string;
            sendSub: string;
            copy: string;
            copySub: string;
            copied: string;
         };
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
         see_more: string;
      };
   };

   cta: {
      title: string;
      description: string;
      projectDescription: string;
      actions: {
         talk: string;
         copy: string;
      };
   };

   footer: {
      rights: string;
   };
}

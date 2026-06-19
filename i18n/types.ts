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
   type: "github" | "demo" | "landing" | "figma" | "video" | "paper";
   url: string;
}

export interface CertificateItem {
   title: string;
   filePath: string;
   issuer?: string;
   date?: string;
}

export interface EcosystemItem {
   title: string;
   description: string;
   imagePath: string;
   techStack: string[];
   links?: ProjectLink[];
}

export type Domain = "health" | "fintech" | "logistics" | "retail";
export type Platform = "web" | "mobile" | "api" | "landing";
export type VerticalTag =
   | "ai-ml"
   | "iot-wearables"
   | "hackathon"
   | "research"
   | "enterprise";

export interface ProjectCategories {
   domain: Domain[];
   platform: Platform[];
   tags: VerticalTag[];
}

export interface ProjectItem {
   id: string;
   featured?: boolean;
   title: string;
   subtitle?: string;
   description: string;
   fullDescription?: string;
   imagePath: string;
   heroImagePath?: string;
   techStack: string[];
   categories: ProjectCategories;
   links?: ProjectLink[];
   challenge?: {
      description: string;
      solution: string;
   };
   ecosystem?: {
      items: EcosystemItem[];
   };
   certificates?: CertificateItem[];
   ctaHighlight?: string;
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
      categories: ProjectCategories;
      links: { type: string; url: string }[];
      ecosystem?: {
         imagePath: string;
         techStack: string[];
         links?: ProjectLink[];
      }[];
      certificates?: {
         filePath: string;
         issuer?: string;
         date?: string;
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
      certificates?: {
         title: string;
         filePath?: string;
      }[];
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
      certificates?: {
         title: string;
         filePath?: string;
      }[];
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
      language: string;
      themeLight: string;
      themeDark: string;
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
         youtube: string;
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
         recognitions: string;
      };
      actions: {
         view_code: string;
         view_demo: string;
         view_landing: string;
         view_design: string;
         view_video: string;
         view_details: string;
         read_paper: string;
         view_certificate: string;
         tab_featured: string;
         tab_all: string;
         see_more: string;
         filter: string;
         filter_tech: string;
         filter_focus: string;
         clear_filters: string;
         clear_all: string;
         no_projects_match: string;
      };
   };

   filters: {
      focus: Record<string, string>;
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

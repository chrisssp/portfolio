export interface ExperienceItem {
   position: string;
   company: string;
   date: string;
   description: string;
}

export interface Badge {
   icon: SVGAElement;
   name: string;
   color: string;
}

export interface Button {
   icon: SVGAElement;
   name: string;
}

export interface Project {
   title: string;
   description: string;
   badges: Badge[];
   buttons: Button[];
}

export interface Dictionary {
   example: string; // <-- Agregamos esto para que tu prueba funcione
}

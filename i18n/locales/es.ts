import { about } from "../modules/about";
import { cta } from "../modules/cta";
import { experience } from "../modules/experience";
import { footer } from "../modules/footer";
import { hero } from "../modules/hero";
import { nav } from "../modules/nav";
// Projects
import { project7dCompass } from "../modules/projects/7dcompass";
import { projectAzkali } from "../modules/projects/azkali";
import { projectCoppelNexus } from "../modules/projects/coppelnexus";
import { projectDabetai } from "../modules/projects/dabetai";
import { projectFlacks } from "../modules/projects/flacks";
import { projectIapex } from "../modules/projects/iapex";
import { projectMtrpa } from "../modules/projects/mtrpa";
import { projectPuntoFiel } from "../modules/projects/puntofiel";
import type { Dictionary, ProjectItem, ProjectModule } from "../types";

const projectModules: ProjectModule[] = [
   project7dCompass as unknown as ProjectModule,
   projectAzkali as unknown as ProjectModule,
   projectIapex as unknown as ProjectModule,
   projectDabetai as unknown as ProjectModule,
   projectMtrpa as unknown as ProjectModule,
   projectPuntoFiel as unknown as ProjectModule,
   projectCoppelNexus as unknown as ProjectModule,
   projectFlacks as unknown as ProjectModule,
];

export const es: Dictionary = {
   nav: nav.es,
   hero: hero.es,
   about: about.es,
   experience: experience.es,
   projects: {
      title: "Proyectos",
      subtitle: "¿Quieres ver más? Visita mi GitHub",
      sections: {
         challenge: "El desafío",
         challengeTitle: "Desafío",
         solutionTitle: "Solución",
         ecosystem: "Ecosistema",
         recognitions: "Reconocimientos",
      },
      items: projectModules.map((m) => {
         const lang = m.es;
         return {
            ...m.data,
            ...lang,
            ecosystem: lang.ecosystem
               ? {
                    items: lang.ecosystem.items.map((item, i) => {
                       const dataItem = m.data.ecosystem?.[i] || {
                          imagePath: "",
                          techStack: [],
                       };
                       return {
                          ...dataItem,
                          ...item,
                          links: dataItem.links ?? [],
                       };
                    }),
                 }
               : undefined,
            certificates: lang.certificates
               ? lang.certificates.map((item, i) => {
                    const dataItem = m.data.certificates?.[i] || {
                       filePath: "",
                    };
                    return { ...dataItem, ...item };
                 })
               : undefined,
         };
      }) as ProjectItem[],
      actions: {
         view_code: "Ver código",
         view_demo: "Ver en acción",
         view_landing: "Ver landing",
         view_design: "Ver detalles",
         view_video: "Ver demo",
         view_details: "Ver detalles",
         read_paper: "Leer artículo",
         view_certificate: "Abrir",
         tab_featured: "Destacados",
         tab_all: "Otros",
         see_more: "Ver más proyectos",
         filter: "Filtros",
         filter_tech: "Tecnología",
         filter_domain: "Dominio",
         filter_platform: "Plataforma",
         filter_tags: "Vertical",
         clear_filters: "Limpiar",
         clear_all: "Limpiar todos los filtros",
         no_projects_match: "No hay proyectos con los filtros seleccionados",
      },
   },
   filters: {
      domain: {
         health: "Salud",
         fintech: "Fintech",
         logistics: "Logística",
         retail: "Retail",
         productivity: "Productividad",
      },
      platform: {
         web: "Web",
         mobile: "Móvil",
         api: "API",
         landing: "Landing",
      },
      tags: {
         "ai-ml": "IA / ML",
         "iot-wearables": "IoT / Wearables",
         hackathon: "Hackathon",
         research: "Investigación",
         enterprise: "Corporativo",
      },
   },
   cta: cta.es,
   footer: footer.es,
};

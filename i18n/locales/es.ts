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
import type { Dictionary } from "../types";

const projectModules = [
   project7dCompass,
   projectAzkali,
   projectIapex,
   projectDabetai,
   projectMtrpa,
   projectPuntoFiel,
   projectCoppelNexus,
   projectFlacks,
];

export const es: Dictionary = {
   nav: nav.es,
   hero: hero.es,
   about: about.es,
   experience: experience.es,
   projects: {
      title: "Proyectos",
      subtitle: "¿Quieres ver más? Revisa mi GitHub",
      sections: {
         challenge: "El desafío",
         challengeTitle: "Desafío",
         solutionTitle: "Solución",
         ecosystem: "Ecosistema",
      },
      items: projectModules.map((m) => {
         const lang = (m as any).es;
         return {
            ...m.data,
            ...lang,
            ecosystem: lang.ecosystem
               ? {
                    items: lang.ecosystem.items.map((item: any, i: number) => {
                       const dataItem = (m.data as any).ecosystem?.[i] || {};
                       return {
                          ...dataItem,
                          ...item,
                          link:
                             item.link || dataItem.link
                                ? {
                                     ...dataItem.link,
                                     ...item.link,
                                  }
                                : undefined,
                       };
                    }),
                 }
               : undefined,
         } as any;
      }),
      actions: {
         view_code: "Ver código",
         view_demo: "Ver en acción",
         view_design: "Ver detalles",
         view_video: "Ver demo",
         view_details: "Ver detalles",
         read_paper: "Leer artículo",
         tab_featured: "Destacados",
         tab_all: "Otros",
         see_more: "Ver más proyectos",
      },
   },
   cta: cta.es,
   footer: footer.es,
};

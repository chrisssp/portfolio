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

export const en: Dictionary = {
   nav: nav.en,
   hero: hero.en,
   about: about.en,
   experience: experience.en,
   projects: {
      title: "Projects",
      subtitle: "Want to see more? Check my GitHub",
      sections: {
         challenge: "The challenge",
         challengeTitle: "Challenge",
         solutionTitle: "Solution",
         ecosystem: "Ecosystem",
      },
      items: projectModules.map((m) => {
         const lang = m.en;
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
         };
      }) as ProjectItem[],
      actions: {
         view_code: "Go to code",
         view_demo: "See in action",
         view_design: "View details",
         view_video: "Watch demo",
         view_details: "View details",
         read_paper: "Read paper",
         tab_featured: "Featured",
         tab_all: "Others",
         see_more: "See more projects",
      },
   },
   cta: cta.en,
   footer: footer.en,
};

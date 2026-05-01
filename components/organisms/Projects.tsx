"use client";

import { useEffect, useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdCode } from "react-icons/md";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Button } from "../atoms/Button";
import { SectionContainer } from "../atoms/SectionContainer";
import { Typography } from "../atoms/Typography";
import { ProjectCard } from "../molecules/ProjectCard";

interface ProjectsProps {
   dict: Dictionary;
   lang: Locale;
}

export const Projects = ({ dict, lang }: ProjectsProps) => {
   const [filter, setFilter] = useState<"featured" | "others">("featured");

   const filteredProjects = useMemo(() => {
      if (filter === "featured") {
         return dict.projects.items.filter((p) => p.featured);
      }
      return dict.projects.items.filter((p) => !p.featured);
   }, [filter, dict.projects.items]);

   // Escuchar evento para cambiar de pestaña y hacer scroll
   useEffect(() => {
      const handleSwitch = (e: Event) => {
         const customEvent = e as CustomEvent<{ projectId: string }>;
         const { projectId } = customEvent.detail;
         const project = dict.projects.items.find((p) => p.id === projectId);
         if (project) {
            setFilter(project.featured ? "featured" : "others");
            // Esperar al re-render para que el ID exista en el DOM
            setTimeout(() => {
               const el = document.getElementById(`project-${projectId}`);
               if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "center" });
               }
            }, 100);
         }
      };

      window.addEventListener(
         "switch-project-tab",
         handleSwitch as EventListener,
      );
      return () =>
         window.removeEventListener(
            "switch-project-tab",
            handleSwitch as EventListener,
         );
   }, [dict.projects.items]);

   return (
      <SectionContainer
         id="projects"
         className="bg-surface"
         innerClassName="flex flex-col gap-8 lg:gap-16"
      >
         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-6">
            <div className="flex gap-4 md:gap-6 items-center">
               <MdCode className="size-8 text-body" />
               <Typography variant="section">{dict.projects.title}</Typography>
            </div>

            {/* Segmented Control */}
            <div className="bg-page/50 backdrop-blur-sm border border-subtle p-1 sm:p-1.5 rounded-xl sm:rounded-2xl grid grid-cols-2 relative shadow-sm w-full lg:w-auto">
               <div
                  className={`absolute top-1 sm:top-1.5 bottom-1 sm:bottom-1.5 bg-primary rounded-lg sm:rounded-xl transition-all duration-300 ease-in-out ${
                     filter === "featured"
                        ? "left-1 sm:left-1.5 w-[calc(50%-4px)] sm:w-[calc(50%-6px)]"
                        : "left-[calc(50%+2px)] sm:left-[calc(50%+3px)] w-[calc(50%-4px)] sm:w-[calc(50%-6px)]"
                  }`}
               />
               <button
                  type="button"
                  onClick={() => setFilter("featured")}
                  className={`relative z-10 flex-1 px-4 sm:px-6 py-2 sm:py-2.5 font-bold text-sm sm:text-base transition-all duration-300 text-center whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-95 rounded-lg sm:rounded-xl ${
                     filter === "featured"
                        ? "text-primary-contrast"
                        : "text-body hover:text-primary hover:bg-surface/50"
                  }`}
               >
                  {dict.projects.actions.tab_featured}
               </button>
               <button
                  type="button"
                  onClick={() => setFilter("others")}
                  className={`relative z-10 flex-1 px-4 sm:px-6 py-2 sm:py-2.5 font-bold text-sm sm:text-base transition-all duration-300 text-center whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-95 rounded-lg sm:rounded-xl ${
                     filter === "others"
                        ? "text-primary-contrast"
                        : "text-body hover:text-primary hover:bg-surface/50"
                  }`}
               >
                  {dict.projects.actions.tab_all}
               </button>
            </div>
         </div>

         <div className="flex flex-col gap-16 lg:gap-30 w-full transition-all duration-500 min-h-100">
            {filteredProjects.map((project, index) => (
               <div
                  key={project.id}
                  id={`project-${project.id}`}
                  className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both scroll-mt-32"
                  style={{ animationDelay: `${index * 100}ms` }}
               >
                  <ProjectCard
                     project={project}
                     actions={dict.projects.actions}
                     reverse={index % 2 !== 0}
                     lang={lang}
                  />
               </div>
            ))}
         </div>

         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mt-8 lg:mt-16 gap-6">
            <Typography
               variant="body"
               className="font-medium text-slate-600 dark:text-slate-400"
            >
               {dict.projects.subtitle}
            </Typography>
            <a
               href="https://github.com/chrisssp?tab=repositories"
               target="_blank"
               rel="noopener noreferrer"
               className="w-full lg:w-auto"
            >
               <Button
                  variant="outline"
                  icon={<FaGithub className="size-5" />}
                  className="rounded-xl! w-full lg:w-auto"
               >
                  {dict.projects.actions.see_more}
               </Button>
            </a>
         </div>
      </SectionContainer>
   );
};

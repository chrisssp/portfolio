"use client";

import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { ProjectCard } from "../molecules/ProjectCard";
import { Button } from "../atoms/Button";
import { MdCode, MdArrowForward } from "react-icons/md";
import { Locale } from "@/i18n/config";
import { SectionContainer } from "../atoms/SectionContainer";
import { useState, useMemo, useEffect } from "react";

interface ProjectsProps {
   dict: Dictionary;
   lang: Locale;
}

export const Projects = ({ dict, lang }: ProjectsProps) => {
   const [filter, setFilter] = useState<"featured" | "others">("featured");

   const filteredProjects = useMemo(() => {
      if (filter === "featured") {
         return dict.projects.items.filter(p => p.featured);
      }
      return dict.projects.items.filter(p => !p.featured);
   }, [filter, dict.projects.items]);

   // Escuchar evento para cambiar de pestaña y hacer scroll
   useEffect(() => {
      const handleSwitch = (e: any) => {
         const { projectId } = e.detail;
         const project = dict.projects.items.find(p => p.id === projectId);
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

      window.addEventListener("switch-project-tab" as any, handleSwitch);
      return () => window.removeEventListener("switch-project-tab" as any, handleSwitch);
   }, [dict.projects.items]);

   return (
      <SectionContainer id="projects" className="bg-surface" innerClassName="flex flex-col gap-8 lg:gap-16">
         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-6">
            <div className="flex gap-4 md:gap-6 items-center">
               <MdCode className="size-8 text-body" />
               <Typography variant="section">
                  {dict.projects.title}
               </Typography>
            </div>
            
            {/* Segmented Control - Ajustado ancho para evitar desbordamiento en español */}
            <div className="bg-page/50 backdrop-blur-sm border border-subtle p-1 rounded-2xl flex relative shadow-sm w-full lg:w-auto min-w-[240px]">
               <div 
                  className={`absolute top-1 bottom-1 bg-primary rounded-xl transition-all duration-300 ease-in-out ${
                     filter === "featured" ? "left-1 w-[calc(50%-4px)]" : "left-[calc(50%+2px)] w-[calc(50%-4px)]"
                  }`}
               />
               <button 
                  onClick={() => setFilter("featured")}
                  className={`relative z-10 flex-1 px-4 py-2.5 font-bold text-[14px] transition-colors duration-300 text-center ${
                     filter === "featured" ? "text-primary-contrast" : "text-body hover:text-primary"
                  }`}
               >
                  {dict.projects.actions.tab_featured}
               </button>
               <button 
                  onClick={() => setFilter("others")}
                  className={`relative z-10 flex-1 px-4 py-2.5 font-bold text-[14px] transition-colors duration-300 text-center ${
                     filter === "others" ? "text-primary-contrast" : "text-body hover:text-primary"
                  }`}
               >
                  {dict.projects.actions.tab_all}
               </button>
            </div>
         </div>

         <div className="flex flex-col gap-16 lg:gap-[120px] w-full transition-all duration-500 min-h-[400px]">
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
            <Typography variant="body" className="font-medium text-slate-500">
               {dict.projects.subtitle}
            </Typography>
            <Button 
               variant="outline" 
               icon={<MdArrowForward className="rotate-[-45deg]" />} 
               className="!rounded-xl w-full lg:w-auto"
               onClick={() => setFilter("others")}
            >
               See more projects
            </Button>
         </div>
      </SectionContainer>
   );
};

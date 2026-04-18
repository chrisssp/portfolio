"use client";

import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { ProjectCard } from "../molecules/ProjectCard";
import { Button } from "../atoms/Button";
import { MdCode, MdArrowForward } from "react-icons/md";
import { Locale } from "@/i18n/config";
import { SectionContainer } from "../atoms/SectionContainer";
import { useState, useMemo } from "react";

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

   return (
      <SectionContainer id="projects" className="bg-surface" innerClassName="flex flex-col gap-16">
         <div className="flex justify-between items-center w-full">
            <div className="flex gap-6 items-center">
               <MdCode className="size-8 text-body" />
               <Typography variant="section">
                  {dict.projects.title}
               </Typography>
            </div>
            
            {/* Segmented Control Corregido */}
            <div className="bg-page/50 backdrop-blur-sm border border-subtle p-1 rounded-2xl flex relative shadow-sm min-w-[200px]">
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

         <div className="flex flex-col gap-[120px] w-full transition-all duration-500 min-h-[400px]">
            {filteredProjects.map((project, index) => (
               <div 
                  key={project.id} 
                  className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
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

         <div className="flex justify-between items-center w-full mt-16">
            <Typography variant="body" className="font-medium text-slate-500">
               {dict.projects.subtitle}
            </Typography>
            <Button 
               variant="outline" 
               icon={<MdArrowForward className="rotate-[-45deg]" />} 
               className="!rounded-xl"
               onClick={() => setFilter("others")}
            >
               See more projects
            </Button>
         </div>
      </SectionContainer>
   );
};

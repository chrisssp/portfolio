"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdCode } from "react-icons/md";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { AnimatedSection } from "../atoms/AnimatedSection";
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
   const pendingProjectIdRef = useRef<string | null>(null);

   const filteredProjects = useMemo(() => {
      if (filter === "featured") {
         return dict.projects.items.filter((p) => p.featured);
      }
      return dict.projects.items.filter((p) => !p.featured);
   }, [filter, dict.projects.items]);

   const queueProjectScroll = useCallback(
      (projectId: string) => {
         pendingProjectIdRef.current = projectId;
         const project = dict.projects.items.find((p) => p.id === projectId);
         if (project) {
            setFilter(project.featured ? "featured" : "others");
         }
      },
      [dict.projects.items],
   );

   const scrollToProject = useCallback(
      (projectId: string, behavior: ScrollBehavior) => {
         const el = document.getElementById(`project-${projectId}`);
         if (el) {
            el.scrollIntoView({ behavior, block: "start" });
            return true;
         }
         return false;
      },
      [],
   );

   // Escuchar evento para cambiar de pestaña y hacer scroll
   useEffect(() => {
      const handleSwitch = (e: Event) => {
         const customEvent = e as CustomEvent<{ projectId: string }>;
         const { projectId } = customEvent.detail;
         if (projectId) {
            queueProjectScroll(projectId);
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
   }, [queueProjectScroll]);

   // Detectar hash (navegacion nativa back/forward) y seleccionar el tab correcto
   useEffect(() => {
      if (typeof window === "undefined") return;

      const handleHash = () => {
         const hash = window.location.hash;
         if (!hash) return;

         if (hash.startsWith("#project-")) {
            const projectId = hash.replace("#project-", "");
            if (projectId) {
               queueProjectScroll(projectId);
            }
         }
      };

      handleHash();
      window.addEventListener("hashchange", handleHash);
      return () => window.removeEventListener("hashchange", handleHash);
   }, [queueProjectScroll]);

   // Ejecutar el scroll cuando el filtro ya renderizo la lista correcta
   useEffect(() => {
      const projectId = pendingProjectIdRef.current;
      if (!projectId) return;
      if (filteredProjects.length === 0) return;

      pendingProjectIdRef.current = null;

      requestAnimationFrame(() => {
         requestAnimationFrame(() => {
            const didScroll = scrollToProject(projectId, "auto");
            if (!didScroll) {
               document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "auto", block: "start" });
            }
         });
      });
   }, [filteredProjects, scrollToProject]);

   const FilterPills = ({ className = "" }: { className?: string }) => (
      <div
         className={`bg-page/50 backdrop-blur-sm border border-subtle p-1 sm:p-1.5 rounded-xl sm:rounded-2xl grid grid-cols-2 relative shadow-sm w-full lg:w-auto ${className}`}
      >
         <div
            className={`absolute top-1 sm:top-1.5 bottom-1 sm:bottom-1.5 bg-primary rounded-lg sm:rounded-xl transition-all duration-300 ease-in-out ${
               filter === "featured"
                  ? "left-1 sm:left-1.5 w-[calc(50%-4px)] sm:w-[calc(50%-6px)]"
                  : "left-[calc(50%+2px)] sm:left-[calc(50%+3px)] w-[calc(50%-4px)] sm:w-[calc(50%-6px)]"
            }`}
         />
         <button
            type="button"
            onClick={() => {
               setFilter("featured");
               if (window.scrollY > 500) {
                  document
                     .getElementById("projects")
                     ?.scrollIntoView({ behavior: "smooth" });
               }
            }}
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
            onClick={() => {
               setFilter("others");
               if (window.scrollY > 500) {
                  document
                     .getElementById("projects")
                     ?.scrollIntoView({ behavior: "smooth" });
               }
            }}
            className={`relative z-10 flex-1 px-4 sm:px-6 py-2 sm:py-2.5 font-bold text-sm sm:text-base transition-all duration-300 text-center whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-95 rounded-lg sm:rounded-xl ${
               filter === "others"
                  ? "text-primary-contrast"
                  : "text-body hover:text-primary hover:bg-surface/50"
            }`}
         >
            {dict.projects.actions.tab_all}
         </button>
      </div>
   );

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

            {/* Segmented Control Top */}
            <FilterPills />
         </div>

         <div className="flex flex-col gap-16 lg:gap-30 w-full transition-all duration-500 min-h-100">
            {filteredProjects.map((project, index) => (
               <AnimatedSection
                  key={project.id}
                  variant="fade-up"
                  delay={index * 80}
                  threshold={0.05}
                  id={`project-${project.id}`}
                  className="scroll-mt-header"
                  as="div"
               >
                  <ProjectCard
                     project={project}
                     actions={dict.projects.actions}
                     reverse={index % 2 !== 0}
                     lang={lang}
                  />
               </AnimatedSection>
            ))}
         </div>

         {/* Segmented Control Bottom & Footer */}
         <div className="flex flex-col gap-8 mt-8 lg:mt-16">
            <div className="flex justify-center lg:justify-end">
               <FilterPills className="max-w-md" />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-6 pt-8 border-t border-subtle/30">
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
         </div>
      </SectionContainer>
   );
};

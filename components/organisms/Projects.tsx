"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdCode, MdFilterList, MdFilterListOff } from "react-icons/md";
import { useTechFilter } from "@/hooks/useTechFilter";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { AnimatedSection } from "../atoms/AnimatedSection";
import { Button } from "../atoms/Button";
import { SectionContainer } from "../atoms/SectionContainer";
import { Typography } from "../atoms/Typography";
import { ProjectCard } from "../molecules/ProjectCard";
import { TechFilterBar } from "../molecules/TechFilterBar";

interface FilterPillsProps {
   filter: "featured" | "others";
   onFilterChange: (value: "featured" | "others") => void;
   tabFeatured: string;
   tabAll: string;
   className?: string;
}

const FilterPills = ({
   filter,
   onFilterChange,
   tabFeatured,
   tabAll,
   className = "",
}: FilterPillsProps) => {
   const handleChange = (value: "featured" | "others") => {
      onFilterChange(value);
      if (window.scrollY > 500) {
         document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
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
            onClick={() => handleChange("featured")}
            className={`relative z-10 flex-1 px-4 sm:px-6 py-2 sm:py-2.5 font-bold text-sm sm:text-base transition-all duration-300 text-center whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-95 rounded-lg sm:rounded-xl ${
               filter === "featured"
                  ? "text-primary-contrast"
                  : "text-body hover:text-primary hover:bg-surface/50"
            }`}
         >
            {tabFeatured}
         </button>
         <button
            type="button"
            onClick={() => handleChange("others")}
            className={`relative z-10 flex-1 px-4 sm:px-6 py-2 sm:py-2.5 font-bold text-sm sm:text-base transition-all duration-300 text-center whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-95 rounded-lg sm:rounded-xl ${
               filter === "others"
                  ? "text-primary-contrast"
                  : "text-body hover:text-primary hover:bg-surface/50"
            }`}
         >
            {tabAll}
         </button>
      </div>
   );
};

interface ProjectsProps {
   dict: Dictionary;
   lang: Locale;
}

export const Projects = ({ dict, lang }: ProjectsProps) => {
   const [filter, setFilter] = useState<"featured" | "others">("featured");
   const [showFilterBar, setShowFilterBar] = useState(false);
   const pendingProjectIdRef = useRef<string | null>(null);

   // Collect all unique technologies from ALL projects
   const allTechs = useMemo(() => {
      const techSet = new Set<string>();
      for (const project of dict.projects.items) {
         for (const tech of project.techStack) {
            techSet.add(tech);
         }
      }
      return Array.from(techSet).sort();
   }, [dict.projects.items]);

   // Tech filter state (URL + localStorage)
   const { selectedTechs, toggleTech, clearTechs, hasActiveFilter } =
      useTechFilter(allTechs);

   const handleToggleTech = useCallback(
      (techId: string) => {
         setShowFilterBar(true);
         toggleTech(techId);
      },
      [toggleTech],
   );

   const handleClearTechs = useCallback(() => {
      clearTechs();
      setShowFilterBar(false);
   }, [clearTechs]);

   // Filter logic: tech filter takes priority, otherwise use tabs
   const filteredProjects = useMemo(() => {
      if (hasActiveFilter) {
         return dict.projects.items.filter((p) =>
            p.techStack.some((t) => selectedTechs.includes(t)),
         );
      }

      // Normal tab behavior
      return filter === "featured"
         ? dict.projects.items.filter((p) => p.featured)
         : dict.projects.items.filter((p) => !p.featured);
   }, [filter, dict.projects.items, selectedTechs, hasActiveFilter]);

   const queueProjectScroll = useCallback(
      (projectId: string) => {
         pendingProjectIdRef.current = projectId;
         if (!hasActiveFilter) {
            const project = dict.projects.items.find((p) => p.id === projectId);
            if (project) {
               setFilter(project.featured ? "featured" : "others");
            }
         }
      },
      [dict.projects.items, hasActiveFilter],
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

   // Moved FilterPills outside component - see module-level definition below

   return (
      <SectionContainer
         id="projects"
         className="bg-surface"
         innerClassName="flex flex-col gap-8 lg:gap-16"
      >
         {/* Header */}
         <div className="flex flex-col w-full gap-6">
            {/* Title Row */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-6">
               <div className="flex gap-4 md:gap-6 items-center">
                  <MdCode className="size-8 text-body" />
                  <Typography variant="section">
                     {dict.projects.title}
                  </Typography>
               </div>

               {/* Controls — toggle button + segmented control */}
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full lg:w-auto lg:ml-auto">
                  <Button
                     variant={showFilterBar ? "primary" : "outline"}
                     icon={
                        showFilterBar ? <MdFilterListOff /> : <MdFilterList />
                     }
                     onClick={() => setShowFilterBar((prev) => !prev)}
                     ariaLabel={dict.projects.actions.filter_tech}
                  >
                     {dict.projects.actions.filter_tech}
                  </Button>

                  {!hasActiveFilter && (
                     <FilterPills
                        filter={filter}
                        onFilterChange={setFilter}
                        tabFeatured={dict.projects.actions.tab_featured}
                        tabAll={dict.projects.actions.tab_all}
                     />
                  )}
               </div>
            </div>

            {/* Tech Filter Bar — toggled */}
            {showFilterBar && (
               <TechFilterBar
                  allTechs={allTechs}
                  selectedTechs={selectedTechs}
                  onToggle={handleToggleTech}
                  onClear={handleClearTechs}
                  hasActiveFilter={hasActiveFilter}
                  label={dict.projects.actions.filter_tech}
                  clearLabel={dict.projects.actions.clear_filters}
               />
            )}
         </div>

         {/* Project List */}
         <div className="flex flex-col gap-16 lg:gap-30 w-full transition-all duration-500 min-h-100">
            {filteredProjects.length === 0 && hasActiveFilter ? (
               <div className="flex flex-col items-center justify-center py-16 gap-6">
                  <MdFilterList className="size-12 text-subtle" />
                  <Typography
                     variant="body"
                     className="text-body/70 text-center"
                  >
                     {dict.projects.actions.no_projects_match}
                  </Typography>
                  <Button variant="outline" onClick={handleClearTechs}>
                     {dict.projects.actions.clear_filters}
                  </Button>
               </div>
            ) : (
               filteredProjects.map((project, index) => (
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
                        selectedTechs={selectedTechs}
                        onTechClick={handleToggleTech}
                     />
                  </AnimatedSection>
               ))
            )}
         </div>

         {/* Bottom Section: Filter Bar (conditional) + Footer */}
         <div className="flex flex-col gap-8 mt-8 lg:mt-16">
            {/* Tech Filter Bar Bottom — only when >3 projects visible */}
            {showFilterBar && filteredProjects.length > 3 && (
               <div className="flex justify-center lg:justify-end">
                  <TechFilterBar
                     allTechs={allTechs}
                     selectedTechs={selectedTechs}
                     onToggle={handleToggleTech}
                     onClear={handleClearTechs}
                     hasActiveFilter={hasActiveFilter}
                     label={dict.projects.actions.filter_tech}
                     clearLabel={dict.projects.actions.clear_filters}
                  />
               </div>
            )}

            {/* Segmented Control Bottom — only when tech filter is NOT active */}
            {!hasActiveFilter && (
               <div className="flex justify-center lg:justify-end">
                  <FilterPills
                     filter={filter}
                     onFilterChange={setFilter}
                     tabFeatured={dict.projects.actions.tab_featured}
                     tabAll={dict.projects.actions.tab_all}
                     className="max-w-md"
                  />
               </div>
            )}

            {/* Footer */}
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

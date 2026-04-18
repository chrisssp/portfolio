import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { ProjectCard } from "../molecules/ProjectCard";
import { Button } from "../atoms/Button";
import { MdCode, MdArrowForward } from "react-icons/md";

interface ProjectsProps {
   dict: Dictionary;
}

export const Projects = ({ dict }: ProjectsProps) => {
   return (
      <section id="projects" className="bg-surface flex flex-col gap-16 px-20 py-[64px] w-full items-center">
         <div className="flex justify-between items-center w-full max-w-[1280px]">
            <div className="flex gap-6 items-center">
               <MdCode className="size-8 text-slate-700 dark:text-white-off" />
               <Typography variant="section">
                  {dict.projects.title}
               </Typography>
            </div>
            
            {/* Segmented Control Placeholder */}
            <div className="bg-page border border-subtle p-2 rounded-2xl flex gap-2">
               <Button variant="primary" className="px-6 py-3">Featured</Button>
               <Button variant="outline" className="px-6 py-3 border-none">All projects</Button>
            </div>
         </div>

         <div className="flex flex-col gap-[120px] w-full max-w-[1280px]">
            {dict.projects.items.map((project, index) => (
               <ProjectCard 
                  key={index} 
                  project={project} 
                  actions={dict.projects.actions}
                  reverse={index % 2 !== 0}
               />
            ))}
         </div>

         <div className="flex justify-between items-center w-full max-w-[1280px] mt-16">
            <Typography variant="body" className="font-medium text-slate-500">
               {dict.projects.subtitle}
            </Typography>
            <Button variant="outline" icon={<MdArrowForward className="rotate-[-45deg]" />}>
               See more projects
            </Button>
         </div>
      </section>
   );
};

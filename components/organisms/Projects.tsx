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
      <section id="projects" className="bg-surface relative flex flex-col items-center w-full">
         <div className="absolute inset-0 bg-grid-pattern pointer-events-none mask-grid-fade" />

         <div className="flex flex-col gap-16 px-20 py-[120px] w-full max-w-[1440px] relative z-10">
            <div className="flex justify-between items-center w-full">
               <div className="flex gap-6 items-center">
                  <MdCode className="size-8 text-body" />
                  <Typography variant="section">
                     {dict.projects.title}
                  </Typography>
               </div>
               
               {/* Segmented Control */}
               <div className="bg-page/50 backdrop-blur-sm border border-subtle p-1.5 rounded-2xl flex gap-1 shadow-sm">
                  <Button variant="primary" className="px-6 py-2.5 !rounded-xl text-[14px]">Featured</Button>
                  <Button variant="outline" className="px-6 py-2.5 !rounded-xl text-[14px] border-none hover:bg-surface">All projects</Button>
               </div>
            </div>

            <div className="flex flex-col gap-[120px] w-full">
               {dict.projects.items.map((project, index) => (
                  <ProjectCard 
                     key={index} 
                     project={project} 
                     actions={dict.projects.actions}
                     reverse={index % 2 !== 0}
                  />
               ))}
            </div>

            <div className="flex justify-between items-center w-full mt-16">
               <Typography variant="body" className="font-medium text-slate-500">
                  {dict.projects.subtitle}
               </Typography>
               <Button variant="outline" icon={<MdArrowForward className="rotate-[-45deg]" />} className="!rounded-xl">
                  See more projects
               </Button>
            </div>
         </div>
      </section>
   );
};

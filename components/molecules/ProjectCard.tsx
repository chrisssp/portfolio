import Image from "next/image";
import { ProjectItem, Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { TECHNOLOGIES } from "@/config/technologies";
import { MdVisibility, MdPlayArrow, MdCode } from "react-icons/md";

interface ProjectCardProps {
   project: ProjectItem;
   actions: Dictionary["projects"]["actions"];
   reverse?: boolean;
}

export const ProjectCard = ({ project, actions, reverse }: ProjectCardProps) => {
   return (
      <div className={`flex gap-16 items-start w-full ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
         {/* Content */}
         <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
               <Typography variant="project">
                  {project.title}
               </Typography>
               <Typography variant="body">
                  {project.description}
               </Typography>
            </div>

            <div className="flex flex-col gap-10">
               {/* Badges */}
               <div className="flex flex-wrap gap-3">
                  {project.techStack.map(techId => (
                     TECHNOLOGIES[techId] && <Badge key={techId} tech={TECHNOLOGIES[techId]} />
                  ))}
               </div>

               {/* Buttons */}
               <div className="flex gap-3">
                  {project.links.map((link, idx) => {
                     const icon = link.type === "video" ? <MdPlayArrow /> : link.type === "github" ? <MdCode /> : <MdVisibility />;
                     const label = link.type === "video" ? actions.view_video : link.type === "github" ? actions.view_code : actions.view_demo;
                     
                     return (
                        <Button key={idx} variant="outline" icon={icon}>
                           {label}
                        </Button>
                     );
                  })}
               </div>
            </div>
         </div>

         {/* Mockup Image */}
         <div className="w-[630px] h-[350px] rounded-2xl border border-subtle relative overflow-hidden bg-page shrink-0 shadow-lg group">
            <Image 
               src={project.imagePath} 
               alt={project.title} 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-500"
               unoptimized
            />
         </div>
      </div>
   );
};

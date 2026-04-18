import Image from "next/image";
import { ProjectItem } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { SectionContainer } from "../atoms/SectionContainer";

interface ProjectDetailHeroProps {
   project: ProjectItem;
}

export const ProjectDetailHero = ({ project }: ProjectDetailHeroProps) => {
   return (
      <SectionContainer className="bg-surface" innerClassName="flex items-center justify-between gap-20">
         <div className="flex flex-col gap-6 max-w-[520px]">
            <div className="flex flex-col gap-2">
               <Typography variant="hero-sub" className="text-body">
                  {project.title}
               </Typography>
               {project.subtitle && (
                  <Typography variant="project" className="text-primary">
                     {project.subtitle}
                  </Typography>
               )}
            </div>
            <Typography variant="body" className="opacity-90">
               {project.fullDescription}
            </Typography>
         </div>

         <div className="relative w-[630px] h-[354px] rounded-2xl border-3 border-subtle overflow-hidden bg-page shrink-0 shadow-2xl">
            <Image 
               src={project.heroImagePath || project.imagePath} 
               alt={project.title} 
               fill
               className="object-cover"
               priority
               unoptimized
            />
         </div>
      </SectionContainer>
   );
};

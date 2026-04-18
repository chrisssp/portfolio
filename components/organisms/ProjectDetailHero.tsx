import Image from "next/image";
import { ProjectItem } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { SectionContainer } from "../atoms/SectionContainer";

interface ProjectDetailHeroProps {
   project: ProjectItem;
}

export const ProjectDetailHero = ({ project }: ProjectDetailHeroProps) => {
   return (
      <SectionContainer className="bg-surface" innerClassName="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-20">
         <div className="flex flex-col gap-6 lg:gap-8 max-w-[760px] text-left">
            <div className="flex flex-col gap-4">
               <Typography variant="hero" className="!text-[32px] md:!text-[48px] lg:!text-[64px]">
                  {project.title}
               </Typography>
               {project.subtitle && (
                  <Typography variant="hero-sub" className="text-primary !text-[20px] md:!text-[28px] lg:!text-[32px]">
                     {project.subtitle}
                  </Typography>
               )}
            </div>
            <Typography variant="body" className="opacity-90 max-w-[600px] text-pretty">
               {project.fullDescription}
            </Typography>
         </div>

         {/* Imagen Mockup - Manteniendo proporciones de Figma */}
         <div className="relative w-full lg:w-[630px] aspect-[630/354] rounded-2xl border-3 border-subtle overflow-hidden bg-page shrink-0 shadow-2xl mt-8 lg:mt-0">
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

import Image from "next/image";
import type { ProjectItem } from "@/i18n/types";
import { SectionContainer } from "../atoms/SectionContainer";
import { Typography } from "../atoms/Typography";

interface ProjectDetailHeroProps {
   project: ProjectItem;
}

export const ProjectDetailHero = ({ project }: ProjectDetailHeroProps) => {
   const videoLink = project.links.find((l) => l.type === "video");

   const getEmbedUrl = (url: string) => {
      let videoId = "";
      if (url.includes("youtu.be/")) {
         videoId = url.split("youtu.be/")[1];
      } else if (url.includes("v=")) {
         videoId = url.split("v=")[1].split("&")[0];
      }
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&rel=0`;
   };

   return (
      <SectionContainer
         className="bg-surface"
         innerClassName="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-20"
      >
         <div className="flex flex-col gap-6 lg:gap-8 max-w-[760px] text-left">
            <div className="flex flex-col gap-4">
               <Typography
                  variant="hero"
                  as="h1"
                  className="!text-[32px] md:!text-[40px] lg:!text-[48px]"
               >
                  {project.title}
               </Typography>
               {project.subtitle && (
                  <Typography
                     variant="hero-sub"
                     className="text-primary !text-[18px] md:!text-[22px] lg:!text-[24px]"
                  >
                     {project.subtitle}
                  </Typography>
               )}
            </div>
            <Typography
               variant="body"
               className="opacity-90 max-w-[600px] text-pretty"
            >
               {project.fullDescription}
            </Typography>
         </div>

         {/* Contenedor Visual (Video o Imagen) */}
         <div className="relative w-full lg:w-[630px] aspect-[630/354] rounded-2xl border-3 border-subtle overflow-hidden bg-page shrink-0 shadow-2xl mt-8 lg:mt-0">
            {videoLink ? (
               <iframe
                  src={getEmbedUrl(videoLink.url)}
                  title={`${project.title} Demo`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
               />
            ) : (
               <Image
                  src={project.heroImagePath || project.imagePath}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 630px"
               />
            )}
         </div>
      </SectionContainer>
   );
};

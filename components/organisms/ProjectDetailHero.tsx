"use client";

import Image from "next/image";
import { useState } from "react";
import { TECHNOLOGIES } from "@/config/technologies";
import type { ProjectItem } from "@/i18n/types";
import { AnimatedSection } from "../atoms/AnimatedSection";
import { SectionContainer } from "../atoms/SectionContainer";
import { Typography } from "../atoms/Typography";

interface ProjectDetailHeroProps {
   project: ProjectItem;
}

export const ProjectDetailHero = ({ project }: ProjectDetailHeroProps) => {
   const videoLink = project.links?.find((l) => l.type === "video");
   const src = project.heroImagePath || project.imagePath;

   // --- Image fallback — placeholder is ALWAYS the base layer ---
   const [errored, setErrored] = useState(false);
   const [loaded, setLoaded] = useState(false);

   const fallbackTech = (project.techStack ?? [])
      .map((t) => TECHNOLOGIES[t])
      .find(Boolean);
   const fallbackColor = fallbackTech?.bgColor ?? "#1e1e2e";
   const fallbackWord =
      project.title.split(/\s+/).length > 1
         ? project.title
              .split(/\s+/)
              .slice(0, 2)
              .map((w) => w.charAt(0).toUpperCase())
              .join("")
         : project.title.slice(0, 2).toUpperCase();

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
         {/* Text — fades in from the right */}
         <AnimatedSection
            variant="fade-right"
            delay={100}
            duration="duration-700"
            className="flex flex-col gap-6 lg:gap-8 max-w-190 text-left"
         >
            <div className="flex flex-col gap-4">
               <Typography variant="project-hero" as="h1">
                  {project.title}
               </Typography>
               {project.subtitle && (
                  <Typography
                     variant="project-hero-sub"
                     className="text-primary"
                  >
                     {project.subtitle}
                  </Typography>
               )}
            </div>
            <Typography
               variant="body"
               className="opacity-90 max-w-150 text-pretty"
            >
               {project.fullDescription}
            </Typography>
         </AnimatedSection>

         {/* Visual (video or image) — fades in from the left with a slight delay */}
         <AnimatedSection
            variant="fade-left"
            delay={250}
            duration="duration-700"
            className="relative w-full lg:w-157.5 aspect-630/354 shrink-0 mt-8 lg:mt-0"
         >
            <div className="relative w-full h-full rounded-2xl border-3 border-subtle overflow-hidden bg-page shadow-2xl">
               {videoLink ? (
                  <iframe
                     src={getEmbedUrl(videoLink.url)}
                     title={`${project.title} Demo`}
                     className="w-full h-full"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                  />
               ) : (
                  <div className="relative size-full">
                     {/* Placeholder — ALWAYS rendered as base layer */}
                     <div
                        className="absolute inset-0"
                        style={{
                           background: `linear-gradient(135deg, ${fallbackColor}, color-mix(in srgb, ${fallbackColor} 60%, #1e1e2e))`,
                        }}
                     >
                        <span
                           aria-hidden="true"
                           className="absolute inset-0 flex items-center justify-center select-none font-bold tracking-tight opacity-30"
                           style={{
                              fontSize: "clamp(3rem, 12vw, 6rem)",
                              lineHeight: 1,
                              color: "#fff",
                           }}
                        >
                           {fallbackWord}
                        </span>
                     </div>

                     {/* Actual image — only rendered if it hasn't errored */}
                     {!errored && (
                        <Image
                           src={src}
                           alt={project.title}
                           fill
                           className={`object-cover transition-opacity duration-500 ${
                              loaded ? "opacity-100" : "opacity-0"
                           }`}
                           priority
                           sizes="(max-width: 1024px) 100vw, 630px"
                           onLoad={() => setLoaded(true)}
                           onError={() => setErrored(true)}
                        />
                     )}
                  </div>
               )}
            </div>
         </AnimatedSection>
      </SectionContainer>
   );
};

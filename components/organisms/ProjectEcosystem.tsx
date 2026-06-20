"use client";

import {
   MdCode,
   MdDescription,
   MdDesignServices,
   MdPlayArrow,
   MdRemoveRedEye,
} from "react-icons/md";
import type { Dictionary, ProjectLink } from "@/i18n/types";
import { AnimatedSection } from "../atoms/AnimatedSection";
import { Button } from "../atoms/Button";
import { SectionContainer } from "../atoms/SectionContainer";
import { Typography } from "../atoms/Typography";
import { FeatureCard } from "../molecules/FeatureCard";

function slugify(text: string): string {
   return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
}

interface ProjectEcosystemProps {
   project: Dictionary["projects"]["items"][0];
   labels: Dictionary["projects"]["sections"];
   actions: Dictionary["projects"]["actions"];
   bg?: string;
}

export const ProjectEcosystem = ({
   project,
   labels,
   actions,
   bg,
}: ProjectEcosystemProps) => {
   if (!project.ecosystem) return null;

   const getActionLabel = (type: ProjectLink["type"]) => {
      switch (type) {
         case "paper":
            return actions.read_paper;
         case "github":
            return actions.view_code;
         case "figma":
            return actions.view_design;
         case "video":
            return actions.view_video;
         case "landing":
            return actions.view_landing;
         case "demo":
         default:
            return actions.view_demo;
      }
   };

   return (
      <SectionContainer
         id="ecosystem"
         className={bg ?? "bg-surface"}
         innerClassName="flex flex-col gap-16"
      >
         {/* Section header */}
         <AnimatedSection variant="fade-up" threshold={0.2}>
            <div className="flex gap-6 items-center">
               <MdCode className="size-8 text-body" />
               <Typography variant="section">{labels.ecosystem}</Typography>
            </div>
         </AnimatedSection>

         {/* Ecosystem items — each reveals on scroll with a stagger */}
         <div className="flex flex-col gap-16 lg:gap-30 w-full transition-all duration-500">
            {project.ecosystem.items.map((item, index) => {
               const resolvedLinks = item.links ?? [];
               const itemActions = resolvedLinks.length ? (
                  <div className="flex flex-wrap gap-3">
                     {resolvedLinks.map((link) => (
                        <a
                           key={`${link.type}-${link.url}`}
                           href={link.url}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Button
                              variant="outline"
                              icon={
                                 link.type === "paper" ? (
                                    <MdDescription />
                                 ) : link.type === "demo" ||
                                   link.type === "landing" ? (
                                    <MdRemoveRedEye />
                                 ) : link.type === "video" ? (
                                    <MdPlayArrow />
                                 ) : link.type === "figma" ? (
                                    <MdDesignServices />
                                 ) : (
                                    <MdCode />
                                 )
                              }
                              className="w-fit"
                           >
                              {getActionLabel(link.type)}
                           </Button>
                        </a>
                     ))}
                  </div>
               ) : undefined;

               return (
                  <AnimatedSection
                     id={`ecosystem-${slugify(item.title)}`}
                     key={item.title}
                     variant="fade-up"
                     delay={index * 80}
                     threshold={0.05}
                  >
                     <FeatureCard
                        title={item.title}
                        description={item.description}
                        imagePath={item.imagePath}
                        techStack={item.techStack}
                        reverse={index % 2 !== 0}
                        actions={itemActions}
                        imageClassName="bg-[#2196f3]"
                     />
                  </AnimatedSection>
               );
            })}
         </div>
      </SectionContainer>
   );
};

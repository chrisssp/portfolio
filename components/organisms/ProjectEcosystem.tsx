"use client";

import { MdCode, MdDescription } from "react-icons/md";
import type { Dictionary } from "@/i18n/types";
import { AnimatedSection } from "../atoms/AnimatedSection";
import { Button } from "../atoms/Button";
import { SectionContainer } from "../atoms/SectionContainer";
import { Typography } from "../atoms/Typography";
import { FeatureCard } from "../molecules/FeatureCard";

interface ProjectEcosystemProps {
   project: Dictionary["projects"]["items"][0];
   labels: Dictionary["projects"]["sections"];
   actions: Dictionary["projects"]["actions"];
}

export const ProjectEcosystem = ({
   project,
   labels,
   actions,
}: ProjectEcosystemProps) => {
   if (!project.ecosystem) return null;

   return (
      <SectionContainer
         className="bg-surface"
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
               const itemActions = item.link ? (
                  <a
                     href={item.link.url}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Button
                        variant="outline"
                        icon={
                           item.link.type === "paper" ? (
                              <MdDescription />
                           ) : (
                              <MdCode />
                           )
                        }
                        className="w-fit"
                     >
                        {item.link.type === "paper"
                           ? actions.read_paper
                           : item.link.type === "github"
                             ? actions.view_code
                             : actions.view_demo}
                     </Button>
                  </a>
               ) : undefined;

               return (
                  <AnimatedSection
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

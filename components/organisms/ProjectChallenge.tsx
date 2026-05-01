"use client";

import { MdFilterHdr } from "react-icons/md";
import type { Dictionary } from "@/i18n/types";
import { AnimatedSection } from "../atoms/AnimatedSection";
import { SectionContainer } from "../atoms/SectionContainer";
import { Typography } from "../atoms/Typography";

interface ProjectChallengeProps {
   project: Dictionary["projects"]["items"][0];
   labels: Dictionary["projects"]["sections"];
}

export const ProjectChallenge = ({
   project,
   labels,
}: ProjectChallengeProps) => {
   if (!project.challenge) return null;

   return (
      <SectionContainer
         className="bg-page"
         innerClassName="flex flex-col gap-12 md:gap-16"
      >
         {/* Section header */}
         <AnimatedSection variant="fade-up" threshold={0.2}>
            <div className="flex gap-4 md:gap-6 items-center">
               <MdFilterHdr className="size-8 text-body" />
               <Typography variant="section">{labels.challenge}</Typography>
            </div>
         </AnimatedSection>

         {/* Challenge & Solution columns — converge from opposite sides */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <AnimatedSection variant="fade-right" delay={100} duration="duration-700">
               <div className="flex flex-col gap-4 md:gap-6">
                  <Typography variant="project">
                     {labels.challengeTitle}
                  </Typography>
                  <Typography variant="body" className="opacity-90">
                     {project.challenge.description}
                  </Typography>
               </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-left" delay={200} duration="duration-700">
               <div className="flex flex-col gap-4 md:gap-6">
                  <Typography variant="project">{labels.solutionTitle}</Typography>
                  <Typography variant="body" className="opacity-90">
                     {project.challenge.solution}
                  </Typography>
               </div>
            </AnimatedSection>
         </div>
      </SectionContainer>
   );
};

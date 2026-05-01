"use client";

import { MdWork } from "react-icons/md";
import type { Dictionary } from "@/i18n/types";
import { AnimatedSection } from "../atoms/AnimatedSection";
import { SectionContainer } from "../atoms/SectionContainer";
import { Typography } from "../atoms/Typography";
import { TimelineItem } from "../molecules/TimelineItem";

interface ExperienceProps {
   dict: Dictionary;
}

export const Experience = ({ dict }: ExperienceProps) => {
   return (
      <SectionContainer
         id="experience"
         className="bg-page"
         innerClassName="flex flex-col gap-8 md:gap-16"
      >
         {/* Section header */}
         <AnimatedSection variant="fade-up" threshold={0.2}>
            <div className="flex gap-4 md:gap-6 items-center">
               <MdWork className="size-8 text-body" />
               <Typography variant="section">{dict.experience.title}</Typography>
            </div>
         </AnimatedSection>

         {/* Timeline — each item reveals independently */}
         <div className="flex flex-col w-full">
            {dict.experience.items.map((item, index) => (
               <AnimatedSection
                  key={`${item.role}-${item.company}-${item.date}`}
                  variant="fade-up"
                  delay={index * 80}
                  threshold={0.05}
               >
                  <TimelineItem
                     item={item}
                     index={index}
                     isLast={index === dict.experience.items.length - 1}
                  />
               </AnimatedSection>
            ))}
         </div>
      </SectionContainer>
   );
};

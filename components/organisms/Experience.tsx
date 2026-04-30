"use client";

import { MdWork } from "react-icons/md";
import type { Dictionary } from "@/i18n/types";
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
         <div className="flex gap-4 md:gap-6 items-center">
            <MdWork className="size-8 text-body" />
            <Typography variant="section">{dict.experience.title}</Typography>
         </div>

         {/* Contenedor del Timeline sin gaps internos para unión perfecta de líneas */}
         <div className="flex flex-col w-full">
            {dict.experience.items.map((item, index) => (
               <TimelineItem
                  key={`${item.role}-${item.company}-${item.date}`}
                  item={item}
                  index={index}
                  isLast={index === dict.experience.items.length - 1}
               />
            ))}
         </div>
      </SectionContainer>
   );
};

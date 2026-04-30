"use client";

import { MdApps, MdDescription, MdLocationOn, MdPublic } from "react-icons/md";
import type { ExperienceItem } from "@/i18n/types";
import { Button } from "../atoms/Button";
import { Tag } from "../atoms/Tag";
import { Typography } from "../atoms/Typography";

interface TimelineItemProps {
   item: ExperienceItem;
   index: number;
   isLast?: boolean;
}

export const TimelineItem = ({
   item,
   index,
   isLast = false,
}: TimelineItemProps) => {
   const isEven = index % 2 === 0;

   const handleProjectClick = () => {
      if (item.projectId) {
         const event = new CustomEvent("switch-project-tab", {
            detail: { projectId: item.projectId },
         });
         window.dispatchEvent(event);
      }
   };

   return (
      <div className="flex w-full relative">
         {/* Center Line Dot */}
         <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 flex flex-col items-center h-full z-20">
            <div className="size-3 xs:size-4 rounded-full border-2 border-primary bg-page shrink-0" />
            {!isLast && <div className="w-0.5 h-full bg-subtle" />}
         </div>

         {/* Content Container */}
         <div
            className={`flex w-full items-start pl-8 pr-2 xs:pr-4 md:px-0 pb-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
         >
            {/* Content Side */}
            <div
               className={`flex-1 flex flex-col gap-3 min-w-0 ${isEven ? "md:items-end md:text-right md:pr-12" : "md:items-start md:text-left md:pl-12"}`}
            >
               <div className="flex flex-col gap-2">
                  <div
                     className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}
                  >
                     <Typography
                        variant="project"
                        as="h4"
                        className="text-lg md:text-xl leading-tight text-balance"
                     >
                        {item.role}
                     </Typography>
                  </div>

                  <div
                     className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}
                  >
                     <Typography
                        variant="body"
                        className="font-bold text-base md:text-lg"
                     >
                        {item.company}
                     </Typography>
                     <div className="flex flex-wrap gap-2">
                        <Tag icon={<MdLocationOn className="size-3" />}>
                           {item.location}
                        </Tag>
                        {item.remote && (
                           <Tag icon={<MdPublic className="size-3" />}>
                              {item.remote}
                           </Tag>
                        )}
                        {item.product && (
                           <button
                              type="button"
                              onClick={handleProjectClick}
                              className="cursor-pointer active:scale-95 transition-transform"
                           >
                              <Tag
                                 variant="primary"
                                 icon={<MdApps className="size-3" />}
                                 className="hover:bg-primary/80"
                              >
                                 {item.product}
                              </Tag>
                           </button>
                        )}
                     </div>
                  </div>
               </div>

               <Typography
                  variant="small"
                  className="text-slate-600 dark:text-slate-400 font-medium text-sm"
               >
                  {item.date}
               </Typography>
               <div
                  className={`max-w-full md:max-w-130 ${isEven ? "md:ml-auto" : "md:mr-auto"}`}
               >
                  <Typography
                     variant="body"
                     className="opacity-90 text-sm md:text-base leading-relaxed text-pretty"
                  >
                     {item.description}
                  </Typography>
               </div>
               {item.link && (
                  <a
                     href={item.link.url}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Button
                        variant="outline"
                        icon={<MdDescription />}
                        className="mt-2 text-xs md:text-sm px-4 py-2 w-fit"
                     >
                        {item.link.label}
                     </Button>
                  </a>
               )}
            </div>

            {/* Empty Side (Only Desktop/Large Tablet) */}
            <div className="hidden md:flex flex-1" />
         </div>
      </div>
   );
};

"use client";

import { ExperienceItem } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { Tag } from "../atoms/Tag";
import { MdDescription, MdLocationOn, MdPublic, MdApps } from "react-icons/md";

interface TimelineItemProps {
   item: ExperienceItem;
   index: number;
   isLast?: boolean;
}

export const TimelineItem = ({ item, index, isLast = false }: TimelineItemProps) => {
   const isEven = index % 2 === 0;

   const handleProjectClick = () => {
      if (item.projectId) {
         const event = new CustomEvent("switch-project-tab", {
            detail: { projectId: item.projectId }
         });
         window.dispatchEvent(event);
      }
   };

   return (
      <div className="flex w-full relative">
         {/* Center Line Dot */}
         <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 flex flex-col items-center h-full z-20">
            <div className="size-3 xs:size-4 rounded-full border-2 border-primary bg-page shrink-0" />
            {!isLast && <div className="w-[2px] h-full bg-subtle" />}
         </div>

         {/* Content Container */}
         <div className={`flex w-full items-start pl-8 md:pl-0 pb-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
            {/* Content Side */}
            <div className={`flex-1 flex flex-col gap-3 ${isEven ? "md:items-end md:text-right md:pr-12" : "md:items-start md:text-left md:pl-12"}`}>
               <div className="flex flex-col gap-2">
                  <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                     <Typography variant="project" as="h4" className="!text-[16px] xs:!text-[18px] md:!text-[20px] leading-tight">
                        {item.role}
                     </Typography>
                  </div>
                  
                  <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                     <Typography variant="body" className="font-bold !text-[13px] xs:!text-[14px] sm:!text-[15px] md:!text-[16px]">
                        {item.company}
                     </Typography>
                     <div className="flex flex-wrap gap-2">
                        <Tag icon={<MdLocationOn className="size-3" />}>{item.location}</Tag>
                        {item.remote && (
                           <Tag icon={<MdPublic className="size-3" />}>{item.remote}</Tag>
                        )}
                        {item.product && (
                           <button onClick={handleProjectClick} className="cursor-pointer active:scale-95 transition-transform">
                              <Tag variant="primary" icon={<MdApps className="size-3" />} className="hover:bg-primary/80">
                                 {item.product}
                              </Tag>
                           </button>
                        )}
                     </div>
                  </div>
               </div>

               <Typography variant="small" className="text-slate-500 font-medium !text-[11px] xs:!text-[12px] sm:!text-[13px] md:!text-[14px]">
                  {item.date}
               </Typography>
               <div className={`max-w-full md:max-w-[520px] ${isEven ? "md:ml-auto" : "md:mr-auto"}`}>
                  <Typography variant="body" className="opacity-90 !text-[13px] xs:!text-[14px] sm:!text-[15px] md:!text-[16px] leading-relaxed text-pretty">
                     {item.description}
                  </Typography>
               </div>
               {item.link && (
                  <a href={item.link.url} target="_blank" rel="noopener noreferrer">
                     <Button variant="outline" icon={<MdDescription />} className="mt-2 !text-[11px] xs:!text-[12px] md:!text-[14px] !px-3 xs:!px-4 !py-1.5 xs:!py-2 w-fit">
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

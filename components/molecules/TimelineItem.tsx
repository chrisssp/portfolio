import { ExperienceItem } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { MdDescription } from "react-icons/md";

interface TimelineItemProps {
   item: ExperienceItem;
   index: number;
}

export const TimelineItem = ({ item, index }: TimelineItemProps) => {
   const isEven = index % 2 === 0;

   return (
      <div className="flex w-full relative min-h-[160px]">
         {/* Center Line Dot */}
         <div className="absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center h-full">
            <div className="size-4 rounded-full border-2 border-primary bg-page z-10" />
            <div className="w-[2px] flex-1 bg-subtle" />
         </div>

         {/* Content Container */}
         <div className={`flex w-full items-start ${isEven ? "flex-row" : "flex-row-reverse"}`}>
            {/* Content Side */}
            <div className={`flex-1 flex flex-col gap-3 ${isEven ? "items-end text-right pr-12" : "items-start text-left pl-12"}`}>
               <div className="flex flex-col gap-1">
                  <Typography variant="project" as="h4" className="text-[18px]">
                     {item.role}
                  </Typography>
                  <Typography variant="body" className="font-normal">
                     {item.company}
                  </Typography>
               </div>
               <Typography variant="small" className="text-slate-500 font-medium">
                  {item.date}
               </Typography>
               <div className={`max-w-[520px] ${isEven ? "ml-auto" : "mr-auto"}`}>
                  <Typography variant="body" className="opacity-90">
                     {item.description}
                  </Typography>
               </div>
               {item.link && (
                  <Button variant="outline" icon={<MdDescription />} className="mt-2 text-[14px] px-4 py-2">
                     {item.link.label}
                  </Button>
               )}
            </div>

            {/* Empty Side */}
            <div className="flex-1" />
         </div>
      </div>
   );
};

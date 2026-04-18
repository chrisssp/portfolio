import { ExperienceItem } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { MdDescription } from "react-icons/md";

interface TimelineItemProps {
   item: ExperienceItem;
   isLast?: boolean;
}

export const TimelineItem = ({ item, isLast }: TimelineItemProps) => {
   return (
      <div className="flex gap-8 w-full group">
         {/* Left Side: Role & Company (Desktop) */}
         <div className="flex-1 flex flex-col items-end text-right gap-3">
            <div className="flex flex-col gap-1">
               <Typography variant="project" as="h4" className="text-[18px]">
                  {item.role}
               </Typography>
               <Typography variant="body" className="font-normal text-slate-700 dark:text-white-off">
                  {item.company}
               </Typography>
            </div>
            <Typography variant="small" className="text-slate-500">
               {item.date}
            </Typography>
            <div className="max-w-[520px]">
               <Typography variant="body" className="text-slate-700 dark:text-white-off opacity-90">
                  {item.description}
               </Typography>
            </div>
            {item.link && (
               <Button variant="outline" icon={<MdDescription />} className="mt-2 text-[14px] px-4 py-2">
                  {item.link.label}
               </Button>
            )}
         </div>

         {/* Center: Line and Dot */}
         <div className="flex flex-col items-center">
            <div className="size-4 rounded-full border-2 border-primary bg-page z-10" />
            {!isLast && <div className="w-[2px] flex-1 bg-subtle" />}
         </div>

         {/* Right Side: Spacer for desktop alternating feel */}
         <div className="flex-1 h-12" />
      </div>
   );
};

import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { TimelineItem } from "../molecules/TimelineItem";
import { MdWork } from "react-icons/md";

interface ExperienceProps {
   dict: Dictionary;
}

export const Experience = ({ dict }: ExperienceProps) => {
   return (
      <section id="experience" className="bg-page flex flex-col gap-16 px-20 py-[64px] w-full items-center">
         <div className="flex gap-6 items-center w-full max-w-[1280px]">
            <MdWork className="size-8 text-slate-700 dark:text-white-off" />
            <Typography variant="section">
               {dict.experience.title}
            </Typography>
         </div>

         <div className="flex flex-col gap-8 w-full max-w-[1280px]">
            {dict.experience.items.map((item, index) => (
               <TimelineItem 
                  key={index} 
                  item={item} 
                  isLast={index === dict.experience.items.length - 1} 
               />
            ))}
         </div>
      </section>
   );
};

import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { TimelineItem } from "../molecules/TimelineItem";
import { MdWork } from "react-icons/md";

interface ExperienceProps {
   dict: Dictionary;
}

export const Experience = ({ dict }: ExperienceProps) => {
   return (
      <section id="experience" className="bg-page relative flex flex-col items-center w-full">
         <div className="absolute inset-0 bg-grid-pattern pointer-events-none mask-grid-fade" />
         
         <div className="flex flex-col gap-16 px-20 py-[120px] w-full max-w-[1440px] relative z-10">
            <div className="flex gap-6 items-center">
               <MdWork className="size-8 text-body" />
               <Typography variant="section">
                  {dict.experience.title}
               </Typography>
            </div>

            <div className="flex flex-col w-full">
               {dict.experience.items.map((item, index) => (
                  <TimelineItem 
                     key={index} 
                     item={item} 
                     index={index}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

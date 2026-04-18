import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { TimelineItem } from "../molecules/TimelineItem";
import { MdWork } from "react-icons/md";
import { SectionContainer } from "../atoms/SectionContainer";

interface ExperienceProps {
   dict: Dictionary;
}

export const Experience = ({ dict }: ExperienceProps) => {
   return (
      <SectionContainer id="experience" className="bg-page" innerClassName="flex flex-col gap-16">
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
      </SectionContainer>
   );
};

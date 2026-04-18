import Image from "next/image";
import { ReactNode } from "react";
import { Typography } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";
import { TECHNOLOGIES } from "@/config/technologies";

interface FeatureCardProps {
   title: string;
   description: string;
   imagePath: string;
   techStack: string[];
   reverse?: boolean;
   actions?: ReactNode;
   imageClassName?: string;
}

export const FeatureCard = ({ 
   title, 
   description, 
   imagePath, 
   techStack, 
   reverse, 
   actions,
   imageClassName = "bg-page"
}: FeatureCardProps) => {
   return (
      <div className={`flex gap-16 items-start w-full ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
         {/* Content Side */}
         <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
               <Typography variant="project">
                  {title}
               </Typography>
               <Typography variant="body" className="opacity-90">
                  {description}
               </Typography>
            </div>

            <div className="flex flex-col gap-10">
               {/* Badges */}
               <div className="flex flex-wrap gap-3">
                  {techStack.map(techId => (
                     TECHNOLOGIES[techId] && <Badge key={techId} tech={TECHNOLOGIES[techId]} />
                  ))}
               </div>

               {/* Custom Actions (Buttons) */}
               {actions && (
                  <div className="flex gap-3">
                     {actions}
                  </div>
               )}
            </div>
         </div>

         {/* Image Side */}
         <div className={`w-[630px] h-[350px] rounded-2xl border border-subtle relative overflow-hidden shrink-0 shadow-lg group ${imageClassName}`}>
            <Image 
               src={imagePath} 
               alt={title} 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700"
               unoptimized
            />
         </div>
      </div>
   );
};

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
      <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
         {/* Content Side */}
         <div className="flex-1 flex flex-col gap-6 md:gap-8 w-full lg:max-w-[600px]">
            <div className="flex flex-col gap-3 md:gap-4">
               <Typography variant="project">
                  {title}
               </Typography>
               <Typography variant="body" className="opacity-90 text-pretty">
                  {description}
               </Typography>
            </div>

            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
               {/* Badges */}
               <div className="flex flex-wrap gap-2 md:gap-3">
                  {techStack.map(techId => (
                     TECHNOLOGIES[techId] && <Badge key={techId} tech={TECHNOLOGIES[techId]} />
                  ))}
               </div>

               {/* Custom Actions (Buttons) */}
               {actions && (
                  <div className="flex flex-wrap gap-3">
                     {actions}
                  </div>
               )}
            </div>
         </div>

         {/* Image Side - Volvemos a LG para restaurar la vista normal */}
         <div className={`w-full lg:w-[630px] aspect-[630/350] rounded-2xl border border-subtle relative overflow-hidden shrink-0 shadow-lg group ${imageClassName}`}>
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

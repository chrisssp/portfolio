import type { TechConfig } from "@/config/technologies";

interface BadgeProps {
   tech: TechConfig;
}

export const Badge = ({ tech }: BadgeProps) => {
   const Icon = tech.icon;

   return (
      <div
         className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 px-2 sm:px-2.5 md:px-3.5 py-0.5 sm:py-1 md:py-1.5 rounded-full shrink-0 transition-all duration-300 hover:scale-[1.03] hover:brightness-105 hover:shadow-sm cursor-default select-none border border-transparent hover:border-white-off/20"
         style={{ backgroundColor: tech.bgColor }}
      >
         <Icon className="size-3 sm:size-3.5 md:size-4 text-white-off" />
         <span className="font-sans font-medium text-xs md:text-sm text-white-off whitespace-nowrap leading-none mt-px">
            {tech.name}
         </span>
      </div>
   );
};

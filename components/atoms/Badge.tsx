import type { TechConfig } from "@/config/technologies";

interface BadgeProps {
   tech: TechConfig;
}

export const Badge = ({ tech }: BadgeProps) => {
   const Icon = tech.icon;

   return (
      <div
         className="flex items-center gap-2 px-[10px] py-[4px] rounded-[999px] shrink-0 transition-all duration-300 hover:scale-110 hover:brightness-110 hover:shadow-sm cursor-default select-none border border-transparent hover:border-white-off/20"
         style={{ backgroundColor: tech.bgColor }}
      >
         <Icon className="size-[14px] text-white-off" />
         <span className="font-sans font-medium text-[12px] text-white-off whitespace-nowrap">
            {tech.name}
         </span>
      </div>
   );
};

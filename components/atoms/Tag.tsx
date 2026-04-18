import { ReactNode } from "react";

interface TagProps {
   children: ReactNode;
   variant?: "primary" | "secondary" | "outline";
   icon?: ReactNode;
   className?: string;
}

export const Tag = ({ 
   children, 
   variant = "secondary", 
   icon,
   className = "" 
}: TagProps) => {
   const variants = {
      primary: "bg-primary text-primary-contrast border-transparent",
      secondary: "bg-surface text-body border-subtle",
      outline: "bg-transparent text-primary border-primary/30",
   };

   return (
      <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg border text-[12px] font-bold transition-all ${variants[variant]} ${className}`}>
         {icon && <span className="shrink-0">{icon}</span>}
         <span className="whitespace-nowrap">{children}</span>
      </div>
   );
};

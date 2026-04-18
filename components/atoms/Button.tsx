import { ReactNode } from "react";

interface ButtonProps {
   children: ReactNode;
   variant?: "primary" | "secondary" | "outline";
   icon?: ReactNode;
   onClick?: () => void;
   className?: string;
}

export const Button = ({ 
   children, 
   variant = "primary", 
   icon, 
   onClick,
   className = "" 
}: ButtonProps) => {
   const baseStyles = "flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold font-sans transition-all active:scale-95 hover:scale-[1.02] hover:shadow-md whitespace-nowrap leading-none cursor-pointer";
   
   const variants = {
      primary: "bg-primary text-primary-contrast border border-subtle hover:bg-primary/90",
      secondary: "bg-surface text-primary border border-subtle hover:bg-surface/80",
      outline: "bg-page/50 text-primary border border-subtle hover:bg-page/80 backdrop-blur-sm",
   };

   return (
      <button 
         type="button" 
         onClick={onClick}
         className={`${baseStyles} ${variants[variant]} ${className}`}
      >
         {icon && <span className="flex items-center justify-center size-5 shrink-0">{icon}</span>}
         <span className="flex items-center mt-[1px]">{children}</span>
      </button>
   );
};

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
   const baseStyles = "flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold font-sans transition-all active:scale-95 whitespace-nowrap";
   
   const variants = {
      primary: "bg-primary text-primary-contrast border border-subtle",
      secondary: "bg-surface text-primary border border-subtle",
      outline: "bg-page text-primary border border-subtle",
   };

   return (
      <button 
         type="button" 
         onClick={onClick}
         className={`${baseStyles} ${variants[variant]} ${className}`}
      >
         {icon && <span className="size-5">{icon}</span>}
         {children}
      </button>
   );
};

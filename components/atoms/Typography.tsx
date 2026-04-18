import { ReactNode } from "react";

interface TypographyProps {
   variant?: "hero" | "hero-sub" | "section" | "project" | "body" | "small";
   children: ReactNode;
   className?: string;
   as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export const Typography = ({ 
   variant = "body", 
   children, 
   className = "", 
   as 
}: TypographyProps) => {
   const variants = {
      hero: "text-[80px] font-bold leading-tight",
      "hero-sub": "text-[48px] font-bold leading-tight", // Ajustado a Bold para títulos de proyecto
      section: "text-[32px] font-bold leading-tight",
      project: "text-[24px] font-bold leading-tight",
      body: "text-[16px] font-normal leading-[24px]",
      small: "text-[14px] font-light leading-normal",
   };

   const Tag = as || (variant === "hero" ? "h1" : variant === "section" ? "h2" : variant === "project" ? "h3" : "p");

   return (
      <Tag className={`${variants[variant]} ${className} font-sans text-body`}>
         {children}
      </Tag>
   );
};

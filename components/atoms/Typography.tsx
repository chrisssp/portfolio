import type { ReactNode } from "react";

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
   as,
}: TypographyProps) => {
   const variants = {
      // Muy pequeño: 28px | Tablet: 48px | Desktop: 80px
      hero: "text-[28px] xs:text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-tight",
      // Muy pequeño: 18px | Tablet: 32px | Desktop: 48px
      "hero-sub":
         "text-[18px] xs:text-[22px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight",
      // Muy pequeño: 20px | Tablet: 28px | Desktop: 32px
      section:
         "text-[20px] xs:text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-bold leading-tight",
      // Muy pequeño: 16px | Tablet: 20px | Desktop: 24px
      project:
         "text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] font-bold leading-tight",
      body: "text-[13px] xs:text-[14px] sm:text-[16px] font-normal leading-relaxed",
      small: "text-[11px] xs:text-[12px] sm:text-[14px] font-light leading-normal",
   };

   const Tag =
      as ||
      (variant === "hero"
         ? "h1"
         : variant === "section"
           ? "h2"
           : variant === "project"
             ? "h3"
             : "p");

   return (
      <Tag className={`${variants[variant]} ${className} font-sans text-body`}>
         {children}
      </Tag>
   );
};

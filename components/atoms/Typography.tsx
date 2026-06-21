import type { ReactNode } from "react";

type Weight = "light" | "normal" | "medium" | "semibold" | "bold" | "black";

interface TypographyProps {
   variant?:
      | "hero"
      | "hero-sub"
      | "project-hero"
      | "project-hero-sub"
      | "section"
      | "project"
      | "body"
      | "small";
   weight?: Weight;
   children: ReactNode;
   className?: string;
   as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

const defaultWeights: Record<string, Weight> = {
   hero: "bold",
   "hero-sub": "bold",
   "project-hero": "bold",
   "project-hero-sub": "bold",
   section: "bold",
   project: "bold",
   body: "normal",
   small: "light",
};

const weightClasses: Record<Weight, string> = {
   light: "font-light",
   normal: "font-normal",
   medium: "font-medium",
   semibold: "font-semibold",
   bold: "font-bold",
   black: "font-black",
};

export const Typography = ({
   variant = "body",
   weight,
   children,
   className = "",
   as,
}: TypographyProps) => {
   const variants = {
      // Muy pequeño: ~30px | Tablet: 48px | Desktop: ~72px
      hero: "text-3xl md:text-5xl lg:text-7xl leading-tight",
      // Muy pequeño: 18px | Tablet: ~36px | Desktop: 48px
      "hero-sub": "text-lg md:text-4xl lg:text-5xl leading-tight",
      "project-hero": "text-2xl md:text-4xl lg:text-5xl leading-tight",
      "project-hero-sub": "text-base md:text-2xl lg:text-3xl leading-tight",
      // Muy pequeño: 20px | Tablet: ~30px | Desktop: ~36px
      section: "text-xl md:text-3xl lg:text-4xl leading-tight",
      // Muy pequeño: 16px | Tablet: 20px | Desktop: 24px
      project: "text-base md:text-xl lg:text-2xl leading-tight",
      body: "text-sm sm:text-base leading-relaxed",
      small: "text-xs sm:text-sm leading-normal",
   };

   const resolvedWeight = weight ?? defaultWeights[variant] ?? "normal";

   const Tag =
      as ||
      (variant === "hero" || variant === "project-hero"
         ? "h1"
         : variant === "section"
           ? "h2"
           : variant === "project"
             ? "h3"
             : "p");

   return (
      <Tag
         className={`${variants[variant]} ${weightClasses[resolvedWeight]} font-sans ${className}`}
      >
         {children}
      </Tag>
   );
};

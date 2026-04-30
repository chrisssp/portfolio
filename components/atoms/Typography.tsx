import type { ReactNode } from "react";

interface TypographyProps {
  variant?: "hero" | "hero-sub" | "project-hero" | "project-hero-sub" | "section" | "project" | "body" | "small";
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
    // Muy pequeño: ~30px | Tablet: 48px | Desktop: ~72px
    hero: "text-3xl md:text-5xl lg:text-7xl font-bold leading-tight",
    // Muy pequeño: 18px | Tablet: ~36px | Desktop: 48px
    "hero-sub":
      "text-lg md:text-4xl lg:text-5xl font-bold leading-tight",
    "project-hero": "text-3xl md:text-5xl lg:text-6xl font-bold leading-tight",
    "project-hero-sub": "text-lg md:text-3xl lg:text-4xl font-bold leading-tight",
    // Muy pequeño: 20px | Tablet: ~30px | Desktop: ~36px
    section:
      "text-xl md:text-3xl lg:text-4xl font-bold leading-tight",
    // Muy pequeño: 16px | Tablet: 20px | Desktop: 24px
    project:
      "text-base md:text-xl lg:text-2xl font-bold leading-tight",
    body: "text-sm sm:text-base font-normal leading-relaxed",
    small: "text-xs sm:text-sm font-light leading-normal",
  };

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
    <Tag className={`${variants[variant]} ${className} font-sans text-body`}>
      {children}
    </Tag>
  );
};

import type { HTMLAttributes } from "react";
import { forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
   variant?: "default" | "outlined" | "elevated";
   padding?: "none" | "sm" | "md" | "lg";
}

const variantStyles = {
   default: "bg-surface",
   outlined: "bg-surface border border-subtle/50",
   elevated: "bg-surface shadow-lg",
};

const paddingStyles = {
   none: "",
   sm: "p-4",
   md: "p-6",
   lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
   (
      {
         variant = "default",
         padding = "md",
         className = "",
         children,
         ...props
      },
      ref,
   ) => {
      return (
         <div
            ref={ref}
            className={`rounded-2xl ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
            {...props}
         >
            {children}
         </div>
      );
   },
);

Card.displayName = "Card";

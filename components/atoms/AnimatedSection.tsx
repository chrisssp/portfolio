"use client";

import type { ElementType, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type AnimationVariant =
   | "fade-up"
   | "fade-down"
   | "fade-left"
   | "fade-right"
   | "fade"
   | "zoom";

interface AnimatedSectionProps {
   children: ReactNode;
   className?: string;
   /** Animation style. Default: "fade-up" */
   variant?: AnimationVariant;
   /** Delay before animation starts (ms). Useful for staggered sequences. */
   delay?: number;
   /** Animation duration class. Default "duration-700" */
   duration?: string;
   /** HTML element to render. Default: "div" */
   as?: ElementType;
   /** IntersectionObserver threshold (0–1). Default: 0.08 */
   threshold?: number;
}

const variantStyles: Record<AnimationVariant, { hidden: string; visible: string }> = {
   "fade-up": {
      hidden: "opacity-0 translate-y-8",
      visible: "opacity-100 translate-y-0",
   },
   "fade-down": {
      hidden: "opacity-0 -translate-y-8",
      visible: "opacity-100 translate-y-0",
   },
   "fade-left": {
      hidden: "opacity-0 translate-x-8",
      visible: "opacity-100 translate-x-0",
   },
   "fade-right": {
      hidden: "opacity-0 -translate-x-8",
      visible: "opacity-100 translate-x-0",
   },
   fade: {
      hidden: "opacity-0",
      visible: "opacity-100",
   },
   zoom: {
      hidden: "opacity-0 scale-95",
      visible: "opacity-100 scale-100",
   },
};

/**
 * Wraps any content and animates it into view once it enters the viewport.
 * Uses IntersectionObserver under the hood (zero JS overhead).
 * Respects `prefers-reduced-motion` — shows content immediately if reduced motion is preferred.
 *
 * @example
 * <AnimatedSection variant="fade-up" delay={200}>
 *   <ProjectCard ... />
 * </AnimatedSection>
 */
export const AnimatedSection = ({
   children,
   className = "",
   variant = "fade-up",
   delay = 0,
   duration = "duration-700",
   as: Tag = "div",
   threshold = 0.08,
}: AnimatedSectionProps) => {
   const [ref, isVisible] = useScrollReveal({ threshold });
   const styles = variantStyles[variant];

   return (
      <Tag
         ref={ref}
         className={`transition-all ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:translate-x-0 motion-reduce:scale-100 ${duration} ${
            isVisible ? styles.visible : styles.hidden
         } ${className}`}
         style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
      >
         {children}
      </Tag>
   );
};

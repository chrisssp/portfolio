"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

interface SpotlightCardProps {
   children: ReactNode;
   className?: string;
}

/**
 * Wraps content in a div that tracks mouse position and exposes it as
 * --x / --y CSS custom properties. The spotlight gradient is rendered
 * entirely in CSS via the .spotlight-card utility class, so there is
 * zero layout impact and no extra DOM nodes.
 *
 * Safe on touch devices — the effect simply never activates.
 */
export const SpotlightCard = ({ children, className = "" }: SpotlightCardProps) => {
   const ref = useRef<HTMLDivElement>(null);

   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--y", `${e.clientY - rect.top}px`);
   };

   const handleMouseLeave = () => {
      const el = ref.current;
      if (!el) return;
      // Reset to off-screen so the gradient disappears
      el.style.setProperty("--x", "-9999px");
      el.style.setProperty("--y", "-9999px");
   };

   return (
      <div
         ref={ref}
         className={`spotlight-card ${className}`}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
      >
         {children}
      </div>
   );
};

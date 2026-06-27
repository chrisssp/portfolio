/**
 * Ambient Gradient Orbs — slow-moving blurred color blobs on top of content.
 *
 * Pre-rendered blurred PNGs eliminate runtime CSS blur computation.
 * Pure CSS animations (transform only) for GPU-composited performance:
 * no JS animation loops, no state, zero re-renders.
 *
 * Uses next-themes to swap between light/dark orb assets.
 * Fully disabled when prefers-reduced-motion is active.
 *
 * Renders above content with reduced opacity so it feels like a soft
 * atmospheric depth rather than a distracting overlay.
 */
"use client";

import { useTheme } from "next-themes";

export function AmbientOrbs() {
   const { resolvedTheme } = useTheme();
   const isDark = resolvedTheme === "dark";

   const orb1 = isDark
      ? "/assets/images/orbs/orb-1-dark.png"
      : "/assets/images/orbs/orb-1-light.png";
   const orb2 = isDark
      ? "/assets/images/orbs/orb-2-dark.png"
      : "/assets/images/orbs/orb-2-light.png";
   const orb3 = isDark
      ? "/assets/images/orbs/orb-3-dark.png"
      : "/assets/images/orbs/orb-3-light.png";

   return (
      <div
         className="fixed inset-0 pointer-events-none overflow-hidden"
         style={{ zIndex: 0, opacity: 0.7 }}
         aria-hidden="true"
      >
         {/* Orb 1 — largest, top-left area */}
         <div
            className="absolute rounded-full animate-orb-1 will-change-transform"
            style={{
               width: "600px",
               height: "600px",
               left: "-10%",
               top: "10%",
               backgroundImage: `url(${orb1})`,
               backgroundSize: "cover",
            }}
         />
         {/* Orb 2 — medium, bottom-right */}
         <div
            className="absolute rounded-full animate-orb-2 will-change-transform"
            style={{
               width: "500px",
               height: "500px",
               right: "-5%",
               bottom: "25%",
               backgroundImage: `url(${orb2})`,
               backgroundSize: "cover",
            }}
         />
         {/* Orb 3 — smallest, center-bottom */}
         <div
            className="absolute rounded-full animate-orb-3 will-change-transform"
            style={{
               width: "400px",
               height: "400px",
               left: "35%",
               top: "55%",
               backgroundImage: `url(${orb3})`,
               backgroundSize: "cover",
            }}
         />
      </div>
   );
}

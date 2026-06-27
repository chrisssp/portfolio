/**
 * Ambient Gradient Orbs — slow-moving blurred color blobs in the background.
 *
 * Pure CSS animations (transform only) for GPU-composited performance:
 * no JS animation loops, no state, zero re-renders.
 *
 * Uses brand-primary CSS variables so colors adapt to light/dark mode.
 * Fully disabled when prefers-reduced-motion is active.
 *
 * Lives at z-index: 0 between body background and content (z-index: 1).
 */
export function AmbientOrbs() {
   return (
      <div
         className="fixed inset-0 pointer-events-none overflow-hidden"
         style={{ zIndex: 0 }}
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
               background:
                  "radial-gradient(circle, rgba(var(--brand-primary-r), var(--brand-primary-g), var(--brand-primary-b), 0.08) 0%, transparent 70%)",
               filter: "blur(50px)",
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
               background:
                  "radial-gradient(circle, rgba(var(--brand-primary-r), var(--brand-primary-g), var(--brand-primary-b), 0.06) 0%, transparent 70%)",
               filter: "blur(60px)",
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
               background:
                  "radial-gradient(circle, rgba(var(--brand-primary-r), var(--brand-primary-g), var(--brand-primary-b), 0.05) 0%, transparent 70%)",
               filter: "blur(50px)",
            }}
         />
      </div>
   );
}

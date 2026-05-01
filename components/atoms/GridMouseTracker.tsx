"use client";

import { useEffect } from "react";

/**
 * Single global mousemove listener that calculates mouse position
 * RELATIVE TO EACH .mask-grid-fade element and sets --gx / --gy
 * directly on that element.
 *
 * This is necessary because CSS mask-image coordinates are element-relative,
 * not viewport-relative. A single root-level variable breaks on tall sections
 * because the element may be scrolled far from the viewport origin.
 *
 * Performance: One listener + rAF throttle. Querying the DOM on every frame
 * is acceptable given there are only ~5–8 grid sections per page.
 */
export function GridMouseTracker() {
   useEffect(() => {
      let rafId: number;

      const handleMouseMove = (e: MouseEvent) => {
         cancelAnimationFrame(rafId);
         rafId = requestAnimationFrame(() => {
            // Set per-element relative coordinates so the mask is always correct
            // regardless of scroll position or section height.
            const gridEls = document.querySelectorAll<HTMLElement>(".mask-grid-fade");
            for (const el of gridEls) {
               const rect = el.getBoundingClientRect();
               el.style.setProperty("--gx", `${e.clientX - rect.left}px`);
               el.style.setProperty("--gy", `${e.clientY - rect.top}px`);
            }
         });
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      return () => {
         window.removeEventListener("mousemove", handleMouseMove);
         cancelAnimationFrame(rafId);
      };
   }, []);

   return null;
}

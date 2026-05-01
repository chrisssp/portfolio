"use client";

import { useEffect } from "react";

/**
 * Mounts a single global mousemove listener that updates --gx / --gy
 * CSS custom properties on :root. Every .mask-grid-fade element on the
 * page reads those vars to position its radial mask, making the grid's
 * brightest point follow the cursor.
 *
 * Uses requestAnimationFrame to throttle updates to the GPU render cycle,
 * keeping the CPU overhead negligible even on large monitors.
 *
 * On touch/pointer-less devices the vars are never set, so the CSS fallback
 * (center) kicks in automatically.
 */
export function GridMouseTracker() {
   useEffect(() => {
      let rafId: number;

      const handleMouseMove = (e: MouseEvent) => {
         cancelAnimationFrame(rafId);
         rafId = requestAnimationFrame(() => {
            document.documentElement.style.setProperty("--gx", `${e.clientX}px`);
            document.documentElement.style.setProperty("--gy", `${e.clientY}px`);
         });
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      return () => {
         window.removeEventListener("mousemove", handleMouseMove);
         cancelAnimationFrame(rafId);
      };
   }, []);

   // Renders nothing — purely a side-effect component
   return null;
}

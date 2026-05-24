"use client";

import { useEffect } from "react";

export function GridMouseTracker() {
   useEffect(() => {
      const isHoverable = window.matchMedia(
         "(hover: hover) and (pointer: fine)",
      ).matches;
      if (!isHoverable) return;

      let rafId: number;
      let cachedRects: Map<HTMLElement, DOMRect> | null = null;

      const getGridElements = () =>
         document.querySelectorAll<HTMLElement>(".bg-grid-spotlight");

      const updateRects = () => {
         const map = new Map<HTMLElement, DOMRect>();
         for (const el of getGridElements()) {
            map.set(el, el.getBoundingClientRect());
         }
         cachedRects = map;
      };

      const handleMouseMove = (e: MouseEvent) => {
         cancelAnimationFrame(rafId);
         rafId = requestAnimationFrame(() => {
            if (!cachedRects) updateRects();
            for (const [el, rect] of cachedRects!) {
               el.style.setProperty("--gx", `${e.clientX - rect.left}px`);
               el.style.setProperty("--gy", `${e.clientY - rect.top}px`);
            }
         });
      };

      updateRects();
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener(
         "scroll",
         () => {
            cachedRects = null;
         },
         { passive: true },
      );

      return () => {
         window.removeEventListener("mousemove", handleMouseMove);
         cancelAnimationFrame(rafId);
      };
   }, []);

   return null;
}

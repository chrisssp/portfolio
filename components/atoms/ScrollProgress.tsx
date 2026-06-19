"use client";

import { useEffect, useRef } from "react";

export const ScrollProgress = () => {
   const barRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const bar = barRef.current;
      if (!bar) return;

      let rafId = 0;
      const onScroll = () => {
         const pct =
            window.scrollY / (document.body.scrollHeight - window.innerHeight);
         rafId = requestAnimationFrame(() => {
            bar.style.transform = `scaleX(${pct})`;
         });
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
         window.removeEventListener("scroll", onScroll);
         cancelAnimationFrame(rafId);
      };
   }, []);

   return (
      <div
         ref={barRef}
         className="fixed top-0 left-0 z-50 h-0.5 w-full bg-primary origin-left motion-reduce:hidden"
         style={{ transform: "scaleX(0)" }}
      />
   );
};

"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

/**
 * Next.js App Router template.tsx — runs on EVERY route navigation within [lang].
 * Unlike layout.tsx (which persists), this remounts on each navigation,
 * giving us a clean hook point for page transition animations.
 *
 * Uses a simple CSS animation class so there is zero JavaScript overhead
 * and it respects prefers-reduced-motion via the Tailwind motion-reduce: modifier.
 */
export default function Template({ children }: { children: ReactNode }) {
   const pathname = usePathname();
   const lastLocationKeyRef = useRef<string | null>(null);
   const shouldRestoreRef = useRef(false);

   useEffect(() => {
      if (typeof window === "undefined") return;
      window.history.scrollRestoration = "manual";
      const handlePopState = () => {
         shouldRestoreRef.current = true;
      };

      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
   }, []);

   useEffect(() => {
      if (typeof window === "undefined") return;
      const lastKey = lastLocationKeyRef.current;
      const currentKey = `${pathname}${window.location.hash || ""}`;

      if (lastKey && lastKey !== currentKey) {
         sessionStorage.setItem(`scroll:${lastKey}`, String(window.scrollY));
      }

      const stored = sessionStorage.getItem(`scroll:${currentKey}`);
      if (shouldRestoreRef.current && stored) {
         const y = Number(stored);
         requestAnimationFrame(() => {
            window.scrollTo(0, Number.isNaN(y) ? 0 : y);
         });
      } else if (window.location.hash) {
         const hashId = window.location.hash.slice(1);
         const target = document.getElementById(hashId);
         if (target) {
            requestAnimationFrame(() => {
               target.scrollIntoView({ behavior: "auto", block: "start" });
            });
         } else {
            window.scrollTo(0, 0);
         }
      } else {
         window.scrollTo(0, 0);
      }

      shouldRestoreRef.current = false;
      lastLocationKeyRef.current = currentKey;
   }, [pathname]);

   return (
      <div className="animate-page-enter motion-reduce:animate-none">
         {children}
      </div>
   );
}

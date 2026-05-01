"use client";

import type { ReactNode } from "react";

/**
 * Next.js App Router template.tsx — runs on EVERY route navigation within [lang].
 * Unlike layout.tsx (which persists), this remounts on each navigation,
 * giving us a clean hook point for page transition animations.
 *
 * Uses a simple CSS animation class so there is zero JavaScript overhead
 * and it respects prefers-reduced-motion via the Tailwind motion-reduce: modifier.
 */
export default function Template({ children }: { children: ReactNode }) {
   return (
      <div className="animate-page-enter motion-reduce:animate-none">
         {children}
      </div>
   );
}

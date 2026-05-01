"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
   /** Fraction of the element that must be visible. Default: 0.1 */
   threshold?: number;
   /** Margin around root. Default: "0px 0px -60px 0px" to trigger slightly before the element is fully visible */
   rootMargin?: string;
   /** Only fire once and never reset. Default: true */
   triggerOnce?: boolean;
}

/**
 * Lightweight scroll-reveal hook backed by native IntersectionObserver.
 * Respects the user's `prefers-reduced-motion` system preference.
 *
 * @returns [ref, isVisible] — attach `ref` to the target element.
 */
export function useScrollReveal<T extends Element = HTMLDivElement>({
   threshold = 0.1,
   rootMargin = "0px 0px -60px 0px",
   triggerOnce = true,
}: UseScrollRevealOptions = {}) {
   const ref = useRef<T | null>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      // Respect prefers-reduced-motion — mark everything as immediately visible.
      const prefersReduced = window.matchMedia(
         "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) {
         setIsVisible(true);
         return;
      }

      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               if (triggerOnce) observer.unobserve(element);
            } else if (!triggerOnce) {
               setIsVisible(false);
            }
         },
         { threshold, rootMargin },
      );

      observer.observe(element);
      return () => observer.disconnect();
   }, [threshold, rootMargin, triggerOnce]);

   return [ref, isVisible] as const;
}

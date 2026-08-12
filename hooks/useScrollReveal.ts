"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const PREFERS_REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onStoreChange: () => void) {
   const mql = window.matchMedia(PREFERS_REDUCED_MOTION_QUERY);
   mql.addEventListener("change", onStoreChange);
   return () => mql.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
   return window.matchMedia(PREFERS_REDUCED_MOTION_QUERY).matches;
}

const getServerSnapshot = () => false;

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
   const prefersReducedMotion = useSyncExternalStore(
      subscribeToReducedMotion,
      getReducedMotionSnapshot,
      getServerSnapshot,
   );

   useEffect(() => {
      // Respect prefers-reduced-motion — skip the observer entirely.
      if (prefersReducedMotion) return;

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
   }, [prefersReducedMotion, threshold, rootMargin, triggerOnce]);

   // Reduced-motion users see everything as already revealed.
   return [ref, prefersReducedMotion || isVisible] as const;
}

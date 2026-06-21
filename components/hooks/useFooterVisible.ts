"use client";

import { useEffect, useState } from "react";

export function useFooterVisible() {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const observer = new IntersectionObserver(
         ([entry]) => setIsVisible(entry.isIntersecting),
         { threshold: 0 },
      );

      observer.observe(footer);
      return () => observer.disconnect();
   }, []);

   return isVisible;
}

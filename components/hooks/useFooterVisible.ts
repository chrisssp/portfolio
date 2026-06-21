"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useFooterVisible() {
   const pathname = usePathname();
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      void pathname;

      const observer = new IntersectionObserver(
         ([entry]) => setIsVisible(entry.isIntersecting),
         { threshold: 0 },
      );

      observer.observe(footer);
      return () => observer.disconnect();
   }, [pathname]);

   return isVisible;
}

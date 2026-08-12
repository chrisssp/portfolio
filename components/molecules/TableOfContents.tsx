"use client";

import { type MouseEvent, useEffect, useRef, useState } from "react";
import type { TableOfContentsItem } from "@/lib/blog";

interface TableOfContentsProps {
   items: TableOfContentsItem[];
   label: string;
   showLabel?: boolean;
}

interface IndicatorPosition {
   top: number;
   height: number;
}

export default function TableOfContents({
   items,
   label,
   showLabel = true,
}: TableOfContentsProps) {
   const [activeId, setActiveId] = useState<string>("");
   const [indicator, setIndicator] = useState<IndicatorPosition>({
      top: 0,
      height: 0,
   });
   const anchorsRef = useRef<Map<string, HTMLElement>>(new Map());

   const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
         return;
      }
      e.preventDefault();
      window.history.replaceState(null, "", `#${id}`);
      document.getElementById(id)?.scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   };

   useEffect(() => {
      if (items.length === 0) return;

      const observer = new IntersectionObserver(
         (entries) => {
            for (const entry of entries) {
               if (entry.isIntersecting) {
                  setActiveId(entry.target.id);
                  const el = anchorsRef.current.get(entry.target.id);
                  if (el) {
                     setIndicator({
                        top: el.offsetTop,
                        height: el.offsetHeight,
                     });
                  }
               }
            }
         },
         { rootMargin: "-20% 0px -65% 0px" },
      );

      for (const item of items) {
         const el = document.getElementById(item.id);
         if (el) observer.observe(el);
         item.children?.forEach((child) => {
            const childEl = document.getElementById(child.id);
            if (childEl) observer.observe(childEl);
         });
      }

      return () => observer.disconnect();
   }, [items]);

   // Keep the indicator aligned with the active item when the viewport resizes.
   useEffect(() => {
      const handleResize = () => {
         const el = anchorsRef.current.get(activeId);
         if (el) {
            setIndicator({ top: el.offsetTop, height: el.offsetHeight });
         }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, [activeId]);

   return (
      <nav aria-label={label}>
         {showLabel && (
            <p className="text-xs font-bold uppercase tracking-wider text-body/50 mb-3">
               {label}
            </p>
         )}
         <ul className="relative space-y-2 text-sm border-l border-subtle/50">
            <div
               className={`absolute left-0 top-0 w-0.5 rounded-full bg-primary transition-transform duration-300 ease-out motion-reduce:transition-none ${
                  activeId ? "" : "opacity-0 pointer-events-none"
               }`}
               style={{
                  transform: `translateY(${indicator.top}px)`,
                  height: indicator.height,
               }}
            />
            {items.map((item) => (
               <li key={item.id}>
                  <a
                     ref={(el) => {
                        if (el) anchorsRef.current.set(item.id, el);
                     }}
                     href={`#${item.id}`}
                     onClick={(e) => handleAnchorClick(e, item.id)}
                     aria-current={
                        activeId === item.id ? "location" : undefined
                     }
                     className={`block pl-3 py-0.5 transition-colors ${
                        activeId === item.id
                           ? "text-primary"
                           : "text-body/70 hover:text-body"
                     }`}
                  >
                     {item.text}
                  </a>
                  {item.children && item.children.length > 0 && (
                     <ul className="ml-3 mt-1 space-y-1">
                        {item.children.map((child) => (
                           <li key={child.id}>
                              <a
                                 ref={(el) => {
                                    if (el)
                                       anchorsRef.current.set(child.id, el);
                                 }}
                                 href={`#${child.id}`}
                                 onClick={(e) => handleAnchorClick(e, child.id)}
                                 aria-current={
                                    activeId === child.id
                                       ? "location"
                                       : undefined
                                 }
                                 className={`block pl-3 py-0.5 transition-colors ${
                                    activeId === child.id
                                       ? "text-primary"
                                       : "text-body/50 hover:text-body"
                                 }`}
                              >
                                 {child.text}
                              </a>
                           </li>
                        ))}
                     </ul>
                  )}
               </li>
            ))}
         </ul>
      </nav>
   );
}

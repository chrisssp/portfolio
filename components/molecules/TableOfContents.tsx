"use client";

import { type MouseEvent, useEffect, useState } from "react";
import type { TableOfContentsItem } from "@/lib/blog";

interface TableOfContentsProps {
   items: TableOfContentsItem[];
   label: string;
   showLabel?: boolean;
}

export default function TableOfContents({
   items,
   label,
   showLabel = true,
}: TableOfContentsProps) {
   const [activeId, setActiveId] = useState<string>("");

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
               if (entry.isIntersecting) setActiveId(entry.target.id);
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

   return (
      <nav aria-label={label}>
         {showLabel && (
            <p className="text-xs font-bold uppercase tracking-wider text-body/50 mb-3">
               {label}
            </p>
         )}
         <ul className="space-y-2 text-sm border-l border-subtle/50">
            {items.map((item) => (
               <li key={item.id}>
                  <a
                     href={`#${item.id}`}
                     onClick={(e) => handleAnchorClick(e, item.id)}
                     className={`block border-l-2 -ml-px pl-3 py-0.5 transition-colors ${
                        activeId === item.id
                           ? "border-primary text-primary"
                           : "border-transparent text-body/70 hover:text-body"
                     }`}
                  >
                     {item.text}
                  </a>
                  {item.children && item.children.length > 0 && (
                     <ul className="ml-3 mt-1 space-y-1">
                        {item.children.map((child) => (
                           <li key={child.id}>
                              <a
                                 href={`#${child.id}`}
                                 onClick={(e) => handleAnchorClick(e, child.id)}
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

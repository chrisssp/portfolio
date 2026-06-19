"use client";

import {
   type ReactNode,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
   content: ReactNode;
   children: ReactNode;
   position?: TooltipPosition;
   className?: string;
}

export const Tooltip = ({
   content,
   children,
   position = "bottom",
   className = "",
}: TooltipProps) => {
   const [isVisible, setIsVisible] = useState(false);
   const triggerRef = useRef<HTMLDivElement>(null);
   const tooltipRef = useRef<HTMLDivElement>(null);

   const show = useCallback(() => setIsVisible(true), []);
   const hide = useCallback(() => setIsVisible(false), []);
   const toggle = useCallback(() => setIsVisible((prev) => !prev), []);

   useEffect(() => {
      if (!isVisible) return;

      const handleClickOutside = (e: MouseEvent) => {
         if (
            triggerRef.current &&
            !triggerRef.current.contains(e.target as Node) &&
            tooltipRef.current &&
            !tooltipRef.current.contains(e.target as Node)
         ) {
            hide();
         }
      };

      const handleEscape = (e: KeyboardEvent) => {
         if (e.key === "Escape") hide();
      };

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
         document.removeEventListener("keydown", handleEscape);
      };
   }, [isVisible, hide]);

   const positionClasses: Record<TooltipPosition, string> = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
      left: "right-full top-1/2 -translate-y-1/2 mr-3",
      right: "left-full top-1/2 -translate-y-1/2 ml-3",
   };

   const animationClasses = isVisible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95";

   return (
      <div
         ref={triggerRef}
         className={`relative ${className}`}
         onMouseEnter={show}
         onMouseLeave={hide}
         onFocus={show}
         onBlur={hide}
         onClick={toggle}
      >
         {children}
         <div
            ref={tooltipRef}
            role="tooltip"
            className={`absolute z-50 pointer-events-none transition-all duration-200 ease-out ${positionClasses[position]} ${animationClasses}`}
         >
            <div className="bg-background/95 backdrop-blur-sm border border-subtle rounded-xl px-4 py-3 shadow-lg w-max max-w-[280px]">
               <p className="text-xs text-body leading-relaxed">{content}</p>
            </div>
         </div>
      </div>
   );
};

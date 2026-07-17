"use client";

import {
   type ReactNode,
   useCallback,
   useEffect,
   useLayoutEffect,
   useRef,
   useState,
} from "react";
import { createPortal } from "react-dom";
import { Typography } from "./Typography";

interface TooltipProps {
   content: ReactNode;
   children: ReactNode;
   align?: "left" | "right" | "center";
   direction?: "up" | "down" | "center";
   className?: string;
}

export const Tooltip = ({
   content,
   children,
   align = "center",
   direction = "up",
   className = "",
}: TooltipProps) => {
   const [isVisible, setIsVisible] = useState(false);
   const [isTouchDevice, setIsTouchDevice] = useState(false);
   const [isMounted, setIsMounted] = useState(false);
   const triggerRef = useRef<HTMLDivElement>(null);
   const tooltipRef = useRef<HTMLDivElement>(null);
   const originalOverflow = useRef("");
   const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});

   // Detect touch device and confirm client mount (SSR-safe)
   useEffect(() => {
      setIsTouchDevice(window.matchMedia("(hover: none)").matches);
      setIsMounted(true);
   }, []);

   const show = useCallback(() => setIsVisible(true), []);
   const hide = useCallback(() => setIsVisible(false), []);
   const toggle = useCallback(() => setIsVisible((prev) => !prev), []);

   // Prevent scrolling when open on mobile
   useEffect(() => {
      if (isVisible && isTouchDevice) {
         originalOverflow.current = document.body.style.overflow;
         document.documentElement.style.overflow = "hidden";
         document.body.style.overflow = "hidden";
      } else if (!isVisible) {
         document.documentElement.style.overflow = "unset";
         document.body.style.overflow = originalOverflow.current || "unset";
      }
      return () => {
         document.documentElement.style.overflow = "unset";
         document.body.style.overflow = originalOverflow.current || "unset";
      };
   }, [isVisible, isTouchDevice]);

   // Close on click outside
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

   // Calculate fixed position for desktop portal tooltip
   useLayoutEffect(() => {
      if (isTouchDevice || !isVisible) return;

      const trigger = triggerRef.current;
      const tooltip = tooltipRef.current;
      if (!trigger) return;

      const triggerRect = trigger.getBoundingClientRect();
      const tooltipHeight = tooltip?.offsetHeight || 0;
      const tooltipWidth = tooltip?.offsetWidth || 0;
      const gap = 12;

      let top = 0;
      let left = 0;

      // Vertical position (direction)
      if (direction === "up") {
         top = triggerRect.top - tooltipHeight - gap;
      } else if (direction === "down") {
         top = triggerRect.bottom + gap;
      } else {
         // center
         top = triggerRect.top + (triggerRect.height - tooltipHeight) / 2;
      }

      // Horizontal position (align)
      if (align === "left") {
         left = triggerRect.left - tooltipWidth - gap;
      } else if (align === "right") {
         left = triggerRect.right + gap;
      } else {
         // center
         left = triggerRect.left + (triggerRect.width - tooltipWidth) / 2;
      }

      setTooltipStyle({ top, left });
   }, [isVisible, align, direction, isTouchDevice]);

   const animationClasses = isVisible
      ? "opacity-100 scale-100 pointer-events-auto"
      : "opacity-0 scale-95 pointer-events-none";

   // Desktop: hover events. Mobile: click only.
   const triggerProps = isTouchDevice
      ? { onClick: toggle }
      : { onMouseEnter: show, onMouseLeave: hide, onFocus: show, onBlur: hide };

   const tooltipContent = (
      <div className="bg-surface border border-subtle rounded-xl px-4 py-3 shadow-lg w-max max-w-[280px]">
         <Typography
            variant="small"
            weight="normal"
            className="leading-relaxed"
         >
            {content}
         </Typography>
      </div>
   );

   return (
      <div
         ref={triggerRef}
         className={`relative ${className}`}
         {...triggerProps}
      >
         {children}

         {/* Desktop: portal to body with fixed positioning for z-index layering */}
         {isMounted &&
            !isTouchDevice &&
            createPortal(
               <div
                  ref={tooltipRef}
                  role="tooltip"
                  aria-hidden={!isVisible}
                  className={`fixed z-10000 transition-all duration-200 ease-out ${animationClasses}`}
                  style={tooltipStyle}
               >
                  {tooltipContent}
               </div>,
               document.body,
            )}

         {/* Mobile: portaled centered modal with backdrop */}
         {isMounted &&
            isVisible &&
            isTouchDevice &&
            createPortal(
               <>
                  <button
                     type="button"
                     aria-label="Close tooltip"
                     className="fixed inset-0 bg-black/50 backdrop-blur-sm z-9998"
                     onClick={hide}
                  />
                  <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10000">
                     <div
                        ref={tooltipRef}
                        role="tooltip"
                        aria-hidden={false}
                        className={`transition-all duration-200 ease-out ${animationClasses}`}
                     >
                        {tooltipContent}
                     </div>
                  </div>
               </>,
               document.body,
            )}
      </div>
   );
};

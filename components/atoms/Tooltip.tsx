"use client";

import {
   type ReactNode,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import { createPortal } from "react-dom";

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
   const triggerRef = useRef<HTMLDivElement>(null);
   const tooltipRef = useRef<HTMLDivElement>(null);
   const originalOverflow = useRef("");

   // Detect touch device on mount
   useEffect(() => {
      setIsTouchDevice(window.matchMedia("(hover: none)").matches);
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

   const animationClasses = isVisible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95";

   // Desktop: hover events. Mobile: click only.
   const triggerProps = isTouchDevice
      ? { onClick: toggle }
      : { onMouseEnter: show, onMouseLeave: hide, onFocus: show, onBlur: hide };

   // Desktop positioning
   const verticalClass =
      direction === "up"
         ? "bottom-full mb-3"
         : direction === "down"
           ? "top-full mt-3"
           : "top-1/2 -translate-y-1/2";

   const horizontalClass =
      align === "left"
         ? "right-full mr-3"
         : align === "right"
           ? "left-full ml-3"
           : "left-1/2 -translate-x-1/2";

   const tooltipBubble = (
      <div
         ref={tooltipRef}
         role="tooltip"
         className={`pointer-events-none transition-all duration-200 ease-out ${animationClasses}`}
      >
         <div className="bg-surface border border-subtle rounded-xl px-4 py-3 shadow-lg w-max max-w-[280px]">
            <p className="text-xs text-body leading-relaxed">{content}</p>
         </div>
      </div>
   );

   return (
      <div
         ref={triggerRef}
         className={`relative ${className}`}
         {...triggerProps}
      >
         {children}

         {/* Desktop: inline absolute positioning relative to trigger */}
         {isVisible && !isTouchDevice && (
            <div
               className={`absolute z-50 ${verticalClass} ${horizontalClass}`}
            >
               {tooltipBubble}
            </div>
         )}

         {/* Mobile: portaled centered modal with backdrop */}
         {isVisible &&
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
                     {tooltipBubble}
                  </div>
               </>,
               document.body,
            )}
      </div>
   );
};

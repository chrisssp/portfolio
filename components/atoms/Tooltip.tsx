"use client";

import {
   type ReactNode,
   useCallback,
   useEffect,
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
   /** Controlled mode: parent controls visibility */
   visible?: boolean;
   onVisibleChange?: (visible: boolean) => void;
}

export const Tooltip = ({
   content,
   children,
   align = "center",
   direction = "up",
   className = "",
   visible: controlledVisible,
   onVisibleChange,
}: TooltipProps) => {
   const [internalVisible, setInternalVisible] = useState(false);
   const isControlled = controlledVisible !== undefined;
   const isVisible = isControlled ? controlledVisible : internalVisible;
   const [isTouchDevice, setIsTouchDevice] = useState(false);
   const triggerRef = useRef<HTMLDivElement>(null);
   const tooltipRef = useRef<HTMLDivElement>(null);
   const originalOverflow = useRef("");

   // Desktop tooltip position (computed from trigger rect for portal)
   const [desktopPos, setDesktopPos] = useState<{
      top: number;
      left: number;
   } | null>(null);
   // Keep last known position so portal stays positioned during exit transition
   const lastDesktopPosRef = useRef<{ top: number; left: number } | null>(null);

   // Detect touch device on mount
   useEffect(() => {
      setIsTouchDevice(window.matchMedia("(hover: none)").matches);
   }, []);

   const show = useCallback(() => {
      if (isControlled) {
         onVisibleChange?.(true);
      } else {
         setInternalVisible(true);
         onVisibleChange?.(true);
      }
   }, [isControlled, onVisibleChange]);
   const hide = useCallback(() => {
      if (isControlled) {
         onVisibleChange?.(false);
      } else {
         setInternalVisible(false);
         onVisibleChange?.(false);
      }
   }, [isControlled, onVisibleChange]);
   const toggle = useCallback(() => {
      if (isControlled) {
         onVisibleChange?.(!controlledVisible);
      } else {
         setInternalVisible((prev) => {
            const next = !prev;
            onVisibleChange?.(next);
            return next;
         });
      }
   }, [isControlled, controlledVisible, onVisibleChange]);

   // Prevent scrolling while tooltip is active
   useEffect(() => {
      if (isVisible) {
         originalOverflow.current = document.body.style.overflow;
         document.documentElement.style.overflow = "hidden";
         document.body.style.overflow = "hidden";
      } else {
         document.documentElement.style.overflow = "unset";
         document.body.style.overflow = originalOverflow.current || "unset";
      }
      return () => {
         document.documentElement.style.overflow = "unset";
         document.body.style.overflow = originalOverflow.current || "unset";
      };
   }, [isVisible]);

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

   // Compute desktop tooltip position from trigger rect
   useEffect(() => {
      if (!isVisible || isTouchDevice || !triggerRef.current) {
         setDesktopPos(null);
         return;
      }
      const rect = triggerRef.current.getBoundingClientRect();

      let top: number;
      if (direction === "up") top = rect.top;
      else if (direction === "down") top = rect.bottom;
      else top = rect.top + rect.height / 2;

      let left: number;
      if (align === "left") left = rect.left;
      else if (align === "right") left = rect.right;
      else left = rect.left + rect.width / 2;

      const pos = { top, left };
      setDesktopPos(pos);
      lastDesktopPosRef.current = pos;
   }, [isVisible, isTouchDevice, direction, align]);

   const animationClasses = isVisible
      ? "opacity-100 scale-100 pointer-events-auto"
      : "opacity-0 scale-95 pointer-events-none";

   // Desktop: hover events. Mobile: click only.
   const triggerProps = isTouchDevice
      ? { onClick: toggle }
      : { onMouseEnter: show, onMouseLeave: hide, onFocus: show, onBlur: hide };

   // Transform adjustments: gap + centering in portal
   const desktopTransform = [
      direction === "up" ? "-mt-3" : "",
      direction === "down" ? "mt-3" : "",
      direction === "center" ? "-translate-y-1/2" : "",
      align === "left" ? "-translate-x-full -ml-3" : "",
      align === "right" ? "ml-3" : "",
      align === "center" ? "-translate-x-1/2" : "",
   ]
      .filter(Boolean)
      .join(" ");

   const tooltipBubble = (
      <div
         ref={tooltipRef}
         role="tooltip"
         aria-hidden={!isVisible}
         className={`transition-all duration-200 ease-out ${animationClasses}`}
      >
         <div className="bg-surface border border-subtle rounded-xl px-4 py-3 shadow-lg w-max max-w-[280px]">
            <Typography
               variant="small"
               weight="normal"
               className="leading-relaxed"
            >
               {content}
            </Typography>
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

         {/* Desktop: portaled tooltip bubble — always rendered for smooth exit transition */}
         {!isTouchDevice &&
            createPortal(
               <div
                  style={{
                     position: "fixed",
                     top: (desktopPos ?? lastDesktopPosRef.current)?.top ?? 0,
                     left: (desktopPos ?? lastDesktopPosRef.current)?.left ?? 0,
                  }}
                  className={`z-[99999] ${desktopTransform} transition-all duration-200 ease-out ${
                     isVisible
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                  }`}
               >
                  <div
                     ref={tooltipRef}
                     role="tooltip"
                     aria-hidden={!isVisible}
                     className="bg-surface border border-subtle rounded-xl px-4 py-3 shadow-lg w-max max-w-[280px]"
                  >
                     <Typography
                        variant="small"
                        weight="normal"
                        className="leading-relaxed"
                     >
                        {content}
                     </Typography>
                  </div>
               </div>,
               document.body,
            )}

         {/* Mobile: portaled centered tooltip bubble — always rendered for smooth exit transition */}
         {isTouchDevice &&
            createPortal(
               <div
                  className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99999] transition-all duration-200 ease-out ${
                     isVisible
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                  }`}
               >
                  <div
                     role="tooltip"
                     aria-hidden={!isVisible}
                     className="bg-surface border border-subtle rounded-xl px-4 py-3 shadow-lg w-max max-w-[280px]"
                  >
                     <Typography
                        variant="small"
                        weight="normal"
                        className="leading-relaxed"
                     >
                        {content}
                     </Typography>
                  </div>
               </div>,
               document.body,
            )}

         {/* Backdrop — always rendered for smooth fade transition */}
         {createPortal(
            isTouchDevice ? (
               <button
                  type="button"
                  aria-label="Close tooltip"
                  className={`fixed inset-0 z-[99999] cursor-pointer transition-all duration-200 ease-out ${
                     isVisible
                        ? "bg-black/50 backdrop-blur-sm opacity-100"
                        : "bg-black/0 opacity-0 pointer-events-none"
                  }`}
                  onClick={hide}
                  tabIndex={isVisible ? 0 : -1}
               />
            ) : (
               <div
                  className={`fixed inset-0 z-[99999] transition-opacity duration-200 ease-out ${
                     isVisible
                        ? "bg-black/20 opacity-100"
                        : "bg-black/0 opacity-0 pointer-events-none"
                  }`}
               />
            ),
            document.body,
         )}
      </div>
   );
};

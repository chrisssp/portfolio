"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
   MdArrowDropDown,
   MdCheck,
   MdContentCopy,
   MdEmail,
} from "react-icons/md";
import { PROFESSIONAL_LINKS } from "@/config/links";
import { Button } from "../atoms/Button";

interface SmartEmailButtonProps {
   label: string;
   variant?: "primary" | "outline";
   checkmarkClassName?: string;
   className?: string;
   buttonClassName?: string;
   align?: "left" | "right";
   onOpenChange?: (isOpen: boolean) => void;
   menuLabels: {
      send: string;
      sendSub: string;
      copy: string;
      copySub: string;
      copied: string;
   };
}

export const SmartEmailButton = ({
   label,
   variant = "primary",
   checkmarkClassName,
   className = "",
   buttonClassName = "",
   align = "left",
   onOpenChange,
   menuLabels,
}: SmartEmailButtonProps) => {
   const [showEmailMenu, setShowEmailMenu] = useState(false);
   const [copied, setCopied] = useState(false);
   const [isTouchDevice, setIsTouchDevice] = useState(false);
   const [wrapperRect, setWrapperRect] = useState<DOMRect | null>(null);
   const wrapperRef = useRef<HTMLDivElement>(null);
   const menuRef = useRef<HTMLDivElement>(null);
   const originalOverflow = useRef("");

   // Detect touch device
   useEffect(() => {
      setIsTouchDevice(window.matchMedia("(hover: none)").matches);
   }, []);

   const hide = useCallback(() => setShowEmailMenu(false), []);

   // Scroll lock on mobile — save and restore original value
   useEffect(() => {
      if (showEmailMenu && isTouchDevice) {
         originalOverflow.current = document.body.style.overflow;
         document.body.style.overflow = "hidden";
      } else if (!showEmailMenu) {
         document.body.style.overflow = originalOverflow.current || "unset";
      }
      return () => {
         document.body.style.overflow = originalOverflow.current || "unset";
      };
   }, [showEmailMenu, isTouchDevice]);

   // Capture wrapper position when menu opens
   useEffect(() => {
      if (showEmailMenu && wrapperRef.current) {
         setWrapperRect(wrapperRef.current.getBoundingClientRect());
      }
   }, [showEmailMenu]);

   // Notify parent
   useEffect(() => {
      onOpenChange?.(showEmailMenu);
   }, [showEmailMenu, onOpenChange]);

   // Close on click outside
   useEffect(() => {
      if (!showEmailMenu) return;

      const handleClickOutside = (event: MouseEvent) => {
         if (
            wrapperRef.current &&
            !wrapperRef.current.contains(event.target as Node)
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
   }, [showEmailMenu, hide]);

   const handleCopyEmail = useCallback(
      (e?: React.MouseEvent) => {
         e?.stopPropagation();

         const copyToClipboard = (text: string) => {
            if (navigator.clipboard?.writeText) {
               return navigator.clipboard.writeText(text);
            }
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.cssText =
               "position:fixed;top:-9999px;left:-9999px;opacity:0";
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            return Promise.resolve();
         };

         copyToClipboard(PROFESSIONAL_LINKS.email).finally(() => {
            setCopied(true);
            hide();
            setTimeout(() => setCopied(false), 2000);
         });
      },
      [hide],
   );

   return (
      <div className={`relative ${className}`} ref={wrapperRef}>
         {/* Mobile backdrop — absolute within same stacking context as button */}
         {showEmailMenu && isTouchDevice && wrapperRect && (
            <div
               className="absolute bg-black/50 backdrop-blur-sm cursor-pointer"
               style={{
                  top: -wrapperRect.top,
                  left: -wrapperRect.left,
                  width: "100vw",
                  height: "100vh",
                  zIndex: 0,
               }}
               onClick={hide}
            />
         )}

         {/* Button — always above backdrop */}
         <div
            className="relative"
            style={{ zIndex: showEmailMenu && isTouchDevice ? 10 : "auto" }}
         >
            <Button
               variant={variant}
               icon={
                  copied ? (
                     <MdCheck className={checkmarkClassName} />
                  ) : (
                     <MdEmail />
                  )
               }
               className={`w-auto ${buttonClassName}`}
               onClick={(e) => {
                  e?.stopPropagation();
                  setShowEmailMenu(!showEmailMenu);
               }}
            >
               {copied ? menuLabels.copied : label}
               <MdArrowDropDown
                  className={`ml-0.5 size-4 sm:size-5 transition-transform duration-300 ${showEmailMenu ? "rotate-180" : ""}`}
               />
            </Button>
         </div>

         {/* Menu */}
         {showEmailMenu && wrapperRect && (
            <div
               ref={menuRef}
               className={`
                  bg-page border border-subtle rounded-2xl shadow-2xl overflow-hidden z-20
                  min-w-65 xs:min-w-75
                  animate-in fade-in zoom-in-95 duration-200
                  ${isTouchDevice ? "" : align === "right" ? "absolute bottom-full mb-2 right-0" : "absolute top-full mt-2 left-0"}
               `}
               style={
                  isTouchDevice
                     ? {
                          position: "absolute",
                          top: `calc(50vh - ${wrapperRect.top}px)`,
                          left: `calc(50vw - ${wrapperRect.left}px)`,
                          transform: "translate(-50%, -50%)",
                       }
                     : undefined
               }
            >
               <a
                  href={`mailto:${PROFESSIONAL_LINKS.email}`}
                  className="flex items-center gap-3 xs:gap-4 px-4 xs:px-6 py-3 xs:py-4 hover:bg-surface transition-all duration-300 border-b border-subtle hover:scale-[1.01] active:scale-95"
                  onClick={hide}
               >
                  <div className="p-1.5 xs:p-2 bg-primary/10 rounded-lg text-primary">
                     <MdEmail className="size-4 xs:size-5" />
                  </div>
                  <div className="flex flex-col text-left">
                     <span className="text-sm sm:text-base font-bold text-body">
                        {menuLabels.send}
                     </span>
                     <span className="text-xs sm:text-sm text-body opacity-60">
                        {menuLabels.sendSub}
                     </span>
                  </div>
               </a>
               <button
                  type="button"
                  className="w-full flex items-center gap-3 xs:gap-4 px-4 xs:px-6 py-3 xs:py-4 hover:bg-surface transition-all duration-300 hover:scale-[1.01] active:scale-95"
                  onClick={handleCopyEmail}
               >
                  <div className="p-1.5 xs:p-2 bg-surface rounded-lg text-body border border-subtle">
                     <MdContentCopy className="size-4 xs:size-5" />
                  </div>
                  <div className="flex flex-col text-left overflow-hidden">
                     <span className="text-sm sm:text-base font-bold text-body">
                        {menuLabels.copy}
                     </span>
                     <span className="text-xs sm:text-sm text-body opacity-60 truncate w-full">
                        {PROFESSIONAL_LINKS.email}
                     </span>
                  </div>
               </button>
            </div>
         )}
      </div>
   );
};

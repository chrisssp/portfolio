"use client";

import { useEffect, useRef, useState } from "react";
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
   const menuRef = useRef<HTMLDivElement>(null);

   const handleCopyEmail = (e?: React.MouseEvent) => {
      e?.stopPropagation();
      navigator.clipboard.writeText(PROFESSIONAL_LINKS.email);
      setCopied(true);
      setShowEmailMenu(false);
      setTimeout(() => setCopied(false), 2000);
   };

   // Prevent scrolling when menu is open on mobile
   useEffect(() => {
      if (showEmailMenu && window.innerWidth < 1024) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "unset";
      }
      return () => {
         document.body.style.overflow = "unset";
      };
   }, [showEmailMenu]);

   // Notify parent about state changes
   useEffect(() => {
      onOpenChange?.(showEmailMenu);
   }, [showEmailMenu, onOpenChange]);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
         ) {
            setShowEmailMenu(false);
         }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
         document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   const alignmentClasses =
      align === "right" ? "lg:right-0 lg:left-auto" : "lg:left-0 lg:right-auto";

   return (
      <div className={`relative ${className}`} ref={menuRef}>
         <Button
            variant={variant}
            icon={
               copied ? <MdCheck className={checkmarkClassName} /> : <MdEmail />
            }
            className={`w-auto ${buttonClassName}`}
            onClick={() => setShowEmailMenu(!showEmailMenu)}
         >
            {copied ? menuLabels.copied : label}
            <MdArrowDropDown
               className={`ml-0.5 size-4 sm:size-5 transition-transform duration-300 ${showEmailMenu ? "rotate-180" : ""}`}
            />
         </Button>

         {showEmailMenu && (
            <>
               {/* Backdrop for mobile to focus on the centered menu */}
               <div
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] lg:hidden"
                  onClick={() => setShowEmailMenu(false)}
               />

               <div
                  className={`
                  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  lg:absolute lg:top-full lg:translate-x-0 lg:translate-y-0 
                  ${alignmentClasses}
                  mt-2 bg-page border border-subtle rounded-2xl shadow-2xl 
                  z-[10000] min-w-[260px] xs:min-w-[300px] overflow-hidden 
                  animate-in fade-in zoom-in-95 duration-200"
               `}
               >
                  <a
                     href={`mailto:${PROFESSIONAL_LINKS.email}`}
                     className="flex items-center gap-3 xs:gap-4 px-4 xs:px-6 py-3 xs:py-4 hover:bg-surface transition-colors border-b border-subtle"
                     onClick={() => setShowEmailMenu(false)}
                  >
                     <div className="p-1.5 xs:p-2 bg-primary/10 rounded-lg text-primary">
                        <MdEmail className="size-4 xs:size-5" />
                     </div>
                     <div className="flex flex-col text-left">
                        <span className="text-[13px] xs:text-[15px] font-bold text-body">
                           {menuLabels.send}
                        </span>
                        <span className="text-[10px] xs:text-[12px] text-body opacity-60">
                           {menuLabels.sendSub}
                        </span>
                     </div>
                  </a>
                  <button
                     type="button"
                     className="w-full flex items-center gap-3 xs:gap-4 px-4 xs:px-6 py-3 xs:py-4 hover:bg-surface transition-colors"
                     onClick={handleCopyEmail}
                  >
                     <div className="p-1.5 xs:p-2 bg-surface rounded-lg text-body border border-subtle">
                        <MdContentCopy className="size-4 xs:size-5" />
                     </div>
                     <div className="flex flex-col text-left overflow-hidden">
                        <span className="text-[13px] xs:text-[15px] font-bold text-body">
                           {menuLabels.copy}
                        </span>
                        <span className="text-[10px] xs:text-[12px] text-body opacity-60 truncate w-full">
                           {PROFESSIONAL_LINKS.email}
                        </span>
                     </div>
                  </button>
               </div>
            </>
         )}
      </div>
   );
};

"use client";

import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { SectionContainer } from "../atoms/SectionContainer";
import { PROFESSIONAL_LINKS } from "@/config/links";
import { useState, useRef, useEffect } from "react";
import { MdCheck, MdContentCopy, MdEmail, MdArrowDropDown } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

interface CTAProps {
   dict: Dictionary;
}

export const CTA = ({ dict }: CTAProps) => {
   const [copied, setCopied] = useState(false);
   const [showEmailMenu, setShowEmailMenu] = useState(false);
   const menuRef = useRef<HTMLDivElement>(null);

   const handleCopyEmail = (e?: React.MouseEvent) => {
      e?.stopPropagation();
      navigator.clipboard.writeText(PROFESSIONAL_LINKS.email);
      setCopied(true);
      setShowEmailMenu(false);
      setTimeout(() => setCopied(false), 2000);
   };

   // Close menu when clicking outside
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShowEmailMenu(false);
         }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   return (
      <SectionContainer 
         className="bg-page" 
         paddingY="py-12 xs:py-16 lg:py-[120px]"
         innerClassName="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 xs:gap-10 md:gap-24"
      >
         <div className="flex flex-col gap-4 max-w-[896px] text-left">
            <Typography variant="section">
               {dict.cta.title}
            </Typography>
            <Typography variant="body" className="opacity-90 text-pretty">
               {dict.cta.description}
            </Typography>
         </div>
         
         <div className="flex flex-col xs:flex-row gap-4 w-full lg:w-auto items-center">
            {/* Botón Principal: LinkedIn (Conexión directa) */}
            <a 
               href={PROFESSIONAL_LINKS.linkedin} 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-full lg:w-auto"
            >
               <Button 
                  variant="primary" 
                  className="w-full lg:w-auto !px-8"
                  icon={<FaLinkedin />}
               >
                  {dict.cta.actions.talk}
               </Button>
            </a>

            {/* Botón de Email Inteligente con Dropdown */}
            <div className="relative w-full lg:w-auto" ref={menuRef}>
               <Button 
                  variant="outline" 
                  className={`w-full lg:w-auto min-w-[180px] transition-all ${showEmailMenu ? 'bg-surface shadow-inner' : ''}`}
                  onClick={() => setShowEmailMenu(!showEmailMenu)}
                  icon={copied ? <MdCheck className="text-green-500" /> : <MdEmail />}
               >
                  {copied ? "Copied!" : "Email"}
                  <MdArrowDropDown className={`ml-1 size-5 transition-transform duration-300 ${showEmailMenu ? 'rotate-180' : ''}`} />
               </Button>

               {showEmailMenu && (
                  <div className="absolute bottom-full lg:bottom-auto lg:top-full left-0 right-0 mb-2 lg:mb-0 lg:mt-2 bg-page border border-subtle rounded-2xl shadow-xl z-20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                     <a 
                        href={`mailto:${PROFESSIONAL_LINKS.email}`}
                        className="flex items-center gap-3 px-5 py-4 hover:bg-surface transition-colors border-b border-subtle"
                        onClick={() => setShowEmailMenu(false)}
                     >
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                           <MdEmail className="size-5" />
                        </div>
                        <div className="flex flex-col text-left">
                           <span className="text-[14px] font-bold text-body">Send email</span>
                           <span className="text-[11px] text-slate-500">Open your mail app</span>
                        </div>
                     </a>
                     <button 
                        className="w-full flex items-center gap-3 px-5 py-4 hover:bg-surface transition-colors"
                        onClick={handleCopyEmail}
                     >
                        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-body">
                           <MdContentCopy className="size-5" />
                        </div>
                        <div className="flex flex-col text-left">
                           <span className="text-[14px] font-bold text-body">Copy address</span>
                           <span className="text-[11px] text-slate-500">{PROFESSIONAL_LINKS.email}</span>
                        </div>
                     </button>
                  </div>
               )}
            </div>
         </div>
      </SectionContainer>
   );
};

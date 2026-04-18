"use client";

import Image from "next/image";
import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdDescription, MdArrowDropDown, MdContentCopy, MdCheck } from "react-icons/md";
import { SectionContainer } from "../atoms/SectionContainer";
import { PROFESSIONAL_LINKS } from "@/config/links";
import { useState, useRef, useEffect } from "react";

interface HeroProps {
   dict: Dictionary;
}

export const Hero = ({ dict }: HeroProps) => {
   const profileImg = "/assets/images/profile/me.png";
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
      <SectionContainer className="bg-surface" innerClassName="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
         <div className="flex flex-col gap-8 md:gap-12 max-w-[760px] order-2 lg:order-1">
            <div className="flex flex-col gap-6 md:gap-8 text-left">
               <div className="flex flex-col gap-2 md:gap-4">
                  <Typography variant="hero">
                     Christian Serrano
                  </Typography>
                  <Typography variant="hero-sub" className="text-primary">
                     {dict.hero.role}
                  </Typography>
               </div>
               <Typography variant="body">
                  {dict.hero.description}
               </Typography>
            </div>

            <div className="flex flex-wrap justify-start gap-3 md:gap-4">
               <a href={dict.hero.actions.cvLink} download target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" icon={<MdDescription />} className="!px-3 xs:!px-4 sm:!px-6 !py-2 sm:!py-3 !text-[14px] sm:!text-[16px]">
                     {dict.hero.actions.cv}
                  </Button>
               </a>
               <a href={PROFESSIONAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" icon={<FaGithub />} className="!px-3 xs:!px-4 sm:!px-6 !py-2 sm:!py-3 !text-[14px] sm:!text-[16px]">
                     {dict.hero.actions.github}
                  </Button>
               </a>
               <a href={PROFESSIONAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" icon={<FaLinkedin />} className="!px-3 xs:!px-4 sm:!px-6 !py-2 sm:!py-3 !text-[14px] sm:!text-[16px]">
                     {dict.hero.actions.linkedin}
                  </Button>
               </a>
               
               {/* Smart Email Button */}
               <div className="relative" ref={menuRef}>
                  <Button 
                     variant="primary" 
                     icon={copied ? <MdCheck className="text-body" /> : <MdEmail />} 
                     className="!px-3 xs:!px-4 sm:!px-6 !py-2 sm:!py-3 !text-[14px] sm:!text-[16px]"
                     onClick={() => setShowEmailMenu(!showEmailMenu)}
                  >
                     {copied ? "Copied!" : dict.hero.actions.email}
                     <MdArrowDropDown className={`ml-1 size-5 transition-transform duration-300 ${showEmailMenu ? 'rotate-180' : ''}`} />
                  </Button>

                  {showEmailMenu && (
                     <div className="absolute top-full left-0 mt-2 bg-page border border-subtle rounded-2xl shadow-xl z-[100] min-w-[240px] xs:min-w-[280px] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        <a 
                           href={`mailto:${PROFESSIONAL_LINKS.email}`}
                           className="flex items-center gap-3 px-4 py-3 hover:bg-surface transition-colors border-b border-subtle"
                           onClick={() => setShowEmailMenu(false)}
                        >
                           <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
                              <MdEmail className="size-4" />
                           </div>
                           <div className="flex flex-col text-left">
                              <span className="text-[13px] font-bold text-body">Send email</span>
                              <span className="text-[10px] text-slate-500">Open mail app</span>
                           </div>
                        </a>
                        <button 
                           className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface transition-colors"
                           onClick={handleCopyEmail}
                        >
                           <div className="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-body">
                              <MdContentCopy className="size-4" />
                           </div>
                           <div className="flex flex-col text-left overflow-hidden">
                              <span className="text-[13px] font-bold text-body">Copy address</span>
                              <span className="text-[10px] text-slate-500 truncate w-full">{PROFESSIONAL_LINKS.email}</span>
                           </div>
                        </button>
                     </div>
                  )}
               </div>
            </div>
         </div>

         <div className="relative size-[280px] sm:size-[320px] lg:size-[360px] rounded-full border-3 border-subtle overflow-hidden bg-page shrink-0 shadow-xl hover:scale-105 transition-transform duration-500 order-1 lg:order-2">
            <Image 
               src={profileImg} 
               alt="Christian Serrano" 
               fill
               className="object-cover"
               priority
               unoptimized
            />
         </div>
      </SectionContainer>
   );
};

"use client";

import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { SectionContainer } from "../atoms/SectionContainer";
import { PROFESSIONAL_LINKS } from "@/config/links";
import { useState } from "react";
import { MdCheck, MdContentCopy } from "react-icons/md";

interface CTAProps {
   dict: Dictionary;
}

export const CTA = ({ dict }: CTAProps) => {
   const [copied, setCopied] = useState(false);

   const handleCopyEmail = () => {
      navigator.clipboard.writeText(PROFESSIONAL_LINKS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
   };

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
         
         <div className="flex flex-col xs:flex-row gap-4 w-full lg:w-auto">
            <a href={`mailto:${PROFESSIONAL_LINKS.email}`} className="w-full lg:w-auto">
               <Button 
                  variant="primary" 
                  className="w-full lg:w-auto"
               >
                  {dict.cta.actions.talk}
               </Button>
            </a>
            <Button 
               variant="outline" 
               className="w-full lg:w-auto min-w-[160px]"
               onClick={handleCopyEmail}
               icon={copied ? <MdCheck className="text-green-500" /> : <MdContentCopy />}
            >
               {copied ? (typeof window !== 'undefined' && window.innerWidth < 640 ? "Copied!" : dict.cta.actions.copy) : dict.cta.actions.copy}
            </Button>
         </div>
      </SectionContainer>
   );
};

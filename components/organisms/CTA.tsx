"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { PROFESSIONAL_LINKS } from "@/config/links";
import type { Dictionary } from "@/i18n/types";
import { Button } from "../atoms/Button";
import { SectionContainer } from "../atoms/SectionContainer";
import { Typography } from "../atoms/Typography";
import { SmartEmailButton } from "../molecules/SmartEmailButton";

interface CTAProps {
   dict: Dictionary;
   projectTitle?: string;
}

export const CTA = ({ dict, projectTitle }: CTAProps) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const description = projectTitle
      ? dict.cta.projectDescription.replace("{project}", projectTitle)
      : dict.cta.description;

   return (
      <SectionContainer
         className={`bg-page transition-all duration-300 ${isMenuOpen ? "z-[100]" : "z-10"}`}
         paddingY="py-12 xs:py-16 lg:py-[120px]"
         innerClassName="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 xs:gap-10 md:gap-24"
      >
         <div className="flex flex-col gap-4 max-w-[896px] text-left">
            <Typography variant="section">{dict.cta.title}</Typography>
            <Typography variant="body" className="opacity-90 text-pretty">
               {description}
            </Typography>
         </div>

         {/* Contenedor con flex-wrap en móvil y col-fit en escritorio para anchos iguales */}
         <div className="flex flex-wrap lg:flex-col items-center lg:items-stretch gap-3 xs:gap-4 w-full lg:w-fit lg:min-w-[220px]">
            {/* Botón Principal: WhatsApp */}
            <a
               href={PROFESSIONAL_LINKS.whatsapp}
               target="_blank"
               rel="noopener noreferrer"
               className="w-auto lg:w-full"
            >
               <Button
                  variant="primary"
                  className="w-full !px-5 xs:!px-8 bg-[#25D366] hover:bg-[#20ba56] border-[#25D366] text-primary-contrast"
                  icon={<FaWhatsapp className="size-5 text-primary-contrast" />}
               >
                  {dict.cta.actions.talk}
               </Button>
            </a>

            {/* Botón de Email Inteligente adaptado al ancho del padre en escritorio */}
            <SmartEmailButton
               label={dict.hero.actions.email}
               menuLabels={dict.hero.actions.emailMenu}
               variant="outline"
               align="right"
               checkmarkClassName="text-primary"
               className="w-auto lg:w-full"
               buttonClassName="lg:w-full"
               onOpenChange={setIsMenuOpen}
            />
         </div>
      </SectionContainer>
   );
};

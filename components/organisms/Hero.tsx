"use client";

import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { PROFESSIONAL_LINKS } from "@/config/links";
import type { Dictionary } from "@/i18n/types";
import { Button } from "../atoms/Button";
import { SectionContainer } from "../atoms/SectionContainer";
import { Typography } from "../atoms/Typography";
import { SmartEmailButton } from "../molecules/SmartEmailButton";

interface HeroProps {
   dict: Dictionary;
}

export const Hero = ({ dict }: HeroProps) => {
   const profileImg = "/assets/images/profile/me.png";
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <SectionContainer
         className={`bg-surface transition-all duration-300 ${isMenuOpen ? "z-[100]" : "z-10"}`}
         innerClassName="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24"
      >
         <div className="flex flex-col gap-8 md:gap-12 max-w-[760px] order-2 lg:order-1">
            <div className="flex flex-col gap-6 md:gap-8 text-left">
               <div className="flex flex-col gap-2 md:gap-4">
                  <Typography variant="hero">Christian Serrano</Typography>
                  <Typography variant="hero-sub" className="text-primary">
                     {dict.hero.role}
                  </Typography>
               </div>
               <Typography variant="body">{dict.hero.description}</Typography>
            </div>

            <div className="flex flex-wrap justify-start gap-3 md:gap-4">
               <a
                  href={dict.hero.actions.cvLink}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Button
                     variant="primary"
                     icon={<MdDescription />}
                     className="!px-3 xs:!px-4 sm:!px-6 !py-2 sm:!py-3 !text-[14px] sm:!text-[16px]"
                  >
                     {dict.hero.actions.cv}
                  </Button>
               </a>
               <a
                  href={PROFESSIONAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Button
                     variant="primary"
                     icon={<FaGithub />}
                     className="!px-3 xs:!px-4 sm:!px-6 !py-2 sm:!py-3 !text-[14px] sm:!text-[16px]"
                  >
                     {dict.hero.actions.github}
                  </Button>
               </a>
               <a
                  href={PROFESSIONAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Button
                     variant="primary"
                     icon={<FaLinkedin />}
                     className="!px-3 xs:!px-4 sm:!px-6 !py-2 sm:!py-3 !text-[14px] sm:!text-[16px]"
                  >
                     {dict.hero.actions.linkedin}
                  </Button>
               </a>

               <SmartEmailButton
                  label={dict.hero.actions.email}
                  menuLabels={dict.hero.actions.emailMenu}
                  variant="primary"
                  checkmarkClassName="text-primary-contrast"
                  className="w-auto"
                  onOpenChange={setIsMenuOpen}
               />
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

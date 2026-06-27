"use client";

import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { PROFESSIONAL_LINKS } from "@/config/links";
import type { Dictionary } from "@/i18n/types";
import { AnimatedSection } from "../atoms/AnimatedSection";
import { Button } from "../atoms/Button";
import { SectionContainer } from "../atoms/SectionContainer";
import { Tooltip } from "../atoms/Tooltip";
import { Typewriter } from "../atoms/Typewriter";
import { Typography } from "../atoms/Typography";
import { SmartEmailButton } from "../molecules/SmartEmailButton";

interface HeroProps {
   dict: Dictionary;
}

export const Hero = ({ dict }: HeroProps) => {
   const profileImg = "/assets/images/profile/me.webp";
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <SectionContainer
         className={`bg-surface transition-all duration-300 ${isMenuOpen ? "z-100" : "z-10"}`}
         innerClassName="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
      >
         <div className="flex flex-col gap-8 md:gap-12 w-full max-w-190 order-2 lg:order-1">
            <div className="flex flex-col gap-6 md:gap-8 text-left">
               {/* Title & role — appear first */}
               <AnimatedSection
                  variant="fade-up"
                  delay={100}
                  duration="duration-700"
               >
                  <div className="flex flex-col gap-2 md:gap-4">
                     <Typography
                        variant="hero"
                        className="hero-shimmer animate-shimmer motion-reduce:bg-none motion-reduce:text-body"
                     >
                        Christian Serrano
                     </Typography>
                     <Typewriter
                        words={dict.hero.roles}
                        typingSpeed={75}
                        deletingSpeed={35}
                        pauseDuration={2200}
                        as="p"
                        className="text-lg md:text-4xl lg:text-5xl leading-tight font-bold text-primary"
                     />
                  </div>
               </AnimatedSection>

               {/* Stats badges — 3 rows scroll en mobile, wrap en desktop */}
               <style>{`
                   @media (max-width: 1023px) {
                      .hero-stats-scroll {
                         -webkit-mask-image: linear-gradient(to right, black 88%, transparent 100%);
                         mask-image: linear-gradient(to right, black 88%, transparent 100%);
                      }
                   }
                `}</style>
               <AnimatedSection
                  variant="fade-up"
                  delay={250}
                  duration="duration-500"
                  className="w-full min-w-0"
               >
                  <div className="hero-stats-scroll w-full overflow-x-auto scrollbar-hide lg:overflow-visible">
                     <div className="group grid grid-rows-3 grid-flow-col gap-2 w-max lg:w-auto lg:grid-rows-none lg:flex lg:flex-wrap lg:gap-3">
                        {dict.hero.stats.map((stat) => (
                           <Tooltip
                              key={stat.label}
                              content={stat.tooltip}
                              align="right"
                              direction="center"
                           >
                              <div className="cursor-default transition-opacity duration-200 group-hover:opacity-40 hover:!opacity-100">
                                 <span className="inline-flex items-baseline gap-1.5 px-4 py-2 rounded-full bg-surface border-2 border-primary/20 shadow-sm text-sm leading-snug transition-all duration-200 ease-out hover:-translate-y-1 whitespace-nowrap">
                                    <Typography
                                       variant="small"
                                       as="span"
                                       weight="bold"
                                       className="text-primary"
                                    >
                                       {stat.value}
                                    </Typography>
                                    <Typography
                                       variant="small"
                                       as="span"
                                       className="text-secondary"
                                    >
                                       {stat.label}
                                    </Typography>
                                 </span>
                              </div>
                           </Tooltip>
                        ))}
                     </div>
                  </div>
               </AnimatedSection>
            </div>

            {/* Buttons — third */}
            <AnimatedSection
               variant="fade-up"
               delay={800}
               duration="duration-700"
            >
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
                        className="px-3! xs:px-4! sm:px-6! py-2! sm:py-3! text-sm! sm:text-base!"
                        ariaLabel={dict.hero.actions.cv}
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
                        className="px-3! xs:px-4! sm:px-6! py-2! sm:py-3! text-sm! sm:text-base!"
                        ariaLabel="GitHub"
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
                        className="px-3! xs:px-4! sm:px-6! py-2! sm:py-3! text-sm! sm:text-base!"
                        ariaLabel="LinkedIn"
                     >
                        {dict.hero.actions.linkedin}
                     </Button>
                  </a>
                  <a
                     href={PROFESSIONAL_LINKS.youtube}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Button
                        variant="primary"
                        icon={<FaYoutube />}
                        className="px-3! xs:px-4! sm:px-6! py-2! sm:py-3! text-sm! sm:text-base!"
                        ariaLabel={dict.hero.actions.youtube}
                     >
                        {dict.hero.actions.youtube}
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
            </AnimatedSection>
         </div>

         {/* Profile image — slides in from the right on desktop */}
         <AnimatedSection
            variant="fade-left"
            delay={150}
            duration="duration-900"
            className="order-1 lg:order-2 shrink-0"
         >
            <Tooltip
               content={dict.hero.description}
               align="center"
               direction="down"
            >
               <div className="relative size-70 sm:size-80 lg:size-90 rounded-full border-3 border-subtle overflow-hidden bg-page shadow-xl hover:scale-[1.02] transition-all duration-500 animate-float motion-reduce:animate-none">
                  <Image
                     src={profileImg}
                     alt="Christian Serrano"
                     fill
                     className="object-cover"
                     priority
                     sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                  />
               </div>
            </Tooltip>
         </AnimatedSection>
      </SectionContainer>
   );
};

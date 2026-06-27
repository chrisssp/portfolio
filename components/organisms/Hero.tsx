"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
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

   // Badge tooltip: JS state + portal to body (escapes AnimatedSection's transform stacking context)
   const [activeBadge, setActiveBadge] = useState<{
      label: string;
      description: string;
      top: number;
      left: number;
   } | null>(null);

   const showBadgeTooltip = useCallback(
      (stat: (typeof dict.hero.stats)[0], e: React.MouseEvent<HTMLElement>) => {
         const rect = e.currentTarget.getBoundingClientRect();
         setActiveBadge({
            label: stat.label,
            description: stat.description,
            top: rect.top + rect.height / 2,
            left: rect.right, // right edge of badge → tooltip appears to the right
         });
      },
      [],
   );
   const hideBadgeTooltip = useCallback(() => setActiveBadge(null), []);

   return (
      <SectionContainer
         className={`bg-surface transition-all duration-300 ${isMenuOpen ? "z-100" : "z-10"}`}
         innerClassName="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24"
      >
         <div className="flex flex-col gap-8 md:gap-12 max-w-190 order-2 lg:order-1">
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

               {/* Stats badges — JS hover + portal to body for correct stacking */}
               <div className="flex flex-wrap gap-3">
                  {dict.hero.stats.map((stat, i) => {
                     const isActive = activeBadge?.label === stat.label;
                     const isDimmed = activeBadge !== null && !isActive;
                     return (
                        <AnimatedSection
                           key={stat.label}
                           variant="fade-up"
                           delay={250 + i * 60}
                           duration="duration-500"
                        >
                           <div
                              onMouseEnter={(e) => showBadgeTooltip(stat, e)}
                              onMouseLeave={hideBadgeTooltip}
                              className="relative cursor-default"
                           >
                              <span
                                 className={`inline-flex items-baseline gap-1.5 px-4 py-2 rounded-full bg-surface border border-subtle shadow-sm text-sm leading-snug 
                                    transition-all duration-200 ease-out
                                    ${isDimmed ? "opacity-35" : "opacity-100"}
                                    hover:-translate-y-1`}
                              >
                                 <span className="font-bold text-primary whitespace-nowrap">
                                    {stat.value}
                                 </span>
                                 <span className="text-secondary whitespace-nowrap">
                                    {stat.label}
                                 </span>
                              </span>

                              {/* Portal tooltip — escapes AnimatedSection stacking context */}
                              {activeBadge?.label === stat.label &&
                                 createPortal(
                                    <div
                                       style={{
                                          position: "fixed",
                                          top: activeBadge.top,
                                          left: activeBadge.left,
                                       }}
                                       className="z-[99999] -translate-y-1/2 ml-3 pointer-events-none"
                                    >
                                       <div className="bg-surface/80 backdrop-blur-sm border border-subtle rounded-xl px-4 py-3 shadow-lg w-max max-w-[280px]">
                                          <Typography
                                             variant="small"
                                             weight="normal"
                                             className="leading-relaxed"
                                          >
                                             {activeBadge.description}
                                          </Typography>
                                       </div>
                                    </div>,
                                    document.body,
                                 )}
                           </div>
                        </AnimatedSection>
                     );
                  })}
               </div>
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
               align="left"
               direction="center"
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

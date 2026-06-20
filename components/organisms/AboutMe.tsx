"use client";

import Image from "next/image";
import type React from "react";
import { MdPerson } from "react-icons/md";
import type { Dictionary } from "@/i18n/types";
import { AnimatedSection } from "../atoms/AnimatedSection";
import { SectionContainer } from "../atoms/SectionContainer";
import { Tooltip } from "../atoms/Tooltip";
import { Typography } from "../atoms/Typography";

interface AboutMeProps {
   dict: Dictionary;
}

export const AboutMe = ({ dict }: AboutMeProps) => {
   const img1 = "/assets/images/about/midudev.webp";
   const img2 = "/assets/images/about/mouredev.webp";

   return (
      <SectionContainer
         id="about"
         className="bg-surface"
         innerClassName="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24"
      >
         {/* Text content — slides in from left */}
         <AnimatedSection
            variant="fade-right"
            duration="duration-700"
            className="flex flex-col gap-10 md:gap-12 max-w-160"
         >
            {/* About Me Text */}
            <div className="flex flex-col gap-6">
               <div className="flex gap-4 md:gap-6 items-center">
                  <MdPerson className="size-8 text-body" />
                  <Typography variant="section">{dict.about.title}</Typography>
               </div>
               <div className="flex flex-col gap-3">
                  <Typography variant="body">{dict.about.p1}</Typography>
                  <Typography variant="body">{dict.about.p2}</Typography>
                  <Typography variant="body">
                     {dict.about.philosophy}
                     <span className="font-bold italic">
                        {dict.about.quote}
                     </span>
                  </Typography>
               </div>
            </div>

            {/* Academic Background */}
            <div className="flex flex-col gap-6 md:gap-8">
               <div className="flex flex-col gap-2">
                  <Typography variant="project">
                     {dict.about.educationTitle}
                  </Typography>
                  <Typography variant="body" className="font-medium">
                     {dict.about.education[0].institution}
                  </Typography>
               </div>
               <div className="flex flex-col gap-4">
                  {dict.about.education.map((edu) => (
                     <div key={edu.degree} className="flex flex-col">
                        <Typography variant="body">
                           <span className="font-medium">{edu.degree}</span> (
                           {edu.date})
                        </Typography>
                        {edu.achievement && (
                           <ul className="list-disc ml-6 mt-1">
                              <li>
                                 <Typography variant="body" as="span">
                                    {edu.achievement}.
                                 </Typography>
                              </li>
                           </ul>
                        )}
                     </div>
                  ))}
               </div>
            </div>

            {/* Languages */}
            <div className="flex flex-col gap-4 md:gap-5">
               <Typography variant="project">
                  {dict.about.languagesTitle}
               </Typography>
               <div className="flex flex-col gap-3">
                  {dict.about.languages.map((lang) => (
                     <div
                        key={lang.language}
                        className="flex items-center gap-2"
                     >
                        <Typography variant="body">
                           <span className="font-medium">{lang.language}:</span>{" "}
                           {lang.level}
                        </Typography>
                     </div>
                  ))}
               </div>
            </div>
         </AnimatedSection>

         {/* Circular Images — slide in from right with slight stagger */}
         <AnimatedSection
            variant="fade-left"
            delay={150}
            duration="duration-700"
            className="relative w-full max-w-100 lg:max-w-none lg:w-125 aspect-square shrink-0 mt-8 lg:mt-0"
         >
            <div className="absolute top-0 right-0 w-[66%] aspect-square">
               <Tooltip
                  content={dict.about.tooltipMidudev}
                  align="left"
                  direction="center"
                  className="w-full h-full"
               >
                  <div
                     className="relative w-full h-full rounded-full border-3 border-subtle overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 cursor-pointer animate-float motion-reduce:animate-none"
                     style={
                        {
                           animationDuration: "3s",
                           "--motion-float-distance": "-6px",
                        } as React.CSSProperties
                     }
                  >
                     <Image
                        src={img1}
                        alt="Christian Serrano at Talent Land 2025"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 260px, 330px"
                     />
                  </div>
               </Tooltip>
            </div>
            <div className="absolute bottom-0 left-0 w-[66%] aspect-square">
               <Tooltip
                  content={dict.about.tooltipMouredev}
                  align="left"
                  direction="center"
                  className="w-full h-full"
               >
                  <div
                     className="relative w-full h-full rounded-full border-3 border-subtle overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 cursor-pointer animate-float motion-reduce:animate-none"
                     style={
                        {
                           animationDuration: "5s",
                           "--motion-float-distance": "-10px",
                        } as React.CSSProperties
                     }
                  >
                     <Image
                        src={img2}
                        alt="Christian Serrano at Talent Land 2026"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 260px, 330px"
                     />
                  </div>
               </Tooltip>
            </div>
         </AnimatedSection>
      </SectionContainer>
   );
};

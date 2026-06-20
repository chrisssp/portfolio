"use client";

import { MdOpenInNew, MdWorkspacePremium } from "react-icons/md";
import type { Dictionary } from "@/i18n/types";
import { AnimatedSection } from "../atoms/AnimatedSection";
import { SectionContainer } from "../atoms/SectionContainer";
import { Typography } from "../atoms/Typography";

interface ProjectCertificatesProps {
   project: Dictionary["projects"]["items"][0];
   labels: Dictionary["projects"]["sections"];
}

export const ProjectCertificates = ({
   project,
   labels,
}: ProjectCertificatesProps) => {
   if (!project.certificates?.length) return null;

   return (
      <SectionContainer
         id="certificates"
         className="bg-surface"
         innerClassName="flex flex-col gap-12 md:gap-16"
      >
         <AnimatedSection variant="fade-up" threshold={0.2}>
            <div className="flex gap-4 md:gap-6 items-center">
               <MdWorkspacePremium className="size-8 text-body" />
               <Typography variant="section">{labels.recognitions}</Typography>
            </div>
         </AnimatedSection>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {project.certificates.map((cert, index) => (
               <AnimatedSection
                  key={cert.filePath}
                  variant="fade-up"
                  delay={index * 60}
                  threshold={0.05}
               >
                  <a
                     href={cert.filePath}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex flex-col gap-3 p-5 md:p-6 rounded-2xl border border-subtle bg-surface/50 backdrop-blur-sm h-full group transition-all duration-200 hover:border-primary/40 hover:shadow-md active:scale-[0.98]"
                  >
                     <div className="flex items-start justify-between gap-3">
                        <Typography
                           variant="body"
                           className="font-semibold leading-snug group-hover:text-primary transition-colors"
                        >
                           {cert.title}
                        </Typography>
                        <MdOpenInNew className="size-4 shrink-0 mt-1 opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all" />
                     </div>
                     {cert.issuer && (
                        <Typography
                           variant="body"
                           className="text-sm opacity-60"
                        >
                           {cert.issuer}
                        </Typography>
                     )}
                  </a>
               </AnimatedSection>
            ))}
         </div>
      </SectionContainer>
   );
};

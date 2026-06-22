"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useCallback, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { HIDDEN_TECHS } from "@/config/hidden-techs";
import { TECHNOLOGIES } from "@/config/technologies";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "../atoms/Badge";
import { Typography } from "../atoms/Typography";

interface FeatureCardProps {
   title: string;
   description: string;
   imagePath: string;
   techStack: string[];
   reverse?: boolean;
   actions?: ReactNode;
   imageClassName?: string;
   selectedTechs?: string[];
   onTechClick?: (techId: string) => void;
   /** Optional additional images for a carousel gallery. When provided with 2+
    * items, the single image becomes a navigable gallery. The first image in
    * the combined list is `imagePath` followed by these extras. */
   galleryImages?: string[];
}

export const FeatureCard = ({
   title,
   description,
   imagePath,
   techStack,
   reverse,
   actions,
   imageClassName = "bg-page",
   selectedTechs,
   onTechClick,
   galleryImages,
}: FeatureCardProps) => {
   const [badgeRef, badgesVisible] = useScrollReveal<HTMLDivElement>({
      threshold: 0.1,
   });

   // --- Carousel ---
   const allImages = galleryImages?.length
      ? [imagePath, ...galleryImages]
      : [imagePath];
   const hasCarousel = allImages.length > 1;
   const [currentIndex, setCurrentIndex] = useState(0);

   // --- Image fallback — placeholder is ALWAYS the base layer ---
   const [erroredImages, setErroredImages] = useState<Set<string>>(new Set());
   const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
   const markErrored = useCallback((src: string) => {
      setErroredImages((prev) => {
         if (prev.has(src)) return prev;
         const next = new Set(prev);
         next.add(src);
         return next;
      });
   }, []);
   const markLoaded = useCallback((src: string) => {
      setLoadedImages((prev) => {
         if (prev.has(src)) return prev;
         const next = new Set(prev);
         next.add(src);
         return next;
      });
   }, []);

   const fallbackTech = techStack.map((t) => TECHNOLOGIES[t]).find(Boolean);
   const fallbackColor = fallbackTech?.bgColor ?? "#1e1e2e";
   const fallbackWord =
      title.split(/\s+/).length > 1
         ? title
              .split(/\s+/)
              .slice(0, 2)
              .map((w) => w.charAt(0).toUpperCase())
              .join("")
         : title.slice(0, 2).toUpperCase();

   const goTo = useCallback(
      (index: number) => {
         setCurrentIndex(
            ((index % allImages.length) + allImages.length) % allImages.length,
         );
      },
      [allImages.length],
   );

   const goNext = useCallback(
      () => goTo(currentIndex + 1),
      [goTo, currentIndex],
   );
   const goPrev = useCallback(
      () => goTo(currentIndex - 1),
      [goTo, currentIndex],
   );

   // --- Touch / swipe ---
   const touchStartX = useRef(0);
   const touchEndX = useRef(0);

   const handleTouchStart = useCallback((e: React.TouchEvent) => {
      touchEndX.current = 0;
      touchStartX.current = e.touches[0].clientX;
   }, []);

   const handleTouchMove = useCallback((e: React.TouchEvent) => {
      touchEndX.current = e.touches[0].clientX;
   }, []);

   const handleTouchEnd = useCallback(() => {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
         if (diff > 0) goNext();
         else goPrev();
      }
   }, [goNext, goPrev]);

   // --- Keyboard navigation ---
   const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
         if (e.key === "ArrowLeft") {
            e.preventDefault();
            goPrev();
         } else if (e.key === "ArrowRight") {
            e.preventDefault();
            goNext();
         }
      },
      [goNext, goPrev],
   );

   return (
      <div
         className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >
         {/* Content Side */}
         <div className="flex-1 flex flex-col gap-6 md:gap-8 w-full lg:max-w-150">
            <div className="flex flex-col gap-3 md:gap-4">
               <Typography variant="project">{title}</Typography>
               <Typography variant="body" className="opacity-90 text-pretty">
                  {description}
               </Typography>
            </div>

            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
               {/* Badges */}
               <div ref={badgeRef} className="flex flex-wrap gap-2 md:gap-3">
                  {techStack
                     .filter((t) => !HIDDEN_TECHS.has(t))
                     .map((techId) => {
                        const tech = TECHNOLOGIES[techId];
                        if (!tech) return null;
                        const isInteractive = !!onTechClick;
                        const isSelected = selectedTechs?.includes(techId);
                        return (
                           <div
                              key={techId}
                              className={`${badgesVisible ? "animate-bounce-in" : "opacity-0"} motion-reduce:animate-none motion-reduce:opacity-100`}
                           >
                              <Badge
                                 tech={tech}
                                 interactive={isInteractive}
                                 selected={isSelected}
                                 hasActiveFilter={!!selectedTechs?.length}
                                 onClick={() => onTechClick?.(techId)}
                              />
                           </div>
                        );
                     })}
               </div>

               {/* Custom Actions (Buttons) */}
               {actions && (
                  <div className="flex flex-wrap gap-3">{actions}</div>
               )}
            </div>
         </div>

         {/* Image Side */}
         {/* biome-ignore lint/a11y/noStaticElementInteractions: carousel needs keyboard/touch */}
         {/* biome-ignore lint/a11y/useAriaPropsSupportedByRole: aria-label is valid on role=region */}
         <div
            className={`w-full lg:w-157.5 aspect-630/350 rounded-2xl border border-subtle relative overflow-hidden shrink-0 shadow-lg group ${imageClassName}`}
            onTouchStart={hasCarousel ? handleTouchStart : undefined}
            onTouchMove={hasCarousel ? handleTouchMove : undefined}
            onTouchEnd={hasCarousel ? handleTouchEnd : undefined}
            onKeyDown={hasCarousel ? handleKeyDown : undefined}
            tabIndex={hasCarousel ? 0 : undefined}
            role={hasCarousel ? "region" : undefined}
            aria-label={hasCarousel ? `${title} image gallery` : undefined}
         >
            {/* Stacked images — only current is visible */}
            {allImages.map((src, i) => {
               const isCurrent = i === currentIndex;
               const errored = erroredImages.has(src);
               const loaded = loadedImages.has(src);
               return (
                  <div
                     key={src}
                     className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                        isCurrent ? "opacity-100" : "opacity-0"
                     }`}
                  >
                     {/* Placeholder — ALWAYS rendered as the base layer */}
                     <div
                        className="absolute inset-0"
                        style={{
                           background: `linear-gradient(135deg, ${fallbackColor}, color-mix(in srgb, ${fallbackColor} 60%, #1e1e2e))`,
                        }}
                     >
                        <span
                           aria-hidden="true"
                           className="absolute inset-0 flex items-center justify-center select-none font-bold tracking-tight opacity-30"
                           style={{
                              fontSize: "clamp(3rem, 12vw, 6rem)",
                              lineHeight: 1,
                              color: "#fff",
                           }}
                        >
                           {fallbackWord}
                        </span>
                     </div>

                     {/* Actual image — only rendered if it hasn't errored */}
                     {!errored && (
                        <Image
                           src={src}
                           alt={`${title}${i > 0 ? ` — ${i + 1}` : ""}`}
                           fill
                           className={`object-cover transition-opacity duration-500 ${
                              loaded ? "opacity-100" : "opacity-0"
                           }`}
                           sizes="(max-width: 1024px) 100vw, 630px"
                           priority={i === 0}
                           onLoad={() => markLoaded(src)}
                           onError={() => markErrored(src)}
                        />
                     )}
                  </div>
               );
            })}

            {/* Prev / Next controls */}
            {hasCarousel && (
               <>
                  {/* Prev / Next: desktop only — appear on hover */}
                  <button
                     type="button"
                     onClick={goPrev}
                     aria-label="Previous image"
                     className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center size-9 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-black/70 hover:scale-110 transition-all duration-200 cursor-pointer"
                  >
                     <MdChevronLeft className="size-6" />
                  </button>
                  <button
                     type="button"
                     onClick={goNext}
                     aria-label="Next image"
                     className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center size-9 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-black/70 hover:scale-110 transition-all duration-200 cursor-pointer"
                  >
                     <MdChevronRight className="size-6" />
                  </button>

                  {/* Dot indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                     {allImages.map((src, i) => (
                        <button
                           key={src}
                           type="button"
                           onClick={() => goTo(i)}
                           aria-label={`Go to image ${i + 1}`}
                           className={`size-2 rounded-full transition-all duration-300 cursor-pointer ${
                              i === currentIndex
                                 ? "bg-white w-4"
                                 : "bg-white/50 hover:bg-white/70"
                           }`}
                        />
                     ))}
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

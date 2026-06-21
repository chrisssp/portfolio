"use client";

import { useEffect, useRef, useState } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { Button } from "@/components/atoms/Button";
import { useMobileMenu } from "@/components/contexts/MobileMenuContext";
import { useFooterVisible } from "@/components/hooks/useFooterVisible";
import type { Locale } from "@/i18n/config";
import { Typography } from "./Typography";

type Props = {
   locale?: Locale;
};

export const MusicPlayer = ({ locale = "en" }: Props) => {
   const { isOpen: isMenuOpen } = useMobileMenu();
   const isFooterVisible = useFooterVisible();
   const audioRef = useRef<HTMLAudioElement | null>(null);
   const buttonRef = useRef<HTMLButtonElement | null>(null);
   const isFadingRef = useRef(false);
   const [isPlaying, setIsPlaying] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);
   const [showTooltip, setShowTooltip] = useState(false);

   const isHidden = isMenuOpen || isFooterVisible;

   const isSpanish = locale === "es";

   const currentTrack = {
      title: "Dreamy Ambient Background Music",
      artist: "Spanac",
   };

   // --- Detect mobile (below xs breakpoint = 375px) ---

   const [isNarrow, setIsNarrow] = useState(false);

   useEffect(() => {
      const mq = window.matchMedia("(max-width: 374px)");
      const update = () => setIsNarrow(mq.matches);
      update();
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
   }, []);

   // --- Audio setup ---

   useEffect(() => {
      const audio = new Audio("/audio/ambient.mp3");
      audio.loop = true;
      audio.volume = 0.25;

      if (audio.readyState >= 3) {
         setIsLoaded(true);
      }

      const handleCanPlayThrough = () => setIsLoaded(true);
      const handleError = () => {
         setIsLoaded(false);
      };

      audio.addEventListener("canplaythrough", handleCanPlayThrough);
      audio.addEventListener("error", handleError);

      audio.load();

      audioRef.current = audio;

      return () => {
         audio.removeEventListener("canplaythrough", handleCanPlayThrough);
         audio.removeEventListener("error", handleError);
         audio.pause();
         audioRef.current = null;
      };
   }, []);

   // --- Auto-hide tooltip after 3 seconds ---

   useEffect(() => {
      if (!showTooltip) return;
      const timer = setTimeout(() => setShowTooltip(false), 3000);
      return () => clearTimeout(timer);
   }, [showTooltip]);

   // --- Play / pause ---

   const togglePlay = () => {
      const audio = audioRef.current;
      if (!audio || isFadingRef.current) return;

      if (isPlaying) {
         isFadingRef.current = true;
         const fadeInterval = setInterval(() => {
            if (audio.volume > 0.05) {
               audio.volume = Math.max(0, audio.volume - 0.05);
            } else {
               audio.pause();
               audio.volume = 0.25;
               clearInterval(fadeInterval);
               isFadingRef.current = false;
            }
         }, 50);
         setIsPlaying(false);
      } else {
         audio
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {
               setIsPlaying(false);
            });
      }

      if (isNarrow) setShowTooltip(true);
   };

   const buttonStyle = isPlaying
      ? ({
           animation: "musicPulse 3s ease-in-out infinite",
        } as React.CSSProperties)
      : undefined;

   const ariaLabel = isSpanish
      ? isPlaying
         ? "Pausar música ambiental"
         : "Reproducir música ambiental"
      : isPlaying
        ? "Pause ambient music"
        : "Play ambient music";

   return (
      <>
         <style>{`
            @keyframes musicPulse {
               0%, 100% { transform: scale(1); }
               50% { transform: scale(1.04); }
            }
         `}</style>
         <div
            className={`fixed bottom-6 xs:bottom-8 left-6 xs:left-8 z-[60] group transition-all duration-500 ease-in-out ${
               isHidden
                  ? "opacity-0 translate-y-4 pointer-events-none"
                  : "opacity-100 translate-y-0"
            }`}
         >
            <Button
               ref={buttonRef}
               variant="primary"
               circle
               icon={
                  isPlaying ? (
                     <MdMusicNote className="motion-safe:animate-pulse" />
                  ) : (
                     <MdMusicOff />
                  )
               }
               onClick={togglePlay}
               disabled={!isLoaded}
               ariaLabel={ariaLabel}
               className={`shadow-2xl transition-all duration-500 ease-in-out hover:shadow-primary/20 ${
                  !isLoaded
                     ? "bg-surface text-body/30 hover:scale-100 active:scale-100"
                     : ""
               }`}
               style={isPlaying ? buttonStyle : undefined}
            />

            <div
               className={`${
                  isNarrow
                     ? "fixed left-6 right-6 z-[62]"
                     : "absolute left-full ml-3"
               } top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-surface border border-subtle shadow-lg text-left transition-all duration-300 ${
                  showTooltip
                     ? "opacity-100 translate-x-0"
                     : "opacity-0 -translate-x-2 pointer-events-none"
               } group-hover:opacity-100 group-hover:translate-x-0`}
               style={
                  isNarrow
                     ? { top: "calc(100vh - 44px)" }
                     : { width: "max-content", maxWidth: "calc(100vw - 120px)" }
               }
            >
               {isPlaying ? (
                  <>
                     <Typography
                        variant="small"
                        as="span"
                        weight="medium"
                        className="whitespace-normal"
                     >
                        {currentTrack.title}
                        <span className="text-body/70 mx-1">·</span>
                        {currentTrack.artist}
                     </Typography>
                     <Typography
                        variant="small"
                        as="span"
                        className="block mt-0.5 opacity-70"
                     >
                        CC BY 4.0 — Spanac · Free Sounds Library
                     </Typography>
                  </>
               ) : (
                  <Typography
                     variant="small"
                     as="span"
                     weight="medium"
                     className="whitespace-nowrap"
                  >
                     {isSpanish
                        ? "Reproducir música ambiental"
                        : "Play ambient music"}
                  </Typography>
               )}
            </div>
         </div>
      </>
   );
};

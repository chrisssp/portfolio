"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import type { Locale } from "@/i18n/config";

type Props = {
   locale?: Locale;
};

export const MusicPlayer = ({ locale = "en" }: Props) => {
   const audioRef = useRef<HTMLAudioElement | null>(null);
   const buttonRef = useRef<HTMLButtonElement | null>(null);
   const isFadingRef = useRef(false);
   const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
   const isLongPress = useRef(false);
   const [isPlaying, setIsPlaying] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);
   const [tooltipPinned, setTooltipPinned] = useState(false);

   const isSpanish = locale === "es";

   const currentTrack = {
      title: "Dreamy Ambient Background Music",
      artist: "Spanac",
   };

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

   // --- Close tooltip on outside tap ---

   useEffect(() => {
      if (!tooltipPinned) return;

      const handlePointerDown = (e: PointerEvent) => {
         if (
            buttonRef.current &&
            !buttonRef.current.contains(e.target as Node)
         ) {
            setTooltipPinned(false);
         }
      };

      // Use capture phase so it fires before any click on the button
      document.addEventListener("pointerdown", handlePointerDown, true);
      return () => {
         document.removeEventListener("pointerdown", handlePointerDown, true);
      };
   }, [tooltipPinned]);

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
   };

   // --- Long-press for mobile tooltip ---

   const handleTouchStart = useCallback(() => {
      isLongPress.current = false;
      longPressTimer.current = setTimeout(() => {
         isLongPress.current = true;
         setTooltipPinned((prev) => !prev);
      }, 500);
   }, []);

   const handleTouchMove = useCallback(() => {
      if (longPressTimer.current) {
         clearTimeout(longPressTimer.current);
         longPressTimer.current = null;
      }
   }, []);

   const handleTouchEnd = useCallback((e: React.TouchEvent) => {
      if (longPressTimer.current) {
         clearTimeout(longPressTimer.current);
         longPressTimer.current = null;
      }

      if (isLongPress.current) {
         e.preventDefault();
         isLongPress.current = false;
      }
   }, []);

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
         <button
            ref={buttonRef}
            type="button"
            onClick={togglePlay}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            disabled={!isLoaded}
            className={`fixed bottom-6 xs:bottom-8 left-6 xs:left-8 z-50 p-2.5 xs:p-3 rounded-full shadow-2xl transition-all duration-500 ease-in-out group cursor-pointer border ${
               isLoaded
                  ? "bg-primary text-primary-contrast hover:scale-110 active:scale-95 hover:shadow-primary/20 border-subtle"
                  : "bg-surface text-body/30 border-subtle cursor-not-allowed"
            }`}
            style={buttonStyle}
            aria-label={ariaLabel}
         >
            {isPlaying ? (
               <MdMusicNote className="size-5 motion-safe:animate-pulse" />
            ) : (
               <MdMusicOff className="size-5" />
            )}

            <div
               className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-surface text-body text-xs font-medium border border-subtle shadow-lg text-left transition-all duration-300 max-w-[180px] xs:max-w-none ${
                  tooltipPinned
                     ? "opacity-100 translate-x-0"
                     : "opacity-0 -translate-x-2 pointer-events-none"
               } group-hover:opacity-100 group-hover:translate-x-0`}
            >
               {isPlaying ? (
                  <>
                     <span className="whitespace-normal xs:whitespace-nowrap">
                        {currentTrack.title}
                        <span className="text-body/50 mx-1">·</span>
                        {currentTrack.artist}
                     </span>
                     <span className="block text-[10px] text-body/40 leading-tight mt-0.5">
                        CC BY 4.0 — Spanac · Free Sounds Library
                     </span>
                  </>
               ) : (
                  <span className="whitespace-nowrap">
                     {isSpanish
                        ? "Reproducir música ambiental"
                        : "Play ambient music"}
                  </span>
               )}
            </div>
         </button>
      </>
   );
};

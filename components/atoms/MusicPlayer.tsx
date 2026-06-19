"use client";

import { useEffect, useRef, useState } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import type { Locale } from "@/i18n/config";

type Props = {
   locale?: Locale;
};

export const MusicPlayer = ({ locale = "en" }: Props) => {
   const audioRef = useRef<HTMLAudioElement | null>(null);
   const isFadingRef = useRef(false);
   const [isPlaying, setIsPlaying] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);

   const isSpanish = locale === "es";

   const currentTrack = {
      title: "Dreamy Ambient Background Music",
      artist: "Spanac",
   };

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

   const ariaLabel = isSpanish
      ? isPlaying
         ? "Pausar música ambiental"
         : "Reproducir música ambiental"
      : isPlaying
        ? "Pause ambient music"
        : "Play ambient music";

   return (
      <button
         type="button"
         onClick={togglePlay}
         disabled={!isLoaded}
         className={`fixed bottom-6 xs:bottom-8 left-6 xs:left-8 z-50 p-2.5 xs:p-3 rounded-full shadow-2xl transition-all duration-500 ease-in-out group cursor-pointer border ${
            isLoaded
               ? "bg-primary text-primary-contrast hover:scale-110 active:scale-95 hover:shadow-primary/20 border-subtle"
               : "bg-surface text-body/30 border-subtle cursor-not-allowed"
         }`}
         aria-label={ariaLabel}
      >
         {isPlaying ? (
            <MdMusicNote className="size-5 motion-safe:animate-pulse" />
         ) : (
            <MdMusicOff className="size-5" />
         )}

         <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-surface text-body text-xs font-medium border border-subtle opacity-0 -translate-x-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 shadow-lg">
            <span className="whitespace-nowrap">
               {isPlaying ? "♪ " : ""}
               {currentTrack.title}
               <span className="text-body/50 mx-1">·</span>
               {currentTrack.artist}
            </span>
            <span className="block text-[10px] text-body/40 leading-tight mt-0.5">
               CC BY 4.0 — Spanac · Free Sounds Library
            </span>
         </div>
      </button>
   );
};

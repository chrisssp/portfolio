"use client";

import { useCallback, useEffect, useState } from "react";

interface TypewriterProps {
   /** Array of strings to cycle through */
   words: string[];
   /** Typing speed in ms per character. Default: 80 */
   typingSpeed?: number;
   /** Deleting speed in ms per character. Default: 40 */
   deletingSpeed?: number;
   /** Pause in ms when word is fully typed. Default: 2000 */
   pauseDuration?: number;
   /** Blinking cursor character. Default: "|" */
   cursorChar?: string;
   /** HTML element to render. Default: "span" */
   as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
   className?: string;
}

type Phase = "typing" | "pausing" | "deleting";

export const Typewriter = ({
   words,
   typingSpeed = 80,
   deletingSpeed = 40,
   pauseDuration = 2000,
   cursorChar = "|",
   as: Tag = "span",
   className,
}: TypewriterProps) => {
   const [wordIndex, setWordIndex] = useState(0);
   const [charIndex, setCharIndex] = useState(0);
   const [phase, setPhase] = useState<Phase>("typing");
   const [showCursor, setShowCursor] = useState(true);
   const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

   // Detect reduced motion preference
   useEffect(() => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mq.matches);

      const handler = (e: MediaQueryListEvent) =>
         setPrefersReducedMotion(e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
   }, []);

   // Cursor blink
   useEffect(() => {
      if (prefersReducedMotion) {
         setShowCursor(false);
         return;
      }
      const interval = setInterval(() => {
         setShowCursor((prev) => !prev);
      }, 530);
      return () => clearInterval(interval);
   }, [prefersReducedMotion]);

   const displayText = words[wordIndex] ?? "";

   const tick = useCallback(() => {
      if (prefersReducedMotion) return;

      setPhase((currentPhase) => {
         const currentWord = words[wordIndex] ?? "";

         switch (currentPhase) {
            case "typing":
               if (charIndex < currentWord.length) {
                  setCharIndex((i) => i + 1);
                  return "typing";
               }
               return "pausing";

            case "pausing":
               return "deleting";

            case "deleting":
               if (charIndex > 0) {
                  setCharIndex((i) => i - 1);
                  return "deleting";
               }
               setWordIndex((i) => (i + 1) % words.length);
               return "typing";

            default:
               return "typing";
         }
      });
   }, [wordIndex, charIndex, words, prefersReducedMotion]);

   useEffect(() => {
      if (prefersReducedMotion) {
         setCharIndex(words[0]?.length ?? 0);
         return;
      }

      const speed =
         phase === "typing"
            ? typingSpeed
            : phase === "deleting"
              ? deletingSpeed
              : pauseDuration;

      const timer = setTimeout(tick, speed);
      return () => clearTimeout(timer);
   }, [
      phase,
      tick,
      typingSpeed,
      deletingSpeed,
      pauseDuration,
      words,
      prefersReducedMotion,
   ]);

   if (prefersReducedMotion) {
      return (
         <Tag className={className}>
            {displayText}
            <span className="inline-block w-[1ch]" aria-hidden="true" />
         </Tag>
      );
   }

   return (
      <Tag className={className} aria-label={words.join(", ")}>
         <span aria-live="polite" aria-atomic="true">
            {displayText.slice(0, charIndex)}
         </span>
         <span
            className={`inline-block w-[1ch] text-primary ${
               showCursor ? "opacity-100" : "opacity-0"
            } transition-opacity duration-100`}
            aria-hidden="true"
         >
            {cursorChar}
         </span>
      </Tag>
   );
};

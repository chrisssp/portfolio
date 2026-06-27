"use client";

import { useEffect, useRef, useState } from "react";

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
   /* ── Mutable refs (no re-render on change) ─────────────────────────── */
   const wordIndexRef = useRef(0);
   const charIndexRef = useRef(0);
   const phaseRef = useRef<Phase>("typing");
   const wordsRef = useRef(words);
   wordsRef.current = words; // always fresh, stable ref identity

   /* ── Only what React must re-render for ────────────────────────────── */
   const [displayText, setDisplayText] = useState("");
   const [showCursor, setShowCursor] = useState(true);
   const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

   /* ── 1. Detect reduced-motion preference (stable, fires once) ─────── */
   useEffect(() => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mq.matches);
      setShowCursor(!mq.matches);

      const handler = (e: MediaQueryListEvent) => {
         setPrefersReducedMotion(e.matches);
         setShowCursor(!e.matches);
      };
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
   }, []);

   /* ── 2. Typing loop (stable deps — never recreates timer) ─────────── */
   useEffect(() => {
      if (prefersReducedMotion) {
         setDisplayText(wordsRef.current[0] ?? "");
         return;
      }

      // Reset to start on mount
      wordIndexRef.current = 0;
      charIndexRef.current = 0;
      phaseRef.current = "typing";

      let timer: ReturnType<typeof setTimeout>;

      const tick = () => {
         const currentWords = wordsRef.current;
         const currentWord = currentWords[wordIndexRef.current] ?? "";

         switch (phaseRef.current) {
            case "typing": {
               if (charIndexRef.current < currentWord.length) {
                  charIndexRef.current += 1;
                  setDisplayText(currentWord.slice(0, charIndexRef.current));
                  timer = setTimeout(tick, typingSpeed);
               } else {
                  phaseRef.current = "pausing";
                  timer = setTimeout(tick, pauseDuration);
               }
               break;
            }

            case "pausing": {
               phaseRef.current = "deleting";
               timer = setTimeout(tick, deletingSpeed);
               break;
            }

            case "deleting": {
               if (charIndexRef.current > 0) {
                  charIndexRef.current -= 1;
                  setDisplayText(currentWord.slice(0, charIndexRef.current));
                  timer = setTimeout(tick, deletingSpeed);
               } else {
                  wordIndexRef.current =
                     (wordIndexRef.current + 1) % currentWords.length;
                  phaseRef.current = "typing";
                  timer = setTimeout(tick, typingSpeed);
               }
               break;
            }
         }
      };

      timer = setTimeout(tick, typingSpeed);
      return () => clearTimeout(timer);
   }, [prefersReducedMotion, typingSpeed, deletingSpeed, pauseDuration]);

   /* ── 3. Cursor blink (stable, isolated from typing) ───────────────── */
   useEffect(() => {
      if (prefersReducedMotion) return;
      const interval = setInterval(() => {
         setShowCursor((prev) => !prev);
      }, 530);
      return () => clearInterval(interval);
   }, [prefersReducedMotion]);

   /* ── Render ────────────────────────────────────────────────────────── */
   if (prefersReducedMotion) {
      return (
         <Tag className={className}>
            {words[0] ?? ""}
            <span className="inline-block w-[1ch]" aria-hidden="true" />
         </Tag>
      );
   }

   return (
      <Tag className={className} aria-label={words.join(", ")}>
         <span aria-live="polite" aria-atomic="true">
            {displayText}
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

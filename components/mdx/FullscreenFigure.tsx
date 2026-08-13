"use client";

import { useTheme } from "next-themes";
import {
   type ReactNode,
   useEffect,
   useRef,
   useState,
   useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { LuMaximize2, LuX } from "react-icons/lu";

const emptySubscribe = () => () => {};

export interface FullscreenFigureProps {
   src: string;
   darkSrc?: string;
   alt: string;
   caption?: string;
   children: ReactNode;
}

export function FullscreenFigure({
   src,
   darkSrc,
   alt,
   caption,
   children,
}: FullscreenFigureProps) {
   const [open, setOpen] = useState(false);
   const triggerRef = useRef<HTMLButtonElement>(null);
   const closeRef = useRef<HTMLButtonElement>(null);
   const hasOpenedRef = useRef(false);

   // The lightbox backdrop must follow the asset's designed background:
   // light-mode variants are built for a white backdrop, dark ones for a
   // dark one. `src` is either theme-resolved upstream (diagrams) or the
   // light variant; `darkSrc` (when present) switches the overlay to the
   // dark variant of the same asset.
   const { resolvedTheme } = useTheme();
   const mounted = useSyncExternalStore(
      emptySubscribe,
      () => true,
      () => false,
   );
   const isDark = mounted && resolvedTheme === "dark";
   const overlaySrc = isDark && darkSrc ? darkSrc : src;

   const openLightbox = () => setOpen(true);
   const closeLightbox = () => setOpen(false);

   // Focus management: focus the close button when the dialog opens, restore
   // focus to the trigger when it closes. The flag avoids stealing focus on
   // initial mount.
   useEffect(() => {
      if (open) {
         hasOpenedRef.current = true;
         closeRef.current?.focus();
      } else if (hasOpenedRef.current) {
         triggerRef.current?.focus();
      }
   }, [open]);

   // Scroll lock + Escape-to-close while the dialog is open. Style mutation is
   // fine in an effect; no state is set synchronously here.
   useEffect(() => {
      if (!open) return;
      document.documentElement.style.overflow = "hidden";
      const handleKeydown = (e: globalThis.KeyboardEvent) => {
         if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", handleKeydown);
      return () => {
         document.documentElement.style.overflow = "";
         document.removeEventListener("keydown", handleKeydown);
      };
   }, [open]);

   return (
      <div className="relative group">
         {/* biome-ignore lint/a11y/noStaticElementInteractions: clicking the media is a pointer convenience; the expand button is the keyboard-accessible trigger */}
         {/* biome-ignore lint/a11y/useKeyWithClickEvents: the media wrapper is not focusable; keyboard access is provided by the expand button */}
         <div onClick={openLightbox} className="cursor-zoom-in">
            {children}
         </div>
         <button
            type="button"
            ref={triggerRef}
            onClick={openLightbox}
            aria-label={`Expand image: ${alt}`}
            aria-haspopup="dialog"
            className="absolute top-2 right-2 bg-page/80 backdrop-blur border border-subtle rounded-md p-1.5 text-body/70 hover:text-primary hover:bg-surface shadow-sm transition-all opacity-0 group-hover:opacity-100 focus-visible:opacity-100 cursor-pointer"
         >
            <LuMaximize2 className="size-4" />
         </button>
         {open &&
            createPortal(
               // biome-ignore lint/a11y/useKeyWithClickEvents: backdrop click-to-close is a pointer convenience; the Escape key provides the keyboard close path
               <div
                  className={`fixed inset-0 z-[100] ${
                     isDark ? "bg-black/85" : "bg-white/95"
                  } backdrop-blur-sm flex items-center justify-center p-4`}
                  role="dialog"
                  aria-modal="true"
                  aria-label={alt}
                  onClick={(e) => {
                     if (e.target === e.currentTarget) closeLightbox();
                  }}
               >
                  <button
                     type="button"
                     ref={closeRef}
                     onClick={closeLightbox}
                     aria-label="Close"
                     className={`absolute top-4 right-4 ${
                        isDark
                           ? "bg-white/10 hover:bg-white/20 text-white"
                           : "bg-black/10 hover:bg-black/20 text-neutral-900"
                     } rounded-full p-2 transition-all cursor-pointer`}
                  >
                     <LuX className="size-5" />
                  </button>
                  <div className="max-w-full max-h-full">
                     {/* eslint-disable @next/next/no-img-element -- full-resolution preview in the lightbox overlay; intentionally not next/image (per design) */}
                     {/* biome-ignore lint/performance/noImgElement: lightbox shows the original asset at full resolution */}
                     <img
                        src={overlaySrc}
                        alt={alt}
                        className="max-w-[92vw] max-h-[86vh] w-auto h-auto object-contain rounded-lg"
                     />
                     {/* eslint-enable @next/next/no-img-element */}
                     {caption && (
                        <p
                           className={`text-center text-sm ${
                              isDark ? "text-white/70" : "text-neutral-700"
                           } italic mt-3`}
                        >
                           {caption}
                        </p>
                     )}
                  </div>
               </div>,
               document.body,
            )}
      </div>
   );
}

export default FullscreenFigure;

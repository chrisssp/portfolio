"use client";

import { useEffect, useRef, useState } from "react";
import { MdLock, MdSettings, MdVolumeOff, MdVolumeUp } from "react-icons/md";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { isSoundEnabled, setSoundEnabled } from "./chatSounds";

type Props = {
   locale: "en" | "es";
};

export function SettingsPopover({ locale }: Props) {
   const [open, setOpen] = useState(false);
   const [sound, setSound] = useState(isSoundEnabled);
   const popoverRef = useRef<HTMLDivElement>(null);
   const triggerRef = useRef<HTMLButtonElement>(null);

   const toggleSound = () => {
      const next = !sound;
      setSound(next);
      setSoundEnabled(next);
   };

   const privacyText =
      locale === "es"
         ? "El historial del chat se almacena en sessionStorage — desaparece cuando cierras la pestaña. Los mensajes se envían a la API de IA para obtener respuestas, nada se registra en nuestro servidor."
         : "Chat history is stored in sessionStorage — it disappears when you close the tab. Messages are sent to AI API for responses, nothing is logged on our server.";

   // Close on Escape
   useEffect(() => {
      if (!open) return;
      const handleKey = (e: KeyboardEvent) => {
         if (e.key === "Escape") {
            setOpen(false);
            triggerRef.current?.focus();
         }
      };
      document.addEventListener("keydown", handleKey);
      return () => document.removeEventListener("keydown", handleKey);
   }, [open]);

   // Basic focus trap: focus first focusable element on open
   useEffect(() => {
      if (!open) return;
      const el = popoverRef.current;
      if (!el) return;
      const firstFocusable = el.querySelector<HTMLElement>(
         "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
      );
      firstFocusable?.focus();
   }, [open]);

   return (
      <div className="relative">
         <Button
            ref={triggerRef}
            variant="outline"
            icon={<MdSettings />}
            circle
            size="sm"
            onClick={() => setOpen(!open)}
            ariaLabel={locale === "es" ? "Configuración" : "Settings"}
            aria-expanded={open}
            aria-haspopup="dialog"
            className={`${open ? "bg-page/80" : ""}`}
         />

         {open && (
            <>
               {/* Backdrop */}
               <div
                  className="fixed inset-0 z-[65]"
                  onClick={() => {
                     setOpen(false);
                     triggerRef.current?.focus();
                  }}
               />

               {/* Popover */}
               <div
                  ref={popoverRef}
                  role="dialog"
                  aria-label={
                     locale === "es"
                        ? "Configuración del chat"
                        : "Chat settings"
                  }
                  className="absolute right-0 top-full mt-2 z-[66] w-56 p-2 rounded-xl bg-surface border border-subtle shadow-2xl"
               >
                  {/* Sound toggle */}
                  <button
                     type="button"
                     onClick={toggleSound}
                     className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-body/10 transition-colors text-sm text-body cursor-pointer"
                  >
                     {sound ? (
                        <MdVolumeUp className="size-4 text-primary" />
                     ) : (
                        <MdVolumeOff className="size-4 text-body/40" />
                     )}
                     <span>{locale === "es" ? "Sonidos" : "Sounds"}</span>
                     <span
                        className={`ml-auto text-xs ${sound ? "text-primary" : "text-body/40"}`}
                     >
                        {sound
                           ? locale === "es"
                              ? "Activados"
                              : "On"
                           : locale === "es"
                             ? "Desactivados"
                             : "Off"}
                     </span>
                  </button>

                  {/* Privacy tooltip */}
                  <div className="mt-1.5 p-2 rounded-lg bg-body/5 border border-subtle">
                     <div className="flex items-start gap-2">
                        <MdLock className="size-3.5 mt-0.5 text-body/40 shrink-0" />
                        <Typography variant="small" className="leading-relaxed">
                           {privacyText}
                        </Typography>
                     </div>
                  </div>
               </div>
            </>
         )}
      </div>
   );
}

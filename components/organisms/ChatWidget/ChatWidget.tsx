"use client";

import { useState } from "react";
import { useMobileMenu } from "@/components/contexts/MobileMenuContext";
import { useFooterVisible } from "@/components/hooks/useFooterVisible";
import type { Locale } from "@/i18n/config";
import { ChatBubble } from "./ChatBubble";
import { ChatPanel } from "./ChatPanel";

type Props = {
   locale: Locale;
};

export function ChatWidget({ locale }: Props) {
   const { isOpen: isMenuOpen } = useMobileMenu();
   const isFooterVisible = useFooterVisible();
   const [isOpen, setIsOpen] = useState(false);

   const isHidden = isMenuOpen || isFooterVisible;

   return (
      <>
         {/* Desktop backdrop — mobile is fullscreen so no overlay needed */}
         <div
            className={`fixed inset-0 z-[65] bg-black/30 hidden md:block motion-safe:transition-opacity motion-safe:duration-200 motion-safe:ease-out ${
               isOpen && !isHidden
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
         />
         <ChatBubble
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            isHidden={isHidden}
         />
         <ChatPanel
            isOpen={isOpen && !isHidden}
            onClose={() => setIsOpen(false)}
            locale={locale}
         />
      </>
   );
}

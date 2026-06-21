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

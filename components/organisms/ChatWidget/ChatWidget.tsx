"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { ChatBubble } from "./ChatBubble";
import { ChatPanel } from "./ChatPanel";

type Props = {
   locale: Locale;
};

export function ChatWidget({ locale }: Props) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <ChatBubble isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
         <ChatPanel
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            locale={locale}
         />
      </>
   );
}

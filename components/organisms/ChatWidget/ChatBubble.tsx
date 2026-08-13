"use client";

import { MdAutoAwesome, MdClose } from "react-icons/md";
import { Button } from "@/components/atoms/Button";
import type { Locale } from "@/i18n/config";
import { chat } from "@/i18n/modules/chat";

type Props = {
   isOpen: boolean;
   onClick: () => void;
   isHidden?: boolean;
   locale: Locale;
};

export function ChatBubble({
   isOpen,
   onClick,
   isHidden = false,
   locale,
}: Props) {
   return (
      <Button
         variant="primary"
         circle
         icon={isOpen ? <MdClose /> : <MdAutoAwesome />}
         onClick={onClick}
         ariaLabel={isOpen ? chat[locale].closeChat : chat[locale].openChat}
         className={`chat-bubble-btn fixed right-6 xs:right-8 bottom-6 xs:bottom-8 shadow-2xl transition-all duration-500 ease-in-out hover:shadow-primary/20 motion-safe:hover:animate-pulse ${
            isOpen ? "z-[70]" : "z-[60]"
         } ${
            isHidden
               ? "opacity-0 translate-y-4 pointer-events-none"
               : "opacity-100 translate-y-0"
         }`}
      />
   );
}

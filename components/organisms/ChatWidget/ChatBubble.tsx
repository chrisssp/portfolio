"use client";

import { MdAutoAwesome, MdClose } from "react-icons/md";
import { Button } from "@/components/atoms/Button";

type Props = {
   isOpen: boolean;
   onClick: () => void;
   isHidden?: boolean;
};

export function ChatBubble({ isOpen, onClick, isHidden = false }: Props) {
   return (
      <Button
         variant="primary"
         circle
         icon={isOpen ? <MdClose /> : <MdAutoAwesome />}
         onClick={onClick}
         ariaLabel={isOpen ? "Close chat" : "Open chat"}
         className={`chat-bubble-btn fixed bottom-6 xs:bottom-8 right-6 xs:right-8 z-[60] shadow-2xl transition-all duration-500 ease-in-out hover:shadow-primary/20 motion-safe:hover:animate-pulse ${
            isHidden
               ? "opacity-0 translate-y-4 pointer-events-none"
               : "opacity-100 translate-y-0"
         }`}
      />
   );
}

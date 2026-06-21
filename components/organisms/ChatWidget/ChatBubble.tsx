"use client";

import { MdAutoAwesome, MdClose } from "react-icons/md";

type Props = {
   isOpen: boolean;
   onClick: () => void;
   isHidden?: boolean;
};

export function ChatBubble({ isOpen, onClick, isHidden = false }: Props) {
   return (
      <button
         type="button"
         onClick={onClick}
         className={`chat-bubble-btn fixed bottom-6 xs:bottom-8 right-6 xs:right-8 z-[60] p-2.5 xs:p-3 rounded-full bg-primary text-primary-contrast shadow-2xl transition-all duration-500 ease-in-out hover:scale-110 active:scale-95 hover:shadow-primary/20 cursor-pointer border border-subtle motion-safe:hover:animate-pulse ${
            isHidden
               ? "opacity-0 translate-y-4 pointer-events-none"
               : "opacity-100 translate-y-0"
         }`}
         aria-label={isOpen ? "Close chat" : "Open chat"}
      >
         {isOpen ? (
            <MdClose className="size-5" />
         ) : (
            <MdAutoAwesome className="size-5" />
         )}
      </button>
   );
}

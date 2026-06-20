"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/i18n/config";
import type { ChatMessage } from "./chatSession";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";

type Props = {
   messages: ChatMessage[];
   isLoading: boolean;
   streamingContent?: string;
   locale: Locale;
   onClose?: () => void;
};

export function MessageList({
   messages,
   isLoading,
   streamingContent,
   locale,
   onClose,
}: Props) {
   const bottomRef = useRef<HTMLDivElement>(null);

   // biome-ignore lint/correctness/useExhaustiveDependencies: intentional trigger on message/streaming changes
   useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
   }, [messages, streamingContent]);

   return (
      <div
         className="flex-1 overflow-y-auto px-4 py-3 space-y-1 scroll-smooth"
         role="log"
         aria-label="Chat messages"
      >
         {messages.map((msg) => (
            <MessageBubble
               key={`${msg.role}-${msg.timestamp}`}
               message={msg}
               locale={locale}
               onClose={onClose}
            />
         ))}

         {/* Streaming response in progress */}
         {isLoading && streamingContent && (
            <MessageBubble
               message={{
                  role: "assistant",
                  content: streamingContent,
                  timestamp: Date.now(),
               }}
               isStreaming
               locale={locale}
               onClose={onClose}
            />
         )}

         {/* Typing indicator when waiting for first token */}
         {isLoading && !streamingContent && <TypingIndicator />}

         <div ref={bottomRef} />
      </div>
   );
}

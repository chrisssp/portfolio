"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/i18n/config";
import type { ChatMessage } from "./chatSession";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";

/** Extract action markers from an assistant message content string */
function extractMarkers(content: string): Set<string> {
   const markers = new Set<string>();
   const pattern =
      /\[PROJECT:[^\]]+\]|\[CODE:[^\]]+\]|\[LANDING:[^\]]+\]|\[DEMO:[^\]]+\]|\[ARTICLE:[^\]]+\]|\[CERT:[^\]]+\]|\[ECOSYSTEM:[^\]]+\]|\[EXPERIENCE:[^\]]+\]|\[EMAIL\]|\[GITHUB\]|\[LINKEDIN\]|\[CV\]|\[ABOUT\]/g;
   for (const match of content.matchAll(pattern)) {
      markers.add(match[0]);
   }
   return markers;
}

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

   /** Find markers from the most recent assistant message before a given index */
   function getRecentMarkers(currentIdx: number): Set<string> {
      for (let i = currentIdx - 1; i >= 0; i--) {
         if (messages[i].role === "assistant") {
            return extractMarkers(messages[i].content);
         }
      }
      return new Set();
   }

   return (
      <div
         className="flex-1 overflow-y-auto px-5 py-4 space-y-1 scroll-smooth"
         role="log"
         aria-label="Chat messages"
      >
         {messages.map((msg, idx) => (
            <MessageBubble
               key={`${msg.role}-${msg.timestamp}`}
               message={msg}
               locale={locale}
               onClose={onClose}
               recentMarkers={idx > 0 ? getRecentMarkers(idx) : undefined}
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

"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import { chat } from "@/i18n/modules/chat";
import type { ChatMessage } from "./chatSession";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";

/** Extract action markers from an assistant message content string */
function extractMarkers(content: string): Set<string> {
   const markers = new Set<string>();
   const pattern =
      /\[PROJECT:[^\]]+\]|\[CODE:[^\]]+\]|\[LANDING:[^\]]+\]|\[DEMO:[^\]]+\]|\[ARTICLE:[^\]]+\]|\[POST:[^\]]+\]|\[CERT:[^\]]+\]|\[ECOSYSTEM:[^\]]+\]|\[EXPERIENCE:[^\]]+\]|\[EMAIL\]|\[GITHUB\]|\[LINKEDIN\]|\[CV\]|\[ABOUT\]/g;
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
   const scrollRef = useRef<HTMLDivElement>(null);

   // Streaming bubble placeholder timestamp. MessageBubble never renders the
   // timestamp, so a mount-time value satisfies ChatMessage without an impure
   // Date.now() call in the render body.
   const [streamTimestamp] = useState(() => Date.now());

   // biome-ignore lint/correctness/useExhaustiveDependencies: intentional trigger on message/streaming changes
   useEffect(() => {
      const container = scrollRef.current;
      if (!container) return;
      // Instant during streaming (per-token), smooth on new messages/stream end.
      container.scrollTo({
         top: container.scrollHeight,
         behavior: streamingContent ? "instant" : "smooth",
      });
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

   // Privacy hint shows at the bottom of history until the user sends their
   // first message, then it disappears.
   const showPrivacyHint = !messages.some((m) => m.role === "user");

   return (
      <div
         ref={scrollRef}
         className="flex-1 overflow-y-auto px-5 py-4 overscroll-contain"
         role="log"
         aria-label={chat[locale].chatLogLabel}
      >
         {messages.map((msg, idx) => (
            <MessageBubble
               key={`${msg.role}-${msg.timestamp}`}
               message={msg}
               isLatest={idx === messages.length - 1}
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
                  timestamp: streamTimestamp,
               }}
               isStreaming
               isLatest
               locale={locale}
               onClose={onClose}
            />
         )}

         {/* Typing indicator when waiting for first token */}
         {isLoading && !streamingContent && <TypingIndicator />}

         {/* Privacy hint — visible only before the first user message */}
         {showPrivacyHint && (
            <p className="pt-3 pb-1 text-center text-[11px] leading-relaxed text-body/40 select-none">
               {chat[locale].privacyHint}
            </p>
         )}
      </div>
   );
}

"use client";

import { useMemo } from "react";
import type { Locale } from "@/i18n/config";
import type { ChatMessage } from "./chatSession";
import { parseAssistantContent, relocateMarkers } from "./messageParser";

type Props = {
   message: ChatMessage;
   isStreaming?: boolean;
   locale: Locale;
   onClose?: () => void;
   recentMarkers?: Set<string>;
};

export function MessageBubble({
   message,
   isStreaming,
   locale,
   onClose,
   recentMarkers,
}: Props) {
   const isUser = message.role === "user";

   const { textNodes, actionNodes } = useMemo(
      () =>
         isUser
            ? { textNodes: [], actionNodes: [] }
            : parseAssistantContent(
                 relocateMarkers(message.content),
                 locale,
                 onClose,
                 recentMarkers,
              ),
      [message.content, isUser, locale, onClose, recentMarkers],
   );

   return (
      <div
         className={`flex flex-col ${isUser ? "items-end" : "items-start"} mb-3`}
      >
         <div
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
               isUser
                  ? "bg-surface border border-subtle text-body rounded-br-md"
                  : "bg-primary/10 border border-primary/20 text-body rounded-bl-md"
            }`}
         >
            {isUser ? (
               <p className="whitespace-pre-wrap">{message.content}</p>
            ) : (
               <div className="prose-chat">
                  {textNodes.length > 0 ? textNodes : message.content}
               </div>
            )}
            {isStreaming && (
               <span className="inline-block w-0.5 h-4 bg-primary/60 ml-0.5 animate-pulse" />
            )}
         </div>

         {!isUser && actionNodes.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1.5 max-w-[85%]">
               {actionNodes}
            </div>
         )}
      </div>
   );
}

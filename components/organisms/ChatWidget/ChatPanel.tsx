"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";
import {
   MdClose,
   MdRefresh,
   MdSend,
   MdVolumeOff,
   MdVolumeUp,
} from "react-icons/md";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import type { Locale } from "@/i18n/config";
import { chat } from "@/i18n/modules/chat";
import {
   type ChatMessage,
   clearHistory,
   isTerminated,
   loadHistory,
   saveHistory,
   setTerminated,
} from "./chatSession";
import {
   isSoundEnabled,
   playReceiveTone,
   playSendTone,
   setSoundEnabled,
} from "./chatSounds";
import { getRandomError } from "./errorMessages";
import { getRandomGreeting } from "./greetings";
import { MessageList } from "./MessageList";

type Props = {
   isOpen: boolean;
   onClose: () => void;
   locale: Locale;
};

export function ChatPanel({ isOpen, onClose, locale }: Props) {
   const [messages, setMessages] = useState<ChatMessage[]>(() => {
      const history = loadHistory();
      if (history.length > 0) return history;

      // New session — show greeting
      const greeting: ChatMessage = {
         role: "assistant",
         content: getRandomGreeting(locale),
         timestamp: Date.now(),
      };
      saveHistory([greeting]);
      return [greeting];
   });
   const [input, setInput] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [streamingContent, setStreamingContent] = useState("");
   const [terminated, setTerminatedState] = useState(() => isTerminated());
   const [sound, setSound] = useState(isSoundEnabled);
   const abortRef = useRef<AbortController | null>(null);
   const inputRef = useRef<HTMLTextAreaElement>(null);
   const { resolvedTheme } = useTheme();

   const toggleSound = () => {
      const next = !sound;
      setSound(next);
      setSoundEnabled(next);
   };

   // Focus input when panel opens
   useEffect(() => {
      if (isOpen) {
         setTimeout(() => inputRef.current?.focus(), 200);
      }
   }, [isOpen]);

   const sendMessage = useCallback(async () => {
      const text = input.trim();
      if (!text || isLoading || terminated) return;

      const userMsg: ChatMessage = {
         role: "user",
         content: text,
         timestamp: Date.now(),
      };

      const newMessages = [...messages, userMsg];
      setMessages(newMessages);
      setInput("");
      setIsLoading(true);
      setStreamingContent("");
      playSendTone();

      try {
         abortRef.current = new AbortController();

         const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               messages: newMessages.map((m) => ({
                  role: m.role,
                  content: m.content,
               })),
               locale,
            }),
            signal: abortRef.current.signal,
         });

         if (!res.ok) {
            // Try to extract a meaningful error from the response body
            let errorText = `HTTP ${res.status}`;
            try {
               const errBody = await res.json();
               if (errBody.error) errorText = errBody.error;
            } catch {
               // ignore parse failures
            }
            throw new Error(errorText);
         }

         // Check if it's a non-streaming redirect response
         const contentType = res.headers.get("content-type") || "";
         if (contentType.includes("application/json")) {
            const data = await res.json();

            // Server-side termination (offensive content only)
            if (data.isTerminated) {
               const endMsg: ChatMessage = {
                  role: "assistant",
                  content: data.content || chat[locale].conversationEnded,
                  timestamp: Date.now(),
               };
               const finalMessages = [...newMessages, endMsg];
               setMessages(finalMessages);
               saveHistory(finalMessages);
               setTerminated();
               setTerminatedState(true);
               setIsLoading(false);
               return;
            }

            const assistantMsg: ChatMessage = {
               role: "assistant",
               content: data.content || data.error || getRandomError(locale),
               timestamp: Date.now(),
            };
            const finalMessages = [...newMessages, assistantMsg];
            setMessages(finalMessages);
            saveHistory(finalMessages);
            setIsLoading(false);
            return;
         }

         // Streaming response
         const reader = res.body?.getReader();
         if (!reader) throw new Error("No reader");

         const decoder = new TextDecoder();
         let fullContent = "";
         let hasPlayedReceiveTone = false;

         while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            fullContent += chunk;
            setStreamingContent(fullContent);

            if (!hasPlayedReceiveTone && chunk.length > 0) {
               playReceiveTone();
               hasPlayedReceiveTone = true;
            }
         }

         // If the stream produced no content, show a useful message
         if (!fullContent.trim()) {
            fullContent = getRandomError(locale);
         }

         const assistantMsg: ChatMessage = {
            role: "assistant",
            content: fullContent,
            timestamp: Date.now(),
         };
         const finalMessages = [...newMessages, assistantMsg];
         setMessages(finalMessages);
         saveHistory(finalMessages);
      } catch (err) {
         if (err instanceof Error && err.name === "AbortError") return;
         const errorMsg: ChatMessage = {
            role: "assistant",
            content: getRandomError(locale),
            timestamp: Date.now(),
         };
         const finalMessages = [...newMessages, errorMsg];
         setMessages(finalMessages);
         saveHistory(finalMessages);
      } finally {
         setIsLoading(false);
         setStreamingContent("");
      }
   }, [input, isLoading, messages, locale, terminated]);

   const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
         e.preventDefault();
         sendMessage();
      }
   };

   const handleClearChat = () => {
      clearHistory();
      const greeting: ChatMessage = {
         role: "assistant",
         content: getRandomGreeting(locale),
         timestamp: Date.now(),
      };
      setMessages([greeting]);
      saveHistory([greeting]);
      setTerminatedState(false);
   };

   // On mobile: sync panel to visualViewport so the panel stays
   // visible when the keyboard opens (iOS/Android)
   useEffect(() => {
      if (!isOpen) return;
      if (window.matchMedia("(min-width: 768px)").matches) return;

      const vv = window.visualViewport;
      const panel = document.querySelector(
         '[role="dialog"]',
      ) as HTMLElement | null;
      if (!vv || !panel) return;

      const sync = () => {
         panel.style.top = `${vv.offsetTop}px`;
         panel.style.height = `${vv.height}px`;

         const log = document.querySelector('[role="log"]');
         if (log) log.scrollTop = log.scrollHeight;
      };

      // Set initial height (top stays at 0 via CSS, no sync call needed)
      panel.style.height = `${vv.height}px`;

      vv.addEventListener("resize", sync);
      vv.addEventListener("scroll", sync);

      return () => {
         vv.removeEventListener("resize", sync);
         vv.removeEventListener("scroll", sync);
         panel.style.top = "";
         panel.style.height = "";
      };
   }, [isOpen]);

   // Close chat on back button/gesture
   useEffect(() => {
      if (!isOpen) return;

      window.history.pushState(null, "");

      const handleBack = () => onClose();
      window.addEventListener("popstate", handleBack);

      return () => {
         window.removeEventListener("popstate", handleBack);
      };
   }, [isOpen, onClose]);

   return (
      <div
         className={`
               fixed z-[70] flex flex-col bg-page border border-body/10 shadow-2xl
                motion-safe:transition-all motion-safe:duration-200 motion-safe:ease-out
                ${isOpen ? "opacity-100 md:scale-100 md:translate-y-0" : "opacity-0 md:scale-[0.92] md:translate-y-4 pointer-events-none invisible"}
               md:overflow-hidden
               /* Mobile: fullscreen — visualViewport JS syncs top/height */
               top-0 inset-x-0 bottom-0
               /* Desktop: floating panel anchored to button */
               md:inset-auto md:bottom-24 md:right-6 md:w-[380px] md:h-[520px] md:rounded-2xl
            `}
         role="dialog"
         aria-label={chat[locale].chatPanelLabel}
      >
         {/* Header — sticky on mobile so it survives keyboard scroll */}
         <div className="sticky top-0 z-10 bg-page flex items-center justify-between px-4 py-3 border-b border-body/10">
            <div className="flex items-center gap-2">
               <Image
                  src={
                     resolvedTheme === "dark"
                        ? "/assets/images/profile/isotipo-black-nobg-center.webp"
                        : "/assets/images/profile/isotipo-white-nobg-center.webp"
                  }
                  alt="chrisssp"
                  width={95}
                  height={95}
                  className="size-5 sm:size-6 object-contain"
               />
               <Typography variant="body" weight="medium" as="span">
                  chrisssp
               </Typography>
            </div>
            <div className="flex items-center gap-1">
               <Button
                  variant="outline"
                  icon={sound ? <MdVolumeUp /> : <MdVolumeOff />}
                  circle
                  size="sm"
                  onClick={toggleSound}
                  aria-pressed={sound}
                  ariaLabel={
                     sound ? chat[locale].muteSound : chat[locale].enableSound
                  }
                  title={chat[locale].soundTitle}
               />
               <Button
                  variant="outline"
                  icon={<MdRefresh />}
                  circle
                  size="sm"
                  onClick={handleClearChat}
                  ariaLabel={chat[locale].newChat}
                  title={chat[locale].newChat}
               />
               <Button
                  variant="outline"
                  icon={<MdClose />}
                  circle
                  size="sm"
                  onClick={onClose}
                  ariaLabel={chat[locale].closeChat}
               />
            </div>
         </div>

         {/* Messages */}
         <MessageList
            messages={messages}
            isLoading={isLoading}
            streamingContent={streamingContent}
            locale={locale}
            onClose={onClose}
         />

         {/* Terminated overlay */}
         {terminated && (
            <div className="absolute inset-0 bg-page/80 flex items-center justify-center z-10 rounded-2xl md:rounded-2xl">
               <div className="text-center px-6">
                  <Typography variant="body" className="mb-3">
                     {chat[locale].conversationEnded}
                  </Typography>
                  <button
                     type="button"
                     onClick={handleClearChat}
                     className="px-5 py-2.5 text-sm rounded-lg bg-primary text-primary-contrast hover:opacity-90 transition-opacity cursor-pointer"
                  >
                     {chat[locale].newConversation}
                  </button>
               </div>
            </div>
         )}

         {/* Input */}
         <div className="px-4 py-4 border-t border-subtle">
            <div className="flex items-end gap-2">
               <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={chat[locale].inputPlaceholder}
                  disabled={terminated}
                  rows={1}
                  className="flex-1 resize-none rounded-xl bg-body/5 border border-subtle px-4 py-3 text-sm text-body placeholder:text-body/30 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all disabled:opacity-40"
                  style={{ maxHeight: "80px" }}
               />
               <Button
                  variant="primary"
                  icon={<MdSend />}
                  circle
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading || terminated}
                  ariaLabel={chat[locale].sendMessage}
               />
            </div>
         </div>
      </div>
   );
}

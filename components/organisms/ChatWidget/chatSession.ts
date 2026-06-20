/**
 * sessionStorage helpers for chat state persistence.
 * History survives nav/refresh in same tab, clears on tab close.
 */

export interface ChatMessage {
   role: "user" | "assistant";
   content: string;
   timestamp: number;
}

const HISTORY_KEY = "chat-history";
const TERMINATED_KEY = "chat-terminated";

// --- History ---

export function loadHistory(): ChatMessage[] {
   if (typeof window === "undefined") return [];
   try {
      const raw = sessionStorage.getItem(HISTORY_KEY);
      return raw ? JSON.parse(raw) : [];
   } catch {
      return [];
   }
}

export function saveHistory(messages: ChatMessage[]): void {
   if (typeof window === "undefined") return;
   try {
      sessionStorage.setItem(HISTORY_KEY, JSON.stringify(messages));
   } catch {
      // sessionStorage unavailable
   }
}

export function clearHistory(): void {
   if (typeof window === "undefined") return;
   try {
      sessionStorage.removeItem(HISTORY_KEY);
      sessionStorage.removeItem(TERMINATED_KEY);
   } catch {
      // sessionStorage unavailable
   }
}

// --- Terminated ---

export function isTerminated(): boolean {
   if (typeof window === "undefined") return false;
   try {
      return sessionStorage.getItem(TERMINATED_KEY) === "true";
   } catch {
      return false;
   }
}

export function setTerminated(): void {
   if (typeof window === "undefined") return;
   try {
      sessionStorage.setItem(TERMINATED_KEY, "true");
   } catch {
      // sessionStorage unavailable
   }
}

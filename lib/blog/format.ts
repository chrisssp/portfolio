import type { Locale } from "@/i18n/config";

const TITLE_CASE_MINOR_WORDS = new Set([
   "a",
   "an",
   "and",
   "as",
   "at",
   "but",
   "by",
   "for",
   "from",
   "in",
   "into",
   "nor",
   "of",
   "on",
   "or",
   "over",
   "per",
   "the",
   "to",
   "up",
   "via",
   "vs",
   "with",
]);

const ACRONYMS = new Set([
   "ai",
   "ia",
   "sdd",
   "api",
   "ui",
   "ux",
   "mdx",
   "sql",
   "css",
   "html",
   "js",
   "ts",
   "seo",
   "llm",
   "gpt",
   "ci",
   "cd",
   "jwt",
   "url",
   "http",
   "https",
   "cli",
   "sdk",
   "pdf",
   "csv",
   "json",
   "xml",
   "yaml",
   "oauth",
   "rss",
   "php",
   "git",
   "npm",
   "ip",
]);

function toAcronym(word: string): string {
   return ACRONYMS.has(word) ? word.toUpperCase() : word;
}

/**
 * Formats a kebab-case blog tag for display.
 *
 * es → sentence case: only the first letter is capitalized (e.g. "Arquitectura de software").
 * en → title case: each significant word capitalized, minor words lowercase (e.g. "Software Architecture").
 * Known acronyms stay uppercase in both locales (e.g. "Gentle AI", "Desarrollo con IA").
 */
export function formatTag(tag: string, locale: Locale): string {
   const words = tag.toLowerCase().split("-").filter(Boolean);

   if (words.length === 0) return tag;

   if (locale === "es") {
      const mapped = words.map(toAcronym);
      const first = mapped[0].charAt(0).toUpperCase() + mapped[0].slice(1);
      return [first, ...mapped.slice(1)].join(" ");
   }

   return words
      .map((word, index) => {
         const mapped = toAcronym(word);
         const isMinor =
            TITLE_CASE_MINOR_WORDS.has(word) &&
            index !== 0 &&
            index !== words.length - 1;
         if (isMinor) return mapped;
         return mapped.charAt(0).toUpperCase() + mapped.slice(1);
      })
      .join(" ");
}

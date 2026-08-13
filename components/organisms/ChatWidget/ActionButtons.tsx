"use client";

import {
   MdArticle,
   MdBusinessCenter,
   MdCode,
   MdEmail,
   MdFileDownload,
   MdFolder,
   MdLink,
   MdMenuBook,
   MdOpenInNew,
   MdPerson,
   MdPlayArrow,
   MdVerified,
   MdWidgets,
} from "react-icons/md";
import { PROFESSIONAL_LINKS } from "@/config/links";
import {
   COMPANY_DISPLAY_NAMES,
   EXPERIENCE_ALIASES,
   PROJECT_LINKS,
   PROJECT_NAMES,
   SLUG_ALIASES,
   VALID_CERTIFICATES,
   VALID_ECOSYSTEM_ITEMS,
} from "@/config/projects";
import type { Locale } from "@/i18n/config";
import { chat } from "@/i18n/modules/chat";
import { hero } from "@/i18n/modules/hero";

// --- Helpers ---

export function displayName(slug: string): string {
   return PROJECT_NAMES[slug] || slug;
}

export function resolveSlug(raw: string): string {
   const key = raw.toLowerCase().trim();
   return SLUG_ALIASES[key] || raw;
}

export function resolveExperienceId(raw: string): string | null {
   const key = raw.toLowerCase().trim();
   return EXPERIENCE_ALIASES[key] || null;
}

export function fuzzyMatch(input: string, validItems: string[]): string | null {
   const lower = input.toLowerCase().trim();

   for (const item of validItems) {
      if (item.toLowerCase() === lower) return item;
   }
   for (const item of validItems) {
      if (item.toLowerCase().includes(lower)) return item;
   }
   for (const item of validItems) {
      if (lower.includes(item.toLowerCase())) return item;
   }

   const inputWords = lower.split(/\s+/);
   let bestScore = 0;
   let bestMatch: string | null = null;
   for (const item of validItems) {
      const itemWords = item.toLowerCase().split(/\s+/);
      const overlap = inputWords.filter((w) => itemWords.includes(w)).length;
      if (overlap > bestScore && overlap >= 2) {
         bestScore = overlap;
         bestMatch = item;
      }
   }

   return bestMatch;
}

// --- Shared button class ---

const BTN =
   "inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40";
const LINK =
   "inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors";

// --- Button Components ---

export function ProjectButton({
   slug,
   locale,
}: {
   slug: string;
   locale: Locale;
}) {
   const resolved = resolveSlug(slug);
   const label = displayName(resolved);
   return (
      <button
         type="button"
         onClick={() => {
            if (typeof window !== "undefined")
               window.location.href = `/${locale}#project-${resolved}`;
         }}
         className={BTN}
      >
         <MdFolder className="size-4 shrink-0" />
         {label}
      </button>
   );
}

export function CodeButton({ slug, locale }: { slug: string; locale: Locale }) {
   const url = PROJECT_LINKS[resolveSlug(slug)]?.github;
   if (!url) return null;
   return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={LINK}>
         <MdCode className="size-4 shrink-0" />
         {chat[locale].code}
      </a>
   );
}

export function LandingButton({
   slug,
   locale,
}: {
   slug: string;
   locale: Locale;
}) {
   const resolved = resolveSlug(slug);
   const url =
      PROJECT_LINKS[resolved]?.landing || PROJECT_LINKS[resolved]?.demo;
   if (!url) return null;
   return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={LINK}>
         <MdOpenInNew className="size-4 shrink-0" />
         {chat[locale].landing}
      </a>
   );
}

export function DemoButton({ slug, locale }: { slug: string; locale: Locale }) {
   const url = PROJECT_LINKS[resolveSlug(slug)]?.video;
   if (!url) return null;
   return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={LINK}>
         <MdPlayArrow className="size-4 shrink-0" />
         {chat[locale].demo}
      </a>
   );
}

export function ArticleButton({
   slug,
   locale,
}: {
   slug: string;
   locale: Locale;
}) {
   const url = PROJECT_LINKS[resolveSlug(slug)]?.paper;
   if (!url) return null;
   return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={LINK}>
         <MdArticle className="size-4 shrink-0" />
         {chat[locale].article}
      </a>
   );
}

export function PostButton({ slug, locale }: { slug: string; locale: Locale }) {
   return (
      <a href={`/${locale}/blog/${slug}`} className={LINK}>
         <MdMenuBook className="size-4 shrink-0" />
         {chat[locale].readPost}
      </a>
   );
}

export function CertificateButton({
   slug,
   itemId,
   locale,
}: {
   slug: string;
   itemId?: string;
   locale: Locale;
}) {
   const resolved = resolveSlug(slug);
   if (itemId) {
      const validItems = VALID_CERTIFICATES[resolved] || [];
      if (!fuzzyMatch(itemId, validItems)) return null;
   }
   return (
      <button
         type="button"
         onClick={() => {
            if (typeof window !== "undefined")
               window.location.href = `/${locale}/projects/${resolved}#certificates`;
         }}
         className={BTN}
      >
         <MdVerified className="size-4 shrink-0" />
         {chat[locale].certificates}
      </button>
   );
}

export function EcosystemButton({
   slug,
   item,
   locale,
}: {
   slug: string;
   item: string;
   locale: Locale;
}) {
   const resolved = resolveSlug(slug);
   const validItems = VALID_ECOSYSTEM_ITEMS[resolved] || [];
   const matched = fuzzyMatch(item, validItems);
   if (!matched) return null;

   const itemId = matched
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();

   return (
      <button
         type="button"
         onClick={() => {
            if (typeof window !== "undefined")
               window.location.href = `/${locale}/projects/${resolved}#ecosystem-${itemId}`;
         }}
         className={BTN}
      >
         <MdWidgets className="size-4 shrink-0" />
         {matched}
      </button>
   );
}

export function ExperienceButton({
   projectId,
   locale,
   onClose,
}: {
   projectId: string;
   locale: Locale;
   onClose?: () => void;
}) {
   const resolved = resolveExperienceId(projectId);
   if (!resolved) return null;

   const label =
      COMPANY_DISPLAY_NAMES[projectId.toLowerCase().trim()] ||
      displayName(resolved);

   return (
      <button
         type="button"
         onClick={() => {
            if (typeof window !== "undefined")
               window.location.href = `/${locale}#experience`;
            onClose?.();
         }}
         className={BTN}
      >
         <MdBusinessCenter className="size-4 shrink-0" />
         {label} {chat[locale].experience}
      </button>
   );
}

export function EmailButton({ locale }: { locale: Locale }) {
   return (
      <a href={`mailto:${PROFESSIONAL_LINKS.email}`} className={LINK}>
         <MdEmail className="size-4 shrink-0" />
         {chat[locale].email}
      </a>
   );
}

export function GitHubButton({ locale }: { locale: Locale }) {
   return (
      <a
         href={PROFESSIONAL_LINKS.github}
         target="_blank"
         rel="noopener noreferrer"
         className={LINK}
      >
         <MdCode className="size-4 shrink-0" />
         {chat[locale].github}
      </a>
   );
}

export function LinkedInButton({ locale }: { locale: Locale }) {
   return (
      <a
         href={PROFESSIONAL_LINKS.linkedin}
         target="_blank"
         rel="noopener noreferrer"
         className={LINK}
      >
         <MdLink className="size-4 shrink-0" />
         {chat[locale].linkedin}
      </a>
   );
}

export function CVButton({ locale }: { locale: Locale }) {
   const cvLink = hero[locale]?.actions.cvLink || hero.en.actions.cvLink;
   return (
      <a href={cvLink} download className={LINK}>
         <MdFileDownload className="size-4 shrink-0" />
         {chat[locale].cv}
      </a>
   );
}

export function AboutButton({ locale }: { locale: Locale }) {
   return (
      <button
         type="button"
         onClick={() => {
            if (typeof window !== "undefined")
               window.location.href = `/${locale}#about`;
         }}
         className={BTN}
      >
         <MdPerson className="size-4 shrink-0" />
         {chat[locale].about}
      </button>
   );
}

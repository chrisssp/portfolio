"use client";

import { Fragment, type ReactNode, useMemo } from "react";
import {
   MdArticle,
   MdBusinessCenter,
   MdCode,
   MdEmail,
   MdFileDownload,
   MdFolder,
   MdLink,
   MdOpenInNew,
   MdPerson,
   MdPlayArrow,
   MdVerified,
   MdWidgets,
} from "react-icons/md";
import type { Locale } from "@/i18n/config";
import type { ChatMessage } from "./chatSession";

type Props = {
   message: ChatMessage;
   isStreaming?: boolean;
   locale: Locale;
};

// --- Constants ---

const CHRISTIAN_EMAIL = "christian.serrano.puertos@gmail.com";
const GITHUB_URL = "https://github.com/chrisssp";
const LINKEDIN_URL = "https://www.linkedin.com/in/chrisssp/";
const CV_URL = `mailto:${CHRISTIAN_EMAIL}?subject=CV Request - Christian Serrano`;

// --- Project display & link lookup ---

const PROJECT_NAMES: Record<string, string> = {
   "7dcompass": "7D-Compass",
   "coppel-nexus": "Coppel Nexus",
   azkali: "Azkali",
   "flacks-cc": "Flack's Cut & Connect",
   mtrpa: "MTRPA",
   iapex: "IAPEX (Encuéntrame)",
   dabetai: "dabetai",
   puntofiel: "PuntoFiel",
};

type ProjectLinks = {
   github?: string;
   landing?: string;
   video?: string;
   demo?: string;
   paper?: string;
};

const PROJECT_LINKS: Record<string, ProjectLinks> = {
   "7dcompass": { demo: "https://7d-compass.com/" },
   azkali: {
      landing: "https://azkali-landing.vercel.app/",
      github: "https://github.com/chrisssp/azkali",
      video: "https://youtu.be/orvfws_kxcc",
   },
   "coppel-nexus": {
      github: "https://github.com/karl262/CoppelNexus-MobileApp",
      video: "https://youtu.be/QOrzY2dIhsw",
   },
   "flacks-cc": { github: "https://github.com/flacks-cc" },
   iapex: {
      github: "https://github.com/iapex-org",
      video: "https://youtu.be/WPlo9SK-dgw",
      paper: "https://virtual.cuautitlan.unam.mx/intar/wp-content/uploads/sites/19/2025/12/166-A-Hybrid-Artificial-Intelligent-System-for-Missing-JORGE-CHRISTIAN-SERRANO-PUERTOS.pdf",
   },
   dabetai: {
      landing: "https://dabetai.netlify.app/",
      github: "https://github.com/dabetai-org",
      paper: "/assets/docs/papers/Prevención-de-Riesgos-de-la-Diabetes-Mediante-una-Plataforma-Inteligente-de-Monitorización-y-Predicción-de-Complicaciones-con-Inteligencia-Artificial.pdf",
   },
   puntofiel: {
      github: "https://github.com/chrisssp/puntofiel-mobile-app",
      video: "https://youtu.be/k2Ea1Mi4Ou8",
   },
   mtrpa: {},
};

function displayName(slug: string): string {
   return PROJECT_NAMES[slug] || slug;
}

// --- Slug normalization ---

const SLUG_ALIASES: Record<string, string> = {
   "7dcompass": "7dcompass",
   "7d-compass": "7dcompass",
   "7d": "7dcompass",
   azkali: "azkali",
   "coppel-nexus": "coppel-nexus",
   coppelnexus: "coppel-nexus",
   "coppel nexus": "coppel-nexus",
   "flacks-cc": "flacks-cc",
   flacks: "flacks-cc",
   flack: "flacks-cc",
   mtrpa: "mtrpa",
   iapex: "iapex",
   dabetai: "dabetai",
   puntofiel: "puntofiel",
   "punto fiel": "puntofiel",
};

function resolveSlug(raw: string): string {
   const key = raw.toLowerCase().trim();
   return SLUG_ALIASES[key] || raw;
}

// --- Action Button Components ---

function ProjectButton({ slug }: { slug: string }) {
   const resolved = resolveSlug(slug);
   const label = displayName(resolved);

   const handleClick = () => {
      if (typeof window === "undefined") return;
      window.location.hash = `project-${resolved}`;
      window.dispatchEvent(
         new CustomEvent("switch-project-tab", {
            detail: { projectId: resolved },
         }),
      );
   };

   return (
      <button
         type="button"
         onClick={handleClick}
         className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
         <MdFolder className="size-3.5 shrink-0" />
         {label}
      </button>
   );
}

function CodeButton({ slug }: { slug: string }) {
   const resolved = resolveSlug(slug);
   const url = PROJECT_LINKS[resolved]?.github;
   if (!url) return null;
   return (
      <a
         href={url}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
      >
         <MdCode className="size-3.5 shrink-0" />
         Code
      </a>
   );
}

function LandingButton({ slug }: { slug: string }) {
   const resolved = resolveSlug(slug);
   const url =
      PROJECT_LINKS[resolved]?.landing || PROJECT_LINKS[resolved]?.demo;
   if (!url) return null;
   return (
      <a
         href={url}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
      >
         <MdOpenInNew className="size-3.5 shrink-0" />
         Landing
      </a>
   );
}

function DemoButton({ slug }: { slug: string }) {
   const resolved = resolveSlug(slug);
   const url = PROJECT_LINKS[resolved]?.video;
   if (!url) return null;
   return (
      <a
         href={url}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
      >
         <MdPlayArrow className="size-3.5 shrink-0" />
         Demo
      </a>
   );
}

function ArticleButton({ slug }: { slug: string }) {
   const resolved = resolveSlug(slug);
   const url = PROJECT_LINKS[resolved]?.paper;
   if (!url) return null;
   return (
      <a
         href={url}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
      >
         <MdArticle className="size-3.5 shrink-0" />
         Article
      </a>
   );
}

function CertificateButton({ slug, locale }: { slug: string; locale: Locale }) {
   const resolved = resolveSlug(slug);
   const handleClick = () => {
      if (typeof window === "undefined") return;
      window.location.href = `/${locale}/projects/${resolved}#certificates`;
   };

   return (
      <button
         type="button"
         onClick={handleClick}
         className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
         <MdVerified className="size-3.5 shrink-0" />
         Certificates
      </button>
   );
}

function EcosystemButton({
   slug,
   item,
   locale,
}: {
   slug: string;
   item: string;
   locale: Locale;
}) {
   const resolvedSlug = resolveSlug(slug);
   const itemId = item
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
   const handleClick = () => {
      if (typeof window === "undefined") return;
      window.location.href = `/${locale}/projects/${resolvedSlug}#ecosystem-${itemId}`;
   };

   return (
      <button
         type="button"
         onClick={handleClick}
         className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
         <MdWidgets className="size-3.5 shrink-0" />
         {item}
      </button>
   );
}

function ExperienceButton({ projectId }: { projectId: string }) {
   const handleClick = () => {
      if (typeof window === "undefined") return;
      const el = document.getElementById("experience");
      if (el) el.scrollIntoView({ behavior: "smooth" });
   };

   const label = displayName(projectId);

   return (
      <button
         type="button"
         onClick={handleClick}
         className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
         <MdBusinessCenter className="size-3.5 shrink-0" />
         {label} Experience
      </button>
   );
}

function EmailButton() {
   return (
      <a
         href={`mailto:${CHRISTIAN_EMAIL}`}
         className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
      >
         <MdEmail className="size-3.5 shrink-0" />
         Email
      </a>
   );
}

function GitHubButton() {
   return (
      <a
         href={GITHUB_URL}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
      >
         <MdCode className="size-3.5 shrink-0" />
         GitHub
      </a>
   );
}

function LinkedInButton() {
   return (
      <a
         href={LINKEDIN_URL}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
      >
         <MdLink className="size-3.5 shrink-0" />
         LinkedIn
      </a>
   );
}

function CVButton() {
   return (
      <a
         href={CV_URL}
         className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
      >
         <MdFileDownload className="size-3.5 shrink-0" />
         CV
      </a>
   );
}

function AboutButton() {
   const handleClick = () => {
      const el = document.getElementById("about");
      if (el) el.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <button
         type="button"
         onClick={handleClick}
         className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
         <MdPerson className="size-3.5 shrink-0" />
         About Christian
      </button>
   );
}

// --- Markdown → React (no dangerouslySetInnerHTML) ---

function renderMarkdown(text: string): ReactNode[] {
   const nodes: ReactNode[] = [];
   let idx = 0;
   const pattern =
      /```(\w*)\n?([\s\S]*?)```|`([^`]+)`|\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\)|\n/g;

   let lastIndex = 0;
   let match: RegExpExecArray | null;

   match = pattern.exec(text);
   while (match !== null) {
      if (match.index > lastIndex) {
         nodes.push(
            <Fragment key={`t-${idx++}`}>
               {text.slice(lastIndex, match.index)}
            </Fragment>,
         );
      }

      if (match[1] !== undefined) {
         nodes.push(
            <pre
               key={`cb-${idx++}`}
               className="bg-body/10 rounded-lg p-2 my-2 text-xs overflow-x-auto"
            >
               <code>{match[2]}</code>
            </pre>,
         );
      } else if (match[3] !== undefined) {
         nodes.push(
            <code
               key={`c-${idx++}`}
               className="bg-body/10 rounded px-1 py-0.5 text-xs"
            >
               {match[3]}
            </code>,
         );
      } else if (match[4] !== undefined) {
         nodes.push(<strong key={`b-${idx++}`}>{match[4]}</strong>);
      } else if (match[5] !== undefined) {
         nodes.push(<em key={`i-${idx++}`}>{match[5]}</em>);
      } else if (match[6] !== undefined) {
         nodes.push(
            <a
               key={`l-${idx++}`}
               href={match[7]}
               target="_blank"
               rel="noopener noreferrer"
               className="text-primary underline hover:text-primary/80 transition-colors"
            >
               {match[6]}
            </a>,
         );
      } else if (match[0] === "\n") {
         nodes.push(<br key={`br-${idx++}`} />);
      }

      lastIndex = match.index + match[0].length;
      match = pattern.exec(text);
   }

   if (lastIndex < text.length) {
      nodes.push(
         <Fragment key={`t-${idx++}`}>{text.slice(lastIndex)}</Fragment>,
      );
   }

   return nodes.length > 0 ? nodes : [text];
}

// --- Content Parser (splits text from action markers) ---

type ParsedContent = {
   textNodes: ReactNode[];
   actionNodes: ReactNode[];
};

function parseAssistantContent(text: string, locale: Locale): ParsedContent {
   const segments = text.split(
      /(\[PROJECT:[^\]]+\]|\[CODE:[^\]]+\]|\[LANDING:[^\]]+\]|\[DEMO:[^\]]+\]|\[ARTICLE:[^\]]+\]|\[CERT:[^\]]+\]|\[ECOSYSTEM:[^\]]+\]|\[EXPERIENCE:[^\]]+\]|\[EMAIL\]|\[GITHUB\]|\[LINKEDIN\]|\[CV\]|\[ABOUT\])/,
   );

   const textNodes: ReactNode[] = [];
   const actionNodes: ReactNode[] = [];
   let textIdx = 0;
   let actionIdx = 0;

   for (const segment of segments) {
      if (segment.startsWith("[PROJECT:")) {
         actionNodes.push(
            <ProjectButton
               key={`act-${actionIdx++}`}
               slug={segment.slice(9, -1)}
            />,
         );
      } else if (segment.startsWith("[CODE:")) {
         actionNodes.push(
            <CodeButton
               key={`act-${actionIdx++}`}
               slug={segment.slice(6, -1)}
            />,
         );
      } else if (segment.startsWith("[LANDING:")) {
         actionNodes.push(
            <LandingButton
               key={`act-${actionIdx++}`}
               slug={segment.slice(9, -1)}
            />,
         );
      } else if (segment.startsWith("[DEMO:")) {
         actionNodes.push(
            <DemoButton
               key={`act-${actionIdx++}`}
               slug={segment.slice(6, -1)}
            />,
         );
      } else if (segment.startsWith("[ARTICLE:")) {
         actionNodes.push(
            <ArticleButton
               key={`act-${actionIdx++}`}
               slug={segment.slice(9, -1)}
            />,
         );
      } else if (segment.startsWith("[CERT:")) {
         actionNodes.push(
            <CertificateButton
               key={`act-${actionIdx++}`}
               slug={segment.slice(6, -1)}
               locale={locale}
            />,
         );
      } else if (segment.startsWith("[ECOSYSTEM:")) {
         const inner = segment.slice(11, -1); // "slug:item name"
         const colonIdx = inner.indexOf(":");
         if (colonIdx > 0) {
            const slug = inner.slice(0, colonIdx);
            const item = inner.slice(colonIdx + 1);
            actionNodes.push(
               <EcosystemButton
                  key={`act-${actionIdx++}`}
                  slug={slug}
                  item={item}
                  locale={locale}
               />,
            );
         }
      } else if (segment.startsWith("[EXPERIENCE:")) {
         actionNodes.push(
            <ExperienceButton
               key={`act-${actionIdx++}`}
               projectId={segment.slice(12, -1)}
            />,
         );
      } else if (segment === "[EMAIL]") {
         actionNodes.push(<EmailButton key={`act-${actionIdx++}`} />);
      } else if (segment === "[GITHUB]") {
         actionNodes.push(<GitHubButton key={`act-${actionIdx++}`} />);
      } else if (segment === "[LINKEDIN]") {
         actionNodes.push(<LinkedInButton key={`act-${actionIdx++}`} />);
      } else if (segment === "[CV]") {
         actionNodes.push(<CVButton key={`act-${actionIdx++}`} />);
      } else if (segment === "[ABOUT]") {
         actionNodes.push(<AboutButton key={`act-${actionIdx++}`} />);
      } else if (segment) {
         textNodes.push(
            <Fragment key={`txt-${textIdx++}`}>
               {renderMarkdown(segment)}
            </Fragment>,
         );
      }
   }

   return { textNodes, actionNodes };
}

// --- Component ---

export function MessageBubble({ message, isStreaming, locale }: Props) {
   const isUser = message.role === "user";

   const { textNodes, actionNodes } = useMemo(
      () =>
         isUser
            ? { textNodes: [], actionNodes: [] }
            : parseAssistantContent(message.content, locale),
      [message.content, isUser, locale],
   );

   return (
      <div
         className={`flex flex-col ${isUser ? "items-end" : "items-start"} mb-3`}
      >
         {/* Text bubble */}
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

         {/* Action buttons below the bubble (assistant only) */}
         {!isUser && actionNodes.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1.5 max-w-[85%]">
               {actionNodes}
            </div>
         )}
      </div>
   );
}

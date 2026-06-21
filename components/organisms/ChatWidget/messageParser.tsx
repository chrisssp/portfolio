import { Fragment, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import {
   AboutButton,
   ArticleButton,
   CertificateButton,
   CodeButton,
   CVButton,
   DemoButton,
   EcosystemButton,
   EmailButton,
   ExperienceButton,
   GitHubButton,
   LandingButton,
   LinkedInButton,
   ProjectButton,
} from "./ActionButtons";

// --- Marker Pattern ---

const MARKER_PATTERN =
   /\[PROJECT:[^\]]+\]|\[CODE:[^\]]+\]|\[LANDING:[^\]]+\]|\[DEMO:[^\]]+\]|\[ARTICLE:[^\]]+\]|\[CERT:[^\]]+\]|\[ECOSYSTEM:[^\]]+\]|\[EXPERIENCE:[^\]]+\]|\[EMAIL\]|\[GITHUB\]|\[LINKEDIN\]|\[CV\]|\[ABOUT\]/g;

const SEGMENT_PATTERN =
   /(\[PROJECT:[^\]]+\]|\[CODE:[^\]]+\]|\[LANDING:[^\]]+\]|\[DEMO:[^\]]+\]|\[ARTICLE:[^\]]+\]|\[CERT:[^\]]+\]|\[ECOSYSTEM:[^\]]+\]|\[EXPERIENCE:[^\]]+\]|\[EMAIL\]|\[GITHUB\]|\[LINKEDIN\]|\[CV\]|\[ABOUT\])/;

// --- Marker Relocation ---

export function relocateMarkers(text: string): string {
   const markers: string[] = [];
   let cleanText = text.replace(MARKER_PATTERN, (match) => {
      markers.push(match);
      return "";
   });

   cleanText = cleanText
      .replace(/\s*[.,;:!]\s*\.\s*$/g, ".")
      .replace(/\s*[.,;:!]\s*,\s*$/g, ",")
      .replace(/\s{2,}/g, " ")
      .replace(/\s+([.,;:!])/g, "$1")
      .trim();

   if (markers.length === 0) return text;

   const lastChar = cleanText.slice(-1);
   if (lastChar !== "." && lastChar !== "!" && lastChar !== "?") {
      cleanText += ".";
   }

   return `${cleanText} ${markers.join(" ")}`;
}

// --- Markdown → React ---

export function renderMarkdown(text: string): ReactNode[] {
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

// --- Content Parser ---

export type ParsedContent = {
   textNodes: ReactNode[];
   actionNodes: ReactNode[];
};

export function parseAssistantContent(
   text: string,
   locale: Locale,
   onClose?: () => void,
   recentMarkers?: Set<string>,
): ParsedContent {
   const segments = text.split(SEGMENT_PATTERN);

   const textNodes: ReactNode[] = [];
   const actionNodes: ReactNode[] = [];
   const seenActions = new Set<string>();
   let textIdx = 0;
   let actionIdx = 0;

   const skip = (seg: string) =>
      seenActions.has(seg) || recentMarkers?.has(seg);

   for (const segment of segments) {
      if (segment.startsWith("[PROJECT:")) {
         if (skip(segment)) continue;
         seenActions.add(segment);
         actionNodes.push(
            <ProjectButton
               key={`act-${actionIdx++}`}
               slug={segment.slice(9, -1)}
               locale={locale}
            />,
         );
      } else if (segment.startsWith("[CODE:")) {
         if (skip(segment)) continue;
         seenActions.add(segment);
         actionNodes.push(
            <CodeButton
               key={`act-${actionIdx++}`}
               slug={segment.slice(6, -1)}
            />,
         );
      } else if (segment.startsWith("[LANDING:")) {
         if (skip(segment)) continue;
         seenActions.add(segment);
         actionNodes.push(
            <LandingButton
               key={`act-${actionIdx++}`}
               slug={segment.slice(9, -1)}
            />,
         );
      } else if (segment.startsWith("[DEMO:")) {
         if (skip(segment)) continue;
         seenActions.add(segment);
         actionNodes.push(
            <DemoButton
               key={`act-${actionIdx++}`}
               slug={segment.slice(6, -1)}
            />,
         );
      } else if (segment.startsWith("[ARTICLE:")) {
         if (skip(segment)) continue;
         seenActions.add(segment);
         actionNodes.push(
            <ArticleButton
               key={`act-${actionIdx++}`}
               slug={segment.slice(9, -1)}
            />,
         );
      } else if (segment.startsWith("[CERT:")) {
         if (skip(segment)) continue;
         seenActions.add(segment);
         const inner = segment.slice(6, -1);
         const colonIdx = inner.indexOf(":");
         actionNodes.push(
            <CertificateButton
               key={`act-${actionIdx++}`}
               slug={colonIdx > 0 ? inner.slice(0, colonIdx) : inner}
               itemId={colonIdx > 0 ? inner.slice(colonIdx + 1) : undefined}
               locale={locale}
            />,
         );
      } else if (segment.startsWith("[ECOSYSTEM:")) {
         if (skip(segment)) continue;
         seenActions.add(segment);
         const inner = segment.slice(11, -1);
         const colonIdx = inner.indexOf(":");
         if (colonIdx > 0) {
            actionNodes.push(
               <EcosystemButton
                  key={`act-${actionIdx++}`}
                  slug={inner.slice(0, colonIdx)}
                  item={inner.slice(colonIdx + 1)}
                  locale={locale}
               />,
            );
         }
      } else if (segment.startsWith("[EXPERIENCE:")) {
         if (skip(segment)) continue;
         seenActions.add(segment);
         actionNodes.push(
            <ExperienceButton
               key={`act-${actionIdx++}`}
               projectId={segment.slice(12, -1)}
               locale={locale}
               onClose={onClose}
            />,
         );
      } else if (segment === "[EMAIL]") {
         if (skip(segment)) continue;
         seenActions.add(segment);
         actionNodes.push(<EmailButton key={`act-${actionIdx++}`} />);
      } else if (segment === "[GITHUB]") {
         if (skip(segment)) continue;
         seenActions.add(segment);
         actionNodes.push(<GitHubButton key={`act-${actionIdx++}`} />);
      } else if (segment === "[LINKEDIN]") {
         if (skip(segment)) continue;
         seenActions.add(segment);
         actionNodes.push(<LinkedInButton key={`act-${actionIdx++}`} />);
      } else if (segment === "[CV]") {
         if (skip(segment)) continue;
         seenActions.add(segment);
         actionNodes.push(
            <CVButton key={`act-${actionIdx++}`} locale={locale} />,
         );
      } else if (segment === "[ABOUT]") {
         if (skip(segment)) continue;
         seenActions.add(segment);
         actionNodes.push(
            <AboutButton key={`act-${actionIdx++}`} locale={locale} />,
         );
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

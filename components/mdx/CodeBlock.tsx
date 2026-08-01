"use client";

import { type ComponentProps, type ReactNode, useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";

type CodeBlockProps = ComponentProps<"pre"> & {
   "data-meta"?: string;
};

function extractText(node: ReactNode): string {
   if (typeof node === "string" || typeof node === "number") {
      return String(node);
   }
   if (Array.isArray(node)) {
      return node.map(extractText).join("");
   }
   if (node && typeof node === "object" && "props" in node) {
      return extractText(
         (node as { props?: { children?: ReactNode } }).props?.children,
      );
   }
   return "";
}

export default function CodeBlock(props: CodeBlockProps) {
   const meta = props["data-meta"] ?? "";
   const showCopy = /\bcopy\b/.test(meta);
   const [copied, setCopied] = useState(false);
   const code = extractText(props.children);

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(code);
         setCopied(true);
         window.setTimeout(() => setCopied(false), 2000);
      } catch {
         // Clipboard unavailable (non-secure context); ignore.
      }
   };

   return (
      <div className="group relative overflow-hidden rounded-xl border border-subtle/50 bg-surface">
         <pre
            {...props}
            className="overflow-x-auto p-4 font-mono text-sm leading-relaxed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/50"
         />
         {showCopy && (
            <button
               type="button"
               onClick={handleCopy}
               aria-label={copied ? "Copied to clipboard" : "Copy code"}
               className="absolute right-3 top-3 z-10 rounded-md border border-subtle/50 bg-page/80 p-1.5 text-body/60 backdrop-blur transition-colors hover:border-primary/40 hover:text-primary"
            >
               {copied ? (
                  <LuCheck aria-hidden className="text-green" />
               ) : (
                  <LuCopy aria-hidden />
               )}
            </button>
         )}
      </div>
   );
}

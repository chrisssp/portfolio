"use client";

import { useState } from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { LuCheck, LuLink } from "react-icons/lu";

interface ShareTexts {
   share: string;
   copyLink: string;
   copied: string;
   linkedin: string;
   x: string;
}

interface ShareButtonsProps {
   url: string;
   title: string;
   texts: ShareTexts;
}

export default function ShareButtons({ url, title, texts }: ShareButtonsProps) {
   const [copied, setCopied] = useState(false);

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(url);
      } catch {
         const input = document.createElement("input");
         input.value = url;
         document.body.appendChild(input);
         input.select();
         document.execCommand("copy");
         document.body.removeChild(input);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
   };

   const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
   const xShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

   return (
      <div className="flex items-center gap-2 flex-wrap">
         <span className="text-sm text-body/60">{texts.share}</span>
         <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? texts.copied : texts.copyLink}
            title={texts.copyLink}
            className="inline-flex items-center justify-center size-9 rounded-lg border border-subtle/50 bg-surface text-body/80 hover:text-primary hover:border-primary/50 transition-colors"
         >
            {copied ? (
               <LuCheck className="size-4 text-green" aria-hidden />
            ) : (
               <LuLink className="size-4" aria-hidden />
            )}
         </button>
         <a
            href={linkedinShare}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={texts.linkedin}
            title={texts.linkedin}
            className="inline-flex items-center justify-center size-9 rounded-lg border border-subtle/50 bg-surface text-body/80 hover:text-white hover:bg-blue-700 transition-colors"
         >
            <FaLinkedin className="size-4" aria-hidden />
         </a>
         <a
            href={xShare}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={texts.x}
            title={texts.x}
            className="inline-flex items-center justify-center size-9 rounded-lg border border-subtle/50 bg-surface text-body/80 hover:text-white hover:bg-black transition-colors"
         >
            <FaXTwitter className="size-4" aria-hidden />
         </a>
      </div>
   );
}

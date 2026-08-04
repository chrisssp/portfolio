"use client";

import { useState } from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { LuCheck, LuLink } from "react-icons/lu";
import { Button } from "@/components/atoms/Button";

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
         <Button
            variant="secondary"
            circle
            size="md"
            icon={
               copied ? (
                  <LuCheck className="text-green" aria-hidden />
               ) : (
                  <LuLink aria-hidden />
               )
            }
            ariaLabel={copied ? texts.copied : texts.copyLink}
            title={texts.copyLink}
            onClick={handleCopy}
         />
         <a
            href={linkedinShare}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={texts.linkedin}
            title={texts.linkedin}
         >
            <Button
               variant="outline"
               circle
               size="md"
               icon={<FaLinkedin aria-hidden />}
               ariaLabel={texts.linkedin}
               title={texts.linkedin}
            />
         </a>
         <a
            href={xShare}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={texts.x}
            title={texts.x}
         >
            <Button
               variant="outline"
               circle
               size="md"
               icon={<FaXTwitter aria-hidden />}
               ariaLabel={texts.x}
               title={texts.x}
            />
         </a>
      </div>
   );
}

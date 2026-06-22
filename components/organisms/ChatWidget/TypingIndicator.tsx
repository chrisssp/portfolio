"use client";

import { Typography } from "@/components/atoms/Typography";

export function TypingIndicator() {
   return (
      <div className="flex items-start mb-3">
         <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-primary/10 border border-primary/20 rounded-bl-md shadow-sm">
            <div className="flex items-center gap-1">
               <span className="sr-only">chrisssp is typing</span>
               {/* Animated dots — hidden when motion is reduced */}
               {[0, 1, 2].map((i) => (
                  <span
                     key={i}
                     className="inline-block size-1.5 rounded-full bg-body/40 motion-safe:animate-bounce motion-reduce:hidden"
                     style={{
                        animationDelay: `${i * 0.15}s`,
                        animationDuration: "0.6s",
                     }}
                  />
               ))}
               {/* Static fallback for reduced motion */}
               <Typography
                  variant="small"
                  as="span"
                  className="hidden motion-reduce:inline"
               >
                  chrisssp is typing...
               </Typography>
            </div>
         </div>
      </div>
   );
}

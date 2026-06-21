"use client";

export function TypingIndicator() {
   return (
      <div className="flex items-center gap-1 px-4 py-3">
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
         <span className="hidden motion-reduce:inline text-xs text-body/40 italic">
            chrisssp is typing...
         </span>
      </div>
   );
}

import type { HTMLAttributes } from "react";

export type CaptionProps = HTMLAttributes<HTMLElement>;

export default function Caption({
   className = "",
   children,
   ...props
}: CaptionProps) {
   return (
      <figcaption
         className={`text-center text-sm text-body/60 italic ${className}`}
         {...props}
      >
         {children}
      </figcaption>
   );
}

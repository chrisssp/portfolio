import type { AnchorHTMLAttributes, ElementType, ReactNode } from "react";
import { LuArrowUpRight } from "react-icons/lu";

interface InlineLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
   children: ReactNode;
   icon?: ElementType | null;
}

export const InlineLink = ({
   href,
   children,
   icon: Icon = LuArrowUpRight,
   className = "",
   ...rest
}: InlineLinkProps) => {
   const isExternal = typeof href === "string" && href.startsWith("http");

   return (
      <span className={`inline-flex items-baseline gap-1 ${className}`}>
         {Icon && isExternal && (
            <Icon aria-hidden className="mt-0.5 shrink-0 text-primary" />
         )}
         <a
            {...rest}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="font-medium text-primary underline underline-offset-2 transition-colors hover:no-underline"
         >
            {children}
         </a>
      </span>
   );
};

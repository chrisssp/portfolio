import { LuArrowUpRight } from "react-icons/lu";
import type { ResourceItem } from "@/lib/blog/schema";

interface ResourcesProps {
   items: ResourceItem[];
}

export default function Resources({ items }: ResourcesProps) {
   return (
      <div className="space-y-3">
         {items.map((item) => {
            const isExternal = item.href.startsWith("http");
            return (
               <div key={item.href} className="flex items-baseline gap-2.5">
                  <LuArrowUpRight
                     aria-hidden
                     className="mt-0.5 shrink-0 text-primary"
                  />
                  <a
                     href={item.href}
                     target={isExternal ? "_blank" : undefined}
                     rel={isExternal ? "noopener noreferrer" : undefined}
                     className="font-medium text-primary underline underline-offset-2 transition-colors hover:no-underline"
                  >
                     {item.title}
                  </a>
                  {item.description && (
                     <span className="text-body/70">{item.description}</span>
                  )}
               </div>
            );
         })}
      </div>
   );
}

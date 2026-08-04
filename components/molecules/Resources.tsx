import type { ResourceItem } from "@/lib/blog/schema";
import { InlineLink } from "../atoms/InlineLink";

interface ResourcesProps {
   items: ResourceItem[];
}

export default function Resources({ items }: ResourcesProps) {
   return (
      <div className="space-y-3">
         {items.map((item) => (
            <div key={item.href} className="flex items-baseline gap-2.5">
               <InlineLink href={item.href}>{item.title}</InlineLink>
               {item.description && (
                  <span className="text-body/70">{item.description}</span>
               )}
            </div>
         ))}
      </div>
   );
}

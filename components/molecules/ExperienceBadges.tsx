"use client";

import { MdApps, MdLocationOn, MdPublic, MdWork } from "react-icons/md";
import { Tag } from "../atoms/Tag";

interface ExperienceBadgesProps {
   location: string;
   remote?: string;
   tags?: string[];
   product?: string;
   projectId?: string;
   align?: "left" | "right";
}

export const ExperienceBadges = ({
   location,
   remote,
   tags,
   product,
   projectId,
   align = "left",
}: ExperienceBadgesProps) => {
   const handleProjectClick = () => {
      if (!projectId) return;
      window.location.hash = `project-${projectId}`;
      window.dispatchEvent(
         new CustomEvent("switch-project-tab", {
            detail: { projectId },
         }),
      );
   };

   return (
      <div
         className={`flex flex-wrap gap-2 ${align === "right" ? "md:justify-end" : "md:justify-start"}`}
      >
         {/* Location */}
         {location && (
            <Tag icon={<MdLocationOn className="size-3" />}>{location}</Tag>
         )}

         {/* Remote / modality */}
         {remote && <Tag icon={<MdPublic className="size-3" />}>{remote}</Tag>}

         {/* Project type tags */}
         {tags?.map((tag) => (
            <Tag
               key={tag}
               variant="outline"
               icon={<MdWork className="size-3" />}
            >
               {tag}
            </Tag>
         ))}

         {/* Shortcut to project detail */}
         {product && projectId && (
            <button
               type="button"
               onClick={handleProjectClick}
               className="flex cursor-pointer hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
               <Tag
                  variant="primary"
                  icon={<MdApps className="size-3" />}
                  className="hover:bg-primary/80"
               >
                  {product}
               </Tag>
            </button>
         )}
      </div>
   );
};

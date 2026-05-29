"use client";

import { MdClose, MdFilterList } from "react-icons/md";
import { TECHNOLOGIES } from "@/config/technologies";
import { Badge } from "../atoms/Badge";

interface TechFilterBarProps {
   allTechs: string[];
   selectedTechs: string[];
   onToggle: (techId: string) => void;
   onClear: () => void;
   hasActiveFilter?: boolean;
   label?: string;
   clearLabel?: string;
}

export const TechFilterBar = ({
   allTechs,
   selectedTechs,
   onToggle,
   onClear,
   hasActiveFilter = false,
   label = "Filter by technology",
   clearLabel = "Clear filters",
}: TechFilterBarProps) => {
   // Sort: selected first, then alphabetical
   const sortedTechs = [...allTechs].sort((a, b) => {
      const aSel = selectedTechs.includes(a);
      const bSel = selectedTechs.includes(b);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return a.localeCompare(b);
   });

   return (
      <div className="flex flex-col gap-3 w-full">
         {/* Label */}
         <div className="flex items-center gap-2">
            <MdFilterList className="size-4 text-body/70 shrink-0" />
            <span className="text-xs font-semibold text-body/70 uppercase tracking-wider">
               {label}
            </span>
         </div>

         {/* Badges row */}
         <div className="grid grid-flow-col grid-rows-2 gap-2 overflow-x-auto sm:flex sm:flex-wrap sm:gap-2.5 sm:overflow-visible">
            {selectedTechs.length > 0 && (
               <button
                  type="button"
                  onClick={onClear}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 border border-red-500/30 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                  aria-label={clearLabel}
               >
                  <MdClose className="size-3.5" />
                  <span>{clearLabel}</span>
               </button>
            )}

            {sortedTechs.map((techId) => {
               const tech = TECHNOLOGIES[techId];
               if (!tech) return null;
               const isSelected = selectedTechs.includes(techId);

               return (
                  <Badge
                     key={techId}
                     tech={tech}
                     interactive
                     selected={isSelected}
                     hasActiveFilter={hasActiveFilter}
                     onClick={() => onToggle(techId)}
                  />
               );
            })}
         </div>
      </div>
   );
};

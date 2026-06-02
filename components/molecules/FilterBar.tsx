"use client";

import { useMemo, useState } from "react";
import {
   MdClear,
   MdExpandLess,
   MdExpandMore,
   MdFilterList,
} from "react-icons/md";
import { Badge } from "../atoms/Badge";

interface FilterChipConfig {
   id: string;
   name: string;
   bgColor: string;
   icon: React.ElementType;
}

const toTechConfig = (option: FilterChipConfig) => ({
   name: option.name,
   icon: option.icon,
   bgColor: option.bgColor,
});

interface FilterAxisConfig {
   key: string;
   label: string;
   options: FilterChipConfig[];
}

interface FilterBarProps {
   axes: FilterAxisConfig[];
   selections: Record<string, string[]>;
   onToggle: (axis: string, value: string) => void;
   onClearAxis: (axis: string) => void;
   onClearAll: () => void;
   hasActiveFilter: boolean;
   clearLabel: string;
   clearAxisLabel: string;
   expandedSections?: Record<string, boolean>;
   onSectionToggle?: (key: string) => void;
}

interface ActiveChipsProps {
   axes: FilterAxisConfig[];
   selections: Record<string, string[]>;
   onRemove: (axis: string, value: string) => void;
   onClearAll: () => void;
   clearLabel: string;
}

interface SectionProps {
   axis: FilterAxisConfig;
   selected: string[];
   onToggle: (value: string) => void;
   onClear: () => void;
   clearAxisLabel: string;
   hasActiveFilter: boolean;
   expanded?: boolean;
   onToggleExpand?: () => void;
}

const sortSelectedFirst = (selected: string[]) => (a: string, b: string) => {
   const aSel = selected.includes(a);
   const bSel = selected.includes(b);
   if (aSel && !bSel) return -1;
   if (!aSel && bSel) return 1;
   return a.localeCompare(b);
};

const Section = ({
   axis,
   selected,
   onToggle,
   onClear,
   clearAxisLabel,
   hasActiveFilter,
   expanded = false,
   onToggleExpand,
}: SectionProps) => {
   const isOpen = expanded;

   const selectedCount = selected.length;
   const sortedOptions = useMemo(() => {
      const ids = axis.options.map((option) => option.id);
      return [...ids].sort(sortSelectedFirst(selected));
   }, [axis.options, selected]);

   return (
      <div className="rounded-2xl border border-subtle/60 bg-surface/70 shadow-sm">
         <button
            type="button"
            onClick={() => onToggleExpand?.()}
            className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-3 sm:py-3.5"
            aria-expanded={isOpen}
         >
            <div className="flex items-center gap-2">
               <MdFilterList className="size-4 text-body/70" />
               <span className="text-xs font-semibold text-body/70 uppercase tracking-wider">
                  {axis.label}
               </span>
               {!isOpen && selectedCount > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center text-xs font-semibold text-primary-contrast bg-primary/80 rounded-full px-2 py-0.5">
                     {selectedCount}
                  </span>
               )}
            </div>

            <div className="flex items-center gap-2">
               {selectedCount > 0 && (
                  <button
                     type="button"
                     onClick={(event) => {
                        event.stopPropagation();
                        onClear();
                     }}
                     className="text-xs font-semibold text-red-400 hover:text-red-300 px-2 py-1 rounded-full bg-red-500/10 hover:bg-red-500/20 transition"
                  >
                     <span className="flex items-center gap-1">
                        <MdClear className="size-3" />
                        {clearAxisLabel}
                     </span>
                  </button>
               )}
               {isOpen ? (
                  <MdExpandLess className="size-5 text-body/60" />
               ) : (
                  <MdExpandMore className="size-5 text-body/60" />
               )}
            </div>
         </button>

         {isOpen && (
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
               <div className="grid grid-flow-col grid-rows-2 auto-cols-max gap-2 overflow-x-auto sm:flex sm:flex-wrap sm:overflow-visible sm:gap-2.5">
                  {sortedOptions.map((optionId) => {
                     const option = axis.options.find(
                        (item) => item.id === optionId,
                     );
                     if (!option) return null;
                     const isSelected = selected.includes(optionId);

                     return (
                        <Badge
                           key={optionId}
                           tech={toTechConfig(option)}
                           interactive
                           selected={isSelected}
                           hasActiveFilter={hasActiveFilter}
                           onClick={() => onToggle(optionId)}
                        />
                     );
                  })}
               </div>
            </div>
         )}
      </div>
   );
};

const ActiveChips = ({
   axes,
   selections,
   onRemove,
   onClearAll,
   clearLabel,
}: ActiveChipsProps) => {
   const chips = useMemo(() => {
      return axes.flatMap((axis) =>
         (selections[axis.key] ?? []).map((value) => ({
            axis,
            value,
         })),
      );
   }, [axes, selections]);

   if (chips.length === 0) return null;

   return (
      <div className="flex flex-col gap-3">
         <div className="flex flex-wrap gap-2">
            {chips.map(({ axis, value }) => {
               const option = axis.options.find((item) => item.id === value);
               if (!option) return null;

               return (
                  <button
                     key={`${axis.key}-${value}`}
                     type="button"
                     onClick={() => onRemove(axis.key, value)}
                     className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-body border border-subtle/60 bg-surface/80 hover:bg-surface transition"
                  >
                     <span className="text-body/70">{axis.label}:</span>
                     <span className="text-body">{option.name}</span>
                     <MdClear className="size-3 text-body/60" />
                  </button>
               );
            })}
         </div>

         <div>
            <button
               type="button"
               onClick={onClearAll}
               className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition"
            >
               <MdClear className="size-3" />
               {clearLabel}
            </button>
         </div>
      </div>
   );
};

export const FilterBar = ({
   axes,
   selections,
   onToggle,
   onClearAxis,
   onClearAll,
   hasActiveFilter,
   clearLabel,
   clearAxisLabel,
   expandedSections,
   onSectionToggle,
}: FilterBarProps) => {
   const normalizedAxes = useMemo(
      () => axes.filter((axis) => axis.options.length > 0),
      [axes],
   );

   return (
      <div className="flex flex-col gap-4 w-full">
         {hasActiveFilter && (
            <ActiveChips
               axes={normalizedAxes}
               selections={selections}
               onRemove={onToggle}
               onClearAll={onClearAll}
               clearLabel={clearLabel}
            />
         )}

         <div className="flex flex-col gap-3">
            {normalizedAxes.map((axis) => (
               <Section
                  key={axis.key}
                  axis={axis}
                  selected={selections[axis.key] ?? []}
                  onToggle={(value) => onToggle(axis.key, value)}
                  onClear={() => onClearAxis(axis.key)}
                  clearAxisLabel={clearAxisLabel}
                  hasActiveFilter={hasActiveFilter}
                  expanded={expandedSections?.[axis.key] ?? false}
                  onToggleExpand={() => onSectionToggle?.(axis.key)}
               />
            ))}
         </div>
      </div>
   );
};

FilterBar.ActiveChips = ActiveChips;
FilterBar.Section = Section;

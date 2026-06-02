"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { FilterAxisConfig, FilterAxisKey } from "@/config/categories";

const DEFAULT_TECH_CONFIG: FilterAxisConfig = {
   key: "tech",
   urlParam: "tech",
   storageKey: "portfolio-tech-filter",
};

const DEFAULT_AXES: FilterAxisConfig[] = [
   DEFAULT_TECH_CONFIG,
   { key: "domain", urlParam: "domain", storageKey: "portfolio-domain-filter" },
   {
      key: "platform",
      urlParam: "platform",
      storageKey: "portfolio-platform-filter",
   },
   { key: "tags", urlParam: "tag", storageKey: "portfolio-tag-filter" },
];

type SelectionState = Record<FilterAxisKey, string[]>;

const createEmptySelections = (): SelectionState => ({
   tech: [],
   domain: [],
   platform: [],
   tags: [],
});

const parseSelection = (value: string | null, allowed: string[]) => {
   if (!value) return [];
   return value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0 && allowed.includes(item));
};

const normalizeSelections = (
   selections: Record<string, string[]>,
   allowedValues: Record<FilterAxisKey, string[]>,
): SelectionState => {
   const normalized = createEmptySelections();

   (Object.keys(normalized) as FilterAxisKey[]).forEach((axis) => {
      const values = selections[axis] ?? [];
      normalized[axis] = values.filter((value) =>
         allowedValues[axis].includes(value),
      );
   });

   return normalized;
};

const readSelectionsFromUrl = (
   axes: FilterAxisConfig[],
   allowedValues: Record<FilterAxisKey, string[]>,
): SelectionState => {
   if (typeof window === "undefined") return createEmptySelections();

   try {
      const params = new URLSearchParams(window.location.search);
      const selections: Record<string, string[]> = {};

      axes.forEach((axis) => {
         const value = params.get(axis.urlParam);
         selections[axis.key] = parseSelection(value, allowedValues[axis.key]);
      });

      return normalizeSelections(selections, allowedValues);
   } catch {
      return createEmptySelections();
   }
};

const readSelectionsFromStorage = (
   axes: FilterAxisConfig[],
   allowedValues: Record<FilterAxisKey, string[]>,
): SelectionState => {
   if (typeof window === "undefined") return createEmptySelections();

   const selections: Record<string, string[]> = {};

   axes.forEach((axis) => {
      try {
         const stored = localStorage.getItem(axis.storageKey);
         if (!stored) {
            selections[axis.key] = [];
            return;
         }

         const parsed = JSON.parse(stored);
         if (Array.isArray(parsed)) {
            selections[axis.key] = parsed.filter((value: string) =>
               allowedValues[axis.key].includes(value),
            );
         } else {
            selections[axis.key] = [];
         }
      } catch {
         selections[axis.key] = [];
      }
   });

   return normalizeSelections(selections, allowedValues);
};

const readInitialSelections = (
   axes: FilterAxisConfig[],
   allowedValues: Record<FilterAxisKey, string[]>,
): SelectionState => {
   const fromUrl = readSelectionsFromUrl(axes, allowedValues);
   const hasUrlSelections = axes.some((axis) => fromUrl[axis.key].length > 0);

   if (hasUrlSelections) {
      return fromUrl;
   }

   return readSelectionsFromStorage(axes, allowedValues);
};

const syncToUrl = (axes: FilterAxisConfig[], selections: SelectionState) => {
   if (typeof window === "undefined") return;

   try {
      const params = new URLSearchParams(window.location.search);

      axes.forEach((axis) => {
         const values = selections[axis.key];
         if (values.length > 0) {
            params.set(axis.urlParam, values.join(","));
         } else {
            params.delete(axis.urlParam);
         }
      });

      const paramString = params.toString();
      const hash = window.location.hash;
      const base = window.location.pathname;
      const newUrl = paramString
         ? `${base}?${paramString}${hash}`
         : `${base}${hash}`;

      window.history.replaceState(null, "", newUrl);
   } catch {
      // ignore
   }
};

const syncToStorage = (
   axes: FilterAxisConfig[],
   selections: SelectionState,
) => {
   if (typeof window === "undefined") return;

   axes.forEach((axis) => {
      try {
         const values = selections[axis.key];
         if (values.length > 0) {
            localStorage.setItem(axis.storageKey, JSON.stringify(values));
         } else {
            localStorage.removeItem(axis.storageKey);
         }
      } catch {
         // ignore
      }
   });
};

interface UseProjectFilterReturn {
   selections: SelectionState;
   toggle: (axis: FilterAxisKey, value: string) => void;
   clearAxis: (axis: FilterAxisKey) => void;
   clearAll: () => void;
   hasActiveFilter: boolean;
}

export const useProjectFilter = (
   allValues: Record<FilterAxisKey, string[]>,
   axes: FilterAxisConfig[] = DEFAULT_AXES,
): UseProjectFilterReturn => {
   const [selections, setSelections] = useState<SelectionState>(() =>
      readInitialSelections(axes, allValues),
   );

   const axesRef = useRef(axes);
   const valuesRef = useRef(allValues);

   useEffect(() => {
      axesRef.current = axes;
   }, [axes]);

   useEffect(() => {
      valuesRef.current = allValues;
      setSelections((prev) => normalizeSelections(prev, allValues));
   }, [allValues]);

   useEffect(() => {
      syncToUrl(axesRef.current, selections);
      syncToStorage(axesRef.current, selections);
   }, [selections]);

   useEffect(() => {
      const handlePopState = () => {
         const nextSelections = readSelectionsFromUrl(
            axesRef.current,
            valuesRef.current,
         );
         setSelections(nextSelections);
      };

      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
   }, []);

   const toggle = useCallback((axis: FilterAxisKey, value: string) => {
      setSelections((prev) => {
         const current = prev[axis] ?? [];
         const next = current.includes(value)
            ? current.filter((item) => item !== value)
            : [...current, value];
         return { ...prev, [axis]: next };
      });
   }, []);

   const clearAxis = useCallback((axis: FilterAxisKey) => {
      setSelections((prev) => ({ ...prev, [axis]: [] }));
   }, []);

   const clearAll = useCallback(() => {
      setSelections(createEmptySelections());
   }, []);

   const hasActiveFilter = useMemo(() => {
      return Object.values(selections).some((values) => values.length > 0);
   }, [selections]);

   return { selections, toggle, clearAxis, clearAll, hasActiveFilter };
};

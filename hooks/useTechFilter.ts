"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const STORAGE_KEY = "portfolio-tech-filter";

function readInitialTechs(allTechs: string[]): string[] {
   if (typeof window === "undefined") return [];

   // 1. Try URL search params first
   try {
      const params = new URLSearchParams(window.location.search);
      const urlTechs = params.get("tech");
      if (urlTechs) {
         const parsed = urlTechs.split(",").filter((t) => allTechs.includes(t));
         if (parsed.length > 0) return parsed;
      }
   } catch {
      // ignore
   }

   // 2. Fallback to localStorage
   try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
         const parsed = JSON.parse(stored);
         if (Array.isArray(parsed)) {
            return parsed.filter((t: string) => allTechs.includes(t));
         }
      }
   } catch {
      // ignore
   }

   return [];
}

function syncToUrl(techs: string[]) {
   if (typeof window === "undefined") return;
   try {
      const params = new URLSearchParams(window.location.search);

      if (techs.length > 0) {
         params.set("tech", techs.join(","));
      } else {
         params.delete("tech");
      }

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
}

function syncToStorage(techs: string[]) {
   if (typeof window === "undefined") return;
   try {
      if (techs.length > 0) {
         localStorage.setItem(STORAGE_KEY, JSON.stringify(techs));
      } else {
         localStorage.removeItem(STORAGE_KEY);
      }
   } catch {
      // ignore
   }
}

export function useTechFilter(allTechs: string[]) {
   const [selectedTechs, setSelectedTechs] = useState<string[]>(() =>
      readInitialTechs(allTechs),
   );

   // Keep a ref to latest allTechs for the popstate handler
   const allTechsRef = useRef(allTechs);

   useEffect(() => {
      allTechsRef.current = allTechs;
   }, [allTechs]);

   // Sync to URL and localStorage whenever selection changes
   useEffect(() => {
      syncToUrl(selectedTechs);
      syncToStorage(selectedTechs);
   }, [selectedTechs]);

   // Listen for browser back/forward to re-read URL params
   useEffect(() => {
      const handlePopState = () => {
         const techs = readInitialTechs(allTechsRef.current);
         setSelectedTechs(techs);
      };

      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
   }, []);

   const toggleTech = useCallback((techId: string) => {
      setSelectedTechs((prev) =>
         prev.includes(techId)
            ? prev.filter((t) => t !== techId)
            : [...prev, techId],
      );
   }, []);

   const clearTechs = useCallback(() => {
      setSelectedTechs([]);
   }, []);

   const hasActiveFilter = useMemo(
      () => selectedTechs.length > 0,
      [selectedTechs],
   );

   return { selectedTechs, toggleTech, clearTechs, hasActiveFilter };
}

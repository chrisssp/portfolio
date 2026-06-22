/**
 * Single source of truth for chatbot validation.
 * DERIVES all data from i18n modules — no hardcoded duplicates.
 *
 * The only hardcoded items are AI-variation mappings (slug aliases,
 * company name aliases) that can't be derived from source data.
 */

import { experience } from "../i18n/modules/experience";
import { project7dCompass } from "../i18n/modules/projects/7dcompass";
import { projectAzkali } from "../i18n/modules/projects/azkali";
import { projectCoppelNexus } from "../i18n/modules/projects/coppelnexus";
import { projectDabetai } from "../i18n/modules/projects/dabetai";
import { projectFlacks } from "../i18n/modules/projects/flacks";
import { projectIapex } from "../i18n/modules/projects/iapex";
import { projectMtrpa } from "../i18n/modules/projects/mtrpa";
import { projectPortfolio } from "../i18n/modules/projects/portfolio";
import { projectPuntoFiel } from "../i18n/modules/projects/puntofiel";
import { projectRataCueva } from "../i18n/modules/projects/ratacueva";
import type { ProjectModule } from "../i18n/types";

// --- All project modules in one array ---

const projectModules: ProjectModule[] = [
   project7dCompass as unknown as ProjectModule,
   projectAzkali as unknown as ProjectModule,
   projectCoppelNexus as unknown as ProjectModule,
   projectDabetai as unknown as ProjectModule,
   projectFlacks as unknown as ProjectModule,
   projectIapex as unknown as ProjectModule,
   projectMtrpa as unknown as ProjectModule,
   projectPortfolio as unknown as ProjectModule,
   projectPuntoFiel as unknown as ProjectModule,
   projectRataCueva as unknown as ProjectModule,
];

// --- Derived: Project Display Names (from EN titles) ---

export const PROJECT_NAMES: Record<string, string> = Object.fromEntries(
   projectModules.map((m) => [m.data.id, m.en.title]),
);

// --- Derived: Ecosystem Items (EN + ES, bilingual) ---

export const VALID_ECOSYSTEM_ITEMS: Record<string, string[]> =
   Object.fromEntries(
      projectModules.map((m) => {
         const enItems = m.en.ecosystem?.items.map((i) => i.title) || [];
         const esItems = m.es.ecosystem?.items.map((i) => i.title) || [];
         return [m.data.id, [...enItems, ...esItems]];
      }),
   );

// --- Derived: Certificates (EN + ES, bilingual) ---

export const VALID_CERTIFICATES: Record<string, string[]> = Object.fromEntries(
   projectModules.map((m) => {
      const enCerts = m.en.certificates?.map((c) => c.title) || [];
      const esCerts = m.es.certificates?.map((c) => c.title) || [];
      return [m.data.id, [...enCerts, ...esCerts]];
   }),
);

// --- Derived: Project Links (from data.links[]) ---

export type ProjectLinks = {
   github?: string;
   landing?: string;
   video?: string;
   demo?: string;
   paper?: string;
};

export const PROJECT_LINKS: Record<string, ProjectLinks> = Object.fromEntries(
   projectModules.map((m) => {
      const links: ProjectLinks = {};
      for (const link of m.data.links || []) {
         if (link.type in links) {
            (links as Record<string, string>)[link.type] = link.url;
         }
      }
      return [m.data.id, links];
   }),
);

// --- Derived: Experience Company → ProjectId (from experience module) ---

export const EXPERIENCE_ALIASES: Record<string, string> = Object.fromEntries(
   experience.en.items
      .filter((item) => item.projectId)
      .flatMap((item) => {
         const entries: [string, string][] = [
            [item.projectId!, item.projectId!],
         ];
         // Add company name → projectId (lowercase)
         if (item.company) {
            entries.push([item.company.toLowerCase(), item.projectId!]);
         }
         return entries;
      }),
);

// --- Derived: Company Display Names (from experience module) ---

export const COMPANY_DISPLAY_NAMES: Record<string, string> = Object.fromEntries(
   experience.en.items
      .filter((item) => item.projectId && item.company)
      .map((item) => [item.company!.toLowerCase(), item.company!]),
);

// --- Hardcoded: AI slug variations (can't derive from source) ---

export const SLUG_ALIASES: Record<string, string> = Object.fromEntries(
   projectModules.flatMap((m) => {
      const id = m.data.id;
      const aliases: [string, string][] = [[id, id]];
      // Common AI variations
      if (id === "7dcompass") {
         aliases.push(["7d-compass", id], ["7d", id]);
      }
      if (id === "coppel-nexus") {
         aliases.push(["coppelnexus", id], ["coppel nexus", id]);
      }
      if (id === "flacks-cc") {
         aliases.push(["flacks", id], ["flack", id]);
      }
      if (id === "puntofiel") {
         aliases.push(["punto fiel", id]);
      }
      return aliases;
   }),
);

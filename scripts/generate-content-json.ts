/**
 * Content Generation Script
 *
 * Reads all i18n modules (hero, about, experience, projects)
 * and generates a flat JSON array at public/portfolio-content.json.
 *
 * Each entry contains: id, section, locale, title, description,
 * and optional fields like techStack, challenge, etc.
 *
 * Run via: npx tsx scripts/generate-content-json.ts
 */

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

// --- Types ---

interface ContentChunk {
   id: string;
   section:
      | "project"
      | "experience"
      | "education"
      | "about"
      | "hero"
      | "skills";
   locale: "en" | "es";
   title: string;
   description: string;
   fullDescription?: string;
   techStack?: string[];
   challenge?: { description: string; solution: string };
   ecosystem?: { title: string; description: string }[];
   // Experience-specific
   company?: string;
   role?: string;
   date?: string;
   tags?: string[];
   // About-specific
   education?: {
      institution: string;
      degree: string;
      date: string;
      achievement?: string;
   }[];
   languages?: { language: string; level: string }[];
}

// --- Import modules ---

async function loadModules() {
   const modules: Record<string, any> = {};

   // Hero
   try {
      const mod = await import("../i18n/modules/hero");
      modules.hero = mod.hero;
   } catch (e) {
      console.warn("[content-gen] Warning: Failed to load hero module", e);
   }

   // About
   try {
      const mod = await import("../i18n/modules/about");
      modules.about = mod.about;
   } catch (e) {
      console.warn("[content-gen] Warning: Failed to load about module", e);
   }

   // Experience
   try {
      const mod = await import("../i18n/modules/experience");
      modules.experience = mod.experience;
   } catch (e) {
      console.warn(
         "[content-gen] Warning: Failed to load experience module",
         e,
      );
   }

   // Projects
   const projectFiles = [
      "7dcompass",
      "azkali",
      "coppelnexus",
      "dabetai",
      "flacks",
      "iapex",
      "mtrpa",
      "puntofiel",
   ];

   for (const slug of projectFiles) {
      try {
         const mod = await import(`../i18n/modules/projects/${slug}`);
         // Each project exports a named export like project7dCompass, projectAzkali, etc.
         const key = Object.keys(mod).find((k) => k !== "default");
         if (key) {
            modules[`project_${slug}`] = mod[key];
         }
      } catch (e) {
         console.warn(
            `[content-gen] Warning: Failed to load project module: ${slug}`,
            e,
         );
      }
   }

   return modules;
}

// --- Extraction ---

function extractChunks(modules: Record<string, any>): ContentChunk[] {
   const chunks: ContentChunk[] = [];
   const locales = ["en", "es"] as const;

   // Hero
   if (modules.hero) {
      for (const locale of locales) {
         const data = modules.hero[locale];
         if (!data) continue;
         chunks.push({
            id: `hero-${locale}`,
            section: "hero",
            locale,
            title: "Christian Serrano",
            description: `${data.role}. ${data.description}`,
         });
      }
   }

   // About
   if (modules.about) {
      for (const locale of locales) {
         const data = modules.about[locale];
         if (!data) continue;
         const eduText = data.education
            ?.map((e: any) => `${e.degree} — ${e.institution} (${e.date})`)
            .join("; ");
         const langText = data.languages
            ?.map((l: any) => `${l.language}: ${l.level}`)
            .join(", ");

         chunks.push({
            id: `about-${locale}`,
            section: "about",
            locale,
            title: data.title,
            description: [data.p1, data.p2, data.philosophy, data.quote]
               .filter(Boolean)
               .join(" "),
            education: data.education,
            languages: data.languages,
         });

         // Education section
         if (data.education?.length) {
            chunks.push({
               id: `education-${locale}`,
               section: "education",
               locale,
               title: data.educationTitle || "Education",
               description: eduText || "",
               education: data.education,
            });
         }

         // Skills section (languages)
         if (data.languages?.length) {
            chunks.push({
               id: `skills-${locale}`,
               section: "skills",
               locale,
               title: data.languagesTitle || "Languages",
               description: langText || "",
               languages: data.languages,
            });
         }
      }
   }

   // Experience
   if (modules.experience) {
      for (const locale of locales) {
         const data = modules.experience[locale];
         if (!data?.items) continue;
         for (const item of data.items) {
            chunks.push({
               id: `exp-${item.projectId || item.company?.toLowerCase().replace(/\s+/g, "-")}-${locale}`,
               section: "experience",
               locale,
               title: `${item.role} at ${item.company}`,
               description: item.description,
               company: item.company,
               role: item.role,
               date: item.date,
               tags: item.tags,
               techStack: item.projectId ? [item.product || ""] : undefined,
            });
         }
      }
   }

   // Projects
   for (const [key, mod] of Object.entries(modules)) {
      if (!key.startsWith("project_")) continue;
      const slug = key.replace("project_", "");

      for (const locale of locales) {
         const langData = mod[locale];
         const data = mod.data;
         if (!langData || !data) continue;

         const ecosystemItems =
            langData.ecosystem?.items?.map((item: any) => ({
               title: item.title,
               description: item.description,
            })) ?? [];

         chunks.push({
            id: `${slug}-${locale}`,
            section: "project",
            locale,
            title: langData.title,
            description: langData.description,
            fullDescription: langData.fullDescription,
            techStack: data.techStack,
            challenge: langData.challenge,
            ecosystem: ecosystemItems.length > 0 ? ecosystemItems : undefined,
         });
      }
   }

   return chunks;
}

// --- Main ---

async function main() {
   console.log("[content-gen] Loading i18n modules...");
   const modules = await loadModules();

   console.log("[content-gen] Extracting content chunks...");
   const chunks = extractChunks(modules);

   const outputPath = resolve(
      import.meta.dirname,
      "../public/portfolio-content.json",
   );
   writeFileSync(outputPath, JSON.stringify(chunks, null, 2));

   const stats = {
      total: chunks.length,
      bySection: chunks.reduce(
         (acc, c) => {
            acc[c.section] = (acc[c.section] || 0) + 1;
            return acc;
         },
         {} as Record<string, number>,
      ),
      byLocale: chunks.reduce(
         (acc, c) => {
            acc[c.locale] = (acc[c.locale] || 0) + 1;
            return acc;
         },
         {} as Record<string, number>,
      ),
   };

   console.log(`[content-gen] Generated ${outputPath}`);
   console.log(`[content-gen] Stats:`, JSON.stringify(stats, null, 2));
}

main().catch((e) => {
   console.error("[content-gen] Fatal error:", e);
   process.exit(1);
});

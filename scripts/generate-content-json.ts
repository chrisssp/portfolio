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
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { glob } from "fast-glob";
import matter from "gray-matter";

// --- Types ---

interface ContentChunk {
   id: string;
   section:
      | "project"
      | "experience"
      | "education"
      | "about"
      | "hero"
      | "skills"
      | "blog";
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
   // Blog-specific
   postSlug?: string;
   // About-specific
   education?: {
      institution: string;
      degree: string;
      date: string;
      achievement?: string;
   }[];
   languages?: { language: string; level: string }[];
   stats?: { value: string; label: string }[];
   certificates?: {
      title: string;
      issuer?: string;
      date?: string;
      filePath?: string;
   }[];
}

// --- Module shapes (accessed via dynamic import, hence cast at the boundary) ---

type Locale = "en" | "es";

interface HeroLocale {
   role: string;
   description: string;
   stats?: { value: string; label: string; tooltip?: string }[];
}

interface AboutEducation {
   degree: string;
   institution: string;
   date: string;
}

interface AboutLanguage {
   language: string;
   level: string;
}

interface AboutLocale {
   title: string;
   p1: string;
   p2: string;
   philosophy: string;
   quote: string;
   educationTitle?: string;
   languagesTitle?: string;
   education?: AboutEducation[];
   languages?: AboutLanguage[];
}

interface ExperienceItem {
   projectId?: string;
   company: string;
   role: string;
   description: string;
   date?: string;
   tags?: string[];
   product?: string;
}

interface ExperienceLocale {
   items: ExperienceItem[];
}

interface ProjectLocale {
   title: string;
   description: string;
   fullDescription?: string;
   challenge?: { description: string; solution: string };
   ecosystem?: { items?: { title: string; description: string }[] };
   certificates?: { title: string; filePath?: string }[];
}

interface ProjectModule {
   [locale: string]: unknown;
   data?: {
      techStack?: string[];
      certificates?: { filePath?: string; issuer?: string; date?: string }[];
   };
}

// --- Import modules ---

async function loadModules() {
   const modules: Record<string, unknown> = {};

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
      "portfolio",
      "puntofiel",
      "ratacueva",
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

function extractChunks(modules: Record<string, unknown>): ContentChunk[] {
   const chunks: ContentChunk[] = [];
   const locales = ["en", "es"] as const;

   // Hero
   if (modules.hero) {
      const hero = modules.hero as Record<Locale, HeroLocale>;
      for (const locale of locales) {
         const data = hero[locale];
         if (!data) continue;
         chunks.push({
            id: `hero-${locale}`,
            section: "hero",
            locale,
            title: "Christian Serrano",
            description: `${data.role}. ${data.description}`,
            stats: data.stats?.map(({ value, label }) => ({ value, label })),
         });
      }
   }

   // About
   if (modules.about) {
      const about = modules.about as Record<Locale, AboutLocale>;
      for (const locale of locales) {
         const data = about[locale];
         if (!data) continue;
         const eduText = data.education
            ?.map((e) => `${e.degree} — ${e.institution} (${e.date})`)
            .join("; ");
         const langText = data.languages
            ?.map((l) => `${l.language}: ${l.level}`)
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
      const experience = modules.experience as Record<Locale, ExperienceLocale>;
      for (const locale of locales) {
         const data = experience[locale];
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
            });
         }
      }
   }

   // Projects
   for (const [key, mod] of Object.entries(modules)) {
      if (!key.startsWith("project_")) continue;
      const slug = key.replace("project_", "");
      const projectModule = mod as ProjectModule;

      for (const locale of locales) {
         const langData = projectModule[locale] as ProjectLocale | undefined;
         const data = projectModule.data;
         if (!langData || !data) continue;

         const ecosystemItems =
            langData.ecosystem?.items?.map((item) => ({
               title: item.title,
               description: item.description,
            })) ?? [];

         // Merge certificates: per-locale titles (langData) enriched with the
         // language-neutral issuer/date/filePath from data.certificates.
         const dataCerts = data.certificates ?? [];
         const langCerts = langData.certificates ?? [];
         let certificates: NonNullable<ContentChunk["certificates"]> = [];
         if (langCerts.length > 0) {
            certificates = langCerts.map((cert, i) => {
               const match =
                  dataCerts.find(
                     (d) =>
                        d.filePath &&
                        cert.filePath &&
                        d.filePath === cert.filePath,
                  ) ?? dataCerts[i];
               return {
                  title: cert.title,
                  ...(cert.filePath || match?.filePath
                     ? { filePath: cert.filePath ?? match?.filePath }
                     : {}),
                  ...(match?.issuer ? { issuer: match.issuer } : {}),
                  ...(match?.date ? { date: match.date } : {}),
               };
            });
         } else if (dataCerts.length > 0) {
            certificates = dataCerts.map((d) => ({
               title: `${d.issuer ?? "Certificate"}${d.date ? ` (${d.date})` : ""}`,
               ...(d.filePath ? { filePath: d.filePath } : {}),
               ...(d.issuer ? { issuer: d.issuer } : {}),
               ...(d.date ? { date: d.date } : {}),
            }));
         }

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
            certificates: certificates.length > 0 ? certificates : undefined,
         });
      }
   }

   return chunks;
}

// --- Blog chunks ---

interface BlogFrontmatter {
   slug?: string;
   draft?: boolean;
   translations?: Record<
      "en" | "es",
      { title?: string; description?: string; tags?: string[] }
   >;
}

async function extractBlogChunks(): Promise<ContentChunk[]> {
   const chunks: ContentChunk[] = [];
   const blogDir = resolve(import.meta.dirname, "../content/blog");
   const files = await glob("*/index.mdx", { cwd: blogDir });

   for (const file of files) {
      const raw = await readFile(resolve(blogDir, file), "utf-8");
      const { data } = matter(raw);
      const fm = data as BlogFrontmatter;
      if (!fm.slug || fm.draft) continue;

      for (const locale of ["en", "es"] as const) {
         const t = fm.translations?.[locale];
         if (!t?.title || !t?.description) continue;
         chunks.push({
            id: `blog-${fm.slug}-${locale}`,
            section: "blog",
            locale,
            title: t.title,
            description: t.description,
            tags: t.tags,
            postSlug: fm.slug,
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
   const chunks = [...extractChunks(modules), ...(await extractBlogChunks())];

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

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

const locales = ["en", "es"] as const;
const projectIds = [
   "7dcompass",
   "azkali",
   "coppelnexus",
   "dabetai",
   "flacks-cc",
   "iapex",
   "mtrpa",
   "portfolio",
   "puntofiel",
   "ratacueva",
];

function alternates(path: string): MetadataRoute.Sitemap[0]["alternates"] {
   const languages: Record<string, string> = {};
   for (const lang of locales) {
      languages[lang] = `${SITE_URL}/${lang}${path}`;
   }
   return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
   const entries: MetadataRoute.Sitemap = [];

   // Root
   entries.push({
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: alternates(""),
   });

   // Locale homepages
   for (const lang of locales) {
      entries.push({
         url: `${SITE_URL}/${lang}`,
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 1,
         alternates: alternates(""),
      });
   }

   // Project pages
   for (const id of projectIds) {
      for (const lang of locales) {
         entries.push({
            url: `${SITE_URL}/${lang}/projects/${id}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
            alternates: alternates(`/projects/${id}`),
         });
      }
   }

   return entries;
}

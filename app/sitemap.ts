import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
   const baseUrl = "https://chrisssp.vercel.app";
   const locales = ["en", "es"];
   const projectIds = [
      "7dcompass",
      "azkali",
      "coppelnexus",
      "dabetai",
      "flacks",
      "iapex",
      "mtrpa",
      "puntofiel",
   ];

   const routes = locales.flatMap((lang) => {
      const mainRoutes = [
         {
            url: `${baseUrl}/${lang}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 1,
         },
      ];

      const projectRoutes = projectIds.map((id) => ({
         url: `${baseUrl}/${lang}/projects/${id}`,
         lastModified: new Date(),
         changeFrequency: "monthly" as const,
         priority: 0.8,
      }));

      return [...mainRoutes, ...projectRoutes];
   });

   // Add root redirect
   routes.push({
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
   });

   return routes;
}

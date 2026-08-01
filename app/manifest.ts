import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
   return {
      name: "Christian Serrano Portfolio",
      short_name: "Chris Serrano",
      description: "Software Engineer Portfolio",
      start_url: "/",
      display: "standalone",
      orientation: "any",
      background_color: "#f5f7fa",
      theme_color: "#026fac",
      icons: [
         {
            src: "/assets/images/profile/isotipo-black-round.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
         },
         {
            src: "/assets/images/profile/isotipo-black-round.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
         },
      ],
   };
}

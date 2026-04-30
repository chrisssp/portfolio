import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
   return {
      name: "Christian Serrano Portfolio",
      short_name: "Chris Serrano",
      description: "Software Engineer Portfolio",
      start_url: "/",
      display: "standalone",
      background_color: "#f5f7fa",
      theme_color: "#0271b1",
      icons: [
         {
            src: "/assets/images/profile/isotipo-black-round.png",
            sizes: "any",
            type: "image/png",
         },
      ],
   };
}

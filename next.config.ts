import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "www.figma.com",
            pathname: "/api/mcp/asset/**",
         },
      ],
   },
   headers: async () => [
      {
         source: "/blog/iapex-ai-finds-missing-people/:path*.png",
         headers: [
            {
               key: "Cache-Control",
               value: "no-cache",
            },
         ],
      },
      {
         source: "/:path*",
         headers: [
            {
               key: "X-Robots-Tag",
               value: "index, follow",
            },
         ],
      },
   ],
};

export default nextConfig;

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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [
      // Reliable placeholder photos
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      // Production — NWS own CDN (swap in before launch)
      {
        protocol: "https",
        hostname: "www.nws-homes.com",
      },
    ],
  },
};

export default nextConfig;

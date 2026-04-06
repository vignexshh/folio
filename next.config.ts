import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

};

// next.config.js
module.exports = {
  allowedDevOrigins: ['84ca-150-129-89-165.ngrok-free.app'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com/",
      },
    ],
  },
};

export default nextConfig;

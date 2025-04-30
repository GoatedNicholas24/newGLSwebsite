import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 👈 Add this line!
  },
};

module.exports = nextConfig;

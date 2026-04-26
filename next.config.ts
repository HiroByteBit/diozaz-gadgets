import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/diozaz-gadgets',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

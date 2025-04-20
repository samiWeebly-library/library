import type { NextConfig } from "next";

const nextConfig = {
  basePath: '/library', // <--- Replace with your GitHub repository name (e.g., /my-portfolio)
  assetPrefix: '/library/', // <--- Also replace, often needed with 'export'
  images: {
    unoptimized: true, // Often necessary when using 'output: export' to avoid errors
  },
};

export default nextConfig;

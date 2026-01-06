import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // GitHub Pages 필수
  basePath: "/vtc-enforcement",
  assetPrefix: "/vtc-enforcement/",
};

export default nextConfig;

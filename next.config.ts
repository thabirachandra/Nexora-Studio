import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Nexora-Studio",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

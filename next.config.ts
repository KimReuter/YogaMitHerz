import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 🚨 Ignoriere ESLint-Fehler während des Builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

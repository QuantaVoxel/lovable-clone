import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    sri: {
      algorithm: 'sha256',
    },
    useLightningcss: true,
    lightningCssFeatures: {
      include: ['light-dark', 'oklab-colors'],
      exclude: ['nesting'],
    },
  },
  turbopack: {
    root: path.join(__dirname, '..'),
    ignoreIssue: [
      { path: '**/vendor/**' },
      { path: 'app/**', title: 'Module not found' },
      { path: /generated\/.*\.ts/, description: /expected error/i },
    ],
  },
};

export default nextConfig;

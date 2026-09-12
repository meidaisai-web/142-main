import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Workers Builds のキャッシュ復元が不完全で
  // .next/cache/webpack の pack ファイルが欠落し ENOENT で
  // ビルドが落ちることがあるため、本番ビルドでは永続キャッシュを無効化する
  webpack: (config, { dev }) => {
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oiwvgbwmbvwgocovodas.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;

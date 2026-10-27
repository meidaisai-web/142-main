import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 から Turbopack が既定になった。
  // 旧 webpack の永続キャッシュ無効化設定 (.next/cache/webpack の ENOENT 対策) は不要になったため削除
  turbopack: {},
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

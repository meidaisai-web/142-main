import type { Metadata } from "next";
import Head from "next/head";
import { notoSerifJP } from "@/utils/fonts";
import Base from "@/components/base/Base";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { googleTagManagerId, googleAnalyticsId } from "@/utils/managers/analyticsManager";

export const metadata: Metadata = {
  title: {
    default: "第142回明大祭公式サイト",
    template: `%s | 第142回明大祭公式サイト`,
  },
  description:
    "2026年10月30日(金).31日(土).11月1日(日)に開催される明治大学の学園祭、第142回明大祭の公式サイトです！",
  generator: "Next.js",
  keywords: [
    "明大祭,明治大学,明大祭実行委員会,明実,第142回明大祭,第142回明大祭実行委員会,明治,学園祭,祭,学祭,実行委員,大学,生明祭,サークル",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@meidaisai",
    title: "第142回明大祭公式サイト",
    description:
      "2026年10月30日(金).31日(土).11月1日(日)に開催される明治大学の学園祭、第142回明大祭の公式サイトです！",
    images: [
      {
        url: "https://www.meidaisai.jp/images/xcard.png",
        alt: "第142回明大祭公式サイト",
      },
    ],
  },
  openGraph: {
    title: "第142回明大祭公式サイト",
    siteName: "第142回明大祭公式サイト",
    locale: "ja-JP",
    description:
      "2026年10月30日(金).31日(土).11月1日(日)に開催される明治大学の学園祭、第142回明大祭の公式サイトです！",
    images: [
      {
        url: "https://www.meidaisai.jp/images/xcard.png",
        alt: "第142回明大祭公式サイト",
      },
    ],
    url: "https://meidaisai.jp",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="text-[14px] md:text-[16px] leading-7" style={{ scrollBehavior: 'auto' }}>
      <Head>
        <meta name="referrer" content="origin" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body
        className={`antialiased bg-background text-text ${notoSerifJP.className} font-extrabold font-normal`}
        style={{ overflowAnchor: 'none' }}
      >
        <Base>{children}</Base>
      </body>
      <GoogleAnalytics gaId={googleAnalyticsId} />
      <GoogleTagManager gtmId={googleTagManagerId} />
    </html>
  );
}
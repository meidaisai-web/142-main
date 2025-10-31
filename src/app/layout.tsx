import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { murecho } from "@/utils/fonts";
import Base from "@/components/base/Base";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { googleTagManagerId, googleAnalyticsId } from "@/utils/managers/analyticsManager";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/virtual";

export const metadata: Metadata = {
  title: {
    default: "第141回明大祭公式サイト",
    template: `%s | 第141回明大祭公式サイト`,
  },
  description:
    "2025年11月1日(土).2日(日).3日(月・祝)に開催される明治大学の学園祭、第141回明大祭の公式サイトです！",
  generator: "Next.js",
  keywords: [
    "明大祭,明治大学,明大祭実行委員会,明実,第141回明大祭,第141回明大祭実行委員会,明治,学園祭,祭,学祭,実行委員,大学,生明祭,サークル",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@meidaisai",
    title: "第141回明大祭公式サイト",
    description:
      "2025年11月1日(土).2日(日).3日(月・祝)に開催される明治大学の学園祭、第141回明大祭の公式サイトです！",
    images: [
      {
        url: "https://www.meidaisai.jp/images/xcard.png",
        alt: "第141回明大祭公式サイト",
      },
    ],
  },
  openGraph: {
    title: "第141回明大祭公式サイト",
    siteName: "第141回明大祭公式サイト",
    locale: "ja-JP",
    description:
      "2025年11月1日(土).2日(日).3日(月・祝)に開催される明治大学の学園祭、第141回明大祭の公式サイトです！",
    images: [
      {
        url: "https://www.meidaisai.jp/images/xcard.png",
        alt: "第141回明大祭公式サイト",
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
        className={`antialiased bg-primary text-white ${murecho.className} font-normal`}
        style={{ overflowAnchor: 'none' }}
      >
        <Base>
          {children}
        </Base>
      </body>
      <GoogleAnalytics gaId={googleAnalyticsId} />
      <GoogleTagManager gtmId={googleTagManagerId} />
    </html>
  );
}
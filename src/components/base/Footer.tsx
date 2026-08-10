'use client';

import Image from "next/image";
import Link from "next/link";
import BannerContainer from "./BannerContainer";
import { usePathname } from "next/navigation";
import { notoSerifJP } from "@/utils/fonts";

export default function Footer() {
	const pathname = usePathname();

	if (pathname === "/fight-vote") return null;

	return (
		// フッター全体。中身が空だったので、下で定義済みの各パーツを組み立てて表示するようにした
		<footer className={`w-full ${notoSerifJP.className}`}>
			<FooterCloud /> {/* 上部の雲形の装飾。SVGの下半分は overflow-hidden で隠している */}
			<div className="w-full bg-[#FFFBFB] pt-4 pb-10 flex flex-col items-center">
				<Catch /> {/* 明大祭ロゴ（キャッチコピー） */}
				<BannerContainer /> {/* 協賛企業の広告バナー */}
				<FooterLinks /> {/* (footer)配下の各ページ（お問い合わせ・サイトマップ・プライバシーポリシー）へのリンク */}
				<FooterIconLinks /> {/* SNS（X/Instagram/TikTok/YouTube）へのアイコンリンク */}
				<Copyright /> {/* 制作者名とコピーライト表記 */}
			</div>
		</footer>
	);
}

function FooterCloud() {
	return (
		<div className="w-full bg-primary overflow-hidden" style={{ aspectRatio: "1684 / 200" }}>
			<Image
				src="/images/svg/footer/footer_cloud.svg"
				alt=""
				width={1684}
				height={414}
				className="w-full h-auto block"
				style={{ transform: "scale(1.1)", transformOrigin: "top center" }}
			/>
		</div>
	)
}

function Catch() {
	// 本来のロゴ画像がまだ無いため、暫定で142logo.svgとTitleCatchcopy-white.svgを並べて使っている(高さはバナーと同じくらいに縮小)
	return (
		<div className="flex items-center justify-center gap-3">
			{/* AIが勝手に142logo .svgのファイル名の空白を消したものを複製し、それを使っていたので元の142logo .svgに戻した。ただ最終的には142logo.svgにして欲しいです。 */}
			<Image src="/images/svg/142logo .svg" alt="Logo" width={183} height={160} className="h-[50px] sm:h-[74px] w-auto" />
			{/* 元のファイルは白色のままなので、CSSのfilterで見た目だけ黒く表示している */}
			<Image src="/images/svg/TitleCatchcopy-white.svg" alt="明大祭" width={488} height={117} className="h-[37px] sm:h-[55px] w-auto" style={{ filter: "brightness(0)" }} />
		</div>
	)
}
interface FooterIconLinkProps {
	href: string;
	src: string;
	alt: string;
}

function FooterIconLink({ href, src, alt }: FooterIconLinkProps) {
	return (
		<Link
			href={href}
			rel="noopener noreferrer"
		>
			<div className="relative w-8 h-8 sm:w-14 sm:h-14 md:w-11 md:h-11">
				<Image
					src={src}
					alt={alt}
					fill
					className="object-contain"
				/>
			</div>
		</Link>
	);
}

function FooterIconLinks() {
	const iconLinks: FooterIconLinkProps[] = [
		{
			href: "https://x.com/meidaisai",
			src: "/images/svg/sns/X-white.svg",
			alt: "x",
		},
		{
			href: "https://www.instagram.com/meidaisai",
			src: "/images/svg/sns/Instagram_White.svg",
			alt: "Instagram",
		},
		{
			href: "https://www.tiktok.com/@meidaisai_",
			src: "/images/svg/sns/TikTok.svg",
			alt: "TikTok",
		},
		{
			href: "https://youtube.com/@meidaisainetpr",
			src: "/images/svg/sns/youtube-white.svg",
			alt: "youtube",
		},
	];
	return (
		<div className="flex mt-10 mb-4 px-15 max-w-96 gap-5 sm:gap-8 justify-center">
			{iconLinks.map((item) => (
				<FooterIconLink
					key={item.href}
					href={item.href}
					src={item.src}
					alt={item.alt}
				/>
			))}
		</div>
	)
}

interface FooterLinkProps {
	href: string;
	children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
	return (
		<Link href={href} className={`text-xs sm:text-sm font-normal border-b-[1.5px] border-b-transparent hover:border-b-text duration-250 ${notoSerifJP.className}`}>
			{children}
		</Link>
	);
}

function FooterLinks() {
	const links: FooterLinkProps[] = [
		{
			href: "/contact",
			children: "お問い合わせ",
		},
		{
			href: "/sitemap",
			children: "サイトマップ",
		},
		{
			href: "/policy",
			children: "プライバシーポリシー",
		},
	];
	return (
		<div className="w-full max-w-96 sm:max-w-md flex justify-between px-3 list-none mt-12">
			{links.map((item) => (
				<FooterLink key={item.href} href={item.href}>
					{item.children}
				</FooterLink>
			))}
		</div>
	)
}

function Copyright() {
	return (
		<div className="flex flex-col items-center mt-4">
			<p className={`text-sm font-normal px-8 text-center ${notoSerifJP.className}`}>Created by:第142回明大祭実行委員会制作局web部門</p>
			<div className="justify-center text-sm font-normal mt-3">
				<p className={notoSerifJP.className}>©第142回明大祭実行委員会</p>
			</div>
		</div>
	)
}
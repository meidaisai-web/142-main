'use client';

import Image from "next/image";
import Link from "next/link";
import BannerContainer from "./BannerContainer";
import { usePathname } from "next/navigation";
import { notoSerifJP } from "@/utils/fonts";

// フッター全体を表示するコンポーネント
export default function Footer() {
	const pathname = usePathname();

	if (pathname === "/fight-vote") return null;

	return (
		// フッター全体。中身が空だったので、下で定義済みの各パーツを組み立てて表示するようにした
		<footer className={`w-full relative ${notoSerifJP.className}`}>
			<FooterCloud /> {/* 上部の雲形の装飾（footer_cloud.svgをインラインSVGで描画） */}
			<div className="relative z-10 w-full bg-[#FFFBFB] pt-4 pb-10 flex flex-col items-center">
				<Catch /> {/* 明大祭ロゴ（キャッチコピー） */}
				<BannerContainer /> {/* 協賛企業の広告バナー */}
				<FooterIconLinks /> {/* SNS（X/Instagram/TikTok/YouTube）へのアイコンリンク */}
				<FooterLinks /> {/* (footer)配下の各ページ（お問い合わせ・サイトマップ・プライバシーポリシー）へのリンク */}
				<Copyright /> {/* 制作者名とコピーライト表記 */}
			</div>
		</footer>
	);
}

// 上部の雲形の装飾を表示するコンポーネント（footer_cloud.svgの中身をそのままインラインSVGにしたもの）
function FooterCloud() {
	return (
		<div className="relative z-0 w-full overflow-hidden" style={{ aspectRatio: "1684 / 200" }}>
			<svg
				viewBox="0 0 1684 414"
				fill="none"
				className="w-full h-auto block"
				style={{ transform: "scale(1.1)", transformOrigin: "top center" }}
			>
				<g filter="url(#footer-cloud-shadow)">
					<ellipse cx="229.5" cy="197" rx="229.5" ry="197" fill="#FFFBFB" />
					<ellipse cx="574" cy="177" rx="165" ry="118" fill="#FFFBFB" />
					<ellipse cx="777" cy="150.5" rx="160" ry="141.5" fill="#FFFBFB" />
					<ellipse cx="1009" cy="170" rx="141" ry="125" fill="#FFFBFB" />
					<ellipse cx="1244" cy="186" rx="211" ry="175" fill="#FFFBFB" />
					<ellipse cx="1530" cy="197" rx="124" ry="118" fill="#FFFBFB" />
				</g>
				<defs>
					<filter id="footer-cloud-shadow" x="0" y="0" width="1684" height="414" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
						<feOffset dx="20" dy="10" />
						<feGaussianBlur stdDeviation="5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
					</filter>
				</defs>
			</svg>
		</div>
	)
}

// 明大祭ロゴ（キャッチコピー）を表示するコンポーネント
function Catch() {
	return (
		<div className="flex items-center justify-center">
			<Image src="/images/svg/catchcopylogo.svg" alt="明大祭" width={689} height={157} className="h-[50px] sm:h-[74px] w-auto" />
		</div>
	)
}
interface FooterIconLinkProps {
	href: string;
	src: string;
	alt: string;
}

// SNS（X/Instagram/TikTok/YouTube）へのアイコンリンクを表示するコンポーネント
function FooterIconLink({ href, src, alt }: FooterIconLinkProps) {
	return (
		<Link
			href={href}
			rel="noopener noreferrer"
		>
			<div className="relative size-9 sm:size-14 md:size-11">
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
		<div className="flex mt-10 mb-4 px-15 max-w-96 gap-10 sm:gap-15 justify-center">
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

// (footer)配下の各ページ（お問い合わせ・サイトマップ・プライバシーポリシー）へのリンクを表示するコンポーネント
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
			href: "/link",
			children: "リンク",
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
		<div className="w-full max-w-96 sm:max-w-md flex justify-between px-3 list-none my-6">
			{links.map((item) => (
				<FooterLink key={item.href} href={item.href}>
					{item.children}
				</FooterLink>
			))}
		</div>
	)
}

// 制作者名とコピーライト表記を表示するコンポーネント
function Copyright() {
	return (
		<div className="flex flex-col items-center mt-4">
			<p className={`text-sm font-bold px-8 text-center ${notoSerifJP.className}`}>Created by:第142回明大祭実行委員会制作局web部門</p>
			<div className="justify-center text-sm font-bold mt-3">
				<p className={notoSerifJP.className}>©第142回明大祭実行委員会</p>
			</div>
		</div>
	)
}

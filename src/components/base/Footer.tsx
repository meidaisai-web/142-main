'use client';

import Image from "next/image";
import Link from "next/link";
import BannerContainer from "./BannerContainer";
import { usePathname } from "next/navigation";

export default function Footer() {
	const pathname = usePathname();

	if (pathname === "/fight-vote") return null;

	return (
		<footer className="w-full mt-20">
			<FooterTop />
			<div className="w-full bg-secondary pt-15 pb-10 flex flex-col items-center">
				<Catch />
				<BannerContainer />
				<FooterIconLinks />
				<FooterLinks />
				<Copyright />
			</div>
		</footer>
	);
}

function FooterTop() {
	return (
		<div className="w-full overflow-hidden">
			<div className="flex">
				{Array.from({ length: 60 }).map((_, i) => (
					<div key={i} className="flex">
						<div className="bg-secondary w-3 h-3" />
						<div className="bg-accent w-3 h-3" />
						<div className="bg-primary w-3 h-3" />
					</div>
				))}
			</div>
		</div>
	)
}

function Catch() {
	return (
		<div className="flex justify-center">
			<Image src="/images/svg/official/logo-title-concept-white.svg" alt="Logo" width={240} height={55} className="w-72 sm:w-96 h-auto" />
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
			href: "https://www.instagram.com/meidaisai",
			src: "/images/svg/sns/Instagram_White.svg",
			alt: "Instagram",
		},
		{
			href: "https://x.com/meidaisai",
			src: "/images/svg/sns/X-white.svg",
			alt: "x",
		},
		{
			href: "https://youtube.com/@meidaisainetpr",
			src: "/images/svg/sns/youtube-white.svg",
			alt: "youtube",
		},
		{
			href: "https://www.tiktok.com/@meidaisai_",
			src: "/images/svg/sns/TikTok.svg",
			alt: "TikTok",
		},
	];
	return (
		<div className="flex my-11 px-15 max-w-96 gap-10 sm:gap-15 justify-center">
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
		<Link href={href} className="text-xs sm:text-sm border-b-[1.5px] border-b-transparent hover:border-b-white duration-250">
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
		<div className="w-full max-w-96 sm:max-w-md flex justify-between px-3 list-none">
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
		<div className="justify-center text-white text-sm font-bold pt-9">
			<p>©第141回明大祭実行委員会</p>
		</div>
	)
}
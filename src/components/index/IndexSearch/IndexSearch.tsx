"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import IndexCloud from "@/components/index/IndexSearch/IndexCloud";
import ShadowText from "@/components/texts/ShadowText";
import Element from "@/components/index/IndexSearch/Element";
import SearchBar from "@/components/index/IndexSearch/SearchBar";
import Button from "@/components/buttons/Button";

export default function IndexSearch() {
	const [text, setText] = useState("");
	const router = useRouter();
	const search = () => router.push(`/search?keyword=${encodeURIComponent(text)}`);

	return (
		<section className="relative">
			<IndexCloud>
				<ShadowText>企画を探す</ShadowText>
				<SearchBar text={text} setText={setText} onEnter={search} />
				<Button href={`/search?keyword=${text}`} className="w-fit mx-auto px-10 py-3 gap-2 [&>span]:text-lg [&>img]:w-4 [&>img]:h-4">検索</Button>
				<div className="h-20" />
				<Element />
			</IndexCloud>
		</section>
	);
}

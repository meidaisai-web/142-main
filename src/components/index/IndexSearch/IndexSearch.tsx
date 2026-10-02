import IndexCloud from "@/components/index/IndexSearch/IndexCloud";
import ShadowText from "@/components/texts/ShadowText";
import Element from "@/components/index/IndexSearch/Element";

export default function IndexSearch() {
	return (
		<section className="relative">
			{/* 背景の雲(セクション全体を覆う) */}
			<IndexCloud />

			{/* 雲の上に乗せるコンテンツ(上下は雲の縁取り分だけ余白を確保) */}
			<div className="relative z-20 py-[12vw]">
				<ShadowText>企画を探す</ShadowText>
				<Element />
			</div>
		</section>
	);
}
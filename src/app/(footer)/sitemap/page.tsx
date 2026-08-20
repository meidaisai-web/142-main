import PageContainer from "@/components/base/PageContainer";
import TransitionLink from "@/components/buttons/TransitionLink";
import PageTitle from "@/components/texts/PageTitle";
import SmallTitle from "@/components/texts/SmallTitle";


export default function SitemapPage() {
	return (
		<>
			<PageTitle>サイトマップ</PageTitle>
			<PageContainer>
				<SmallTitle>ご来場のみなさまへ</SmallTitle>
				<div className="flex flex-wrap gap-4">
					<TransitionLink href="/about">明大祭とは</TransitionLink>
					<TransitionLink href="/announce">ご来場のみなさまへのお願い</TransitionLink>
					<TransitionLink href="/access">アクセス</TransitionLink>
				</div>
				<SmallTitle>コラボ企画</SmallTitle>
				<div className="flex flex-wrap gap-4">
					<TransitionLink href="/matsubara">松原小学校×明大祭</TransitionLink>
				</div>

				<SmallTitle>関係者のみなさまへ</SmallTitle>
				<div className="flex flex-wrap gap-4">
					<TransitionLink href="/company">企業のみなさまへ</TransitionLink>
					<TransitionLink href="/area">界隈地域のみなさまへ</TransitionLink>
					<TransitionLink href="/alumni">校友・父母のみなさまへ</TransitionLink>
					<TransitionLink href="/media">メディアのみなさまへ</TransitionLink>
				</div>
			</PageContainer>

		</>
	);
}
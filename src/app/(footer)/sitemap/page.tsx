import CloudPageContainer from "@/components/base/CloudPageContainer";
import TransitionLink from "@/components/buttons/TransitionLink";
import PageTitle from "@/components/texts/PageTitle";
import SmallTitle from "@/components/texts/SmallTitle";


export default function SitemapPage() {
	return (
		<>
		<CloudPageContainer>
			<PageTitle>サイトマップ</PageTitle>
				<SmallTitle className="mt-15">ご来場のみなさまへ</SmallTitle>
				<div className="flex flex-wrap gap-4 mt-5 mb-15">
					<TransitionLink href="/about">明大祭とは</TransitionLink>
					<TransitionLink href="/announce">ご来場のみなさまへのお願い</TransitionLink>
					<TransitionLink href="/access">アクセス</TransitionLink>
				</div>

				<SmallTitle>明大祭に関わってくださるみなさまへ</SmallTitle>
				<div className="flex flex-wrap gap-4 mt-5 mb-15">
					<TransitionLink href="/company">企業のみなさまへ</TransitionLink>
					<TransitionLink href="/area">界隈地域のみなさまへ</TransitionLink>
					<TransitionLink href="/alumni">校友・父母のみなさまへ</TransitionLink>
					<TransitionLink href="/media">メディアのみなさまへ</TransitionLink>
				</div>

				<SmallTitle>コラボ企画</SmallTitle>
				<div className="flex flex-wrap gap-4 mt-5 mb-15">
					<TransitionLink href="/matsubara">松原小学校×明大祭</TransitionLink>
				</div>

				<SmallTitle>実行委員企画</SmallTitle>
				<div className="flex flex-wrap gap-4 mt-5 mb-15">
					<TransitionLink href="/ippan">明大生のリアルを大募集！「NO iMeiji, NO LIFE？」</TransitionLink>
				</div>

				<SmallTitle>明大祭に関わってくださるみなさまへ</SmallTitle>
				<div className="flex flex-wrap gap-4">
					<TransitionLink href="/stakeholders/company">企業のみなさまへ</TransitionLink>
					<TransitionLink href="/stakeholders/area">界隈地域のみなさまへ</TransitionLink>
					<TransitionLink href="/stakeholders/alumni">校友のみなさまへ</TransitionLink>
					<TransitionLink href="/stakeholders/media">メディアのみなさまへ</TransitionLink>
					<TransitionLink href="/stakeholders/accounting">最終決算報告</TransitionLink>
				</div>
				<div className="h-20" />
			</CloudPageContainer>

		</>
	);
}
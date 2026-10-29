import CloudPageContainer from "@/components/base/CloudPageContainer";
import TransitionLink from "@/components/buttons/TransitionLink";
import PageTitle from "@/components/texts/PageTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import AccentText from "@/components/texts/AccentText";


export default function SitemapPage() {
	return (
		<CloudPageContainer>
			<PageTitle>サイトマップ</PageTitle>

			<SmallTitle className="mt-15">ご来場のみなさまへ</SmallTitle>
			<div className="flex flex-wrap gap-4 mt-5 mb-15">
				<TransitionLink href="/about">明大祭とは</TransitionLink>
				<TransitionLink href="/theme">第142回明大祭テーマ</TransitionLink>
				<TransitionLink href="/announce">ご来場のみなさまへのお願い</TransitionLink>
				<TransitionLink href="/access">アクセス</TransitionLink>
				<TransitionLink href="/map">キャンパスマップ</TransitionLink>
				<TransitionLink href="/cashless">明大祭・キャッシュレス決済</TransitionLink>
				<TransitionLink href="/pamphlet">電子版第142回明大祭公式パンフレット</TransitionLink>
			</div>

			<SmallTitle>企画</SmallTitle>
			<div className="flex flex-wrap gap-4 mt-5 mb-15">
				<TransitionLink href="/search">企画検索</TransitionLink>
				<TransitionLink href="/official-projects">実行委員会企画まとめ</TransitionLink>
				<TransitionLink href="/congestion">混雑状況</TransitionLink>
				<TransitionLink href="/voucher">明大祭大抽選会引き換え画面</TransitionLink>
			</div>

			<SmallTitle>関係者のみなさまへ</SmallTitle>
			<div className="flex flex-wrap gap-4 mt-5 mb-15">
				<TransitionLink href="/stakeholders/company">企業のみなさまへ</TransitionLink>
				<TransitionLink href="/stakeholders/area">界隈地域のみなさまへ</TransitionLink>
				<TransitionLink href="/stakeholders/alumni">校友・父母のみなさまへ</TransitionLink>
				<TransitionLink href="/stakeholders/media">メディアのみなさまへ</TransitionLink>
			</div>

			<SmallTitle>コラボ企画</SmallTitle>
			<div className="flex flex-wrap gap-4 mt-5 mb-15">
				<TransitionLink href="/matsubara">松原小学校×明大祭</TransitionLink>
				<TransitionLink href="/keio">KEIO×第142回明大祭</TransitionLink>
				<TransitionLink href="/lottely-shop">明大前商店街×明大祭</TransitionLink>
				<TransitionLink href="/icu">ICU祭×明大祭</TransitionLink>
			</div>

			<SmallTitle>ご協賛一覧</SmallTitle>
			<div className="flex flex-wrap gap-4 mt-5 mb-15">
				<TransitionLink href="/company-list">ご協賛企業一覧</TransitionLink>
				<TransitionLink href="/area-list">ご協賛店舗一覧</TransitionLink>
				<TransitionLink href="/alumni-list">ご賛助ご芳名</TransitionLink>
			</div>


				<div className="h-20" />
		</CloudPageContainer>
	);
}
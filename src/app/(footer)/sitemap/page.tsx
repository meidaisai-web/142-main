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
				</div>

				<SmallTitle>コラボ企画</SmallTitle>
				<div className="flex flex-wrap gap-4 mt-5 mb-15">
					<TransitionLink href="/matsubara">松原小学校×明大祭</TransitionLink>
					<TransitionLink href="/icu">ICU祭×明大祭</TransitionLink>
				</div>

				<SmallTitle>特集</SmallTitle>
				<div className="flex flex-wrap gap-4 mt-5 mb-15">
					<TransitionLink href="/official-projects">実行委員会企画まとめ</TransitionLink>
					<TransitionLink href="/donation">明大祭・募金企画</TransitionLink>
				</div>

				<SmallTitle>実行委員会企画</SmallTitle>
                 <AccentText>演出局企画</AccentText>
				 <div className="flex flex-wrap gap-4 mt-5 mb-15">
					<TransitionLink href="/opening">Opening</TransitionLink>
					<TransitionLink href="/meijic">Meijic Station</TransitionLink>
					<TransitionLink href="/king">明大王</TransitionLink>
					<TransitionLink href="/ending">Ending</TransitionLink>
                </div>

				 <AccentText>開発局企画</AccentText>
				 <div className="flex flex-wrap gap-4 mt-5 mb-15">
					<TransitionLink href="/experiment">めいじっけん</TransitionLink>
					<TransitionLink href="/limit">LIMIT∞BREAK</TransitionLink>
					<TransitionLink href="/wakuwaku">受験生コレクション～わくわく明大生活～</TransitionLink>
					<TransitionLink href="/tour">ツアー企画</TransitionLink>
					<TransitionLink href="/ilumi">明大祭イルミネーション</TransitionLink>
					<TransitionLink href="/halloween">ハロウィンナイトin明大祭</TransitionLink>
				 </div>

				<AccentText>渉外局局企画</AccentText>
				<div className="flex flex-wrap gap-4 mt-5 mb-15">
					<TransitionLink href="/booth">企業ブース</TransitionLink>
                </div>

				<AccentText>制作局企画</AccentText>
				<div className="flex flex-wrap gap-4 mt-5 mb-15">
					<TransitionLink href="/sticker">ステッカー企画</TransitionLink>
					<TransitionLink href="/goods">明大祭公式グッズ</TransitionLink>
				</div>

				<SmallTitle>明大祭に関わってくださるみなさまへ</SmallTitle>
				<div className="flex flex-wrap gap-4">
					<TransitionLink href="/stakeholders/company">企業のみなさまへ</TransitionLink>
					<TransitionLink href="/stakeholders/area">界隈地域のみなさまへ</TransitionLink>
					<TransitionLink href="/stakeholders/alumni">校友のみなさまへ</TransitionLink>
					<TransitionLink href="/stakeholders/media">メディアのみなさまへ</TransitionLink>
				</div>

				<SmallTitle>ご協賛一覧</SmallTitle>
				<div className="flex flex-wrap gap-4">
					<TransitionLink href="/company-list">ご協賛企業一覧</TransitionLink>
					<TransitionLink href="/alumni-list">ご賛助ご芳名</TransitionLink>
				</div>

				<div className="h-20" />
		</CloudPageContainer>
	);
}
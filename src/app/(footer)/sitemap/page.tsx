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
					<TransitionLink href="/announce">ご来場のみなさまへのお願い</TransitionLink>
					<TransitionLink href="/timetable">タイムテーブル</TransitionLink>
          			<TransitionLink href="/map">キャンパスマップ</TransitionLink>
					<TransitionLink href="/access">アクセス</TransitionLink>
					<TransitionLink href="/faq">よくある質問</TransitionLink>
					<TransitionLink href="/news">お知らせ</TransitionLink>
					<TransitionLink href="/pamphlet">電子パンフレット</TransitionLink>
					<TransitionLink href="/fix-pamphlet">公式パンフレット訂正</TransitionLink>
				</div>
				<SmallTitle>特集</SmallTitle>
				<div className="flex flex-wrap gap-4">
					<TransitionLink href="/search">企画検索</TransitionLink>
					<TransitionLink href="/official-project">実行委員会企画</TransitionLink>
					<TransitionLink href="/crowdfunding">クラウドファンディング</TransitionLink>
					<TransitionLink href="/champ">Meidaisai Championship</TransitionLink>
					<TransitionLink href="/lottery">明大祭大抽選会</TransitionLink>
					<TransitionLink href="/meijic">Meijic Moment</TransitionLink>
					<TransitionLink href="/bazaar">明大祭チャリティ-バザー</TransitionLink>
					<TransitionLink href="/booth">企業ブース</TransitionLink>
					<TransitionLink href="/cashless">キャッシュレス決済</TransitionLink>
					<TransitionLink href="/sticker">明大祭オリジナルステッカー</TransitionLink>
					<TransitionLink href="/goods">明大祭公式グッズ</TransitionLink>
					<TransitionLink href="/theme">第141回明大祭テーマ</TransitionLink>
					<TransitionLink href="/mv">第141回明大祭公式テーマソング</TransitionLink>
					<TransitionLink href="/voucher">大抽選会抽選券引換券</TransitionLink>
				</div>
				<SmallTitle>開発局企画</SmallTitle>
				<div className="flex flex-wrap gap-4">
					<TransitionLink href="/illumination">明大祭イルミネーション</TransitionLink>
					<TransitionLink href="/ribbon">Re:Bond～リボンでつながる思い出～</TransitionLink>
					<TransitionLink href="/say">明大SAY！</TransitionLink>
					<TransitionLink href="/sports">EXPOrts2025 in 明治</TransitionLink>
					<TransitionLink href="/rally">跡巡〜あとめぐ〜</TransitionLink>
					<TransitionLink href="/tour">明治大解剖ツアー</TransitionLink>
					<TransitionLink href="/wish">一灯一想</TransitionLink>
					<TransitionLink href="/quest">ポンdeクエスト</TransitionLink>
					<TransitionLink href="/love">明治に恋する5秒前</TransitionLink>
					<TransitionLink href="/memory">Stand by Memory</TransitionLink>
					<TransitionLink href="/dice">出た目でGO～サイコロが教える君だけの明大祭攻略ルート～</TransitionLink>
				</div>
				<SmallTitle>演出局企画</SmallTitle>
				<div className="flex flex-wrap gap-4">
					<TransitionLink href="/opening">Opening</TransitionLink>
					<TransitionLink href="/midnight">中夜祭</TransitionLink>
					<TransitionLink href="/ending">Ending</TransitionLink>
					<TransitionLink href="/fes">UNI ROCK FES</TransitionLink>
					<TransitionLink href="/luminous">Luminous Stage</TransitionLink>
					<TransitionLink href="/clash">Meiji United Clash</TransitionLink>
					<TransitionLink href="/idol">I♡Fes!</TransitionLink>
				</div>
				<SmallTitle>コラボ企画</SmallTitle>
				<div className="flex flex-wrap gap-4">
					<TransitionLink href="/matsubara">松原小学校×明大祭</TransitionLink>
					<TransitionLink href="/keio">KEIO×第141回明大祭デジタルスタンプラリー</TransitionLink>
					<TransitionLink href="/lottely-shop">明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～</TransitionLink>
					<TransitionLink href="/gourmet">駿河台グルメマップラリー</TransitionLink>
				</div>

				<SmallTitle>明大祭に関わってくださるみなさまへ</SmallTitle>
				<div className="flex flex-wrap gap-4">
					<TransitionLink href="/company">企業のみなさまへ</TransitionLink>
					<TransitionLink href="/area">界隈地域のみなさまへ</TransitionLink>
					<TransitionLink href="/alumni">校友のみなさまへ</TransitionLink>
					<TransitionLink href="/media">メディアのみなさまへ</TransitionLink>
				</div>

				<SmallTitle>明大祭とは</SmallTitle>
				<TransitionLink href="/about">明大祭とは</TransitionLink>

				<SmallTitle>ご協賛一覧</SmallTitle>
				<div className="flex flex-wrap gap-4">
					<TransitionLink href="/company-list">ご協賛企業一覧</TransitionLink>
					<TransitionLink href="/area-list">ご協賛店舗一覧</TransitionLink>
					<TransitionLink href="/alumni-list">ご賛助ご芳名</TransitionLink>
				</div>

			</PageContainer>

		</>
	);
}
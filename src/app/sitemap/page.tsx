import PageContainer from "@/components/base/PageContainer";
import TransitionLink from "@/components/buttons/TransitionLink";
import PageTitle from "@/components/texts/PageTitle";
import SmallTitle from "@/components/texts/SmallTitle";


export default function SitemapPage() {
  return (
    <>
      <PageTitle>サイトマップ</PageTitle>
      <PageContainer>
        {/* <SmallTitle>ご来場のみなさまへ</SmallTitle>
        <div className="flex gap-4">
          <TransitionLink href="/announce">ご来場のみなさまへのお願い</TransitionLink>
          <TransitionLink href="/timetable">タイムテーブル</TransitionLink>
          <TransitionLink href="/map">キャンパスマップ</TransitionLink>
          <TransitionLink href="/access">アクセス</TransitionLink>
          <TransitionLink href="/faq">よくある質問</TransitionLink>
        </div> */}


        <SmallTitle>特集</SmallTitle>
        <div className="flex flex-wrap gap-4">
          <TransitionLink href="lottely">明大祭大抽選会</TransitionLink>
          <TransitionLink href="matsubara">松原小学校×明大祭</TransitionLink>
        </div>

        <SmallTitle>明大祭に関わってくださるみなさまへ</SmallTitle>
        <div className="flex flex-wrap gap-4">
          <TransitionLink href="company">企業のみなさまへ</TransitionLink>
          <TransitionLink href="/area">界隈地域のみなさまへ</TransitionLink>
          <TransitionLink href="/alumni">交友のみなさまへ</TransitionLink>
          <TransitionLink href="/media">メディアのみなさまへ</TransitionLink>
        </div>

        <SmallTitle>明大祭とは</SmallTitle>
        <TransitionLink href="/about">明大祭とは</TransitionLink>

      </PageContainer>

    </>
  );
}
import IndexTitle from "@/components/texts/IndexTitle";
import PageContainer from "@/components/PageContainer";

export default function Home() {
  return (
    <div>
      <PageContainer>
        <p>テキストはこんな感じの表示になります。大きさとかフォントとか見やすさとかをこのテキストを使って確認してください。</p>
        <IndexTitle>来場者のみなさまへ</IndexTitle>
        <p>2025年11月1日(土).2日(日).3日(月・祝)に開催される明治大学の学園祭、第141回明大祭の公式サイトです！</p>
        <div className="h-screen" />
        <div className="h-screen" />
        <p className="text-center">このサイトは現在開発中です。</p>
      </PageContainer>
    </div>
  );
}
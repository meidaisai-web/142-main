import Image from "next/image";

export default function MemoryPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl pb-32">
      {/* (ページタイトル) & (企画のロゴ) */}
      <section className="text-center my-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">おもいで工房</h1>
        
        {/* 企画のロゴ画像 */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src="/images/memory/omoi-logo.png"
            alt="おもいで工房 企画ロゴ"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* ⬜️大見出し：企画概要 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold border-l-4 border-red-500 pl-3 mb-4">
          企画概要
        </h2>
        <p className="leading-relaxed text-gray-800 whitespace-pre-line mb-6">
          明大祭の思い出であなただけのオリジナルミサンガに！{"\n"}
          第142回明大祭のテーマカラーの3色の糸を使用してミサンガを作ることができます！
          また、みなさまの明大祭での思い出と交換でチャームを貰うことができます！
          そのチャームを使って自分だけのオリジナルミサンガを作りましょう！{"\n"}
          チャームの種類は10種類あり、その中から好きなものを選ぶことができます！
          作ったミサンガは持ち帰っていただけるので、明大祭の思い出になること間違いなし！{"\n"}
          みなさまのご参加をお待ちしております！
        </p>

        {/* ◯小見出し：企画所要時間 */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="text-md font-semibold text-gray-700 mb-1">
            企画所要時間
          </h4>
          <p className="text-gray-800">10分～20分</p>
        </div>

        {/* ⚪️中見出し：企画実施日時 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">企画実施日時</h3>
          <p className="text-gray-800 leading-relaxed">
            10月30日(金)・31日(土) 11:00～18:00
            <br />
            11月1日(日) 11:00～17:00
          </p>
        </div>

        {/* ⚪️中見出し：企画実施場所 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">企画実施場所</h3>
          <p className="text-gray-800">第一校舎前体育館側</p>
        </div>
      </section>

      {/* お問い合わせ情報 */}
      <section className="border-t pt-8 mt-20 mb-20 text-sm text-gray-600 relative z-10 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-gray-800">お問い合わせ情報</h3>
        <p className="font-semibold mb-1">
          第142回明大祭実行委員会 開発局凌閃部門
        </p>
        <p className="mb-1">
          住所：〒168-8555 東京都杉並区永福1-9-1 明治大学 和泉キャンパス 食堂３階明大祭実行委員会室
        </p>
        <p className="mb-1">TEL：080-2546-5562（開室時間：11:00〜18:00 平日のみ）</p>
        <p>Mail：142ndryousenbumon@gmail.com</p>
      </section>
    </main>
  );
}
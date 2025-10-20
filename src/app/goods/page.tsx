import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import { List, ListItem } from '@/components/texts/List'
import PageContainer from "@/components/base/PageContainer"
import ContactView from "@/components/texts/ContactView"
import Emphasis from "@/components/texts/Emphasis"
import OnlyImage from "@/components/OnlyImage"
import SmallTitle from "@/components/texts/SmallTitle"
import MapImage from "@/components/MapImage"

export default function Page() {
    const goodsList = [
        { name: 'ガチャガチャ　缶バッジ（全6種内1種シークレット）', price: '1回100円', src: ['/images/goods/badge.jpg'] },
        { name: 'ボールペン', price: '250円', src: ['/images/goods/pen.jpg'] },
        { name: 'ラバーバンド', price: '各200円', src: ['/images/goods/band.jpg'] },
        { name: 'クリアファイル', price: '各200円', src: ['/images/goods/file3.jpg', '/images/goods/file1.jpg', '/images/goods/file2.jpg'] },
        { name: 'アクリルキーホルダー', price: '350円', src: ['/images/goods/acrylic.jpg'] },
        { name: '絵馬型キーホルダー', price: '350円', src: ['/images/goods/ema.jpg'] },
    ]
    return (
        <>
            <PageTitle>明大祭公式グッズ</PageTitle>
            <PageContainer>
                <Text className="mt-10">昨年大好評につき、今年も明大祭公式グッズの販売が決定いたしました！ご来場記念にぜひお買い求めください！</Text>
                <SectionTitle>ラインナップ</SectionTitle>
                {goodsList.map((item, index) => (
                    <div key={index}>
                        <SmallTitle className="mt-8">{item.name}</SmallTitle>
                        <Text>{item.price}</Text>
                        {item.src.map((src) =>
                            <OnlyImage key={src} src={src} alt={item.name} className="w-full max-w-lg mt-4" />
                        )}
                    </div>
                ))}
                <Text>※画像はイメージです。</Text>
                <SectionTitle>販売詳細</SectionTitle>
                <SmallTitle>販売日時</SmallTitle>
                <Text>11月1日(土).2日(日).3日(月・祝)10：00～18：00</Text>
                <SmallTitle>販売場所</SmallTitle>
                <Text>明治大学和泉キャンパス明大祭公式グッズ販売ブース（和泉図書館前）</Text>
                <MapImage src="/images/map/goods.jpg" alt="明大祭公式グッズ販売ブースの場所" />
                <SectionTitle>注意事項</SectionTitle>
                <List className="mt-8" mark="・">
                    <ListItem>お支払いは<Emphasis>現金・キャッシュレス</Emphasis>に対応しております。</ListItem>
                    <OnlyImage
                        src="/images/goods/payment.jpg"
                        alt="キャッシュレス決済一覧_09"
                        className="w-full max-w-xs mt-4 mb-10"
                    />
                    <ListItem>商品がなくなりしだい終了となります。</ListItem>
                    <ListItem>不良品以外返品・交換はできません。</ListItem>
                    <ListItem>購入後、アンケートに回答していただいた方には、第141回明大祭実行委員会主催の抽選企画の抽選券をお渡しいたします。</ListItem>
                </List>
                <ContactView department="制作局　明大祭公式グッズチーム" mail="141st-goodsteam@meidaisai.jp" showPhone showAddress />
            </PageContainer>
        </>
    )
}

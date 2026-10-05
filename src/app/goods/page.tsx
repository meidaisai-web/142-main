import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import AccentText from "@/components/texts/AccentText"
import ContactView from "@/components/texts/ContactView"
import Emphasis from "@/components/texts/Emphasis"
import SmallTitle from "@/components/texts/SmallTitle"
import GoodsCard from "@/components/goods/GoodsCard";
import PageContainer from "@/components/base/PageContainer"
import { List, ListItem } from "@/components/texts/List"

const goods = [
    {
        image: "/images/goods/ballpen.png",
        name: "ボールペン",
        price: "250円(税込)",
    },
    {
        image: "/images/goods/ballpen.png",
        name: "タトゥーシール",
        price: "250円(税込)",
    },
    {
        image: "/images/goods/rubberband.png",
        name: "ラバーバンド",
        price: "200円(税込)",
        type: "全3種",
    },
    {
        image: "/images/goods/acrylic.png",
        name: "アクリルキーホルダー",
        price: "250円(税込)",
    },
    {
        image: "/images/goods/clearfile.png",
        name: "クリアファイル",
        price: "250円(税込)",
        type: "全3種",
        wide: true,
    },
    {
        image: "/images/goods/clearfile.png",
        name: "缶バッジ",
        price: "250円(税込)",
        type: "全3種",
        wide: true,
    },
];


export default function Page() {
    return (
        <>
            <main className="flow-root bg-top-gradient pb-60">
                <PageContainer>
                    <PageTitle>公式グッズ</PageTitle>
                    <SectionTitle>商品</SectionTitle>
                    <div className="mx-auto mt-20 grid max-w-[1000px] grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-24">                        {goods.map((item) => (
                        <GoodsCard
                            key={item.name}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            type={item.type}
                            wide={item.wide}
                        />
                    ))}
                    </div>

                    <SectionTitle>明大祭公式ステッカー</SectionTitle>
                    <Text>今年の明大祭では、オリジナルステッカーを配布しております。詳細はこちらをご覧ください。</Text>

                    <SectionTitle>販売詳細</SectionTitle>
                    <SmallTitle>販売日時</SmallTitle>
                    <Text>10月30日(金).31日(土).11月1日(日)</Text>
                    <Text>11:00〜18:00</Text>
                    <SmallTitle>販売場所</SmallTitle>
                    <Text>明大祭公式グッズ販売ブース（和泉図書館前）</Text>

                    <SectionTitle>注意事項</SectionTitle>
                    <List mark="・">
                        <ListItem>お支払いは現金、キャッシュレスに対応しております。</ListItem>
                        <ListItem>商品が無くなり次第終了となります。</ListItem>
                        <ListItem>不良品を除き、返品・交換は行いません。</ListItem>
                        <ListItem>購入後、アンケートに回答していただいた方には、第142回明大祭実行委員会主催の抽選企画の抽選券をお渡しいたします。</ListItem>
                    </List>
                    <ContactView department="制作局" mail="142nd-seisaku@meidaisai.jp" showPhone showAddress />

                </PageContainer>
            </main>

        </>
    )
}
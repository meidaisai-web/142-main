import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import ContactView from "@/components/texts/ContactView"
import SmallTitle from "@/components/texts/SmallTitle"
import GoodsCard from "@/components/goods/GoodsCard";
import PageContainer from "@/components/base/PageContainer"
import { List, ListItem } from "@/components/texts/List"
import TransitionLink from "@/components/buttons/TransitionLink"

const goods = [
    {
        image: "/images/goods/ballpen.jpg",
        name: "明大祭ボールペン",
        price: "250円（税込）",
        type: "全2種",

    },
    {
        image: "/images/goods/tattoo.png",
        name: "タトゥーシール",
        price: "100円（税込）",
    },
    {
        image: "/images/goods/rubberband.png",
        name: "ラバーバンド",
        price: "200円（税込）",
        type: "全3種",
    },
    {
        image: "/images/goods/acrylic.svg",
        name: "アクリルキーホルダー",
        price: "350円（税込）",
    },
    {
        image: [
            "/images/goods/folder1.jpg",
            "/images/goods/folder2.jpg",
            "/images/goods/folder3.jpg",
        ], name: "クリアファイル",
        price: "200円（税込）",
        type: "全3種",
        wide: true,
    },
    {
        image: [
            "/images/goods/badge1.png",
            "/images/goods/badge2.png",
            "/images/goods/badge3.png",
            "/images/goods/badge4.png",
            "/images/goods/badge5.png",
            "/images/goods/badge6.svg",
        ],
        name: "ガチャガチャ缶バッジ",
        price: "100円（税込）",
        typeImage: "/images/goods/capsule.svg",
        type: "全6種",
        wide: true,
    },
];


export default function Page() {
    return (
        <>
            <main className="flow-root bg-top-gradient pb-60">
                <PageContainer>
                    <PageTitle>明大祭公式グッズ</PageTitle>
                    <SectionTitle>商品一覧</SectionTitle>
                    <div className="mx-auto mt-20 grid max-w-[1000px] grid-cols-1 gap-y-20 md:gap-y-28 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">                        {goods.map((item) => (
                        <GoodsCard
                            key={item.name}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            type={item.type}
                            typeImage={item.typeImage}
                            wide={item.wide}
                        />
                    ))}
                    </div>

                    <SectionTitle className="mt-32">明大祭公式ステッカー</SectionTitle>
                    <Text>今年の明大祭では、オリジナルステッカーを配布しております。詳細は<TransitionLink href="https://meidaisai.jp/sticker">こちら</TransitionLink>をご覧ください。</Text>

                    <SectionTitle>販売詳細</SectionTitle>
                    <SmallTitle>販売日時</SmallTitle>
                    <Text>10月30日(金).31日(土)11:00〜18:00</Text>
                    <Text>11月1日(日)11:00〜17:30</Text>
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
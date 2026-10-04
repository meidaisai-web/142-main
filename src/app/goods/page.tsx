import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import AccentText from "@/components/texts/AccentText"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import ContactView from "@/components/texts/ContactView"
import Emphasis from "@/components/texts/Emphasis"
import SmallTitle from "@/components/texts/SmallTitle"
import GoodsCard from "@/components/goods/GoodsCard";

const goods = [
    {
        image: "/images/goods/ballpen.png",
        name: "ボールペン",
        price: "250円(税込)",
    },
    {
        image: "/images/goods/towel.png",
        name: "タオルシャツ",
        price: "100円(税込)",
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
];


export default function Page() {
    return (
        <>
            <PageTitle>公式グッズ</PageTitle>
            <CloudPageContainer>
                <SectionTitle>グッズ一覧</SectionTitle>
                <main>
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
                </main>

                <SectionTitle>販売詳細</SectionTitle>
                <SmallTitle>販売日時</SmallTitle>
                <Text>10月30日(金).31日(土).11月1日(日)</Text>
                <Text>10:00〜18:00</Text>
                <SmallTitle>販売場所</SmallTitle>
            </CloudPageContainer>
        </>
    )
}
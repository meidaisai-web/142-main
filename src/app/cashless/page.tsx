import PageContainer from "@/components/base/PageContainer";
import TransitionLink from "@/components/buttons/TransitionLink";
import MapImage from "@/components/MapImage";
import OnlyImage from "@/components/OnlyImage";
import AccentText from "@/components/texts/AccentText";
import ContactView from "@/components/texts/ContactView";
import { List, ListItem } from "@/components/texts/List";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";

export default function Page() {
    const storeList = [
        {
            id: 675,
            name: "山内ナチョスゼミナール",
            group: "情報コミュニケーション学部山内勇ゼミナール"
        },
        {
            id: 122,
            name: "Vientoのベビーカステラ",
            group: "Viento"
        },
        {
            id: 480,
            name: "えりちゃんフランク",
            group: "商学部塩澤恵理ゼミナール"
        },
        {
            id: 458,
            name: "韓国スイーツ！クロッフル",
            group: "情報コミュニケーション学部坂本裕太ゼミナール"
        },
        {
            id: 382,
            name: "streetの小籠包",
            group: "ギターサークルストリート「street」"
        },
        {
            id: 220,
            name: "チュロス party night",
            group: "FAIR テニスクラブ"
        },
        {
            id: 410,
            name: "明大中華「清水飯店」",
            group: "情報コミュニケーション学部清水晶紀ゼミナール"
        },
        {
            id: 385,
            name: "「明治１美味しい」明スカのベビーカステラ",
            group: "スカッシュクラブ"
        },
        {
            id: 417,
            name: "法学（Gaku）会",
            group: "法学会"
        },
        {
            id: 259,
            name: "BLUESのほくほくポテト",
            group: "FC.BLUES"
        },
        {
            id: 495,
            name: "Cielo チュロッシュ",
            group: "Cielo"
        },
        {
            id: 377,
            name: "揚げパン屋　SHIP",
            group: "SHIP"
        },
        {
            id: 319,
            name: "London Fryday",
            group: "政治経済学部国際交流学生委員会 The Supporters"
        },
        {
            id: 43,
            name: "Vista de Potato",
            group: "明治大学バレーボール同好会 Vista"
        },
        {
            id: 436,
            name: "DFチンチロ串焼き",
            group: "ダブルフォルト（DF）テニス同好会"
        },
        {
            id: 95,
            name: "古都研のやきとり処",
            group: "古都研究会"
        },
        {
            id: 232,
            name: "鳥武族",
            group: "体育同好会連合会柔道部"
        },
        {
            id: 133,
            name: "mnbポップコーン",
            group: "MNB"
        },
        {
            id: 131,
            name: "キューバサンド始めました！",
            group: "Next Film"
        }
    ]
    const roomList = [
        {
            id: 397,
            name: "クイズカフェ！",
            group: "クイズサークル「イージオス」",
        },
        {
            id: 420,
            name: "童話モチーフ縁日",
            group: "絵本工房",
        },
        {
            id: 426,
            name: "明鉄WAO！",
            group: "鉄道研究会"
        }
    ]
    return (
        <div>
            <PageTitle>キャッシュレス決済</PageTitle>
            <PageContainer>
                <SectionTitle>第141回明大祭にキャッシュレス決済が登場！</SectionTitle>
                <Text moreTopPadding>今年の明大祭では、来場者の皆さまにより快適に楽しんでいただけるよう、キャッシュレス決済を導入します。</Text>
                <List mark="※">
                    <ListItem>現金はすべてのブースで使用可能です。</ListItem>
                    <ListItem>一部、キャッシュレス非対応のブースもあります。</ListItem>
                    <ListItem>初年度導入のため、決済にお時間を要する場合があります。ご了承ください。</ListItem>
                </List>
                <SectionTitle>キャッシュレス導入ブース一覧</SectionTitle>
                <SmallTitle>模擬店企画</SmallTitle>
                <List mark="・" gap={4} className="mt-4">
                    {storeList.map((store) => (
                        <ListItem key={store.id} className=""><TransitionLink href={`/search/${store.id}`}>{store.name}（{store.group}）</TransitionLink></ListItem>
                    ))}
                </List>
                <SmallTitle>教室企画</SmallTitle>
                <List mark="・" gap={4} className="mt-4">
                    {roomList.map((room) => (
                        <ListItem key={room.id}><TransitionLink href={`/search/${room.id}`}>{room.name}（{room.group}）</TransitionLink></ListItem>
                    ))}
                </List>
                <SmallTitle>明大祭公式グッズ販売</SmallTitle>
                <AccentText>販売場所</AccentText>
                <Text>明治大学和泉キャンパス明大祭公式グッズ販売ブース（和泉図書館前）</Text>
                <MapImage src="/images/map/goods.jpg" alt="公式グッズ販売ブースのマップ" className="mb-5" />
                <TransitionLink href="/goods">明大祭公式グッズの詳細はこちら</TransitionLink>
                <SectionTitle>ご利用いただけるキャッシュレス決済ブランド</SectionTitle>
                <OnlyImage src="/images/payment.jpg" alt="キャッシュレス決済一覧" className="mt-8"/>
                <SmallTitle>会場でキャッシュレス決済が利用可能か確認する方法</SmallTitle>
                <List numbered>
                    <ListItem>キャンパスマップに、各ブースのキャッシュレス決済対応状況を記載しています。</ListItem>
                    <ListItem>
                        キャッシュレス決済が可能なブースでは以下の掲示物が設置されています。
                        <OnlyImage src="/images/cashless/cashless-mark.png" alt="キャッシュレス決済対応マーク" className="max-w-60 mt-2"/>
                    </ListItem>
                </List>
                <ContactView department="財務局" mail="141st-zaimu@meidaisai.jp" showPhone showAddress />
            </PageContainer>
        </div>
    )
}

import PageTitle from "@/components/texts/PageTitle"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import Text from "@/components/texts/Text"
import SmallTitle from "@/components/texts/SmallTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import { List, ListItem } from "@/components/texts/List";
import Image from "next/image"
import ContactView from "@/components/texts/ContactView"

const storeList = [
    "あほうどり",
    "イタリアン ダイニング バー LAGO（ラーゴ）",
    "植田整骨院",
    "魚津",
    "魚売街",
    "おむすび　四季",
    "株式会社ティップネス明大前",
    "がブリチキン明大前店",
    "カラオケBanBan明大前駅前店",
    "カラオケBanBan明大前店",
    "辛麺屋　桝元",
    "串カツ田中　明大前店",
    "クローバー薬局松原店",
    "クローバー薬局明大前店",
    "小暮洋服店",
    "ココカラファイン明大前店",
    "斉藤時計店",
    "サーティワンアイスクリームTogo明大前店",
    "焼酎 bar 5×8 GOHACHI",
    "庄や　京王明大前店",
    "書塾おもいやり繪",
    "すにゃっくバロン",
    "炭火焼肉酒房　あぶり",
    "立呑み　我海",
    "ダーツバーKUNI",
    "タトル明大前洋菓子店",
    "伝説のすた丼屋　明大前店",
    "豊岡整骨院",
    "とり鉄明大前駅前店",
    "肉汁餃子のダンダダン　明大前店",
    "花見煎餅吾妻屋",
    "飛騨高山　酒兎",
    "ファミリーマート世田谷松原一丁目店",
    "フクウロ明大前店",
    "ポニークリーニング　明大前店",
    "マクドナルド明大前店",
    "祭り茶屋　ゆうやけこやけ",
    "麻婆STAND明大前",
    "マーメイドコーヒーロースターズ明大前",
    "丸や",
    "ミネドラッグ明大前店",
    "明大前　のすけ",
    "明大前はり灸院",
    "明大前バル",
    "明大前モモノイ",
    "やきとり家すみれ明大前店",
    "焼肉ユーミン",
    "やまわ薬局",
    "有限会社田中靴店",
    "有限会社千草園",
    "有限会社武道鈴木",
    "ユニオン電器",
    "らーめん盛華",
    "リフレッシュ整体　元気堂",
    "和洋惣菜タイム",
    "BAR HICOTTO",
    "BARBER TRIBE",
    "Café  Bar LIVRE　",
    "Hook",
    "ima （イマ)",
    "laitue（レチュ)",
    "ma'am Zee",
    "Mikyô",
    "NIKSEN",
    "Petite Patisserie YUKI（プティ　パティスリー　ユキ）",
    "Shima",
    "TBK美容室明大前店",
    "TOP1明大前店",
    "vivo daily stand　明大前店",
    "Wells"
];

export default function Page() {
    return (
        <div>
            <CloudPageContainer>
                <PageTitle>明大前商店街×明大祭〜明大祭で当てよう！豪華景品〜</PageTitle>

                <SectionTitle>企画概要</SectionTitle>
                <Text>今年度も明大前商店街と明大祭実行委員会がコラボした抽選企画を実施します！<br />
                      本企画では企画協力店舗での500円分のお買い物につき抽選券を1枚お渡ししており、1枚につき1回抽選を行うことができます。世田谷区内共通商品券をはじめ、豪華景品が当たります。<br />
                      集めた抽選券で豪華景品が当たるチャンス！<br />
                      ぜひこの機会に明大前商店街でのお買い物と、明大祭をお楽しみください！
                </Text>

                <SmallTitle>抽選券見本</SmallTitle>
                <Image src="/images/lottely-shop/lottely-ticket.svg" width={500} height={500} alt="抽選券" />

                <SectionTitle>企画実施日・企画実施場所</SectionTitle>
                <SmallTitle>抽選券配付期間</SmallTitle>
                <Text>10月22日(木)〜11月1日(日)</Text>

                <SmallTitle>抽選実施日時</SmallTitle>
                <Text>10月30日(金).31日(土).11月1日(日)</Text>
                <Text>11:00〜18:00</Text>

                <SmallTitle>抽選実施場所</SmallTitle>
                <Text>明治大学和泉キャンパスメディア棟入口付近</Text>
                <SectionTitle>注意事項</SectionTitle>

                <List mark="・">
                    <ListItem>抽選券は1度のお買い物につき最大5枚までお渡ししております。</ListItem>
                    <ListItem>抽選券は数に限りがございますのでご了承ください。</ListItem>
                    <ListItem>1回列にお並びいただくごとに最大10回抽選いただけます。10枚以上お持ちの方は再度お並びいただきますようお願い申し上げます。</ListItem>
                    <ListItem>景品の数には限りがございます。抽選券をお持ちいただいても抽選できない場合がございます。ご了承ください。</ListItem>
                    <ListItem>別の抽選会が隣接しておりますのでご注意ください。</ListItem>
                </List>

                <SectionTitle>企画協力店舗様一覧</SectionTitle>
                <Text>（以下五十音順・敬称略）</Text>
                <List mark="・">
                    {storeList.map((store) => (
                        <ListItem key={store}>{store}</ListItem>
                    ))}
                </List>
                <ContactView department="渉外局界隈部門" mail="kaiwai@meidaisai.jp" showPhone showAddress />
                
            </CloudPageContainer>
        </div>
    )
}

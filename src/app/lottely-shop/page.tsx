import PageContainer from "@/components/base/PageContainer"
import MapImage from "@/components/MapImage"
import ContactView from "@/components/texts/ContactView"
import { List, ListItem } from "@/components/texts/List"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import SmallTitle from "@/components/texts/SmallTitle"
import Text from "@/components/texts/Text"

const page = () => {
    const storeList = [
        "あほうどり",
        "植田整骨院",
        "魚津",
        "魚売街",
        "おむすび　四季",
        "（株）ココカラファインヘルスケア明大前店",
        "ガブリチキン明大前店",
        "カラオケBanBan明大前駅前店",
        "カラオケBanBan明大前店",
        "辛麺屋　桝元",
        "クローバー薬局松原店",
        "クローバー薬局明大前店",
        "斉藤時計店",
        "サーティワンアイスクリームTogo明大前店",
        "庄や京王明大前店",
        "食事処　相州屋",
        "書塾おもいやり繪",
        "すにゃっくバロン",
        "炭火焼肉酒房あぶり",
        "ソウル苑",
        "立呑み　我海",
        "ダーツバーKuni",
        "タトル明大前洋菓子店",
        "千草園",
        "ティップネス明大前",
        "伝説のすた丼屋明大前店",
        "豊岡整骨院",
        "肉汁餃子のダンダダン明大前店",
        "ハイチャイナセカンド",
        "花見煎餅吾妻屋",
        "飛騨高山　酒兎",
        "美容室ma'am zee 明大前",
        "ファミリーマート世田谷松原一丁目店",
        "フクウロ明大前",
        "ポニークリーニング明大前",
        "本と玉ねぎ。",
        "麻良雀",
        "マクドナルド明大前店",
        "祭り茶屋　ゆうやけこやけ",
        "麻婆STAND明大前",
        "マーメイドコーヒーロースターズ明大前",
        "丸や",
        "ミネドラッグ明大前店",
        "明大前のすけ",
        "明大前はり灸院",
        "明大前バル",
        "明大前BAR LAGO",
        "やきとり家すみれ明大前店",
        "やまわ薬局",
        "（有）田中靴店",
        "ユニオン電器",
        "リフレッシュ整体　元気堂",
        "和洋惣菜タイム",
        "BARBER TRIBE",
        "BAR HICOTTO",
        "Café Bar LIVRE",
        "dodd",
        "Hook",
        "ima",
        "KIGARU",
        "laitue（レチュ）",
        "Mikyô",
        "NIKSEN",
        "Shima",
        "TBK美容室明大前店",
        "TOP1明大前店",
        "vivo daily stand 明大前店",
        "Wells",
        "69 Petite Patisserie YUKI"
    ]
    return (
        <div>
            <PageTitle>明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～</PageTitle>
            <PageContainer>
                <SectionTitle>明大祭で当てるぞ！豪華景品</SectionTitle>
                <Text moreTopPadding>本年度も明大前商店街と明大祭実行委員会がコラボした抽選会を実施します！</Text>
                <Text moreTopPadding>本企画では企画協力店舗店舗での500円分のお買い物につき1枚抽選券をお渡ししており、1枚につき1回抽選を行うことができます。世田谷区内共通商品券をはじめ、豪華景品が当たります。</Text>
                <Text moreTopPadding>集めた抽選券で豪華景品が当たるチャンス！</Text>
                <Text moreTopPadding>ぜひこの機会に明大前商店街でのお買い物と、明大祭をお楽しみください！</Text>
                <List mark="※">
                    <ListItem>抽選券は1度のお買い物につき最大5枚までお渡ししております。</ListItem>
                    <ListItem>抽選券は数に限りがございますのでご了承ください。</ListItem>
                    <ListItem>1回列にお並びいただく毎に最大10回抽選いただけます。10枚以上お持ちの方は再度お並びいただきます、ご了承ください。</ListItem>
                    <ListItem>景品の数には限りがございます。抽選券をお持ちいただいても抽選できない場合がございます。ご了承ください。</ListItem>
                    <ListItem>2つの抽選企画の会場が隣接しておりますのでご注意ください。</ListItem>
                </List>
                <SectionTitle>企画実施日・企画実施場所</SectionTitle>
                <SmallTitle>抽選券配付期間</SmallTitle>
                <Text>10月20日(月)～11月3日(月・祝)</Text>
                <SmallTitle>抽選実施日時</SmallTitle>
                <Text>11月1日(土).2日(日).3日(月・祝)</Text>
                <Text>11：00～18：00</Text>
                <SmallTitle>抽選実施場所</SmallTitle>
                <Text>明治大学和泉キャンパスメディア棟入口付近</Text>
                <MapImage src="/images/map/lottery.jpg" alt="抽選実施場所map" />
                <SectionTitle>企画協力店舗様一覧</SectionTitle>
                <Text moreTopPadding>（以下五十音順・敬称略）</Text>
                <List mark="・">
                    {storeList.map((store) => (
                        <ListItem key={store}>{store}</ListItem>
                    ))}
                </List>
                <SmallTitle>ご案内</SmallTitle>
                <Text>ご不明点などございましたらお気軽に下記のお問い合わせ先にご連絡ください。</Text>
                <ContactView department="第141回明大祭実行委員会 渉外局" mail="shogai@meidaisai.jp" showPhone showAddress />
            </PageContainer>
        </div>
    )
}

export default page
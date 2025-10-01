import PageContainer from "@/components/base/PageContainer"
import OnlyImage from "@/components/OnlyImage"
import ContactView from "@/components/texts/ContactView"
import { List, ListItem } from "@/components/texts/List"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import SmallTitle from "@/components/texts/SmallTitle"
import Text from "@/components/texts/Text"

const page = () => {
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
                    <ListItem>抽選券は1度のお買い物につき最大10枚までお渡ししております。</ListItem>
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
                <OnlyImage src="/images/map/lottery.jpg" alt="抽選実施場所map" className="max-w-72" />
                {/* <SectionTitle>企画協力店舗一覧</SectionTitle> */}
                <SmallTitle>ご案内</SmallTitle>
                <Text>ご不明点などございましたらお気軽に下記のお問い合わせ先にご連絡ください。</Text>
                <ContactView department="第141回明大祭実行委員会 渉外局" mail="shogai@meidaisai.jp" showPhone showAddress />
            </PageContainer>
        </div>
    )
}

export default page

import PageTitle from "@/components/texts/PageTitle"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import Text from "@/components/texts/Text"
import SmallTitle from "@/components/texts/SmallTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import { List, ListItem } from "@/components/texts/List";
import Image from "next/image"

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
                <Image src="/images/lottely-shop/notyet" width={500} height={500} alt="抽選券" />

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

                {/* <SectionTitle>企画協力店舗様一覧</SectionTitle>
                <Text>（以下五十音順・敬称略）</Text> */}

            </CloudPageContainer>
        </div>
    )
}
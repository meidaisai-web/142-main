import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import PageContainer from "@/components/base/PageContainer"
import Emphasis from "@/components/texts/Emphasis"
import SmallTitle from "@/components/texts/SmallTitle"
import MapImage from '@/components/MapImage'
import OnlyImage from "@/components/OnlyImage"
import { List, ListItem } from "@/components/texts/List"
export default function Page() {
    return (
        <>
            <PageTitle>駿河台グルメマップラリー</PageTitle>
            <PageContainer>
                <SectionTitle>歩いて見つける、まちの味</SectionTitle>
                <Text moreTopPadding>
                    今年度から始まった新企画「駿河台グルメマップラリー」では、明治大学駿河台キャンパス周辺の飲食店を巡りスタンプを3つ以上獲得することで明大祭で景品をゲットできます！
                </Text>
                <Text>
                    本企画参加に必要なグルメマップ台紙は明治大学駿河台キャンパス<Emphasis>リバティタワー1階入り口横のラック</Emphasis>に設置しております。
                </Text>
                <SmallTitle>
                    企画内容
                </SmallTitle>
                <Text>
                    駿河台グルメマップラリー企画協力店舗で、500円以上のお食事をしていただくと1店舗につき1つのスタンプが獲得できます。
                </Text>
                <Text>
                   スタンプを3個以上埋めていただいき、グルメマップ台紙を明大祭当日にお持ちいただいた各日先着20名様に景品をお渡しいたします。
                </Text>
                <Text>
                    明治大学和泉キャンパスメディア棟入口付近の企画受付までお越しください。
                </Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>
                    11月1日(土).2日(日).3日(月・祝)11：00～18：00
                </Text>
                <List mark="※">
                    <ListItem><Emphasis>1日先着20名様までとさせていただきます。</Emphasis></ListItem>
                </List>
                <SmallTitle>場所</SmallTitle>
                <Text>
                    メディア棟入口付近駿河台グルメマップラリー受付
                </Text>
                <Text>
                    ※「KEIO×第141回明大祭デジタルスタンプラリー」と同じ受付場所となっているためご注意ください。
                </Text>
                <MapImage src='/images/map/keio.jpg' alt='Campus Map'/>
                <SectionTitle>企画協力店舗</SectionTitle>
                <List numbered className="mt-8">
                    <ListItem>SPICE KITCHEN 360°</ListItem>
                    <ListItem>oliver</ListItem>
                    <ListItem>701 nanamaruichi</ListItem>
                    <ListItem>ラーメン大至</ListItem>
                    <ListItem>欧風カレーガヴィアル神保町本店</ListItem>
                    <ListItem>ハンバーグ大地</ListItem>
                </List>
                <OnlyImage src="/images/gourmet/gourmet.jpg" alt='グルメマップラリー企画ポスター' className="mt-20" />
            </PageContainer>
        </>
    )
}
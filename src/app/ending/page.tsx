import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import PageContainer from "@/components/base/PageContainer"
import SmallTitle from "@/components/texts/SmallTitle"
import Emphasis from "@/components/texts/Emphasis"
import ContactView from "@/components/texts/ContactView"
import OnlyImage from "@/components/OnlyImage"
import { List, ListItem } from '@/components/texts/List'
import LogoImage from "@/components/LogoImage"
export default function Page() {
    return (
        <>
            <PageTitle>Ending</PageTitle>
            <PageContainer>
                <LogoImage src="/images/ensyutsu/ending-logo-black.png" alt='エンディングロゴの画像' className="my-10" />
                <OnlyImage src="/images/ensyutsu/ending.jpg" alt='エンディングステージの画像' />
                <SectionTitle>「祭、終結」</SectionTitle>
                <Text moreTopPadding><Emphasis>煌めく星の下、戻ることのないこの夜に。</Emphasis></Text>
                <Text><Emphasis>高鳴る鼓動、熱狂の余韻、そして熱きステージが——今、終結。</Emphasis></Text>
                <SectionTitle>企画概要</SectionTitle>
                <Text moreTopPadding>
                    明大祭の最後を彩るEnding！
                </Text>
                <Text>
                    ３日間の集大成――全参加団体の頂点が今、ここで決まる。
                </Text>
                <Text>
                    すべての想いが交わる“熱い”フィナーレを見逃すな！
                </Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>11月3日(月・祝) 17：25～18：00</Text>
                <SmallTitle>場所</SmallTitle>
                <Text>メインステージ</Text>
                <SectionTitle>出演団体</SectionTitle>
                <div className="mt-10">
                <List mark="・">
                    <ListItem>男子チアリーディングチーム ANCHORS</ListItem>
                    <ListItem>アカペラサークル amour</ListItem>
                    <ListItem>K-POPカバーダンスサークル Mercie</ListItem>
                    <ListItem>中野ダンスサークルre：SIGN</ListItem>
                    <ListItem>明治大学インカレダンスサークル MDD</ListItem>
                    <ListItem>明治大学体同連チアリーディングチーム JAGUARS</ListItem>
                </List>
                </div>
                <ContactView department="演出局煌彩部門" mail="kosai-141@meidaisai.jp"/>
            </PageContainer>
        </>
    )
}
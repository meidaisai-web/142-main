import PageContainer from "@/components/base/PageContainer";
import LogoImage from "@/components/LogoImage";
import OnlyImage from "@/components/OnlyImage";
import Emphasis from "@/components/texts/Emphasis";
import { List, ListItem } from "@/components/texts/List";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";
import Movie from "@/components/movie";
import ContactView from "@/components/texts/ContactView";

export default function Page() {
    return (
        <div>
            <PageTitle>Opening</PageTitle>
            <PageContainer>
                <LogoImage src="/images/ensyutsu/opening-logo.png" alt="Openingのロゴ" className="mt-10" />
                <OnlyImage src="/images/ensyutsu/opening.png" alt="Opening" className="mt-10" />
                <SectionTitle>今鳴り響く開幕の合図</SectionTitle>
                <Text moreTopPadding><Emphasis>走り出せ、青春のステージへ</Emphasis></Text>
                <Text><Emphasis>一瞬の彩り、心煌めく祭のはじまり</Emphasis></Text>
                <Text><Emphasis>この輝きは、きっと忘れない</Emphasis></Text>
                <SectionTitle>企画概要</SectionTitle>
                <Text moreTopPadding>刮目せよ、最高の幕開けを！</Text>
                <Text>見逃すことのできない多彩なパフォーマンス</Text>
                <Text>明大祭の扉をさぁ開け！</Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>11月1日(土) 10：00〜10：50</Text>
                <SmallTitle>場所</SmallTitle>
                <Text>メインステージ</Text>
                <SectionTitle>出演団体</SectionTitle>
                <List mark="・" className="mt-8">
                    <ListItem>栗沢踊ル者（第141回明大祭公式テーマソング演奏団体）</ListItem>
                    <ListItem>中野ダンスサークルSIGN</ListItem>
                    <ListItem>K-POPカバーダンスサークルMercie</ListItem>
                    <ListItem>アカペラサークルSound Arts</ListItem>
                    <ListItem>ミュージカル研究会</ListItem>
                    <ListItem>ジャグリングサークルDietz</ListItem>
                </List>
                <SectionTitle>Opening紹介動画</SectionTitle>
                <Movie href="https://www.youtube.com/embed/1sYnmfS4s6I?si=av92CwP46mZq9Bzs"/>
                <ContactView department="演出局煌彩部門" mail="kosai-141@meidaisai.jp"/>
            </PageContainer>
        </div>
    )
}
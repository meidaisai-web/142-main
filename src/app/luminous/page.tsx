import PageContainer from "@/components/base/PageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import Emphasis from "@/components/texts/Emphasis";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";
import LogoImage from "@/components/LogoImage";
import OnlyImage from "@/components/OnlyImage";
import { List, ListItem } from "@/components/texts/List";

export default function LuminousPage() {
    return (
        <>
            <PageTitle>Luminous Stage</PageTitle>
            <PageContainer>
                <LogoImage src="/images/ensyutsu/luminous-logo.png" alt="Luminous Stageのロゴ" className="mt-10" />
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-5">
                    <OnlyImage src="/images/ensyutsu/luminous1.jpg" alt="Luminous Stage" />
                    <OnlyImage src="/images/ensyutsu/luminous2.jpg" alt="Luminous Stage" />
                </div>
                <SectionTitle>響鳴せよ、輝く舞台で。</SectionTitle>
                <Text moreTopPadding><Emphasis>輝きが交差するその瞬間</Emphasis></Text>
                <Text><Emphasis>教室がステージに代わり、すべての想いがひとつになる。</Emphasis></Text>
                <Text>客席と舞台がひとつに！</Text>
                <Text>360度広がる全方位パフォーマンス。</Text>
                <Text>普段の教室が輝くステージへ。</Text>
                <SectionTitle>企画概要</SectionTitle>
                <Text>教室全体を使用した斬新な屋内ステージ新企画！！</Text>
                <Text>今までにない新たな演出方法で観客一体型の空間を創り上げます。</Text>
                <Text>屋内ステージだからこそできる、魅力あふれるステージパフォーマンスをご覧あれ。</Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>11月2日(日)10：30～11：30</Text>
                <SmallTitle>場所</SmallTitle>
                <Text>和泉ラーニングスクエアLS101教室</Text>
                <SectionTitle>出演団体</SectionTitle>
                <List mark="・" className="mt-8">
                    <ListItem>フラッシュモ部</ListItem>
                    <ListItem>ジャグリングサークル Dietz</ListItem>
                    <ListItem>ミュージカル研究会</ListItem>
                    <ListItem>中野ダンスサークル SIGN</ListItem>
                    <ListItem>K-POPカバーダンスサークル Mercie</ListItem>
                </List>
                <Text>※コンテンツの都合上、入場規制をさせていただく時間があります。</Text>
                {/*　動画を入れる　*/}
            </PageContainer>
        </>
    );
}
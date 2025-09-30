import PageContainer from "@/components/base/PageContainer";
import PageTitle from "@/components/texts/PageTitle";
import Image from "next/image";
import SectionTitle from "@/components/texts/SectionTitle";
import Emphasis from "@/components/texts/Emphasis";
import SmallTitle from "@/components/texts/SmallTitle";
import AccentText from "@/components/texts/AccentText";
import Text from "@/components/texts/Text";

export default function LuminousPage() {
    return (
        <>
            <PageTitle>Luminous Stage</PageTitle>
            <PageContainer>
                <Image src="/images/LuminousStage.pdf" alt="Luminous Stage" />
                <Image src="/images/LSweb1.jpg" alt="Luminous Stage" />
                <Image src="/images/LSweb2.jpg" alt="Luminous Stage" />
                <SectionTitle>響鳴せよ、輝く舞台で。</SectionTitle>
                <div className="mt-10" />
                <Emphasis>響鳴せよ、輝く舞台で。</Emphasis>
                <div className="mt-10" />
                <text>客席と舞台がひとつに！</text>
                <text>360度広がる全方位パフォーマンス。</text>
                <text>普段の教室が輝くステージへ。</text>
                <div className="mt-10" />
                <AccentText>企画概要：</AccentText>
                <text>教室全体を使用した斬新な屋内ステージ新企画！！</text>
                <text>今までにない新たな演出方法で観客一体型の空間を創り上げます。</text>
                <text>屋内ステージだからこそできる、魅力あふれるステージパフォーマンスをご覧あれ。</text>
                <div className="mt-5" />
                <AccentText>日時：11月2日(日)10:30～11:30</AccentText>
                <AccentText>場所：和泉ラーニングスクエアLS101教室</AccentText>
                <AccentText>出演団体：</AccentText>
                <Text>フラッシュモ部</Text>
                <Text>ジャグリングサークルDietz</Text>
                <Text>ミュージカル研究会</Text>
                <Text>中野ダンスサークルSIGN</Text>
                <Text>K-POPカバーダンスサークルMercie</Text>
                <div className="mt-5" />
                <text>※コンテンツの都合上、入場規制をさせていただく時間があります。</text>
                {/*　動画を入れる　*/}
            </PageContainer>
        </>
    );
}
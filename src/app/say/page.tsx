import Text from "@/components/texts/Text";
import PageContainer from "@/components/base/PageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import AccentText from "@/components/texts/AccentText";
import Emphasis from '@/components/texts/Emphasis'
import LogoImage from "@/components/LogoImage";

export default function Page() {
    return (
        <div>
            <PageTitle>明大SAY！</PageTitle>
            <PageContainer>
                <LogoImage src="/images/kaihatsu/say.jpg" alt="明大SAY！ ロゴ" className="mt-10" />
                <SectionTitle>企画内容</SectionTitle>
                <Text moreTopPadding>和泉ラーニングスクエアのグループボックスでは脱出ゲームと明大生が考えた明治大学にちなんだ「あるある」の展示を行います！</Text>
                <SmallTitle>明大迷宮</SmallTitle>
                <Text>和泉ラーニングスクエアには怪しげなグループボックスも出現しているとか…仲間と協力して脱出ゲームをクリアしよう！この明大迷宮では、明大生から募集したキーワードが答えとなっています！クリアできれば明大生の生態がわかるかも！？</Text>
                <SmallTitle>クラスに一人はいるよね展・懐かしいもの展</SmallTitle>
                <Text>思わず共感してしまうあるあるを明大生から募集しました！みなさんの「わかるー！」の声をお待ちしています！</Text>
                <Text moreTopPadding>みなさんのご参加お待ちしています！</Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>11月1日(土).2日(日).3日(月・祝)</Text>
                <SmallTitle>場所</SmallTitle>
                <AccentText>明大迷宮</AccentText>
                <Text>受付：和泉ラーニングスクエア2階GB2‐3<br />会場：和泉ラーニングスクエア2階GB2-1・GB2-2</Text>
                <AccentText>クラスに一人はいるよね展・懐かしいもの展</AccentText>
                <Text>会場：和泉ラーニングスクエア3階GB3-3・GB3-4</Text>
                <Emphasis>※そのまま会場へお越しください。</Emphasis>
            </PageContainer>
        </div>
    );
}
import CloudPageContainer from "@/components/base/CloudPageContainer";
import TransitionLink from "@/components/buttons/TransitionLink";
import ContactView from "@/components/texts/ContactView";
import Emphasis from "@/components/texts/Emphasis";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";

export default function Page() {
    return (
        <CloudPageContainer>
            <PageTitle>ハロウィンナイトin明大祭</PageTitle>
            <SectionTitle>企画概要</SectionTitle>
            <Text><Emphasis>お菓子をもらうか、いたずらされるか。今夜はハロウィンパーティー！</Emphasis></Text>
            <Text>ハロウィン当日に明大祭に来てくれたあなたへ！</Text>
            <Text>夕方以降（16:00〜）、キャンパス内でハロウィン風の怪しい人を探せ！<Emphasis>「トリック・オア・トリート！」</Emphasis>と伝えると、お菓子がもらえるかも…？</Text>
            <Text>また、<TransitionLink href="/midnight">中夜祭</TransitionLink>では17:30頃にハロウィンステージも開催！みんなでサイリウムを振って楽しもう！</Text>
            <Text>さらに、和泉キャンパスにはハロウィン仕様の光る装飾も登場します✨キャンパスを巡りながら装飾を探して、いつもとはひと味違うハロウィンの夜を楽しんでください！</Text>
            <SectionTitle>企画実施日時・場所</SectionTitle>
            <SmallTitle>日時</SmallTitle>
            <Text>10月31日(土) 16:00〜18:00</Text>
            <SmallTitle>場所</SmallTitle>
            <Text>和泉図書館前開発局企画受付、和泉ラーニングスクエア入口付近</Text>
            <ContactView department="開発局" mail="142nd-kaihatsu@meidaisai.jp" showPhone showAddress />
        </CloudPageContainer>
            )
        }
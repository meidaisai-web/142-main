import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import PageContainer from "@/components/base/PageContainer"
import ContactView from "@/components/texts/ContactView"
import Emphasis from "@/components/texts/Emphasis"
import SmallTitle from "@/components/texts/SmallTitle"
export default function Page() {
    return (
        <>
            <PageTitle>Stand by Memory</PageTitle>
            <PageContainer>
                <SectionTitle>企画概要</SectionTitle>
                <SmallTitle>明大祭ベストショットを撮ろう！</SmallTitle>
                <Text moreTopPadding>お子様連れでも大歓迎！カイダン教室がフォトスポットに！？</Text>
                <Text><Emphasis>フォトフレームを自由に描いて、自分だけの思い出の1枚を撮ろうー！</Emphasis>撮影後は、作ったフォトフレームを記念に持ち帰ることができます！</Text>
                <Text>何度でも、どこでも映えるフォトフレームを作ってみませんか？みなさまのご参加をお待ちしております。</Text>
            <SectionTitle>企画実施日時</SectionTitle>
            <SmallTitle>日時</SmallTitle>
            <Text>
                11月1日(土).2日(日)10:00～18:00
            </Text>
            <Text>    
                3日(月・祝)10:00～17:00
            </Text>
            <SmallTitle>場所</SmallTitle>
            <Text>和泉ラーニングスクエアLS201教室(階段教室)</Text>
            </PageContainer>
            <ContactView department="開発局想越部門" mail="141st-souetsu@meidaisai.jp" showPhone showAddress />
        </>
    )
}
import PageTitle from "@/components/texts/PageTitle"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import Text from "@/components/texts/Text"
import SmallTitle from "@/components/texts/SmallTitle"
import Emphasis from "@/components/texts/Emphasis"
import SectionTitle from "@/components/texts/SectionTitle"
import AccentText from "@/components/texts/AccentText"
import ContactView from "@/components/texts/ContactView"
import OnlyImage from "@/components/OnlyImage"
export default function Page() {
    return (
        <div>
          <CloudPageContainer>
            <PageTitle>おもいで工房</PageTitle>
                <OnlyImage src="/images/omoi/omoi-logo.png" alt='おもいで工房ロゴ' />
                <SectionTitle>企画概要</SectionTitle>
                <Text><Emphasis>明大祭の思い出であなただけのオリジナルミサンガに！</Emphasis><br />
                第142回明大祭のテーマカラーの3色の糸を使用してミサンガを作ることができます！また、みなさまの明大祭での思い出と交換でチャームを貰うことができます！そのチャームを使って自分だけのオリジナルミサンガを作りましょう！<br />
                チャームの種類は<Emphasis>10種類</Emphasis>あり、その中から好きなものを選ぶことができます！作ったミサンガは持ち帰っていただけるので、<Emphasis>明大祭の思い出になること間違いなし！</Emphasis><br />
                みなさまのご参加をお待ちしております！</Text>
                <AccentText>企画所要時間</AccentText>
                <Text>10分～20分</Text>
                <SmallTitle>企画実施日時</SmallTitle>
                <Text>10月30日(金).31日(土)11:00～18:00<br />
                11月1日(日)11:00～17:00</Text>
                <SmallTitle>企画実施場所</SmallTitle>
                <Text>第一校舎前体育館側</Text>
                <ContactView department="開発局凌閃部門" mail="142ndryousenbumon@gmail.com" showPhone showAddress />
            </CloudPageContainer>
        </div>
    )
}
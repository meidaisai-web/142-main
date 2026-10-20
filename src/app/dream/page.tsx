import PageTitle from "@/components/texts/PageTitle"
import StarPageContainer from "@/components/base/StarPageContainer/StarPageContainer"
import Text from "@/components/texts/Text"
import SmallTitle from "@/components/texts/SmallTitle"
import Emphasis from "@/components/texts/Emphasis"
import SectionTitle from "@/components/texts/SectionTitle"
import AccentText from "@/components/texts/AccentText"
import OnlyImage from "@/components/OnlyImage"
import ContactView from "@/components/texts/ContactView"
export default function Page() {
    return (
        <div>
<<<<<<< HEAD
           <CloudPageContainer>
            <PageTitle>Dream Canvas ―夜空を描こう―</PageTitle>
=======
           <StarPageContainer>
            <PageTitle>Dream canvas ー夜空を描こうー</PageTitle>
>>>>>>> 0b955c91db73ec6960c491d62b60b29243d225a5
                <OnlyImage src="/images/dream/dream-logo.png" alt='ドリームロゴ'  />
                <SectionTitle>企画概要</SectionTitle>
                <Text>明大祭に<Emphasis>プラネタリウム</Emphasis>が登場！真っ暗な教室に光を灯して１つの<Emphasis>星空</Emphasis>を創りあげます。クイズも用意していますので、どなたでもお気軽にご参加ください！</Text>
                <SmallTitle>実施場所</SmallTitle>
                <Text>メディア棟M405・M406教室</Text>
                <AccentText>日時</AccentText>
                <Text>10月30日(金).31(土)11:00〜18:00<br />11月1日(日)11:00〜17:00</Text>
                <ContactView department="開発局黎幸部門" mail="142ndreikobumon@gmail.com" showPhone showAddress />
            </StarPageContainer>
        </div>
    )
}
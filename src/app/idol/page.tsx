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
            <PageTitle>I♡Fes!</PageTitle>
            <PageContainer>
                <LogoImage
                    src="/images/ensyutsu/ifes-logo.png"
                    alt='I♡Fes!ロゴ'
                    className="mt-10"
                />
                <div className="md:flex md:gap-5 my-5">
                    <OnlyImage
                        src="/images/ensyutsu/ifes1.jpg"
                        alt='I♡Fes!ウェブ広報写真1'
                        className="mb-5"
                    />
                    <OnlyImage
                        src="/images/ensyutsu/ifes2.jpg"
                        alt='I♡Fes!ウェブ広報写真2'
                        className="mb-5"
                    />
                </div>
                <SectionTitle>踊って、叫んで、また好きになる。</SectionTitle>
                <Text moreTopPadding><Emphasis>響き合う声が重なったとき</Emphasis></Text>
                <Text><Emphasis>きっと忘れられない瞬間になる。</Emphasis></Text>
                <Text><Emphasis>さぁ、I♡Fes!へようこそ！</Emphasis></Text>
                <SectionTitle>企画概要</SectionTitle>
                <Text moreTopPadding>
                    アイドル達の祭典I♡Fes!
                </Text>
                <Text>
                    あなたの声でさらに輝くステージを共に作ろう！
                </Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>11月3日(月・祝) 13：00～14：00</Text>
                <SmallTitle>場所</SmallTitle>
                <Text>エントランスエリア</Text>
                <SectionTitle>出演団体</SectionTitle>
                <div className="mt-10">
                    <List mark="・">
                        <ListItem>na-nam</ListItem>
                        <ListItem>中野ダンスサークルSIGN</ListItem>
                        <ListItem>chocolat lumière</ListItem>
                    </List>
                </div>
                <ContactView department="演出局祭繋部門" mail="saikei-141@meidaisai.jp" />
            </PageContainer>
        </>
    )
}

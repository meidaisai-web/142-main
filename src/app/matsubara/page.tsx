import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import AccentText from "@/components/texts/AccentText"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import ContactView from "@/components/texts/ContactView"
import Emphasis from "@/components/texts/Emphasis"
export default function Page() {
    return (
        <>
            <PageTitle>松原小学校×明大祭</PageTitle>
            <CloudPageContainer>
                <SectionTitle>企画概要</SectionTitle>
                <Text>
                    今年で4年目となる本企画では、世田谷区立松原小学校の児童のみなさまによる<Emphasis>自由研究作品</Emphasis>の展示に加え、明大祭実行委員会との<Emphasis>共同制作作品</Emphasis>を展示いたします。制作を通して育まれた交流や学びを形にし、小学生ならではの豊かな発想や創造力を来場者のみなさまへお届けします。</Text>
                <Text>
                    地域と明大祭実行委員会が協力して生まれた作品の数々を通して、世代を超えた繋がりや創作の楽しさを感じていただければ幸いです。是非ご覧ください。
                </Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <AccentText>日時</AccentText>
                <Text>10月30日(金).31日(土).11月1日(日)</Text>
                <Text>11:00〜18:00</Text>
                <AccentText>場所</AccentText>
                <Text>メディア棟M506教室</Text>
                <AccentText>注意事項</AccentText>
                <Text>作品の写真撮影および作品に触れることはご遠慮ください。</Text>
                <ContactView department="渉外局界隈部門" mail="kaiwai@meidaisai.jp" showPhone showAddress />
            </CloudPageContainer>
        </>
    )
}
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import SmallTitle from "@/components/texts/SmallTitle"
import Text from "@/components/texts/Text"
import PageContainer from "@/components/base/PageContainer"
import ContactView from "@/components/texts/ContactView"
import Emphasis from "@/components/texts/Emphasis"
import OnlyImage from 'next/image'
export default function Page() {
    return (
        <>
            <PageTitle>出た目でGO～サイコロが教える君だけの明大祭攻略ルート～</PageTitle>
            <PageContainer>
                <OnlyImage src="/images/example.jpg" alt='適当' className="w-20" />
                <SectionTitle>企画内容</SectionTitle>
                <Emphasis>
                    あなただけの明大祭攻略ルートをご紹介！
                </Emphasis>
                <Text>
                    <Emphasis>巨大サイコロ</Emphasis>を振った後<Emphasis>おみくじ</Emphasis>を引くことで明大祭をもっと楽しめるオリジナルルートが決定します！
                </Text>
                <Text>
                    行き先に迷っている方、目当ての企画に参加し終わった方大観迎！上に掲載されているロゴを目印にお越しください！
                </Text>
                <SmallTitle>日時</SmallTitle>
                <Text>
                    11月1日(土).11月2日(日).11月3日(月・祝)10：00～17：00
                </Text>
                <SmallTitle>開催場所</SmallTitle>
                <Text>
                    <Emphasis>和泉図書館付近のブース</Emphasis>
                </Text>
                <ContactView department="開発局想越部門" mail="souetsu@meidaisai.jp" showPhone showAddress />
                </PageContainer>
        </>
    )
} 
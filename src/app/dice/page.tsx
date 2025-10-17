import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import PageContainer from "@/components/base/PageContainer"
import SmallTitle from "@/components/texts/SmallTitle"
import Emphasis from "@/components/texts/Emphasis"
import ContactView from "@/components/texts/ContactView"
import LogoImage from "@/components/LogoImage"
import MapImage from "@/components/MapImage"
export default function Page() {
    return (
        <>
            <PageTitle>出た目でGO～サイコロが教える君だけの明大祭攻略ルート～</PageTitle>
            <PageContainer>
                <LogoImage src="/images/kaihatsu/dice.jpg" alt="出た目でGO～サイコロが教える君だけの明大祭攻略ルート～ ロゴ" className="mt-10" />
                <SectionTitle>企画内容</SectionTitle>
                <Text moreTopPadding>
                    <Emphasis>あなただけの明大祭攻略ルートをご紹介！</Emphasis>
                </Text>
                <Text>
                    <Emphasis>巨大サイコロ</Emphasis>を振った後<Emphasis>おみくじ</Emphasis>を引くことで明大祭をもっと楽しめるオリジナルルートが決定します！
                </Text>
                <Text>
                    行き先に迷っている方、目当ての企画に参加し終わった方大観迎！
                </Text>
                <Text>
                    上に掲載されているロゴを目印にお越しください！
                </Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>11月1日(土).2日(日).3日(月・祝) 10：00～17：00</Text>
                <SmallTitle>場所</SmallTitle>
                <Text>和泉図書館付近のブース</Text>
                <MapImage src='/images/map/dice.jpg' alt='出た目でGOのマップ' />
                <ContactView department="開発局" mail="141st-souetsu@meidaisai.jp" showPhone showAddress />
            </PageContainer>
        </>
    )
}
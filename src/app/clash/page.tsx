import PageTitle from "@/components/texts/PageTitle"
import PageContainer from "@/components/base/PageContainer"
import Text from "@/components/texts/Text"
import SectionTitle from "@/components/texts/SectionTitle"
import AccentText from "@/components/texts/AccentText"
import SmallTitle from "@/components/texts/SmallTitle"
import OnlyImage from "@/components/OnlyImage"
import LogoImage from "@/components/LogoImage"
import Emphasis from "@/components/texts/Emphasis"

export default function Page() {
    return (
        <div>
            <PageTitle>Meiji United Clash</PageTitle>
            <PageContainer>
                <LogoImage src="/images/ensyutsu/clash-logo.png" alt="" className="mt-10"/>
                <OnlyImage src="/images/ensyutsu/clash.jpg" alt="" className="mt-10"/>
                <SectionTitle>共闘の刻ー賭けろ、すべてを。</SectionTitle>
                <Text moreTopPadding><Emphasis>勝つか、散るか。</Emphasis></Text>
                <Text><Emphasis>プライドを掛けた運命の一戦</Emphasis></Text>
                <Text><Emphasis>盤上の支配者が今宵、ここで決まる。</Emphasis></Text>

                <Text moreTopPadding>戦い続けた団体が</Text>
                <Text>対決企画を個々まで連れてきた。</Text>
                <Text>この頂点は、間違いなく最強だ。</Text>

                <SectionTitle>企画概要</SectionTitle>
                <Text moreTopPadding>勝敗を決めるのは、あなたの１票。明大祭初夜、頂点を懸けた戦いが始まる。勝利を手にするのは、3連覇を狙う中野ダンスサークルSIGN擁するTEAM QUEENか—悲願達成を誓う</Text>
                <Text noTopPadding>K-POPカバーダンスサークルMercie擁するTEAM KINGか。激闘の行く末に待っているものとは—その瞬間を、見逃すな。</Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>11月1日(土) 17：10〜18：00</Text>

                <SmallTitle>場所</SmallTitle>
                <Text>メインステージ</Text>

                <SectionTitle>出演団体</SectionTitle>
                <AccentText>TEAM QUEEN</AccentText>
                <Text>chocolat lumière：ユニドル全国優勝経験者</Text>
                <Text>アカペラサークルSound Arts：ハモネプ優勝経験者</Text>
                <Text>中野ダンスサークルSIGN：前人未到の3連覇へ</Text>
                <AccentText>TEAM KING</AccentText>
                <Text>SHINE：中野ダンスサークルSIGNからの刺客</Text>
                <Text>アカペラサークルamour：音で挑み、声で勝つ。</Text>
                <Text>K-POPカバーダンスサークルMercie：打倒・王者。悲願達成へ。</Text>
            </PageContainer>
        </div>
    )
}
import PageTitle from "@/components/texts/PageTitle"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import Text from "@/components/texts/Text"
import SmallTitle from "@/components/texts/SmallTitle"
import Emphasis from "@/components/texts/Emphasis"
import SectionTitle from "@/components/texts/SectionTitle"
export default function Page() {
    return (
        <div>
            <PageTitle>LIMIT∞BREAK</PageTitle>
            <CloudPageContainer>
                <SectionTitle className="mb-8">企画概要</SectionTitle>
                <Text><Emphasis>超えろ、キミの本気。挑め、世界の記録。</Emphasis></Text>
                <Text><Emphasis>限界のその先へ —— LIMIT ∞ BREAK</Emphasis></Text>
                <Text>ここでは、来場者のみんなが競い合いながら、ギネス記録に挑戦し歴史が塗り替わる瞬間を、自らの手で生み出してもらう！</Text>
                <Text>たくさんのチャレンジャーを待っているぞ！豪華景品やお菓子も用意しているから、ぜひ挑戦してくれ！</Text>
                <SmallTitle>場所</SmallTitle>
                <Text>第一校舎305教室</Text>
                <SmallTitle>日時</SmallTitle>
                <Text>10月30日(金).31日(土).11月1日(日)</Text>
            </CloudPageContainer>
        </div>
    )
}
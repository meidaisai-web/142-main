import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import AccentText from "@/components/texts/AccentText"
import PageContainer from "@/components/base/PageContainer"
import SmallTitle from "@/components/texts/SmallTitle"
import LogoImage from "@/components/LogoImage"
export default function Page() {
    return (
        <>
            <PageTitle>EXPOrts2025 in 明治</PageTitle>
            <PageContainer>
                <LogoImage src="/images/kaihatsu/sports.jpg" alt="EXPOrts2025 in 明治 ロゴ" className="mt-10" />
                <SectionTitle className="mt-5">企画内容</SectionTitle>
                <Text className="mt-5">EXPOrts2025 in 明治を開催！今年も明大祭実行委員が明大スポーツを徹底調査いたしました！</Text>
                <SmallTitle className="mt-5">掲示・展示企画</SmallTitle>
                <Text>体育会運動部やその選手たちの魅力を大紹介！実行委員が直接インタビューした選手の素顔、貴重なサインやユニフォーム展示、さらに明大スポーツの歴史をたどる展示も行います。選手の意外な一面やここでしか見られない展示に出会えるかも!?</Text>
                <SmallTitle className="mt-5">応援メッセージコーナー</SmallTitle>
                <Text>選手へのメッセージを書けるブースを設置いたします。あなたの声援を選手に届けよう！</Text>
                <Text>誰でもお気軽にお立ち寄りください！</Text>
                <Text>※企画で扱う部活は、体育会競走部、野球部、サッカー部、ラグビー部のみとなっております。</Text>
                <SectionTitle className="mt-5">企画実施日時・場所</SectionTitle>
                <SmallTitle className="mt-5">日時</SmallTitle>
                <Text>11月1日(土).2日(日) 10：00〜18：00</Text>
                <Text>11月3日(月・祝) 10：00～17：00</Text>
                <SmallTitle  className="mt-5">場所</SmallTitle>
                <AccentText>展示・掲示企画</AccentText>
                <Text>和泉ラーニングスクエアLS406・407教室</Text>
                <AccentText>応援メッセージコーナー</AccentText>
                <Text>和泉ラーニングスクエア4階アゴラ</Text>
            </PageContainer>
        </>
    )
}
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import Emphasis from "@/components/texts/Emphasis"
import SmallTitle from "@/components/texts/SmallTitle"
export default function Page() {
    return (
        <div>
            <PageTitle>めいじっけん</PageTitle>
            <CloudPageContainer>
                <SectionTitle className="mb-8">企画概要</SectionTitle>
                <Emphasis>「つくって！ためして！君も大博士に！」</Emphasis>
                <Text>みなさんにスライムやバスボム作り、自分の指紋を用いた指紋タイプ診断をしてもらいます！そして作ったものは、無料でお持ち帰りいただけます！もちろん、親子連れの方も大歓迎！みなさまのご参加をお待ちしております！</Text>
                <SmallTitle>実施場所</SmallTitle>
                <Text className="mb-5">第一校舎306教室</Text>
                <SmallTitle>実施日時</SmallTitle>
                <Text className="mb-5">10月30日(金).31日(土).11月1日(日)</Text>
                <div />
            </CloudPageContainer>
        </div>
    )
}
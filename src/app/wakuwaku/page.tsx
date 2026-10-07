import CloudPageContainer from "@/components/base/CloudPageContainer"
import OnlyImage from "@/components/OnlyImage"
import AccentText from "@/components/texts/AccentText"
import ContactView from "@/components/texts/ContactView"
import Emphasis from "@/components/texts/Emphasis"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import SmallTitle from "@/components/texts/SmallTitle"
import Text from "@/components/texts/Text"
import Link from "next/link"

const page = () => {
  return (
    <CloudPageContainer>
        <PageTitle>受験生コレクション～わくわく明大生活</PageTitle>
        <OnlyImage src="/images/wakuwaku/wakuwaku.svg" alt="ロゴ"/>
        <SectionTitle>企画概要</SectionTitle>
        <Text>明治大学に興味がある方や保護者の方、受験を戦うみなさまにおすすめしたいのが、<Emphasis>毎年大好評の受験生企画</Emphasis>です！受験生や保護者の方の悩みを解決するために展示や相談会を実施します！</Text>
        <Text>さらに、相談会の参加者には明大生による明治大学のリアルや受験に関する情報が 載った冊子もプレゼント！みなさまのご参加をお待ちしております！</Text>
        <SmallTitle>実施場所</SmallTitle>
        <AccentText>展示</AccentText>
        <Text><Emphasis>和泉ラーニングスクエアLS304・LS305教室</Emphasis></Text>
        <AccentText>相談会</AccentText>
        <Text><Emphasis>和泉ラーニングスクエアLS3階和泉ラーニングサポートベース</Emphasis></Text>
        <SmallTitle>日時</SmallTitle>
        <Text>2026年10月30日(金).31日(土).11月1日(日)</Text>
        <Text>【展示】</Text>
        <Text>10月30日(金).31日(土)11:00～18:00</Text>
        <Text>11月1日(日)11:00～17:00</Text>
        <Text>【相談会】</Text>
        <Text>10月30日(金).31日(土) 11:20～17:40</Text>
        <Text>11月1日(日) 11:20～16:40</Text>
        <SectionTitle>参加方法</SectionTitle>
        <Text>展示は常時開放しております。</Text>
        <Text>相談会は予約制となっており、事前予約と当日予約が可能です。明大祭当日は和泉図書館前企画受付、展示教室である和泉ラーニングスクエアLS304教室にて当日予約を承っております。</Text>
        {/* 予約フォーム追加 */}
        {/* <Text>事前予約を行いたい方は<Link src="">こちら</Link>から！</Text> */}
        <Text>事前予約のためのリンクは後日掲載します。</Text>
        <ContactView department="開発局黎幸部門" showAddress showPhone mail="142ndreikobumon@gmail.com"/>
    </CloudPageContainer>
  )
}

export default page
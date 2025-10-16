import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import AccentText from "@/components/texts/AccentText"
import PageContainer from "@/components/base/PageContainer"
import TransitionLink from "@/components/buttons/TransitionLink"
import SmallTitle from "@/components/texts/SmallTitle"
export default function Page() {
    return (
        <>
            <PageTitle>明治に恋する５秒前</PageTitle>
            <PageContainer>
                <SectionTitle>企画概要</SectionTitle>
                <Text moreTopPadding>
                    明治大学に興味がある、保護者の方や受験を戦うみなさまにおすすめしたいのが、大好評の受験生企画です！
                </Text>
                <Text>
                    受験生や保護者の方の不安やモヤモヤを解決するために展示や相談会を実施します！
                </Text>
                <Text>
                    さらに参加者には在学生から見た明治大学の内情や受験に関する情報が入った冊子もプレゼント！
                </Text>
                <Text>
                    みなさまのご来場お待ちしております！
                </Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>11月1日(土).2日(日) 10：00～18：00</Text>
                <Text>11月3日(月・祝) 10：00～17：30</Text>
                <SmallTitle>場所</SmallTitle>
                <Text>メディア棟4階Aラウンジ(相談会)、M402・M403教室(展示) </Text>
                <SectionTitle>参加方法</SectionTitle>
                <Text moreTopPadding>
                    展示は常時開放しています。相談会は予約制となっており、明大祭当日は和泉図書館前企画受付にて予約を承っております。
                </Text>
                <Text className="mb-5">当日の飛び入り参加も可能です。</Text>
                <TransitionLink href="https://docs.google.com/forms/d/e/1FAIpQLSeoC4NrB-Lyw9iXPDTIcUbE3QfzqC69Bvwx-0gkIZ8jFz-ZZg/viewform?pli=1" >事前予約を行いたい方はこちらから！！</TransitionLink>
            </PageContainer>
        </>
    )
}
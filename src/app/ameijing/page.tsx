import PageTitle from "@/components/texts/PageTitle"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import Text from "@/components/texts/Text"
import SmallTitle from "@/components/texts/SmallTitle"
import Emphasis from "@/components/texts/Emphasis"
import SectionTitle from "@/components/texts/SectionTitle"
import AccentText from "@/components/texts/AccentText"
import ContactView from "@/components/texts/ContactView"
export default function Page() {
    return (
        <CloudPageContainer>
                <PageTitle>Ameijing Photo</PageTitle>
                <SectionTitle>企画概要</SectionTitle>
                <Text ><Emphasis>明大祭の思い出を、とっておきの1枚に！</Emphasis><br />
                今年もフォトスポットが登場！<br />
                ここでしか撮れない写真で、明大祭の思い出を残しませんか？<br />
                撮影した写真をSNSに投稿すると、豪華賞品が当たるチャンスも！<br />
                <Text className="mt-2">📸 楽しみ方は3ステップ！<br /></Text>
                <Text className="mt-2">① 写真を撮ろう！<br /></Text>
                フォトスポットで、とっておきの1枚を撮影！<br />
                <Text moreTopPadding>② 写真を投稿して抽選券をGET！<br /></Text>
                撮影した写真に明大祭に関するコメントを添えて、Xに投稿するか、Instagramのストーリーズに投稿！<br />
                あわせて、明大祭公式Instagramをフォローしてください！<br />
                フォロー画面と投稿画面を、フォトスポットの第一校舎側にある机のスタッフに見せると、抽選券がもらえます！<br />
                <Text moreTopPadding>③大抽選会に参加！<br /></Text>
                抽選券を持って明大祭大抽選会へ。豪華賞品が当たるかも！<br />
                明大祭の思い出づくりに、ぜひ立ち寄ってみてください！</Text>
                <SmallTitle>実施日時・場所</SmallTitle>
                <AccentText>日時</AccentText>
                <Text>10月30日(金).31日(土).11月1日(日)</Text>
                <AccentText>場所</AccentText>
                <Text>センターサークル フォトブース前</Text>
                <ContactView department="広報局" mail="142nd-kouhou@meidaisai.jp" showPhone showAddress />
        </CloudPageContainer>
    )
}
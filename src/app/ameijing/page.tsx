import PageTitle from "@/components/texts/PageTitle"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import Text from "@/components/texts/Text"
import SmallTitle from "@/components/texts/SmallTitle"
import Emphasis from "@/components/texts/Emphasis"
import SectionTitle from "@/components/texts/SectionTitle"
import AccentText from "@/components/texts/AccentText"
import ContactView from "@/components/texts/ContactView"
import { List, ListItem, ListText } from "@/components/texts/List"
import OnlyImage from "@/components/OnlyImage"
import MapImage from "@/components/MapImage"

export default function Page() {
    return (
        <CloudPageContainer>
            <PageTitle>Ameijing Photo</PageTitle>
            <SectionTitle>企画概要</SectionTitle>
            <Text>
                <Emphasis>明大祭の思い出を、とっておきの1枚に！</Emphasis><br />
                今年もフォトスポットが登場！<br />
                ここでしか撮れない写真で、明大祭の思い出を残しませんか？<br />
                撮影した写真をSNSに投稿すると、豪華賞品が当たるチャンスも！
            </Text>
            <Text className="my-5 !font-bold">📸 楽しみ方は3ステップ！</Text>
            <List numbered>
                <ListItem className="!font-bold">写真を撮ろう！</ListItem>
                <ListText className="mb-5 font-bold">フォトスポットで、とっておきの1枚を撮影！</ListText>
                <ListItem className="!font-bold">写真を投稿して抽選券をGET！</ListItem>
                <ListText className="mb-5 font-bold">
                    撮影した写真に明大祭に関するコメントを添えて、Xに投稿するか、Instagramのストーリーズに投稿！<br />
                    あわせて、明大祭公式Instagramをフォローしてください！<br />
                    フォロー画面と投稿画面を、フォトスポットの第一校舎側にある机のスタッフに見せると、抽選券がもらえます！
                </ListText>
                <ListItem className="!font-bold">大抽選会に参加！</ListItem>
                <ListText className="mb-5 font-bold">
                    抽選券を持って明大祭大抽選会へ。豪華賞品が当たるかも！<br />
                    明大祭の思い出づくりに、ぜひ立ち寄ってみてください！
                </ListText>
            </List>
            <SmallTitle>実施日時・場所</SmallTitle>
            <AccentText>日時</AccentText>
            <Text>10月30日(金).31日(土).11月1日(日)</Text>
            <AccentText>場所</AccentText>
            <Text>センターサークル フォトブース前</Text>
            <MapImage
                src="/images/ameijing/centercircle.svg"
                alt="アメイジングフォトスポットマップ"
                />
            <ContactView department="広報局" mail="142nd-kouhou@meidaisai.jp" showPhone showAddress />
        </CloudPageContainer>
    )
}
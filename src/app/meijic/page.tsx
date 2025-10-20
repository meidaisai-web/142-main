import PageContainer from "@/components/base/PageContainer";
import MapImage from "@/components/MapImage";
import Emphasis from "@/components/texts/Emphasis";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";

export default function Page() {
    return (
        <div>
            <PageTitle>Meijic Moment</PageTitle>
            <PageContainer>
                <SectionTitle>"Meijic Moment"で明大祭をもっと特別に！</SectionTitle>
                <Text moreTopPadding><Emphasis>フォトブースで撮影</Emphasis>し、<Emphasis>Instagramをフォロー & SNS投稿</Emphasis>で抽選券をゲット！</Text>
                <Text>明大祭大抽選会に参加すれば豪華景品が当たるチャンスも！</Text>
                <Text>さらに！運が良ければめいじろうと写真が撮れるかも？！</Text>
                <Text>ここでしか体験できない出会いや思い出を、大切な一枚にして未来に残そう！</Text>
                <Text>第141回明大祭をもっと楽しみましょう！</Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>11月1日(土).2日(日).3日(月・祝) 11：00～18：00</Text>
                <SmallTitle>場所</SmallTitle>
                <Text>センターサークル前のフォトブース前</Text>
                <MapImage src="/images/map/meijic.jpg" alt="Meijic Moment 会場マップ" />
            </PageContainer>
        </div>
    )
}
import PageTitle from "@/components/texts/PageTitle"
import PageContainer from "@/components/base/PageContainer"
import Text from "@/components/texts/Text"
import SectionTitle from "@/components/texts/SectionTitle"
import SmallTitle from "@/components/texts/SmallTitle"
import MapImage from "@/components/MapImage"
import Image from "next/image"


export default function Page() {
    return (
        <div>
            <PageTitle>明大祭イルミネーション</PageTitle>
            <PageContainer>
                <SectionTitle>熱狂を包む、余韻の光</SectionTitle>
                <Text moreTopPadding>明大祭の夜を、色鮮やかなイルミネーションが照らします。</Text>
                <Text>光の中で、熱狂の余韻に存分に浸ってみませんか？</Text>
                <Text>忘れられないひとときを、あなたにお届けします。</Text>
                <SectionTitle>企画実施日時</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>11月1日(土).2日(日).3日(月・祝) 16：00〜19：00</Text>
                <SmallTitle>場所</SmallTitle>
                <Text>和泉キャンパス正門付近</Text>
                <MapImage src="/images/map/illumination.jpg" alt="和泉キャンパス正門付近"/>
            </PageContainer>
        </div>
    )
}
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import Emphasis from "@/components/texts/Emphasis"
import SmallTitle from "@/components/texts/SmallTitle"
import OnlyImage from "@/components/OnlyImage"
import ContactView from "@/components/texts/ContactView"
export default function Page() {
    return (
          <CloudPageContainer>
            <PageTitle>明大祭イルミネーション</PageTitle>
            <OnlyImage src="/images/ilumi/ilumi.png" alt="明大祭イルミネーション" />

                <SectionTitle className="mb-8">企画概要</SectionTitle>
                <Emphasis bold>灯る、特別な明大祭の夜</Emphasis>
                <Text>明大祭の夜を彩る、色鮮やかなイルミネーション。<br />
                    光が織りなす幻想的な空間で、熱狂の余韻に存分に浸ってみませんか？<br />
                    忘れられない明大祭の夜を、あなたにお届けします。</Text>

                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>10月30日(金).31日(土).11月1日(日)16:00～</Text>
                <SmallTitle>場所</SmallTitle>
                <Text>和泉キャンパス正門付近</Text>

                <ContactView department="第142回明大祭実行委員会 開発局" mail="142nd-kaihatsu@meidaisai.jp" />
            </CloudPageContainer>
    )
}
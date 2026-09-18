import CloudPageContainer from "@/components/base/CloudPageContainer"
import OnlyImage from "@/components/OnlyImage"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import Emphasis from "@/components/texts/Emphasis"
import SmallTitele from "@/components/texts/SmallTitle"
import SmallTitle from "@/components/texts/SmallTitle"
import { List, ListItem } from "@/components/texts/List"

export default function Page() {
    return (
        <CloudPageContainer>
            <PageTitle>Ending</PageTitle>
            <OnlyImage
                src="/images/ending/ending-image.jpg"
                alt="Ending"
            />
            <SectionTitle>この夢を、もう少し</SectionTitle>
            <Text className="!text-center">
                <Emphasis>
                    星に届け僕らの鼓動。<br />
                    夜が祭を結び、永久に煌めく想いを鳴らす。<br />
                    今、エンドロールが輝き出す。
                </Emphasis>
            </Text>
            <SectionTitle>企画実施日時・場所</SectionTitle>
            <SmallTitele>日時</SmallTitele>
            <Text>11月1日(日) 17:25～18:00</Text>

            <SmallTitle>場所 </SmallTitle>
            <Text>メインステージ</Text>

            <SectionTitle>コンテンツ</SectionTitle>
            <List mark="・">
                <ListItem>オープニング動画</ListItem>
                <ListItem>オープニングアウト</ListItem>
                <ListItem>団体パフォーマンス</ListItem>
                <ListItem>スライドショー</ListItem>
                <ListItem>委員長挨拶</ListItem>
                <ListItem>グランドフィナーレ</ListItem>
            </List>
            <SectionTitle>出演団体</SectionTitle>
            <List mark="・">
                <ListItem>ジャグリングルサークルDietz</ListItem>
                <ListItem>アカペラサークルSound Arts</ListItem>
                <ListItem>K-popカバーダンスサークルMercie</ListItem>
                <ListItem>MDD</ListItem>
                <ListItem>Copia</ListItem>
                <ListItem>中野ダンスサークルSIGN</ListItem>
                <ListItem>男子チアリーディングサークルANCHORS</ListItem>
            </List>
        </CloudPageContainer>
    )
}

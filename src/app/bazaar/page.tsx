import PageTitle from "@/components/texts/PageTitle"
import PageContainer from "@/components/base/PageContainer"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import SmallTitle from "@/components/texts/SmallTitle"
import AccentText from "@/components/texts/AccentText"
import MapImage from "@/components/MapImage"
import Emphasis from "@/components/texts/Emphasis"

import { List } from "@/components/texts/List"
import { ListItem } from "@/components/texts/List"

export default function Page(){
    return(
        <div>
            <PageTitle>チャリティーバザー企画</PageTitle>
            <PageContainer>
                <SectionTitle>実行委員会によるバザー企画開催！</SectionTitle>
                <Text moreTopPadding>学生が持ち寄った本や服など、様々なアイテムが勢ぞろい！この機会にあなただけの特別な一品を見つけに来ませんか？</Text>
                <Text>バザーの収益金は、災害に見舞われた方に対する救援活動や復興支援のために、<Emphasis>日本赤十字社に寄付</Emphasis>されます。</Text>
                <List mark="※">
                    <ListItem>売り切れ次第終了となります。</ListItem>
                    <ListItem>最終募金金額については、明大祭終了後にこちらのページにてご報告させていただきます。</ListItem>
                </List>
                <SmallTitle>企画実施場所・日時</SmallTitle>
                <AccentText>実施場所</AccentText>
                <Text>第一校舎正面右側</Text>
                <MapImage src="/images/map/bazaar.jpg" alt="第一校舎正面右側"/>
                <AccentText>実施日時</AccentText>
                <Text>1月1日(土).11月2日(日).11月3日(月・祝) 10：00〜18：00</Text>
            </PageContainer>
        </div>
    )
}
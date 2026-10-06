import CloudPageContainer from "@/components/base/CloudPageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import Text from "@/components/texts/Text"; 
import Emphasis from "@/components/texts/Emphasis";
import SmallTitle from "@/components/texts/SmallTitle";
import { List, ListItem } from "@/components/texts/List" 
import ContactView from "@/components/texts/ContactView";
import OnlyImage from "@/components/OnlyImage";

export default function Page() {
    return (
        <CloudPageContainer>
            <PageTitle>明大王</PageTitle>
            <OnlyImage src="/images/king/king.png" alt="明大王" />

            <SectionTitle>明大愛、暴走中。</SectionTitle>
            <Text center>
                <Emphasis bold>
                    明治への愛はGPAじゃ、測れない。<br />
                    その愛は、本物か<br />
                    集え、野生の明大生！ <br />
                </Emphasis>
                明治大学を愛する者達のバカ真面目な頂上決戦<br />
                “明大王”の称号を手にするのは誰だ！
            </Text>

            <SectionTitle>企画概要</SectionTitle>
            <Text>明大愛を懸けた、笑いあり、真剣勝負ありの新企画<Emphasis>「明大王」！</Emphasis><br />
                  個性あふれる3つの試練に総勢4チームが挑戦し、明大愛No.1を決定！
            </Text>
            <Text>第一の試練：<Emphasis>明大愛クイズ</Emphasis><br />
                  破壊や爆飲みなど一癖あるクイズに挑戦！
            </Text>
            <Text>第二の試練：<Emphasis>二人羽織大食い対決</Emphasis><br />
                  息を合わせて食べまくれ！制限時間内にどれだけ食べられるかが勝負！
            </Text>
            <Text>第三の試練：<Emphasis>めいじろうパズル</Emphasis><br />
                  チームワーク全開！仲間と協力して、誰よりも早く完成させよう！
            </Text>
            <Text moreTopPadding><Emphasis>最後に明治の神が微笑むのは、、、</Emphasis></Text>

            <SectionTitle>企画実施日時・場所</SectionTitle>

            <SmallTitle>日時</SmallTitle>
            <Text>11月1日(日) 14:00〜14:50</Text>
            <SmallTitle>場所</SmallTitle>
            <Text>メインステージ</Text>

            <SectionTitle>出演団体</SectionTitle>
            <List>
                <ListItem>雄弁部</ListItem>
                <ListItem>男子チアリーディングチームANCHORS</ListItem>
                <ListItem>計画型むらさきーず</ListItem>
                <ListItem>学⭐︎プロジェクツ</ListItem>
            </List>

            {/* <SectionTitle>明大王紹介動画</SectionTitle> */}

            <ContactView department="演出局永燦部門" mail="142nd-eisan@meidaisai.jp" />
        </CloudPageContainer>
    )
}
 
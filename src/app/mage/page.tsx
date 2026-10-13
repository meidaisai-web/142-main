import CloudPageContainer from "@/components/base/CloudPageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";
import Emphasis from "@/components/texts/Emphasis";
import { List, ListItem, ListText } from "@/components/texts/List";
import ContactView from "@/components/texts/ContactView"
import AccentText from "@/components/texts/AccentText"
import OnlyImage from "@/components/OnlyImage";

export default function Marge() {
    return (
        <CloudPageContainer>
            <PageTitle>
                Meiji de Mage～見習い魔法使いの修行録～
            </PageTitle>

            <OnlyImage src="/images/mage/mage-logo.png" alt='mageロゴ'/>

            <SectionTitle>企画概要</SectionTitle>
            <Text>
                <Emphasis>
                「どこの企画に行こう？」「どこからまわろう？」迷っているなら、スタンプラリーがおすすめ！
                </Emphasis>
                <br />
                屋内の教室企画を回ってスタンプを集めながら、明大祭をもっと楽しめるスタンプラリー！スタンプを集めると素敵な景品をプレゼント！
                <br />
                <List mark="※">
	            <ListItem>景品には限りがございます。ご了承ください。</ListItem>
                </List>
            </Text>
            <SmallTitle>ストーリー</SmallTitle>
            <Text>
                <Emphasis>
                    スタンプを集めて、一人前の魔法使いを目指そう！
                </Emphasis>
                <br />
                あなたは見習い魔法使い！
                <br />
                スタンプを集めると、魔法やアイテムが手に入ったり仲間ができたり、どんどんレベルアップ！目指せ一人前の魔法使い！
            </Text>
            <SectionTitle>企画実施日時</SectionTitle>
            <Text>
                10月30日(金).31日(土)11:00～18:00
                <br />
                11月1日(日)11:00～17:00
            </Text>
            <SmallTitle>参加方法</SmallTitle>
            <Text>
                まずはスタンプ台紙を受け取ろう！
                <br />
                和泉図書館前開発局企画受付またはメディア棟M402教室でスタンプ台紙を配布しています。
                <br />
                企画の詳しい内容は台紙をチェック！
            </Text>
            <SmallTitle>協力団体</SmallTitle>

            <List mark="・">
                <ListItem>キャップ投げクラブ</ListItem>
                <ListItem>国際日本学部宮本大人ゼミナール</ListItem>
                <ListItem>商学部福田康典ゼミナール</ListItem>
                <ListItem>新歓実行委員会和泉</ListItem>
                <ListItem>描画俱楽部</ListItem>
                <ListItem>ミステリ研究会</ListItem>
                <ListItem>M.U.A</ListItem>
            </List>
            <AccentText>お問い合わせ</AccentText>
            <Text>
            本祭期間外におけるお問い合わせは、下記のお問い合わせ先までご連絡をお願いいたします。
            <br />
            <Emphasis>
            本祭期間中は和泉図書館前開発局企画受付までお越しください。
            </Emphasis>
            </Text>
            <ContactView department="開発局凌閃部門" mail="142ndryousenbumon@gmail.com" showPhone/>
        </CloudPageContainer>
    );
}
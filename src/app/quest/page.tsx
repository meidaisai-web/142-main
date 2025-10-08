import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import PageContainer from "@/components/base/PageContainer"
import ContactView from "@/components/texts/ContactView"
import { List, ListItem } from "@/components/texts/List"
import Emphasis from "@/components/texts/Emphasis"
import SmallTitle from "@/components/texts/SmallTitle"
export default function Page() {
    return (
        <>
            <PageTitle>ポンdeクエスト</PageTitle>
            <PageContainer>
                <SectionTitle>企画概要</SectionTitle>
                <Text moreTopPadding>
                    <Emphasis>
                        「どこの企画に行くか迷ってる！」「どこからまわろう？」そんなあなたにはスタンプラリー企画がおすすめ！
                    </Emphasis>
                </Text>
                <Text moreTopPadding>
                    屋内の教室企画に参加してスタンプを集めよう！明大祭の魅力をもっと発見できるチャンス！
                    抽選券対象の実行委員会企画！！スタンプを5つ以上集めると素敵な景品もプレゼント！
                </Text>
                <SmallTitle className="mt-10">ストーリー</SmallTitle>
                <Text>
                    <Emphasis>
                        スタンプを集めて、魔王に挑め！！
                    </Emphasis>
                </Text>
                <Text>
                    舞台は7つの大陸に分かれたファンタジーの世界――
                </Text>
                <Text>
                    スタンプを集めて、各地に散らばった宝と仲間を集結させよう！戦力を集めて万全の状態で魔王を倒せ！
                </Text>
                <SectionTitle className="mt-10">企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>
                    11月1日(土)、2日(日)10：00〜18：00
                </Text>
                <Text>
                    11月3日(月・祝)10：00～17：00
                </Text>
                <SmallTitle className="mt-5">場所</SmallTitle>
                <Text>
                    明治大学和泉キャンパス
                </Text>
                <SectionTitle className="mt-5">参加方法</SectionTitle>
                <Text moreTopPadding>
                    和泉図書館前企画受付または和泉ラーニングスクエアLS506教室にてスタンプ台紙を配布しております。
                </Text>
                <List mark="※">
                    <ListItem>
                        スタンプ台紙の配布は<Emphasis>先着順</Emphasis>となっております。受付開始時刻は<Emphasis>10：00</Emphasis>です
                    </ListItem>
                    <ListItem>
                        台紙には限りがございますのでご了承ください。
                    </ListItem>
                    <ListItem>
                        景品には限りがございますのでご了承ください。
                    </ListItem>
                </List>
                <SectionTitle className="mt-10">協力団体 </SectionTitle>
                <List mark="・" className="mt-8">
                    <ListItem>
                        競技麻雀サークル明雀会
                    </ListItem>
                    <ListItem>
                        クイズサークルイージオス
                    </ListItem>
                    <ListItem>
                        三文文士会
                    </ListItem>
                    <ListItem>
                        手話サークルあうるはうす
                    </ListItem>
                    <ListItem>
                        情報コミュニケーション学部島田ゼミナール
                    </ListItem>
                    <ListItem>
                        情報コミュニケーション学部久保田ゼミナール
                    </ListItem>
                    <ListItem>
                        第141回明大祭実行委員会 渉外局 校友部門
                    </ListItem>
                    <ListItem>
                        中野ボードゲーム同好会
                    </ListItem>
                    <ListItem>
                        明治大学学生ボランティア団体Tree
                    </ListItem>
                    <ListItem>
                        明治大学落語研究会
                    </ListItem>
                    <ListItem>
                        ミステリ研究会
                    </ListItem>
                    <ListItem>
                        Empower MEiji
                    </ListItem>
                    <ListItem>
                        greenhearts
                    </ListItem>
                    <ListItem>
                        M.U.A
                    </ListItem>
                    <ListItem>
                        SHIP
                    </ListItem>
                </List>
                <SectionTitle>お問い合わせ</SectionTitle>
                <Text moreTopPadding>
                    明大祭期間外におけるお問い合わせは、下記のお問い合わせ先までご連絡をお願いいたします。
                </Text>
                <Text>
                    明大祭期間中は和泉図書館前企画受付までお越しください。
                </Text>
                <ContactView department="開発局想越部門" mail="141st-souetsu@meidaisai.jp" showPhone showAddress />
            </PageContainer>
        </>
    )
}

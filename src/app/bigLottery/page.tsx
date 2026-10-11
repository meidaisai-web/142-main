import PageTitle from "@/components/texts/PageTitle";
import CloudPageContainer from "@/components/base/CloudPageContainer";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import AccentText from "@/components/texts/AccentText";
import Text from "@/components/texts/Text";
import OnlyImage from "@/components/OnlyImage";
import Emphasis from "@/components/texts/Emphasis"
import TransitionLink from "@/components/buttons/TransitionLink"
import {List, ListItem, ListText} from "@/components/texts/List"

export default function Page() {
    return (
        <div>
            <CloudPageContainer>
                <PageTitle>明大祭大抽選会</PageTitle>
                <SectionTitle>明大祭大抽選会とは</SectionTitle>
                <Text>
                    明大祭実行委員会が実施している様々な企画に参加して、「明大祭大抽選会」の抽選券を手に入れよう！<br />
                    気になる景品が当たるチャンス…！<br />
                    参加費は無料のため、気軽に参加OK！<br />
                    第142回明大祭の思い出と一緒に、豪華景品をゲットして帰ろう！
                </Text>

                <SmallTitle>実施場所</SmallTitle>
                <Text>
                    メディア棟前明大祭大抽選会ブース<br />
                    ※ 2つの抽選企画の場所が隣接しているためご注意ください。
                </Text>
                {/* <OnlyImage src="" alt="" className="" /> GDからの作成待ち */}

                <SmallTitle>実施日時</SmallTitle>
                <Text>
                    10月30日(金)　13:00〜18:00
                    10月31日(土)　12:00〜18:00
                    11月1日(日)　12:00〜17:20
                </Text>
                <Emphasis>※景品がなくなり次第、受付終了とさせていただきます。</Emphasis>

                <SmallTitle>参加方法</SmallTitle>

                <AccentText>1.抽選券配布企画に参加する</AccentText>
                <Text>下記に記載の抽選券配布企画に参加しよう！</Text>

                <AccentText>2.紙の抽選券を手に入れる</AccentText>
                <Text>企画参加後、その場や各引き換え場所で紙の抽選券をGET！</Text>
                {/* <OnlyImage src="" alt="" className="" /> GDからの画像待ち */}
                <Text>
                    ※引き換え場所が各参加企画で異なっているためご注意ください。<br />
                    ※詳細は下記、抽選券配付企画をご覧ください。
                </Text>

                <AccentText>3.抽選会に参加する</AccentText>
                <Text>ガラポンを回して豪華景品を当てよう！</Text>
                <Emphasis>
                    ※抽選券1枚につき、1回抽選に参加できます。（一度におひとり様最大5回まで）<br />
                    ※紙の抽選券に引き換えのうえ、ご参加ください。
                </Emphasis>


                <SectionTitle>抽選券配付企画</SectionTitle>
                <SmallTitle>Meidaisai Championship</SmallTitle>
                <Text>
                    引き換え場所:和泉図書館前Meidaisai Championship受付<br />
                    <TransitionLink href="/search">こちら</TransitionLink>から、飲食部門・エンタメ部門・パフォーマンス部門すべてにご投票いただくと抽選券がもらえます！<br />
                    <TransitionLink href="/meicham">詳しくはこちら</TransitionLink>も合わせてご確認ください。
                </Text>
                {/*　ここに投票状況をぶち込む */}
                <Text>明大祭公式パンフレットp.16</Text>

                <SmallTitle>Ameijing Photo</SmallTitle>
                <Text>
                    企画実施場所:センターサークル前<br />
                    <TransitionLink href="">詳しくはこちら</TransitionLink><br />
                    明大祭公式パンフレットp.26
                </Text>

                <SmallTitle>当日ニーズ調査</SmallTitle>
                <Text>
                    引き換え場所:和泉図書館前アンケート受付<br />
                    明大祭公式パンフレットp.25
                </Text>

                <SmallTitle>企画効果測定</SmallTitle>
                <Text>
                    明大祭をより魅力的にするため、アンケートを実施中！<br />
                    各企画のQRコードからWeb回答、またはアンケート用紙への記入のいずれか一方でご回答ください。<br />
                    じ企画に複数回回答しても、抽選券は1枚までです。
                </Text>

                <AccentText>抽選券受取方法</AccentText>
                <Text>
                    Web:回答完了画面を提示<br />
                    用紙:記入済み用紙を提出<br />
                </Text>
                <AccentText>抽選券受取場所</AccentText>
                <Text>和泉図書館前アンケート受付</Text>
                <AccentText>アンケート対象企画</AccentText>
                <List>
                    <ListText>開発局</ListText>
                    <List mark="・">
                        <ListItem><TransitionLink href="">第142回明大祭公式テーマソングMV</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">Meidaisai Championship</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">Opening</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="/fight">Fight on the Stage</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">Meijic Station</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">中夜祭</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">明大王</TransitionLink></ListItem>
                    </List>
                    <ListText>開発局</ListText>
                    <List mark="・">
                        <ListItem><TransitionLink href="">明治大解剖ツアー</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">JET GACHA STREAM〜カプセルがひらく、次の目的地〜</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="/ippan">NO iMeiji, NO LIFE？</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">Dream Canvas－夜空を描こう－</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">明大祭イルミネーション</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">Meiji de Mage～見習い魔法使いの修行録～</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">記憶探し～未来からのメッセージ～</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">受験生コレクション～わくわく明大生活～</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">熱闘!!明治スポーツ</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">おもいで工房</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">M-TYPE</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="/experiment">めいじっけん</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="/limit">LIMIT&infin;BREAK</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">超めいだい&#9825;宣伝部</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">ハロウィンナイトin明大祭</TransitionLink></ListItem>
                    </List>
                    <ListText>広報局</ListText>
                    <List mark="・">
                        <ListItem><TransitionLink href="">Ameijing Photo</TransitionLink></ListItem>
                    </List>
                    <ListText>渉外局</ListText>
                    <List mark="・">
                        <ListItem><TransitionLink href="">企業ブース</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">校友・父母歓迎スペース</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="/matsubara">松原小学校&times;明大祭</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">明大前商店街&times;明大祭〜明大祭で当てよう！豪華景品〜</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">KEIO&times;第142回明大祭〜いつも駅からだった　明大前編～</TransitionLink></ListItem>
                    </List>
                    <ListText>制作局</ListText>
                    <List mark="・">
                        <ListItem><TransitionLink href="">明大祭公式グッズ企画</TransitionLink></ListItem>
                        <ListItem><TransitionLink href="">第142回明大祭公式ステッカー</TransitionLink></ListItem>
                    </List>
                </List>
            </CloudPageContainer>
        </div>
    )
}
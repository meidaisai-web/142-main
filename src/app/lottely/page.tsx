import Text from "@/components/texts/Text";
import SmallTitle from "@/components/texts/SmallTitle";
import AccentText from "@/components/texts/AccentText";
import { List, ListItem, ListText } from "@/components/texts/List";
import TransitionLink from "@/components/buttons/TransitionLink";
import LotteryTicketBadge from "@/components/LotteryTicketBadge"
import CloudPageContainer from "@/components/base/CloudPageContainer";
import PageTitle from "@/components/texts/PageTitle";
export default function page() {
    return (
        <CloudPageContainer>
            <div>
                <PageTitle>アンケート対象企画一覧</PageTitle>
                <SmallTitle>企画効果測定</SmallTitle>
                <Text>
                    明大祭をより魅力的にするため、アンケートを実施中！<br />
                    各企画のQRコードからWeb回答、またはアンケート用紙への記入のいずれか一方でご回答ください。<br />
                    同じ企画に複数回回答しても、抽選券は1枚までです。
                </Text>

                <AccentText>抽選券受取方法</AccentText>
                <Text>
                    Web：回答完了画面を提示<br />
                    用紙：記入済み用紙を提出
                </Text>
                <AccentText>抽選券受取場所</AccentText>
                <Text>和泉図書館前アンケート受付</Text>
                <AccentText>アンケート対象企画</AccentText>
                <List>
                    <ListText>演出局</ListText>
                    <List mark="・">
                        <ListItem><LotteryTicketBadge id="mv" /><TransitionLink href="/mv">第142回明大祭公式テーマソングMV</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="champ" /><TransitionLink href="/champ">Meidaisai Championship</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="opening" /><TransitionLink href="/opening">Opening</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="fight" /><TransitionLink href="/fight">Fight on the Stage</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="meijic" /><TransitionLink href="/meijic">Meijic Station</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="midnight" /><TransitionLink href="/midnight">中夜祭</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="king" /><TransitionLink href="/king">明大王</TransitionLink></ListItem>
                    </List>
                    <ListText>開発局</ListText>
                    <List mark="・">
                        <ListItem><LotteryTicketBadge id="tour" /><TransitionLink href="/tour">明治大解剖ツアー</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="jet" /><TransitionLink href="/jet">JET GACHA STREAM〜カプセルがひらく、次の目的地〜</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="noimage" /><TransitionLink href="/noimage">NO iMeiji, NO LIFE？</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="dream" /><TransitionLink href="/dream">Dream Canvas－夜空を描こう－</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="ilumi" /><TransitionLink href="/ilumi">明大祭イルミネーション</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="mage" /><TransitionLink href="/mage">Meiji de Mage～見習い魔法使いの修行録～</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="memory" /><TransitionLink href="/memory">記憶探し～未来からのメッセージ～</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="wakuwaku" /><TransitionLink href="/wakuwaku">受験生コレクション～わくわく明大生活～</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="sports" /><TransitionLink href="/sports">熱闘!!明治スポーツ</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="omoi" /><TransitionLink href="/omoi">おもいで工房</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="mtype" /><TransitionLink href="/mtype">M-TYPE</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="experiment" /><TransitionLink href="/experiment">めいじっけん</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="limit" /><TransitionLink href="/limit">LIMIT&infin;BREAK</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="senden" />超めいだい&#9825;宣伝部</ListItem>
                        <ListItem><LotteryTicketBadge id="halloween" /><TransitionLink href="/halloween">ハロウィンナイトin明大祭</TransitionLink></ListItem>
                    </List>
                    <ListText>広報局</ListText>
                    <List mark="・">
                        <ListItem><LotteryTicketBadge id="ameijing" /><TransitionLink href="/ameijing">Ameijing Photo</TransitionLink></ListItem>
                    </List>
                    <ListText>渉外局</ListText>
                    <List mark="・">
                        <ListItem><LotteryTicketBadge id="booth" /><TransitionLink href="/booth">企業ブース</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="alumni" /><TransitionLink href="/stakeholders/alumni">校友・父母歓迎スペース</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="matsubara" /><TransitionLink href="/matsubara">松原小学校&times;明大祭</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="lottely-shop" /><TransitionLink href="/lottely-shop">明大前商店街&times;明大祭〜明大祭で当てよう！豪華景品〜</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="keio" /><TransitionLink href="/keio">KEIO&times;第142回明大祭〜いつも駅からだった　明大前編～</TransitionLink></ListItem>
                    </List>
                    <ListText>制作局</ListText>
                    <List mark="・">
                        <ListItem><LotteryTicketBadge id="goods" /><TransitionLink href="/goods">明大祭公式グッズ企画</TransitionLink></ListItem>
                        <ListItem><LotteryTicketBadge id="sticker" /><TransitionLink href="/sticker">第142回明大祭公式ステッカー</TransitionLink></ListItem>
                    </List>
                </List>
                <Text center className="mt-10">明大祭大抽選会企画詳細ページは<TransitionLink href="/bigLottery">こちら</TransitionLink></Text>
            </div>
        </CloudPageContainer>
    )
}
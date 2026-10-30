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
                        <ListItem><TransitionLink href="/mv">第142回明大祭公式テーマソングMV</TransitionLink><LotteryTicketBadge id="mv" /></ListItem>
                        <ListItem><TransitionLink href="/champ">Meidaisai Championship</TransitionLink><LotteryTicketBadge id="champ" /></ListItem>
                        <ListItem><TransitionLink href="/opening">Opening</TransitionLink><LotteryTicketBadge id="opening" /></ListItem>
                        <ListItem><TransitionLink href="/fight">Fight on the Stage</TransitionLink><LotteryTicketBadge id="fight" /></ListItem>
                        <ListItem><TransitionLink href="/meijic">Meijic Station</TransitionLink><LotteryTicketBadge id="meijic" /></ListItem>
                        <ListItem><TransitionLink href="/midnight">中夜祭</TransitionLink><LotteryTicketBadge id="midnight" /></ListItem>
                        <ListItem><TransitionLink href="/king">明大王</TransitionLink><LotteryTicketBadge id="king" /></ListItem>
                    </List>
                    <ListText>開発局</ListText>
                    <List mark="・">
                        <ListItem><TransitionLink href="/tour">明治大解剖ツアー</TransitionLink><LotteryTicketBadge id="tour" /></ListItem>
                        <ListItem><TransitionLink href="/jet">JET GACHA STREAM〜カプセルがひらく、次の目的地〜</TransitionLink><LotteryTicketBadge id="jet" /></ListItem>
                        <ListItem><TransitionLink href="/noimage">NO iMeiji, NO LIFE？</TransitionLink><LotteryTicketBadge id="noimage" /></ListItem>
                        <ListItem><TransitionLink href="/dream">Dream Canvas－夜空を描こう－</TransitionLink><LotteryTicketBadge id="dream" /></ListItem>
                        <ListItem><TransitionLink href="/ilumi">明大祭イルミネーション</TransitionLink><LotteryTicketBadge id="ilumi" /></ListItem>
                        <ListItem><TransitionLink href="/mage">Meiji de Mage～見習い魔法使いの修行録～</TransitionLink><LotteryTicketBadge id="mage" /></ListItem>
                        <ListItem><TransitionLink href="/memory">記憶探し～未来からのメッセージ～</TransitionLink><LotteryTicketBadge id="memory" /></ListItem>
                        <ListItem><TransitionLink href="/wakuwaku">受験生コレクション～わくわく明大生活～</TransitionLink><LotteryTicketBadge id="wakuwaku" /></ListItem>
                        <ListItem><TransitionLink href="/sports">熱闘!!明治スポーツ</TransitionLink><LotteryTicketBadge id="sports" /></ListItem>
                        <ListItem><TransitionLink href="/omoi">おもいで工房</TransitionLink><LotteryTicketBadge id="omoi" /></ListItem>
                        <ListItem><TransitionLink href="/mtype">M-TYPE</TransitionLink><LotteryTicketBadge id="mtype" /></ListItem>
                        <ListItem><TransitionLink href="/experiment">めいじっけん</TransitionLink><LotteryTicketBadge id="experiment" /></ListItem>
                        <ListItem><TransitionLink href="/limit">LIMIT&infin;BREAK</TransitionLink><LotteryTicketBadge id="limit" /></ListItem>
                        <ListItem>超めいだい&#9825;宣伝部</ListItem>
                        <ListItem><TransitionLink href="/halloween">ハロウィンナイトin明大祭</TransitionLink><LotteryTicketBadge id="halloween" /></ListItem>
                    </List>
                    <ListText>広報局</ListText>
                    <List mark="・">
                        <ListItem><TransitionLink href="/ameijing">Ameijing Photo</TransitionLink><LotteryTicketBadge id="ameijing" /></ListItem>
                    </List>
                    <ListText>渉外局</ListText>
                    <List mark="・">
                        <ListItem><TransitionLink href="/booth">企業ブース</TransitionLink><LotteryTicketBadge id="booth" /></ListItem>
                        <ListItem><TransitionLink href="/stakeholders/alumni">校友・父母歓迎スペース</TransitionLink><LotteryTicketBadge id="alumni" /></ListItem>
                        <ListItem><TransitionLink href="/matsubara">松原小学校&times;明大祭</TransitionLink><LotteryTicketBadge id="matsubara" /></ListItem>
                        <ListItem><TransitionLink href="/lottely-shop">明大前商店街&times;明大祭〜明大祭で当てよう！豪華景品〜</TransitionLink><LotteryTicketBadge id="lottely-shop" /></ListItem>
                        <ListItem><TransitionLink href="/keio">KEIO&times;第142回明大祭〜いつも駅からだった　明大前編～</TransitionLink><LotteryTicketBadge id="keio" /></ListItem>
                    </List>
                    <ListText>制作局</ListText>
                    <List mark="・">
                        <ListItem><TransitionLink href="/goods">明大祭公式グッズ企画</TransitionLink><LotteryTicketBadge id="goods" /></ListItem>
                        <ListItem><TransitionLink href="/sticker">第142回明大祭公式ステッカー</TransitionLink><LotteryTicketBadge id="sticker" /></ListItem>
                    </List>
                </List>
                <Text center className="mt-10">明大祭大抽選会企画詳細ページは<TransitionLink href="/bigLottery">こちら</TransitionLink></Text>
            </div>
        </CloudPageContainer>
    )
}
import PageTitle from "@/components/texts/PageTitle";
import CloudPageContainer from "@/components/base/CloudPageContainer";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import AccentText from "@/components/texts/AccentText";
import Text from "@/components/texts/Text";
import Button from "@/components/buttons/Button"
import Emphasis from "@/components/texts/Emphasis"
import TransitionLink from "@/components/buttons/TransitionLink"
import LotteryTicketBadge from "@/components/LotteryTicketBadge"
import LotteryTicketProjectList from "@/components/LotteryTicketProjectList"
import {List, ListItem} from "@/components/texts/List"
import MeichamVoteStatus from "@/components/MeichamVoteStatus"
import MapImage from "@/components/MapImage"
import Image from "next/image"

export default function Page() {
    return (
        <div>
            <CloudPageContainer>
                <PageTitle className="translate-x-2">明大祭大抽選会</PageTitle>
                <SectionTitle>明大祭大抽選会とは</SectionTitle>
                <Text>  
                    明大祭実行委員会が実施している様々な企画に参加して、「明大祭大抽選会」の抽選券を手に入れよう！<br />
                    気になる景品が当たるチャンス…！<br />
                    参加費は無料のため、気軽に参加OK！<br />
                    第142回明大祭の思い出と一緒に、豪華景品をゲットして帰ろう！
                </Text>

                <SmallTitle>実施場所</SmallTitle>
                <MapImage
                    src="/images/bigLottery/メディア棟前大抽選会.svg"
                    alt="メディア棟前"
                />
                <Text>
                    メディア棟前明大祭大抽選会ブース<br />
                </Text>
                <List mark="&#8251;"><ListItem>2つの抽選企画の場所が隣接しているためご注意ください。</ListItem></List>
                {/* <OnlyImage src="" alt="" className="" /> GDからの作成待ち */}

                <SmallTitle>実施日時</SmallTitle>
                <Text>
                    10月30日(金)　13:00〜18:00<br />
                    10月31日(土)　12:00〜18:00<br />
                    11月1日(日)　12:00〜17:20
                </Text>
                <List mark="&#8251;"><ListItem><Emphasis>景品がなくなり次第、受付終了とさせていただきます。</Emphasis></ListItem></List>

                <SmallTitle>参加方法</SmallTitle>

                <AccentText>1.抽選券配付企画に参加する</AccentText>
                <Text>下記に記載の抽選券配付企画に参加しよう！</Text>

                <AccentText>2.紙の抽選券を手に入れる</AccentText>
                <Text>企画参加後、その場や各引き換え場所で紙の抽選券をGET！</Text>
                <Image src="/images/bigLottery/bigLottery07.svg" alt="抽選券のサンプル画像" width={317} height={192} className="w-4/5 sm:w-1/2 h-auto my-4" />
                <List mark="&#8251;">
                    <ListItem>引き換え場所が各参加企画で異なっているためご注意ください。</ListItem>
                    <ListItem>詳細は下記、抽選券配付企画をご覧ください。</ListItem>
                </List>

                <AccentText>3.抽選会に参加する</AccentText>
                <Text>ガラポンを回して豪華景品を当てよう！</Text>
                <List mark="&#8251;">
                    <ListItem><Emphasis>抽選券1枚につき、1回抽選に参加できます。（一度におひとり様最大5回まで）</Emphasis></ListItem>
                    <ListItem><Emphasis>紙の抽選券に引き換えのうえ、ご参加ください。</Emphasis></ListItem>
                </List>


                <SectionTitle>抽選券配付企画</SectionTitle>
                <SmallTitle>Meidaisai Championship</SmallTitle>
                <LotteryTicketBadge id="champ" />
                <Text>
                    <TransitionLink href="/search">企画検索</TransitionLink>から、飲食部門・エンタメ部門・パフォーマンス部門すべてにご投票いただくと抽選券がもらえます！
                </Text>
                <AccentText>引き換え場所</AccentText>
                <Text noJustify>和泉図書館前Meidaisai Championship受付</Text>
                <Button href="/champ">詳しくはこちら</Button>
                <MeichamVoteStatus />
                <Text>明大祭公式パンフレットp.16</Text>

                <SmallTitle>Ameijing Photo</SmallTitle>
                <LotteryTicketBadge id="ameijing" />
                <Text>
                    企画実施場所：センターサークル前<br />
                    <TransitionLink href="/ameijing">詳しくはこちら</TransitionLink><br />
                    明大祭公式パンフレットp.26
                </Text>

                <SmallTitle>当日ニーズ調査</SmallTitle>
                <Text>
                    引き換え場所：和泉図書館前アンケート受付<br />
                    明大祭公式パンフレットp.25
                </Text>

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
                <LotteryTicketProjectList />
            </CloudPageContainer>
        </div>
    )
}
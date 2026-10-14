import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import Emphasis from "@/components/texts/Emphasis"
import SmallTitle from "@/components/texts/SmallTitle"
import AccentText from "@/components/texts/AccentText"
import Image from "next/image"
import OnlyImage from "@/components/OnlyImage"
import ContactView from "@/components/texts//ContactView"
import Button from "@/components/buttons/Button"
import { List, ListItem,ListText } from "@/components/texts/List"
import TransitionLink from "@/components/buttons/TransitionLink"


export default function Page() {
    return (
        <div>
            <PageTitle>Meidaisai Championship</PageTitle>
            <CloudPageContainer>
                <OnlyImage
                src="/images/championship/logo.jpg"
                alt="Championship Logo"
                 />
                <SectionTitle className="mb-8">あなたの想いが、Championを決める。</SectionTitle>
                <Text>みなさまの投票によって明大祭No.1企画を決定します。<Emphasis>「飲食部門」「エンタメ部門」「パフォーマンス部門」</Emphasis>の3つに分け、各部門の1位を決めます。そして、最も多くの票を獲得した団体がChampionとなります。結果は11月1日(日)に行われるEndingにて発表します。<br />
                    また3部門すべてに投票で、明大祭大抽選会に参加することができます。抽選企画の詳細は明大祭大抽選会のページをご覧ください。</Text>
                <SmallTitle>投票可能時間</SmallTitle>
                <List mark="・">
                  <ListItem>10月30日(金).31日(土) 11:00〜19:00</ListItem>
                  <ListItem>11月1日(日) 11:00〜17:00</ListItem>
                </List>                
                <SmallTitle>投票方法</SmallTitle>
                <Text>①第142回明大祭公式サイトにアクセスし、「企画検索」ページから対象の企画を検索します。または、各企画実施場所に設置されているQRコードを読み込みます。<br />
                    ②企画詳細ページ内の「投票する」をタップすると投票完了です！</Text>
                <SmallTitle>投票部門</SmallTitle>
                <AccentText className="mt-5">飲食部門</AccentText>
                <Text>企画ジャンルが<Emphasis>模擬店・喫茶</Emphasis>にあたる企画</Text>
                <Image src="/images/championship/eat.jpg"
                    alt="eat"
                    width={800} height={400}
                    className="mx-auto mb-10" />
                <AccentText className="mt-5">エンタメ部門</AccentText>
                <Text>企画ジャンルが<Emphasis>ゲスト・参加体験・展示</Emphasis>にあたる企画</Text>
                <Image src="/images/championship/entertainment.jpg"
                    alt="entertainment"
                    width={800} height={400}
                    className="mx-auto mb-10" />
                <AccentText className="mt-5">パフォーマンス部門</AccentText>
                <Text>企画ジャンルが<Emphasis>音楽・ダンス・パフォーマンス</Emphasis>にあたる企画</Text>
                <Image src="/images/championship/performance.jpg"
                    alt="performance"
                    width={800} height={400}
                    className="mx-auto mb-10" />
                <SmallTitle>投票の注意点</SmallTitle>
                <List mark="・">
	              <ListItem>よいと思った企画すべてに投票することができます！</ListItem>
                  <ListItem>各企画につき本祭期間を通して1人1回・1端末まで投票可能です。</ListItem>
                  <ListItem>企画実施当日のみ投票可能です。また、明大祭実施時間外の投票は禁止とします。</ListItem>
                </List>
                <SmallTitle>抽選会の引換方法</SmallTitle>
                <ListText>
	             <ListItem>飲食部門・エンタメ部門・パフォーマンス部門のすべてに投票して抽選券をGETしよう!</ListItem>
                 <ListItem>抽選券を受け取り、明大祭大抽選会に参加するまでの流れをご案内します。</ListItem>
                 <ListText>抽選券は1日1枚まで引き換え可能です。</ListText>
                </ListText>
               <AccentText className="mt-5">STEP1</AccentText>
                <Text>和泉図書館前Meidaisai Championship受付までお越しください。</Text>
                <Image src="/images/championship/champmap.svg"
                    alt="step1"
                    width={800} height={400}
                    className="mx-auto mb-10" />
                <AccentText className="mt-5">STEP2</AccentText>
                <Text>投票完了画面の「抽選券をGET!」ボタンをタップしてください。<br />
                    または、<TransitionLink href="/voucher">「明大祭大抽選会 抽選券引き換え画面」ページ</TransitionLink>からもアクセス可能です。</Text>
                <Image src="/images/championship/okmeicham.svg"
                    alt="step2"
                    width={400} height={200}
                    className="mx-auto mb-10" />
                <AccentText className="mt-5">STEP3</AccentText>
                <ListText>
	              <ListItem>受付の実行委員の指示で、「明大祭大抽選会 抽選券引き換え画面」ページ上部の引き換えるボタンを押してください。抽選券に交換いたします。</ListItem>
                  <ListItem><Emphasis>※引き換えボタンは、インフォメーションブースで引き換えるタイミングでタップしてください。事前にタップしてしまうと抽選券と引き換えることができなくなってしまいます。</Emphasis></ListItem>
                </ListText>
                <AccentText className="mt-5">STEP4</AccentText>
                <ListText>
	              <ListItem>メディア棟前企画受付にある「明大祭大抽選会」まで行くと、抽選に参加できます！</ListItem>
                  <ListItem> 企画に関するお問い合わせは、和泉図書館前総合インフォメーションブースMeidaisai Championship受付までお越しください。</ListItem>
                  <ListText> ※1日に配付する抽選券の枚数には限りがあります。予定枚数に達し次第、Web上の引き換え画面は表示されなくなりますので、あらかじめご了承ください。</ListText>
                    <ListText> 抽選券に関して詳しく知りたい方は、明大祭大抽選会詳細ページをご覧ください。</ListText>
                </ListText>
                <Button href="/bigLottery" className="mt-5">
                    こちら
                </Button>
                <ContactView department="第142回明大祭実行委員会演出局" mail="142nd-enshutsu@meidaisai.jp" />
            </CloudPageContainer>
        </div>
    )
}

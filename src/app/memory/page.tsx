import CloudPageContainer from "@/components/base/CloudPageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import AccentText from "@/components/texts/AccentText";
import Text from "@/components/texts/Text";
import Emphasis from "@/components/texts/Emphasis";
import { List, ListItem, ListText } from "@/components/texts/List"
import OnlyImage from "@/components/OnlyImage";
import TransitionLink from "@/components/buttons/TransitionLink"
import ContactView from "@/components/texts/ContactView";

export default function Page() {
    return (
        <CloudPageContainer>
            <PageTitle>記憶探し～未来からのメッセージ～</PageTitle>
            <OnlyImage src="/images/memory/memory-logo.png" alt="企画ロゴ" />
            <SectionTitle>企画概要</SectionTitle>
            <Text>
                <Emphasis>毎年大人気!!</Emphasis>キャンパス巡るなら、<Emphasis>まずは&quot;コレ&quot;ミッションラリー!!</Emphasis><br />
                謎解きやミッションをクリアしながらキャンパス全体を巡れます！ゴールした先には素敵な景品が！みなさまの挑戦をお待ちしております！<br />
            </Text>
            <List mark="&#8251;">
                <ListItem>景品には限りがございます。ご了承ください。</ListItem>
            </List>
            <SmallTitle>ストーリー</SmallTitle>
            <Text>
                未来から届いた一通の手紙<br />
                <Emphasis>「明大祭は成功した。しかし、その日の記憶は誰の中にも残っていない。」</Emphasis><br />
                消えてしまった記憶を取り戻すため、大学内に散らばった「記憶の欠片」を探し、さまざまな謎やミッションに挑戦しよう！
            </Text>
            <SectionTitle>企画実施日時</SectionTitle>
            <Text>
                10月30日(金).31日(土)11:00～18:00<br />
                11月1日(日)11:00～17:00
            </Text>
            <SmallTitle>参加方法</SmallTitle>
            <Text>
                以下のリンクやQRコードから「記憶探し～未来からのメッセージ～」公式LINEを追加して参加できます！<br />
                <TransitionLink href="https://lin.ee/q3RLarg">https://lin.ee/q3RLarg </TransitionLink>
            </Text>
            <OnlyImage src="/images/memory/memory-lineqr.png" alt="lineのQRコード画像" />
            <AccentText>謎解き制作協力団体</AccentText>
            <Text>明治大学謎解きサークルSHERLOCK</Text>
            <AccentText>例題</AccentText>
            <OnlyImage src="/images/memory/memory-example.png" alt="謎解きの例題画像" />
            <Text>答えは・・・企画に参加して確かめてみよう!!もっと難しい問題にもチャレンジできるよ！</Text>
            <AccentText className="mt-20">お問い合わせ</AccentText>
            <Text>
                本祭期間外におけるお問い合わせは、下記のお問い合わせ先までご連絡をお願いいたします。<br />
                <Emphasis>本祭期間中は和泉図書館前開発局企画受付までお越しください。</Emphasis>
            </Text>
            <ContactView department="開発局凌閃部門" mail="142ndryousenbumon@gmail.com" showPhone showAddress />
        </CloudPageContainer>
    )
}
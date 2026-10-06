import PageTitle from "@/components/texts/PageTitle"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import Text from "@/components/texts/Text"
import SmallTitle from "@/components/texts/SmallTitle"
import AccentText from "@/components/texts/AccentText"
import Emphasis from "@/components/texts/Emphasis"
import SectionTitle from "@/components/texts/SectionTitle"
import OnlyImage from "@/components/OnlyImage"
import ContactView from "@/components/texts/ContactView"
export default function Page() {
    return (
        <div>
          <CloudPageContainer>
            <PageTitle>NO iMeiji, NO LIFE？</PageTitle>
            <OnlyImage src="/images/noimage/noimage.png" alt="NO iMeiji, NO LIFE？" />
                <SectionTitle>企画内容</SectionTitle>
                <Text>和泉ラーニングスクエアのグループボックスでは明大生から募集した写真を展示しています！<br />
                      また、和泉ラーニングスクエアLS206教室では明大生から募集した写真を使用したオリジナルカードゲームで遊べるブースをご用意しています！</Text>

                <SmallTitle>「Be.Meiji」・「明治コレクション2026」</SmallTitle>
                <Text>和泉ラーニングスクエアのグループボックスの展示では、明大生の<Emphasis>リアルなファッション</Emphasis>から<Emphasis>リアルな一日のスケジュール</Emphasis>まで覗けちゃいます！<br />
                     「大学生ってどんな服着てるの？」「大学生ってどんな1日を過ごしているの？」などなど、そのような疑問がグループボックスに来れば解消できちゃいます！</Text>

                <SmallTitle>紫紺杯　～個を強くするカードバトル～</SmallTitle>
                <Text><Emphasis>普段のカードゲームじゃ物足りない!!</Emphasis>そんなあなたに！<br />
                    和泉ラーニングスクエアのLS206教室では、かるたやトレーディングカードゲームなどの数々の有名なカードゲームで対戦できるカードバトルを開催しています！<br />
                    <Emphasis>カードには、明大生から募集した写真を使用します！</Emphasis>誰もが知っているカードゲームがここでしか遊べないオリジナルのカードゲームになっています。
                </Text>
                <Text moreTopPadding>さらに、優勝者には景品があるかも!?<br />
                    カードゲームで遊びながら、明大生のリアルなキャンパスライフを体感してみませんか？<br />
                    ぜひみなさんのご参加お待ちしております！
                </Text>

                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>
                    10月30日(金).31日(土)11:00～18:00<br />
                    11月1日(日)11:00～17:00
                </Text>
                <SmallTitle>場所</SmallTitle>
                 <AccentText>「Be.Meiji」・「明治コレクション2026」</AccentText>
                 <Text>会場：和泉ラーニングスクエア2階GB2-1・GB2-2</Text>
                 <AccentText>「紫紺杯　～個を強くするカードバトル～」」</AccentText>
                <Text>会場：和泉ラーニングスクエアLS206教室</Text>
                <ContactView department="開発局凌閃部門" mail="142ndryousenbumon@gmail.com" />

            </CloudPageContainer>
        </div>
    )
}
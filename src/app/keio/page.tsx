import PageTitle from "@/components/texts/PageTitle"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import Text from "@/components/texts/Text"
import SmallTitle from "@/components/texts/SmallTitle"
import Emphasis from "@/components/texts/Emphasis"
import SectionTitle from "@/components/texts/SectionTitle"
import AccentText from "@/components/texts/AccentText"
import { List, ListItem } from "@/components/texts/List"
import Link from "next/link"
import TransitionLink from "@/components/buttons/TransitionLink"
import ContactView from "@/components/texts/ContactView"
import Image from "next/image"
export default function Page() {
    return (
        <div>
            <PageTitle>KEIO×第142回明大祭　～いつも駅からだった　明大前編～</PageTitle>
            <CloudPageContainer>
                <SectionTitle className="mb-8">企画概要</SectionTitle>
                <Text>
                    本年度も京王電鉄株式会社と明大祭実行委員会がコラボした企画を実施いたします。<br />
                    今回の企画では、京王沿線を舞台に、人々の日常や出会いを描く短編小説シリーズ「いつも駅からだった」と明大祭がコラボしています。<br />
                    <Emphasis>同シリーズの特別編として岩井圭也先生が執筆した「いつも駅からだった　明大前編」</Emphasis>
                    では、明大祭実行委員を主人公として明大祭の成功に向けて奮闘する物語を描いております。<br />
                </Text>
                <Text moreTopPadding>
                    さらに、本祭期間中には、<Emphasis>小説の内容と明大祭にちなんだクロスワードパズル企画を実施いたします。</Emphasis><br />
                    クロスワードパズルを解きながら小説の世界観や明大祭にまつわる問題を楽しむことができ、見事正解のワードを導けた方は<Emphasis>岩井先生のサイン本や京王電鉄の公式グッズなどが当たる抽選会に参加することができます。</Emphasis><br />
                    過去作を知らない方でも楽しめる企画となっていますので、ぜひ小説を読んで、クロスワードパズルにも挑戦してみてください！<br />
                </Text>

                <List mark="※" className="mt-6">
                    <ListItem>景品の数には限りがあるため抽選会に参加できない場合がございます。予めご了承ください。</ListItem>
                </List>
                <div>
                    <Image
                        src="/images/keio/keio.jpg"
                        alt="KEIO×第142回明大祭　～いつも駅からだった　明大前編～"
                        width={250}
                        height={400}
                        className="mx-auto mt-10"
                    />
                </div>

                <SectionTitle className="mb-8">小説冊子・クロスワードパズル用紙配布期間・場所</SectionTitle>
                <SmallTitle>配布期間</SmallTitle>
                <AccentText>小説冊子</AccentText>
                <Text>2026年10月19日(金)～2027年1月8日(金)</Text>
                <AccentText>クロスワードパズル用紙</AccentText>
                <Text>2026年10月30日(金).31日(土).11月1日(日)</Text>
                <SmallTitle>配布場所</SmallTitle>
                <AccentText>小説冊子・クロスワードパズル用紙</AccentText>
                <List mark="・">
                    <ListItem>京王線・井の頭線明大前駅</ListItem>
                    <ListItem>KEIO×第142回明大祭～いつも駅からだった　明大前編～企画ブース（明治大学和泉キャンパスメディア棟入口付近）</ListItem>
                    <ListItem>松原小学校×明大祭企画ブース（明治大学和泉キャンパスメディア棟M506教室）</ListItem>
                    <ListItem>明大前商店街×明大祭～明大祭で当てよう！豪華景品～企画ブース（明治大学和泉キャンパスメディア棟入口付近）</ListItem>
                </List>
                <AccentText>小説冊子のみ</AccentText>
                <Text>
                    紀伊國屋書店一部店舗<br />
                    明大前商店街振興組合一部加盟店舗
                </Text>
                <TransitionLink href="https://meidaimae.jp/">明大前商店街　～ちょっと帰りに寄れる街～</TransitionLink>
                <List mark="※" className="mt-3">
                    <ListItem>各店舗によって営業時間が異なります。</ListItem>
                    <ListItem>詳しい小説設置店舗につきましては、<TransitionLink href="https://www.keio.co.jp/news/update/news_release/news_release2026/pdf/nr20261005_itsuekimeidaimae.pdf">こちら</TransitionLink>をご確認ください。</ListItem>
                </List>

                {/* <Link href=""</Link> */}

                <SectionTitle className="mb-8">抽選会について</SectionTitle>
                <SmallTitle>期間</SmallTitle>
                <Text>
                    2026年10月30日(金).31日(土).11月1日(日)<br />
                    11:00～18:00
                </Text>
                <SmallTitle>景品受け渡し場所</SmallTitle>
                <Text>明治大学和泉キャンパスメディア棟入口付近</Text>
                <SmallTitle>景品の内容</SmallTitle>
                <Text>
                    A賞　岩井先生サイン入り小説冊子（各日1名様）<br />
                    B賞　京王ギフトカード1,000円分（各日2名様）<br />
                    C賞　ロルバーン　ポケット付メモL（各日5名様）<br />
                    D賞　京王オリジナルステッカー（各日50名様）<br />
                    参加賞　ノベルティーシール（各日1,000名様）<br />
                </Text>
                <SectionTitle>お問い合わせ</SectionTitle>
                <Text>ご不明点等ございましたら、下記のお問い合わせ先までご連絡ください。京王電鉄株式会社や各店舗への直接のお問い合わせはご遠慮ください。</Text>

                <ContactView department="渉外局界隈部門" mail="kaiwai@meidaisai.jp" showPhone showAddress />
            </CloudPageContainer>
        </div>
    )
}
import PageContainer from "@/components/base/PageContainer"
import TransitionLink from "@/components/buttons/TransitionLink"
import ContactView from "@/components/texts/ContactView"
import Emphasis from "@/components/texts/Emphasis"
import ImageText from "@/components/texts/ImageText"
import { List, ListItem } from "@/components/texts/List"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import SmallTitle from "@/components/texts/SmallTitle"
import Text from "@/components/texts/Text"
import Link from "next/link"

const nameList = [
    "古川敬久",
    "名工大小島",
    "おにちゃん",
    "井内織",
    "深野翔",
    "長谷川萌花",
    "けんしん＆ことみ",
    "鹿礒純志",
    "鹿礒洋子",
    "山田智恵子",
    "中尾勝哉",
    "井内正樹",
    "鞠子浩",
    "鞠子拓希",
    "井内礼香",
    "湯淺知子",
    "宇野奈緒",
    "清水日詩",
    "小川智久",
    "椛嶋裕人",
    "佐久間康郎",
    "井内悦子",
    "畠田美恵子",
    "明大祭応援隊家族",
    "上川倉庫株式会社",
    "中野ダンスサークルSIGN",
]

const page = () => {
    return (
        <div>
            <PageTitle>明大祭・クラウドファンディング</PageTitle>
            <PageContainer>
                <SectionTitle >「明大祭・クラウドファンディング」実施します！</SectionTitle>
                <SmallTitle>あなたからの支援で、学生の思い出が輝きます！</SmallTitle>
                <ImageText src="/images/ad/crowdfunding.jpg" alt="明大祭の様子">
                    <Text noTopPadding>日頃より、明大祭への応援・ご協力ありがとうございます。</Text>
                    <Text>この度、10月1日(水)から11月9日(日)の期間で、第141回明大祭のクラウドファンディングが行われます。企画の立案からサイトの作成・実施まで、すべて学生が心を込めて行っております。</Text>
                    <Text>ぜひ一度、当クラウドファンディングのサイトをご覧ください！</Text>
                    <TransitionLink href="https://camp-fire.jp/projects/878082/view?utm_campaign=cp_po_share_c_msg_mypage_projects_show" targetBlank>サイトはこちら</TransitionLink>
                </ImageText>
                <SmallTitle>どんな天候でも明大生が最高に輝ける、熱狂的なステージを創りたい！</SmallTitle>
                <Text>様々なサークルや明大祭実行委員が一丸となり、1ヶ月以上の時間をかけて準備するステージ企画。しかしその努力は虚しくも、第140回明大祭は悪天候に見舞われ、屋外ステージ企画の多くが中止となってしまいました。懸けてきたものの大きさから涙を流す学生もいました。</Text>
                <Text moreTopPadding>そこで第141回明大祭実行委員会では、昨年度のような事態をできる限り防ぐべく、雨天対策の強化や屋内ステージの新設を行うことになりました。また、更なる明大祭の発展を望み、ステージをより華やかにアップグレードしたいという声も上がっています。</Text>
                <Text moreTopPadding>しかし、従来の仕様でもかなり資金を必要とするステージに、更に出費が嵩むこととなり、資金面での不安が出てきました。</Text>
                <Text moreTopPadding>そこで立ち上げられたのが、この「クラウドファンディング企画」です。</Text>
                <Text moreTopPadding>目標金額は<Emphasis>100万円</Emphasis>。</Text>
                <Text moreTopPadding>みなさまからのご支援は、上記の内容のために大切に活用させていただきます。また、支援していただいた方には、ささやかですが<Emphasis>返礼品もご用意しております</Emphasis>。</Text>
                <List mark="※">
                    <ListItem>
                        <span style={{ wordBreak: 'keep-all' }}>より詳しい情報は、<Link href="https://camp-fire.jp/projects/878082/view?utm_campaign=cp_po_share_c_msg_mypage_projects_show" className="text-accent border-b border-accent hover:text-secondary hover:border-secondary" target="_blank">こちら</Link>または「明大祭 クラウドファンディング」で検索してご確認ください。</span>
                    </ListItem>
                </List>
                <SectionTitle>ご支援いただいた方のご芳名一覧</SectionTitle>
                <List mark="※" className="mt-8">
                    <ListItem>10月10日現在の情報</ListItem>
                </List>
                <List mark="・">
                    {nameList.map((name) => (
                        <ListItem key={name}>{name}さん</ListItem>
                    ))}
                </List>
                <SmallTitle>注意点</SmallTitle>
                <List mark="・">
                    <ListItem>同一のお名前で複数回支援されている場合、原則ご芳名の掲載は1度のみとさせていただいております。</ListItem>
                    <ListItem>備考欄にお名前の記載がなかった方は、「芳名掲載を希望されていない」という扱いにさせていただいております。</ListItem>
                    <ListItem>掲載を希望される場合は下記メールアドレスまでご連絡ください。</ListItem>
                </List>
                <Text><Emphasis>みなさま温かいご支援をありがとうございます。実行委員一同、心より感謝いたします。</Emphasis></Text>
                <ContactView department="第141回明大祭実行委員会 財務局 クラウドファンディングチーム" mail="zaimucurafan7@gmail.com" showPhone showAddress />
            </PageContainer>
        </div>
    )
}

export default page
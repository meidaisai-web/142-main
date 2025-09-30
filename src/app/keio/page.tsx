import TransitionLink from '@/components/buttons/TransitionLink';
import Text from '@/components/texts/Text';
import SectionTitle from '@/components/texts/SectionTitle';
import PageContainer from '@/components/base/PageContainer'
import PageTitle from '@/components/texts/PageTitle';
import ContactView from '@/components/texts/ContactView';
import SmallTitle from '@/components/texts/SmallTitle';
import Emphasis from '@/components/texts/Emphasis';
import OnlyImage from '@/components/OnlyImage';
import { List, ListItem } from '@/components/texts/List';
import Button from '@/components/buttons/Button';
import AccentText from '@/components/texts/AccentText';
export default function Page() {
    return (
        <div>
            <PageTitle>KEIO×第141回明大祭デジタルスタンプラリー</PageTitle>
            <PageContainer>
                <SectionTitle>企画概要</SectionTitle>
                <Text moreTopPadding>本年度も京王電鉄株式会社と明大祭実行委員会がコラボした企画を実施いたします。本企画では京王沿線に関するクイズとスタンプラリーを通じて、地域について知ることができます。
                    ご参加いただいた方には、<Emphasis>明大祭限定デザインの京王ライナーカードをプレゼントいたします。</Emphasis>さらに、京王の商業施設で使える商品券が当たる抽選を引くことができます。</Text>
                <Text moreTopPadding>昨年度よりもパワーアップしたコラボスタンプラリーをどうぞお楽しみください。</Text>
                <List className='mt-5' mark="※">
                    <ListItem>各商業施設で営業時間が異なるため、場所によってスタンプ獲得可能時間が異なります。</ListItem>
                    <ListItem>景品の数には限りがあるため抽選を引くことができない場合がございます。予めご了承ください。</ListItem>
                </List>
                <SectionTitle>企画実施日時</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>10月22日(水)～11月3日(月・祝)</Text>
                <SmallTitle>景品受け渡し日時</SmallTitle>
                <Text>11月1日(土).2日(日).3日(月・祝) 11：00～18：00</Text>
                <SectionTitle>企画実施場所</SectionTitle>
                 <SmallTitle>明大祭会場</SmallTitle>
                <AccentText>スタンプポスター設置場所</AccentText>
                <Text>メディア棟 2階 メディア自習室前</Text>
                <SmallTitle>フレンテ笹塚/京王クラウン街笹塚（笹塚駅）※</SmallTitle>
                <AccentText>クイズ出題ポスター設置場所</AccentText>
                <Text>京王クラウン街笹塚 KFC脇</Text>
                <AccentText>商業施設の詳細</AccentText>
                <Text>フレンテ笹塚HP：
                    <TransitionLink targetBlank href="https://ekishop.keio-sc.jp/frente-sasazuka/">https://ekishop.keio-sc.jp/frente-sasazuka/</TransitionLink></Text>
                <Text>京王クラウン街笹塚HP：
                    <TransitionLink targetBlank href="https://ekishop.keio-sc.jp/sasazuka/">https://ekishop.keio-sc.jp/sasazuka/</TransitionLink></Text>
                <SmallTitle>フレンテ明大前（明大前駅）</SmallTitle>
                <AccentText>スタンプポスター設置場所</AccentText>
                <Text>2階 エレベーターホール前</Text>
                <AccentText>商業施設の詳細</AccentText>
                <Text>フレンテ明大前HP：
                    <TransitionLink targetBlank href="https://ekishop.keio-sc.jp/meidaimae/">https://ekishop.keio-sc.jp/meidaimae/</TransitionLink></Text>
                <SmallTitle>フレンテ仙川（仙川駅）</SmallTitle>
                <AccentText>スタンプポスター設置場所</AccentText>
                <Text>2階 エスカレーター付近</Text>
                <AccentText>商業施設の詳細</AccentText>
                <Text>フレンテ仙川HP：
                    <TransitionLink targetBlank href="https://ekishop.keio-sc.jp/sengawa/">https://ekishop.keio-sc.jp/sengawa/</TransitionLink></Text>
                <SmallTitle>京王リトナードつつじが丘（つつじヶ丘駅）</SmallTitle>
                <AccentText>スタンプポスター設置場所</AccentText>
                <Text>3階 エレベーター横</Text>
                <AccentText>商業施設の詳細</AccentText>
                <Text>京王リトナードつつじが丘HP：
                    <TransitionLink targetBlank href="https://ekishop.keio-sc.jp/tsutsujigaoka/">https://ekishop.keio-sc.jp/tsutsujigaoka/</TransitionLink></Text>
                <SmallTitle>トリエ京王調布（調布駅）※</SmallTitle>
                <AccentText>クイズ出題ポスター設置場所</AccentText>
                <Text>A館1階 南側通路 柱</Text>
                <AccentText>商業施設の詳細</AccentText>
                <Text>トリエ京王調布HP：
                    <TransitionLink targetBlank href="https://trie-keiochofu.jp/">https://trie-keiochofu.jp/</TransitionLink></Text>
                <SmallTitle>京王リトナード永福町（永福町駅）</SmallTitle>
                <AccentText>スタンプポスター設置場所</AccentText>
                <Text>1階 北口広場掲示板</Text>
                <AccentText>商業施設の詳細</AccentText>
                <Text>京王リトナード永福町HP：
                    <TransitionLink targetBlank href="https://ekishop.keio-sc.jp/eifukucho/">https://ekishop.keio-sc.jp/eifukucho/</TransitionLink></Text>
                <SmallTitle>キラリナ京王吉祥寺（吉祥寺駅）※</SmallTitle>
                <AccentText>クイズ出題ポスター設置場所</AccentText>
                <Text>3階 Bエレベーターホール</Text>
                <AccentText>商業施設の詳細</AccentText>
                <Text>キラリナ京王吉祥寺HP：
                    <TransitionLink targetBlank href="https://www.kirarinakeiokichijoji.jp/">https://www.kirarinakeiokichijoji.jp/</TransitionLink></Text>
                <Text moreTopPadding><Emphasis>注：※の商業施設ではクイズに正解することでスタンプを獲得できます。また、回答ポスターの設置場所はクイズ出題ポスターに書かれています。</Emphasis></Text>
                <Text><Emphasis>注：各商業施設により営業時間が異なります。詳しくは各HPをご確認ください。</Emphasis></Text>
                <SmallTitle>景品受け渡し場所</SmallTitle>
                <Text>明治大学和泉キャンパスメディア棟入口付近</Text>
                <OnlyImage className="max-w-72" src="/images/map/keio.jpg" alt="Campus Map" />
                <SectionTitle>ご案内</SectionTitle>
                <Text>本企画参加には、専用アプリ「Spot Tour」のダウンロードが必要です。下記リンクを踏んでいただきアプリをダウンロードしてください。</Text>
                <Button href="https://app.spottour.jp/9NnEEeemQs0nKmHH/" targetBlank className="mt-5">
                    スポットツアーはこちら
                </Button>
                <Text moreTopPadding>また、ご不明点などございましたら、下記のお問い合わせ先までご連絡ください。京王電鉄株式会社や各商業施設への直接のお問い合わせはご遠慮ください。</Text>
                <ContactView department="渉外局" mail="shogai@meidaisai.jp" showPhone showAddress />
            </PageContainer>
        </div>
    );
}
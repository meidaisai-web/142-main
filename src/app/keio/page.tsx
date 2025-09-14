import TransitionLink from '@/components/buttons/TransitionLink';
import Text from '@/components/texts/Text';
import SectionTitle from '@/components/texts/SectionTitle';
import PageContainer from '@/components/base/PageContainer'
import PageTitle from '@/components/texts/PageTitle';
import ContactView from '@/components/texts/ContactView';
import AccentText from '@/components/texts/AccentText';
import SmallTitle from '@/components/texts/SmallTitle';
import Emphasis from '@/components/texts/Emphasis';
import { List, ListItem } from '@/components/texts/List';
export default function Page() {
    return (
        <div>
            <PageTitle>KEIO×第141回明大祭デジタルスタンプラリー</PageTitle>
            <PageContainer>
                <SectionTitle>企画概要</SectionTitle>
                <Text moreTopPadding>本年度も京王電鉄株式会社と明大祭実行委員会がコラボした企画を実施いたします。本企画では京王沿線に関するクイズとスタンプラリーを通じて、地域について知ることができます。
                    ご参加いただいた方には、<Emphasis>明大祭限定デザインの京王ライナーカードをプレゼントいたします。</Emphasis>さらに、京王電鉄関連グッズや商業施設で使える商品券が当たる抽選を引くことができます。</Text>
                <Text moreTopPadding>昨年度よりもパワーアップしたコラボスタンプラリーをどうぞお楽しみください。</Text>
                <List className='mt-5' mark="※">
                    <ListItem>各商業施設で営業時間が異なるため、場所によってスタンプ獲得可能時間が異なります。</ListItem>
                    <ListItem>景品の数には限りがあるため抽選を引くことができない場合がございます。予めご了承ください。</ListItem>
                </List>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>10月22日(水)～11月3日(月・祝)</Text>
                <SmallTitle>景品受け渡し日時</SmallTitle>
                <Text>11月1日(土).2日(日).3日(月・祝) 11：00～18：00</Text>
                <SmallTitle>クイズ・スタンプ設置場所</SmallTitle>
                <AccentText>フレンテ笹塚/京王クラウン街笹塚（笹塚駅）※</AccentText>
                <Text>商業施設の詳細はこちら↓↓</Text>
                <TransitionLink targetBlank href="https://ekishop.keio-sc.jp/frente-sasazuka/">https://ekishop.keio-sc.jp/frente-sasazuka/</TransitionLink><br />
                <TransitionLink targetBlank href="https://ekishop.keio-sc.jp/sasazuka/">https://ekishop.keio-sc.jp/sasazuka/</TransitionLink>
                <AccentText>フレンテ明大前 2F エレベーターホール前（明大前駅）</AccentText>
                <Text>商業施設の詳細はこちら↓↓</Text>
                <TransitionLink targetBlank href="https://ekishop.keio-sc.jp/meidaimae/">https://ekishop.keio-sc.jp/meidaimae/</TransitionLink>
                <AccentText>フレンテ仙川（仙川駅）</AccentText>
                <Text>商業施設の詳細はこちら↓↓</Text>
                <TransitionLink targetBlank href="https://ekishop.keio-sc.jp/sengawa/">https://ekishop.keio-sc.jp/sengawa/</TransitionLink>
                <AccentText>リトナードつつじヶ丘 3F エレベーター横（つつじヶ丘駅）</AccentText>
                <Text>商業施設の詳細はこちら↓↓</Text>
                <TransitionLink targetBlank href="https://ekishop.keio-sc.jp/tsutsujigaoka/">"https://ekishop.keio-sc.jp/tsutsujigaoka/</TransitionLink>
                <AccentText>トリエ京王調布（調布駅）※</AccentText>
                <Text>商業施設の詳細はこちら↓↓</Text>
                <TransitionLink targetBlank href="https://trie-keiochofu.jp/">https://trie-keiochofu.jp/</TransitionLink>
                <AccentText>リトナード永福町 1F 北口広場掲示板（永福町駅）</AccentText>
                <Text>商業施設の詳細はこちら↓↓</Text>
                <TransitionLink targetBlank href="https://ekishop.keio-sc.jp/eifukucho/">https://ekishop.keio-sc.jp/eifukucho/</TransitionLink>
                <AccentText>キラリナ吉祥寺（吉祥寺駅）※</AccentText>
                <Text>商業施設の詳細はこちら↓↓</Text>
                <TransitionLink targetBlank href="https://www.kirarinakeiokichijoji.jp/">https://www.kirarinakeiokichijoji.jp/</TransitionLink>
                <AccentText>明大祭会場</AccentText>
                <Text moreTopPadding><Emphasis>注：※の商業施設ではクイズに正解することでスタンプを獲得できます。</Emphasis></Text>
                <SmallTitle>景品受け渡し場所</SmallTitle>
                <Text>明治大学和泉キャンパスメディア棟入口付近</Text>
                <SectionTitle>ご案内</SectionTitle>
                <Text moreTopPadding>本企画参加には、スポットツアーから参加する必要があるため下記リンクを踏んでいただきご参加ください。</Text>
                <Text moreTopPadding>また、ご不明点等ございましたら、下記のお問い合わせ先までご連絡ください。京王電鉄株式会社や各商業施設への直接のお問い合わせはご遠慮ください。</Text>
                <ContactView department="渉外局" mail="shogai@meidaisai.jp" showPhone showAddress />
            </PageContainer>
        </div>
    );
}
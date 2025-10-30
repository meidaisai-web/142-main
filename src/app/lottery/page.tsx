import { List, ListItem, ListText } from '@/components/texts/List'
import PageContainer from '@/components/base/PageContainer'
import SectionTitle from '@/components/texts/SectionTitle'
import Text from '@/components/texts/Text'
import PageTitle from '@/components/texts/PageTitle'
import Emphasis from '@/components/texts/Emphasis'
import SmallTitle from '@/components/texts/SmallTitle'
import AccentText from '@/components/texts/AccentText'
import MapImage from '@/components/MapImage'
import TransitionLink from '@/components/buttons/TransitionLink'

export default function Page() {
    return (
        <div>
            <PageTitle>明大祭大抽選会</PageTitle>
            <PageContainer>
                <SectionTitle>明大祭大抽選会とは</SectionTitle>
                <Text moreTopPadding>
                    明大祭実行委員会が実施している様々な企画に参加することで「明大祭大抽選会」の抽選券がもらえます！
                </Text>
                <Text moreTopPadding>
                    皆さんが欲しかったあんなものやこんなものが当たるかも…？第141回明大祭の思い出と一緒に、豪華景品をゲットして帰りましょう!
                </Text>
                <SmallTitle>実施場所</SmallTitle>
                <Text>メディア棟前明大祭大抽選会受付</Text>
                <List mark="※">
                    <ListItem>2つの抽選企画の会場が隣接しているためご注意ください。</ListItem>
                </List>
                <MapImage src="/images/map/lottery.jpg" alt="大抽選会会場" />
                <SmallTitle>実施日時</SmallTitle>
                <Text>11月1日(土).2日(日) 11：00～18：00</Text>
                <Text>11月3日(月・祝) 11：00～17：20</Text>
                <List mark="※">
                    <ListItem>
                        <Emphasis>
                            景品がなくなり次第、受付終了とさせていただきます。
                        </Emphasis>
                    </ListItem>
                </List>
                <SectionTitle>抽選券がもらえる企画</SectionTitle>
                <Text moreTopPadding>以下の企画に参加すると抽選券がもらえます。</Text>
                <AccentText>Meidaisai Championship</AccentText>
                <List>
                    <ListText>和泉図書館前Meidaisai Championship受付</ListText>
                </List>
                <AccentText>Meijic Moment</AccentText>
                <List>
                    <ListText>センターサークル前</ListText>
                </List>
                <AccentText>当日ニーズ調査</AccentText>
                <List>
                    <ListText>和泉図書館前アンケート回収受付</ListText>
                </List>
                <AccentText>企画効果測定</AccentText>
                <List>
                    <ListText>和泉図書館前アンケート回収受付</ListText>
                    <ListText>以下の実行委員会企画に参加後、アンケートに回答することで抽選券がもらえます。</ListText>
                    <List>
                        <ListText><AccentText>演出局</AccentText></ListText>
                        <List mark='・'>
                            <ListItem><TransitionLink href='/idol'>I♡Fes!</TransitionLink></ListItem>
                            <ListItem><TransitionLink href='/luminous'>Luminous Stage</TransitionLink></ListItem>
                            <ListItem><TransitionLink href='/clash'>Meiji United Clash</TransitionLink></ListItem>
                            <ListItem><TransitionLink href='/champ'>Meidaisai Championship</TransitionLink></ListItem>
                            <ListItem><TransitionLink href='/opening'>Opening</TransitionLink></ListItem>
                            <ListItem><TransitionLink href='/fes'>UNI ROCK FES</TransitionLink></ListItem>
                            <ListItem><TransitionLink href='/mv'>第141回明大祭公式テーマソングMV</TransitionLink></ListItem>
                            <ListItem><TransitionLink href='/midnight'>中夜祭</TransitionLink></ListItem>
                        </List>
                        <ListText><AccentText>開発局</AccentText></ListText>
                        <List mark='・'>
                            <ListItem><TransitionLink href="/sports">EXPOrts2025 in 明治</TransitionLink></ListItem>
                            <ListItem><TransitionLink href="/ribbon">Re：Bond～リボンでつながる思い出～</TransitionLink></ListItem>
                            <ListItem><TransitionLink href="/memory">Stand by Memory</TransitionLink></ListItem>
                            <ListItem><TransitionLink href="/rally">跡巡～あとめぐ～</TransitionLink></ListItem>
                            <ListItem><TransitionLink href="/wish">一灯一想</TransitionLink></ListItem>
                            <ListItem><TransitionLink href="/dice">出た目でGO～サイコロが教える君だけの明大祭攻略ルート～</TransitionLink></ListItem>
                            <ListItem><TransitionLink href="/quest">ポンdeクエスト</TransitionLink></ListItem>
                            <ListItem><TransitionLink href="/tour">明治大解剖ツアー</TransitionLink></ListItem>
                            <ListItem><TransitionLink href="/love">明治に恋する5秒前</TransitionLink></ListItem>
                            <ListItem><TransitionLink href="/say">明大SAY！</TransitionLink></ListItem>
                            <ListItem><TransitionLink href="/illumination">明大祭イルミネーション</TransitionLink></ListItem>
                            <ListText>(明大祭イルミネーションは1日目・2日目は抽選券、3日目はお礼の品をお渡しします。)</ListText>
                        </List>
                        <ListText><AccentText>広報局</AccentText></ListText>
                        <List mark='・'>
                            <ListItem><TransitionLink href="/meijic">Meijic Moment</TransitionLink></ListItem>
                        </List>
                        <ListText><AccentText>財務局</AccentText></ListText>
                        <List mark='・'>
                            <ListItem><TransitionLink href="/bazaar">チャリティーバザー企画</TransitionLink></ListItem>
                        </List>
                        <ListText><AccentText>渉外局</AccentText></ListText>
                        <List mark='・'>
                            <ListItem><TransitionLink href="/keio">KEIO×第141回明大祭デジタルスタンプラリー</TransitionLink></ListItem>
                            <ListItem><TransitionLink href="/booth">企業ブース</TransitionLink></ListItem>
                            <ListItem><TransitionLink href='/alumni'>校友歓迎スペース</TransitionLink></ListItem>
                            <ListItem><TransitionLink href='/matsubara'>松原小学校×明大祭</TransitionLink></ListItem>
                            <ListItem><TransitionLink href='/lottely-shop'>明大前商店街×明大祭〜明大祭で当てるぞ！豪華景品〜</TransitionLink></ListItem>
                        </List>
                        <ListText><AccentText>制作局</AccentText></ListText>
                        <List mark='・'>
                            <ListItem><TransitionLink href="/sticker">明大祭オリジナルステッカー</TransitionLink></ListItem>
                            <ListItem><TransitionLink href="/goods">明大祭公式グッズ</TransitionLink></ListItem>
                        </List>
                    </List>
                </List>
                <SmallTitle>対象の抽選券</SmallTitle>
                <MapImage src="/images/lottery-ticket.jpg" alt="抽選券見本" />
                <List mark='※' className='mt-5'>
                    <ListItem>
                        <Emphasis>抽選券1枚につき1回抽選に参加できます。（お1人様最大5回まで）</Emphasis>
                    </ListItem>
                    <ListItem>
                        <Emphasis>紙の抽選券に引き換えのうえ、ご参加ください。</Emphasis>
                    </ListItem>
                </List>
            </PageContainer>
        </div >
    );
}
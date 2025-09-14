import { List, ListItem, ListText } from '@/components/texts/List'
import PageContainer from '@/components/base/PageContainer'
import SectionTitle from '@/components/texts/SectionTitle'
import Text from '@/components/texts/Text'
import PageTitle from '@/components/texts/PageTitle'
import Emphasis from '@/components/texts/Emphasis'
import SmallTitle from '@/components/texts/SmallTitle'
import AccentText from '@/components/texts/AccentText'
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
                <SmallTitle>実施日時</SmallTitle>
                <div className='my-5'>
                    <div className='flex'>
                        <p className='w-8'>11月</p>
                        <p className='w-24'>1日(土)</p>
                        <p>11：00～18：00</p>
                    </div>
                    <div className='flex'>
                        <div className='w-8' />
                        <p className='w-24'>2日(日)</p>
                        <p>11：00～18：00</p>
                    </div>
                    <div className='flex'>
                        <div className='w-8' />
                        <p className='w-24'>3日(月・祝)</p>
                        <p>11：00～17：20</p>
                    </div>
                </div>
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
                            <ListItem>I♡Fes！</ListItem>
                            <ListItem>Luminous Stage</ListItem>
                            <ListItem>Meiji United Clash</ListItem>
                            <ListItem>Opening</ListItem>
                            <ListItem>UNI ROCKFES</ListItem>
                            <ListItem>第141回明大祭公式テーマソングMV</ListItem>
                            <ListItem>中夜祭</ListItem>
                        </List>
                        <ListText><AccentText>開発局</AccentText></ListText>
                        <List mark='・'>
                            <ListItem>EXPOrts2025 in 明治</ListItem>
                            <ListItem>Re：Bond～リボンでつながる思い出～</ListItem>
                            <ListItem>Stand by Memory</ListItem>
                            <ListItem>跡巡～あとめぐ～</ListItem>
                            <ListItem>一灯一想</ListItem>
                            <ListItem>出た目でGO～サイコロが教える君だけの明大祭攻略ルート～</ListItem>
                            <ListItem>ポンdeクエスト</ListItem>
                            <ListItem>明治大解剖ツアー</ListItem>
                            <ListItem>明治に恋する5秒前</ListItem>
                            <ListItem>明大SAY！</ListItem>
                            <ListItem>明大祭イルミネーション</ListItem>
                            <ListText>(明大祭イルミネーションは1日目・2日目は抽選券、3日目はお礼の品を渡します。)</ListText>
                        </List>
                        <ListText><AccentText>広報局</AccentText></ListText>
                        <List mark='・'>
                            <ListItem>Meijic Moment</ListItem>
                        </List>
                        <ListText><AccentText>財務局</AccentText></ListText>
                        <List mark='・'>
                            <ListItem>チャリティーバザー企画</ListItem>
                        </List>
                        <ListText><AccentText>渉外局</AccentText></ListText>
                        <List mark='・'>
                            <ListItem>KEIO×第141回明大祭デジタルスタンプラリー</ListItem>
                            <ListItem>企業ブース</ListItem>
                            <ListItem>校友歓迎スペース</ListItem>
                            <ListItem>松原小学校×明大祭</ListItem>
                        </List>
                        <ListText><AccentText>制作局</AccentText></ListText>
                        <List mark='・'>
                            <ListItem>明大祭オリジナルステッカー</ListItem>
                            <ListItem>明大祭公式グッズ</ListItem>
                        </List>
                    </List>
                </List>
                {/* <SmallTitle>対象の抽選券</SmallTitle> */}
                <List mark='※'>
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
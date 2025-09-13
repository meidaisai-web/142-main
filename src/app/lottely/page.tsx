import { List, ListItem, ListText } from '@/components/texts/List'
import PageContainer from '@/components/base/PageContainer'
import SectionTitle from '@/components/texts/SectionTitle'
import Text from '@/components/texts/Text'
import PageTitle from '@/components/texts/PageTitle'
import Emphasis from '@/components/texts/Emphasis'
export default function Page() {
    return (
        <div>
            <PageTitle>明大祭大抽選会とは</PageTitle>
            <PageContainer>
                <div className='mt-8'>
                    <Text>明大祭実行委員会が実施している様々な企画に参加することで「明大祭大抽選会」の抽選券がもらえます！<br />皆さんが欲しかったあんなものやこんなものが当たるかも…？
                        第141回明大祭の思い出と一緒に、豪華景品をゲットして帰りましょう!</Text>
                </div>
                <div className='ml-2 ml-4 mt-10'>
                    <SectionTitle>実施場所</SectionTitle>
                </div>
                <List mark="・">
                    <div className='translate-x-4 mb-2 mt-10'>
                        <ListItem>メディア棟前明大祭大抽選会受付</ListItem>
                        <ListItem>※2つの抽選企画の会場が隣接しているためご注意ください。</ListItem>
                    </div>
                </List>

                <div className='mt-4 ml-5'>
                    <SectionTitle>実施日時</SectionTitle>
                </div>
                <div className='mt-14 ml-5'>
                    <List mark="・">
                        <ListItem>11月1日(土) 11：00～18：00</ListItem>
                        <div className='translate-x-13 mb-2'>
                            <ListText >2日(日) 11：00～18：00</ListText>
                        </div>
                        <div className='translate-x-13'>
                            <ListText>3日(月・祝) 11：00～17：20</ListText>
                        </div>
                        <div className='-translate-x-3'>
                            <List mark="・" className="px-3 py-2 rounded">
                                <ListItem>
                                    <Emphasis>
                                        ※景品がなくなり次第、受付終了とさせていただきます。
                                    </Emphasis>
                                </ListItem>
                            </List>
                        </div>
                    </List>
                </div>
                <SectionTitle>抽選券がもらえる企画</SectionTitle>
                <div className='m-10'></div>
                <div className='translate-x-4'>
                    <List mark="・">
                        <ListItem>以下の企画に参加すると抽選券がもらえます。</ListItem>
                        <ListItem>Meidaisai Championship</ListItem>
                        <List>
                            <List mark="・">
                                <ListItem>和泉図書館前Meidaisai Championship受付</ListItem>
                            </List>
                        </List>
                        <div>
                            <List mark="・">
                                <ListItem>Meijic Moment</ListItem>
                            </List>
                        </div>
                        <List>
                            <List mark="・">
                                <ListItem>センターサークル前</ListItem>
                            </List>
                        </List>
                    </List>
                    <List mark="・">
                        <ListItem>当日ニーズ調査</ListItem>
                        <List>
                            <List mark="・">
                                <ListItem>和泉図書館前アンケート回収受付</ListItem>
                            </List>
                        </List>
                        <List>
                            <div className='-translate-x-4'>
                                <List mark="・">
                                    <ListItem>企画効果測定</ListItem>
                                </List>
                            </div>
                            <List>
                                <div>
                                    <List mark="・">
                                        <ListItem>アンケート回収受付</ListItem>
                                    </List>
                                </div>
                                <List>
                                    <List mark="・">
                                        <ListItem>以下の実行委員会企画に参加後、アンケートに回答することで抽選券がもらえます。</ListItem>
                                        <List>
                                            <List mark="・">
                                                <ListItem>アンケート実施企画</ListItem>
                                                <List>
                                                    <List mark="・">
                                                        <ListItem>演出局</ListItem>
                                                    </List>
                                                    <List>
                                                        <List mark="・">
                                                            <ListItem>第141回明大祭公式テーマソングMV</ListItem>
                                                            <ListItem>中夜祭</ListItem>
                                                            <ListItem>I♡Fes！</ListItem>
                                                            <ListItem>Luminous Stage</ListItem>
                                                            <ListItem>Meiji United Clash</ListItem>
                                                            <ListItem>Opening</ListItem>
                                                            <ListItem>UNI ROCKFES</ListItem>
                                                        </List>
                                                    </List>
                                                </List>
                                                <List>
                                                    <List mark="・">
                                                        <ListItem>開発局</ListItem>
                                                    </List>
                                                    <List>
                                                        <List mark="・">
                                                            <ListItem>跡巡～あとめぐ～</ListItem>
                                                            <ListItem>一灯一想</ListItem>
                                                            <ListItem>出た目でGO～サイコロが教える君だけの明大祭攻略ルート～</ListItem>
                                                            <ListItem>ポンdeクエスト</ListItem>
                                                            <ListItem>明治大解剖ツアー</ListItem>
                                                            <ListItem>明治に恋する5秒前</ListItem>
                                                            <ListItem>明大祭イルミネーション</ListItem>
                                                            <ListItem>明大SAY！</ListItem>
                                                            <ListItem>EXPOrts2025 in 明治</ListItem>
                                                            <ListItem>Re：Bond～リボンでつながる思い出～</ListItem>
                                                            <ListItem>Stand by Memory</ListItem>
                                                        </List>
                                                    </List>
                                                </List>
                                                <List>
                                                    <List mark="・">
                                                        <ListItem>広報局</ListItem>
                                                    </List>
                                                    <List>
                                                        <List mark="・">
                                                            <ListItem>Meijic Moment</ListItem>
                                                        </List>
                                                    </List>
                                                </List>
                                                <List>
                                                    <List mark="・">
                                                        <ListItem>財務局</ListItem>
                                                    </List>
                                                    <List>
                                                        <List mark="・">
                                                            <ListItem>チャリティーバザー企画</ListItem>
                                                        </List>
                                                    </List>
                                                </List>
                                                <List>
                                                    <List mark="・">
                                                        <ListItem>渉外局</ListItem>
                                                    </List>
                                                    <List>
                                                        <List mark="・">
                                                            <ListItem>企業ブース</ListItem>
                                                            <ListItem>校友歓迎スペース</ListItem>
                                                            <ListItem>松原小学校×明大祭</ListItem>
                                                            <ListItem>KEIO×第141回明大祭デジタルスタンプラリー</ListItem>
                                                        </List>
                                                    </List>
                                                </List>
                                                <List>
                                                    <List mark="・">
                                                        <ListItem>制作局</ListItem>
                                                    </List>
                                                    <List>
                                                        <List mark="・">
                                                            <ListItem>明大祭オリジナルステッカー</ListItem>
                                                            <ListItem>明大祭公式グッズ</ListItem>
                                                        </List>
                                                    </List>
                                                </List>
                                            </List>
                                        </List>
                                    </List>
                                </List>
                            </List>
                        </List>
                    </List>
                    <List className="-translate-x-4 ">
                        <List mark="・">
                            <ListItem>対象の抽選券</ListItem>
                        </List>
                    </List>
                </div>
                <div className='translate-x-4'>
                    <Emphasis>※抽選券1枚につき1回抽選に参加できます。（お1人様最大5回まで）<br />※紙の抽選券に引き換えのうえ、ご参加ください。</Emphasis>
                </div>
            </PageContainer>
        </div>
    );
}
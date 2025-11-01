import PageContainer from "@/components/base/PageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";
import { List, ListItem } from '@/components/texts/List'
import ContactView from "@/components/texts/ContactView";
import ImageText from "@/components/texts/ImageText";
import Emphasis from "@/components/texts/Emphasis";
import MapImage from "@/components/MapImage";
import LogoImage from "@/components/LogoImage";


export default function ChampPage() {
    return (
        <div>
            <PageTitle>Meidaisai Championship</PageTitle>
            <PageContainer>
                <LogoImage src="/images/ensyutsu/meichamp-logo.jpg" alt="Meidaisai Championship ロゴ" className="mt-10" />
                <SectionTitle>明大祭の頂点、今ここに！</SectionTitle>
                <ImageText className="mt-8" src="/images/ensyutsu/championship.jpg" alt="Championship Image"><Text>みなさまの投票によって明大祭No.1企画を決定します。</Text>
                    <Text>「屋外ステージ部門」「教室部門」「模擬店部門」の3つにわけ、各部門の1位を決めます。そして、最も多くの票を獲得した団体がChampionとなります。<Emphasis>結果は11月3日(月・祝)に行われるEndingにて発表します。</Emphasis></Text>
                    <Text>また投票してくださった方は、明大祭大抽選会に参加することができます。抽選企画の詳細は明大祭大抽選会のページをご覧ください。</Text></ImageText>
                <SmallTitle>投票日時</SmallTitle>
                <Text>11月1日(土) 10：00 〜 11月3日(月・祝) 17：00</Text>
                <SmallTitle>投票方法</SmallTitle>
                <List numbered>
                    <ListItem>各企画実施場所に設置されているQRコードを読み込むまたは、第141回明大祭公式サイトにアクセスします。</ListItem>
                    <ListItem>公式サイト内の「企画検索欄」から投票したい企画を検索します。</ListItem>
                    <ListItem>企画の詳細ページに飛んでいただき、「投票する」をタップすると投票完了です！</ListItem>
                </List>
                <SmallTitle>投票の注意点</SmallTitle>
                <List mark="・">
                    <ListItem>投票できるのは、各企画1日1回までです。</ListItem>
                    <ListItem>よいと思った企画すべてに投票することができます。</ListItem>
                    <ListItem>ブラウザがプライベートモード、シークレットモードなどの状態では投票できません。必ず通常モードでアクセスしてください。</ListItem>
                </List>
                <SmallTitle>抽選会への参加方法</SmallTitle>
                <Text>投票してくださった方は、明大祭大抽選会に参加ができます！</Text>
                <List numbered>
                    <ListItem>和泉図書館前アンケート回収受付までお越しください。</ListItem>
                    <ListItem>公式サイト内にある明大祭大抽選会抽選券引き換え画面を提示してください。</ListItem>
                    <ListItem>提示していただいたのち、「抽選券と交換する」をタップしてください。抽選券に交換いたします。<br/>
                        引き換えボタンは、<Emphasis>和泉図書館前アンケート回収受付で引き換えるタイミングでタップしてください。</Emphasis>事前にタップしてしまうと抽選券と引き換えることができなくなってしまいます。</ListItem>
                    <ListItem>メディア棟前企画受付にある「明大祭大抽選会」まで行くと、抽選に参加できます！</ListItem>
                </List>
                <Text>抽選券の引き換え、企画に関するお問い合わせは、和泉図書館前アンケート回収受付までお越しください。</Text>
                <MapImage src="/images/map/exchange.jpg" alt="和泉図書館前アンケート回収受付" />
                <ContactView department="演出局" mail="141st-ensyutu@meidaisai.jp"></ContactView>
            </PageContainer>
        </div>
    );
}
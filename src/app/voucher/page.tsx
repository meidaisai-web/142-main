import PageContainer from "@/components/base/PageContainer";
import MapImage from "@/components/MapImage";
import Emphasis from "@/components/texts/Emphasis";
import { List, ListItem } from "@/components/texts/List";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import Text from "@/components/texts/Text";
import Voucher from "@/components/Voucher";

export default function Page() {
    return(
        <div>
            <PageTitle>明大祭大抽選会 抽選券引き換え画面</PageTitle>
            <PageContainer>
                <Voucher />
                <Text>Meidaisai Championshipで投票していただいた方に、明大祭大抽選会で使える抽選券をお渡しします。</Text>
                <SectionTitle>抽選会への参加方法</SectionTitle>
                <List numbered className="mt-8">
                    <ListItem>和泉図書館前アンケート回収受付までお越しください。</ListItem>
                    <ListItem>公式サイト内にある明大祭大抽選会抽選券引き換え画面を提示してください。</ListItem>
                    <ListItem>提示していただいたのち、｢抽選券と交換する｣をタップしてください。抽選券に交換いたします。<br/>
                        引き換えボタンは、<Emphasis>和泉図書館前アンケート回収受付で引き換える時にタップしてください</Emphasis>。事前にタップしてしまうと抽選券と引き換えることができなくなります。</ListItem>
                    <ListItem>メディア棟前企画受付にある「明大祭大抽選会」まで行くと、抽選に参加できます！</ListItem>
                </List>
                <Text>抽選券の引き換え、企画に関するお問い合わせは、和泉図書館前アンケート回収受付までお越しください。</Text>
                <MapImage src="/images/map/exchange.jpg" alt="和泉図書館前アンケート回収受付" />
                <List mark="※" className="mt-8">
                    <ListItem>抽選券の引き換えは1日につき、お一人様<Emphasis>1回</Emphasis>までです。</ListItem>
                    <ListItem>なお、抽選券に交換した後も投票することができます。</ListItem>
                </List>
            </PageContainer>
        </div>
    )
}
import CloudPageContainer from '@/components/base/CloudPageContainer';
import PageTitle from '@/components/texts/PageTitle';
import SectionTitle from '@/components/texts/SectionTitle';
import Text from '@/components/texts/Text';
import Emphasis from '@/components/texts/Emphasis';
import SmallTitle from '@/components/texts/SmallTitle';
import AccentText from "@/components/texts/AccentText"
import { text } from 'stream/consumers';

export default function about() {
    return (
        <CloudPageContainer>
            <PageTitle>付属校企画</PageTitle>
            <SectionTitle>企画概要</SectionTitle>
            <Text>
                <Emphasis>明大世田谷が、明大祭に初登場！</Emphasis>
                フレッシュなエネルギーで、明大祭をさらに盛り上げます！
                <Emphasis>2026年4月、新たに明治大学の付属校となった明治大学付属明大世田谷中学校・高等学校。</Emphasis>
                今年は明大祭に初めて参加し、高校生ならではの活気あふれるパフォーマンスをお届けします！

                仲間と共に創り上げるステージには、日々の練習の成果と、一人ひとりの想いが詰まっています。
                そのひたむきな姿とフレッシュな魅力に、みなさんも元気をもらえるはず！

                高校生と大学生が、世代を越えて一緒に盛り上げる明大祭。
                新たな仲間が彩る初めてのステージを、ぜひ会場でお楽しみください！ </Text>

            <SmallTitle>実施場所</SmallTitle>
            <Text>エントランスエリア</Text>

            <AccentText>日時</AccentText>
            <Text>11月1日(日) 12:20～13:20</Text>

        </CloudPageContainer>
    );
}

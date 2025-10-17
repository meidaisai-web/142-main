import PageContainer from "@/components/base/PageContainer";
import Sectiontitle from "@/components/texts/SectionTitle";
import PageTitle from "@/components/texts/PageTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import ContactView from "@/components/texts/ContactView";
import Text from '@/components/texts/Text'
import Emphasis from '@/components/texts/Emphasis'
import { List, ListItem } from "@/components/texts/List";
import { ScheduleTable } from "@/components/ScheduleTable";
import MapImage from "@/components/MapImage";
import LogoImage from "@/components/LogoImage";


const days = ['11月2日(土)', '11月3日(日)', '11月4日(月・祝)'];

const times = [
    {
        hours: ['10時', '11時', '12時', '13時', '14時', '15時', '16時'],
        minutes: [
            ['30分', '45分'],                           // 10時の分
            ['00分', '15分', '30分', '45分'],           // 11時の分
            ['00分', '15分', '30分', '45分'],   // 12時の分
            ['00分', '15分', '30分', '45分'],           // 13時の分
            ['00分', '20分', '40分'],           // 14時の分
            ['00分', '20分', '40分'],           // 15時の分
            ['00分']                    // 16時の分
        ]
    },
    {
        hours: ['10時', '11時', '12時', '13時', '14時', '15時', '16時'],
        minutes: [
            ['30分', '45分'],                           // 10時の分
            ['00分', '15分', '30分', '45分'],           // 11時の分
            ['00分', '15分', '30分', '45分'],   // 12時の分
            ['00分', '15分', '30分', '45分'],           // 13時の分
            ['00分', '20分', '40分'],           // 14時の分
            ['00分', '20分', '40分'],           // 15時の分
            ['00分']                    // 16時の分
        ]
    },
    {
        hours: ['10時', '11時', '12時', '13時', '14時', '15時', '16時'],
        minutes: [
            ['30分', '45分'],                           // 10時の分
            ['00分', '15分', '30分', '45分'],           // 11時の分
            ['00分', '15分', '30分', '45分'],   // 12時の分
            ['00分', '15分', '30分', '45分'],           // 13時の分
            ['00分', '20分', '40分'],           // 14時の分
            ['00分', '20分', '40分'],           // 15時の分
            ['00分']                    // 16時の分
        ]
    }
];

export default function Tour() {
    return (
        <div>
            <PageTitle>明治大解剖ツアー</PageTitle>
            <PageContainer>
                <Sectiontitle>企画概要</Sectiontitle>
                <Text moreTopPadding>
                    <Emphasis>
                        リピーター続出の大人気企画！明大生の”リアル”を体験しよう。
                    </Emphasis>
                    ツアーガイドは明大生！
                </Text>
                <Text>
                    和泉キャンパスを巡りながら、校舎の秘密から学生の本音まで丸ごと紹介！参加者にはうれしい特典もご用意！
                </Text>
                <Text>
                    新たな”明治”を発見する旅にさあ行こう！
                </Text>
                <Sectiontitle>企画実施日時・場所</Sectiontitle>
                <SmallTitle>日時</SmallTitle>
                <Text>
                    11月1日(土).2日(日).3日(月・祝)
                </Text>
                <Text>
                    10：00～16：00
                </Text>
                <ScheduleTable days={days} times={times} />
                <List mark="※">
                    <ListItem>予約は<Emphasis>先着順</Emphasis>となっております。受付開始時刻は<Emphasis>10：00</Emphasis>です。</ListItem>
                </List>
                <List mark="※">
                    <ListItem> 1便あたり15名が定員です。参加者が少ない場合は該当の便を欠航し、次便にご参加いただくようご案内することがございます。あらかじめご了承ください。</ListItem>
                </List>
                <List mark="※">
                    <ListItem>各日<Emphasis>13：00</Emphasis>、<Emphasis>15：00</Emphasis>の便は明治大学連合父母会の方を優先とさせていただきます。</ListItem>
                </List>
                <SmallTitle>参加方法</SmallTitle>
                <Text>
                    和泉図書館前企画受付にて予約制で承っております。
                </Text>
                <MapImage src="/images/ad/tourmap.jpg" alt="ツアー受付場所" />
                <ContactView department="開発局" mail="kaihatsu@meidaisai.jp" showPhone showAddress />
            </PageContainer>
        </div>
    );
}

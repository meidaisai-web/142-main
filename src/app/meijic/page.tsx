import CloudPageContainer from '@/components/base/CloudPageContainer';
import Text from '@/components/texts/Text';
import { List, ListItem } from '@/components/texts/List';
import SmallTitle from '@/components/texts/SmallTitle';
import PageTitle from '@/components/texts/PageTitle';
import OnlyImage from '@/components/OnlyImage';
import SectionTitle from '@/components/texts/SectionTitle';
import Emphasis from '@/components/texts/Emphasis';

export default function Page() {
    return (
        <CloudPageContainer>
            <PageTitle>Meijic Station</PageTitle>
            <OnlyImage src="/images/meijicstation/meijic01.jpg" alt="Meijic Station 1"/> 
            <OnlyImage src="/images/meijicstation/meijic02.jpg" alt="Meijic Station 2"/>
            <SectionTitle>音楽に溺れる。</SectionTitle>
            <Text className="!text-center">
                <Emphasis bold>
                    ここは音と光が交差するプラットフォーム。<br/>
                    忘れられない青春を響かせて。<br/>
                </Emphasis>
                普段の教室が多彩な音楽と演出360度ステージに！<br/>
                観客席で出演者と共にこの熱狂を体感せよ。    
            </Text>
            <SectionTitle>企画概要</SectionTitle>
            <Text>
                明大祭に、新たな音楽のステージが登場！<br/>
                さまざまな音楽の魅力を一度に楽しめる、ここでしか見られないパフォーマンスをお届けします。<br/>
                会場全体が音楽でつながる特別な時間をぜひご一緒に！
            </Text>
            <SectionTitle>実施日時・場所</SectionTitle>
            <SmallTitle>日時</SmallTitle>
            <Text>10月31日(土)14：00～15：00</Text>
            <SmallTitle>場所</SmallTitle>
            <Text>屋内ステージ（和泉ラーニングスクエアLS101教室）</Text>
            <SectionTitle>出演団体</SectionTitle>
            <List mark="・">
                <ListItem>Woody club</ListItem>
                <ListItem>chocolat lumière</ListItem>
                <ListItem>小川雄一郎</ListItem>
                <ListItem>Allround Piano Society</ListItem>
                <ListItem>中野ダンスサークル SIGN</ListItem>
            </List>
            <Text>※コンテンツの都合上、入場規制をさせていただく時間があります。</Text>
            <SectionTitle>Meijic Station紹介動画</SectionTitle>
        </CloudPageContainer>
    )
}

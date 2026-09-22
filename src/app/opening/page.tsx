import CloudPageContainer from '@/components/base/CloudPageContainer';
import Text from '@/components/texts/Text';
import { List, ListItem } from '@/components/texts/List';
import SectionTitle from '@/components/texts/SectionTitle';
import SmallTitle from '@/components/texts/SmallTitle';
import PageTitle from '@/components/texts/PageTitle';
import OnlyImage from '@/components/OnlyImage';
import Emphasis from '@/components/texts/Emphasis';
import ContactView from '@/components/texts/ContactView';

export default function Page() {
    return (
        <CloudPageContainer>
            <PageTitle>Opening</PageTitle>
            <OnlyImage src="/images/opening/opening02.jpg" alt="Opening" />
            <SectionTitle>解き放て、青春のファンファーレを。</SectionTitle>
            <Text className="!text-center">
                <Emphasis bold>
                    その一音が、青春を動かす。<br />
                    その鼓動が、想いをつなぐ。<br />
                    さあ、最高の三日間へ。
                </Emphasis>
            </Text>
            <SectionTitle>企画概要</SectionTitle>
            <Text className="!text-center text-xl">
                幕開けの合図が響く。<br/>
                積み重ねた想いが、今、輝き始める。<br/>
                最高の舞台の目撃者となれ。
            </Text>    
            <SectionTitle>実施日時・場所</SectionTitle>
            <SmallTitle>日時</SmallTitle>
            <Text>10月30日(金)11：00〜11：50</Text>
            <SmallTitle>場所</SmallTitle>
            <Text>メインステージ</Text>
            <SectionTitle>コンテンツ</SectionTitle>
            <List numbered>
	            <ListItem>オープニング動画</ListItem>
                <ListItem>Opening Act</ListItem>
                <ListItem>団体パフォーマンス</ListItem>
                <ListItem>委員長挨拶</ListItem>
                <ListItem>Finale</ListItem>
            </List>
            <SectionTitle>出演団体</SectionTitle>
            <List mark="・">
	            <ListItem>津軽三味線 響</ListItem>
                <ListItem>Copia</ListItem>
                <ListItem>アカペラサークル Sound arts</ListItem>
                <ListItem>K-POPカバーダンスサークルMercie</ListItem>
                <ListItem>中野ダンスサークルSIGN</ListItem>
            </List>
            {/* <SectionTitle>Opening紹介動画</SectionTitle> */}
            <ContactView department="演出局 結祭部門" mail="142nd-yusai@meidaisai.jp" />
        </CloudPageContainer>
    )
}

import CloudPageContainer from '@/components/base/CloudPageContainer';
import PageTitle from '@/components/texts/PageTitle';
import SectionTitle from '@/components/texts/SectionTitle';
import Text from '@/components/texts/Text';
import Emphasis from '@/components/texts/Emphasis';
import SmallTitle from '@/components/texts/SmallTitle';
import { text } from 'stream/consumers';
import OnlyImage from '@/components/OnlyImage';
import ContactView from '@/components/texts/ContactView';

export default function about() {
    return (
        <CloudPageContainer>
            <PageTitle>JET GACHA STREAM〜カプセルがひらく、次の目的地〜</PageTitle>
            <OnlyImage src="/images/jet-gacha.jpg" alt='JET GACHA' className="w-20" />
            <SectionTitle>企画概要</SectionTitle>
            <Text>
                「どの企画に行こう？」と迷っているそこのあなた！
                <br />
                <Emphasis>ガチャを回して、行き先を決めてみませんか？</Emphasis>

                <br /> カプセルから出てくるのは、明大祭がもっと楽しくなるための目的地。どの企画に行くかは、回してからのお楽しみ！

                <br /> さらに、<Emphasis>参加した方には素敵な特典もご用意しています！</Emphasis>
                ガチャを回して、行き先を決めて、明大祭をもっと楽しもう！みなさんのご参加をお待ちしています！
            </Text>

            <SmallTitle>実施場所</SmallTitle>
            <Text>第一校舎前図書館側（校門から入ってまっすぐ！）</Text>

            <SmallTitle>実施日時</SmallTitle>
            <Text>10月30日(金).31日(土)11:00〜17:00
                <br />11月1日(日)11:00〜16:30</Text>

            <ContactView department="開発局黎幸部門" mail="142ndreikobumon@gmail.com" showPhone showAddress />


        </CloudPageContainer>
    );
}

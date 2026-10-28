import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import StarPageContainer from "@/components/base/StarPageContainer/StarPageContainer"
import TransitionLink from "@/components/buttons/TransitionLink"
import ImageText from "@/components/texts/ImageText"
import Movie from "@/components/Movie"
import SmallTitle from "@/components/texts/SmallTitle"
export default function Page() {
    return (
        <>
            <PageTitle>第142回明大祭公式テーマソングミュージックビデオ</PageTitle>
            <StarPageContainer>
                <SectionTitle className="mt-5 mb-3">鳴らせ鼓動よ<br className="sm:hidden" />響けオーバーフィット</SectionTitle>
                <Movie src="https://www.youtube.com/embed/iZ01gzuuUBg?si=PKlYmwGXSEpdrfOl" youtube />
                <Text moreTopPadding>候補曲の中から投票によって選ばれた、第142回明大祭公式テーマソング「オーバーフィット」のミュージックビデオが完成しました！</Text>
                <Text>今年度の明大祭コンセプトである『鳴らせ鼓動、響かせ青春』をそのまま体現した、明大祭を盛り上げるエネルギー溢れる一曲となっております。また、ミュージックビデオは主演、バンド演奏、撮影・編集まで、すべてを明大生が手がけました。</Text>
                <Text moreTopPadding>ぜひミュージックビデオをご覧いただき、明大生ならではのパワーを感じていただきたいです！</Text>
                <Text>毎年、演出局Opening企画では、公式テーマソングを生演奏で披露しています！10月30日(金)11:00から行われる生演奏に、ぜひ足をお運びください！</Text>
                <Text>（演出局Opening企画に関する詳細は<TransitionLink href="https://www.meidaisai.jp/opening">こちら</TransitionLink>）</Text>
                <SectionTitle className="mt-15 mb-5">コメント</SectionTitle>
                <SmallTitle>【演奏団体】Sparky</SmallTitle>
                <ImageText src="/images/mv/group.jpg" alt="group photo Image">この度、第142回明大祭公式テーマソングを担当させていただきました、Sparkyです。誰もが何かに夢中になり、駆け抜けていく明大祭の熱気や青春のきらめきを一曲に詰め込みました。テーマソング『オーバーフィット』が、来場された皆さんや明大生一人ひとりの特別な瞬間を鮮やかに彩り、記憶に残る思い出となれば幸いです。</ImageText>
                <SmallTitle>【制作団体】学生映像制作チームNext Film監督　三木李温</SmallTitle>
                <ImageText src="/images/mv/director.jpg" alt="mv director Image">見つかった！何が？ 永遠が 海と溶け合う太陽が</ImageText>
                <SmallTitle>【主演】村瀬佳蓮</SmallTitle>
                <ImageText src="/images/mv/maincast1.jpg" alt="main cast1 Image">第142回明大祭公式テーマソングMVに出演させて頂きました、村瀬佳蓮です。
                    このMVに関わって下さった全ての皆様、本当にありがとうございました！MV制作という一つの目標に向かって皆で走ることができたのは私にとって青春そのものでした。最後にはなりますが、この『オーバーフィット』という曲が1人でも多くの方に届くことを願っています。</ImageText>
                <SmallTitle>【主演】鈴木瑛士</SmallTitle>
                <ImageText src="/images/mv/maincast2.jpg" alt="main cast2 Image">主演の、鈴木瑛士です。
                    今回は、愛する母校の撮影ということもあり、いつもの数倍は緊張しましたが、皆さんのおかげで楽しく自然にできました。撮影では海にも伺い、燦々と輝く太陽の中で、楽しく撮影を行えました。帰ってからそのことを振り返りながら、アイスティーを飲みつつ、屋上で焼きました。
                    ぜひご覧ください、それでは、どうぞ。</ImageText>
            </StarPageContainer>
        </>
    )
}
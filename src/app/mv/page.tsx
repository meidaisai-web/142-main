import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import PageContainer from "@/components/base/PageContainer"
import TransitionLink from "@/components/buttons/TransitionLink"
import ImageText from "@/components/texts/ImageText"
import Movie from "@/components/movie"
import SmallTitle from "@/components/texts/SmallTitle"
export default function Page() {
    return (
        <>
            <PageTitle>第141回明大祭公式テーマソングミュージックビデオ</PageTitle>
            <PageContainer>
                <SectionTitle className="mt-5 mb-3">文明開化のメロディーが、明大祭をさらに盛り上げる！</SectionTitle>
                <Movie href="https://www.youtube.com/embed/11D-ItNDt-Q?si=ZNNPwvGwMVKvqmzL"/>
                <Text moreTopPadding>候補曲の中から投票によって選ばれた、第141回明大祭公式テーマソング「文明開化の音が鳴る」のミュージックビデオが完成しました！</Text>
                <Text>今年度の明大祭コンセプトである『熱狂の、その先へ。』をそのまま体現した、心に熱狂を呼び覚ます一曲となっております。また、ミュージックビデオは主演、バンド演奏、撮影・編集まで、すべてを明大生が手がけました。</Text>
                <Text moreTopPadding>毎年、演出局Opening企画では、公式テーマソングを生演奏で披露しています！ぜひミュージックビデオをご覧いただき、明大生ならではのパワーを感じていただきたいです！</Text>
                <Text>そして当日11月1日(土) 10：00から行われるOpening企画での生演奏にも、ぜひ足をお運びください！</Text>
                <Text>（演出局Opening企画に関する詳細は<TransitionLink href="https://www.meidaisai.jp/opening">こちら</TransitionLink>）</Text>
                <SectionTitle className="mt-15 mb-5">コメント</SectionTitle>
                <SmallTitle>【演奏団体】栗沢踊ル者</SmallTitle>
                <ImageText src="/images/mv/group.jpg" alt="group photo Image" className="mb-12">この度、第141回明大祭公式テーマソングを担当させていただきました。長い歴史を誇る明大祭。その中で紡がれてきた、一人ひとりの物語に思いを馳せながら、ちょっと切ない気持ちや胸が躍るような瞬間を込めて、この楽曲を制作しました。</ImageText>
                <SmallTitle>【制作団体】学生映像制作チームNext Film監督　小池耀人</SmallTitle>
                <ImageText src="/images/mv/director.jpg" alt="mv director Image" className="mb-12">監督を務めました学生映像制作チームNext Filmの小池耀人です。素敵な曲のMVを任せていただけて光栄です。楽しい現場にできたのはみなさんのおかげです。よろしければ観てください。</ImageText>
                <SmallTitle>【主演】宮澤侑希</SmallTitle>
                <ImageText src="/images/mv/maincast1.jpg" alt="main cast1 Image" className="mb-12">この度、第141回明大祭公式テーマソングMVに出演させていただき、大変嬉しく思います。私にとってはすべてが初めての挑戦であり、新しい世界との出会いでした。先が見えない時代だからこそ、今を楽しみ、何事も挑戦してみたい。そんな思いから出演を決意しました。この作品が、挑戦するすべての人の背中を押せるようなものになれば幸いです。</ImageText>
                <SmallTitle>【主演】山元理央</SmallTitle>
                <ImageText src="/images/mv/maincast2.jpg" alt="main cast2 Image">第141回明大祭公式テーマソングMVに出演でき、大変光栄です。多くの方々とともに作品を作りあげる中で、貴重な経験をさせていただきました。前向きな気持ちを届けられる映像になっていますので、ぜひ多くの方にご覧いただきたいです。</ImageText>
            </PageContainer>
        </>
    )
}

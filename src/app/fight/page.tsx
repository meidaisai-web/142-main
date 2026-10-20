import CloudPageContainer from "@/components/base/CloudPageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import Text from "@/components/texts/Text"; 
import Emphasis from "@/components/texts/Emphasis";
import SmallTitele from "@/components/texts/SmallTitle";
import SmallTitle from "@/components/texts/SmallTitle";

export default function Page() {
    return (
        <CloudPageContainer>
            <PageTitle>Fight on the Stage</PageTitle>
            <SectionTitle>覚悟が交錯する夜―さあ、”推し”の勇姿を見届けろ。</SectionTitle>
            <Text>
                <Emphasis>
                    交錯する熱量、ぶつかる誇り。<br />
                    3つのテーマが織りなす真剣勝負。<br />
                    情熱の先に輝くのは誰か― <br/>
                </Emphasis>
                伝説の幕が上がる <br />
                挑み続けた者達の血と涙の結晶<br />
                全ては、この舞台のために。
            </Text>
            <SectionTitle>企画概要</SectionTitle>
            <Text >今年の対決企画は、6団体が3つの部門に分かれ、頂点を懸けて激突。</Text>
            <Text moreTopPadding>「盛り上げ」を極める Amazing dream</Text>
            <Text moreTopPadding>「かわいい」を極める Sweet dream</Text>
            <Text moreTopPadding>「かっこいい」を極める Cool dream</Text>
            <Text moreTopPadding>
                それぞれの部門で、勝者はたった1団体。<br />
                魅せ方も、熱量も、すべてが違う3つの激闘。<br />
                最後に栄冠を手にするのは、果たしてどの団体か。<br />

                <Emphasis>
                    この勝負の行方を決めるのは――あなたの一票だ。
                </Emphasis>
            </Text>
            <SectionTitle>企画実施日時・場所</SectionTitle>
            <SmallTitele>日時</SmallTitele>
            <Text>10月30日(金) 17:10～18:00</Text>
            <SmallTitle>場所 </SmallTitle>
            <Text>メインステージ</Text>
            <SectionTitle>出演団体</SectionTitle>
            <Text>Amazing dream：アカペラサークルamour、ミュージカル研究会</Text>
            <Text>Sweet dream：アカペラサークルSound Arts、Copia</Text>
            <Text>Star dream：K-POPカバーダンスサークルMercie、中野ダンスサークルSIGN</Text>
        </CloudPageContainer>
    )
}
 
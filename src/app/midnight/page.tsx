import PageContainer from "@/components/base/PageContainer";
import LogoImage from "@/components/LogoImage";
import OnlyImage from "@/components/OnlyImage";
import Photoframe from "@/components/Photoframe";
import Emphasis from "@/components/texts/Emphasis";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <PageTitle>中夜祭</PageTitle>
            <PageContainer>
                <LogoImage src="/images/ensyutsu/midnight-logo.png" alt="中夜祭のロゴ" className="mt-10" />
                <OnlyImage src="/images/ensyutsu/midnight/midnight.jpg" alt="中夜祭" className="my-5" />
                <SectionTitle>この一夜に、『かける』。</SectionTitle>
                <Text moreTopPadding><Emphasis>駆ける鼓動、懸ける想い。</Emphasis></Text>
                <Text><Emphasis>今宵、熱狂の祭典が始まる。</Emphasis></Text>
                <Text><Emphasis>これは、あなたのボルテージ。</Emphasis></Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>11月2日(日) 17：10〜18：00</Text>
                <SmallTitle>場所</SmallTitle>
                <Text>メインステージ</Text>
                <SectionTitle>コンテンツ</SectionTitle>
                <SmallTitle>オープニングアクト</SmallTitle>
                <p className="text-end mt-4 text-lg font-medium">Allround Piano Society</p>
                <Photoframe leftImagePath="/images/ensyutsu/midnight/amour.jpg" rightImagePath="/images/ensyutsu/midnight/aps.jpg" />
                <p className="text-lg font-medium">アカペラサークル amour</p>
                <p className="text-end mt-8 text-lg font-medium">DJ Shibu</p>
                <Photoframe leftImagePath="/images/ensyutsu/midnight/sign.jpg" rightImagePath="/images/ensyutsu/midnight/djshibu.jpg" />
                <p className="text-lg font-medium">中野ダンスサークル SIGN</p>
                <p className="text-end mt-8 text-lg font-medium">男子チアリーディングチーム ANCHORS</p>
                <Photoframe leftImagePath="/images/ensyutsu/midnight/copia.jpg" rightImagePath="/images/ensyutsu/midnight/anchors.jpg" />
                <p className="text-lg font-medium">Copia</p>
                <SmallTitle>フラッシュナイトパフォーマンス</SmallTitle>
                <Image src="/images/ensyutsu/midnight/dietz.jpg" alt="Juggling Circle Dietz" width={600} height={400} className="mx-auto mt-4 aspect-2/1 object-cover object-top" />
                <p className="text-lg font-medium">ジャグリングサークル Dietz</p>
                <SmallTitle>ラブリンクパフォーマンス</SmallTitle>
                <p className="text-end text-lg font-medium mt-4">チアダンスチーム Blooms</p>
                <Photoframe leftImagePath="/images/ensyutsu/midnight/jaguars.jpg" rightImagePath="/images/ensyutsu/midnight/blooms.jpg" />
                <p className="text-lg font-medium">体育同好会連合会チアリーディングチーム・JAGUARS</p>
                <SmallTitle>フィナーレ</SmallTitle>
                <Image src="/images/ensyutsu/midnight/finale.jpg" alt="中夜祭フィナーレ" width={600} height={400} className="mx-auto mt-4 aspect-2/1 object-cover" />
                <p className="text-lg font-medium">全出演団体</p>
            </PageContainer>
        </div>
    )
}

interface CaptionProps {
    leftText: string;
    rightText: string;
}
function Caption({ leftText, rightText }: CaptionProps) {
    return (
        <div className="flex justify-between">
            <p className="leading-4 pt-1">{leftText}</p>
            <p>×</p>
            <p className="text-end leading-4 pt-1">{rightText}</p>
        </div>
    )
}
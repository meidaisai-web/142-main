import CloudPageContainer from "@/components/base/CloudPageContainer"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import SmallTitle from "@/components/texts/SmallTitle"
import Text from "@/components/texts/Text"
import Emphasis from "@/components/texts/Emphasis"
import CloudPhoto from "@/components/CloudPhoto"

export default function Page() {
    return (
        <div>
          <CloudPageContainer>

            <PageTitle>中夜祭</PageTitle>

            <SectionTitle className="mb-8">万彩よ、交われ。</SectionTitle>
            <Text center><Emphasis bold>覗けばまだ知らない世界。</Emphasis></Text>
            <Text center><Emphasis bold>光織りなす月の下で</Emphasis></Text>
            <Text center><Emphasis bold>無限の煌めきを、灯せ。</Emphasis></Text>

            <SectionTitle className="mb-8">企画概要</SectionTitle>
            <Text><Emphasis bold>想いが重なり、今宵ひとつに。</Emphasis></Text>
            <Text><Emphasis bold>会場をも巻き込む熱狂を。</Emphasis></Text>
            <Text><Emphasis bold>この一瞬を見逃すな。</Emphasis></Text>

            <SmallTitle>場所</SmallTitle>
            <Text>メインステージ</Text>

            <SmallTitle>日時</SmallTitle>
            <Text>10月31日(土) 17:10 〜 18:00</Text>

            <SectionTitle className="mb-8">コンテンツ</SectionTitle>

            <div className="lg:-mx-45">
                <SmallTitle>オープニングアウト</SmallTitle>
                <div className="-mx-8 sm:-mx-16 md:-mx-21 lg:mx-0">
                    <CloudPhoto src="/images/midnight/中夜祭サイト掲載用写真2_書道.JPG" name="書道研究部" className="max-w-[300px] lg:max-w-[700px] mx-auto mt-6 lg:mt-10" />
                </div>
                <SmallTitle>コラボパフォーマンス</SmallTitle>
                <div className="flex items-center justify-center gap-1 mt-12 lg:mt-30 -mx-8 sm:-mx-16 md:-mx-21 lg:mx-0">
                    <CloudPhoto src="/images/midnight/中夜祭サイト掲載用写真3_APS.JPG" name="Allround Piano |Society" />
                    <span className="shrink-0 mb-6 lg:mb-8 text-2xl lg:text-7xl font-bold text-primary-text">×</span>
                    <CloudPhoto src="/images/midnight/中夜祭サイト掲載用写真4_ミュー研.JPG" name="ミュージカル研究会" delay={1} />
                </div>
                <div className="flex items-center justify-center gap-1 mt-12 lg:mt-30 -mx-8 sm:-mx-16 md:-mx-21 lg:mx-0">
                    <CloudPhoto src="/images/midnight/中夜祭サイト掲載用写真5_Dietz.JPG" name="ジャグリングサークル|Dietz" />
                    <span className="shrink-0 mb-6 lg:mb-8 text-2xl lg:text-7xl font-bold text-primary-text">×</span>
                    <CloudPhoto src="/images/midnight/中夜祭サイト掲載用写真6_Pelusa.jpeg" name="Pelusa" delay={1} />
                </div>
                <div className="flex items-center justify-center gap-1 mt-12 lg:mt-30 -mx-8 sm:-mx-16 md:-mx-21 lg:mx-0">
                    <CloudPhoto src="/images/midnight/中夜祭サイト掲載用写真7_Copia.JPG" name="Copia" />
                    <span className="shrink-0 mb-6 lg:mb-8 text-2xl lg:text-7xl font-bold text-primary-text">×</span>
                    <CloudPhoto src="/images/midnight/中夜祭サイト掲載用写真8_ANCHORS.JPG" name="男子チアリーディングチーム|ANCHORS" delay={1} />
                </div>

                <SmallTitle>ときめきパフォーマンス</SmallTitle>
                <div className="flex items-center justify-center gap-1 mt-6 lg:mt-10 -mx-8 sm:-mx-16 md:-mx-21 lg:mx-0">
                    <CloudPhoto src="/images/midnight/中夜祭サイト掲載用写真9_ショコラ.jpeg" name="chocolat lumière" />
                    <span className="shrink-0 mb-6 lg:mb-8 text-2xl lg:text-7xl font-bold text-primary-text">×</span>
                    <CloudPhoto src="/images/midnight/中夜祭サイト掲載用写真10_Mercie.jpeg" name="K‑POPカバーダンスサークル|Mercie" delay={1} />
                    {/* K‑POP のハイフンは改行防止のため「改行しないハイフン」(U+2011) を使用。普通の "-" に戻すとスマホで「K-」の後ろで改行される */}
                </div>

                <SmallTitle>ハロウィンパフォーマンス</SmallTitle>
                <div className="-mx-8 sm:-mx-16 md:-mx-21 lg:mx-0">
                    <CloudPhoto src="/images/midnight/中夜祭サイト掲載用写真11_SIGN.jpeg" name="中野ダンスサークル|SIGN" className="max-w-[300px] lg:max-w-[700px] mx-auto mt-6 lg:mt-10" />
                </div>

                <SmallTitle>フィナーレ</SmallTitle>
                <div className="-mx-8 sm:-mx-16 md:-mx-21 lg:mx-0">
                    <CloudPhoto src="/images/midnight/中夜祭サイト掲載用写真12_Finale.JPG" name="全出演団体" className="max-w-[300px] lg:max-w-[700px] mx-auto mt-6 lg:mt-10" />
                </div>
            </div>

            <SectionTitle className="mb-8">中夜祭紹介動画</SectionTitle>
            {/* ここの動画はまだ未完成 */}
            </CloudPageContainer>
        </div>
    )
}
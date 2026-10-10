import CloudPageContainer from "@/components/base/CloudPageContainer"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import SmallTitle from "@/components/texts/SmallTitle"
import Text from "@/components/texts/Text"
import Emphasis from "@/components/texts/Emphasis"
import CloudPhoto from "@/components/CloudPhoto"
import ImageLogo from "@/components/texts/ImageLogo"
import ContactView from "@/components/texts/ContactView"

export default function Page() {
    return (
        <div>
          <CloudPageContainer>

            <PageTitle>中夜祭</PageTitle>
             <ImageLogo
                src="/images/midnight/midnighttop.jpg"
                logoSrc="/images/midnight/midnightlogo.svg"
                alt="企画の写真"
                logoAlt="企画ロゴ" />

            <SectionTitle>万彩よ、交われ。</SectionTitle>
                <Text center><Emphasis bold>
                    覗けばまだ知らない世界。<br />
                    光織りなす月の下で<br />
                    無限の煌めきを、灯せ。</Emphasis></Text>

                <SectionTitle>企画概要</SectionTitle>
                <Text>想いが重なり、今宵ひとつに。<br />
                    会場をも巻き込む熱狂を。<br />
                    この一瞬を見逃すな。</Text>

                <SmallTitle>場所</SmallTitle>
                <Text>メインステージ</Text>

                <SmallTitle>日時</SmallTitle>
                <Text>10月31日(土) 17:10 〜 18:00</Text>

                <SectionTitle>コンテンツ</SectionTitle>

                <div className="lg:-mx-45">
                    <SmallTitle>オープニングアウト</SmallTitle>
                    <div className="-mx-8 sm:-mx-16 md:-mx-21 lg:mx-0">
                        <CloudPhoto src="/images/midnight/shodou.jpg" name="書道研究部" className="max-w-[300px] lg:max-w-[700px] mx-auto mt-6 lg:mt-10" />
                    </div>
                    <SmallTitle>コラボパフォーマンス</SmallTitle>
                    <div className="flex items-center justify-center gap-1 mt-12 lg:mt-30 -mx-8 sm:-mx-16 md:-mx-21 lg:mx-0">
                        <CloudPhoto src="/images/midnight/aps.jpg" name="Allround Piano |Society" />
                    <span className="shrink-0 mb-6 lg:mb-8 text-2xl lg:text-7xl font-bold text-primary-text">×</span>
                    <CloudPhoto src="/images/midnight/myuken.jpg" name="ミュージカル研究会" delay={1} />
                </div>
                <div className="flex items-center justify-center gap-1 mt-12 lg:mt-30 -mx-8 sm:-mx-16 md:-mx-21 lg:mx-0">
                    <CloudPhoto src="/images/midnight/dietz.jpg" name="ジャグリングサークル|Dietz" />
                    <span className="shrink-0 mb-6 lg:mb-8 text-2xl lg:text-7xl font-bold text-primary-text">×</span>
                    <CloudPhoto src="/images/midnight/pelusa.jpg" name="Pelusa" delay={1} />
                </div>
                <div className="flex items-center justify-center gap-1 mt-12 lg:mt-30 -mx-8 sm:-mx-16 md:-mx-21 lg:mx-0">
                    <CloudPhoto src="/images/midnight/copia.jpg" name="Copia" />
                    <span className="shrink-0 mb-6 lg:mb-8 text-2xl lg:text-7xl font-bold text-primary-text">×</span>
                    <CloudPhoto src="/images/midnight/anchors.jpg" name="男子チアリーディングチーム|ANCHORS" delay={1} />
                </div>

                <SmallTitle>ときめきパフォーマンス</SmallTitle>
                <div className="flex items-center justify-center gap-1 mt-6 lg:mt-10 -mx-8 sm:-mx-16 md:-mx-21 lg:mx-0">
                    <CloudPhoto src="/images/midnight/shokora.jpg" name="chocolat lumière" />
                    <span className="shrink-0 mb-6 lg:mb-8 text-2xl lg:text-7xl font-bold text-primary-text">×</span>
                    <CloudPhoto src="/images/midnight/mercie.jpeg" name="K‑POPカバーダンスサークル|Mercie" delay={1} />
                    {/* K‑POP のハイフンは改行防止のため「改行しないハイフン」(U+2011) を使用。普通の "-" に戻すとスマホで「K-」の後ろで改行される */}
                </div>

                <SmallTitle>ハロウィンパフォーマンス</SmallTitle>
                <div className="-mx-8 sm:-mx-16 md:-mx-21 lg:mx-0">
                    <CloudPhoto src="/images/midnight/sign.jpg" name="中野ダンスサークル|SIGN" className="max-w-[300px] lg:max-w-[700px] mx-auto mt-6 lg:mt-10" />
                </div>

                <SmallTitle>フィナーレ</SmallTitle>
                <div className="-mx-8 sm:-mx-16 md:-mx-21 lg:mx-0">
                    <CloudPhoto src="/images/midnight/finale.jpg" name="全出演団体" className="max-w-[300px] lg:max-w-[700px] mx-auto mt-6 lg:mt-10" />
                </div>
            </div>
            {/* <SectionTitle>中夜祭紹介動画</SectionTitle> */}
            <ContactView department="演出局永燦部門" mail="142nd-eisan@meidaisai.jp" showPhone showAddress />
            </CloudPageContainer>
        </div>
    )
}
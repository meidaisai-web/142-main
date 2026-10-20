import PageTitle from "@/components/texts/PageTitle"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import Image from "next/image"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import SmallTitle from "@/components/texts/SmallTitle"
import TransitionLink from "@/components/buttons/TransitionLink"
import Link from "next/link"
import Emphasis from "@/components/texts/Emphasis"
export default function Page() {
    return (
        <div>
            <PageTitle>ICU祭×明大祭</PageTitle>
            <CloudPageContainer>
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
                    <Image src="/images/icu/icu-logo.png" alt="ICUロゴ" className="w-[80%] md:w-[40%] max-w-[400px] h-auto" width={400} height={300} />
                    <Image src="/images/icu/kakeru.png" alt="×" width={30} height={30} />
                    <Image src="/images/icu/xcard.svg" alt="明大祭xカード" className="w-[80%] md:w-[40%] max-w-[400px] h-auto" width={400} height={300} />
                </div>
                <SectionTitle>国際基督教大学の学園祭”ICU祭”と明大祭がコラボ！</SectionTitle>
                <Text>普段、明治大学と関わりがない方にも明大祭のことを知ってもらい、より多くの方に明大祭を楽しんでもらうことを目指してICU祭と明大祭のコラボ動画を撮影しました！公式Instagram・TikTokにて、コラボ動画が投稿されていますのでぜひご覧ください！いいね・フォローお待ちしています！</Text>
                <Text>ICU祭をきっかけに明大祭を知った方も、明大祭をきっかけにICU祭を知った方も、ぜひそれぞれの学園祭に足を運んでみてください！</Text>
                <SectionTitle>コラボ動画はこちら！</SectionTitle>
                <div className="flex items-center justify-center gap-8">
                    <Link href="https://www.instagram.com/reel/Dc0xhcFJs9H/?stkn=MWV0Nzh0eG9pZnk4Mg%3D%3D" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/icu/meidaisai-video.png" alt="コラボ動画" width={300} height={200} />
                    </Link>
                    <Link href="https://www.instagram.com/reel/Dc02EfNST18/?stkn=cTVxZG8yNndweHVr" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/icu/icu-video.png" alt="コラボ動画2" width={300} height={200} />
                    </Link>
                </div>
                <SmallTitle>各種SNSもぜひご覧ください！</SmallTitle>
                <Text>ICU祭の公式TikTokアカウントは<TransitionLink targetBlank href="https://www.tiktok.com/@isolated_crazy_utopia?is_from_webapp=1&sender_device=pc">こちら</TransitionLink></Text>
                <Text>Instagramアカウントは<TransitionLink targetBlank href="https://www.instagram.com/icu_fes?stkn=eHMzNm5uN3g0OXVv">こちら</TransitionLink></Text>
                <Text moreTopPadding>明大祭の公式TikTokアカウントは<TransitionLink targetBlank href="https://www.tiktok.com/@meidaisai_?is_from_webapp=1&sender_device=pc">こちら</TransitionLink></Text>
                <Text>Instagramアカウントは<TransitionLink targetBlank href="https://www.instagram.com/meidaisai/?utm_source=ig_web_button_share_sheet">こちら</TransitionLink></Text>
                <SmallTitle>ICU祭の開催日</SmallTitle>
                <Text>10月11日(日).12日(月・祝)</Text>
                <SmallTitle>ICU祭の開催場所</SmallTitle>
                <Text>国際基督教大学</Text>
                <SmallTitle>ICU祭のホームページはこちら</SmallTitle>
                <Link href="https://icu-fes.com/" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/icu/icu-hp.png" className="mx-auto" alt="ICU祭HP" width={400} height={300} />
                </Link>
                <Text className="!text-center">画像をタップ</Text>
            </CloudPageContainer>
        </div>
    )
}
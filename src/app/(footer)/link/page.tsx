import PageTitle from "@/components/texts/PageTitle"
import PageContainer from "@/components/base/PageContainer"
import TransitionLink from "@/components/buttons/TransitionLink"
import { List, ListItem, ListText } from "@/components/texts/List"
export default function Page() {
    return (
        <>
            <PageTitle>リンク</PageTitle>
            <PageContainer>
                <List className="mt-10" mark="・">
                    <ListItem>
                        <TransitionLink href="https://x.com/meidaisai" targetBlank>明大祭公式X</TransitionLink>
                    </ListItem>
                    <ListText>
                        明大祭や明大祭実行委員会に関する重要な情報をはじめとした、様々なことを発信していきます！ぜひフォローして明大祭の情報をチェックしてみてください！
                    </ListText>
                    <ListItem>
                        <TransitionLink href="https://www.instagram.com/meidaisai" targetBlank>明大祭公式Instagram</TransitionLink>
                    </ListItem>
                    <ListText>
                        明大祭当日の様子や参加団体・企画の情報などを、写真や動画を中心としてお届けしていきます。またストーリーズやハイライトでも、明大祭や明大祭実行委員会に関する最新情報をお知らせしていきますのでぜひご覧ください！
                    </ListText>
                    <ListItem>
                        <TransitionLink href="https://www.tiktok.com/@meidaisai_" targetBlank>明大祭公式TikTok</TransitionLink>
                    </ListItem>
                    <ListText>
                        明大祭や明大祭実行委員会に関する情報をわかりやすく、面白い動画で発信していきます！ぜひフォローして動画をお待ちください！
                    </ListText>
                    <ListItem>
                        <TransitionLink href="https://www.youtube.com/@meidaisainetpr/videos" targetBlank>明大祭公式YouTubeチャンネル</TransitionLink>
                    </ListItem>
                    <ListText>
                        明大祭公式YouTubeチャンネルでは過去の明大祭の企画を見ることができるほか、今までのテーマソングを聴くこともできます。過去の企画やテーマソングを見てみたいという方はぜひご覧ください！
                    </ListText>
                    <ListItem>
                        リンクについて
                    </ListItem>
                    <ListText>
                        当サイトはリンクフリーです。なお相互リンクをご希望される方は、お手数ですがご一報いただけますと幸いです。その際は<TransitionLink href="mailto:142nd-kouhou@meidaisai.jp" className="inline whitespace-nowrap">142nd-kouhou@meidaisai.jp</TransitionLink>までご連絡ください。また当サイトに掲載されているすべての文章・画像など、素材の著作権は第142回明大祭実行委員会に帰属します。素材の無断使用やファイルへの直リンクはご遠慮ください。
                    </ListText>
                </List>
            </PageContainer>
        </>
    )
}
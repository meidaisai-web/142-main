import CloudPageContainer from "@/components/base/CloudPageContainer";
import TransitionLink from "@/components/buttons/TransitionLink";
import { List, ListItem } from "@/components/texts/List";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import Text from "@/components/texts/Text";
import StartButton from "./StartButton";

export default function Page() {
    return (
        <CloudPageContainer>
            <PageTitle>M-TYPE</PageTitle>
            <SectionTitle>今日のあなた、何タイプ？</SectionTitle>
            <Text>「たくさん企画があって迷う…」「次どこ行こうかな？」そんなあなたへ！</Text>
            <Text>わずか8問の質問に答えるだけで、今日のあなたを全4タイプから診断！</Text>
            <Text>所要時間は約3分。下のボタンからスマホで簡単にできるよ！</Text>
            <Text><TransitionLink href="https://lin.ee/tXpCneg" targetBlank>M-TYPE公式LINE</TransitionLink>や配布しているM-TYPE冊子からも参加OK！</Text>
            <Text>診断後は、あなたのタイプに合わせたおすすめの企画をご紹介します。</Text>
            <Text>迷わず、もっと楽しく、明大祭を満喫してみませんか？</Text>
            <List mark="※" className="mt-5">
                <ListItem>紹介する企画の中には、有料のものや開催時間が限られているものが一部ございます。各企画の詳細をあらかじめご確認のうえご参加ください。</ListItem>
                <ListItem>本診断による割引などの特典はございません。あくまで企画探しのヒントとしてご利用ください。</ListItem>
            </List>
            <StartButton />
        </CloudPageContainer>
    )
}
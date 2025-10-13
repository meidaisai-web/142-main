import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import PageContainer from "@/components/base/PageContainer"
import SmallTitle from "@/components/texts/SmallTitle"
import Emphasis from "@/components/texts/Emphasis"
import ContactView from "@/components/texts/ContactView"
import OnlyImage from "@/components/OnlyImage"
import { List, ListItem } from '@/components/texts/List'
export default function Page() {
    return (
        <>
            <PageTitle>UNI ROCK FES</PageTitle>
            <PageContainer>
                <OnlyImage 
                    src="/images/fes/feslogo.jpg" 
                    alt='UNI ROCK FESのロゴ'
                    className="mx-auto w-full max-w-xs mt-10 mb-5"
                    />
                <SectionTitle>響け、叫べ、ひとつになれ。</SectionTitle>
                <OnlyImage 
                    src="/images/fes/fes.jpg" 
                    alt='UNI ROCK FESの画像'
                    className="mx-auto w-full max-w-lg mt-7 mb-5"
                />
                <Text moreTopPadding>
                    <Emphasis>鳴らせ、鼓動繋げ、一体感。この熱響を、共に創る。</Emphasis>
                </Text>
                <SectionTitle>企画概要</SectionTitle>
                <Text moreTopPadding>
                    誰もが楽しめる音楽フェスが今開幕！
                </Text>
                <Text>
                    心躍る音楽があなたを呼んでいる。ここでしか味わえない熱狂を見逃すな！
                </Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>11月2日(日) 13：40～14：25</Text>
                <SmallTitle>場所</SmallTitle>
                <Text>メインステージ</Text>
                <SectionTitle>出演団体</SectionTitle>
                <div className="mt-10">
                <List mark="・">
                    <ListItem>バイブスのアゲ者</ListItem>
                    <ListItem>チアダンスチームBlooms</ListItem>
                    <ListItem>Abbey Road</ListItem>
                    <ListItem>DJ Shibu</ListItem>
                    <ListItem>DJ aqi</ListItem>
                </List>
                </div>
                <ContactView department="演出局煌彩部門" mail="kosai-141@meidaisai.jp"/>
            </PageContainer>
        </>
    )
}
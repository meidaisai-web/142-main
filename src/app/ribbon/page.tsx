import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import PageContainer from "@/components/base/PageContainer"
import Emphasis from "@/components/texts/Emphasis"
import SmallTitle from "@/components/texts/SmallTitle"
import MapImage from '@/components/MapImage'
export default function Page() {
    return (
        <>
            <PageTitle>Re:Bond～リボンでつながる思い出～</PageTitle>
            <PageContainer>
                <SectionTitle>企画概要</SectionTitle>
                    <SmallTitle>明大祭での思い出を、自分だけの形に残そう！</SmallTitle>
                <Text>
                    第141回明大祭公式テーマカラーである焔紅、蒼炎、軌光の3色のリボンを選んで、スタンプなどでデコレーションすると
                    <Emphasis>自分だけのオリジナルキーホルダーが作れる！</Emphasis>
                </Text>
                <Text>
                    作ったキーホルダーは持ち帰ることができます！みんなでバッグや鍵につけて、明大祭を思い出とともに楽しもう!!
                </Text>
                <Text>
                    キーホルダー制作時に残ったリボンを使って、みんなで1つの絵を完成させよう！どんな絵ができるかは参加してからのお楽しみ!!
                </Text>
                <Text>
                    お子様連れでも楽しめるので、是非ぜひ第一校舎前にお越しください！
                </Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>
                    11月1日(土).2日(日)10:00～18:00 
                </Text>    
                <Text>      
                    11月3日(月・祝)10:00～17:00
                </Text>
                <SmallTitle>場所</SmallTitle>
                <Text>第一校舎前正面左側</Text>
                <MapImage src='/images/map/ribbon.jpg' alt='Campus Map'/>
            </PageContainer>
        </>
    )
}
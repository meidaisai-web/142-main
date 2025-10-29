import PageContainer from "@/components/base/PageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";

export default function Page() {
    return(
        <div>
            <PageTitle>一灯一想</PageTitle>
            <PageContainer>
                <SectionTitle>企画概要</SectionTitle>
                <Text moreTopPadding>こんにちは！私たちは小さなお子様でも気軽に参加できる体験企画を実施しています。</Text>
                <Text>みなさんにはご自身でランタンの製作をしていただきます。完成したランタンを教室に飾り付け、幻想的な空間を創りあげましょう！</Text>
                <Text>誰でも楽しめる、わくわくするような仕掛けも盛りだくさん！あなたの理想のランタンで明治大学を明るく彩りませんか？参加を希望される方は教室までお越しください！</Text>
                <Text>ご参加、お待ちしています！</Text>
                <SectionTitle>企画実施日時</SectionTitle>
                <SmallTitle>日時</SmallTitle>
                <Text>11月1日(土).2日(日) 10：00~18：00</Text>
                <Text>11月3日(月・祝) 10：00〜17：30</Text>
                <SmallTitle>場所</SmallTitle>
                <Text>第一校舎403・405教室</Text>
                <Text>第一校舎405教室で受付とランタン製作、第一校舎403教室ではそのランタンを飾り付けていただきます！</Text>
            </PageContainer>
        </div>
    )
}
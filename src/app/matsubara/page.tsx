import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import AccentText from "@/components/texts/AccentText"
import PageContainer from "@/components/base/PageContainer"
import ContactView from "@/components/texts/ContactView"
import Emphasis from "@/components/texts/Emphasis"
export default function Page() {
    return (
        <>
            <PageTitle>松原小学校×明大祭</PageTitle>
            <PageContainer>
                <SectionTitle>企画概要</SectionTitle>
                <div className="w-full h-10"></div>
                <Text className="mt-5">
                    今年で3年目となる本企画では、例年行っている世田谷区立松原小学校の児童のみなさまの自由研究作品の展示に加え、<Emphasis>新たな取り組みとして</Emphasis>児童のみなさまと我々明大祭実行委員会が共同制作した作品を展示いたします。地域との繋がりを大切にし、小学生の作品の魅力を来場してくださったみなさまにお届けします。
                </Text>
                <Text className="mt-5">
                    世代を超えて結ばれたクリエイティブなコラボレーションの成果を是非ご覧ください。
                </Text>
                <SectionTitle>企画実施日時・場所</SectionTitle>
                <AccentText className="pt-4">日時</AccentText>
                <Text>11月1日(土).2日(日).3日(月・祝) 10:00～18:00</Text>
                <AccentText>場所</AccentText>
                <Text>メディア棟M509教室</Text>
                <ContactView department="渉外局界隈部門" mail="shogai@meidaisai.jp" showPhone showAddress />
            </PageContainer>
        </>
    )
}
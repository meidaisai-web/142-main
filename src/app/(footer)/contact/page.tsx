import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import Text from "@/components/texts/Text";
import PageContainer from "@/components/base/PageContainer";
import ContactView from "@/components/texts/ContactView";

export default function Page() {
    return (
        <div>
            <PageTitle>お問い合わせ</PageTitle>
            <PageContainer>
                <Text className="!text-center mt-5">明大祭や明大祭実行委員会に関するご質問がございましたら、下記のお問い合わせ先までご連絡ください。</Text>
                <SectionTitle>所在地</SectionTitle>
                <ContactView department="" showPhone showAddress noPadding />
                            <div className='w-full h-5' />
                <SectionTitle>第142回明大祭への参加に関するお問い合わせ</SectionTitle>
                <ContactView department="参加団体局" mail="142nd-sankadantai@meidaisai.jp" noPadding />
            <div className='w-full h-5' />
                <SectionTitle>企業のみなさまのお問い合わせ</SectionTitle>
            <div className='w-full h-5' />
            <ContactView department='渉外局企業部門' mail='kigyo@meidaisai.jp' />
            <SectionTitle>校友のみなさまのお問い合わせ</SectionTitle>
            <div className='w-full h-5' />
            <ContactView department='渉外局校友部門' mail='kouyu@meidaisai.jp' />
            <SectionTitle>界隈地域のみなさまのお問い合わせ</SectionTitle>
            <div className='w-full h-5' />
            <ContactView department='渉外局界隈部門' mail='kaiwai@meidaisai.jp' />
                <div className='w-full h-5' />
                <SectionTitle>メディアのみなさまのお問い合わせ</SectionTitle>
                <ContactView department="広報局" mail="142nd-kouhou@meidaisai.jp" noPadding />
                <div className='w-full h-5' />
                <SectionTitle>その他第142回明大祭に関するお問い合わせ</SectionTitle>
                <ContactView department="" mail="information@meidaisai.jp" noPadding />
            </PageContainer>
        </div>
    );
}
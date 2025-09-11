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
                <Text className="!text-center mt-5">明大祭や明大祭実行委員会に関するご質問がございましたら､下記のお問い合わせ先までご連絡ください｡</Text>
                <SectionTitle>所在地</SectionTitle>
                <ContactView department="" showPhone showAddress/>
                <SectionTitle>第141回明大祭への参加に関するお問い合わせ</SectionTitle>
                <ContactView department="参加団体局" mail="141st-sankadantai@meidaisai.jp" />
                <SectionTitle>企業・校友・界隈地域のみなさまのお問い合わせ</SectionTitle>
                <ContactView department="渉外局" mail="shogai@meidaisai.jp" />
                <SectionTitle>メディアのみなさまのお問い合わせ</SectionTitle>
                <ContactView department="広報局" mail="141st-kouhou@meidaisai.jp" />
                <SectionTitle>その他第141回明大祭に関するお問い合わせ</SectionTitle>
                <ContactView department="" mail="141st4yaku@meidaisai.jp" />
            </PageContainer>
        </div>
    );
}
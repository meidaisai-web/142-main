import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import Text from "@/components/texts/Text";
import CloudPageContainer from "@/components/base/CloudPageContainer";
import ContactView from "@/components/texts/ContactView";

export default function Page() {
    return (
        <div>
            <PageTitle>お問い合わせ</PageTitle>
            <CloudPageContainer>
                <Text className="!text-center mt-10 mb-30">明大祭や明大祭実行委員会に関するご質問がございましたら、下記のお問い合わせ先までご連絡ください。</Text>
                <SectionTitle>所在地</SectionTitle>
                <ContactView department="" showPhone showAddress noPadding />
                <SectionTitle className="mt-15">第142回明大祭への参加に関するお問い合わせ</SectionTitle>
                <ContactView department="参加団体局" mail="142nd-sankadantai@meidaisai.jp" noPadding />

                <SectionTitle className="mt-15">企業のみなさまのお問い合わせ</SectionTitle>
                <ContactView department="渉外局" mail="kigyo@meidaisai.jp" noPadding />
                <SectionTitle>校友・父母のみなさまのお問い合わせ</SectionTitle>
                <ContactView department="渉外局" mail="kouyu@meidaisai.jp" noPadding />
                <SectionTitle>界隈地域のみなさまのお問い合わせ</SectionTitle>
                <ContactView department="渉外局" mail="kaiwai@meidaisai.jp" noPadding />

                <SectionTitle className="mt-15">メディアのみなさまのお問い合わせ</SectionTitle>
                <ContactView department="広報局" mail="142nd-kouhou@meidaisai.jp" noPadding />

                <SectionTitle className="mt-15">その他第142回明大祭に関するお問い合わせ</SectionTitle>
                <ContactView department="" mail="information@meidaisai.jp" noPadding />
            </CloudPageContainer>
        </div>
    );
}
import CloudPageContainer from "@/components/base/CloudPageContainer"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import ContactView from "@/components/texts/ContactView"
import { List, ListItem } from "@/components/texts/List";

export default function Home() {
    return (
        <div>
            <CloudPageContainer>
            <PageTitle>メディアのみなさまへ</PageTitle>
            <SectionTitle>ご挨拶</SectionTitle>
            <Text>この度は第142回明大祭にご関心をお寄せいただき、誠にありがとうございます。第142回明大祭に関して取材をお考えの方は、下記のお問い合わせ先までご連絡ください。</Text>
            <Text>また、明大祭や明大祭実行委員会の写真や映像などを使用される場合も同様に、下記のお問い合わせ先までご連絡いただきますようお願い申し上げます。</Text>
            <List mark="※"><ListItem>明大祭当日の取材につきましては、別途事前申請が必要となりますので、その旨をお伝えください。</ListItem></List>
            <ContactView department="広報局" mail="142nd-kouhou@meidasai.jp" showAddress showPhone />
            </CloudPageContainer>
        </div>
    );
}
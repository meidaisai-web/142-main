import PageTitle from "@/components/texts/PageTitle";
import PageContainer from "@/components/base/PageContainer";
import SectionTitle from "@/components/texts/SectionTitle";
import Text from "@/components/texts/Text";
import ContactView from "@/components/texts/ContactView";
import { List, ListItem } from "@/components/texts/List";

export default function MediaPage() {
  return (
    <div>
      <PageTitle>メディアのみなさまへ</PageTitle>
      <PageContainer>
        <SectionTitle>ご挨拶</SectionTitle>
        <Text moreTopPadding>この度は第141回明大祭にご関心をお寄せいただき、誠にありがとうございます。第141回明大祭に関して取材をお考えの方は、下記のお問い合わせ先までご連絡ください。</Text>
        <Text moreTopPadding>また、明大祭や明大祭実行委員会の写真や映像などを使用される場合も同様に、下記のお問い合わせ先までご連絡いただきますようお願い申し上げます。</Text>
        <List mark="※" className="mt-5">
          <ListItem>明大祭当日の取材につきましては、別途事前申請が必要となりますので、その旨をお伝えください。</ListItem>
        </List>
        <ContactView department="広報局" mail="141st-kouhou@meidaisai.jp" showAddress/>
      </PageContainer>
    </div>
  );
}
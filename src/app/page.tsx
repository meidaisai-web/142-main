import CloudPageContainer from "@/components/base/CloudPageContainer";
import AccentText from "@/components/texts/AccentTitle";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";

export default function Home() {
  return (
    <CloudPageContainer>
      <PageTitle>ページタイトル</PageTitle>
      <SectionTitle>セクションタイトル</SectionTitle>
      <SmallTitle>小さいタイトル</SmallTitle>
      <AccentText>アクセントテキスト</AccentText>
      <Text>これは本文を表示するための、テキストコンポーネントです。ここには長い文章が表示されるため、長い文章が表示されても正確かつ読みやすいように表示される必要があります。この無駄な文章は、それが本当に満たされているかを確かめるための文章です。</Text>
    </CloudPageContainer>
  );
}
import PageContainer from "@/components/base/PageContainer";
import ContactView from "@/components/texts/ContactView";
import PageTitle from "@/components/texts/PageTitle";
import MapImage from "@/components/MapImage";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTittle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";
import OnlyImage from "@/components/OnlyImage";
import Image from "next/image";
import TransitionLink from "@/components/buttons/TransitionLink";

export default function Page() {
  return (
    <div>
      <PageTitle>第141回明大祭パンフレットの訂正とお詫び</PageTitle>
      <PageContainer>
        <Text moreTopPadding>本日は141明大祭にご来場いただき、誠にありがとうございます。</Text>
        <Text>お手持ちののパンフレットにおきまして、下記の通り訂正箇所がございます。</Text>
        <Text>ご来場のみなさま、並びに関係各所のみなさまには大変ご迷惑をおかけしてしまい、申し訳ありません。</Text>
        <Text>なお、訂正情報につきましては、一部を簡略化して記載する場合がございます。</Text>
        <Text>ご了承いただければ幸いです。</Text>
        <SmallTittle>キャンパスマップについて</SmallTittle>
        <Text>p.1に記載のキャンパスマップは下記のものが正しいものとなっております。ご確認下さい。</Text>
        <OnlyImage src="/images/fix/campusmap.jpg" alt="キャンパスマップ" className="mt-2" />
        <SmallTittle>QRコードについて</SmallTittle>
        <Text>p.10に記載の抽選企画に関するQRコードは下記のものが正しいものとなっております。ご確認下さい。</Text>
        <MapImage src="/images/fix/qr_meidaisai_lottery.png" alt="QR" className="mx-auto mt-2" />
        <TransitionLink href="/lottery">https://meidaisai.jp/lottery</TransitionLink>
        <SmallTittle>Meidaisai Championshipについて</SmallTittle>
        <Text>p.16記載のMeidaisai Championshipに関する情報は下記のものが正しいものとなっております。ご確認下さい。</Text>
        <Text>【訂正前】pp.65-83の「ジャンルから探す」</Text>
        <Text>【訂正後】pp.65-85の「ジャンルから探す」</Text>
        <SmallTittle>喫煙所について</SmallTittle>
        <Text>p.33記載の喫煙に関する情報は下記のものが正しいものとなっております。ご確認下さい。</Text>
        <Text>【訂正前】リエゾン棟横</Text>
        <Text>【訂正後】体育館ブリッジ横</Text>
        <SmallTittle>AGESTOCK実行委員会について</SmallTittle>
        <Text>p.59, 80記載のAGESTOCK実行委員会に関する情報は下記のものが正しいものとなっております。ご確認下さい。</Text>
        <Text>【訂正前】10：00～18：00</Text>
        <Text>【訂正後】14：00～15：00</Text>
        <SmallTittle>描画倶楽部について</SmallTittle>
        <Text>p.60, 80記載の描画倶楽部に関する情報は下記のものが正しいものとなっております。ご確認下さい。</Text>
        <Text>【訂正前】部員が共通のテーマについて各自の解釈で描いたイラストたちを展示します！お絵描きやチェキ販売もあるよ！</Text>
        <Text>【訂正後】共通のテーマについて部員が各自の解釈で描いたイラストたちを展示します！お絵描きやグッズ販売もあるよ！</Text>
        <SmallTittle>模擬店マップについて</SmallTittle>
        <Text>p.64に記載の模擬店マップは下記のものが正しいものとなっております。ご確認下さい。</Text>
        <Image src="/images/fix/fix-tent.jpg" width={500} height={500} alt="map" className="mt-2 rounded-2xl border-4 border-white mx-auto"/>
      </PageContainer>
    </div>
  );
}

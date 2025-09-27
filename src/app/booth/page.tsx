
import AccentText from "@/components/texts/AccentText";
import PageTitle from "@/components/texts/PageTitle";
import PageContainer from "@/components/base/PageContainer";
import Text from "@/components/texts/Text";
import SectionTitle from "@/components/texts/SectionTitle";
import ImageText from "@/components/texts/ImageText";
import SmallTitle from "@/components/texts/SmallTitle";
import ContactView from "@/components/texts/ContactView";


export default function Page() {
    return (
        <div>
            <PageTitle className="mb-5">企業ブース</PageTitle>
            <PageContainer>
                <SectionTitle>今年も、あの企業ブースが帰ってきた。</SectionTitle>
                <Text>さまざまな企業が多種多様な企画を行い、明大祭を盛り上げます。</Text>
                <AccentText>実施日時</AccentText>
                <Text>11月1日(土).2日(日).3日(月・祝)　10：00〜17：30</Text>
                <AccentText>実施場所</AccentText>
                <Text>和泉図書館横</Text>
                <SectionTitle className="mb-5">出展企業一覧</SectionTitle>

                <SmallTitle>Qoo10</SmallTitle>
                <Text className="text-lg">
                    <AccentText>出店日 <br /></AccentText>
                    11月1日(土)、2日(日)、3日(月・祝)<br />
                    <AccentText>企画内容 <br /></AccentText>
                    Qoo10公式ブースで育成ゲーム体験＆先着で豪華プレゼントがもらえる！
                </Text>


                <SmallTitle>KDDI株式会社</SmallTitle>
                <Text className="text-lg">
                    <AccentText>出店日 <br /></AccentText>
                    11月1日(土)、2日(日)、3日(月・祝)<br />
                    <AccentText>企画内容 <br /></AccentText>
                    更新予定
                </Text>


                <SmallTitle>シチズン時計株式会社</SmallTitle>
                <Text className="text-lg">
                    <AccentText>出店日 <br /></AccentText>
                    11月1日(土)、2日(日)、3日(月・祝)<br />
                    <AccentText>企画内容 <br /></AccentText>
                    【秒でかわいい！wiccaセルフフォトブース】 <br />
                    wiccaの腕時計で盛れる♡韓国っぽ本格セルフ写真が撮れるブース！ <br />
                    生年月日に合わせた「生まれて○○秒」の限定ステッカーもプレゼント♪友達との記念にもぴったり！
                </Text>


                <SmallTitle>ドン・キホーテ</SmallTitle>
                <Text className="text-lg">
                    <AccentText>出店日 <br /></AccentText>
                    11月1日(土)、2日(日)、3日(月・祝)<br />
                    <AccentText>企画内容 <br /></AccentText>
                    ドン・キホーテが明大祭に登場！<br />
                    外資系ホテル宿泊券などの豪華賞品が入った「巨大カプセルトイ」が無料で回せます。<br />
                    さらに、majica会員ならプラスもう1回！新規入会もOK！
                </Text>


                <SmallTitle>東京都　とうきょう若者ヘルスサポート（わかさぽ）</SmallTitle>
                <Text className="text-lg">
                    <AccentText>出店日<br /></AccentText>
                    11月1日(土)、2日(日)、3日(月・祝)<br />
                    <AccentText>企画内容<br /></AccentText>
                    東京都では、若者のからだやこころの悩みにお答えする相談窓口「わかさぽ」を実施しています。「わかさぽ」ブースでは、お菓子つかみ取りを行います。オリジナルグッズもプレゼントしますので、ぜひお越しください！
                </Text>

                <ContactView department="渉外局企業部門" mail="shogai@meidaisai.jp" showAddress showPhone/>
            </PageContainer>
        </div>

    )
}
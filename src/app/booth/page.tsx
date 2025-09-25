
import AccentText from "@/components/texts/AccentText";
import PageTitle from "@/components/texts/PageTitle";
import PageContainer from "@/components/base/PageContainer";
import Text from "@/components/texts/Text";
import SecitioTitle from "@/components/texts/SectionTitle";
import ImageText from "@/components/texts/ImageText";
import SmallTitle from "@/components/texts/SmallTitle";


export default function Page() {
    return (
        <div>
            <PageTitle className="mb-5">企業ブース</PageTitle>
            <PageContainer>
                <AccentText>今年も、あの企業ブースが帰ってきた。</AccentText>
                <Text>さまざまな企業が多種多様な企画を行い、明大祭を盛り上げます。</Text>
                <AccentText>実施日時・場所</AccentText>
                <Text>11月1日(土)、2日(日)、3日(月・祝)　10:00~17:30</Text>
                <AccentText>実施場所</AccentText>
                <Text>和泉図書館横</Text>
                <SecitioTitle className="mb-5">出展企業一覧</SecitioTitle>
                <ImageText src="">
                    <SmallTitle>Qoo10</SmallTitle>
                    <Text className="text-lg">
                        <div className="font-bold mb-2">出店日 <br /></div>
                        11月1日(土)、2日(日)、3日(月・祝)<br />
                        <div className="font-bold mt-4 mb-2">企画内容 <br /></div>
                        Qoo10公式ブースで育成ゲーム体験＆先着で豪華プレゼントがもらえる！
                    </Text>
                </ImageText>
                <ImageText>
                    <SmallTitle>KDDI株式会社</SmallTitle>
                    <Text className="text-lg">
                        <div className="font-bold mb-2">出店日 <br /></div>
                        11月1日(土)、2日(日)、3日(月・祝)<br />
                        <div className="font-bold mt-4 mb-2">企画内容 <br /></div>
                        更新予定
                    </Text>
                </ImageText>
                <ImageText>
                    <SmallTitle>シチズン時計株式会社</SmallTitle>
                    <Text className="text-lg">
                        <div className="font-bold mb-2">出店日 <br /></div>
                        11月1日(土)、2日(日)、3日(月・祝)<br />
                        <div className="font-bold mt-4 mb-2">企画内容 <br /></div>
                        【秒でかわいい！wiccaセルフフォトブース】 <br />
                        wiccaの腕時計で盛れる♡韓国っぽ本格セルフ写真が撮れるブース！ <br />
                        生年月日に合わせた「生まれて○○秒」の限定ステッカーもプレゼント♪友達との記念にもぴったり！
                    </Text>
                </ImageText>
                <ImageText>
                    <SmallTitle>ドン・キホーテ</SmallTitle>
                    <Text className="text-lg">
                        <div className="font-bold mb-2">出店日 <br /></div>
                        11月1日(土)、2日(日)、3日(月・祝)<br />
                        <div className="font-bold mt-4 mb-2">企画内容 <br /></div>
                        ドン・キホーテが明大祭に登場！<br />
                        外資系ホテル宿泊券などの豪華賞品が入った「巨大カプセルトイ」が無料で回せます。<br />
                        さらに、majica会員ならプラスもう1回！新規入会もOK！
                    </Text>
                </ImageText>
                <ImageText>
                    <SmallTitle>東京都　とうきょう若者ヘルスサポート（わかさぽ）</SmallTitle>
                    <Text className="text-lg">
                        <div className="font-bold mb-2">出店日<br /></div>
                        11月1日(土)、2日(日)、3日(月・祝)<br />
                        <div className="font-bold mt-4 mb-2">企画内容<br /></div>
                        東京都では、若者のからだやこころの悩みにお答えする相談窓口「わかさぽ」を実施しています。「わかさぽ」ブースでは、お菓子つかみ取りを行います。オリジナルグッズもプレゼントしますので、ぜひお越しください！
                    </Text>
                </ImageText>
            </PageContainer>
        </div>

    )
}
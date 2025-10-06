import AccentText from "@/components/texts/AccentText";
import PageTitle from "@/components/texts/PageTitle";
import PageContainer from "@/components/base/PageContainer";
import Text from "@/components/texts/Text";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import ContactView from "@/components/texts/ContactView";
import MapImage from "@/components/MapImage";

export default function Page() {
    const data = [
        {
            image: "/images/svg/booth/Qoo10.svg",
            name: "Qoo10",
            date: "11月1日(土).2日(日).3日(月・祝)",
            content: "Qoo10公式ブースで育成ゲーム体験＆先着で豪華プレゼントがもらえる！"
        },
        {
            image: "/images/svg/booth/Jcom.svg",
            name: "KDDI株式会社",
            date: "11月1日(土).2日(日).3日(月・祝)",
            content: "au AI-推し活ラボ登場！最新AI機能で推し活が劇的進化✨AIを使った検索・翻訳・カメラなど、推し活に使えるスマホの最新機能を体験しよう！キーワードを集めてau特製ノベルティをゲット🎁"
        },
        {
            image: "/images/svg/booth/Wicca.svg",
            name: "シチズン時計株式会社",
            date: "11月1日(土).2日(日).3日(月・祝)",
            contentTitle:"【秒でかわいい！wiccaセルフフォトブース】",
            content: "wiccaの腕時計で盛れる♡韓国っぽ本格セルフ写真が撮れるブース！ 生年月日に合わせた「生まれて○○秒」の限定ステッカーもプレゼント♪友達との記念にも♡"
        },
        {
            image: "/images/svg/booth/DonQuixote.svg",
            name: "ドン・キホーテ",
            date: "11月1日(土).2日(日).3日(月・祝)",
            content: "ドン・キホーテが明大祭に登場！ 外資系ホテル宿泊券などの豪華賞品が入った「巨大カプセルトイ」が無料で回せます。 さらに、majica会員ならプラスもう1回！新規入会もOK！"
        },
        {
            image: "/images/svg/booth/Wakasapo.svg",
            name: "東京都 とうきょう若者ヘルスサポート（わかさぽ）",
            date: "11月3日(月・祝)",
            content: "東京都では、若者のからだやこころの悩みにお答えする相談窓口「わかさぽ」を実施しています。「わかさぽ」ブースでは、お菓子つかみ取りを行います。オリジナルグッズもプレゼントしますので、ぜひお越しください！"
        }
    ]
    return (
        <div>
            <PageTitle className="mb-5">企業ブース</PageTitle>
            <PageContainer>
                <SectionTitle>今年も、あの企業ブースが帰ってきた！</SectionTitle>
                <Text moreTopPadding>さまざまな企業が多種多様な企画を行い、明大祭を盛り上げます！</Text>
                <AccentText>実施日時</AccentText>
                <Text>11月1日(土).2日(日).3日(月・祝) 10：00〜17：30</Text>
                <AccentText>実施場所</AccentText>
                <Text>和泉図書館横</Text>
                <MapImage src="/images/map/booth.jpg" alt="和泉図書館横" />
                <SectionTitle className="mb-5">出展企業一覧</SectionTitle>
                {data.map((item) => (
                    <div key={item.name} className="mb-5 lg:text-lg">
                        <SmallTitle>{item.name}</SmallTitle>
                        <OnlyImage src={item.image} alt={item.name} className="w-60 h-40 my-5"/>
                        <AccentText>出展日</AccentText>
                        <Text>{item.date}</Text>
                        <AccentText>企画内容</AccentText>
                        <Text>{item.contentTitle}</Text>
                        <Text noTopPadding>{item.content}</Text>
                    </div>
                ))}
                <ContactView department="渉外局企業部門" mail="shogai@meidaisai.jp" showAddress showPhone/>
            </PageContainer>
        </div>
    )
}
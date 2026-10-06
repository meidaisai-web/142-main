import CloudPageContainer from "@/components/base/CloudPageContainer"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import SmallTitle from "@/components/texts/SmallTitle"
import AccentText from "@/components/texts/AccentText"
import ImageText from "@/components/texts/ImageText"
import Text from "@/components/texts/Text"
import MapImage from "@/components/MapImage"
import ContactView from "@/components/texts/ContactView"

export default function Page() {
    return (
        <CloudPageContainer>
            <PageTitle>企業ブース</PageTitle>

            <SectionTitle>今年も、あの企業ブースが帰ってきた！</SectionTitle>
            <Text>さまざまな企業が多種多様な企画を行い、明大祭を盛り上げます！</Text>

            <AccentText>実施日時</AccentText>
            <Text>10月30日(金).31日(土).11月1日(日) 11:00～17:30</Text>

            <AccentText>実施場所</AccentText>
            <Text>和泉図書館横</Text>

            <SectionTitle>企業ブースマップ</SectionTitle>
            <MapImage src="/images/booth/boothmap.jpg" alt="企業ブースマップ" />

            <SectionTitle>出展企業一覧</SectionTitle>
            <SmallTitle>経済産業省 資源エネルギー庁</SmallTitle>
            <ImageText src="/images/booth/energy.jpg" alt="経済産業省 資源エネルギー庁_ロゴ" className="w-4/5 sm:w-1/3">
            <AccentText>企画内容</AccentText>
                楽しく学べるエネルギークイズに挑戦！セルフフォト体験で思い出を残そう♪
            </ImageText>

            <SmallTitle>富士フイルム株式会社</SmallTitle>
            <ImageText src="/images/booth/fuji.jpg" alt="富士フイルム株式会社_ロゴ" className="w-4/5 sm:w-1/3">
            <AccentText>企画内容</AccentText>
                “チェキ”instax mini 13™をお試しレンタル！
            </ImageText>

            <SmallTitle>NECパーソナルコンピュータ株式会社</SmallTitle>
            <ImageText src="/images/booth/NEC.png" alt="NECパーソナルコンピュータ株式会社_ロゴ" className="w-4/5 sm:w-1/3">
            <AccentText>企画内容</AccentText>
                豪華景品が当たる、感動のタブレット体験
            </ImageText>

            <SmallTitle>Qoo10</SmallTitle>
            <ImageText src="/images/booth/Qoo10.png" alt="Qoo10_ロゴ" className="w-4/5 sm:w-1/3">
            <AccentText>企画内容</AccentText>
                最新のビューティートレンドに触れられる特別ブースへお立ち寄りください！
            </ImageText>

            <SmallTitle>Yostar</SmallTitle>
            <ImageText src="/images/booth/Yostar.png" alt="Yostar_ロゴ" className="w-4/5 sm:w-1/3">
            <AccentText>企画内容</AccentText>
                人気麻雀アプリ『雀魂』が遊べる体験ブースを出展いたします！
            </ImageText>
            <ContactView department="第142回明大祭実行委員会 渉外局　企業部門" showPhone mail="kigyo@meidaisai.jp" showAddress />
        </CloudPageContainer>
    )
}
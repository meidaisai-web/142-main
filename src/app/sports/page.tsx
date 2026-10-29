import CloudPageContainer from "@/components/base/CloudPageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import AccentText from "@/components/texts/AccentText";
import Text from "@/components/texts/Text";
import Emphasis from "@/components/texts/Emphasis";
import ImageLogo from "@/components/texts/ImageLogo"
import ContactView from "@/components/texts/ContactView";

export default function Page() {
    return (
        <CloudPageContainer>
            <PageTitle>熱闘!!明治スポーツ</PageTitle>
            <ImageLogo
                src="/images/sports/sports01.png"
                logoSrc="/images/sports/sports-logo.svg"
                alt="企画の写真"
                logoAlt="企画ロゴ"
                LogoClassName="scale-170" />
            <SectionTitle>企画概要</SectionTitle>
            <Emphasis>明治大学といえばおなじみのスポーツについて、展示や体験型企画を通してその魅力を発信する企画です！</Emphasis>
            <Text>現役選手に明大生ならではの視点でインタビュー。普段は見られない一面が見られるかも！また、選手の記録に挑戦できる体験型企画も用意しています！</Text>
            <Emphasis>見て、知って、体験して、明治のスポーツをもっと好きになりませんか？</Emphasis>
            <Text>みなさまのご参加をお待ちしています！</Text>
            <SmallTitle>実施場所</SmallTitle>
            <AccentText>体験・展示</AccentText>
            <Text>メディア棟M515教室</Text>
            <AccentText>展示</AccentText>
            <Text>メディア棟M516教室</Text>
            <AccentText>選手への応援メッセージ</AccentText>
            <Text>和泉ラーニングスクエア4階アゴラ</Text>
            <SmallTitle>日時</SmallTitle>
            <Text>
                10月30日(金).31日(土)11:00～18:00<br />
                11月1日(日)11:00～17:00
            </Text>
            <ContactView department="開発局黎幸部門" mail="142ndreikobumon@gmail.com" showPhone showAddress/>
        </CloudPageContainer>
    )
}
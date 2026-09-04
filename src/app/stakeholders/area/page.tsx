import CloudPageContainer from "@/components/base/CloudPageContainer"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import AccentText from "@/components/texts/AccentText"
import SmallTitle from "@/components/texts/SmallTitle"
import ImageText from "@/components/texts/ImageText"
import ContactView from "@/components/texts/ContactView"
export default function Page() {

    return (
        <div>
            <CloudPageContainer>
                <PageTitle>界隈地域のみなさまへ</PageTitle>
                <SectionTitle>ご挨拶</SectionTitle>
                <Text>第142回明大祭公式サイトをご覧いただきありがとうございます。
                    <br />この度、第142回明大祭を10月30日(金).31日(土).11月1日(日)に明治大学和泉キャンパスにて開催することが決定いたしました。
                    <br />界隈地域のみなさまにおかれましては、第141回明大祭開催にご理解・ご協力をいただき誠にありがとうございました。昨年度の活動では、多くの場面で界隈地域のみなさまとの関わりが明大祭開催において大切であることを実感いたしました。明大生は界隈地域のみなさまの支えがあってこそ充実した学生生活を送ることができております。
                    明大生は界隈地域のみなさまの支えがあってこそ充実した学生生活を送ることができております。
                    <br />明大祭実行委員一同、界隈地域のみなさまに心より感謝を申し上げるとともに、みなさまのご期待にお応えできるよう地域のイベントへの参加や清掃活動など、より広く、深く地域に貢献してまいります。そして、明大生主体の祭である明大祭を通して、日ごろの感謝を形として表現させていただきますので、ぜひご来場ください。
                </Text>
                <SectionTitle>地域への取り組み</SectionTitle>
                <SmallTitle>和泉キャンパス周辺地域での取り組み</SmallTitle>
                <AccentText>明大前音楽祭</AccentText>
                <ImageText src="/images/svg/stakeholders/area/ongakusai.jpg" alt="明大前音楽祭" className="w-full mt-5 mb-5 rounded-lg">明大前駅前明大通りにおいて5月23日(土)、24日(日)に開催された明大前音楽祭にお手伝いとして参加させていただきました。明大前商店街振興組合の方々のご指導のもと、模擬店や警備に関しまして微力ながら尽力いたしました。</ImageText>
                <AccentText>明大前クリーンウォーク活動</AccentText>
                <ImageText src="/images/svg/stakeholders/area/cleenwalk.jpg" alt="明大前クリーンウォーク活動" className="w-full mt-5 mb-5 rounded-lg">明大祭実行委員会では、和泉キャンパス周辺地域のみなさまの明大祭開催へのご理解・ご協力に対して感謝の気持ちを示し、よりよい関係を築くことができるように「明大前クリーンウォーク活動」という清掃活動を例年行っております。</ImageText>
                <SmallTitle>駿河台キャンパス周辺での取り組み</SmallTitle>
                <AccentText>神田すずらんまつり</AccentText>
                <ImageText src="/images/svg/stakeholders/area/suzuran.jpg" alt="神田すずらんまつり" className="w-full mt-5 mb-5 rounded-lg">駿河台キャンパス周辺地域において、5月23日(土)に開催された神田すずらんまつりに参加させていただきました。地域と密接したイベントの盛況に、ボランティアとして微力ながら尽力いたしました。</ImageText>
                <SmallTitle>中野キャンパス周辺地域での取り組み</SmallTitle>
                <AccentText>関東沖縄エイサーまつり</AccentText>
                <Text>中野キャンパス竣工以来、中野チャンプルーフェスタにお手伝いとして参加させていただいております。今年度は、中野チャンプルーフェスタからエイサー部門が独立した、「関東沖縄エイサーまつり」に7月18日(土)、19日(日)に参加させていただきました。動線管理など、イベントの盛況に微力ながら尽力いたしました。</Text>
                <SmallTitle>下北沢地域での取り組み</SmallTitle>
                <AccentText>下北沢盆踊り</AccentText>
                <Text>昨年度から新たな挑戦として、下北沢地域のみなさまとの交流を開始し、7月25日(土)、26日(日)に開催された「下北沢盆踊り2026」に参加させていただきました。また、昨年度は「ムーンアートナイト下北沢2025」、「シモキタロボフェス2025」にも参加し、ボランティアとして微力ながら尽力いたしました。今後も良好な関係を築いていけるよう、盤石な協力体制を構築してまいります。</Text>
                <ContactView department="渉外局界隈部門" mail="kaiwai@meidasai.jp" showAddress showPhone />
            </CloudPageContainer>
        </div>
    )
}

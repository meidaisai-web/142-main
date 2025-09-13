import ContactView from '@/components/texts/ContactView'
import ImageText from '@/components/texts/ImageText'
import Text from '@/components/texts/Text'
import SectionTitle from '@/components/texts/SectionTitle'
import PageContainer from '@/components/base/PageContainer'
import PageTitle from '@/components/texts/PageTitle'
import SmallTitle from '@/components/texts/SmallTitle'
import AccentText from '@/components/texts/AccentText'
export default function Page() {
    return (
        <div>
            <PageTitle>界隈地域のみなさまへ</PageTitle>
            <PageContainer>
                <SectionTitle>ご挨拶</SectionTitle>
                <Text moreTopPadding>第141回明大祭公式サイトをご覧いただきありがとうございます。</Text>
                <Text moreTopPadding>この度、第141回明大祭を11月1日(土).2日(日).3日(月・祝)に明治大学和泉キャンパスにて開催することが決定いたしました。界隈地域のみなさまにおかれましては、第140回明大祭開催にご理解・ご協力をいただき誠にありがとうございました。昨年度の活動では、多くの場面で界隈地域のみなさまとの関わりが明大祭開催において大切であることを改めて感じました。明大生は界隈地域のみなさまの支えがあってこそ充実した学生生活を送ることができております。</Text>
                <Text moreTopPadding>明大祭実行委員一同、界隈地域のみなさまに心より感謝を申し上げるとともに、みなさまのご期待にお応えできるよう明大祭実行委員会として地域イベントへの参加や清掃活動など、今年度からの新たな取り組みも含め、より広く、深く地域に貢献してまいります。そして、明大生主体の祭である明大祭を通して、日ごろの感謝を形として表現させていただきますので、ぜひご来場ください。</Text>
                <SectionTitle>地域への取り組み</SectionTitle>
                <SmallTitle>地域イベントへの参加</SmallTitle>
                <AccentText>明大前サマーフェスタ＆盆踊り</AccentText>
                <ImageText src="/images/ad/summerfesta.jpg" alt="SummerFestival Image">明大前駅前広場において昨年度の8月24日(土)、25日(日)に開催された明大前サマーフェスタ＆盆踊りにお手伝いとして参加させていただきました。明大前商店街振興組合の方々のご指導のもと、模擬店やステージでのパフォーマンスに関しまして微力ながら尽力いたしました。</ImageText>
                <AccentText>明大前音楽祭</AccentText>
                <Text>明大前駅前広場において5月17日(土)、18日(日)に開催された明大前音楽祭にお手伝いとして参加させていただきました。
                    明大前商店街振興組合の方々のご指導のもと、昨年度が初開催となるイベントの盛況に微力ながら尽力いたしました。</Text>
                <AccentText>明大前クリーンウォーク活動</AccentText>
                <Text>明大祭実行委員会では、和泉キャンパス周辺地域のみなさまの明大祭開催へのご理解・ご協力に対して感謝の気持ちを示し、
                    よりよい関係を築くことができるように｢明大前クリーンウォーク活動｣という清掃活動を例年行っております。</Text>
                <SmallTitle>駿河台キャンパス周辺での取り組み</SmallTitle>
                <AccentText>神田すずらんまつり</AccentText>
                <Text>駿河台キャンパス周辺地域において、5月24日(土)に開催された神田すずらんまつりに参加させていただきました。
                    地域と密接したイベントの盛況に、ボランティアとして微力ながら尽力いたしました。</Text>
                <AccentText>神保町ブックフェスティバル</AccentText>
                <Text>駿河台キャンパス周辺地域において、昨年度の10月26日(土)、27日(日)に開催された神保町ブックフェスティバルに参加させていただきました。
                    本の街である神保町で行われたイベントの盛況に、ボランティアとして微力ながら尽力いたしました。</Text>
                <SmallTitle>中野キャンパス周辺での取り組み</SmallTitle>
                <AccentText>中野チャンプルーフェスタ</AccentText>
                <ImageText src="/images/ad/Nakanofes.jpg" alt="NakanoFes Image">中野キャンパス竣工以来、中野チャンプルーフェスタにお手伝いとして参加させていただいております。7月19日(土)、20日(日)に開催された｢中野チャンプルーフェスタ2025｣にお手伝いとして参加させていただきました。模擬店出店や動線管理など、イベントの盛況に微力ながら尽力いたしました。</ImageText>
                <ContactView department="渉外局" mail="shogai@meidaisai.jp" showAddress showPhone />
            </PageContainer>
        </div>
    )
}
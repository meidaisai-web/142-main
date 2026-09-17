import CloudPageContainer from "@/components/base/CloudPageContainer"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import Emphasis from "@/components/texts/Emphasis"
import ContactView from "@/components/texts/ContactView"

function page() {
    return (
        <div>
            <CloudPageContainer>
                <PageTitle>校友・父母のみなさまへ</PageTitle>
                <SectionTitle>開催のご報告</SectionTitle>
                <Text>日頃より、明大祭の活動にご理解とご支援を賜り、誠にありがとうございます。</Text>
                <Text>今年も10月30日(金).31日(土).11月1日(日)の3日間、第142回明大祭を開催いたします。「鳴らせ鼓動、響かせ青春」をテーマに、ステージパフォーマンスをはじめ、模擬店や各教室での展示など、さまざまな企画をご用意しております。みなさまのご来場を心よりお待ちしております。</Text>
                <SectionTitle>ご賛助へのお礼</SectionTitle>
                <Text>第142回明大祭にご賛助くださいましたみなさまに心より感謝申し上げます。</Text>
                <Text>みなさまのご協力により無事賛助活動を終了することができました。お力添えにより、今年度も無事に明大祭を開催できますこと、心より嬉しく感じております。ささいなお礼ではございますが、5,000円以上のご賛助をいただいた方に記念品をご用意しております。本品の到着まで楽しみにお待ちください。</Text>
                <Text>改めまして、この度第142回明大祭にご賛助いただき誠にありがとうございました。今後とも何卒よろしくお願い申し上げます。</Text>
                <SectionTitle>校友・父母歓迎スペースについて</SectionTitle>
                <Text>第142回明大祭開催期間である10月30日(金).31日(土).11月1日(日)の3日間、「校友・父母歓迎スペース企画」を実施することが決定しました。</Text>
                <Text>今年度より対象を校友のみなさまから校友・父母のみなさまへと広げ、明大祭を楽しんでいただくとともに、現役明大生との交流を深めていただくための企画です。明大祭実行委員会 渉外局 校友部門が、さまざまな企画をご用意しております。</Text>
                <Text>昨年度は、ミニゲームや塗り絵、カルタを通して校友のみなさまと明大生が交流を深めることができました。今年度は、校友のみなさまに加えて父母のみなさまにも楽しんでいただけるよう、昨年度以上に充実した企画をご用意しております。</Text>
                <Text>会場は<Emphasis>第一校舎316・317教室</Emphasis>を予定しております。お時間に余裕がございましたら、ぜひお気軽にお越しください。</Text>
                <Text>明大祭実行委員会一同、心よりお待ちしております。</Text>
                <ContactView department="渉外局 校友部門" showPhone mail="kouyu@meidaisai.jp"/>
            </CloudPageContainer>
        </div>
    )
}

export default page

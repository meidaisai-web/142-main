import Text from '@/components/texts/Text'
import PageTitle from '@/components/texts/PageTitle'
import SectionTitle from '@/components/texts/SectionTitle'
import PageContainer from '@/components/base/PageContainer'
import ContactView from '@/components/texts/ContactView';
import Emphasis from '@/components/texts/Emphasis';

export default function AlumniPage() {
    return (
        <div>
            <PageTitle>校友のみなさまへ</PageTitle>
            <PageContainer>
                <SectionTitle>開催のご報告</SectionTitle>
                <Text moreTopPadding>
                    この度、第141回明大祭を11月1日(土).2日(日).3日(月・祝)に明治大学和泉キャンパスにて開催することが決定いたしました。
                    昨年度の第140回明大祭は、約4万人の方々に足をお運びいただき、教室企画や模擬店、ステージパフォーマンスなど様々な企画が盛況となりました。
                    校友のみなさまの多大なるご支援に改めて厚く御礼申し上げます。</Text>
                <Text moreTopPadding>今年度の明大祭におきましても、みなさまに感謝の気持ちをお伝えするとともに、より交流を深めるための企画をご用意させていただきたいと考えております。
                    みなさまのご来場を心よりお待ちしております。</Text>
                <Text moreTopPadding>また、今年度の明大祭は「関係者すべてに感動を響かせる」ことを目指しております。
                    みなさまのご期待を超えられるよう、明大祭実行委員会一同精進してまいりますので、何卒よろしくお願い申し上げます。</Text>
                <SectionTitle>ご賛助へのお礼</SectionTitle>
                <Text moreTopPadding>第141回明大祭実行委員会にご賛助くださいましたみなさまに心から感謝申し上げます。</Text>
                <Text moreTopPadding>みなさまのご協力により無事協賛活動を終了することができました。みなさまのお力添えにより、今年度も無事に明大祭を開催できますこと、心より
                    嬉しく感じております。そのわずかなお礼として、5,000円以上のご賛助をいただいた方に記念品をご用意しております。本品の到着まで楽しみにお待ちください。
                    また、ご希望の方は明大祭公式パンフレットにご芳名を掲載させていただきました。こちらのサイトから電子版をご覧にいただけますのでよろしければご確認ください。
                </Text>
                <Text moreTopPadding>改めまして、この度第141回明大祭にご賛助いただき誠にありがとうございました。今後とも何卒よろしくお願い申し上げます。</Text>
                <SectionTitle>校友歓迎スペースについて</SectionTitle>
                <Text moreTopPadding>今年度も第141回明大祭開催期間である11月1日(土).2日(日).3日(月・祝)の3日間、校友歓迎スペース企画を実施することが決定しました。</Text>
                <Text moreTopPadding>校友歓迎スペース企画は、すべての校友のみなさまのために我々明大祭実行委員会渉外局校友部門がご用意させていただく企画となっております。
                    昨年度は、縁日形式のミニゲームを通してみなさまと明大生が交流を深めることができました。今年度は、昨年度以上に楽しんでいただける企画をご用意しております。
                    <Emphasis>第一校舎316・317教室</Emphasis>にて行う予定です。お時間に余裕がございましたら、お気軽にお越しください。
                </Text>
                <Text moreTopPadding>明大祭実行委員一同、心よりお待ちしております。</Text>
                <ContactView department="渉外局（校友部門）" mail="shogai@meidaisai.jp" showPhone  />
            </PageContainer>
        </div>
    )
}
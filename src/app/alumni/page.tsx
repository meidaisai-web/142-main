import Text from '@/components/texts/Text'
import PageTitle from '@/components/texts/PageTitle'
import SectionTitle from '@/components/texts/SectionTitle'
import PageContainer from '@/components/base/PageContainer'
import TransitionLink from '@/components/buttons/TransitionLink';
import Button from '@/components/buttons/Button';
import ContactView from '@/components/texts/ContactView';

export default function AlumniPage() {
    return (
        <div>
            <PageTitle>校友のみなさまへ</PageTitle>
            <PageContainer>
                <SectionTitle>ご挨拶</SectionTitle>
                <Text moreTopPadding>第141回明大祭公式サイトをご覧いただきありがとうございます｡
                    この度､第141回明大祭を11月1日(土).2日(日).3日(月・祝)に明治大学和泉キャンパスにて開催することが決定いたしました｡</Text>
                <Text moreTopPadding>昨年度は感謝の気持ちを込め、明大祭当日に校友のみなさまを対象とした企画をご用意させていただきました。
                    今年度の明大祭におきましても、みなさまに感謝の気持ちをお伝えするとともに、より交流を深めるための企画をご用意させていただきたいと思っております。
                    みなさまのご来場を心よりお待ちしております。また、今年度の明大祭は「関係者すべてに感動を響かせる」ことを目指しております。
                    校友のみなさまのご期待を超えられるよう、明大祭実行委員一同精進してまいりますので何卒よろしくお願い申し上げます。</Text>
                <SectionTitle>ご賛助のお願い</SectionTitle>
                <Text moreTopPadding>日頃より明大祭へのご理解、ご協力ありがとうございます。校友のみなさまのご協力により明大祭を毎年開催できておりますこと、心より御礼申し上げます。</Text>
                <Text moreTopPadding>不躾なお願いではございますが、今年度も第141回明大祭へご賛助という形でのご支援をお願いしたく存じます。</Text>
                <Text moreTopPadding>「明大祭」は学生が日々の活動の成果を発表する場であり、また学生同士だけでなく学内外を繋ぐ非常に重要な交流の場でもあります。
                    私たち第141回明大祭実行委員一同、第141回明大祭の成功とさらなる発展を目指してまいりますので、ご理解ご協力を賜りますよう何卒よろしくお願い申し上げます。</Text>
                <Text moreTopPadding>なお、頂いたご賛助金は明大祭の運営費として「パンフレット制作」や「ステージ設営」など、明大祭のさらなる充実のために活用させていただきます。</Text>
                <SectionTitle>ご協賛の方法</SectionTitle>
                <Text moreTopPadding>本趣旨にご賛同いただける場合は以下のリンク先から電話番号、
                    メールアドレスおよびご住所を<TransitionLink href="https://docs.google.com/forms/d/1bdu0jJer7b35WPeYk8bFX0GMIp9voZ9JE0ORgliNQ34/edit">Googleフォーム</TransitionLink>
                    へ入力していただくか、下記のお問い合わせ先までご連絡ください。</Text>
                <Text moreTopPadding>いただいたご連絡先に、改めてご住所の確認の連絡をさせていただいたのち、ご賛助に関する詳しい資料を送付させていただきます。</Text>
                <Button href="https://docs.google.com/forms/d/1bdu0jJer7b35WPeYk8bFX0GMIp9voZ9JE0ORgliNQ34/edit" className="mt-5">
                    Googleフォームはこちら
                </Button>
                <ContactView department="渉外局（校友部門）" mail="shogai@meidaisai.jp" showPhone showAddress />
            </PageContainer>
        </div>
    )
}
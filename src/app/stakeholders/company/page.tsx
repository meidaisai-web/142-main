import CloudPageContainer from "@/components/base/CloudPageContainer"
import ContactView from "@/components/texts/ContactView"
import { List, ListItem } from "@/components/texts/List"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"

function page() {
  return (
    <div>
      <CloudPageContainer>
        <PageTitle>企業のみなさまへ</PageTitle>
        <SectionTitle>ご挨拶</SectionTitle>
        <Text>第142回明大祭公式サイトをご覧いただき、誠にありがとうございます。</Text>
        <Text>この度、第142回明大祭を10月30日(金).31日(土).11月1日(日)に明治大学和泉キャンパスにて開催することが決定いたしました。</Text>
        <Text>我々が第142回明大祭開催という大きな目標を達成し、その盛況と発展に向けて全力を尽くすことができるのは、ご協賛いただきました企業のみなさまのご支援の賜物です。第142回明大祭実行委員会一同、心より感謝を申し上げます。</Text>
        <Text>みなさまからのご期待にお応えできるよう、引き続き尽力してまいりますので、何卒よろしくお願い申し上げます。</Text>
        <SectionTitle>ご協賛金の使用用途</SectionTitle>
        <Text>みなさまよりいただいたご協賛金はステージ設営費や公式パンフレット制作費、装飾物製作費などの第142回明大祭運営費として大切に使わせていただきます。</Text>
        <Text>運営費の詳細につきましては、12月頃にお送りする「明大祭開催報告書」および、来春に明大祭公式サイトへ掲載予定の「第142回明大祭実行委員会最終決算報告」をご覧ください。</Text>
        <Text>ご不明点がございましたら、本ページ下部に記載のお問い合わせ先へお気軽にご連絡ください。</Text>
        <SectionTitle>ご来場の際のご案内</SectionTitle>
        <Text>明大祭は、明大生の活動を直接ご覧いただける貴重な機会となりますので、ぜひご来場いただけますと幸いです。ご来場いただける場合は、担当者がご案内させていただきますので、事前に本ページ下部に記載のお問い合わせ先または担当者までご連絡をいただきたく存じます。みなさまのお越しを心よりお待ちしております。</Text>
        <SectionTitle>来年度以降のご協賛のお願い</SectionTitle>
        <Text>明大祭実行委員会では、企業のみなさまに明大祭へのご協賛のお願いをしております。</Text>
        <Text>いただいたご協賛金は、パンフレット制作費やステージ運営費など、明大祭の更なる充実のために活用させていただいております。</Text>
        <Text>我々明大祭実行委員会一同、明大祭の成功と更なる発展を目指してまいりますので、ご理解ご協力を賜りますよう、よろしくお願い申し上げます。</Text>
        <SectionTitle>ご協賛方法</SectionTitle>
        <Text>第142回明大祭では、以下の６つのご協賛方法を設けておりました。</Text>
        <List numbered className="mt-5">
            <ListItem>第142回明大祭公式パンフレットへの広告の掲載</ListItem>
            <ListItem>第142回明大祭公式サイトへの広告バナーの掲載</ListItem>
            <ListItem>当日配布される手提げ袋の制作および広告の掲載</ListItem>
            <ListItem>明大祭当日のブースの設置</ListItem>
            <ListItem>メインステージに設置される大型ビジョンでの広告の放映</ListItem>
            <ListItem>明大祭当日の企画における来場者への物品提供</ListItem>
        </List>
        <List mark="※">
            <ListItem>以上の協賛方法は第142回明大祭でご案内させていただいたものです。</ListItem>
        </List>
        <Text>来年度は変更となる可能性がございます。予めご了承ください。</Text>
        <Text>来年度のご協賛をご検討いただける場合は、参考までに本年度使用した資料を送付いたします。</Text>
        <Text>また、上記以外の形態でのご協賛につきましても検討いたしますので、お気軽に下記のお問い合わせ先までご連絡ください。</Text>
        <ContactView department="渉外局 企業部門" showAddress showPhone mail="kigyo@meidaisai.jp" />
      </CloudPageContainer>
    </div>
  )
}

export default page
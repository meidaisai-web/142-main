import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import AccentText from "@/components/texts/AccentText"
import PageContainer from "@/components/base/PageContainer"
import ContactView from "@/components/texts/ContactView"
import { List, ListItem } from "@/components/texts/List"
export default function Page() {
    return (
        <>
            <PageTitle>企業のみなさまへ</PageTitle>
            <PageContainer>

                <SectionTitle>ご挨拶</SectionTitle>
                <div className="w-full h-10"></div>
                <Text className="mt-5">
                    第141回明大祭公式サイトをご覧いただき、誠にありがとうございます。
                </Text>
                <Text className="mt-5">
                    この度、第141回明大祭を11月1日(土).2日(日).3日(月・祝)に明治大学和泉キャンパスにて開催することが決定いたしました。
                </Text>
                    我々が第141回明大祭開催という大きな目標を達成し、その盛況・発展に全力を注ぐことができるのは、ひとえにご協賛いただきましたみなさまのお力添えによるものです。
                <Text className="mt-5">
                    第141回明大祭実行委員会一同、心より感謝申し上げます。
                </Text>
                <Text className="mt-5">
                   みなさまのご期待にお応えできるよう尽力してまいりますので、引き続きよろしくお願いいたします。
                </Text>

                <SectionTitle>ご協賛金の使用用途</SectionTitle>
                <div className="w-full h-10"></div>
                <Text className="mt-5">
                    みなさまからいただいたご協賛金はステージ設営費や公式パンフレット制作費、装飾物製作費などの第141回明大祭運営費として使わせていただきます。
                </Text>
                <Text className="mt-5">
                    詳細につきましては、12月を目処にお送りする「開催報告書」や来春明大祭公式サイトに掲載される「第141回明大祭実行委員会最終決算報告」をご覧ください。
                    また何かご不明点などございましたら、下記の連絡先へお気軽にお問い合わせください。
                </Text>  
                
                <SectionTitle>ご来場の際のご案内</SectionTitle>
                <div className="w-full h-10"></div>
                <Text className="mt-5">
                   我々明大生の活動をお見せできる数少ない機会となりますので、ぜひご来場いただけますと幸いです。
                </Text>
                <Text className="mt-5">
                    ご来場の際には、事前に下記のお問い合わせ先または担当者までご連絡をいただければ、第141回明大祭をご案内させていただきます。
                </Text>
                <Text className="mt-5">
                ご連絡を心よりお待ちしております。
                </Text>

                <SectionTitle>来年度以降のご協賛のお願い</SectionTitle>
                <div className="w-full h-10"></div>
                <Text className="mt-5">
                   明大祭実行委員会では、企業のみなさまに明大祭へのご協賛のお願いさせていただいております。
                </Text>
                <Text className="mt-5">
                    いただいたご協賛金は、明大祭の運営費としてパンフレット制作費やステージ設営費など、明大祭の更なる充実のために活用させていただいております。
                </Text>
                <Text className="mt-5">
                我々明大祭実行委員会一同、明大祭の成功と更なる発展を目指してまいりますので、ご理解ご協力賜りますよう、よろしくお願い申し上げます。
                </Text>  

                <SectionTitle>ご協賛の方法</SectionTitle>
                <div className="w-full h-10"></div>
                <Text className="mt-5">
                  第141回明大祭では、以下の6つのご協賛方法を設けておりました。
                </Text>
                <List numbered className="mt-5">
                    <ListItem>第141回明大祭公式パンフレットへの広告の掲載</ListItem>
                    <ListItem>第141回明大祭公式サイトへの広告バナーの掲載</ListItem>
                    <ListItem>当日配布されるポリ手提げ袋の制作および広告の掲載</ListItem>
                    <ListItem>明大祭当日のブースの設置</ListItem>
                    <ListItem>メインステージに設置される大型ビジョンへの広告の放映</ListItem>
                    <ListItem>明大祭当日の企画における来場者への物品提供</ListItem>
                </List> 
                <Text className="mt-5">
                    ※以上の協賛方法は第141回明大祭でご案内させていただいたものです。
                </Text>  
                <Text className="mt-5">
                    ご協賛方法は来年度変更となる可能性がございます。何卒ご了承ください。
                </Text> 
                <Text className="mt-5">
                    上記の方法にて来年度のご協賛をご検討いただける企業のご担当者様には、本年度使用した資料を送付させていただきます。
                </Text> 
                <Text className="mt-5">
                    上記以外の方法でのご協賛も検討いたしますので、お気軽に下記のお問い合わせ先までご連絡ください。
                </Text> 
                <div className="w-full h-60"></div>
                <ContactView department="渉外局界隈部門" mail="shogai@meidaisai.jp" showPhone showAddress />
            </PageContainer>
        </>
    )
}
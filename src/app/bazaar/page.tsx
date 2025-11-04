import PageTitle from "@/components/texts/PageTitle"
import PageContainer from "@/components/base/PageContainer"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import SmallTitle from "@/components/texts/SmallTitle"
import MapImage from "@/components/MapImage"
import Emphasis from "@/components/texts/Emphasis"
import { List } from "@/components/texts/List"
import { ListItem } from "@/components/texts/List"

export default function Page(){
    return(
        <div>
            <PageTitle>チャリティーバザー企画</PageTitle>
            <PageContainer>
                <SectionTitle>最終募金金額</SectionTitle>
                <p className="text-center text-xl font-bold mt-8">65,201円</p>
                <p className="text-center mt-8 text-lg font-semibold mb-2">内訳</p>
                <div className="w-72 mb-8 mx-auto overflow-x-auto rounded-2xl border-black border-2">
                    <table className="w-full table-auto border-collapse text-lg">
                        <tbody>
                            <tr className="bg-white text-black border-b border-black">
                                <td className="py-2 px-4 border-r border-black">売り上げ</td>
                                <td className="text-end py-2 px-4">54,000円</td>
                            </tr>
                            <tr className="bg-white text-black border-b border-black">
                                <td className="py-2 px-4 border-r border-black">募金</td>
                                <td className="text-end py-2 px-4">11,201円</td>
                            </tr>
                            <tr className="bg-secondary font-medium">
                                <td className="py-2 px-4 border-r border-black">最終募金金額</td>
                                <td className="text-end py-2 px-4">65,201円</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <SectionTitle>実行委員会によるバザー企画開催！</SectionTitle>
                <Text moreTopPadding>学生が持ち寄った本や服など、様々なアイテムが勢ぞろい！この機会にあなただけの特別な一品を見つけに来ませんか？</Text>
                <Text>バザーの収益金は、災害に見舞われた方に対する救援活動や復興支援のために、<Emphasis>日本赤十字社に寄付</Emphasis>されます。</Text>
                <List mark="※">
                    <ListItem>売り切れ次第終了となります。</ListItem>
                    <ListItem>最終募金金額については、明大祭終了後にこちらのページにてご報告させていただきます。</ListItem>
                </List>
                <SectionTitle>企画実施場所・日時</SectionTitle>
                <SmallTitle>実施場所</SmallTitle>
                <Text>第一校舎正面右側</Text>
                <MapImage src="/images/map/bazaar.jpg" alt="第一校舎正面右側"/>
                <SmallTitle>実施日時</SmallTitle>
                <Text>11月1日(土).2日(日).3日(月・祝) 10：00〜18：00</Text>
            </PageContainer>
        </div>
    )
}
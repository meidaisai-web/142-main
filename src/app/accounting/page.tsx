import PageContainer from "@/components/base/PageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";

interface TableData {
    item: string;
    amount: number;
}

const incomeData: TableData[] = [
    {
        item: "大学助成金",
        amount: 3_700_000,
    },
    {
        item: "大学助成金（学生部長賞）",
        amount: 119_670,
    },
    {
        item: "校友会助成金",
        amount: 300_000,
    },
    {
        item: "父母会助成金",
        amount: 200_000,
    },
    {
        item: "協賛賛助金",
        amount: 9_646_937
    },
    {
        item: '参加団体分担金・ステージ代預り金',
        amount: 2_009_342
    },
    {
        item: '備品レンタル代預り金',
        amount: 779_530
    },
    {
        item: 'ガス器具レンタル代預り金',
        amount: 1_068_078
    },
    {
        item: "容器・一斗缶預り金",
        amount: 629_826
    },
    {
        item: '実行委員会分担金',
        amount: 3_213_000
    },
    {
        item: 'ユニフォーム購入金',
        amount: 438_000
    },
    {
        item: '第140回明大祭公式グッズ収益',
        amount: 887_500
    },
    {
        item: '利息',
        amount: 663
    },
    {
        item: '保険金契約費返金',
        amount: 139_972
    },
    {
        item: '前年度繰越金',
        amount: 6_188_869
    }
]

const expenseData: TableData[] = [

]

export default function Page() {
    return (
        <div>
            <PageTitle>最終決算報告</PageTitle>
            <PageContainer>
                <SectionTitle>第140回明大祭 最終決算報告</SectionTitle>
                <Text moreTopPadding>昨年度行われた第140回明大祭開催のため、第140回明大祭実行委員会が行った活動における収支報告になります。</Text>
                <Text moreTopPadding>第140回明大祭にあたり、ご支援してくださった方々をはじめ、明大祭に関わってくださったすべての方々に感謝を申し上げるとともに、第140回明大祭実行委員会は会計の透明性を確保し、活動にご理解いただけるよう努めてまいります。</Text>
                <Text moreTopPadding>詳細は以下をご覧いただくとともに、添付してあるpdfデータもご確認ください。</Text>
            </PageContainer>
            <SectionTitle>収入</SectionTitle>
            <Table data={incomeData} />
            <SectionTitle>支出</SectionTitle>
            <Table data={expenseData} />
        </div>
    )
}

function Table({ data }: { data: TableData[] }) {
    return (
        <div className="w-[23rem] my-4 mx-auto overflow-x-auto">
            <table className="w-full table-auto border-collapse border-2 border-black shadow-md">
                <thead className="bg-secondary text-white border-b-2 border-black">
                    <tr>
                        <th className="px-2 sm:px-3 md:px-4 py-2 md:py-3 w-60 text-center font-bold text-xs sm:text-sm md:text-base border-r border-black">
                            科目
                        </th>
                        <th className="px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center font-bold text-xs sm:text-sm md:text-base">
                            金額 (円)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {data.map((row, index) => (
                        <tr key={index} className="bg-white text-black border-b border-black">
                            <td className="px-2 border-r border-black">{row.item}</td>
                            <td className="text-end px-2">{row.amount.toLocaleString()}</td>
                        </tr>
                    ))} */}
                    {data.map((row, index) => (
                        <tr key={index} className="bg-white text-black border-b border-black">
                            <td className="px-2 border-r border-black">{row.item}</td>
                            <td className="text-end px-2">{row.amount.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="bg-secondary">
                        <td className="px-2 border-r border-black font-bold">計</td>
                        <td className="text-end px-2 font-bold">{data.reduce((sum, row) => sum + row.amount, 0).toLocaleString()}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
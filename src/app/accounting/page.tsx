import PageContainer from "@/components/base/PageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
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
    {
        item: '交通費',
        amount: 97_516,
    },
    {
        item: '通信費',
        amount: 268_833
    },
    {
        item: '備品費',
        amount: 457_868
    },
    {
        item: '郵便費',
        amount: 191_617
    },
    {
        item: '印刷費',
        amount: 1_481_872
    },
    {
        item: '消耗品費',
        amount: 889_373
    },
    {
        item: '渉外費',
        amount: 16_136
    },
    {
        item: '会議運営費',
        amount: 19_220
    },
    {
        item: 'ユニフォーム購入費',
        amount: 668_580
    },
    {
        item: '演出局企画運営費',
        amount: 748_605
    },
    {
        item: '開発局企画運営費',
        amount: 224_424,
    },
    {
        item: '財務局企画運営費',
        amount: 2_450
    },
    {
        item: '渉外局企画運営費',
        amount: 98_719
    },
    {
        item: '総務局企画運営費',
        amount: 25_919
    },
    {
        item: '局外企画運営費',
        amount: 1_291_021
    },
    {
        item: 'ステージ費',
        amount: 7_055_169
    },
    {
        item: '学生部めいじろう賞',
        amount: 107_417
    },
    {
        item: '装飾制作費',
        amount: 765_442
    },
    {
        item: '広報局広報活動費',
        amount: 241_467
    },
    {
        item: '局外広報活動費',
        amount: 1_098_690
    },
    {
        item: 'パンフレット印刷費',
        amount: 3_025_660
    },
    {
        item: '備品レンタル費',
        amount: 1_071_303
    },
    {
        item: 'ガス器具レンタル費',
        amount: 1_030_260
    },
    {
        item: '容器・一斗缶費',
        amount: 630_170
    },
    {
        item: '保険契約費',
        amount: 745_200
    },
    {
        item: '第140回明大祭公式グッズ仕入れ費',
        amount: 849_569
    },
    {
        item: '雑費',
        amount: 74_580
    },
    {
        item: '大学助成金（学生部めいじろう賞）返金',
        amount: 43_000
    },
    {
        item: 'ガス器具レンタル代預り金返金',
        amount: 38_500
    },
    {
        item: '参加団体分担金返金',
        amount: 61_500
    },
    {
        item: '協賛賛助金返金',
        amount: 50_000
    },
    {
        item: '備品レンタル代預り金返金',
        amount: 12_000
    },
    {
        item: '次年度繰越金',
        amount: 5_939_307
    }
]

export default function Page() {
    return (
        <div>
            <PageTitle>最終決算報告</PageTitle>
            <PageContainer>
                <SectionTitle>第140回明大祭 最終決算報告</SectionTitle>
                <Text moreTopPadding>2024年に行われた第140回明大祭開催のため、第140回明大祭実行委員会が行った活動における収支報告になります。</Text>
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
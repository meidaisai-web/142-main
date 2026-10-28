import CloudPageContainer from "@/components/base/CloudPageContainer"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import { List, ListItem } from "@/components/texts/List"
import SmallTitle from "@/components/texts/SmallTitle"
import { ReactNode } from "react"
import TransitionLink from "@/components/buttons/TransitionLink"

const page = () => {
    const visitorsRules = [
        {
            title: "大学構内への入構について",
            content: "ご来場の際は、徒歩または公共交通機関をご利用ください。自動車・自転車でのご来校はご遠慮いただいております。明大祭当日は、キャンパス内の駐車場・駐輪場はご利用いただけません。また、近隣の飲食店や商業施設の駐車場・駐輪場への駐車・駐輪もご遠慮くださいますようお願いいたします。"
        },
        {
            title: "飲酒、酒類の持ち込みおよび販売・配布",
            content: "明治大学では、飲酒、酒類の持ち込みおよび販売・配布が禁止となっております（ノンアルコール飲料も含む）。また、飲酒者の大学構内への入場も禁止しております。飲酒者を大学構内で発見した場合、退構誘導をさせていただきます。"
        },
        {
            title: "喫煙について",
            content: <>明大祭では指定場所以外での喫煙を禁止しております。キャンパス周辺の路上や公園などにおける喫煙はご遠慮ください。<br />喫煙される方は体育館連絡ブリッジ横に設置されております喫煙所をご利用ください。詳しい場所は、<TransitionLink href="/map">キャンパスマップ</TransitionLink>にてご確認いただけます。</>,
        },
       {
           title: "立ち入り禁止エリアについて",
           content: <>キャンパス内には安全面を考慮して立ち入りを禁止しているエリアがございます。このエリアへは立ち入らないようお願いいたします。詳しい場所は、<TransitionLink href="/map">キャンパスマップ</TransitionLink>にてご確認いただけます。</>,
        },
        {
            title: "ペットについて",
            content: "ペットを連れてのご入場はお断りしております。ただし、補助犬を連れてのご入場は可能となっております。"
        },
        {
            title: "明大祭実行委員会が許可していない活動",
            content: "明大祭実行委員会の許可を得ていない団体・個人の明治大学和泉キャンパス内における活動を一切禁止しております。また、政治活動や宗教活動は禁止しております。"
        },
        {
            title: "SNS上の特定団体の誹謗中傷について",
            content: "明大祭に参加している特定の団体や個人に対するSNS上での誹謗中傷はお控えください。"
        },
        {
            title: "悪天候時の対応",
            content: "悪天候の際は、一部の企画、または明大祭自体を中止することがございます。あらかじめご了承ください。"
        },
        {
            title: "緊急時の対応",
            content: "災害の発生など緊急の際は、明大祭実行委員会の指示に従い、落ち着いて行動するようお願いいたします。"
        }
    ]

    const helpItems = [
        {
            title: "ATMについて",
            content: <>大学構内にあるATMは以下のとおりです。<br />
                <ATMTable />
            </>
        },
        {
            title: "休憩所",
            content: <>キャンパス内には休憩所を設けております。お食事などの際にご利用ください。詳しい場所は、<TransitionLink href="/map">キャンパスマップ</TransitionLink>にてご確認いただけます。</>,
        },
        {
            title: "落とし物",
            content: "落とし物をした際は、和泉図書館前の総合インフォメーションまでお問い合わせください。また落とし物を見つけた際は、お近くの明大祭実行委員までお声掛けください。"
        },
        {
            title: "不審者・不審物",
            content: "不審者・不審物を見かけた際は、お近くの明大祭実行委員までお声掛けください。"
        },
        {
            title: "迷子",
            content: "お連れ様とはぐれてしまった際は、和泉図書館前の総合インフォメーションまでお問い合わせください。また、迷子を見つけた際は、お近くの明大祭実行委員までお声掛けください。"
        },
        {
            title: "ケガ・体調不良",
            content: "ケガ・体調不良の際は、第一校舎2階の診療所や休憩所をご利用ください。またご不明の際はお近くの明大祭実行委員にお声掛けしていただければ診療所・休憩所までご案内いたします。"
        },
        {
            title: "悪質な宣伝・勧誘活動",
            content: "悪質な宣伝・勧誘を受けた際は、お近くの明大祭実行委員までお声掛けください。"
        }
    ] 

    return (
        <div>
            <CloudPageContainer>
            <PageTitle>ご来場のみなさまへ</PageTitle>
                <SectionTitle>
                  ご来場のみなさまへのお願い
                </SectionTitle>
                <Text>
                  第142回明大祭では、ご来場のみなさまに快適に楽しんでいただけるよう下記のルールを設けております。場合によっては明大祭実行委員からお声掛けさせていただくことがございます。また、状況に応じて退構を求める場合もございますので、あらかじめご了承ください。
                </Text>
                {visitorsRules.map((rule, index) => (
                    <RuleItem key={index} title={rule.title}>
                        {rule.content}
                    </RuleItem>
                ))}
                <List mark="※">
                    <ListItem>上記の他、公序良俗に反する行為、他のご来場のみなさまのご迷惑になる行為はご遠慮ください。</ListItem>
                </List>
                <SectionTitle className="mt-20">
                    お困りの際は
                </SectionTitle>
                {helpItems.map((item, index) => (
                    <RuleItem
                        key={index}
                        title={item.title}
                    >
                        {item.content}
                    </RuleItem>
                ))} 
                <List mark="※">
                    <ListItem>
                        お困りの際は、お近くのインフォメーションブース、または明大祭実行委員までお気軽にお声掛けください。
                    </ListItem>
                </List>
            </CloudPageContainer>
        </div>
    )
}

interface RuleItemProps {
    title: string
    children: ReactNode
}

const RuleItem = ({ title, children }: RuleItemProps) => {
    return (
        <div>
            <SmallTitle>
                {title}
            </SmallTitle>
            <Text>
                {children}
            </Text>
        </div>
    )
}
function ATMTable() {
    const columns = [
        "金融機関名\n（設置場所）",
        "日付",
        "稼働時間"
    ]
    const rows = [
        { bank: "三井住友銀行", location: "第一校舎1階", time: {date: "10月30日(金)", time: "9:00〜18:00"} },
        { time: {date: "10月31日(土)", time: "9:00〜13:00"} },
        { time: {date: "11月1日(日)", time: "休止"} },
        { bank: "ゆうちょ銀行", location: "メディア棟1階", time: {date: "10月30日(金)", time: "9:00〜19:00"} },
        { time: {date: "10月31日(土)", time: "9:00〜17:00"} },
        { time: {date: "11月1日(日)", time: "休止"} },
    ]
    return (
        <div className="w-full mt-4 mb-4 overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-slate-400 shadow-md">
                <thead className="bg-secondary text-white">
                    <tr>
                        {columns.map((columns) => (
                            <th key={columns} className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center font-bold text-xs sm:text-sm md:text-base">
                                {columns}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} className="bg-white hover:bg-gray-50 transition-colors">
                            {row.bank && (
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center font-semibold bg-white" rowSpan={3}>
                                    <span className="block text-black text-xs sm:text-sm md:text-base">{row.bank}</span>
                                    <span className="block text-xs sm:text-sm text-gray-600 mt-1">（{row.location}）</span>
                                </td>
                            )}
                            <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center text-xs sm:text-sm md:text-base">{row.time.date}</td>
                            <td className={`border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center font-medium text-xs sm:text-sm md:text-base ${row.time.time === "休止" && "text-primary-900 font-bold"}`}>{row.time.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default page
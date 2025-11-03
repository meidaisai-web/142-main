
import PageTitle from "@/components/texts/PageTitle";
import { FAQAccordion } from "@/components/texts/FAQAccordion";
import TransitionLink from "@/components/buttons/TransitionLink";

export default function Page() {
    const faqList = [
        { question: "明大祭の開催時間は何時から何時までですか。",
          answer: "開場が10：00、開演時間が10：00〜18：00です。"
        },
        {
            question: "入場に際してチケットや予約は必要ですか。",
            answer: "入場は無料ですので、チケットや予約は必要ありません。一部企画ではチケットの事前購入が必要な場合があります。"
        },
        {
            question: "企画の入場制限はありますか。",
            answer: <>企画によっては入場制限を設ける場合がございます。詳しくは、こちらの<TransitionLink href="/search">｢企画を探す｣</TransitionLink>ページよりご確認ください。</>
        },
        {
            question: "雨天時でも明大祭は開催しますか。",
            answer: "開催いたします。ただし、豪雨の際などは中止となる企画がある場合がございます。また、台風や災害の恐れがある際は開催が中止となる場合がございます。その際は大学公式サイト、第141回明大祭公式サイトおよび各種公式SNSでお知らせをする予定です。"
        },
        {
            question: "公式パンフレットはもらえますか。",
            answer: <>インフォメーションブース付近にて配布しております。インフォメーションブースの場所は、<TransitionLink href="/map">こちらのページ</TransitionLink>にてキャンパスマップをご確認ください。また、サイト上で<TransitionLink href="/pamphlet">電子パンフレット</TransitionLink>も公開しておりますので、あわせてご利用ください。</>
        },
        {
            question: "大学構内にATMはありますか。",
            answer: <>大学構内にあるATMは以下のとおりです。<br />
                <ATMTable />
            </>
        },
        {
            question: "入試案内はどこにありますか。",
            answer: <>大学ガイドブック・学部ガイドブックは第141回明大祭で行われている受験生応援企画教室（メディア棟4階Aラウンジ、M402・M403教室）に置かれています。企画の詳細は
                <TransitionLink href="/love">こちらのページ</TransitionLink>
                をご覧ください。<br/>また、大学公式サイトで電子版が公開されているので、そちらもご覧ください。</>
        },
        {
            question: "会場でキャッシュレス決済は可能ですか。",
            answer: <>一部模擬店・教室企画でキャッシュレス決済が利用できます。キャッシュレス対応店舗・ブランドについては<TransitionLink href="/cashless">こちらのページ</TransitionLink>をご覧ください。</>
        },
        {
            question: "キャンパス内で飲食は可能ですか。",
            answer: <>可能です。休憩所がございますので、飲食の際はそちらをご利用ください。休憩所の場所は、<TransitionLink href="/map">こちらのページ</TransitionLink>にてキャンパスマップをご確認ください。</>
        },
        {
            question: "食堂は営業していますか。",
            answer: "明大祭期間中、1階と2階の一部のみ11時から14時まで営業しております。ラストオーダーは13：30です。また、営業終了後は休憩所としてご利用いただけます。"
        },
        {
            question: "コンビニエンスストアはありますか。",
            answer: "キャンパス内に｢ファミリーマート明大マート和泉店｣がございます。ただし、商品数を減らして営業している場合がございますので、あらかじめご了承ください。"
        },
        {
            question: "駐車場はありますか。",
            answer: "ご用意しておりません。近隣駐車場の混雑が予想されるため、電車やバスなどの公共交通機関でのご来場をお願いしております。"
        },
        {
            question: "飲酒は可能ですか。",
            answer: "大学構内はノンアルコール飲料を含め、酒類の持ち込み・飲酒行為は禁止しております。ご了承ください。"
        },
        {
            question: "ペットの入構は可能ですか。",
            answer: "申し訳ございませんが、ペットを連れての入場はご遠慮いただいております。なお、補助犬については同伴可能です。"
        }
    ]
    return (
        <div className="bg-primary">
            <PageTitle className="mb-5">よくある質問</PageTitle>
            {faqList.map((faq) => (
                <FAQAccordion key={faq.question} question={faq.question}>
                    {faq.answer}
                </FAQAccordion>
            ))}
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
        { bank: "三井住友銀行", location: "第一校舎1階", time: {date: "11月1日(土)", time: "9：00〜13：00"} },
        { time: {date: "11月2日(日)", time: "休止"} },
        { time: {date: "11月3日(月・祝)", time: "休止"} },
        { bank: "ゆうちょ銀行", location: "メディア棟1階", time: {date: "11月1日(土)", time: "9：00〜17：00"} },
        { time: {date: "11月2日(日)", time: "休止"} },
        { time: {date: "11月3日(月・祝)", time: "休止"} }
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
                            <td className={`border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center font-medium text-xs sm:text-sm md:text-base ${row.time.time === "休止" && "text-primary"}`}>{row.time.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
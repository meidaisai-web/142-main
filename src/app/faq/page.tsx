
import PageTitle from "@/components/texts/PageTitle";
import { FAQAccordion } from "@/components/texts/FAQAccordion";
import TransitionLink from "@/components/buttons/TransitionLink";

export default function Page() {
    return (
        <div className="bg-primary">
            <PageTitle className="mb-5">よくある質問</PageTitle>
            <FAQAccordion question="明大祭の開催時間は何時から何時までですか。">
                開場が10：00、開催時間が10：00〜18：00です。
            </FAQAccordion>
            <FAQAccordion question="入場に際してチケットや予約は必要ですか。">
                入場は無料ですので、チケットや予約は必要ありません。一部企画ではチケットの事前購入が必要な場合があります。
            </FAQAccordion>
            <FAQAccordion question="企画の入場制限はありますか。">
                企画によっては入場制限を設ける場合がございます｡詳しくは､こちらの<TransitionLink href="/search">｢企画を探す｣</TransitionLink>ページよりご確認ください｡
            </FAQAccordion>
            <FAQAccordion question="雨天時でも明大祭は開催しますか。">
                開催いたします｡ただし､豪雨の際などは中止となる企画がある場合がございます｡また､台風や災害の恐れがある際は開催が中止となる場合がございます｡その際は大学公式サイト、第141回明大祭公式サイトおよび各種公式SNSでお知らせをする予定です｡
            </FAQAccordion>
            <FAQAccordion question="公式パンフレットはもらえますか。">
                インフォメーションブース付近にて配布しております。インフォメーションブースの場所は、<TransitionLink href="/map">こちらのページ</TransitionLink>にてキャンパスマップをご確認ください。また、サイト上で<TransitionLink href="/pamphlet">電子パンフレット</TransitionLink>も公開しておりますので、あわせてご利用ください。
            </FAQAccordion>
            <FAQAccordion question="大学構内にATMはありますか。">
                大学構内にあるATMは以下のとおりです｡<br />
                <div className="w-full mt-4 mb-4 overflow-x-auto">
                    <table className="w-full table-auto border-collapse border border-slate-400 shadow-md">
                        <thead className="bg-secondary text-white">
                            <tr>
                                <th className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center font-bold text-xs sm:text-sm md:text-base">
                                金融機関名<br />（設置場所）
                                </th>
                                <th className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center font-bold text-xs sm:text-sm md:text-base">
                                日付
                                </th>
                                <th className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center font-bold text-xs sm:text-sm md:text-base">
                                稼働時間
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* 三井住友銀行 */}
                            <tr className="bg-white hover:bg-gray-50 transition-colors">
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center font-semibold bg-white" rowSpan={3}>
                                <span className="block text-black text-xs sm:text-sm md:text-base">三井住友銀行</span>
                                <span className="block text-xs sm:text-sm text-gray-600 mt-1">(第一校舎1階)</span>
                                </td>
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center text-xs sm:text-sm md:text-base">11月1日(土)</td>
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center font-medium text-xs sm:text-sm md:text-base">9：00〜13：00</td>
                            </tr>
                            <tr className="bg-white hover:bg-gray-50 transition-colors">
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center text-xs sm:text-sm md:text-base">11月2日(日)</td>
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center text-red-600 font-medium text-xs sm:text-sm md:text-base">未定</td>
                            </tr>
                            <tr className="bg-white hover:bg-gray-50 transition-colors">
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center text-xs sm:text-sm md:text-base">11月3日(月・祝)</td>
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center text-red-600 font-medium text-xs sm:text-sm md:text-base">未定</td>
                            </tr>
                            {/* ゆうちょ銀行 */}
                            <tr className="bg-white hover:bg-gray-50 transition-colors">
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center font-semibold bg-white" rowSpan={3}>
                                <span className="block text-black text-xs sm:text-sm md:text-base">ゆうちょ銀行</span>
                                <span className="block text-xs sm:text-sm text-gray-600 mt-1">(メディア棟1階)</span>
                                </td>
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center text-xs sm:text-sm md:text-base">11月1日(土)</td>
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center font-medium text-xs sm:text-sm md:text-base">9：00〜17：00</td>
                            </tr>
                            <tr className="bg-white hover:bg-gray-50 transition-colors">
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center text-xs sm:text-sm md:text-base">11月2日(日)</td>
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center text-red-600 font-medium text-xs sm:text-sm md:text-base">休止</td>
                            </tr>
                            <tr className="bg-white hover:bg-gray-50 transition-colors">
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center text-xs sm:text-sm md:text-base">11月3日(月・祝)</td>
                                <td className="border border-slate-300 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-center text-red-600 font-medium text-xs sm:text-sm md:text-base">休止</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </FAQAccordion>
            <FAQAccordion question="入試案内はどこにありますか。">
                大学ガイドブックは正門付近の守衛所脇にご用意しております｡ご自由にお取りください｡また､第141回明大祭では受験生応援企画を行っています｡詳しくは<TransitionLink href="/love">こちらのページ</TransitionLink>をご覧ください｡
            </FAQAccordion>
            <FAQAccordion question="キャンパス内で飲食は可能ですか。">
                可能です｡休憩所がございますので､飲食の際はそちらをご利用ください｡休憩所の場所は､ <TransitionLink href="/map">こちらのページ</TransitionLink>にてキャンパスマップをご確認ください｡
            </FAQAccordion>
            <FAQAccordion question="食堂は営業していますか。">
                明大祭期間中、1階と2階の一部のみ11時から14時まで営業しております。ラストオーダーは13：30でございます。また、営業終了後は休憩所としてご利用いただけます。
            </FAQAccordion>
            <FAQAccordion question="コンビニエンスストアはありますか。">
                キャンパス内に｢ファミリーマート明大マート和泉店｣がございます｡ただし､商品数を減らして営業している場合がございますので､あらかじめご了承ください。
            </FAQAccordion>
            <FAQAccordion question="駐車場はありますか。">
                ご用意しておりません｡電車やバスなどの公共交通機関でのご来場をお願いしております｡
            </FAQAccordion>
            <FAQAccordion question="飲酒は可能ですか。">
                大学構内はノンアルコール飲料を含め､酒類の持ち込み・飲酒行為は禁止しております｡ご了承ください｡
            </FAQAccordion>
            <FAQAccordion question="ペットの入構は可能ですか。">
                申し訳ございませんが､ペットを連れての入場はご遠慮いただいております｡なお､補助犬については同伴可能です｡
            </FAQAccordion>
        </div>
    )
}

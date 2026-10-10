import Trump from "@/components/faq/FAQ";
import CloudPageContainer from "@/components/base/CloudPageContainer";
import PageTitle from "@/components/texts/PageTitle";
import Text from "@/components/texts/Text";
import TransitionLink from "@/components/buttons/TransitionLink";

const questions = [
    {
        question: "明大祭の開催時間は何時から何時までですか。",
        answer: "開場が11:00、開演時間が11:00〜18:00です。",
    },
    {
        question: "入場に際してチケットや予約は必要ですか。",
        answer:
            "入場は無料ですので、チケットや予約は必要ありません。一部企画ではチケットの事前購入が必要な場合があります。",
    },
    {
        question: "企画の入場制限はありますか。",
        answer:
            <>企画によっては入場制限を設ける場合がございます。詳しくは、こちらの<TransitionLink href="/search">企画を探す</TransitionLink>ページよりご確認ください。</>,
    },
    {
        question: "雨天時でも明大祭は開催しますか。",
        answer:
            "開催いたします。ただし、豪雨の際などは中止となる企画がある場合がございます。また、台風や災害の恐れがある際は開催が中止となる場合がございます。その際は大学公式サイト、第142回明大祭公式サイトおよび各種公式SNSでお知らせをする予定です。",
    },
    {
        question: "公式パンフレットはもらえますか。",
        answer:
            <>インフォメーションブース付近にて配布しております。インフォメーションブースの場所は、<TransitionLink href="/campusmap">こちらのページ</TransitionLink>にてキャンパスマップをご確認ください。また、サイト上で<TransitionLink href="/pamphlet">電子パンフレット</TransitionLink>も公開しておりますので、あわせてご利用ください。</>
    }
    ,
    {
        question: "大学構内にATMはありますか。",
        answer:
            <>大学構内にあるATMは<TransitionLink href="/announce">こちらのページ</TransitionLink>をご確認ください。</>
    },
        
    {
        question: "入試案内はどこにありますか。",
        answer:
            <>大学ガイドブック・学部ガイドブックは第142回明大祭で行われている和泉ラーニングスクエアLS304・LS305教室、3階和泉ラーニングサポートベースに置かれています。企画の詳細は<TransitionLink href="/wakuwaku">こちらのページ</TransitionLink>をご覧ください。また、大学公式サイトで電子版が公開されているので、そちらもご覧ください。</>
    },
    {
        question: "会場でキャッシュレス決済は可能ですか。",
        answer:
            <>一部模擬店でキャッシュレス決済が利用できます。キャッシュレス対応店舗・ブランドについては<TransitionLink href="/cashless">こちらのページ</TransitionLink>をご覧ください。</>
    },
    {
        question: "キャンパス内で飲食は可能ですか。",
        answer:
            <>可能です。休憩所がございますので、そちらをご利用ください。休憩所の場所は、<TransitionLink href="/campusmap">こちらのページ</TransitionLink>にてキャンパスマップをご確認ください。</>
    },
    {
        question: "食堂は営業していますか。",
        answer:
            "明大祭期間中、1階と2階の一部のみ11時から14時まで営業しております。食券可能時間は11：00～13：30です。また、営業終了後は1階は15:30まで、2階は17:00まで休憩所としてご利用いただけます。",
    },
    {
        question: "コンビニエンスストアはありますか。",
        answer:
            "キャンパス内に「ファミリーマート明大マート和泉店」がございます。ただし、商品数を減らして営業している場合がございますので、あらかじめご了承ください。",
    },
    {
        question: "駐車場はありますか。",
        answer:
            "ご用意しておりません。近隣駐車場の混雑が予想されるため、電車やバスなどの公共交通機関でのご来場をお願いしております。",
    },
];

export default function Page() {
  return (
    <CloudPageContainer>
        <PageTitle>よくある質問</PageTitle>
        <Text>お困りの際は、お近くの紫紺の法被を着た明大祭実行委員会にお声かけください。</Text>
        <Trump questions={questions} />
    </CloudPageContainer>
  );
}

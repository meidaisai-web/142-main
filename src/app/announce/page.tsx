import PageContainer from "@/components/base/PageContainer"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import { List, ListItem } from "@/components/texts/List"
import SmallTitle from "@/components/texts/SmallTitle"

const page = () => {

    //「ご来場のみなさまへのお願い」に書く内容を以下に記述してください。
    const visitorsRules = [
        {
            title: "飲酒､酒類の持ち込みおよび販売・配布",
            content: "明治大学では､飲酒､酒類の持ち込みおよび販売・配布が禁止となっております（ノンアルコール飲料も含む）｡また､飲酒者の大学構内への入場も禁止しております｡飲酒者を大学構内で発見した場合､退構誘導をさせていただきます｡"
        },
        {
            title: "喫煙について",
            content: "今年度の明大祭は､指定場所以外での喫煙を禁止しております｡第三校舎跡地前に設置されております喫煙所をご利用ください｡詳しい場所は､こちらのページにてキャンパスマップをご確認ください｡また､キャンパス周辺の路上や公園などにおける喫煙もご遠慮ください｡"
        },
        {
            title: "立ち入り禁止エリアについて",
            content: "キャンパス内には安全面を考慮して立ち入りを禁止しているエリアがございます｡このエリアへは立ち入らないようお願いいたします｡"
        },
        {
            title: "ペットについて",
            content: "ペットを連れてのご入場はお断りしております｡ただし､補助犬を連れてのご入場は可能となっております｡"
        },
        {
            title: "明大祭実行委員会が許可していない活動",
            content: "明大祭実行委員会の許可を得ていない団体・個人の明治大学和泉キャンパス内における活動を一切禁止しております｡また､政治セクトなどの政治活動や宗教活動は禁止しております｡"
        },
        {
            title: "SNS上の特定団体の誹謗・中傷について",
            content: "明大祭に参加している特定の団体や個人に対するSNS上での誹謗・中傷はお控えください｡"
        },
        {
            title: "悪天候時の対応",
            content: "悪天候の際は､一部の企画､または明大祭自体を中止することがございます｡あらかじめご了承ください｡"
        },
        {
            title: "緊急時の対応",
            content: "災害の発生など緊急の際は､明大祭実行委員会の指示に従い､落ち着いて行動するようお願いいたします｡"
        }
    ]

    //「お困りの際は」に書く内容を以下に記述してください。
    const helpItems = [
        {
            title: "休憩所",
            content: "キャンパス内には休憩所を設けております｡お食事などの際にご利用ください｡詳しい場所は､こちらのページにてキャンパスマップをご確認ください｡"
        },
        {
            title: "落とし物",
            content: "落とし物をした際は､和泉図書館前の総合インフォメーションまでお問い合わせください｡また落とし物を見つけた際は､お近くの明大祭実行委員までお声掛けください｡"
        },
        {
            title: "不審者・不審物",
            content: "不審者・不審物を見かけた際は､お近くの明大祭実行委員までお声掛けください｡"
        },
        {
            title: "迷子",
            content: "お連れ様とはぐれてしまった際は､和泉図書館前の総合インフォメーションまでお問い合わせください｡また､迷子を見つけた際は､お近くの明大祭実行委員までお声掛けください｡"
        },
        {
            title: "ケガ・体調不良",
            content: "ケガ・体調不良の際は､第一校舎2階の診療所や休憩所をご利用ください｡またご不明の際はお近くの明大祭実行委員にお声掛けしていただければ診療所・休憩所までご案内いたします｡"
        },
        {
            title: "悪質な宣伝・勧誘活動",
            content: "悪質な宣伝・勧誘を受けた際は､お近くの明大祭実行委員までお声掛けください｡"
        }
    ]

    return (
        <div>
            <PageTitle>ご来場のみなさまへ</PageTitle>
            <PageContainer>

                <SectionTitle className="m-10">
                    ご来場のみなさまへのお願い
                </SectionTitle>

                <Text className="m-10">
                    第141回明大祭では､ご来場のみなさまに快適に楽しんでいただけるよう下記のルールを設けております｡場合によっては明大祭実行委員からお声掛けさせていただくことがございます｡また､状況に応じて退構を求める場合もございますので､あらかじめご了承ください｡
                </Text>

                {visitorsRules.map((rule, index) => (
                    <RuleItem
                        key={index}
                        title={rule.title}
                        content={rule.content}
                    />
                ))}

                <List mark="※" className="m-20">
                    <ListItem>上記の他､公序良俗に反する行為､他のご来場のみなさまのご迷惑になる行為はご遠慮ください｡</ListItem>
                </List>

                <SectionTitle className="m-10">
                    お困りの際は
                </SectionTitle>

                {helpItems.map((item, index) => (
                    <RuleItem
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))}

                <List mark="※" className="m-20">
                    <ListItem>
                        お困りの際は､お近くのインフォメーションブース､または紫紺の法被を着た明大祭実行委員までお気軽にお声掛けください｡
                    </ListItem>
                </List>

            </PageContainer>
        </div>
    )
}

interface RuleItemProps {
    title: string
    content: string
}

const RuleItem = ({ title, content }: RuleItemProps) => {
    return (
        <div>
            <div className="m-10" />
            <SmallTitle>
                {title}
            </SmallTitle>
            <Text>
                {content}
            </Text>
        </div>
    )
}

export default page
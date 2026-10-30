import PageTitle from "@/components/texts/PageTitle"
import PageContainer from "@/components/base/PageContainer"
import OnlyImage from "@/components/OnlyImage"
import {List} from "@/components/texts/List"
import {ListItem} from "@/components/texts/List"
import Link from "next/link"
import SmallTitle from "@/components/texts/SmallTitle"
import Text from "@/components/texts/Text";
import SectionTitle from "@/components/texts/SectionTitle";

export default function Page() {
    return (
        <div>
            <PageTitle>第142回明大祭公式パンフレット</PageTitle>
            <PageContainer>
                <List mark="※" className="mt-10">
                    <ListItem>画像をクリックすると別タブで表示されます｡</ListItem>
                </List>
                <div className="bg-white rounded-2xl p-4 mt-8 max-w-lg mx-auto">
                    <Link href="https://asset.meidaisai.jp/142-pamphlet.pdf" target="_blank">
                        <OnlyImage src="/images/142-pamphlet-front.jpg" alt="第142回明大祭公式パンフレット表紙" height={699} />
                    </Link>
                </div>
                <SectionTitle>第142回明大祭パンフレットの訂正とお詫び</SectionTitle>
                    <Text className="pt-8">
                        本日は第142回明大祭にご来場いただき、誠にありがとうございます。<br />
                        お手持ちのパンフレットと電子パンフレットにおきまして、下記の通り訂正がございます。<br />
                        ご来場みなさま、並びに関係者各所のみなさまには大変ご迷惑をおかけしてしまい、申し訳ありません。<br/>
                        なお、訂正情報につきましては、一部を簡略化して記載する場合がございます。<br/>
                        ご了承いただければ幸いです。
                    </Text>
                <SmallTitle>キャンパスマップについて</SmallTitle>
                  <Text>p.01に記載のキャンパスマップには和泉図書館内にごみステーションのアイコンがございますが、このごみステーションは今回ございません。ご確認ください。</Text>
                <SmallTitle>明大祭公式グッズについて</SmallTitle>
                    <Text>p.31記載の明大祭公式グッズに関して、電子パンフレットの記載のみ、ガチャガチャ1回の値段が間違っておりました。情報は下記のものが正しいものとなっております。ご確認下さい。<br/>
                      【訂正前】350円<br/>
                      【訂正後】100円
                    </Text>
                <SmallTitle>和泉図書館休憩所について</SmallTitle>
                    <Text>p.01に記載のキャンパスマップには和泉図書館内に休憩所のアイコンがございますが、この休憩所は今回使用できません。ご確認ください。</Text>
            </PageContainer>
        </div>
    )
}
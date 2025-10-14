import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import { List, ListItem, ListText } from '@/components/texts/List'
import PageContainer from "@/components/base/PageContainer"
import ContactView from "@/components/texts/ContactView"
import Emphasis from "@/components/texts/Emphasis"
import OnlyImage from 'next/image'
import SmallTitle from "@/components/texts/SmallTitle"
export default function Page() {
    return (
        <>
            <PageTitle>明大祭公式グッズ</PageTitle>
            <PageContainer>
                <Text className="mt-20">昨年大好評につき、今年も明大祭公式グッズの販売が決定いたしました！ご来場記念にぜひお買い求めください！</Text>
                <SectionTitle>ラインナップ</SectionTitle>
                <Text className="mt-10">
                    ガチャガチャ　缶バッジ（全6種内1種シークレット）　1回100円
                </Text>
                <OnlyImage
                    src="/images/goods/badge.jpg"
                    alt="めいじろう缶バッジ一覧_01"
                    width={1700}
                    height={500}
                    className="w-full max-w-lg mt-4 mb-15"
                />
                <Text> ボールペン　250円</Text>
                <OnlyImage
                    src="/images/goods/pen.jpg"
                    alt="ボールペン_02"
                    width={1700}
                    height={500}
                    className="w-full max-w-lg mt-4 mb-15"
                />
                <Text>ラバーバンド　各200円</Text>
                <OnlyImage
                    src="/images/goods/band.jpg"
                    alt="ラバーバンド一覧_03"
                    width={1700}
                    height={500}
                    className="w-full max-w-lg mt-4 mb-15"
                />
                <Text>クリアファイル　各200円</Text>
                <OnlyImage
                    src="/images/goods/file3.jpg"
                    alt="めいじろうクリアファイル(パンフレット表紙)_04"
                    width={1700}
                    height={500}
                    className="w-full max-w-lg mt-4"
                />
                <OnlyImage
                    src="/images/goods/file1.jpg"
                    alt="めいじろうクリアファイル(蒼炎)_05"
                    width={1700}
                    height={500}
                    className="w-full max-w-lg my-10"
                />
                <OnlyImage
                    src="/images/goods/file2.jpg"
                    alt="めいじろうクリアファイル(軌光)_06"
                    width={1700}
                    height={500}
                    className="w-full max-w-lg mb-15"
                />
                <Text>アクリルキーホルダー　350円</Text>
                <OnlyImage
                    src="/images/goods/acrylic.jpg"
                    alt="めいじろうアクリルキーホルダー_07"
                    width={1700}
                    height={500}
                    className="w-full max-w-xs mt-4 mb-15"
                />
                <Text>絵馬型キーホルダー　350円</Text>
                <OnlyImage
                    src="/images/goods/ema.jpg"
                    alt="絵馬型キーホルダー_08"
                    width={1700}
                    height={500}
                    className="w-full max-w-xs mt-4 mb-15"
                />
                <Text>※画像はイメージです。</Text>
                <SectionTitle>販売詳細</SectionTitle>
                <SmallTitle>販売日時</SmallTitle>
                <Text>2025年11月1日(土).2日(日).3日(月・祝)10：00～18：00（3日間共通）</Text>
                <SmallTitle>販売場所</SmallTitle>
                <Text>明治大学和泉キャンパス明大祭公式グッズ販売ブース（和泉図書館前）</Text>
                <SectionTitle>注意事項</SectionTitle>
                <List className="mt-8" mark="・">
                    <ListItem>お支払いは<Emphasis>現金・キャッシュレス</Emphasis>に対応しております。</ListItem>
                    <OnlyImage
                        src="/images/goods/payment.jpg"
                        alt="キャッシュレス決済一覧_09"
                        width={1700}
                        height={500}
                        className="w-full max-w-xs mt-4 mb-10"
                    />
                    <ListItem>商品がなくなりしだい終了となります。</ListItem>
                    <ListItem>不良品以外返品・交換はできません。</ListItem>
                    <ListItem>購入後、アンケートに回答していただいた方には、実行委員主催の抽選企画の抽選券をお渡しいたします。</ListItem>
                </List>
                <ContactView department="制作局　明大祭公式グッズチーム" mail="141-st goodsteam@meidaisai.jp" showPhone showAddress />
            </PageContainer>
        </>
    )
}

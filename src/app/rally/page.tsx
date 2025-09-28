import Text from '@/components/texts/Text'
import SectionTitle from '@/components/texts/SectionTitle'
import ContactView from '@/components/texts/ContactView'
import PageTitle from '@/components/texts/PageTitle'
import SmallTitle from '@/components/texts/SmallTitle'
import AccentText from '@/components/texts/AccentText'
import Emphasis from '@/components/texts/Emphasis'
import PageContainer from '@/components/base/PageContainer'
import TransitionLink from '@/components/buttons/TransitionLink'
import Image from 'next/image'
export default function Page() {
    return (
        <div>
            <PageTitle>跡巡～あとめぐ～</PageTitle>
            <PageContainer>
                <SectionTitle>企画概要</SectionTitle>
                <Text className='mt-6'>
                    <Emphasis>キャンパス内に隠された謎。解いてまわって、事件の真相を暴け！</Emphasis>
                </Text>
                <Text>
                    キャンパスをまわるなら”コレ”謎解きクイズラリー！！
                    <Emphasis>謎解きクイズラリー！！</Emphasis>
                    謎やクイズを解きながらキャンパス全体をまわれます！ゴールした先には素敵な景品があるかも…？
                </Text>
                <Text>
                    抽選券対象の実行委員会企画！！みなさまの挑戦をお待ちしております！
                </Text>
                <SmallTitle className='mt-8'>
                    ストーリー
                </SmallTitle>
                <Text>
                    ある男が落とした紙に、何故か自分と友人の顔が載っていた…。不思議に思っていた矢先、突然友人が失踪する。メッセージや痕跡を手掛かりに、失踪した友人の謎を解き明かせ！
                </Text>
                <SectionTitle>
                    企画実施日時
                </SectionTitle>
                <SmallTitle>
                    日時
                </SmallTitle>
                <Text>
                    11月1日(土),2日(日)10：00～18：00
                </Text>
                <Text>11月3日(月・祝)10：00～17：00</Text>
                <SmallTitle>参加方法</SmallTitle>
                <Text className='mb-5 '>以下のリンクやQRコードから跡巡～あとめぐ～公式LINEを追加してご参加できます！</Text>
                <TransitionLink href="https://lin.ee/DSR9K4J">
                    跡巡～あとめぐ～公式LINE QRコード
                </TransitionLink>
                <Image
                    src="/images/rally_lineqr.jpg"
                    alt="跡巡～あとめぐ～公式LINE QRコード"
                    className='mt-8 mb-3 max-w-[150px] h-auto w-full'
                    width={800}
                    height={600} />
                <AccentText>謎解き制作協力団体</AccentText>
                <Text>明治大学謎解きサークルSHERLOCK</Text>
                <AccentText>例題</AccentText>
                <Text className='mt-3'>答えは明大祭で！</Text>
                <Image
                    src="/images/rally_example.jpg"
                    alt="跡巡～あとめぐ～サイト用例題"
                    className='mt-3 mb-3 max-w-sm h-auto w-full'
                    width={800}
                    height={600}
                />
                <AccentText>お問い合わせ</AccentText>
                <Text>本祭期間外におけるお問い合わせは、下記のお問い合わせ先までご連絡をお願いいたします。</Text>
                <Text>本祭期間中は和泉図書館前企画受付までお越しください。</Text>
                <ContactView department="開発局 想越部門" mail="141st-souetsu@meidaisai.jp" showPhone showAddress />




            </PageContainer>
        </div>

    )
}
import Text from '@/components/texts/Text'
import SectionTitle from '@/components/texts/SectionTitle'
import ContactView from '@/components/texts/ContactView'
import PageTitle from '@/components/texts/PageTitle'
import SmallTitle from '@/components/texts/SmallTitle'
import Emphasis from '@/components/texts/Emphasis'
import PageContainer from '@/components/base/PageContainer'
import TransitionLink from '@/components/buttons/TransitionLink'
import OnlyImage from '@/components/OnlyImage'
import LogoImage from '@/components/LogoImage'
export default function Page() {
    return (
        <div>
            <PageTitle>跡巡～あとめぐ～</PageTitle>
            <PageContainer>
                <LogoImage src="/images/kaihatsu/rally.jpg" alt="跡巡～あとめぐ～ ロゴ" className="mt-10" />
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
                <SmallTitle>
                    日時
                </SmallTitle>
                <Text>
                    11月1日(土).2日(日) 10：00～18：00
                </Text>
                <Text>11月3日(月・祝) 10：00～17：00</Text>
                <SmallTitle>参加方法</SmallTitle>
                <Text className='mb-5'>以下のリンクやQRコードから跡巡～あとめぐ～公式LINEを追加してご参加できます！</Text>
                <TransitionLink href="https://lin.ee/DSR9K4J">
                    跡巡～あとめぐ～公式LINE
                </TransitionLink>
                <OnlyImage src='/images/rally_lineqr.jpg' alt='跡巡～あとめぐ～公式LINE QRコード' className='max-w-72 mt-5' />
                <SectionTitle>謎解き制作協力団体</SectionTitle>
                <Text moreTopPadding>明治大学謎解きサークルSHERLOCK</Text>
                <SectionTitle>例題</SectionTitle>
                <Text moreTopPadding>答えは明大祭で！</Text>
                <OnlyImage src='/images/rally_example.jpg' alt='跡巡～あとめぐ～例題' className='max-w-80 mt-3' />
                <SectionTitle>お問い合わせ</SectionTitle>
                <Text moreTopPadding>明大祭期間外におけるお問い合わせは、下記のお問い合わせ先までご連絡をお願いいたします。</Text>
                <Text>明大祭期間中は和泉図書館前企画受付までお越しください。</Text>
                <ContactView department="開発局 想越部門" mail="141st-souetsu@meidaisai.jp" showPhone showAddress />
            </PageContainer>
        </div>
    )
}
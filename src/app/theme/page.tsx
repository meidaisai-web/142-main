import CloudPageContainer from '@/components/base/CloudPageContainer';
import PageTitle from '@/components/texts/PageTitle';
import SectionTitle from '@/components/texts/SectionTitle';
import Text from '@/components/texts/Text';
import SmallTitle from '@/components/texts/SmallTitle';
import Image from 'next/image';

export default function about() {
    return (
         <CloudPageContainer>
            <PageTitle>第142回明大祭テーマ</PageTitle>
            <Text>今年度の明大祭を象徴する第142回明大祭テーマ。テーマはロゴ・コンセプト・カラーの3つの要素から構成されています。<br />
                  テーマに込められている思いを胸に、第142回明大祭を一緒に盛り上げていきましょう！
            </Text>

            <SectionTitle className="mb-10">第142回明大祭コンセプト</SectionTitle>
            <Image src="/images/theme/onlycatchcopy.svg" width={1829} height={1598} alt="キャッチコピー" className="w-150 h-auto mx-auto"/>
            <Text center className="mt-10">胸の鼓動が高鳴る、その一瞬</Text>
            <Text center>熱気と歓声に包まれた舞台の上で、</Text>
            <Text center moreTopPadding>幾つもの青春が重なり合い、</Text>
            <Text center>明大祭を鮮やかに染め上げる。</Text>
            <Text center moreTopPadding>響く音、弾む声、溢れる想い。</Text>
            <Text center>そのすべてがひとつになり、真っ白な五線譜に、希望の旋律を刻んでいく。</Text>
            <Text center moreTopPadding>さあ、私たちの“青春”を響かせよう！</Text>

            <SectionTitle>第142回明大祭ロゴ</SectionTitle>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-10">
              <Image src="/images/theme/onlylogo.svg" width={1829} height={1598} alt="ロゴ" className="w-40 sm:w-50 h-auto shrink-0" />
              <Text>
                   私たちの純粋な情熱が、仲間との出会いや学祭の熱気によって華やかな歓喜へと昇華される。<br />
                   優しさや明かりや希望が、情熱の爆発と私たちを温かく支え、学祭が終わった後も未来を照らし続ける。<br />
                   それらが一つに合わさり、最高に輝く「青春の瞬間」を創造することを願って！<br />
                   青春を謳歌する私たち、明大生の気持ち、私たちを支え寄り添う希望、一人ひとりの鼓動。<br />
                   全体がハート型になることで、祭の一体感や仲間との絆を表しています。
              </Text>
            </div>

            <SectionTitle>第142回明大祭テーマカラー</SectionTitle>
            <SmallTitle>爽律（そうりつ）</SmallTitle>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <Image src="/images/theme/primary.svg" width={500} height={500} alt="メインカラー 爽律" className="w-32 h-auto shrink-0" />
                <Text>メインカラーは爽律（そうりつ）です。<br />新しいことに挑戦するフレッシュなエネルギーや純粋さ、明大祭を作り、一瞬一瞬を楽しむ私たちの爽やかさを表現しています。</Text>
            </div>
            <SmallTitle>華暁（かぎょう）</SmallTitle>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <Image src="/images/theme/secondary.svg" width={500} height={500} alt="サブカラー 華暁" className="w-32 h-auto shrink-0" />
                <Text>サブカラーは華暁（かぎょう）です。<br />一人ひとりの才能や努力が華やかに開花し、その喜びが鳴り響く様子、明大祭による気持ちの高鳴りを表現しています。</Text>
            </div>
            <SmallTitle>此耀（しょうよう）</SmallTitle>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <Image src="/images/theme/accent.svg" width={500} height={500} alt="アクセントカラー 此耀" className="w-32 h-auto shrink-0" />
                <Text>アクセントカラーは此耀（しょうよう）です。<br />心に灯る、温かく優しい希望や道標、仲間との絆、明大生が最高の舞台で輝く瞬間を表現しています。</Text>
            </div>

            {/* <SectionTitle>第142回明大祭テーマソング</SectionTitle>
            <Text>第142回明大祭テーマソングは、Sparkyの『オーバーフィット』です。<TransitionLink href='/mv'>こちら</TransitionLink>もあわせてご覧ください。</Text>
            <Movie href="" /> */}




         </CloudPageContainer>
    );
}

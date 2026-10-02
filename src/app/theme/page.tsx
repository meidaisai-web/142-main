import CloudPageContainer from '@/components/base/CloudPageContainer';
import PageTitle from '@/components/texts/PageTitle';
import SectionTitle from '@/components/texts/SectionTitle';
import Text from '@/components/texts/Text';
import ImageText from '@/components/texts/ImageText';
import OnlyImage from '@/components/OnlyImage';

export default function about() {
    return (
         <CloudPageContainer>
            <PageTitle>第142回明大祭テーマ</PageTitle>
            <Text>今年度の明大祭を象徴する第141回明大祭テーマ。テーマはロゴ・コンセプト・カラーの3つの要素から構成されています。<br />
                  テーマに込められている思いを胸に、第141回明大祭を一緒に盛り上げていきましょう！
            </Text>

            <SectionTitle>第142回明大祭コンセプト</SectionTitle>
            <OnlyImage src="/images/theme/onlycatchcopy.svg" alt="テーマ" className="w-full h-full" />
            <Text center>胸の鼓動が高鳴る、その一瞬</Text>
            <Text center>熱気と歓声に包まれた舞台の上で、</Text>
            <Text center moreTopPadding>幾つもの青春が重なり合い、</Text>
            <Text center>明大祭を鮮やかに染め上げる。</Text>
            <Text center moreTopPadding>響く音、弾む声、溢れる想い。</Text>
            <Text center>そのすべてがひとつになり、真っ白な五線譜に、希望の旋律を刻んでいく。</Text>
            <Text center moreTopPadding>さあ、私たちの"青春"を響かせよう！</Text>

            <SectionTitle>第142回明大祭ロゴ</SectionTitle>
            <div className="flex flex-row">
             <OnlyImage src="/images/theme/onlylogo.svg" alt="ロゴ" className="w-full h-full" />
             <Text>私たちの純粋な情熱が、仲間との出会いや学祭の熱気によって華やかな歓喜へと昇華される。<br />
                   優しさや明かりや希望が、情熱の爆発と私たちを温かく支え、学祭が終わった後も未来を照らし続ける。<br />
                   それらが一つに合わさり、最高に輝く「青春の瞬間」を創造することを願って！<br />
                   青春を謳歌する私たち、明大生の気持ち、私たちを支え寄り添う希望、一人ひとりの鼓動。<br />
                   全体がハート型になることで、祭の一体感や仲間との絆を表しています。
             </Text>
            </div>

            <SectionTitle>第142回明大祭テーマカラー</SectionTitle>
            <ImageText src="/images/theme/primary.svg" alt="テーマカラー" className="w-full h-full">
              メインカラーは爽律（そうりつ）です。<br />新しいことに挑戦するフレッシュなエネルギーや純粋さ、明大祭を作り、一瞬一瞬を楽しむ私たちの爽やかさを表現しています。
            </ImageText>
            <ImageText src="/images/theme/secondary.svg" alt="テーマカラー" className="w-full h-full">
              サブカラーは華暁（かぎょう）です。<br />一人ひとりの才能や努力が華やかに開花し、その喜びが鳴り響く様子、明大祭による気持ちの高鳴りを表現しています。
            </ImageText>
            <ImageText src="/images/theme/accent.svg" alt="テーマカラー" className="w-full h-full">
              アクセントカラーは此耀（しょうよう）です。<br />心に灯る、温かく優しい希望や道標、仲間との絆、明大生が最高の舞台で輝く瞬間を表現しています。
            </ImageText>




         </CloudPageContainer>
    );
}

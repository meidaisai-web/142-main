import CloudPageContainer from "@/components/base/CloudPageContainer"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import SmallTitle from "@/components/texts/SmallTitle"
import AccentText from "@/components/texts/AccentText"
import OnlyImage from "@/components/OnlyImage"
import Text from "@/components/texts/Text"
import Emphasis from "@/components/texts/Emphasis"
import { List, ListItem } from "@/components/texts/List"
import ContactView from "@/components/texts/ContactView"
import TransitionLink from "@/components/buttons/TransitionLink"


const page = () => {
    return (
        <CloudPageContainer>
            <PageTitle>明大祭・キャッシュレス決済</PageTitle>
            <SectionTitle>明大祭でキャッシュレス決済が使えます！</SectionTitle>
            <SmallTitle className="mb-5">明大祭を、もっと便利に、もっとスムーズに！</SmallTitle>
            <Text>昨年度に引き続き、明大祭の模擬店にキャッシュレス決済を導入いたします！</Text>
            <SectionTitle>使える決済方法</SectionTitle>
            <AccentText>クレジットカード</AccentText>
            <List mark="・">
                <ListItem>Visa</ListItem>
                <ListItem>Mastercard</ListItem>
                <ListItem>JCB</ListItem>
                <ListItem>AMEX</ListItem>
                <ListItem>Diners Club</ListItem>
                <ListItem>Discover</ListItem>
            </List>
            <AccentText className="mb-1">国内QRコード</AccentText>
            <List mark="・">
                <ListItem>au PAY</ListItem>
                <ListItem>楽天ペイ</ListItem>
                <ListItem>Smart Code</ListItem>
                <ListItem>d払い</ListItem>
            </List>
            <List mark="※">
                <ListItem><Emphasis>Smart Codeは各種QR決済に対応します。</Emphasis></ListItem>
            </List>
            <AccentText>交通系IC</AccentText>
            <List mark="・">
                <ListItem>Suica</ListItem>
                <ListItem>PASMO</ListItem>
                <ListItem>ICOCA</ListItem>
                <ListItem>manaca</ListItem>
                <ListItem>toica</ListItem>
                <ListItem>SUGOCA</ListItem>
                <ListItem>nimoca</ListItem>
                <ListItem>はやかけん</ListItem>
            </List>
            <Text>など</Text>
            <SectionTitle>キャッシュレス対応模擬店一覧</SectionTitle>
            <Text>キャッシュレス対応の模擬店は23店！</Text>
            <AccentText className="mb-3">上記すべての決済方法に対応している6店 </AccentText>
            <List mark="・">
                <ListItem><TransitionLink href="/goods">明大祭グッズ</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/68">Next Film</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/258">ギターサークルストリート「street」</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/257">古都研究会</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/242">情報コミュニケーション学部 山内勇ゼミナール</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/624">明治大学交響楽団</TransitionLink></ListItem>
            </List>
            <List mark="※">
                <ListItem><Emphasis>明大祭グッズのガチャガチャは、現金のみご利用いただけます。</Emphasis></ListItem>
            </List>
            <AccentText className="mb-3">交通系IC以外のキャッシュレスに対応している17店</AccentText>
            <List mark="・">
                <ListItem><TransitionLink href="/search/181">BREMEN</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/76">DamDam</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/256">MNB</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/175">One Color</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/96">WINDMILL</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/151">マーケティング研究会</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/177">塩澤恵理ゼミナール</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/149">奥山雅之ゼミナール</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/144">国際日本学部 宮本大人ゼミナール</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/157">国際日本学部 小野雅琴ゼミナール</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/187">山内解決ゼミナール</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/158">商学部 福田廉典ゼミナール</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/86">情報コミュニケーション学部 坂本祐太ゼミナール</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/179">政治経済学部国際交流学生委員会The Supporters</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/148">体育同好会連合会 和道流空手道部</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/216">法学会</TransitionLink></ListItem>
                <ListItem><TransitionLink href="/search/173">明治大学商学部 大津健登ゼミナール</TransitionLink></ListItem>
            </List>
            <SmallTitle className="mb-3">会場でキャッシュレス決済が利用可能か確認する方法</SmallTitle>
            <List numbered>
                <ListItem>キャンパスマップに、各ブースのキャッシュレス決済対応状況を記載しています。</ListItem>
                <ListItem>キャッシュレス決済が可能なブースでは以下の掲示物が設置されています。</ListItem>
                <OnlyImage src="/images/cashless/okcashless.png" alt="キャッシュレス決済対応マーク" className="w-20 sm:w-35 my-3" />
                <ListItem >明大祭公式サイトの企画検索・企画詳細ページおよびパンフレットの企画ページには、こちらのマークが表示されています。</ListItem>
                <OnlyImage src="/images/cashless/cashless.png" alt="キャッシュレス決済対応マーク" className="w-20 sm:w-35 my-3" />
            </List>
            <SmallTitle className="mb-3">ご利用にあたってのお願い</SmallTitle>
            <List mark="・">
                <ListItem><Emphasis>PayPayはご利用いただけません。</Emphasis></ListItem>
                <ListItem>全ての模擬店にてキャッシュレス決済をご利用いただけない場合もございます。</ListItem>
                <ListItem>電波状況により、決済に時間がかかる場合がございます。ご了承ください。</ListItem>
            </List>
            <ContactView department="財務局キャッシュレス決済導入チーム" showPhone mail="142nd-cashless@meidaisai.jp" showAddress />
        </CloudPageContainer>
    )
}

export default page

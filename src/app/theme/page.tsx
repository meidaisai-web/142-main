import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import SmallTitle from "@/components/texts/SmallTitle"
import PageContainer from "@/components/base/PageContainer"
import { List, ListItem } from "@/components/texts/List"
import ThemeImage from "@/components/texts/ThemeImage"
import ImageText from "@/components/texts/ImageText"
import Movie from "@/components/movie"
import TransitionLink from "@/components/buttons/TransitionLink"
import Image from 'next/image'
export default function Page() {
    return (
        <>
            <PageTitle>第141回明大祭テーマ</PageTitle>
            <PageContainer>
                <Text className="mt-15">今年度の明大祭を象徴する第141回明大祭テーマ。テーマはロゴ・コンセプト・カラーの3つの要素から構成されています。</Text>
                <Text>テーマに込められている思いを胸に、第141回明大祭を一緒に盛り上げていきましょう！</Text>
                <SectionTitle className="mt-10 mb-10">第141回明大祭コンセプト</SectionTitle>
                <Image src="/images/theme/concept1.png" alt="Concept Image" width={250} height={100} className="mx-auto mb-10" />
                <div className="text-center">
                  <p>ステージの声援、屋台の喧騒、笑い声や拍手、その全てが”熱狂”を生み出す。</p>
                  <p>私たちが目指すのは、その”熱狂”をただのゴールにしない祭</p>
                  <p>終わったあとも誰かの心に残り続ける、価値ある体験と心揺さぶる感情</p>
                  <p>そして、人生を変える出会いと気づき、</p>
                  <p>ただ楽しいだけでは満たされない、だから創る。</p>
                  <p>誰かの人生に刻まれる、そんな3日間を。</p>
                </div>
                <SectionTitle className="mt-5">第141回明大祭ロゴ</SectionTitle>
                <ImageText src="/images/theme-logo.jpg" alt="Logo Image" className="mt-12">
                    <List mark="・">
                        <ListItem className="mb-5">全体の形で情熱、熱意、エネルギーを象徴する炎をイメージして、コンセプトの「熱狂」を表現</ListItem>
                        <ListItem className="mb-5">青の部分は飛翔、未来への希望をイメージする翼をイメージして、コンセプトの「その先へ。」を表現</ListItem>
                        <ListItem>黄色の部分は未来へ続く軌跡や光を象徴し、熱狂のその先の未来や希望を表現</ListItem>
                    </List>
                </ImageText>
                <SectionTitle className="mt-8 mb-8">第141回明大祭カラー</SectionTitle>
                <ThemeImage src="/images/theme/ennku1.png" alt="焔紅（えんく）">
                <SmallTitle>【焔紅（えんく）】</SmallTitle>
                心に灯る情熱の焔が、熱狂の渦となって燃え上がるような力強く輝かしい祭になって欲しいという願い
                </ThemeImage>
                <div className="mt-10"></div>
                <ThemeImage src="/images/theme/souenn1.png" alt="蒼炎（そうえん）">
                <SmallTitle>【蒼炎（そうえん）】</SmallTitle>
                火の中心にある蒼い炎は人々の心に潜む情熱の象徴
                <Text>内なる情熱が解き放たれるような祭になってほしいという願い</Text>
                </ThemeImage>
                <div className="mt-10"></div>
                <ThemeImage src="/images/theme/kikou1.png" alt="軌光（きこう）">
                <SmallTitle>【軌光（きこう）】</SmallTitle>
                熱狂の先にある未来や希望を象徴する光
                <Text className="mb-20">人々の歩む道を照らし、未来へ導く希望の軌道となるような祭になってほしいという願い</Text>
                 </ThemeImage>
                <SectionTitle>第141回明大祭テーマソング</SectionTitle>
                <Text className="mt-3">詳しくは<TransitionLink href="https://www.meidaisai.jp/mv">こちら</TransitionLink></Text>
                <Movie href="https://www.youtube.com/embed/11D-ItNDt-Q?si=ZNNPwvGwMVKvqmzL"/>
            </PageContainer>
        </>
    )
}
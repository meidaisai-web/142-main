import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import SmallTitle from "@/components/texts/SmallTitle"
import PageContainer from "@/components/base/PageContainer"
import { List, ListItem } from "@/components/texts/List"
import ImageText from "@/components/texts/ImageText"
import Movie from "@/components/movie"
import TransitionLink from "@/components/buttons/TransitionLink"
export default function Page() {
    return (
        <>
            <PageTitle>第141回明大祭テーマ</PageTitle>
            <PageContainer>
                <SectionTitle className="mt-5">第141回明大祭ロゴ</SectionTitle>
                <ImageText src="/images/theme-logo.jpg" alt="Logo Image" className="mt-12">
                    <List mark="・">
                        <ListItem className="mb-5">全体の形で情熱、熱意、エネルギーを象徴する炎をイメージして、コンセプトの「熱狂」を表現</ListItem>
                        <ListItem className="mb-5">青の部分は飛翔、未来への希望をイメージする翼をイメージして、コンセプトの「その先へ。」を表現</ListItem>
                        <ListItem>黄色の部分は未来へ続く軌跡や光を象徴し、熱狂のその先の未来や希望を表現</ListItem>
                    </List>
                </ImageText>
                <SectionTitle className="mt-8 mb-8">第141回明大祭カラー</SectionTitle>
                <SmallTitle>【焔紅（えんく）】</SmallTitle>
                <Text>心に灯る情熱の焔が、熱狂の渦となって燃え上がるような力強く輝かしい祭になって欲しいという願い</Text>
                <SmallTitle className="mt-5">【蒼炎（そうえん）】</SmallTitle>
                <Text>火の中心にある蒼い炎は人々の心に潜む情熱の象徴</Text>
                <Text>内なる情熱が解き放たれるような祭になってほしいという願い</Text>
                <SmallTitle className="mt-5">【軌光（きこう）】</SmallTitle>
                <Text>熱狂の先にある未来や希望を象徴する光</Text>
                <Text className="mb-20">人々の歩む道を照らし、未来へ導く希望の軌道となるような祭になってほしいという願い</Text>
                <SectionTitle>第141回明大祭テーマソング</SectionTitle>
                <Text className="mt-3">詳しくは<TransitionLink href="https://www.meidaisai.jp/mv">こちら</TransitionLink></Text>
                <Movie href="https://www.youtube.com/embed/hy9vlDdDjC4?si=73144Wq1-VOer2o-"/>
            </PageContainer>
        </>
    )
}
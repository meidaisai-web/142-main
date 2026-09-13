import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import Text from "@/components/texts/Text"
import CloudPageContainer from "@/components/base/CloudPageContainer"
import Emphasis from "@/components/texts/Emphasis"
import SmallTitle from "@/components/texts/SmallTitle"
import { List, ListItem } from "@/components/texts/List";
import TransitionLink from "@/components/buttons/TransitionLink"
import AccentText from "@/components/texts/AccentText"
export default function Page() {
    return (
        <div>
            <PageTitle>明大生のリアルを大募集！「NO iMeiji, NO LIFE？」</PageTitle>
            <CloudPageContainer>
                <SectionTitle>企画内容</SectionTitle>
                <Text moreTopPadding>
                    明大生のみが知る明大生の実態を大募集！明治大学内での授業、サークル、ご飯、移動、友達との時間など、あなたの大学生活の一コマを集める企画です。応募された作品は明大祭での展示や明大生が主役のカードゲームにも使用されるかも？！
                </Text>
                <Emphasis>この企画ではお題に沿った写真を募集しています！</Emphasis>
                <Text>
                    こちらが提示するお題に対して、該当する場面を写真で送っていただきます。
                </Text>
                <Text>「写真を送るのはハードルが高い…」という人も大丈夫！お題の答えとなる場所の名前や説明文だけの応募もできます！こちらは該当のキャンパスに設置された投票ボックスからも投票が可能です！</Text>
                <SmallTitle>お題</SmallTitle>
                <Text className="mb-5">お題は3つご用意しています！</Text>
                <AccentText>Meiji-1グランプリ</AccentText>
                <Text className="mb-5">校内で撮影した写真に面白い一言を添えて応募していただきます！皆さんの面白い回答で明治大学を沸かせませんか？</Text>
                <AccentText>Be.Meiji</AccentText>
                <Text className="mb-5">明大生の日常を集めます！お昼休みの様子、サークルの様子などなんでも大歓迎です！</Text>
                <AccentText>明治コレクション2026</AccentText>
                <Text className="mb-5">こちらでは明大生のリアルな服装を集めます！今日のあなたのコーデを教えてください！</Text>
                <Text>あなたの日常は誰かにとって新しい発見かも。みなさんも明大祭をつくる一員になりませんか？</Text>
                <Text>ぜひご応募・投票お待ちしています！</Text>
                <SmallTitle>応募方法</SmallTitle>
                <Text>こちらの<TransitionLink targetBlank href="https://docs.google.com/forms/d/e/1FAIpQLSem4wZZRlwB0u4jZBZ6Pe-s73-R9t7Uxk-qRYOJqEoN15o97A/viewform?usp=header">Googleフォーム</TransitionLink>から応募することができます！</Text>
                <Text>または、</Text>
                <List mark="・">
                    <ListItem>明治大学内に掲示されている本企画のポスターのQRコード</ListItem>
                    <ListItem>第142回明大祭公式Instagram</ListItem>
                    <ListItem>明治大学和泉キャンパス・駿河台キャンパス・中野キャンパスの校舎内に設置された投票ボックス</ListItem>
                </List>
                <Text>からも応募を受け付けています！</Text>
                <SmallTitle>応募期間</SmallTitle>
                <Text>9月17日(木)～10月16日(金)</Text>
                <SmallTitle>応募規約</SmallTitle>
                <Text>応募作品は運営側で事前に確認し、展示の可否を判断します。<Emphasis>本人または撮影許可を得た被写体が写っている写真をご応募ください。</Emphasis></Text>
                <Text>応募作品・個人情報等は、本企画の実施および運営に必要な範囲でのみ使用し、その他の目的で使用することはありません。企画終了後は、使用した情報を適切に破棄・削除いたします。</Text>
                <Text>応募作品は、校内・明大祭での展示に適した内容のものに限ります。以下のような写真は展示対象外となる可能性があります。</Text>
                <List mark="・">
                    <ListItem>誹謗中傷や差別的な表現を含むもの</ListItem>
                    <ListItem>他人のプライバシーや肖像権を侵害するもの</ListItem>
                    <ListItem>飲酒・喫煙など、明大祭での展示にふさわしくない内容を含むもの</ListItem>
                    <ListItem>その他、運営側が展示に適さないと判断したもの</ListItem>
                </List>
                <div/>
            </CloudPageContainer>
        </div>
    )
}
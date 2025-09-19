import PageContainer from "@/components/base/PageContainer"
import ContactView from "@/components/texts/ContactView"
import Emphasis from "@/components/texts/Emphasis"
import ImageText from "@/components/texts/ImageText"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import SmallTitle from "@/components/texts/SmallTitle"
import Text from "@/components/texts/Text"

const page = () => {
    return (
        <div>
            <PageTitle>明大祭・クラウドファンディング</PageTitle>
            <PageContainer>
                <SectionTitle >「明大祭・クラウドファンディング」実施します！</SectionTitle>
                <SmallTitle>あなたからの支援で、学生の思い出が輝きます！</SmallTitle>
                <ImageText src="/images/ad/crowdfunding.jpg" alt="明大祭の様子">
                    日頃より、明大祭への応援・ご協力ありがとうございます。<br />この度、10月1日(水)から11月9日(日)の期間で、第141回明大祭のクラウドファンディングが行われます。<br />企画の立案からサイトの作成・実施まで、すべて学生が心を込めて行っております。<br />現在、クラウドファンディングサイトは公開に向けて準備を進めております。公開まで今しばらくお待ちください。
                </ImageText>
                <SmallTitle>どんな天候でも明大生が最高に輝ける、熱狂的なステージを創りたい！</SmallTitle>
                <Text>様々なサークルや明大祭実行委員が一丸となり、1ヶ月以上の時間をかけて準備するステージ企画。<br />しかしその努力は虚しくも、第140回明大祭は悪天候に見舞われ、屋外ステージ企画の多くが中止となってしまいました。懸けてきたものの大きさから涙を流す学生もいました。</Text>
                <Text moreTopPadding>そこで第141回明大祭実行委員会では、昨年度のような事態をできる限り防ぐべく、雨天対策の強化や屋内ステージの新設を行うことになりました。また、更なる明大祭の発展を望み、ステージをより華やかにアップグレードしたいという声も上がっています。<br />しかし、従来の仕様でもかなり資金を必要とするステージに、さらなる出費が嵩むこととなり、資金面での不安が出てきました。<br />そこで立ち上げられたのが、この「クラウドファンディング企画」です。</Text>
                <Text moreTopPadding>目標金額は<Emphasis>100万円</Emphasis>。<br />皆様からのご支援は、上記の内容のために大切に活用させていただきます。<br />また、支援していただいた方には、ささやかですが<Emphasis>返礼品もご用意しております</Emphasis>。</Text>
                {/* <List mark="※">
                    <ListItem>より詳しい情報は、上記URLまたは「明大祭 クラウドファンディング」で検索してご確認ください。</ListItem>
                </List> */}
                <ContactView department="第141回明大祭実行委員会 財務局　クラウドファンディングチーム" mail="zaimucurafan7@gmail.com" showPhone showAddress />
            </PageContainer>
        </div>
    )
}

export default page

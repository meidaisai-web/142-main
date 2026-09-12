import CloudPageContainer from "@/components/base/CloudPageContainer"
import PageTitle from "@/components/texts/PageTitle"
import SectionTitle from "@/components/texts/SectionTitle"
import SmallTitle from "@/components/texts/SmallTitle"
import ImageText from "@/components/texts/ImageText"
import Text from "@/components/texts/Text"
import Emphasis from "@/components/texts/Emphasis"
import { List, ListItem } from "@/components/texts/List"
import ContactView from "@/components/texts/ContactView"


const page = () => {
    return (
        <div>
            <CloudPageContainer>
                <PageTitle>明大祭・募金企画</PageTitle>
                <SectionTitle>「明大祭・募金企画」実施します！</SectionTitle>
                <SmallTitle className="mb-5">みなさまからのご支援が、明大祭を明るく彩ります！</SmallTitle>
                <ImageText src="/images/donation/donation.png" alt="明大祭・募金企画" >
                    <Text noTopPadding>日頃より、明大祭への応援・ご協力ありがとうございます。</Text>
                    <Text moreTopPadding>この度、9月21日(月・祝)から11月9日(月)の期間で、第142回明大祭への募金企画を行います。この取り組みは明治大学と連携した期間限定募金という初の試みとなります。</Text>
                    {/* <Text>学生の思いがこもった当企画のサイトを、ぜひ一度ご覧ください！</Text> */}
                    {/* サイトURLを入れる */}
                </ImageText>
                <SmallTitle>あなたの想いが、明大祭を輝かせる。</SmallTitle>
                <Text>明大生が主役となり、関わるすべての方が夢を描ける明大祭を目指し、様々な団体や明大祭実行委員が一丸となって準備を進める明大祭。しかし近年、夕方以降に多くの企画が終了し周辺が暗くなるにつれて、学園祭らしい活気が徐々に薄れてしまうという課題がありました。</Text>
                <Text moreTopPadding>来場者のみなさまに最後まで明大祭を楽しんでもらいたい。このような思いから、昨年度の明大祭実行委員会ではキャンパス内の木々にイルミネーションを施す新たな企画を実施しました。キャンパスを彩るたくさんの光によって、明大祭ならではの華やかな雰囲気を創出し、来場者のみなさまに最後まで楽しんでいただける空間を生み出すことができました！</Text>
                <Text moreTopPadding>このイルミネーション企画が好評をいただいたため、今年度も継続し、またよりよく充実させていきたいと考えております。しかし、イルミネーションを継続して行うには相応の費用が必要となります。従来の企画でもかなりの資金を必要とする明大祭に、さらなる出費が加わることとなり、資金面での不安が出てきました。</Text>
                <Text moreTopPadding>そこで、この「明大祭募金企画」を立ち上げることといたしました。</Text>
                <Text moreTopPadding>目標金額は<Emphasis>「60万円」</Emphasis>です。</Text>
                <Text moreTopPadding>みなさまからのご支援は、イルミネーション実施のために大切に活用させていただきます。また、ご支援いただいた方には、ささやかですが<Emphasis>返礼品もご用意しております。</Emphasis></Text>
                <Text moreTopPadding>この募金企画を通じたみなさまからのご支援が、目に見える形で明大祭を彩ります。どうかお力添えをよろしくお願いいたします。</Text>
                <List mark="※">
                    <ListItem>詳しい情報は、上記URLまたは「明治大学　明大祭プロジェクト」で検索してご確認ください。</ListItem>
                </List>
                <ContactView department="第142回明大祭実行委員会 財務局　明大祭募金企画チーム" showPhone mail="142nd-bokin@meidaisai.jp" showAddress/>
            </CloudPageContainer>
        </div>
    )
}

export default page

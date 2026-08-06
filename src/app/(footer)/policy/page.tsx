import PageContainer from "@/components/base/PageContainer";
import { List, ListItem, ListText } from "@/components/texts/List";
import PageTitle from "@/components/texts/PageTitle";
import Text from "@/components/texts/Text";

export default function Page() {
    return (
        <div>
            <PageTitle>プライバシーポリシー</PageTitle>
            <PageContainer>
                <Text className="mt-5">第142回明大祭実行委員会（以下、当団体とする）は、第142回明大祭を実施・運営するうえで、個人情報に関する法令を遵守し、個人情報の適切な取り扱いに努めます。</Text>
                <List numbered className="mt-10">
                    <ListItem>個人情報の取り扱い</ListItem>
                    <ListText>当団体は、以下の目的の範囲内で個人情報を取り扱います。</ListText>
                    <List mark="・">
                        <ListItem>本人確認</ListItem>
                        <ListItem>明大祭に関するご連絡</ListItem>
                        <ListItem>お問い合わせへの返答</ListItem>
                        <ListItem>アンケートなどにご回答いただく場合</ListItem>
                        <ListItem>その他、当団体において必要と判断した場合</ListItem>
                    </List>
                    <ListItem>個人情報の開示</ListItem>
                    <ListText>当団体は、運営や上記の目的に応じて消防署・保健所などの公的機関に個人情報を提供する場合があります。 また、登録した個人情報を当団体の関連団体における関連業務の継承先に提供する場合があります。その場合には、個人情報の保護が十分に図られることを条件とするなど適切な処置を行います。</ListText>
                    <ListItem>個人情報を取り扱うにあたり</ListItem>
                    <ListText>当団体は、個人情報を適切に取り扱うために、個人情報の不正アクセスや個人情報の紛失、破壊、改ざんおよび漏洩防止に努めます。</ListText>
                    <ListItem>プライバシーポリシーについて</ListItem>
                    <ListText>当団体は、個人情報の保護の強化などの理由からこのページの内容を変更する場合があります。その際は当サイトのトップページ、お知らせページなどで公表いたします。</ListText>
                    <ListItem>IPアドレスの利用</ListItem>
                    <ListText>当団体では、サーバーで発生した問題の突き止め、解決、およびサイト管理のために、ログに記録されたサイト利用者のIPアドレスを利用させていただくことがあります。</ListText>
                </List>
            </PageContainer>
        </div>
    )
}
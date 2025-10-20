import PageTitle from "@/components/texts/PageTitle"
import PageContainer from "@/components/base/PageContainer"
import OnlyImage from "@/components/OnlyImage"
import TransitionLink from "@/components/buttons/TransitionLink"
import {List} from "@/components/texts/List"
import {ListItem} from "@/components/texts/List"

export default function Page() {
    return (
        <div>
            <PageTitle>第141回明大祭公式パンフレット</PageTitle>
            <PageContainer>
                <List mark="※">
                    <ListItem>画像をクリックすると別タブで表示されます｡</ListItem>
                </List>
                <TransitionLink href=" ">
                    <OnlyImage src="/images/panphlet/panphlet2023-1.png" alt="第141回明大祭公式パンフレット表紙" />
                </TransitionLink>
            </PageContainer>
        </div>
    )
}
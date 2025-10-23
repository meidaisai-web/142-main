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
                <List mark="※" className="mt-10">
                    <ListItem>画像をクリックすると別タブで表示されます｡</ListItem>
                </List>
                <div className="bg-white rounded-2xl p-4 mt-8 max-w-lg mx-auto">
                    <TransitionLink href="">
                        <OnlyImage src="/images/pamphlet.svg" alt="第141回明大祭公式パンフレット表紙" />
                    </TransitionLink>
                </div>
            </PageContainer>
        </div>
    )
}
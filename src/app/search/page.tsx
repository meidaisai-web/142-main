import PageContainer from "@/components/base/PageContainer";
import Search from "@/components/search/Search";
import PageTitle from "@/components/texts/PageTitle";

export default function Page() {
    return (
        <div>
            <PageTitle>企画検索</PageTitle>
            <PageContainer>
                <Search />
            </PageContainer>
        </div>
    )
}
import PageContainer from "@/components/base/PageContainer";
import AccentText from "@/components/texts/AccentText";
import ContactView from "@/components/texts/ContactView";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";
import { companyAdList, companyGoodsList } from "@/utils/datas/company";

export default function Page() {
    return (
        <div>
            <PageTitle>ご協賛企業一覧</PageTitle>
            <PageContainer>
                <SectionTitle>ご協賛企業一覧</SectionTitle>
                <SmallTitle>ご協賛企業名</SmallTitle>
                <Text>(以下五十音順・敬称略)</Text>
                <div className="flex flex-col gap-5">
                    <div>
                        <AccentText>広告協賛</AccentText>
                        <div className="flex flex-wrap">
                            {companyAdList.map((company, index) => (
                                <Text key={index} className="w-md">
                                    {company.name}
                                </Text>
                            ))}
                        </div>
                    </div>
                    <div>
                        <AccentText>物品協賛</AccentText>
                        <div className="flex flex-wrap">
                            {companyGoodsList.map((company, index) => (
                                <Text key={index} className="w-md">
                                    {company.name}
                                </Text>
                            ))}
                        </div>
                    </div>
                </div>
                <ContactView department="渉外局（企業部門）" mail="shogai@meidaisai.jp" />
            </PageContainer>
        </div>
    )
}
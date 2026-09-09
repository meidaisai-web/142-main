import PageContainer from "@/components/base/PageContainer";
import AccentText from "@/components/texts/AccentText";
import ContactView from "@/components/texts/ContactView";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";
import { areaAdList, areaSupportList } from "@/utils/datas/area";

export default function Page() {
    return (
        <div>
            <PageTitle>ご協賛店舗一覧</PageTitle>
            <PageContainer>
                <SectionTitle>ご協賛店舗一覧</SectionTitle>
                <SmallTitle>ご協賛店舗名</SmallTitle>
                <Text>(以下五十音順・敬称略)</Text>
                <div>
                    <AccentText>ご協力</AccentText>
                    {areaSupportList.map((area, index) => (
                        <Text key={index}>
                            {area.name}
                        </Text>
                    ))}
                </div>
                <div className="lg:ml-auto">
                    <AccentText>パンフレット広告協賛</AccentText>
                    <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-x-28">
                        {areaAdList.map((area, index) => (
                            <Text key={index}>
                                {area.name}
                            </Text>
                        ))}
                    </div>
                </div>
                <ContactView department="渉外局（企業部門）" mail="shogai@meidaisai.jp" />
            </PageContainer>
        </div>
    )
}
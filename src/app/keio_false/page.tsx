import PageContainer from "@/components/base/PageContainer";
import ContactView from "@/components/texts/ContactView";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import Text from "@/components/texts/Text";
import { div } from "framer-motion/client";

export default function Page() {
    return (
        <div>
            <PageTitle>KEIO×第141回明大祭デジタルスタンプラリー</PageTitle>
            <PageContainer>
                <SectionTitle>残念ながら不正解です！</SectionTitle>
                <Text moreTopPadding className="!text-center">もう一度問題を解いて、正解だと思うQRコードを探しに行きましょう！</Text>
                <ContactView department="渉外局" mail="shogai@meidaisai.jp" showPhone showAddress></ContactView>
            </PageContainer>
        </div>
    )
}




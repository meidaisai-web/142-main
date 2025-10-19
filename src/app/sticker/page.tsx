import PageContainer from "@/components/base/PageContainer";
import { List, ListItem } from "@/components/texts/List";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import SmallTitle from "@/components/texts/SmallTitle";
import Text from "@/components/texts/Text";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <PageTitle>第141回明大祭オリジナルステッカー</PageTitle>
            <PageContainer>
                <SectionTitle>第141回明大祭オリジナルステッカー配布</SectionTitle>
                <SmallTitle>すべてのデザインを手に入れて、祭の思い出をさらに彩ろう！</SmallTitle>
                <Text>各校舎の1階にて配布します。</Text>
                <SectionTitle>ラインナップ</SectionTitle>
                <SmallTitle>まるver.</SmallTitle>
                <div className="gap-4 flex flex-col xl:flex-row">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Image src="/images/sticker/circle1.png" alt="ステッカー" width={200} height={200} className="w-full max-w-60" />
                        <Image src="/images/sticker/circle2.png" alt="ステッカー" width={200} height={200} className="w-full max-w-60" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Image src="/images/sticker/circle3.png" alt="ステッカー" width={200} height={200} className="w-full max-w-60" />
                        <Image src="/images/sticker/circle4.png" alt="ステッカー" width={200} height={200} className="w-full max-w-60" />
                    </div>
                </div>
                <SmallTitle>しかくver.</SmallTitle>
                <div className="gap-4 flex flex-col lg:flex-row">
                    <Image src="/images/sticker/square1.png" alt="ステッカー" width={200} height={200} className="w-full max-w-60 rounded-xl" />
                    <Image src="/images/sticker/square2.png" alt="ステッカー" width={200} height={200} className="w-full max-w-60 rounded-xl" />
                    <Image src="/images/sticker/square3.png" alt="ステッカー" width={200} height={200} className="w-full max-w-60 rounded-xl" />
                </div>
                <List mark="※" className="mt-8">
                    <ListItem>配布はすべて先着制です。無くなり次第終了となりますので、あらかじめご了承ください。</ListItem>
                    <ListItem>ステッカーデザインは一部デザイン要素が変更となる場合があります。</ListItem>
                </List>
            </PageContainer>
        </div>
    )
}
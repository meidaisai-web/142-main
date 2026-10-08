import CloudPageContainer from "@/components/base/CloudPageContainer";
import { List, ListItem } from "@/components/texts/List";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import Text from "@/components/texts/Text";
import Image from "next/image";
import Emphasis from "@/components/texts/Emphasis";

export default function Page() {
    return (
        <div>
        <CloudPageContainer>
            <PageTitle>第142回明大祭オリジナルステッカー</PageTitle>
                <Text center><Emphasis bold>集めて、貼って、明大祭を彩ろう！</Emphasis></Text>
                <Text moreTopPadding>各校舎の1階と明大祭グッズ販売ブースにて配布します。</Text>
                <List mark="※">
                    <ListItem>配布はすべて先着制です。無くなり次第終了となりますので、あらかじめご了承ください。</ListItem>
                    <ListItem>ステッカーデザインは一部デザイン要素が変更となる場合があります。</ListItem>
                </List>

                <SectionTitle>ラインナップ</SectionTitle>
                <div className="grid grid-cols-6 gap-y-5 sm:gap-y-15 justify-items-center mt-10">
                        <Image src="/images/sticker/sticker1.svg" alt="ステッカー" width={200} height={200} className="w-1/2 col-span-3" />
                        <Image src="/images/sticker/sticker2.svg" alt="ステッカー" width={200} height={200} className="w-1/2 col-span-3" />

                        <Image src="/images/sticker/sticker3.svg" alt="ステッカー" width={200} height={200} className="w-3/4 col-span-2" />
                        <Image src="/images/sticker/sticker4.svg" alt="ステッカー" width={200} height={200} className="w-3/4 col-span-2" />
                        <Image src="/images/sticker/sticker5.svg" alt="ステッカー" width={200} height={200} className="w-3/4 col-span-2" />
                </div>
                <Text className="text-right mt-10">Creaed by 第142回明大祭実行委員会制作局グラフィックデザイン部門</Text>
            </CloudPageContainer>
        </div>
    )
}
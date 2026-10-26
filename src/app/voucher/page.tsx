import VoucherExchangeCard from "@/components/VoucherExchangeCard";
import CloudPageContainer from "@/components/base/CloudPageContainer";
import Text from "@/components/texts/Text"
import SectionTitle from "@/components/texts/SectionTitle";
import { List, ListItem, ListText } from "@/components/texts/List"
import Emphasis from "@/components/texts/Emphasis";
import PageTitle from "@/components/texts/PageTitle";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <CloudPageContainer>
            <PageTitle>明大祭大抽選会 抽選券引き換えページ</PageTitle>
            <div className="pt-20 pb-15">
            <VoucherExchangeCard />
            </div>
            <SectionTitle>抽選会への参加方法</SectionTitle>
            <List numbered>
                <ListItem>和泉図書館前Meidaisai Championship受付までお越しください。</ListItem>
                <ListItem>受付の実行委員の指示で、こちらのページ上部の引き換えるボタンを押してください。抽選券に交換いたします。<br />
                          引き換えボタンは、受付で引き換えるタイミングでタップしてください。<Emphasis>事前にタップしてしまうと抽選券と引き換えることができなくなってしまいます。</Emphasis>
                </ListItem>
                <ListItem>メディア棟前企画受付にある「明大祭大抽選会」まで行くと、抽選に参加できます！<br />
                          企画に関するお問い合わせは、和泉図書館前Meidaisai Championship受付までお越しください。
                </ListItem>
                <Image src="/images/invoucher/champchangemap.svg"
                    alt="step1"
                    width={800} height={400}
                    className="mx-auto w-100 my-10" />
            </List>
        </CloudPageContainer>
    )
}
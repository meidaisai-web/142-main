import CloudPageContainer from "@/components/base/CloudPageContainer";
import TransitionLink from "@/components/buttons/TransitionLink";
import PageTitle from "@/components/texts/PageTitle";
import Text from "@/components/texts/Text";
import { parseAnswers, typeOf, type SearchParams } from "./result";
import { typeNames, typeImages, typeDescriptions, typeColors } from "./types";
import Image from "next/image";
import SectionTitle from "@/components/texts/SectionTitle";
import { List, ListItem } from "@/components/texts/List";
import Link from "next/link";
import ShareButtons from "./ShareButtons";
import Recommendations from "./Recommendations";

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
    const answers = parseAnswers((await searchParams).r);

    if (!answers) {
        return (
            <CloudPageContainer>
                <PageTitle>M-TYPE</PageTitle>
                <Text>診断結果が見つかりませんでした。</Text>
                <TransitionLink href="/mtype/question">診断をはじめからやり直す</TransitionLink>
            </CloudPageContainer>
        )
    }

    const type = typeOf(answers);

    return (
        <CloudPageContainer>
            <PageTitle>M-TYPE</PageTitle>
            <Text center>{type}タイプのあなたは</Text>
            <Text center className="text-3xl font-bold">
                {typeNames[type]}
            </Text>
            <Image src={typeImages[type]} alt={type} width={300} height={300} className="mx-auto my-8" />
            <Text center>{typeDescriptions[type]}</Text>
            <Text center className="font-bold" style={{ color: typeColors[type].code }}>
                そんなあなたのラッキーカラーは{typeColors[type].color}！
            </Text>
            <ShareButtons type={type} typeName={typeNames[type]} imageSrc={typeImages[type]} />
            <Recommendations type={type} />
            <SectionTitle>M-TYPEをご利用してくれた方へ</SectionTitle>
            <Text>ご利用いただきありがとうございます！アンケートへのご協力をお願いします。</Text>
            <Text>アンケートにご協力いただいた方には、明大祭大抽選会の抽選券を配付しております。</Text>
            <List mark="※" className="mt-5">
                <ListItem>抽選券の枚数には限りがあります。</ListItem>
            </List>
            <Link href="https://forms.gle/..." target="_blank" rel="noopener noreferrer" className="block mt-10">
                <div className="bg-primary border-2 border-primary-900 rounded-full px-6 py-2 w-fit hover:bg-primary-700 active:bg-primary-900 transition-colors duration-150 ease-out mx-auto">アンケートはこちら</div>
            </Link>
        </CloudPageContainer>
    )
}

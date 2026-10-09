import type { Metadata } from "next";
import Image from "next/image";
import CloudPageContainer from "@/components/base/CloudPageContainer";
import PageTitle from "@/components/texts/PageTitle";
import Text from "@/components/texts/Text";
import { parseTypeParam, type ShareSearchParams } from "../answer/result";
import { typeColors, typeDescriptions, typeImages, typeNames } from "../answer/types";
import Recommendations from "../answer/Recommendations";
import StartButton from "../StartButton";

// シェアされたリンクの行き先。結果画面に近い見た目で、アンケートはなく、診断を始めるボタンを置く
// SNS のリンクプレビュー（OGP）にタイプ別の画像を出す
export async function generateMetadata({ searchParams }: { searchParams: ShareSearchParams }): Promise<Metadata> {
    const type = parseTypeParam((await searchParams).type);
    if (!type) return {};
    const title = `${type}タイプ「${typeNames[type]}」`;
    const description = typeDescriptions[type];
    const images = [{ url: `https://www.meidaisai.jp${typeImages[type]}`, alt: title }];
    return {
        title,
        description,
        openGraph: { title, description, images },
        twitter: { card: "summary", title, description, images },
    };
}

export default async function Page({ searchParams }: { searchParams: ShareSearchParams }) {
    const type = parseTypeParam((await searchParams).type);

    if (!type) {
        return (
            <CloudPageContainer>
                <PageTitle>M-TYPE</PageTitle>
                <Text center>今日のあなた、何タイプ？</Text>
                <StartButton />
            </CloudPageContainer>
        )
    }

    return (
        <CloudPageContainer>
            <PageTitle>M-TYPE</PageTitle>
            <Text center>{type}タイプのあの人は</Text>
            <Text center className="text-3xl font-bold">
                {typeNames[type]}
            </Text>
            <Image src={typeImages[type]} alt={type} width={300} height={300} className="mx-auto my-8" />
            <Text center>{typeDescriptions[type]}</Text>
            <Text center className="font-bold" style={{ color: typeColors[type].code }}>
                ラッキーカラーは{typeColors[type].color}！
            </Text>
            <Recommendations type={type} />
            <Text center className="mt-8">あなたは何タイプ？わずか8問で診断！</Text>
            <StartButton />
        </CloudPageContainer>
    )
}

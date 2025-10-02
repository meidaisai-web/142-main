'use client';

import { getUniqueMasterData } from "@/utils/supabase/masterDataAction";
import { useEffect, useState } from "react";
import { MasterData } from "@/utils/models/MasterData";
import VoteView from "./VoteView";
import AccentText from "../texts/AccentText";
import Text from "../texts/Text";
import Image from "next/image";
import PageContainer from "../base/PageContainer";
import Link from "next/link";
import TransitionLink from "../buttons/TransitionLink";
import Label from "../texts/Label";

interface DetailContentProps {
    id: string;
}

export default function DetailEventContent({ id }: DetailContentProps) {
    const [data, setData] = useState<MasterData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getUniqueMasterData(id);
                if (!data) {
                    setError("企画が見つかりませんでした");
                    return;
                }
                setData(data);
            } catch (err) {
                console.log('データの取得に失敗しました:', err);
                setError("データの取得に失敗しました");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div>
            {loading && (
                <EventTitle>読み込み中...</EventTitle>
            )}

            {error && (
                <div>
                    <EventTitle>企画が見つかりませんでした</EventTitle>
                </div>
            )}

            {!loading && !error && data && (
                <>
                    <EventTitle>{data.eventName}</EventTitle>
                    <PageContainer>
                        <div className="flex justify-center items-center lg:items-start gap-8 mt-16 flex-col lg:flex-row">
                            <ImageView type={data.type} imageUrl={data.imageUrl} />
                            <InfoView group={data.groupName} date={data.eventDate} location={data.location} catchphrase={data.catchphrase} detail={data.eventContent} instagram={data.instagramAccount} x={data.xAccount} youtube={data.youtubeAccount} tiktok={data.tiktokAccount} homepage={data.homepageUrl} />
                        </div>
                        <VoteView id={id} groupId={data.groupId} type={data.type} />
                    </PageContainer>
                </>
            )}
        </div>
    )
}

interface ImageViewProps {
    type: string;
    imageUrl: string;
}

function ImageView({ type, imageUrl }: ImageViewProps) {
    return (
        <div>
            <EventImage imageUrl={imageUrl} />
            <TypeLabel>{type}企画</TypeLabel>
        </div>
    )
}

interface InfoViewProps {
    group: string;
    date: string;
    location: string;
    catchphrase: string;
    detail: string;
    instagram?: string;
    x?: string;
    tiktok?: string;
    youtube?: string;
    homepage?: string;
}

function InfoView({ group, date, location, catchphrase, detail, instagram, x, tiktok, youtube, homepage }: InfoViewProps) {
    return (
        <div className="max-w-xl flex flex-col gap-5">
            <div className="flex items-center gap-4">
                <Label>団体</Label>
                <p className="font-bold">{group}</p>
            </div>
            <div>
                <div className="flex items-center gap-4">
                    <Label>日時</Label>
                    <p className="font-bold">{date}</p>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-4">
                    <Label>場所</Label>
                    <p className="font-bold">{location}</p>
                </div>
            </div>
            <div>
                <div className="border-b-2 border-accent w-fit gap-4"><AccentText>{catchphrase}</AccentText></div>
                <Text className="font-medium">{detail}</Text>
            </div>
            <div className="flex justify-end items-center gap-6 mt-4">
                {instagram && (
                    <Link href={`https://www.instagram.com/${instagram}`} target="_blank">
                        <Image src={'/images/svg/sns/Instagram_White.svg'} alt="instagram" width={35} height={35} className="w-8" />
                    </Link>
                )}
                {x && (
                    <Link href={`https://twitter.com/${x}`} target="_blank">
                        <Image src={'/images/svg/sns/X-white.svg'} alt="twitter" width={35} height={35} className="w-8" />
                    </Link>
                )}
                {tiktok && (
                    <Link href={`https://www.tiktok.com/@${tiktok}`} target="_blank">
                        <Image src={'/images/svg/sns/TikTok.svg'} alt="tiktok" width={35} height={35} className="w-8" />
                    </Link>
                )}
                {youtube && (
                    <Link href={`https://www.youtube.com/@${youtube}`} target="_blank">
                        <Image src={'/images/svg/sns/youtube-white.svg'} alt="youtube" width={35} height={35} className="w-8" />
                    </Link>
                )}
                {homepage && (
                    <TransitionLink href={homepage} targetBlank>公式サイト</TransitionLink>
                )}
            </div>
        </div>
    )
}

interface EventTitleProps {
    children: React.ReactNode;
}

function EventTitle({ children }: EventTitleProps) {
    return (
        <div className={`w-full flex items-center justify-center pt-32 pb-2`}>
            <div className="relative w-fit flex items-center justify-center">
                <Image
                    src="/images/svg/title/SectionTitleL.svg"
                    alt=""
                    width={80}
                    height={80}
                    className="absolute w-14 h-14 -left-9 -z-10"
                />
                <h2 className="text-center font-bold text-3xl">{children}</h2>
                <Image
                    src="/images/svg/title/SectionTitleR.svg"
                    alt=""
                    width={60}
                    height={60}
                    className="absolute w-14 h-14 -right-9 -z-10"
                />
            </div>
        </div>
    )
}

interface TypeLabelProps {
    children: React.ReactNode;
}

function TypeLabel({ children }: TypeLabelProps) {
    return (
        <div className="pr-2 py-3">
            <div className={`-rotate-3 rounded-full border-2 border-accent py-1 px-10 text-center absolute w-72 -translate-y-0.5`}>
                <p className='opacity-0'>{children}</p>
            </div>
            <div className={`rounded-full transition duration-100 bg-secondary py-1 px-10 relative w-72 z-10`}>
                <p className='text-lg font-bold text-center'>{children}</p>
            </div>
        </div>
    )
}

interface EventImageProps {
    imageUrl: string;
}

function EventImage({ imageUrl }: EventImageProps) {
    return (
        <div className="relative pr-3 mb-3">
            <Image src={imageUrl} alt="企画画像" width={300} height={300} className="rounded-lg w-72 h-72" />
            <div className="w-72 h-72 bg-secondary absolute top-3 left-3 rounded-lg -z-10" />
        </div>
    )
}
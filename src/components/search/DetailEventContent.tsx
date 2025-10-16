'use client';

import { getUniqueMasterData } from "@/utils/supabase/masterDataAction";
import { useEffect, useState } from "react";
import { MasterData } from "@/utils/models/MasterData";
import VoteView from "./VoteView";
import AccentText from "../texts/AccentText";
import Text from "../texts/Text";
import Image from "next/image";
import Link from "next/link";
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
                <div className="w-full px-12 sm:px-14 md:px-18 lg:px-24">
                    <EventTitle>読み込み中...</EventTitle>
                </div>
            )}

            {error && (
                <div className="w-full px-12 sm:px-14 md:px-18 lg:px-24">
                    <EventTitle>企画が見つかりませんでした</EventTitle>
                </div>
            )}

            {!loading && !error && data && (
                <div className="w-full px-12 sm:px-14 md:px-18 lg:px-24 flex flex-col items-center">
                    <EventTitle>{data.eventName}</EventTitle>
                    <div className="flex justify-center items-center lg:items-start gap-8 mt-16 flex-col lg:flex-row">
                        <ImageView type={data.type} imageUrl={data.imageUrl} />
                        <InfoView group={data.groupName} date={data.eventDate} location={data.location} catchphrase={data.catchphrase} detail={data.eventContent} icons={data.icons} instagram={data.instagramAccount} x={data.xAccount} youtube={data.youtubeAccount} tiktok={data.tiktokAccount} homepage={data.homepageUrl} />
                    </div>
                    <Menu menus={data.menuItems || []} />
                    {!data.groupName.includes("明大祭実行委員会") &&
                        <VoteView id={id} groupId={data.groupId} type={data.type} eventName={data.eventName} groupName={data.groupName} eventDate={data.eventDate} />
                    }
                </div>
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
    icons?: string[];
    instagram?: string;
    x?: string;
    tiktok?: string;
    youtube?: string;
    homepage?: string;
}

function InfoView({ group, date, location, catchphrase, detail, icons, instagram, x, tiktok, youtube, homepage }: InfoViewProps) {
    return (
        <div className="max-w-xl flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-4 text-sm">
                {icons && icons.map((icon) => (
                    <div key={icon} className="px-3 py-1 text-center border-accent border-2 rounded-full">
                        {icon}
                    </div>
                ))}
            </div>
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
                {(homepage && !group.includes("明大祭実行委員会")) && (
                    <Link href={homepage} target="_blank" className="underline hover:text-accent text-lg">公式サイト</Link>
                )}
                {(homepage && group.includes("明大祭実行委員会")) && (
                    <Link href={homepage} className="underline hover:text-accent text-lg">詳細はこちら</Link>
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
    const [imgSrc, setImgSrc] = useState(imageUrl);

    return (
        <div className="relative pr-3 mb-3">
            <Image
                src={imgSrc}
                alt="企画画像"
                width={300}
                height={300}
                className="rounded-lg w-72 h-72 object-cover"
                onError={() => setImgSrc('/images/svg/no-image.svg')}
            />
            <div className="w-72 h-72 bg-secondary absolute top-3 left-3 rounded-lg -z-10" />
        </div>
    )
}

interface MenuProps {
    menus: string[]
}
function Menu({ menus }: MenuProps) {
    if (menus.length === 0) {
        return null;
    }
    return (
        <div className="relative mt-20">
            <Image src='/images/svg/pin-menu.svg' alt='' width={40} height={40} className="w-10 h-10 absolute -top-5 left-36" />
            <div className="absolute rounded-3xl border-black border-4 overflow-hidden w-80 -z-10 top-3 left-3">
                <div className="bg-secondary-900 border-b-2 border-secondary-900 text-center w-full text-3xl py-3 font-bold">
                    Menu
                </div>
                <div className="bg-secondary-900 text-secondary-900 font-semibold px-10 pt-3 pb-10 text-lg">
                    {menus.map((menu) => (
                        <div key={menu} className="border-b-1 border-secondary-900 pt-6 pb-1">
                            {menu}
                        </div>
                    ))}
                </div>
            </div>
            <div className="rounded-3xl border-black border-4 overflow-hidden w-80">
                <div className="bg-secondary border-b-2 border-black text-center w-full text-3xl py-3 font-bold">
                    Menu
                </div>
                <div className="bg-white text-secondary font-semibold px-10 pt-3 pb-10 text-lg">
                    {menus.map((menu) => (
                        <div key={menu} className="border-b-1 border-black pt-6 pb-1">
                            {menu}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
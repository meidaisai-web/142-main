'use client';

import { getUniqueMasterData } from "@/utils/supabase/masterDataAction";
import { useEffect, useState } from "react";
import { MasterData } from "@/utils/models/MasterData";
import Text from "../texts/Text";
import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
=======
import ZoomableImage from "../ZoomableImage";
import { getMeichamCategory } from "@/utils/managers/meichamManager";
>>>>>>> feature/test
import SearchCloud from "./SearchCloud";

interface DetailContentProps {
    id: string;
}

export default function DetailEventContent({ id }: DetailContentProps) {
    const [data, setData] = useState<MasterData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const category = data?.championshipJoin ? getMeichamCategory(data.genre) : null;

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
        <div className="overflow-x-clip">
            {loading && (
                <div className="w-full px-4 sm:px-14 md:px-18 lg:px-24">
                    <EventTitle>読み込み中...</EventTitle>
                </div>
            )}

            {error && (
                <div className="w-full px-4 sm:px-14 md:px-18 lg:px-24">
                    <EventTitle>企画が見つかりませんでした</EventTitle>
                </div>
            )}

            {!loading && !error && data && (
                <div className="w-full px-4 sm:px-14 md:px-18 lg:px-24 flex flex-col items-center">
                    <EventTitle>{data.eventName}</EventTitle>
<<<<<<< HEAD
                    <div className="w-full bg-white/80 rounded-xl p-4 sm:p-10 lg:p-20 flex justify-center items-center lg:items-start gap-8 mt-16 flex-col lg:flex-row">
                        <ImageView imageUrl={data.imageUrl} icons={data.icons} />
=======
                    <div className="relative w-full bg-white/80 rounded-xl p-8 sm:p-10 lg:p-20 flex justify-center items-center lg:items-start gap-8 mt-25 flex-col lg:flex-row">
                    <Image  src="/images/searchdetail/search-conges.svg" alt="混雑マップ" width={300} height={600} className="absolute -top-17 -right-2 sm:-right-5 w-37 sm:w-50" />
                        <ImageView type={data.type} imageUrl={data.imageUrl} icons={data.icons} />
>>>>>>> feature/test
                        <InfoView group={data.groupName} date={data.eventDate} location={data.location} catchphrase={data.catchphrase} detail={data.eventContent} instagram={data.instagramAccount} x={data.xAccount} youtube={data.youtubeAccount} tiktok={data.tiktokAccount} homepage={data.homepageUrl} />
                    </div>

                    <div className="w-full flex flex-col sm:flex-row items-center sm:self-center justify-center gap-10 sm:gap-10 md:gap-20 mt-20">
                        <Menu menus={data.menuItems || []} />
                        {data.location.includes("テント配置番号") && (
                            <div className="w-full sm:w-auto  min-w-0 max-w-3xl sm:pt-6">
                                <ZoomableImage src="/images/map/tent.svg" alt="テントマップ" width={1200} height={600} className="p-1 bg-white rounded-sm object-contain w-full h-fit" />
                            </div>
                        )}
                    </div>

                    {/* 不参加の企画もVoteViewを出し、「投票対象ではありません」と表示する。（category === null） */}
                    {(!data.groupName.includes("明大祭実行委員会") && data.groupName !== '伊藤 汰海') &&
                        <VoteView id={id} groupId={data.groupId} type={data.type} eventName={data.eventName} groupName={data.groupName} eventDate={data.eventDate} category={category} />
                    }
                </div>
            )}
        </div>
    )
}

interface ImageViewProps {
    imageUrl: string;
    icons?: string[];
}

function ImageView({ imageUrl, icons }: ImageViewProps) {
    return (
        <div className="w-full max-w-75 shrink-0">
            <EventImage imageUrl={imageUrl} icons={icons} />
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
    <div className="w-full max-w-xl min-w-0">
        <div className="flex flex-col gap-5">
            <InfoRow label="団体">{group}</InfoRow>
            <InfoRow label="日時">{date}</InfoRow>
            <InfoRow label="場所">{location}</InfoRow>
            <div>
                <AccessoryText lineColor="var(--color-primary)" accessory="/images/searchdetail/description-accessory-green.svg" className="mt-5 mb-3 font-bold">
                    {catchphrase}
                </AccessoryText>
                <Text className="break-words">{detail}</Text>
            </div>

            <div className="flex flex-wrap justify-end items-center gap-x-6 gap-y-3 mt-4">
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
    </div>
    )
}

interface InfoRowProps {
    label: string;
    children: string;
}

function InfoRow({ label, children }: InfoRowProps) {
    return (
        <div className="flex items-center gap-2 sm:gap-4">
            <SearchCloud>{label}</SearchCloud>
            <AccessoryText lineColor="var(--color-secondary)" accessory="/images/searchdetail/title-accessory.svg" className="flex-1 min-w-0 pl-2 sm:pl-7">
                {children}
            </AccessoryText>
        </div>
    )
}

interface AccessoryTextProps {
    children: string;
    lineColor: string;
    accessory: string;
    className?: string;
}

// 折り返した各行に下線を引き、最終行の末尾にアクセサリーを付ける
function AccessoryText({ children, lineColor, accessory, className }: AccessoryTextProps) {
    const chars = Array.from(children ?? "");
    const last = chars.pop() ?? "";
    const lineStyle = {
        backgroundImage: `linear-gradient(${lineColor}, ${lineColor})`,
        backgroundSize: "100% 2px",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
    };

    return (
        <p className={`leading-9 break-words ${className ?? ""}`}>
            <span className="pb-1" style={lineStyle}>{chars.join("")}</span>
            <span className="whitespace-nowrap mr-7">
                <span className="relative pb-1 pr-3" style={lineStyle}>{last}
                    <Image src={accessory} alt="" width={28} height={40} className="absolute left-full bottom-px translate-y-1/2 h-10 w-auto max-w-none pointer-events-none" />
                </span>
            </span>
        </p>
    )
}

interface EventTitleProps {
    children: React.ReactNode;
}

function EventTitle({ children }: EventTitleProps) {
    return (
        <div className={`pt-13 w-full flex items-center justify-center `}>
            <div className="w-screen shrink-0 aspect-[4784/1270] md:aspect-auto sm:h-[calc(48rem*1300/4784)] md:h-[calc(48rem*2000/4784)] px-16 bg-center bg-no-repeat bg-contain sm:bg-[length:100%_100%] flex items-center justify-center" style={{ backgroundImage: "url('/images/searchdetail/titlecloud.svg')" }}>
                <h2 className="text-center font-bold text-2xl sm:text-3xl">{children}</h2>
            </div>
        </div>
    )
}

interface EventImageProps {
    imageUrl: string;
    icons?: string[];
}

function EventImage({ imageUrl, icons }: EventImageProps) {
    const [imgSrc, setImgSrc] = useState(imageUrl);

    return (
        <div className="gap-5 flex flex-col">
            <div className="flex flex-wrap items-center gap-4 text-sm">
                {icons && icons.map((icon) => (
                    <div key={icon} className="px-3 py-1 text-center border-primary border-2 rounded-full">
                        {icon}
                    </div>
                ))}
            </div>
            <Image src={imgSrc} alt="企画画像" width={300} height={300} className="rounded-lg w-full max-w-75 aspect-square object-cover" onError={() => setImgSrc('/images/svg/no-image.svg')}/>
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
        <div className="relative shrink-0">
            <div className="relative rounded-xl border-primary-700 border-2 w-80 bg-white">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate flex items-center justify-center w-40 py-3">
                    <Image src="/images/searchdetail/menu-cloud.svg" width={500} height={500} className="absolute inset-0 w-full h-full object-contain -z-10" alt="" />
                    <Text center className="text-2xl font-bold text-primary-700">Menu</Text>
                </div>
                <div className="text-text px-10 pt-10 pb-10 text-lg">
                    {menus.map((menu) => (
                        <div key={menu} className="pt-1">
                            <Text>{menu}</Text>
                            <Image src="/images/searchdetail/menubar3.svg" alt="" width={300} height={10} className="w-full h-auto -mt-4" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
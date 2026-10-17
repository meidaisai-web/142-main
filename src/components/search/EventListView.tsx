'use client';

import type { MasterData } from "@/utils/models/MasterData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { RefObject } from "react";

interface EventItemsProps {
    datas: (MasterData[] | null)[] | undefined;
    itemsRef?: RefObject<HTMLDivElement | null>;
    isLoading?: boolean;
}

export default function EventItems({ datas, itemsRef, isLoading = false }: EventItemsProps) {
    const items = datas?.flatMap((data) => data ?? []) ?? [];
    return (
        <div className="flex flex-wrap justify-center gap-y-8 gap-x-10 lg:gap-x-20 max-w-5xl mx-5 mt-3 mb-6" ref={itemsRef} aria-busy={isLoading}>
            {items.map((item) => <EventItem key={item.id} data={item} />)}
            {!isLoading && items.length === 0 && (
                <p className="text-center py-10">該当する企画が見つかりませんでした。</p>
            )}
        </div>
    )
}

interface EventItemProps {
    data: MasterData;
}

function EventItem({ data }: EventItemProps) {
    return (
        <Link href={`/search/${data.id}`} className="relative isolate group block">
            {/* 裏のカードは本体のサイズに追従させる。 */}
            <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-primary-700 border-4 border-primary -z-10"
            />

            {/* relative により、雲の位置を手前のカード基準にする。 */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-primary min-w-[300px] w-[90vw] max-w-110 transition-transform duration-150 group-hover:-translate-y-1 group-hover:-translate-x-1 group-active:translate-y-1 group-active:translate-x-1 bg-primary">
                <ItemHeader title={data.eventName} groupName={data.groupName} />
                <ItemBody imageUrl={data.imageUrl} icons={data.icons} genre={data.genre} date={data.eventDate} location={data.location} catchphrase={data.catchphrase} />
                <ItemFooter />
            </div>
        </Link>
    )
}

interface ItemHeaderProps {
    title: string;
    groupName: string;
}

function ItemHeader({ title, groupName }: ItemHeaderProps) {
    return (
        <div className="relative z-10 bg-primary pt-2 px-3 pb-1 text-white">
            <h2 className="font-bold h-6 truncate">{title}</h2>
            <p className="font-medium text-sm truncate">{groupName}</p>
            {/* 1 本の連続したパスで、幅が変わっても波形に隙間を作らない。 */}
            <svg
                aria-hidden="true"
                focusable="false"
                className="pointer-events-none absolute top-[calc(100%-1px)] -left-px w-[calc(100%+2px)] h-[33px] text-primary"
                viewBox="0 0 600 40"
                preserveAspectRatio="none"
                style={{ filter: "drop-shadow(0 2px 1px rgba(0,0,0,0.12))" }}
            >
                <path
                    fill="currentColor"
                    d="M 0 0 H 600 V 24
                       C 575 24 555 15 540 4
                       C 516 28 474 30 444 8
                       C 423 28 396 28 366 17
                       C 333 44 281 45 246 13
                       C 221 29 178 27 153 5
                       C 128 29 85 30 53 4
                       C 39 16 22 24 0 24 Z"
                />
            </svg>
        </div>
    )
}

interface ItemBodyProps {
    imageUrl: string;
    icons: string[];
    genre: string;
    date: string;
    location: string;
    catchphrase: string;
}

function ItemBody({ imageUrl, icons, genre, date, location, catchphrase }: ItemBodyProps) {
    const [imgSrc, setImgSrc] = useState(imageUrl);
    const showIcons = Array.isArray(icons) ? [...icons] : [];
    while (showIcons.length < 3) {
        showIcons.push('empty');
    }

    const showDate = date
        .replace(/：/g, ':')
        .replace(/〜/g, '~')
        .replace(/：/g, ':')
        .replace(/\([^\)]*\)/g, '')

    return (
        // カード下の余白を縮め、右下の雲をピンク枠へ重ねる。
        <div className="bg-white text-black pt-12 px-3 pb-2 text-xs w-full">
            <div className="flex gap-3">
                <div>
                    <Image
                        src={imgSrc}
                        alt="企画画像"
                        width={100}
                        height={100}
                        className="rounded-md object-cover w-[100px] h-[100px] border-2 border-[#3E3D3F]"
                        onError={() => setImgSrc('/images/svg/no-image.svg')}
                    />
                    <div className="flex justify-between mt-2">
                        {showIcons.slice(0, 3).map((icon, index) => (
                            <div key={index} className="w-8 h-8 ">
                                <Icon name={icon} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-3 flex-1 min-w-0">
                    <div className="flex gap-2">
                        <div className="relative flex shrink-0 items-center justify-center w-4 h-4">
                            <Image src="/images/EventListView/Ellipse.svg" alt="" width={35} height={35} className="absolute" />
                            <Image src="/images/EventListView/Heart.svg" alt="" width={16} height={16} className="absolute z-10" />
                        </div>
                        <p>{genre}</p>

                    </div>
                    <div className="flex gap-2">
                        <div className="relative flex items-center justify-center w-4 h-4">
                            <Image src='/images/EventListView/Ellipse.svg' alt='' width={35} height={35} className="absolute " />
                            <Image src='/images/EventListView/circle.svg' alt='' width={15} height={15} className="absolute  z-10" />
                            <Image src='/images/EventListView/cline.svg' alt='' width={3} height={3} className="absolute translate-x-1/3 -translate-y-[1px]  z-10" />
                        </div>
                        <p>{showDate}</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="relative flex items-center justify-center w-4 h-4">
                            <Image src='/images/EventListView/Ellipse.svg' alt='' width={35} height={35} className="absolute " />
                            <Image src='/images/EventListView/pin.svg' alt='' width={16} height={16} className="absolute z-10" />
                        </div>
                        <p>{location}</p>
                    </div>
                    <div className="w-full pb-4 mt-1">
                        <div className="bg-secondary-100 border-2 border-secondary-300 text-gray-700 py-3 rounded-xl w-full flex items-center justify-center min-h-[64px]">
                            {/* 雲がかかる右下へ文字が入らないよう、右側に余白を確保する。 */}
                            <p className="text-sm leading-snug break-words font-medium text-center w-full pl-4 pr-[72px]">
                                {catchphrase}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ItemFooter() {
    return (
        <div className="absolute -bottom-[3px] -right-[3px] z-20 w-[24%] min-w-[100px] max-w-[106px] aspect-[9/5] text-[#66616b]">
            <svg
                aria-hidden="true"
                focusable="false"
                className="pointer-events-none absolute inset-0 block w-full h-full text-primary"
                viewBox="0 0 180 100"
                fill="white"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
            >
                {/* 右側・底辺まで描いて Z で閉じる。全体を viewBox 内に収める。 */}
                <path
                    vectorEffect="non-scaling-stroke"
                    d="M 28 96
                       C 14 96 4 90 4 76
                       C 4 66 12 58 22 55
                       C 20 37 38 22 60 22
                       C 68 22 74 23 79 25
                       C 90 10 106 4 122 4
                       C 151 4 176 22 176 50
                       L 176 80
                       Q 176 96 160 96
                       H 28 Z"
                />
            </svg>
            <div className="absolute inset-x-0 bottom-[21%] flex items-center justify-center gap-1 whitespace-nowrap pl-2 text-[11px] leading-none font-medium">
                <span>Read More!</span>
                <span aria-hidden="true">&gt;</span>
            </div>
        </div>
    )
}

interface IconProps {
    name: string;
}
function Icon({ name }: IconProps) {
    const iconData = [{
        id: 'shoot', label: '撮影禁止'
    }, {
        id: 'ticket', label: 'チケット制'
    }, {
        id: 'food', label: '食べ物'
    }, {
        id: 'drink', label: '飲み物'
    }, {
        id: 'sell', label: '物品販売'
    }, {
        id: 'experience', label: '参加体験'
    }, {
        id: 'eco', label: 'エコトレー'
    }, {
        id: 'cashless', label: 'キャッシュレス'
    }]
    if (name === "empty") {
        return (
            <div className="w-full h-full rounded-md border-2 border-black fill-d9d9d9d" />
        )
    }
    if (!iconData.find(icon => icon.label === name)) {
        return (
            <div className="w-full h-full rounded-md border-2 border-black fill-d9d9d9d" />
        )
    }
    const iconId = iconData.find(icon => icon.label === name)?.id;
    return (
        <div>
            <Image src={`/images/status/${iconId}.svg`} alt={name} width={30} height={30} className="w-full h-full rounded-md border-2 border-black" />
        </div>
    )
}

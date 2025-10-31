'use client';

import { MasterData } from "@/utils/models/MasterData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface EventItemsProps {
    datas: (MasterData[] | null)[] | undefined;
    ref: React.RefObject<HTMLDivElement | null>;
}

export default function EventItems({ datas, ref }: EventItemsProps) {

    return (
        <div className="flex flex-wrap justify-center gap-y-8 gap-x-10 lg:gap-x-20 max-w-5xl mx-5 my-10" ref={ref}>
            {datas?.map((data) => (
                (data && data.length > 0) && (
                    data.map((item) => (
                        <EventItem key={item.id} data={item} />
                    ))
                )
            ))}
            {!datas || datas.length === 0 || (datas.length === 1 && (!datas[0] || datas[0].length === 0)) && (
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
        <Link href={`/search/${data.id}`} className="relative group">
            <div className="absolute rounded-2xl bg-secondary-900 min-w-[300px] w-[90vw] max-w-96 top-3 left-3 -z-10 border-4 border-black">
                <div className="opacity-0">
                    <ItemHeader title={data.eventName} groupName={data.groupName} />
                    <ItemBody imageUrl={data.imageUrl} icons={data.icons} genre={data.genre} date={data.eventDate} location={data.location} catchphrase={data.catchphrase} />
                    <ItemFooter />
                </div>
            </div>
            <div className="rounded-2xl overflow-hidden border-4 border-black min-w-[300px] w-[90vw] max-w-96 transition-all duration-150 group-hover:-translate-y-1 group-hover:-translate-x-1 group-active:translate-y-1 group-active:translate-x-1">
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
        <div className="bg-secondary pt-2 px-3 pb-1 transition-colors duration-300 group-hover:bg-secondary-400 group-active:bg-secondary-700">
            <h2 className="font-bold h-6 truncate">{title}</h2>
            <p className="font-medium text-sm truncate">{groupName}</p>
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
        <div className="bg-white text-black border-y-2 border-black px-3 py-4 text-xs font-medium">
            <div className="flex gap-3">
                <div>
                    <Image
                        src={imgSrc}
                        alt="企画画像"
                        width={100}
                        height={100}
                        className="rounded-md object-cover w-[100px] h-[100px] border-2 border-black"
                        onError={() => setImgSrc('/images/svg/no-image.svg')}
                    />
                    <div className="flex justify-between mt-2">
                        {showIcons.slice(0, 3).map((icon, index) => (
                            <div key={index} className="w-8 h-8">
                                <Icon name={icon} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                    <div className="flex gap-2">
                        <Image src='/images/svg/star-accent.svg' alt='' width={16} height={16} className="" />
                        <p>{genre}</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src='/images/svg/clock-accent.svg' alt='' width={16} height={16} className="" />
                        <p>{showDate}</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src='/images/svg/pin-accent.svg' alt='' width={16} height={16} className="" />
                        <p>{location}</p>
                    </div>
                    <p className="bg-secondary-100 p-5 rounded-2xl w-full">
                        {catchphrase}
                    </p>
                </div>
            </div>
        </div>
    )
}

function ItemFooter() {
    return (
        <div className="flex justify-end items-center bg-secondary pr-5 py-1 transition-colors duration-300 group-hover:bg-secondary-400 group-active:bg-secondary-700">
            <p className="text-sm text-end font-medium">Read More!</p>
            <Image src='/images/svg/triangle-right.svg' alt='' width={10} height={10} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
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
            <div className="w-full h-full rounded-md border-2 border-black" />
        )
    }
    if (!iconData.find(icon => icon.label === name)) {
        return (
            <div className="w-full h-full rounded-md border-2 border-black" />
        )
    }
    const iconId = iconData.find(icon => icon.label === name)?.id;
    return (
        <div>
            <Image src={`/images/svg/status/${iconId}.svg`} alt={name} width={30} height={30} className="w-full h-full rounded-md" />
        </div>
    )
}
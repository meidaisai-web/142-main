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
            <div className="absolute rounded-2xl bg-primary-700 min-w-[300px] w-[90vw] max-w-96 top-3 left-3 -z-10 border-4 border-primary">
                <div className="opacity-0">
                    <ItemHeader title={data.eventName} groupName={data.groupName} />
                    <ItemBody imageUrl={data.imageUrl} icons={data.icons} genre={data.genre} date={data.eventDate} location={data.location} catchphrase={data.catchphrase} />
                    <ItemFooter />
                </div>
            </div>
            <div className="rounded-2xl  overflow-hidden border-4 border-primary min-w-[300px] w-[90vw] max-w-96 transition-all duration-150 group-hover:-translate-y-1 group-hover:-translate-x-1 group-active:translate-y-1 group-active:translate-x-1">
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
        <div className="relative z-10 bg-primary  pt-2 px-3 pb-1 transition-colors duration-300 group-hover:bg-primary group-active:bg-primary text-white border-b-2 border-primary-100">
            <h2 className="font-bold h-6 truncate">{title}</h2>
            <p className="font-medium text-sm truncate">{groupName}</p>
            <div
                className="absolute top-full left-0 w-full h-[32px] bg-primary transition-colors duration-300 group-hover:bg-secondary-400 group-active:bg-secondary-700"
                style={{
                    WebkitMaskImage: "radial-gradient(35px 20px at 65% 0%, black 99%, transparent 100%), radial-gradient(35px 20px at 35% 0%, black 99%, transparent 100%), radial-gradient(50px 25px at 50% 25%, black 99%, transparent 100%), radial-gradient(35px 20px at 50% 0%, black 99%, transparent 100%), radial-gradient(35px 20px at 50% 0%, black 99%, transparent 100%), radial-gradient(35px 20px at 0% 0%, black 99%, transparent 100%), radial-gradient(35px 20px at 100% 0%, black 99%, transparent 100%) ",
                    maskImage: "radial-gradient(35px 20px at 65% 0%, black 99%, transparent 100%), radial-gradient(35px 20px at 35% 0%, black 99%, transparent 100%), radial-gradient(50px 25px at_50% 25%, black_99%, transparent_100_), radial-gradient(35px 20px at_50% 0%, black_99%, transparent_100_), radial-gradient(35px 20px at_50% 0%, black_99%, transparent_100_), radial-gradient(35px_20px_at_0%_0%, black_99%, transparent_100_),radial-gradient(35px_20px_at_100%_0%, black_99%, transparent_100_),",

                    WebkitMaskSize: "70px 32px, 70px 32px, 140px 32px, 90px 32px, 90px 32px, 70px 32px, 70px 32px",
                    maskSize: "70px 32px, 70px 32px, 140px 32px, 90px 32px, 90px 32px, 70px 32px, 70px 32px",

                    WebkitMaskRepeat: "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat",
                    maskRepeat: "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat",

                    WebkitMaskPosition: "25% top, 75% top, center top, 5% top, 95% top,left top, right top",
                    maskPosition: "25% top, 75% top, center top, 5% top, 95% top, left top, right top",

                    filter: "drop-shadow(0px 3px 2px rgba(0,0,0,0.15))"
                }}
            />


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
        <div className="bg-white text-black  pt-12 px-3 py-4 pb-7 text-xs font-medium">
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
                            <div key={index} className="w-8 h-8 ">
                                <Icon name={icon} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                    <div className="flex gap-2">
                        <div className="relative flex items-center justify-center w-4 h-4">
                            <Image src='/images/EventListView/Ellipse.svg' alt='' width={35} height={35} className="absolute " />
                            <Image src='/images/EventListView/heart.svg' alt='' width={16} height={16} className="absolute z-10" />
                        </div>
                        <p>{genre}</p>

                    </div>
                    <div className="flex gap-2">
                        <div className="relative flex items-center justify-center w-4 h-4">
                            <Image src='/images/EventListView/Ellipse.svg' alt='' width={35} height={35} className="absolute " />
                            <Image src='/images/EventListView/ccircle.svg' alt='' width={15} height={15} className="absolute  z-10" />
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
                            <p className="text-sm leading-snug break-words font-medium text-center w-full px-8">
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

        <div className="absolute -bottom-[5px] -right-3 flex justify-center items-center w-[140px] h-[90px] transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1 ">

            <svg
                className="absolute inset-0 w-full h-full text-primary transition-colors duration-150  group-hover:text-primary-600 group-active:text-primary-800 "
                viewBox="0 0 200 100"
                fill="white" 
                stroke="currentColor" 
                strokeWidth="4"
                strokeLinejoin="round"

            >
                <path d="M 30 100 C 10 80, 0 60, 25 45 C 30 10, 70 10, 80 20 C 110 -15, 170 -10, 175 35 C 175 55, 175 100, 175 100 Z" />
            </svg>
            <div className="relative z-10 flex items-center mt-4 ml-4">
                <p className="text-sm text-end font-medium">Read More!</p>
                <Image
                    src='/images/svg/triangle-right.svg'
                    alt=''
                    width={10}
                    height={10}
                    className="ml-2 transition-transform duration-150 "
                />
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
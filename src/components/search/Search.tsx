'use client';

import { MasterData } from "@/utils/models/MasterData";
import { getAllMasterDatas } from "@/utils/supabase/masterDataAction";
import useSWRInfinite from "swr/infinite";
import Button from "../buttons/Button";
import Image from "next/image";

export default function Search() {
    const limit = 10;
    const getKey = (pageIndex: number, previousPageData: MasterData[]) => {
        if (previousPageData && !previousPageData.length) return null; // 最後に到達した
        return { page: pageIndex, limit: limit, table: 'store' }; // SWR キー
    };
    const { data: datas, size, setSize, isLoading, isValidating } = useSWRInfinite(getKey, getAllMasterDatas)

    return(
        <div className="px-5">
            {datas?.map((data) => (
                data && (
                <div key={data[0].id}>
                    {data.map((item) => (
                        <EventItem key={item.id} data={item} />
                    ))}
                </div>
                )
            ))}
            <Button onClick={() => setSize(size + 1)} disabled={isLoading || isValidating}>
                Load More
            </Button>
        </div>
    )
}

interface EventItemProps {
    data: MasterData;
}

function EventItem({ data }: EventItemProps) {
    return (
        <div className="rounded-2xl overflow-hidden border-4 border-black">
            <ItemHeader title={data.eventName} groupName={data.groupName} />
            <ItemBody imageUrl={data.imageUrl} icons={data.icons} genre={data.genre} date={data.eventDate} location={data.location} catchphrase={data.catchphrase} />
            <ItemFooter />
        </div>
    )
}

interface ItemHeaderProps {
    title: string;
    groupName: string;
}

function ItemHeader({ title, groupName }: ItemHeaderProps) {
    return (
        <div className="bg-secondary pt-3 px-3 pb-1">
            <h2 className="font-bold h-6">{title}</h2>
            <p className="font-medium text-sm">{groupName}</p>
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
    const showIcons = [...icons];
    while (showIcons.length < 3) {
        showIcons.push('empty');
    }

    return (
        <div className="bg-white text-black p-3 text-xs font-medium">
            <div className="flex">
                <div>
                    <Image src={imageUrl} alt="企画画像" width={100} height={100} className="rounded-md" />
                    <div className="flex">
                        
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <p>{genre}</p>
                    </div>
                    <div className="flex">
                        <p>{date}</p>
                    </div>
                    <div className="flex">
                        <p>{location}</p>
                    </div>
                    <p>
                        {catchphrase}
                    </p>
                </div>
            </div>
        </div>
    )
}

function ItemFooter() {
    return (
        <div className="bg-secondary">
            <p>Read More</p>
        </div>
    )
}

interface IconProps {
    name: string;
}
function Icon({ name }: IconProps) {
    return (
        <div>
            <Image src={`/images/search/icons/${name}.svg`} alt={name} width={30} height={30} />
        </div>
    )
}
'use client';

import { MasterData } from "@/utils/models/MasterData";
import { getAllMasterDatas } from "@/utils/supabase/masterDataAction";
import useSWRInfinite from "swr/infinite";
import Button from "../buttons/Button";

export default function Search() {
    const limit = 10;
    const getKey = (pageIndex: number, previousPageData: MasterData[]) => {
        if (previousPageData && !previousPageData.length) return null; // 最後に到達した
        return { page: pageIndex, limit: limit, table: 'store' }; // SWR キー
    };
    const { data: datas, size, setSize, isLoading, isValidating } = useSWRInfinite(getKey, getAllMasterDatas)

    return(
        <div>
            {datas?.map((data) => (
                data && (
                <div key={data[0].id}>
                    {data.map((item) => (
                        <div key={item.id} className="w-full h-52">
                            <h2>{item.eventName}</h2>
                        </div>
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
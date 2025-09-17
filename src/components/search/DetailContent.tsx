'use client';

import { getUniqueMasterData } from "@/utils/supabase/master-data";
import { useEffect, useState } from "react";
import PageTitle from "../texts/PageTitle";
import { MasterData } from "@/utils/models/MasterData";

interface DetailContentProps {
    id: string;
}

export default function DetailContent({ id }: DetailContentProps) {
    const [data, setData] = useState<MasterData | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUniqueMasterData(id);
            setData(data);
        };
        fetchData();
    }, [id]);
    return (
        <div>
            <PageTitle>{data?.eventName}</PageTitle>
        </div>
    )
}
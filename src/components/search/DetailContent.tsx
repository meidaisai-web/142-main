'use client';

import { getUniqueMasterData } from "@/utils/supabase/masterDataAction";
import { useEffect, useState } from "react";
import PageTitle from "../texts/PageTitle";
import { MasterData } from "@/utils/models/MasterData";
import VoteView from "./VoteView";

interface DetailContentProps {
    id: string;
}

export default function DetailContent({ id }: DetailContentProps) {
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
                <PageTitle>読み込み中...</PageTitle>
            )}

            {error && (
                <div>
                    <PageTitle>企画が見つかりませんでした</PageTitle>
                </div>
            )}

            {!loading && !error && data && (
                <>
                    <PageTitle>{data.eventName}</PageTitle>
                    <VoteView id={id} groupId={data.groupId} type={data.type} />
                </>
            )}
        </div>
    )
}
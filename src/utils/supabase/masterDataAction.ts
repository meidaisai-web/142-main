import { MasterData } from "../models/MasterData";
import { SortType } from "../models/SortType";
import { createClient } from "./client";

export async function getAllMasterDatas(key: { page: number, limit: number, keyword: string, types: string[], dates: string[], places: string[], genres: string[], sortType: SortType }): Promise<MasterData[] | null> {
    const supabase = createClient();
    const start = key.limit * key.page;
    const end = start + key.limit - 1;
    const orderColumns = ['eventName', 'catchphrase', 'eventContent', 'groupName', 'eventDate', 'location', 'createdAt'];

    function order() {
        if (key.sortType.orderColumn === 'free') {
            return {
                orderColumn: 'createdAt',
                ascending: true
             }
        } else {
            return key.sortType;
        }
    }

    let query = supabase.from('MasterData').select('*');

    // キーワードフィルター（スペース区切りでAND検索、各キーワードはOR検索）
    if (key.keyword && key.keyword.trim()) {
        // 全角半角スペースで区切る
        const keywords = key.keyword.trim().split(/[\s　]+/).filter(k => k.length > 0);

        for (const keyword of keywords) {
            // 各キーワードに対してOR検索（部分一致）
            query = query.or(`eventName.ilike.%${keyword}%,catchphrase.ilike.%${keyword}%,eventContent.ilike.%${keyword}%,groupName.ilike.%${keyword}%,searchKeywords.ilike.%${keyword}%,projectType.ilike.%${keyword}%,genre.ilike.%${keyword}%,location.ilike.%${keyword}%,eventDate.ilike.%${keyword}%`);
        }
    }

    // タイプフィルター（OR検索）
    if (key.types && key.types.length > 0) {
        const typeConditions: string[] = [];
        const normalizedTypes = key.types.map(type => type.slice(0, -2));

        for (const type of normalizedTypes) {
            if (type === '実行委員会') {
                // 実行委員会企画の場合は、groupNameに「明大祭実行委員会」が含まれているものを検索
                typeConditions.push(`groupName.ilike.%明大祭実行委員会%`);
            } else {
                // 通常のタイプは完全一致
                typeConditions.push(`type.eq.${type}`);
            }
        }

        if (typeConditions.length > 0) {
            query = query.or(typeConditions.join(','));
        }
    }

    // 日程フィルター（OR検索、部分一致）
    if (key.dates && key.dates.length > 0) {
        const normalizedDates = key.dates.map(date => date.slice(3, 5)); // なぜかデコードするときに勝手にカッコが全角になってしまうので、曜日は除外する
        const dateConditions = normalizedDates.map(date => `eventDate.ilike.%${date}%`);
        query = query.or(dateConditions.join(','));
    }

    // 場所フィルター（OR検索、部分一致）
    if (key.places && key.places.length > 0) {
        const placeConditions: string[] = [];

        for (const place of key.places) {
            if (place === 'その他') {
                // その他の場合は、指定された場所を含まないものを検索
                const excludedPlaces = ['メインステージ', 'パフォーマンスエリア', 'エントランスエリア', '第一校舎', 'メディア棟', '和泉ラーニングスクエア'];
                const excludeConditions = excludedPlaces.map(excludePlace => `location.not.ilike.%${excludePlace}%`);
                placeConditions.push(`and(${excludeConditions.join(',')})`);
            } else {
                placeConditions.push(`location.ilike.%${place}%`);
            }
        }

        if (placeConditions.length > 0) {
            query = query.or(placeConditions.join(','));
        }
    }

    // ジャンルフィルター（OR検索、完全一致）
    if (key.genres && key.genres.length > 0) {
        const genreConditions = key.genres.map(genre => `genre.eq.${genre}`);
        query = query.or(genreConditions.join(','));
    }

    const { data, error } = await query.range(start, end).order(order().orderColumn, { ascending: order().ascending });
    console.log('Fetched data:', data);
    console.log('Fetch error:', error);

    if (error) {
        console.log(`Error fetching master data: ${error.message}`);
        return null;
    }
    return data as MasterData[];
}

export async function getUniqueMasterData(id: string): Promise<MasterData | null> {
    const supabase = createClient();
    const { data, error } = await supabase.from('MasterData').select('*').eq('id', id).single();
    if (error) {
        console.log(`Error fetching unique master data: ${error.message}`);
        return null;
    }
    return data as MasterData;
}
'use client';

import { MasterData } from "@/utils/models/MasterData";
import { getAllMasterDatas } from "@/utils/supabase/masterDataAction";
import useSWRInfinite from "swr/infinite";
import Button from "../buttons/Button";
import Image from "next/image";
import PageContainer from "../base/PageContainer";
import FilterView from "./FilterView";
import EventItems from "./EventListView";
import { useState, useEffect, useRef } from "react";

export default function Search() {
    const eventItemsRef = useRef<HTMLDivElement>(null);

    // localStorageのキー定数
    const STORAGE_KEY = 'searchConditions';

    // 一時的な検索条件（フィルター変更時に更新される）
    const [keyword, setKeyword] = useState<string>('');
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedDates, setSelectedDates] = useState<string[]>([]);
    const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    // 実際の検索条件（検索ボタン押下時に更新される）
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [searchTypes, setSearchTypes] = useState<string[]>([]);
    const [searchDates, setSearchDates] = useState<string[]>([]);
    const [searchPlaces, setSearchPlaces] = useState<string[]>([]);
    const [searchGenres, setSearchGenres] = useState<string[]>([]);

    // localStorageから検索条件を復元
    useEffect(() => {
        try {
            const savedConditions = localStorage.getItem(STORAGE_KEY);
            if (savedConditions) {
                const conditions = JSON.parse(savedConditions);
                setKeyword(conditions.keyword || '');
                setSelectedTypes(conditions.selectedTypes || []);
                setSelectedDates(conditions.selectedDates || []);
                setSelectedPlaces(conditions.selectedPlaces || []);
                setSelectedGenres(conditions.selectedGenres || []);
                // 検索条件も同時に設定（前回の検索結果を表示）
                setSearchKeyword(conditions.keyword || '');
                setSearchTypes(conditions.selectedTypes || []);
                setSearchDates(conditions.selectedDates || []);
                setSearchPlaces(conditions.selectedPlaces || []);
                setSearchGenres(conditions.selectedGenres || []);
            }
        } catch (error) {
            console.error('Failed to load search conditions from localStorage:', error);
        }
    }, []);

    // 検索条件をlocalStorageに保存
    const saveSearchConditions = () => {
        try {
            const conditions = {
                keyword,
                selectedTypes,
                selectedDates,
                selectedPlaces,
                selectedGenres
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(conditions));
        } catch (error) {
            console.error('Failed to save search conditions to localStorage:', error);
        }
    };

    const limit = 10;
    const getKey = (pageIndex: number, previousPageData: MasterData[]) => {
        if (previousPageData && !previousPageData.length) return null; // 最後に到達した
        return { page: pageIndex, limit: limit, keyword: searchKeyword, types: searchTypes, dates: searchDates, places: searchPlaces, genres: searchGenres }; // SWR キー
    };
    const { data: datas, size, setSize, isLoading, isValidating } = useSWRInfinite(getKey, getAllMasterDatas)

    // これ以上データがあるかどうかを判定
    const hasMoreData = datas ? datas[datas.length - 1]?.length === limit : true;

    return (
        <PageContainer>
            <FilterView
                keyword={keyword}
                setKeyword={setKeyword}
                selectedTypes={selectedTypes}
                setSelectedTypes={setSelectedTypes}
                selectedDates={selectedDates}
                setSelectedDates={setSelectedDates}
                selectedPlaces={selectedPlaces}
                setSelectedPlaces={setSelectedPlaces}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
            />
            <div className="flex justify-center">
                <button className="text-accent border-primary hover:border-accent border-b-2 font-medium" onClick={() => {
                    setKeyword('');
                    setSelectedTypes([]);
                    setSelectedDates([]);
                    setSelectedPlaces([]);
                    setSelectedGenres([]);
                }}>検索条件をクリア</button>
            </div>
            <Button className="mt-10 mb-20" onClick={() => {
                // 検索条件をlocalStorageに保存
                saveSearchConditions();

                // 検索条件を更新
                setSearchKeyword(keyword);
                setSearchTypes(selectedTypes);
                setSearchDates(selectedDates);
                setSearchPlaces(selectedPlaces);
                setSearchGenres(selectedGenres);
                // 検索実行
                setSize(1);

                // EventItemsまでスクロール（少し上に調整）
                const offset = -100; // スクロール位置を少し上に調整
                const top = eventItemsRef.current?.getBoundingClientRect().top || 0;
                window.scrollTo({
                    top: window.scrollY + top + offset,
                    behavior: "smooth"
                });
            }}>検索</Button>
            <IconList />
            <div className="mt-20" ref={eventItemsRef}>
                <EventItems datas={datas} />
            </div>
            {hasMoreData && (
                <Button onClick={() => setSize(size + 1)} disabled={isLoading || isValidating}>
                    Load More
                </Button>
            )}
        </PageContainer>
    )
}

function IconList() {
    const iconLists = [[
        { id: 'shoot', label: '撮影禁止'},
        { id: 'ticket', label: 'チケット制'},
        { id: 'food', label: '食べ物'},
        { id: 'drink', label: '飲み物'},
    ], [
        { id: 'sell', label: '物品販売'},
        { id: 'experience', label: '参加体験'},
        { id: 'eco', label: 'エコトレー'},
    ]]
    // const iconLists = [['shoot', 'ticket', 'food', 'drink'], ['sell', 'experience', 'eco']]
    return (
        <div className="flex flex-wrap justify-center gap-5 my-8">
            {iconLists.map((icons) => (
                <div key={icons[0].id} className="flex justify-center gap-5">
                    {icons.map((icon) => (
                        <div key={icon.id} className="flex flex-col items-center gap-1">
                            <Image src={`/images/svg/status/${icon.id}.svg`} alt={icon.label} width={100} height={100} className="w-14 h-14 rounded-xl" />
                            <label className='text-xs font-medium'>{icon.label}</label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
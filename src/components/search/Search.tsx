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
    const [sortType, setSortType] = useState<{ orderColumn: string; ascending: boolean }>({ orderColumn: 'free', ascending: true });

    // 実際の検索条件（検索ボタン押下時に更新される）
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [searchTypes, setSearchTypes] = useState<string[]>([]);
    const [searchDates, setSearchDates] = useState<string[]>([]);
    const [searchPlaces, setSearchPlaces] = useState<string[]>([]);
    const [searchGenres, setSearchGenres] = useState<string[]>([]);
    const [searchSortType, setSearchSortType] = useState<{ orderColumn: string; ascending: boolean }>({ orderColumn: 'free', ascending: true });

        // URLパラメータまたはlocalStorageから検索条件を復元
    useEffect(() => {
        try {
            // URLパラメータからkeywordを取得
            const urlParams = new URLSearchParams(window.location.search);
            const urlKeyword = urlParams.get('keyword');

            if (urlKeyword !== null) {
                // URLにkeywordパラメータが含まれている場合（空文字も含む）、localStorageをリセット
                localStorage.removeItem(STORAGE_KEY);
                
                // keywordとtimestampだけを保存（空文字の場合も保存）
                const conditions = {
                    keyword: urlKeyword,
                    selectedTypes: [],
                    selectedDates: [],
                    selectedPlaces: [],
                    selectedGenres: [],
                    sortType: { orderColumn: 'free', ascending: true },
                    timestamp: Date.now()
                };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(conditions));

                // URLのkeywordを検索条件に設定（空文字の場合も設定）
                setKeyword(urlKeyword);
                setSelectedTypes([]);
                setSelectedDates([]);
                setSelectedPlaces([]);
                setSelectedGenres([]);
                setSortType({ orderColumn: 'free', ascending: true });
                // 検索条件も同時に設定(すぐに検索結果を表示)
                setSearchKeyword(urlKeyword);
                setSearchTypes([]);
                setSearchDates([]);
                setSearchPlaces([]);
                setSearchGenres([]);
                setSearchSortType({ orderColumn: 'free', ascending: true });

                // EventItemsまでスクロール（少し上に調整）
                setTimeout(() => {
                    const offset = -100; // スクロール位置を少し上に調整
                    const top = eventItemsRef.current?.getBoundingClientRect().top || 0;
                    window.scrollTo({
                        top: window.scrollY + top + offset,
                        behavior: "smooth"
                    });
                }, 100); // DOM更新を待つために少し遅延
            } else {
                // URLにkeywordがない場合、localStorageから復元
                const savedConditions = localStorage.getItem(STORAGE_KEY);
                if (savedConditions) {
                    const conditions = JSON.parse(savedConditions);
                    const savedTimestamp = conditions.timestamp;
                    const currentTime = Date.now();
                    const fiveMinutesInMs = 5 * 60 * 1000; // 5分をミリ秒に変換

                    // 5分以上経過していたらlocalStorageをクリアして終了
                    if (!savedTimestamp || currentTime - savedTimestamp > fiveMinutesInMs) {
                        localStorage.removeItem(STORAGE_KEY);
                        return;
                    }

                    setKeyword(conditions.keyword || '');
                    setSelectedTypes(conditions.selectedTypes || []);
                    setSelectedDates(conditions.selectedDates || []);
                    setSelectedPlaces(conditions.selectedPlaces || []);
                    setSelectedGenres(conditions.selectedGenres || []);
                    setSortType(conditions.sortType || { orderColumn: 'free', ascending: true });
                    // 検索条件も同時に設定(前回の検索結果を表示)
                    setSearchKeyword(conditions.keyword || '');
                    setSearchTypes(conditions.selectedTypes || []);
                    setSearchDates(conditions.selectedDates || []);
                    setSearchPlaces(conditions.selectedPlaces || []);
                    setSearchGenres(conditions.selectedGenres || []);
                    setSearchSortType(conditions.sortType || { orderColumn: 'free', ascending: true });
                }
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
                selectedGenres,
                sortType,
                timestamp: Date.now() // 現在時刻をタイムスタンプとして保存
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(conditions));
        } catch (error) {
            console.error('Failed to save search conditions to localStorage:', error);
        }
    };

    const limit = 10;
    const getKey = (pageIndex: number, previousPageData: MasterData[]) => {
        if (previousPageData && !previousPageData.length) return null; // 最後に到達した
        return { page: pageIndex, limit: limit, keyword: searchKeyword, types: searchTypes, dates: searchDates, places: searchPlaces, genres: searchGenres, sortType: searchSortType }; // SWR キー
    };
    const { data: datas, size, setSize, isLoading, isValidating } = useSWRInfinite(getKey, getAllMasterDatas)

    // これ以上データがあるかどうかを判定
    const hasMoreData = datas ? datas[datas.length - 1]?.length === limit : true;

    function onTapSearchButton() {
        // 検索条件をlocalStorageに保存
        saveSearchConditions();

        // 検索条件を更新
        setSearchKeyword(keyword);
        setSearchTypes(selectedTypes);
        setSearchDates(selectedDates);
        setSearchPlaces(selectedPlaces);
        setSearchGenres(selectedGenres);
        setSearchSortType(sortType);
        // 検索実行
        setSize(1);

        // EventItemsまでスクロール（少し上に調整）
        const offset = -100; // スクロール位置を少し上に調整
        const top = eventItemsRef.current?.getBoundingClientRect().top || 0;
        window.scrollTo({
            top: window.scrollY + top + offset,
            behavior: "smooth"
        });
    }

    return (
        <div className="flex flex-col items-center">
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
                    sortType={sortType}
                    setSortType={setSortType}
                    onEnter={onTapSearchButton}
                />
                <div className="flex justify-center">
                    <button className="text-accent border-primary hover:border-accent border-b-2 font-medium" onClick={() => {
                        setKeyword('');
                        setSelectedTypes([]);
                        setSelectedDates([]);
                        setSelectedPlaces([]);
                        setSelectedGenres([]);
                        setSortType({ orderColumn: 'free', ascending: true });
                    }}>検索条件をクリア</button>
                </div>
                <Button className="mt-10 mb-20" onClick={() => onTapSearchButton()}>検索</Button>
                <IconList />
            </PageContainer>
            <EventItems datas={datas} ref={eventItemsRef} />
            {hasMoreData && (
                <Button onClick={() => setSize(size + 1)} disabled={isLoading || isValidating}>
                    {isLoading || isValidating ? '読み込み中...' : 'もっと見る'}
                </Button>
            )}
        </div>
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
        { id: 'cashless', label: 'キャッシュレス'},
    ]]
    return (
        <div className="flex flex-wrap justify-center my-8 w-full gap-y-5">
            {iconLists.map((icons) => (
                <div key={icons[0].id} className="flex justify-center">
                    {icons.map((icon) => (
                        <div key={icon.id} className="flex flex-col items-center gap-1 w-20 overflow-visible">
                            <Image src={`/images/svg/status/${icon.id}.svg`} alt={icon.label} width={100} height={100} className="w-14 h-14 rounded-xl" />
                            <label className='text-xs font-medium text-nowrap'>{icon.label}</label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import Image from "next/image";
import type { MasterData } from "@/utils/models/MasterData";
import type { SortType } from "@/utils/models/SortType";
import { getAllMasterDatas, getAllMasterDatasForDateSort } from "@/utils/supabase/masterDataAction";
import Button from "../buttons/Button";
import PageContainer from "../base/PageContainer";
import FilterView from "./FilterView";
import EventItems from "./EventListView";
import MeichamSection from "./MeichamSection";
import SectionTitle from "../texts/SectionTitle";

const STORAGE_KEY = "searchConditions";
const STORAGE_TTL = 5 * 60 * 1000;
const PAGE_SIZE = 6;
const SORT_COLUMNS = ["eventName", "groupName", "eventDate", "location", "free"];

interface SearchConditions {
    keyword: string;
    selectedTypes: string[];
    selectedDates: string[];
    selectedPlaces: string[];
    selectedGenres: string[];
    sortType: SortType;
}

type PageQuery = Parameters<typeof getAllMasterDatas>[0];
type FetchQuery = PageQuery & { scope?: "all-event-dates" };

function emptyConditions(): SearchConditions {
    return {
        keyword: "",
        selectedTypes: [],
        selectedDates: [],
        selectedPlaces: [],
        selectedGenres: [],
        sortType: { orderColumn: "free", ascending: true },
    };
}

function stringArray(value: unknown): string[] {
    return Array.isArray(value) ? [...new Set(value.filter((item): item is string => typeof item === "string"))] : [];
}

function normalizeConditions(value: unknown): SearchConditions {
    const defaults = emptyConditions();
    if (typeof value !== "object" || value === null) return defaults;
    const record = value as Record<string, unknown>;
    const sort = typeof record.sortType === "object" && record.sortType !== null
        ? record.sortType as Record<string, unknown>
        : {};
    return {
        keyword: typeof record.keyword === "string" ? record.keyword : "",
        selectedTypes: stringArray(record.selectedTypes),
        selectedDates: stringArray(record.selectedDates),
        selectedPlaces: stringArray(record.selectedPlaces),
        selectedGenres: stringArray(record.selectedGenres),
        sortType: {
            orderColumn: typeof sort.orderColumn === "string" && SORT_COLUMNS.includes(sort.orderColumn) ? sort.orderColumn : "free",
            ascending: typeof sort.ascending === "boolean" ? sort.ascending : true,
        },
    };
}

function conditionsFromUrl(params: URLSearchParams): SearchConditions | null {
    const keys = ["keyword", "type", "date", "place", "genre", "sort", "ascending"];
    if (!keys.some((key) => params.has(key))) return null;
    return normalizeConditions({
        keyword: params.get("keyword") ?? "",
        selectedTypes: params.getAll("type"),
        selectedDates: params.getAll("date"),
        selectedPlaces: params.getAll("place"),
        selectedGenres: params.getAll("genre"),
        sortType: { orderColumn: params.get("sort") ?? "free", ascending: params.get("ascending") !== "false" },
    });
}

function pageIndexFromUrl(params: URLSearchParams): number {
    const raw = params.get("page") ?? "1";
    const page = Number(raw);
    return /^\d+$/.test(raw) && Number.isSafeInteger(page) && page >= 1 ? page - 1 : 0;
}

function conditionsToQuery(conditions: SearchConditions, pageIndex: number): string {
    const params = new URLSearchParams();
    // 空キーワードも保存し、URLから「絞り込みなし」を復元できるようにする。
    params.set("keyword", conditions.keyword);
    conditions.selectedTypes.forEach((value) => params.append("type", value));
    conditions.selectedDates.forEach((value) => params.append("date", value));
    conditions.selectedPlaces.forEach((value) => params.append("place", value));
    conditions.selectedGenres.forEach((value) => params.append("genre", value));
    params.set("sort", conditions.sortType.orderColumn);
    params.set("ascending", String(conditions.sortType.ascending));
    params.set("page", String(pageIndex + 1));
    return params.toString();
}

function makePageQuery(conditions: SearchConditions, pageIndex: number): PageQuery {
    return {
        page: pageIndex,
        limit: PAGE_SIZE,
        keyword: conditions.keyword,
        types: conditions.selectedTypes,
        dates: conditions.selectedDates,
        places: conditions.selectedPlaces,
        genres: conditions.selectedGenres,
        sortType: conditions.sortType,
    };
}

async function fetchPage(key: FetchQuery): Promise<MasterData[]> {
    const result = key.scope === "all-event-dates"
        ? await getAllMasterDatasForDateSort(key)
        : await getAllMasterDatas(key);
    if (result === null) throw new Error("企画情報を取得できませんでした。");
    return result;
}

// useSearchParamsを使う部分を、このファイル内でSuspenseに包む。
export default function Search() {
    return (
        <Suspense fallback={<p className="py-10 text-center" role="status">検索画面を読み込み中...</p>}>
            <SearchContent />
        </Suspense>
    );
}

function SearchContent() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const queryString = searchParams?.toString() ?? "";
    const eventItemsRef = useRef<HTMLDivElement>(null);
    const pendingScroll = useRef<string | null>(null);
    const loadMoreLock = useRef(false);
    const lastSyncedConditions = useRef<string | null>(null);
    const [ready, setReady] = useState(false);
    const [savedConditions, setSavedConditions] = useState<SearchConditions>(emptyConditions);
    const [keyword, setKeyword] = useState("");
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedDates, setSelectedDates] = useState<string[]>([]);
    const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [sortType, setSortType] = useState<SortType>({ orderColumn: "free", ascending: true });

    useEffect(() => {
        try {
            const saved = window.localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const record = JSON.parse(saved);
                if (typeof record.timestamp === "number" && Date.now() - record.timestamp <= STORAGE_TTL) {
                    setSavedConditions(normalizeConditions(record));
                } else {
                    window.localStorage.removeItem(STORAGE_KEY);
                }
            }
        } catch (error) {
            console.error("検索条件の復元に失敗しました:", error);
        } finally {
            setReady(true);
        }
    }, []);

    const params = useMemo(() => new URLSearchParams(queryString), [queryString]);
    // 追加読み込みでpageだけ変わったとき、編集中の検索欄を上書きしない。
    const conditionQueryString = useMemo(() => {
        const conditionParams = new URLSearchParams(queryString);
        conditionParams.delete("page");
        return conditionParams.toString();
    }, [queryString]);
    const conditions = useMemo(
        () => conditionsFromUrl(new URLSearchParams(conditionQueryString)) ?? savedConditions,
        [conditionQueryString, savedConditions],
    );
    // pageは画面の切り替え先ではなく、先頭から読み込む6件単位の数を表す。
    const pageIndex = pageIndexFromUrl(params);
    const batchCount = pageIndex + 1;
    const conditionSignature = conditionsToQuery(conditions, 0);
    const requestSignature = conditionsToQuery(conditions, pageIndex);

    useEffect(() => {
        if (!ready || lastSyncedConditions.current === conditionSignature) return;
        lastSyncedConditions.current = conditionSignature;
        setKeyword(conditions.keyword);
        setSelectedTypes(conditions.selectedTypes);
        setSelectedDates(conditions.selectedDates);
        setSelectedPlaces(conditions.selectedPlaces);
        setSelectedGenres(conditions.selectedGenres);
        setSortType(conditions.sortType);
    }, [conditions, conditionSignature, ready]);

    const isDateSort = conditions.sortType.orderColumn === "eventDate";
    const {
        data: dateData, error: dateError, isLoading: dateLoading,
        isValidating: dateValidating, mutate: retryDates,
    } = useSWR<MasterData[], Error>(
        ready && isDateSort ? { ...makePageQuery(conditions, 0), scope: "all-event-dates" } : null,
        fetchPage,
        { keepPreviousData: false },
    );
    const {
        data: pages, error: pagesError, isLoading: pagesLoading,
        isValidating: pagesValidating, mutate: retryPages, setSize,
    } = useSWRInfinite<MasterData[], Error>(
        (index: number, previousPage: MasterData[] | null) => {
            if (!ready || isDateSort || index >= batchCount) return null;
            if (previousPage && previousPage.length < PAGE_SIZE) return null;
            return makePageQuery(conditions, index);
        },
        fetchPage,
        { initialSize: 1, persistSize: false, revalidateFirstPage: false, keepPreviousData: false },
    );

    useEffect(() => {
        loadMoreLock.current = false;
        if (ready && !isDateSort) void setSize(batchCount).catch(() => {});
    }, [ready, isDateSort, batchCount, conditionSignature, setSize]);

    // 通常検索は取得済みの全バッチを連結。実施日順はソート済み全件の先頭から追加する。
    const data = useMemo(() => {
        if (isDateSort) return dateData?.slice(0, batchCount * PAGE_SIZE);
        return pages?.slice(0, batchCount).flatMap((page) => page.slice(0, PAGE_SIZE));
    }, [dateData, pages, isDateSort, batchCount]);
    const error = isDateSort ? dateError : pagesError;
    const isLoading = isDateSort ? dateLoading : pagesLoading;
    const isValidating = isDateSort ? dateValidating : pagesValidating;
    const lastPage = pages?.[Math.min(pages.length, batchCount) - 1];
    const isLoadingMore = !isDateSort && !error && pages !== undefined
        && pages.length < batchCount && lastPage?.length === PAGE_SIZE;
    const retryResults = () => isDateSort ? retryDates() : retryPages();

    // 最終バッチが6件ぴったりでも、次が空なら追加ボタンを表示しない。
    const canCheckNext = ready && !isDateSort && !error && !isLoadingMore
        && pages !== undefined && pages.length >= batchCount && lastPage?.length === PAGE_SIZE;
    const { data: nextData, error: nextError, mutate: retryNextPage } = useSWR<MasterData[], Error>(
        canCheckNext ? makePageQuery(conditions, batchCount) : null,
        fetchPage,
        { keepPreviousData: false },
    );
    const hasNextPage = isDateSort
        ? Boolean(dateData && dateData.length > batchCount * PAGE_SIZE)
        : canCheckNext && Boolean(nextData?.length);
    const checkingNextPage = canCheckNext && nextData === undefined && !nextError;

    function scrollToResults() {
        const element = eventItemsRef.current;
        if (!element) return;
        window.scrollTo({
            top: Math.max(0, window.scrollY + element.getBoundingClientRect().top - 100),
            behavior: "smooth",
        });
    }

    useEffect(() => {
        if (pendingScroll.current !== requestSignature || data === undefined || isLoading) return;
        pendingScroll.current = null;
        const frame = window.requestAnimationFrame(() => {
            const element = eventItemsRef.current;
            if (!element) return;
            window.scrollTo({ top: Math.max(0, window.scrollY + element.getBoundingClientRect().top - 100), behavior: "smooth" });
        });
        return () => window.cancelAnimationFrame(frame);
    }, [data, isLoading, requestSignature]);

    function saveConditions(next: SearchConditions) {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...next, timestamp: Date.now() }));
        } catch (error) {
            console.error("検索条件の保存に失敗しました:", error);
        }
    }

    function onTapSearchButton() {
        loadMoreLock.current = false;
        const next = normalizeConditions({ keyword, selectedTypes, selectedDates, selectedPlaces, selectedGenres, sortType });
        const nextQuery = conditionsToQuery(next, 0);
        saveConditions(next);
        pendingScroll.current = nextQuery;
        if (nextQuery === requestSignature && data !== undefined && !isLoading) {
            pendingScroll.current = null;
            scrollToResults();
        }
        // 検索条件とページ番号だけを変更し、ページ先頭への自動スクロールを止める。
        router.replace(`${pathname}?${nextQuery}`, { scroll: false });
    }

    function loadMore() {
        if (loadMoreLock.current || !hasNextPage || isLoading || isLoadingMore || isValidating || error) return;
        loadMoreLock.current = true;
        const nextQuery = conditionsToQuery(conditions, pageIndex + 1);
        saveConditions(conditions);
        // URLの読み込み数だけ更新し、表示済みカードとスクロール位置を保つ。
        router.replace(`${pathname}?${nextQuery}`, { scroll: false });
    }

    return (
        // 既存Footerの雲の上向き移動分（414/1684 × 7/12）を一覧側に確保する。
        <div
            className="flex w-full flex-col items-center"
            style={{ paddingBottom: "calc(14.35vw + 2rem + env(safe-area-inset-bottom, 0px))" }}
        >
            <PageContainer reserveFooterSpace={false}>
                <FilterView
                    keyword={keyword} setKeyword={setKeyword}
                    selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes}
                    selectedDates={selectedDates} setSelectedDates={setSelectedDates}
                    selectedPlaces={selectedPlaces} setSelectedPlaces={setSelectedPlaces}
                    selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}
                    sortType={sortType} setSortType={setSortType}
                    onEnter={onTapSearchButton}
                />
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="border-primary hover:border-primary-700 border-b-2 font-medium"
                        onClick={() => {
                            setKeyword(""); setSelectedTypes([]); setSelectedDates([]);
                            setSelectedPlaces([]); setSelectedGenres([]);
                            setSortType({ orderColumn: "free", ascending: true });
                        }}
                    >検索条件をクリア</button>
                </div>
                <Button size="lg" className="mt-10 mb-10" onClick={onTapSearchButton} disabled={!ready}>検索</Button>
                <IconList />
                <MeichamSection />
            </PageContainer>

            <section className="flex w-full flex-col items-center" aria-label="企画一覧">
                <SectionTitle className="!mt-4 !mb-0">企画一覧</SectionTitle>
                <div ref={eventItemsRef} className="flex w-full flex-col items-center scroll-mt-24">
                    <p className="mt-2 text-sm text-gray-600" aria-live="polite">
                        {data && data.length > 0 ? `${data.length}件表示中` : ""}
                    </p>
                    {(!ready || (isLoading && data === undefined)) && <p className="py-10 text-center" role="status">読み込み中...</p>}
                    {(data !== undefined || !error) && (
                        <EventItems datas={data === undefined ? undefined : [data]} isLoading={!ready || isLoading || isLoadingMore} />
                    )}
                </div>

                <div aria-label="企画の追加読み込み" className="mt-2 flex flex-wrap items-center justify-center gap-4 px-5">
                    {error && (
                        <div className="py-4 text-center" role="alert">
                            <p>{data?.length ? "追加の企画情報を取得できませんでした。" : "企画情報を取得できませんでした。"}</p>
                            <Button className="mt-4" onClick={() => void retryResults().catch(() => {})}>再読み込み</Button>
                        </div>
                    )}
                    {!error && (hasNextPage || checkingNextPage || isLoadingMore) && (
                        <Button onClick={loadMore} disabled={!hasNextPage || isLoading || isLoadingMore || isValidating}>
                            {isLoadingMore ? "読み込み中..." : checkingNextPage ? "続きの企画を確認中..." : "もっと読み込む"}
                        </Button>
                    )}
                    {canCheckNext && nextError && (
                        <div role="alert" className="text-center">
                            <p className="mb-2 text-sm">続きの企画を確認できませんでした。</p>
                            <Button onClick={() => void retryNextPage().catch(() => {})}>再試行</Button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

function IconList() {
    const iconLists = [
        [{ id: "shoot", label: "撮影禁止" }, { id: "ticket", label: "チケット制" }, { id: "food", label: "食べ物" }, { id: "drink", label: "飲み物" }],
        [{ id: "sell", label: "物品販売" }, { id: "experience", label: "参加体験" }, { id: "eco", label: "エコトレー" }, { id: "cashless", label: "キャッシュレス" }],
    ];
    return (
        <div className="flex flex-wrap justify-center my-8 w-full gap-y-5">
            {iconLists.map((icons) => (
                <div key={icons[0].id} className="flex justify-center">
                    {icons.map((icon) => (
                        <div key={icon.id} className="flex flex-col items-center gap-1 w-20 overflow-visible">
                            <Image src={`/images/status/${icon.id}.svg`} alt={icon.label} width={100} height={100} className="w-14 h-14 rounded-xl" />
                            <span className="text-xs font-medium text-nowrap">{icon.label}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

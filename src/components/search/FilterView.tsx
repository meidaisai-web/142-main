'use client';

import { useId, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../texts/SectionTitle";
import SearchBar from "../texts/SearchBar";
import Label from "../texts/Label";
import Checkbox from "../buttons/Checkbox";
import Image from "next/image";
import type { SortType } from "@/utils/models/SortType";

interface FilterViewProps {
    keyword: string;
    setKeyword: (keyword: string) => void;
    selectedTypes: string[];
    setSelectedTypes: Dispatch<SetStateAction<string[]>>;
    selectedDates: string[];
    setSelectedDates: Dispatch<SetStateAction<string[]>>;
    selectedPlaces: string[];
    setSelectedPlaces: Dispatch<SetStateAction<string[]>>;
    selectedGenres: string[];
    setSelectedGenres: Dispatch<SetStateAction<string[]>>;
    sortType: SortType;
    setSortType: Dispatch<SetStateAction<SortType>>;
    onEnter?: () => void;
}

export default function FilterView({
    keyword,
    setKeyword,
    selectedTypes,
    setSelectedTypes,
    selectedDates,
    setSelectedDates,
    selectedPlaces,
    setSelectedPlaces,
    selectedGenres,
    setSelectedGenres,
    sortType,
    setSortType,
    onEnter,
}: FilterViewProps) {
    const [isOpen, setIsOpen] = useState(false);
    const filterId = useId();
    const panelId = `${filterId}-panel`;

    // 選択中のチェック項目数。キーワード・並び替えは含めません。
    const activeFilterCount =
        selectedTypes.length +
        selectedDates.length +
        selectedPlaces.length +
        selectedGenres.length;

    return (
        <div className="mb-6">
            <SectionTitle>キーワード検索</SectionTitle>
            <SearchBar text={keyword} setText={setKeyword} onEnter={onEnter} />
            <div className="flex justify-center mt-4 ">
                <button
                    type="button"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    aria-label={`${isOpen ? "絞り込みを閉じる" : "詳細検索を開く"}${activeFilterCount > 0 ? `（${activeFilterCount}項目を選択中）` : ""}`}
                    className="group relative isolate mx-auto h-12 w-48 cursor-pointer select-none transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-1 sm:h-14 sm:w-64 before:absolute before:inset-x-0 before:-top-8 before:-bottom-4 before:content-[''] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-secondary motion-reduce:translate-y-0 motion-reduce:transition-none"
                >
                    {/* 矩形ではなく、元の雲画像の輪郭に沿って影を付ける。 */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-5 z-0 drop-shadow-[0_4px_1px_rgba(91,157,149,0.28)] transition-[filter] duration-200 group-hover:drop-shadow-[0_6px_3px_rgba(91,157,149,0.32)] group-active:drop-shadow-[0_1px_1px_rgba(91,157,149,0.24)] sm:-top-8 motion-reduce:transition-none"
                    >
                        <Image
                            src="/images/EventListView/Group614.svg"
                            alt=""
                            width={500}
                            height={500}
                            className="block h-auto w-[80%] mx-auto object-contain"
                        />
                        {/* 同じ画像をマスクに使い、雲の外へ色がはみ出さないようにする。 */}
                        <span
                            className={`absolute inset-0 bg-[#84c7c2]/15 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100 motion-reduce:transition-none ${isOpen ? "opacity-100" : "opacity-0"}`}
                            style={{
                                maskImage: "url('/images/EventListView/Group614.svg')",
                                maskMode: "alpha",
                                maskSize: "100% 100%",
                                maskRepeat: "no-repeat",
                                WebkitMaskImage: "url('/images/EventListView/Group614.svg')",
                                WebkitMaskSize: "100% 100%",
                                WebkitMaskRepeat: "no-repeat",
                            }}
                        />
                    </div>
                    <div className="font-bold relative z-10 h-full w-full">
                        <div className="h-full w-full flex justify-center items-center">
                            <span className="w-20 sm:w-20  text-center text-md sm:text-xl mb-7 sm:mb-10">
                                {isOpen ? "閉じる" : "詳細検索"}
                            </span>
                            <Image
                                src="/images/EventListView/Arrowright.svg"
                                alt=""
                                width={40}
                                height={40}
                                className={`w-5 h-7 sm:w-8 sm:h-10 mb-5 sm:mb-5 transition-transform -translate-y-1 sm:-translate-y-2  ${isOpen ? "rotate-180" : "rotate-0"}`}
                            />
                        </div>
                    </div>
                    {activeFilterCount > 0 && (
                        <span
                            aria-hidden="true"
                            className="absolute right-[12%] -top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-[#84c7c2] text-lg leading-none text-white"
                        >
                            {activeFilterCount}
                        </span>
                    )}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id={panelId}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <SectionTitle>絞り込み</SectionTitle>
                        <DetailFilterView
                            selectedTypes={selectedTypes}
                            setSelectedTypes={setSelectedTypes}
                            selectedDates={selectedDates}
                            setSelectedDates={setSelectedDates}
                            selectedPlaces={selectedPlaces}
                            setSelectedPlaces={setSelectedPlaces}
                            selectedGenres={selectedGenres}
                            setSelectedGenres={setSelectedGenres}
                        />
                        <SectionTitle>並び替え</SectionTitle>
                        <SortView sortType={sortType} setSortType={setSortType} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

interface DetailFilterViewProps {
    selectedTypes: string[];
    setSelectedTypes: Dispatch<SetStateAction<string[]>>;
    selectedDates: string[];
    setSelectedDates: Dispatch<SetStateAction<string[]>>;
    selectedPlaces: string[];
    setSelectedPlaces: Dispatch<SetStateAction<string[]>>;
    selectedGenres: string[];
    setSelectedGenres: Dispatch<SetStateAction<string[]>>;
}

function DetailFilterView({
    selectedTypes,
    setSelectedTypes,
    selectedDates,
    setSelectedDates,
    selectedPlaces,
    setSelectedPlaces,
    selectedGenres,
    setSelectedGenres,
}: DetailFilterViewProps) {
    const checkboxList = [
        {
            label: "企画区分",
            selectedArray: selectedTypes,
            setSelectedArray: setSelectedTypes,
            options: ["総合ステージ企画", "教室企画", "模擬店企画", "実行委員会企画"],
        },
        {
            label: "日程",
            selectedArray: selectedDates,
            setSelectedArray: setSelectedDates,
            options: ["10月30日(金)", "10月31日(土)", "11月1日(日)"],
        },
        {
            label: "場所",
            selectedArray: selectedPlaces,
            setSelectedArray: setSelectedPlaces,
            options: [
                "メインステージ",
                "パフォーマンスエリア",
                "エントランスエリア",
                "屋内ステージ",
                "第一校舎",
                "メディア棟",
                "和泉ラーニングスクエア",
                "その他",
            ],
        },
        {
            label: "ジャンル",
            selectedArray: selectedGenres,
            setSelectedArray: setSelectedGenres,
            options: ["模擬店", "音楽", "ダンス", "喫茶", "ゲスト", "展示", "参加体験", "パフォーマンス"],
        },
    ];

    const handleCheckboxChange = (
        option: string,
        setSelectedArray: Dispatch<SetStateAction<string[]>>,
    ) => {
        setSelectedArray((previous) =>
            previous.includes(option)
                ? previous.filter((item) => item !== option)
                : [...previous, option],
        );
    };

    return (
        <div className="flex flex-col gap-14 md:gap-6 mt-10 object-contain">
            {checkboxList.map((checkbox) => (
                <div
                    key={checkbox.label}
                    role="group"
                    aria-label={checkbox.label}
                    className="flex gap-8"
                >
                    <Label>{checkbox.label}</Label>
                    <div className="flex flex-wrap gap-x-8 gap-y-3">
                        {checkbox.options.map((option) => (
                            <Checkbox
                                key={option}
                                label={option}
                                checked={checkbox.selectedArray.includes(option)}
                                setChecked={() => handleCheckboxChange(option, checkbox.setSelectedArray)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

interface SortViewProps {
    sortType: SortType;
    setSortType: Dispatch<SetStateAction<SortType>>;
}

function SortView({ sortType, setSortType }: SortViewProps) {
    const sortList = [
        { id: "eventName", label: "企画名" },
        { id: "groupName", label: "団体名" },
        { id: "eventDate", label: "実施日" },
        { id: "location", label: "場所" },
        { id: "free", label: "おまかせ" },
    ];

    function handleSortClick(id: string) {
        if (id === "free") {
            setSortType({ orderColumn: "free", ascending: true });
        } else if (sortType.orderColumn === id) {
            setSortType({ orderColumn: id, ascending: !sortType.ascending });
        } else {
            setSortType({ orderColumn: id, ascending: true });
        }
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-wrap mt-8 gap-4">
                {sortList.map((sort) => (
                    <button
                        key={sort.id}
                        type="button"
                        onClick={() => handleSortClick(sort.id)}
                        aria-pressed={sort.id === sortType.orderColumn}
                        aria-label={`${sort.label}${sort.id === sortType.orderColumn && sort.id !== "free" ? `（${sortType.ascending ? "昇順" : "降順"}）` : ""}`}
                        className={`flex justify-center items-center text-sm text-center w-24 py-1 border-2 border-secondary rounded-full transition ${sort.id === sortType.orderColumn ? "bg-secondary-900 text-white" : "bg-secondary-100 hover:bg-secondary-300"}`}
                    >
                        <span>{sort.label}</span>
                        {sort.id === sortType.orderColumn && sort.id !== "free" && (
                            <Image
                                src={sortType.ascending ? "/images/EventListView/Polygon80.svg" : "/images/EventListView/Polygon81.svg"}
                                alt=""
                                width={10}
                                height={10}
                                className="ml-2"
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

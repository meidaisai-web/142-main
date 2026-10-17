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
            <SectionTitle className="!mb-2">キーワード検索</SectionTitle>
            <div className="-mt-8">
                <SearchBar text={keyword} setText={setKeyword} onEnter={onEnter}/>
            </div>
            <div className="flex justify-center mt-8">
                <button
                    type="button"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    aria-label={`${isOpen ? "絞り込みを閉じる" : "詳細検索を開く"}${activeFilterCount > 0 ? `（${activeFilterCount}項目を選択中）` : ""}`}
                    className="relative h-12 w-48 sm:h-14 sm:w-64 group mx-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
                >
                    <div className="absolute inset-0 w-full h-full text-center pointer-events-none">
                        <Image
                            src="/images/EventListView/Group614.svg"
                            alt=""
                            width={500}
                            height={500}
                            className="absolute -top-5 sm:-top-8 -z-10 w-full h-auto object-contain"
                        />
                    </div>
                    <div className="font-bold relative z-10 h-full w-full">
                        <div className="h-full w-full flex justify-center items-center">
                            <span className="w-20 sm:w-28 text-center text-lg sm:text-2xl mb-3 sm:mb-5">
                                {isOpen ? "閉じる" : "詳細検索"}
                            </span>
                            <Image
                                src="/images/EventListView/Arrowright.svg"
                                alt=""
                                width={40}
                                height={40}
                                className={`w-7 h-7 sm:w-10 sm:h-10 transition-transform -translate-y-2 sm:-translate-y-3 ${isOpen ? "rotate-180" : "rotate-0"}`}
                            />
                        </div>
                    </div>
                    {activeFilterCount > 0 && (
                        <span
                            aria-hidden="true"
                            className="absolute right-[15%] -top-7 sm:-top-9 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-lg leading-none text-white"
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
                        <SectionTitle className="!-mb-3">並び替え</SectionTitle>
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

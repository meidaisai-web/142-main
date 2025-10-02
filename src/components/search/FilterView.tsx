'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../texts/SectionTitle";
import SearchBar from "../texts/SearchBar";
import Label from "../texts/Label";
import Checkbox from "../buttons/Checkbox";
import Button from "../buttons/Button";

interface FilterViewProps {
    keyword: string;
    setKeyword: (keyword: string) => void;
    selectedTypes: string[];
    setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
    selectedDates: string[];
    setSelectedDates: React.Dispatch<React.SetStateAction<string[]>>;
    selectedPlaces: string[];
    setSelectedPlaces: React.Dispatch<React.SetStateAction<string[]>>;
    selectedGenres: string[];
    setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function FilterView({ keyword, setKeyword, selectedTypes, setSelectedTypes, selectedDates, setSelectedDates, selectedPlaces, setSelectedPlaces, selectedGenres, setSelectedGenres }: FilterViewProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <SectionTitle>キーワード検索</SectionTitle>
            <SearchBar text={keyword} setText={setKeyword} />
            <div className="flex justify-center">
                <button onClick={() => setIsOpen(!isOpen)} className="relative h-14 w-72">
                    <div className={`-rotate-3 rounded-full border-4 border-secondary w-full h-full text-center absolute -z-10`}>
                        <div className='opacity-0'>
                            <p>詳しく絞り込む</p>
                        </div>
                    </div>
                    <div className={`font-bold rounded-full hover:bg-accent transition duration-100 border-accent border-4 w-full h-full`}>
                        <div className="h-full w-full flex justify-center items-center">
                            <p>{isOpen ? "閉じる" : "詳しく絞り込む"}</p>
                        </div>
                    </div>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <SectionTitle>詳細検索</SectionTitle>
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
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

interface DetailFilterViewProps {
    selectedTypes: string[];
    setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
    selectedDates: string[];
    setSelectedDates: React.Dispatch<React.SetStateAction<string[]>>;
    selectedPlaces: string[];
    setSelectedPlaces: React.Dispatch<React.SetStateAction<string[]>>;
    selectedGenres: string[];
    setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
}

function DetailFilterView({ selectedTypes, setSelectedTypes, selectedDates, setSelectedDates, selectedPlaces, setSelectedPlaces, selectedGenres, setSelectedGenres }: DetailFilterViewProps) {

    const checkboxList = [
        {
            label: '企画区分',
            selectedArray: selectedTypes,
            setSelectedArray: setSelectedTypes,
            options: [
                { option: "屋外ステージ企画" },
                { option: "教室企画" },
                { option: "模擬店企画" },
                { option: "実行委員会企画" }
            ]
        },
        {
            label: '日程',
            selectedArray: selectedDates,
            setSelectedArray: setSelectedDates,
            options: [
                { option: "11月1日(土)" },
                { option: "11月2日(日)" },
                { option: "11月3日(月・祝)" }
            ]
        },
        {
            label: '場所',
            selectedArray: selectedPlaces,
            setSelectedArray: setSelectedPlaces,
            options: [
                { option: 'メインステージ' },
                { option: 'パフォーマンスエリア' },
                { option: 'エントランスエリア' },
                { option: "第一校舎" },
                { option: "メディア棟" },
                { option: '和泉ラーニングスクエア' },
                { option: 'その他' }
            ]
        },
        {
            label: 'ジャンル',
            selectedArray: selectedGenres,
            setSelectedArray: setSelectedGenres,
            options: [
                { option: '模擬店' },
                { option: '音楽' },
                { option: 'ダンス' },
                { option: '喫茶' },
                { option: 'ゲスト' },
                { option: '展示' },
                { option: '参加体験' },
                { option: 'パフォーマンス' }

            ]
        }
    ]

    // チェックボックスの状態を変更する関数
    const handleCheckboxChange = (label: string, setSelectedArray: React.Dispatch<React.SetStateAction<string[]>>) => {
        setSelectedArray(prev => {
            console.log(selectedDates);
            if (prev.includes(label)) {
                // 既に選択されている場合は削除
                return prev.filter(item => item !== label);
            } else {
                // 選択されていない場合は追加
                return [...prev, label];
            }
        });
    };

    return (
        <div className="flex flex-col gap-14 mt-10">
            {checkboxList.map((checkbox) => (
                <div key={checkbox.label} className="flex gap-8">
                    <Label>{checkbox.label}</Label>
                    <div className="flex flex-wrap gap-x-8 gap-y-3">
                        {checkbox.options.map((option) => (
                            <Checkbox
                                key={option.option}
                                label={option.option}
                                checked={checkbox.selectedArray.includes(option.option)}
                                setChecked={() => handleCheckboxChange(option.option, checkbox.setSelectedArray)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
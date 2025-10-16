import { useState } from "react";
import IndexTitle from "../texts/IndexTitle";
import SearchBar from "../texts/SearchBar";
import Button from "../buttons/Button";
import Image from "next/image";
import Link from "next/link";

export default function SearchSection() {
    const [searchText, setSearchText] = useState("");
    const detailList = [
        { src: "/images/svg/index/glass.svg", label: "詳しく絞り込む" },
        // { src: "/images/svg/index/timetable.svg", label: "タイムテーブル" }
    ]
    function onClickSearch() {
        console.log("Searching for:", searchText);
    }
    return (
        <div>
            <IndexTitle>企画を探す</IndexTitle>
            <SearchBar text={searchText} setText={setSearchText} />
            <Button onClick={onClickSearch}>検索</Button>
            <div className="flex justify-center gap-16 mt-10">
                {detailList.map((item, index) => (
                    <DetailButton key={index} src={item.src} label={item.label} />
                ))}
            </div>
        </div>
    )
}

function DetailButton({ src, label }: { src: string; label: string }) {
    return (
        <Link href="/search">
            <div className="w-32 h-40 flex flex-col items-center justify-center gap-4">
                <div className="absolute border-5 border-accent rounded-3xl w-32 h-40 rotate-8 translate-y-1" />
                <div className="absolute border-5 border-secondary rounded-3xl w-32 h-40 -rotate-8" />
                <Image src={src} alt={label} width={50} height={50} className="w-14 h-16" />
                <p className="text-xs font-semibold">{label}</p>
            </div>
        </Link>
    )
}
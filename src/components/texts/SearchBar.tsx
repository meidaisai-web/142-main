"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface SearchBarProps {
    text: string;
    setText: (text: string) => void;
    onEnter?: () => void;
}

export default function SearchBar({ text, setText, onEnter }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isComposing, setIsComposing] = useState(false);

    return (
        <div className="flex justify-center pt-12 pb-14 px-4 w-full">
            <div className="relative isolate w-full max-w-[340px] md:max-w-none md:w-3/5 pe-1.5 pb-1.5 md:pe-2 md:pb-2">
                <div className="absolute top-1.5 left-1.5 md:top-2 md:left-2 w-[calc(100%-6px)] md:w-[calc(100%-8px)] h-12 md:h-14 rounded-full border-[10px] md:border-20 border-primary -z-10" />
                <div
                    className="relative z-10 border-2 border-primary bg-white rounded-full h-12 md:h-14 w-full flex justify-start items-center cursor-text py-2 px-3 md:py-4 md:px-5"
                    onClick={() => inputRef.current?.focus()}
                >
                    <Image src="/images/svg/glass.svg" alt="" width={20} height={20} className="h-5 w-5 mr-2 md:mr-3 shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        onCompositionStart={() => setIsComposing(true)}
                        onCompositionEnd={() => setIsComposing(false)}
                        onKeyDown={(event) => {
                            if (event.key !== "Enter") return;
                            // IMEの確定Enterでは検索しない。通常Enterもフォーム送信しない。
                            if (isComposing || event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229) return;
                            event.preventDefault();
                            event.stopPropagation();
                            if (event.repeat) return;
                            onEnter?.();
                        }}
                        aria-label="検索キーワード"
                        className="bg-transparent text-black focus:outline-none h-full w-full flex-1 min-w-0 text-sm md:text-base"
                        placeholder="キーワードを入力"
                    />
                </div>
            </div>
        </div>
    );
}

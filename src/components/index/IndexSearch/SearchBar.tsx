"use client";

import Image from 'next/image';
import { useRef, useState } from 'react';

interface SearchBarProps {
    text: string;
    setText: (text: string) => void;
    onEnter?: () => void;
}

export default function SearchBar({ text, setText, onEnter }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isComposing, setIsComposing] = useState(false);

    const handleDivClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="relative flex justify-center py-12">
            <div className="relative w-3/5 min-w-80">

                {/* 背景 */}
                <div className="absolute inset-0 rounded-full bg-primary border-4 border-primary-700 translate-x-3  translate-y-3 sm:translate-y-5" />

                {/* 本体 */}
                <div
                    className="relative z-10 bg-white border-4 border-primary-700 rounded-full h-16 flex justify-center items-center cursor-text py-4 px-5"
                    onClick={handleDivClick}
                >
                    <Image
                        src="/images/Indexsearch/glasss.svg"
                        alt=""
                        width={80}
                        height={80}
                        className="w-10 h-10 mr-1 md:mr-2 flex-shrink-0"
                    />

                    <input
                        ref={inputRef}
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onCompositionStart={() => setIsComposing(true)}
                        onCompositionEnd={() => setIsComposing(false)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !isComposing && onEnter) {
                                onEnter();
                            }
                        }}
                        className="bg-transparent text-black focus:outline-none h-full flex-1 min-w-0"
                        placeholder="キーワードを入力"
                    />
                </div>
            </div>
        </div>
    )
}
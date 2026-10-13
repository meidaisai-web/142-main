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
        // 下に他のコンポーネントがある場合でも干渉しないよう、pb-14 (または mb-4など) で余白を少し増やします
        <div className="flex justify-center pt-12 pb-14 px-4 w-full">
            
            {/* ▼ 親要素（ラッパー）に pe-1.5 pb-1.5（影がずれる分の余白）を追加 */}
            {/* これにより、absoluteで右下（top-1.5 left-1.5）にずれた影が親要素から見切れるのを完全に防ぎます */}
            <div className="relative w-full max-w-[340px] md:max-w-none md:w-3/5 pe-1.5 pb-1.5 md:pe-2 md:pb-2">
                
                {/* ▼ 背景の装飾（影） */}
                {/* 100%から微調整して影がぴったりハマるように w-[calc(100%-6px)] に設定（PCは 8px） */}
                <div className="absolute top-1.5 left-1.5 md:top-2 md:left-2 w-[calc(100%-6px)] md:w-[calc(100%-8px)] h-12 md:h-14 rounded-full border-[10px] md:border-20 border-primary -z-10" />

                {/* 前面の検索バー */}
                <div
                    // w-full にしてラッパーに合わせ、relative z-10 で影より前面に配置
                    className="relative z-10 border-2 border-primary bg-white rounded-full h-12 md:h-14 w-full flex justify-start items-center cursor-text py-2 px-3 md:py-4 md:px-5"
                    onClick={handleDivClick}
                >
                    <Image 
                        src="/images/svg/glass.svg" 
                        alt="" 
                        width={20} 
                        height={20} 
                        className="h-5 w-5 mr-2 md:mr-3 flex-shrink-0" 
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
                        className="bg-transparent text-black focus:outline-none h-full w-full flex-1 min-w-0 text-sm md:text-base"
                        placeholder="キーワードを入力"
                    />
                </div>
            </div>
        </div>
    );
}
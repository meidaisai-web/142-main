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
            <div className="absolute w-3/5 min-w-72 h-10 md:h-14 rounded-full border-secondary border-4 rotate-3 -z-10" />
            <div
                className="bg-white rounded-full h-12 md:h-14 w-3/5 min-w-80 flex justify-center items-center cursor-text py-4 px-5"
                onClick={handleDivClick}
            >
                <Image src="/images/svg/glass.svg" alt="" width={20} height={20} className='h-full mr-1 md:mr-2 flex-shrink-0' />
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
                    className="bg-white text-black focus:outline-none h-full flex-1 min-w-0"
                    placeholder='キーワードを入力'
                />
            </div>
        </div>
    )
}
"use client";

import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

interface QuestionProps {
    question: string;
    onSelect: () => void;
    wiggleId?: number;
}

export default function Question({ question, onSelect, wiggleId }: QuestionProps) {
    const controls = useAnimationControls();

    // wiggleId が変わるたびに、めくる方向へ30度傾いて元に戻る
    useEffect(() => {
        if (wiggleId === undefined) return;
        controls.start({
            rotateY: [0, -30, 0],
            transition: { duration: 0.8, ease: "easeInOut" },
        });
    }, [wiggleId, controls]);

    return (
        <motion.button
            type="button"
            onClick={onSelect}
            style={{ transformPerspective: 800 }}
            whileTap={{ scale: 0.95 }}
            animate={controls}
            className="relative w-32 cursor-pointer"
        >
            {/* カード画像 */}
            <Image
                src="/images/trump-q.svg"
                alt="質問カード"
                width={500}
                height={500}
                className="w-full h-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]"
            />
            {/* 質問文をカード中央に表示 */}
            <div className="absolute inset-0 flex items-center justify-center px-[15%]">
                <p className="text-center text-[9px] sm:text-xs md:text-sm font-bold leading-relaxed">
                    {question}
                </p>
            </div>
        </motion.button>
    );
}

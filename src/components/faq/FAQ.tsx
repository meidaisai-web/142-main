"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Question from "./question";
import Answer from "./answer";



interface QAProps {
    questions: {
        question: string;
        answer: string | React.ReactNode;
    }[];
}

export default function Trump({ questions }: QAProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const [wiggle, setWiggle] = useState<{ index: number; id: number } | null>(null);

    // 3秒に1回、ランダムな1枚がめくる方向に傾く(アンサー表示中は止める)
    useEffect(() => {
        if (selectedIndex !== null || questions.length === 0) return;
        const timer = setInterval(() => {
            setWiggle((prev) => {
                let index = Math.floor(Math.random() * questions.length);
                if (questions.length > 1 && index === prev?.index) {
                    index = (index + 1) % questions.length;
                }
                return { index, id: (prev?.id ?? 0) + 1 };
            });
        }, 3000);
        return () => clearInterval(timer);
    }, [selectedIndex, questions.length]);

    const answer = selectedIndex !== null
    ? questions[selectedIndex].answer
    : "";

    return (
        <>
          
            {/* =========================
                質問カード一覧
            ========================= */}
            <div className="flex flex-wrap gap-3 sm:gap-8 w-full px-1 sm:px-8 pt-15 pb-30 justify-center">

                {questions.map((item, index) => (
                    <Question
                        key={index}
                        question={item.question}
                        wiggleId={wiggle?.index === index ? wiggle.id : undefined}
                        onSelect={() => setSelectedIndex(index)}
                    />
                ))}

            </div>


            {/* =========================
                アンサーカード
            ========================= */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <Answer
                        answer={questions[selectedIndex].answer}
                        onClose={() => setSelectedIndex(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

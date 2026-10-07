"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface AnswerProps {
    answer: string | React.ReactNode;
    onClose: () => void;
}

export default function Answer({ answer, onClose }: AnswerProps) {
    // 表示中は背景のスクロールを止める
    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, []);

    if (typeof document === "undefined") return null;

    return createPortal(
        <motion.div
            className="fixed inset-0 z-60 flex items-start pt-[11vh] justify-center bg-black/40 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            onClick={onClose}
        >
            <motion.div
                className="relative w-80"
                initial={{ scale: 0.3, opacity: 0, y: 80 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    transition: {
                        scale: { duration: 0.7, ease: "easeOut" },
                        y: { duration: 0.7, ease: "easeOut" },
                        opacity: { duration: 0.2 },
                    },
                }}
                exit={{
                    scale: 0.3,
                    opacity: 0,
                    y: 80,
                    transition: {
                        scale: { duration: 0.6, ease: "easeInOut" },
                        y: { duration: 0.6, ease: "easeInOut" },
                        opacity: { duration: 0.2, delay: 0.4 },
                    },
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* トランプをめくる(裏→表 / 表→裏) */}
                <motion.div
                    className="relative"
                    style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
                    initial={{ rotateY: 180 }}
                    animate={{ rotateY: 0 }}
                    exit={{
                        rotateY: 180,
                        transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                    {/* 表面:答えのカード */}
                    <div
                        className="relative shadow-2xl rounded-full"                        
                    >
                        <Image
                            src="/images/trump-a.svg"
                            alt="アンサーカード"
                            width={700}
                            height={700}
                            className="w-full sm:w-[370px] h-auto"
                        />

                        {/* 答えをカード中央に表示 */}
                        <div className="absolute inset-0 flex items-center justify-center px-[15%]">
                            <p className="text-center text-sm font-bold leading-loose">
                                {answer}
                            </p>
                        </div>
                        {/* 閉じるボタン */}
                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl shadow-lg"
                        >
                            ×
                        </button>
                    </div>

                    {/* 裏面:質問カード */}
                    <div
                        className="absolute inset-0 shadow-2xl"
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                        <Image
                            src="/images/trump-q.svg"
                            alt=""
                            width={500}
                            height={500}
                            className="w-full h-full"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>,
        document.body
    );
}

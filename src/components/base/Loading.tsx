'use client'
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface FireLoadingProps {
    setLoading: (finished: boolean) => void;
}

export default function FireLoading({ setLoading }: FireLoadingProps) {
    const [show, setShow] = useState(false);
    const [fadeout, setFadeout] = useState(false);
    const [animationPhase, setAnimationPhase] = useState<"bounce" | "shockwave" | "complete">("bounce");

    // 初回表示・フェードアウト制御
    useEffect(() => {
        const alreadyShown = sessionStorage.getItem("loadingShown");

        if (!alreadyShown) {
            setShow(true);
            sessionStorage.setItem("loadingShown", "true");

            const fadeTimeout = setTimeout(() => setFadeout(true), 5500);
            const hideTimeout = setTimeout(() => setShow(false), 6000);

            return () => {
                clearTimeout(fadeTimeout);
                clearTimeout(hideTimeout);
            };
        } else {
            setShow(false);
        }
    }, []);

    // bounce → shockwave → complete の順で切り替え
    useEffect(() => {
        const bounceTimer = setTimeout(() => setAnimationPhase("shockwave"), 1000);
        const completeTimer = setTimeout(() => {
            setLoading(false);
            setAnimationPhase("complete")
        }, 4000);

        return () => {
            clearTimeout(bounceTimer);
            clearTimeout(completeTimer);
        };
    }, []);

    if (!show) return null;

    // ロゴアニメーションまとめ
    const logoAnimate = (() => {
        switch (animationPhase) {
            case "bounce":
                return { scale: [1, 1.1, 1], y: [0, -20, 0], rotate: [0, 5, -5, 0], opacity: fadeout ? 0 : 1 };
            case "shockwave":
                return { scale: [1, 1.3, 1.1], y: [0, -40, 0], rotate: 0, opacity: fadeout ? 0 : 1 };
            default:
                return { scale: 1, y: 0, rotate: 0, opacity: fadeout ? 0 : 1 };
        }
    })();

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 5, ease: "easeOut" }}
            className="fixed z-[60] w-screen h-screen overflow-hidden flex items-center justify-center bg-primary"
        >
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-6 relative">
                    {/* ロゴの跳ねアニメ */}
                    <div className="relative w-[275px] h-[220px] flex items-center justify-center">
                        <motion.div
                            className="absolute z-10 flex items-center justify-center"
                            initial={{ opacity: 1, scale: 0.1 }}
                            animate={{ ...logoAnimate, opacity: fadeout ? 0 : 1 }}
                            transition={{ duration: 0.6, opacity: { duration: 0.2, delay: animationPhase === "bounce" ? 1 : 0.6 }, delay: 0.1, ease: "easeInOut" }}
                        >
                            <Image
                                src="/images/svg/official/logoWhiteTop.svg"
                                alt="Logo"
                                width={250}
                                height={250}
                                className="h-[50%]"
                            />
                        </motion.div>

                        <motion.div
                            className="absolute z-10 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ ...logoAnimate, opacity: fadeout ? 0 : 1 }}
                            transition={{ duration: 0.6, opacity: { duration: 1, delay: animationPhase === "bounce" ? 3.2 : 1.6 }, delay: 0.1, ease: "easeInOut" }}
                        >
                            <Image
                                src="/images/svg/official/logoTop.svg"
                                alt="Logo"
                                width={250}
                                height={250}
                                className="h-[50%]"
                            />
                        </motion.div>
                    </div>
                    {/* ロゴの下のテキスト画像 */}
                    <div className="relative w-[250px] h-[60px] flex items-center justify-center">
                        <motion.div
                            className="absolute z-10 flex items-center justify-center"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ duration: 4, delay: 3, ease: "easeOut" }}
                        >
                            <Image
                                src="/images/svg/official/logoWhiteBottom.svg"
                                alt="Logo"
                                width={250}
                                height={250}
                                className="z-10 h-[50%]"
                            />
                        </motion.div>

                        <motion.div
                            className="absolute z-10 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 3, ease: "easeIn" }}
                        >
                            <Image
                                src="/images/svg/official/logoBottom.svg"
                                alt="Logo"
                                width={250}
                                height={250}
                                className="z-10 h-[50%]"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* 衝撃波ビリビリ⚡️ */}
                <AnimatePresence>
                    {animationPhase === "shockwave" && (
                        <>
                            {[1, 2, 3, 4, 5].map((ring) => (
                                <motion.div
                                    key={`shockwave-${ring}`}
                                    className="absolute"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: [0, (2 + ring * 1.2) * 0.7], opacity: [0, 0.9, 0] }}
                                    transition={{ duration: 1.5, delay: 0.1 + ring * 0.3, ease: "easeOut" }}
                                >
                                    <svg
                                        width={(80 + ring * 50) * 0.7}
                                        height={(80 + ring * 50) * 0.7}
                                        viewBox="0 0 120 120"
                                        className="text-accent"
                                        style={{ filter: `drop-shadow(0 0 15px rgba(251, 191, 36, ${0.8 / ring}))` }}
                                    >
                                        <circle cx="60" cy="60" r="45" fill="currentColor" opacity={0.8 / ring} />
                                        <path
                                            d="M60,15 Q65,20 70,25 Q75,30 80,35 Q85,40 90,45 Q95,50 100,55 Q105,60 100,65 Q95,70 90,75 Q85,80 80,85 Q75,90 70,95 Q65,100 60,105 Q55,100 50,95 Q45,90 40,85 Q35,80 30,75 Q25,70 20,65 Q15,60 20,55 Q25,50 30,45 Q35,40 40,35 Q45,30 50,25 Q55,20 60,15 Z"
                                            fill="currentColor"
                                            opacity={0.4 / ring}
                                        />
                                    </svg>
                                </motion.div>
                            ))}
                        </>
                    )}
                </AnimatePresence>
                {/* 白い背景 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 12 }}
                    transition={{ delay: 2, duration: 3, ease: "easeInOut" }}
                    className="absolute size-96 bg-[#e1cccc] rounded-[50%]"
                />
            </div>
        </motion.div>
    );
}

export function Loading() {
    const [bounce, setBounce] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => setBounce((prev) => !prev), 700);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <motion.div
                animate={{
                    scale: bounce ? [1, 1.15, 1] : [1, 1.1, 1],
                    y: bounce ? [0, -18, 0] : [0, -12, 0],
                    rotate: bounce ? [0, 6, -6, 0] : [0, 3, -3, 0],
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
            >
                <Image
                    src="/images/svg/official/logoWhiteTop.svg"
                    alt="Logo"
                    width={250}
                    height={250}
                />
            </motion.div>
            <Image
                src="/images/svg/official/logoWhiteBottom.svg"
                alt="Logo"
                width={250}
                height={250}
                className="mt-4"
            />
        </div>
    );
}
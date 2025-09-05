'use client'
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function FireLoading() {
    const [bubbles, setBubbles] = useState<number[]>([]);
    const [show, setShow] = useState(false); // 初期は false にしておく
    const [fadeout, setFadeout] = useState(false);
    const isPC = useMediaQuery('(min-width: 900px)');

    useEffect(() => {
        // const accessed = sessionStorage.getItem("accessed");

        // if (accessed !== "true") 
            {
            // 初回アクセス
            setShow(true);

            // フェードアウトを開始
            const fadeTimeout = setTimeout(() => setFadeout(true), 3500);

            // 完全に非表示にする
            const hideTimeout = setTimeout(() => {
                setShow(false);
                // sessionStorage.setItem("accessed", "true");
            }, 3900);

            return () => {
                clearTimeout(fadeTimeout);
                clearTimeout(hideTimeout);
            };
        }
    }, []);

    if (!show) return null;

    return (
        <div className="fixed z-50 w-screen h-screen overflow-hidden flex items-center justify-center bg-primary">
            {/* 真ん中に画像 */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: fadeout ? 0 : 1, scale: fadeout ? 0.5 : 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex items-center justify-center"
            >
                <Image
                    src="/images/svg/LogoWhite.svg"
                    alt="Logo"
                    width={200}
                    height={200}
                    className="z-10 h-[50%]"
                />
            </motion.div>

            {/* 下から白い画面がスライドアップ */}
            <motion.div
                initial={{ translateY: "100%" }}
                animate={{ translateY: "0%" }}
                transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
                className="absolute w-full h-full bg-white"
            />
        </div>
    );
}

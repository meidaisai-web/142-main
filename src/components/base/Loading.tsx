"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LoadingProps {
    setLoading: (finished: boolean) => void;
}

const DRIFT_EASE = [0.25, 0.3, 0.5, 0.9] as const;
const DRIFT_DURATION = 5.5;
const DRIFT_DURATION_LG = 11.5;

const LOGO_IN_DELAY = 0.3;
const LINE_DELAY = 0.7;
const LINE_DURATION = 2.0;
const LOGO_OUT_DELAY = 3.1; // ライン描画完了(≒3.0s)後にロゴ+ライン群をフェードアウト
const CLOUD_START = 3.4; // ロゴのフェードアウトと重ねて開始（真っ白な間を作らない）
const TOTAL_DURATION = 10000; // CLOUD_START + DRIFT_DURATION + overlay フェード + 余白
const TOTAL_DURATION_LG = 16000; // lg は DRIFT_DURATION_LG が長いぶん延長

const SM_QUERY = "(min-width: 640px)";
const LG_QUERY = "(min-width: 1024px)";

const clouds = [
    {
        src: "/images/svg/cloudtl.svg",
        src2: "/images/svg/cloudtl2.svg",
        position: "-left-[10vw] -top-[10vw]",
        initial: { x: "-25%", y: "30%" },
        initialSm: { x: "-2%", y: "4%" },
        initialLg: { x: "44%", y: "-56%" },
        animate: { x: "-100%", y: "-125%" },
        delay: 0.05,
    },
    {
        src: "/images/svg/cloudtr.svg",
        src2: "/images/svg/cloudtr2.svg",
        position: "-right-[10vw] -top-[10vw]",
        initial: { x: "30%", y: "10%" },
        initialSm: { x: "-16%", y: "8%" },
        initialLg: { x: "-70%", y: "-64%" },
        animate: { x: "100%", y: "-125%" },
        delay: 0.2,
    },
    {
        src: "/images/svg/cloudbl.svg",
        src2: "/images/svg/cloudbl2.svg",
        position: "-left-[10vw] -bottom-[10vw]",
        initial: { x: "-37%", y: "-3%" },
        initialSm: { x: "24%", y: "-12%" },
        initialLg: { x: "32%", y: "40%" },
        animate: { x: "-100%", y: "125%" },
        delay: 0.35,
    },
    {
        src: "/images/svg/cloudbr.svg",
        src2: "/images/svg/cloudbr2.svg",
        position: "-right-[10vw] -bottom-[10vw]",
        initial: { x: "45%", y: "6%" },
        initialSm: { x: "-18%", y: "4%" },
        initialLg: { x: "-32%", y: "40%" },
        animate: { x: "100%", y: "125%" },
        delay: 0.5,
    },
] as const;

type Tier = "base" | "sm" | "lg";

export default function Loading({ setLoading }: LoadingProps) {
    const [show, setShow] = useState(true);
    // 画面幅の段階（雲のスタート位置の切り替えに使う）: base < sm < lg
    const [tier, setTier] = useState<Tier>("base");

    useEffect(() => {
        const smMq = window.matchMedia(SM_QUERY);
        const lgMq = window.matchMedia(LG_QUERY);
        const update = () => setTier(lgMq.matches ? "lg" : smMq.matches ? "sm" : "base");
        update();
        smMq.addEventListener("change", update);
        lgMq.addEventListener("change", update);
        return () => {
            smMq.removeEventListener("change", update);
            lgMq.removeEventListener("change", update);
        };
    }, []);

    const driftDuration = tier === "lg" ? DRIFT_DURATION_LG : DRIFT_DURATION;
    const totalDuration = tier === "lg" ? TOTAL_DURATION_LG : TOTAL_DURATION;
    // lg 未満は縦長画面で1枚の雲が画面高さを覆いきれず隙間が出やすいので、
    // スタート時の scale を大きめにして4枚で画面を確実に覆う。
    const startScale = tier === "lg" ? 1.6 : 2.2;

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setLoading(false);
        }, totalDuration);

        return () => clearTimeout(timer);
    }, [totalDuration, setLoading]);

    if (!show) return null;

    return (
        <motion.div
            className="fixed inset-0 z-[50] flex h-[100svh] w-screen items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: show ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* 白背景: ロゴ演出中は画面を白で覆い、雲アニメ直前に消えて
                その下のトップページを出す（雲はトップページの上をはけていく） */}
            <motion.div
                className="absolute inset-0 z-20 bg-white"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: CLOUD_START - 0.4 }}
            />

            {/* 雲: スタート時は scale 1.45 で大きく画面を隙間なく覆い、
                はけていくにつれて小さくしながら（scale → 0.6）白く透けて消える */}
            {clouds.map((cloud) => {
                const start =
                    tier === "lg" ? cloud.initialLg : tier === "sm" ? cloud.initialSm : cloud.initial;
                return (
                <motion.div
                    key={cloud.src}
                    className={`absolute z-30  h-[75vmax] w-[120vmax] lg:h-[72vw] lg:w-[110vw] blur-[1px] ${cloud.position}`}
                    initial={{ ...start, opacity: 1, scale: startScale }}
                    animate={{ ...cloud.animate, opacity: [1, 0.6, 0.12, 0], scale: [startScale, startScale * 0.56, 0.35, 0.2] }}
                    transition={{
                        duration: driftDuration,
                        delay: CLOUD_START + cloud.delay,
                        ease: DRIFT_EASE,
                        opacity: {
                            duration: driftDuration,
                            delay: CLOUD_START + cloud.delay,
                            times: [0, 0.45, 0.8, 1],
                            ease: "linear",
                        },
                        scale: {
                            duration: driftDuration,
                            delay: CLOUD_START + cloud.delay,
                            times: [0, 0.35, 0.7, 1],
                            ease: "linear",
                        },
                    }}
                >
                    {/* lg 未満は *2、lg 以上は通常の雲画像（幅が狭いときの中央の隙間対策）。
                        object-contain で雲の形はそのまま保持。ボックスを十分横長にして
                        4枚とも横基準（= 同じ 110vw 幅）で表示されるようにしている。 */}
                    <Image src={cloud.src2} alt="" fill className="object-contain lg:hidden" />
                    <Image src={cloud.src} alt="" fill className="hidden object-contain lg:block" />
                </motion.div>
                );
            })}

            {/* ロゴ全体: 先に表示 → 心電図描画 → まとめてフェードアウト */}
            <motion.div
                className="relative z-40 flex h-[200px] w-[200px] sm:h-[350px] sm:w-[350px] lg:h-[300px] lg:w-[300px] items-center justify-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: LOGO_OUT_DELAY }}
            >

                {/* ロゴ本体 */}
                <motion.div
                    className="absolute inset-0 z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.7,
                        delay: LOGO_IN_DELAY,
                        ease: "easeOut",
                    }}
                >
                    <Image
                        src="/images/svg/loadinglogo.svg"
                        alt="Logo"
                        fill
                    />
                </motion.div>


                {/* 心電図の線: 左から右へワイプ表示。
                    overflow-hidden なラッパーの width をアニメーションさせる
                    （clipPath だと新規タブ読み込み時に一気に表示されることがあるため） */}
                <motion.div
                    className="absolute left-0 top-0 z-20 h-full overflow-hidden"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                        duration: LINE_DURATION,
                        delay: LINE_DELAY,
                        ease: "easeInOut",
                    }}
                >
                    {/* 内側はグループ幅で固定し、ラッパーが狭くても縮まないようにする */}
                    <div className="absolute left-0 top-0 h-full w-[200px] sm:w-[350px] lg:w-[300px]">
                        <Image
                            src="/images/svg/loadingline.svg"
                            alt=""
                            fill
                        />
                    </div>
                </motion.div>

            </motion.div>
        </motion.div>
    );
}

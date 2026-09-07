"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

interface LoadingProps {
    setLoading: (finished: boolean) => void;
}

const DRIFT_EASE = [0.25, 0.3, 0.5, 0.9] as const;
const DRIFT_DURATION = 5.5;
const DRIFT_DURATION_LG = 11.5;

// シーケンス:
//   1. ハート(loadinglogo)フェードイン ＋ その下にタイトル(TitleCatchcopy)を配置
//   2. 心電図ライン(loadingline)を左→右に描画
//   3. ハート＋ラインだけフェードアウト
//   4. 下にあったタイトルが拡大しながら画面中央へ移動 → 少しキープ → フェードアウト
//   5. 雲アニメ開始
const LOGO_IN_DELAY = 0.3;
const TITLE_IN_DELAY = 0.55;
const TITLE_IN_DURATION = 0.6;
const LINE_DELAY = LOGO_IN_DELAY + 0.2; // 0.5
const LINE_DURATION = 2.0;

const LOGO_OUT_DELAY = LINE_DELAY + LINE_DURATION + 0.4; // 3.0 描画完了後にハート＋ラインをフェードアウト
const LOGO_OUT_DURATION = 0.7;

const TITLE_MOVE_DELAY = LOGO_OUT_DELAY + 0.15; // 3.15 ハートのフェードアウトに重ねてタイトルが動き出す
const TITLE_MOVE_DURATION = 1.15;
const TITLE_END_SCALE = 1.5; // 中央へ動きながらこの倍率まで拡大（初期は等倍）
const TITLE_HOLD = 0.7;
const TITLE_OUT_DELAY = TITLE_MOVE_DELAY + TITLE_MOVE_DURATION + TITLE_HOLD; // 5.0
const TITLE_OUT_DURATION = 0.6;
const TITLE_ANIM_TOTAL = TITLE_OUT_DELAY + TITLE_OUT_DURATION; // 5.6（タイトルの opacity/y/scale 用の総尺）

const CLOUD_START = TITLE_OUT_DELAY + 0.15; // タイトルのフェードアウトに重ねて雲を開始
const TOTAL_DURATION = 12000; // CLOUD_START + DRIFT_DURATION + overlay フェード + 余白
const TOTAL_DURATION_LG = 18000; // lg は DRIFT_DURATION_LG が長いぶん延長

// 飛行機: 画面左外から右外へ横断。タイトルが画面中央付近に来ているタイミングで通過する。
const AIRPLANE_DELAY = 3.5;
// 画面幅によらず一定速度（px/秒）で飛ぶ。横断時間 = 移動距離 / この速度。
const AIRPLANE_SPEED = 480;
const AIRPLANE_DURATION_MIN = 2.4; // 狭い画面（スマホ）で速すぎないように下限
const AIRPLANE_DURATION_MAX = 5; // 極端に広い画面で遅すぎ・全体尺オーバーしないように上限
const AIRPLANE_SIZE = 140;
const AIRPLANE_OFFSCREEN = 160; // 画面外に置くマージン（開始 -160px / 終了 100vw+160px）
// 飛行機ボックス左端から見た「先端」の x 位置。ノーズが画像右寄りにある前提。
// 文字が消えるラインをこの先端に合わせる。ズレる場合はここを調整。
const AIRPLANE_TIP_OFFSET = AIRPLANE_SIZE * 0.9;
// 文字が消える切り口のぼかし幅(px)。大きいほどふんわり溶けるように消える。
const TITLE_WIPE_FEATHER = 24;

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

    // ハートとタイトルの初期位置（画面中央からの px オフセット）。
    // ハートを上に、タイトルを下に置いて「ロゴ＋キャッチコピー」の並びにする。
    // タイトルは後で y:0（画面中央）へ移動する。
    const heartStartY = tier === "lg" ? -96 : tier === "sm" ? -106 : -56;
    const titleStartY = tier === "lg" ? 126 : tier === "sm" ? 138 : 74;

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setLoading(false);
        }, totalDuration);

        return () => clearTimeout(timer);
    }, [totalDuration, setLoading]);

    // ローディング表示中はトップページをスクロールできないようにする
    useEffect(() => {
        if (!show) return;
        const prevOverflow = document.body.style.overflow;
        const prevOverscroll = document.body.style.overscrollBehavior;
        document.body.style.overflow = "hidden";
        document.body.style.overscrollBehavior = "none";
        return () => {
            document.body.style.overflow = prevOverflow;
            document.body.style.overscrollBehavior = prevOverscroll;
        };
    }, [show]);

    // 飛行機の進行度(0→1)。飛行機の x とタイトルのワイプを同じ値から駆動して、
    // 「文字が消えるライン＝飛行機の先端」を常に一致させる。
    const titleRef = useRef<HTMLDivElement>(null);
    const planeProgress = useMotionValue(0); // 0: 画面左外 / 1: 画面右外
    const titleClipLeft = useMotionValue(0); // 飛行機先端のタイトル幅に対する位置(%)
    // 先端より後ろ(左)を feather 幅かけて transparent へフェード。先端の手前(右)は crisp なまま。
    const titleMask = useMotionTemplate`linear-gradient(90deg, transparent, transparent calc(${titleClipLeft}% - ${TITLE_WIPE_FEATHER}px), #000 ${titleClipLeft}%, #000 100%)`;
    // 飛行機ボックス左端の x（clip 計算の planeBoxLeft と同じ式）を CSS calc で表現
    const planeX = useMotionTemplate`calc(${planeProgress} * (100vw + ${AIRPLANE_OFFSCREEN * 2}px) - ${AIRPLANE_OFFSCREEN}px)`;

    useEffect(() => {
        // 移動距離（画面幅＋左右マージン）に比例した時間にして、速度を画面幅によらず一定にする
        const distance = window.innerWidth + AIRPLANE_OFFSCREEN * 2;
        const duration = Math.min(
            AIRPLANE_DURATION_MAX,
            Math.max(AIRPLANE_DURATION_MIN, distance / AIRPLANE_SPEED),
        );
        const controls = animate(planeProgress, 1, {
            duration,
            delay: AIRPLANE_DELAY,
            ease: "linear",
        });
        return () => controls.stop();
    }, [planeProgress]);

    useMotionValueEvent(planeProgress, "change", (p) => {
        const el = titleRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.width === 0) return;
        // 飛行機ボックス左端の画面 x（motion 側の initial:-OFFSCREEN → animate:100vw+OFFSCREEN と同じ式）
        const travel = window.innerWidth + AIRPLANE_OFFSCREEN * 2;
        const planeBoxLeft = -AIRPLANE_OFFSCREEN + p * travel;
        const tipX = planeBoxLeft + AIRPLANE_TIP_OFFSET;
        const pct = ((tipX - rect.left) / rect.width) * 100;
        // 110 まで許容して feather 分も画面から抜けきるようにする
        titleClipLeft.set(Math.min(110, Math.max(0, pct)));
    });

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
                    animate={{ ...cloud.animate, opacity: [1, 0.7, 0.12, 0], scale: [startScale, startScale * 0.56, 0.35, 0.2] }}
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

            {/* ハート＋心電図: 中央より少し上に配置。心電図描画後にこのグループだけフェードアウト */}
            <motion.div
                className="absolute inset-0 z-40 flex items-center justify-center"
                initial={{ opacity: 1, y: heartStartY }}
                animate={{ opacity: 0, y: heartStartY }}
                transition={{ duration: LOGO_OUT_DURATION, delay: LOGO_OUT_DELAY }}
            >
                <div className="relative flex h-[215px] w-[215px] sm:h-[370px] sm:w-[370px] lg:h-[315px] lg:w-[315px] items-center justify-center">
                    {/* ハート本体 */}
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
                        <Image src="/images/svg/loadinglogo.svg" alt="Logo" fill />
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
                        <div className="absolute left-0 top-0 h-full w-[215px] sm:w-[370px] lg:w-[315px]">
                            <Image src="/images/svg/loadingline.svg" alt="" fill />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* タイトル(キャッチコピー): 最初はハートの下(titleStartY)に等倍で配置。
                ハートのフェードアウト後に拡大しながら画面中央(y:0)へ移動 → 少しキープ → フェードアウト。 */}
            <motion.div
                className="absolute inset-0 z-40 flex items-center justify-center"
                initial={{ opacity: 0, y: titleStartY, scale: 1 }}
                animate={{
                    opacity: [0, 0, 1, 1, 0],
                    y: [titleStartY, titleStartY, 0, 0],
                    scale: [1, 1, TITLE_END_SCALE, TITLE_END_SCALE],
                }}
                transition={{
                    opacity: {
                        duration: TITLE_ANIM_TOTAL,
                        times: [
                            0,
                            TITLE_IN_DELAY / TITLE_ANIM_TOTAL,
                            (TITLE_IN_DELAY + TITLE_IN_DURATION) / TITLE_ANIM_TOTAL,
                            TITLE_OUT_DELAY / TITLE_ANIM_TOTAL,
                            1,
                        ],
                        ease: "linear",
                    },
                    y: {
                        duration: TITLE_ANIM_TOTAL,
                        times: [
                            0,
                            TITLE_MOVE_DELAY / TITLE_ANIM_TOTAL,
                            (TITLE_MOVE_DELAY + TITLE_MOVE_DURATION) / TITLE_ANIM_TOTAL,
                            1,
                        ],
                        ease: "easeInOut",
                    },
                    scale: {
                        duration: TITLE_ANIM_TOTAL,
                        times: [
                            0,
                            TITLE_MOVE_DELAY / TITLE_ANIM_TOTAL,
                            (TITLE_MOVE_DELAY + TITLE_MOVE_DURATION) / TITLE_ANIM_TOTAL,
                            1,
                        ],
                        ease: "easeInOut",
                    },
                }}
            >
                {/* 飛行機の先端が通過した位置から左へ、feather 幅かけて溶けるように消える（planeProgress 駆動） */}
                <motion.div
                    ref={titleRef}
                    style={{ maskImage: titleMask, WebkitMaskImage: titleMask }}
                >
                    <Image
                        src="/images/svg/TitleCatchcopy-primary.svg"
                        alt=""
                        width={4883}
                        height={1167}
                        priority
                        className="h-auto w-[210px] sm:w-[340px] lg:w-[300px]"
                    />
                </motion.div>
            </motion.div>

            {/* 飛行機: 画面左外から右外へ横断（x はタイトルのワイプと同じ planeProgress 駆動） */}
            <motion.div
                className="absolute left-0 top-1/2 z-50"
                style={{ x: planeX, y: "-50%" }}
            >
                <Image src="/images/svg/airplane.svg" alt="" width={AIRPLANE_SIZE} height={AIRPLANE_SIZE} />
            </motion.div>
        </motion.div>
    );
}

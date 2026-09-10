"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

interface LoadingProps {
    setLoading: (finished: boolean) => void;
}

// SSR では useLayoutEffect が使えないので useEffect にフォールバック
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
// このタブ（セッション）で一度ローディングを見たか。リロードでは再表示しない。
const LOADING_SEEN_KEY = "meijitsu-loading-seen";

// 非lg: 前半ゆっくり（雲がほぼ止まって透けていく）→ 後半で一気にはける ease-in
const DRIFT_EASE = [0.55, 0, 0.85, 0.35] as const;
// lg: 透明度調整前の前寄りイージング（lg は従来のはけ方に戻す）
const DRIFT_EASE_LG = [0.25, 0.3, 0.5, 0.9] as const;
const DRIFT_DURATION = 2.7; // base
const DRIFT_DURATION_SM = 2.7;
const DRIFT_DURATION_MD = 2.6;
const DRIFT_DURATION_LG = 8.2;

// 雲の透明度カーブ: base は透け控えめ、sm は「止まって透ける」演出、md は少し透け強め、lg は従来
const CLOUD_OPACITY = [1, 0.95, 0.32, 0] as const; // sm
const CLOUD_OPACITY_TIMES = [0, 0.3, 0.65, 1] as const;
const CLOUD_OPACITY_SP = [1, 0.98, 0.55, 0] as const; // base（透け控えめ）
const CLOUD_OPACITY_TIMES_SP = [0, 0.35, 0.72, 1] as const;
const CLOUD_OPACITY_MD = [1, 0.87, 0.26, 0] as const;
const CLOUD_OPACITY_TIMES_MD = [0, 0.29, 0.62, 1] as const;
const CLOUD_OPACITY_LG = [1, 0.22, 0.02, 0] as const;
const CLOUD_OPACITY_TIMES_LG = [0, 0.28, 0.55, 1] as const;

const LOGO_IN_DELAY = 0.0;
const TITLE_IN_DELAY = LOGO_IN_DELAY; // ハートと同時にフェードイン
const TITLE_IN_DURATION = 0.7;
const LINE_DELAY = 0; // ロゴのフェードインと同時スタート
const LINE_DURATION = 1.9;

const CLOUD_START = LINE_DELAY + LINE_DURATION - 0.6; // ≒1.3（雲は z-30 でロゴの裏。ease-in で序盤は動かないので早出しOK）

const AIRPLANE_DELAY = 0.8; // lg
const AIRPLANE_DELAY_MD = 0.8;
const AIRPLANE_DELAY_SM = 0.8;
const AIRPLANE_DELAY_SP = 0.8; // base
const AIRPLANE_SPEED = 480;

const AIRPLANE_SPEED_LG = 530;
const AIRPLANE_DURATION_MIN = 2.4; 
const AIRPLANE_DURATION_MAX = 5; 
const AIRPLANE_SIZE = 112; // sm / md
const AIRPLANE_SIZE_LG = 130; // lg
const AIRPLANE_SIZE_SP = 76; // base
const AIRPLANE_OFFSCREEN = 160; 
const AIRPLANE_TIP_RATIO = 0.9;
const TITLE_WIPE_FEATHER = 56;

const SM_QUERY = "(min-width: 640px)";
const MD_QUERY = "(min-width: 768px)";
const LG_QUERY = "(min-width: 1024px)";

const clouds = [
    {
        src: "/images/svg/cloudtl.svg",
        src2: "/images/svg/cloudtl2.svg",
        position: "-left-[10vw] -top-[10vw]",
        initial: { x: "-61%", y: "-18%" },
        initialSm: { x: "63%", y: "-10%" },
        initialMd: { x: "128%", y: "-64%" },
        initialLg: { x: "44%", y: "-14%" },
        animate: { x: "-100%", y: "-125%" },
        animateSp: { x: "-58%", y: "-175%" }, 
        animateMd: { x: "-100%", y: "-125%" }, 
        animateLg: { x: "-100%", y: "-125%" },
        delay: 0.05,
        delayLg: 0.05,
        smScaleBoost: 1.12,
        lgScaleBoost: 1,
    },
    {
        src: "/images/svg/cloudtr.svg",
        src2: "/images/svg/cloudtr2.svg",
        position: "-right-[10vw] -top-[10vw]",
        initial: { x: "65%", y: "-40%" },
        initialSm: { x: "-79%", y: "-6%" },
        initialMd: { x: "-114%", y: "-60%" },
        initialLg: { x: "-98%", y: "-44%" }, 
        animate: { x: "100%", y: "-125%" },
        animateSp: { x: "62%", y: "-175%" },
        animateMd: { x: "100%", y: "-125%" },
        animateLg: { x: "100%", y: "-125%" }, // cloudtl の { -100%, -125% } のミラー
        delay: 0.2,
        delayLg: 0.05, 
        smScaleBoost: 1.12,
        lgScaleBoost: 1.08,
    },
    {
        src: "/images/svg/cloudbl.svg",
        src2: "/images/svg/cloudbl2.svg",
        position: "-left-[10vw] -bottom-[10vw]",
        initial: { x: "-62%", y: "58%" },
        initialSm: { x: "150%", y: "-2%" },
        initialMd: { x: "142%", y: "148%" },
        initialLg: { x: "32%", y: "-108%" },
        animate: { x: "-100%", y: "125%" },
        animateSp: { x: "-68%", y: "175%" },
        animateMd: { x: "-100%", y: "125%" },
        animateLg: { x: "-100%", y: "125%" },
        delay: 0.35,
        delayLg: 0.35,
        smScaleBoost: 1.1,
        lgScaleBoost: 1.25,
    },
    {
        src: "/images/svg/cloudbr.svg",
        src2: "/images/svg/cloudbr2.svg",
        position: "-right-[10vw] -bottom-[10vw]",
        initial: { x: "66%", y: "66%" },
        initialSm: { x: "-144%", y: "14%" },
        initialMd: { x: "-142%", y: "148%" },
        initialLg: { x: "-186%", y: "-80%" },
        animate: { x: "100%", y: "125%" },
        animateSp: { x: "76%", y: "175%" },
        animateMd: { x: "100%", y: "125%" },
        animateLg: { x: "100%", y: "125%" },
        delay: 0.5,
        delayLg: 0.5,
        smScaleBoost: 1.16,
        lgScaleBoost: 1.26,
    },
] as const;

type Tier = "base" | "sm" | "md" | "lg";

export default function Loading({ setLoading }: LoadingProps) {
    const [show, setShow] = useState(true);
    const [tier, setTier] = useState<Tier>("base");

    // 初回表示のみ。リロード（同じタブ）では sessionStorage を見てスキップ。
    // useLayoutEffect でペイント前に判定するのでチラつかない。
    useIsomorphicLayoutEffect(() => {
        let seen = false;
        try {
            seen = sessionStorage.getItem(LOADING_SEEN_KEY) === "1";
            sessionStorage.setItem(LOADING_SEEN_KEY, "1");
        } catch {
            // プライベートモード等で sessionStorage が使えない場合は毎回表示
        }
        if (seen) {
            setShow(false);
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [planeDuration, setPlaneDuration] = useState(AIRPLANE_DURATION_MIN);
    const [planeDelay, setPlaneDelay] = useState(AIRPLANE_DELAY);

    useEffect(() => {
        const smMq = window.matchMedia(SM_QUERY);
        const mdMq = window.matchMedia(MD_QUERY);
        const lgMq = window.matchMedia(LG_QUERY);
        const update = () =>
            setTier(
                lgMq.matches ? "lg" : mdMq.matches ? "md" : smMq.matches ? "sm" : "base",
            );
        update();
        smMq.addEventListener("change", update);
        mdMq.addEventListener("change", update);
        lgMq.addEventListener("change", update);
        return () => {
            smMq.removeEventListener("change", update);
            mdMq.removeEventListener("change", update);
            lgMq.removeEventListener("change", update);
        };
    }, []);

    const driftDuration =
        tier === "lg"
            ? DRIFT_DURATION_LG
            : tier === "md"
              ? DRIFT_DURATION_MD
              : tier === "sm"
                ? DRIFT_DURATION_SM
                : DRIFT_DURATION;

    // 点線トレイルを廃止したぶん、どの幅でも飛行機が退場しきる前に早めに雲を開始する
    const cloudLead = tier === "lg" ? 2 : tier === "md" ? 2.2 : 1.9;
    const cloudStart = Math.max(CLOUD_START, planeDelay + planeDuration - cloudLead);
    const totalDuration = Math.round((cloudStart + driftDuration + 1.5) * 1000);

    const startScale = tier === "lg" ? 1.6 : tier === "md" ? 2.7 : 2.2;

    const heartStartY =
        tier === "lg" ? -58 : tier === "md" ? -74 : tier === "sm" ? -66 : -40;
    const titleStartY =
        tier === "lg" ? 74 : tier === "md" ? 94 : tier === "sm" ? 84 : 53;


    const airplaneSize =
        tier === "base" ? AIRPLANE_SIZE_SP : tier === "lg" ? AIRPLANE_SIZE_LG : AIRPLANE_SIZE;
    const airplaneTipOffset = airplaneSize * AIRPLANE_TIP_RATIO;

    useEffect(() => {
        if (!show) return;
        const timer = setTimeout(() => {
            setShow(false);
            setLoading(false);
        }, totalDuration);

        return () => clearTimeout(timer);
    }, [show, totalDuration, setLoading]);

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


    const planeProgress = useMotionValue(0); 
    const logoWipePct = useMotionValue(0); 
    // 先端より後ろ(左)を feather 幅かけて transparent へフェード。先端の手前(右)は crisp なまま。
    const logoWipeMask = useMotionTemplate`linear-gradient(90deg, transparent, transparent calc(${logoWipePct}% - ${TITLE_WIPE_FEATHER}px), #000 ${logoWipePct}%, #000 100%)`;
    // 飛行機ボックス左端の x（clip 計算の planeBoxLeft と同じ式）を CSS calc で表現
    const planeX = useMotionTemplate`calc(${planeProgress} * (100vw + ${AIRPLANE_OFFSCREEN * 2}px) - ${AIRPLANE_OFFSCREEN}px)`;

    useEffect(() => {
        const distance = window.innerWidth + AIRPLANE_OFFSCREEN * 2;
        const speed = window.matchMedia(LG_QUERY).matches ? AIRPLANE_SPEED_LG : AIRPLANE_SPEED;
        const duration = Math.min(
            AIRPLANE_DURATION_MAX,
            Math.max(AIRPLANE_DURATION_MIN, distance / speed),
        );
        setPlaneDuration(duration);
        const delay = window.matchMedia(LG_QUERY).matches
            ? AIRPLANE_DELAY
            : window.matchMedia(MD_QUERY).matches
              ? AIRPLANE_DELAY_MD
              : window.matchMedia(SM_QUERY).matches
                ? AIRPLANE_DELAY_SM
                : AIRPLANE_DELAY_SP;
        setPlaneDelay(delay);
        const controls = animate(planeProgress, 1, {
            duration,
            delay,
            ease: "linear",
        });
        return () => controls.stop();
    }, [planeProgress]);

    useMotionValueEvent(planeProgress, "change", (p) => {
        const vw = window.innerWidth;
        const travel = vw + AIRPLANE_OFFSCREEN * 2;
        const planeBoxLeft = -AIRPLANE_OFFSCREEN + p * travel;
        const tipX = planeBoxLeft + airplaneTipOffset;
        // 110 まで許容して feather 分も画面から抜けきるようにする
        logoWipePct.set(Math.min(110, Math.max(0, (tipX / vw) * 100)));
    });

    if (!show) return null;

    return (
        <motion.div
            className="fixed inset-0 z-[50] flex h-[100svh] w-screen items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: show ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >

            <motion.div
                className="absolute inset-0 z-20 bg-white"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: cloudStart - 0.4 }}
            />

            {clouds.map((cloud) => {
                const start =
                    tier === "lg"
                        ? cloud.initialLg
                        : tier === "md"
                          ? cloud.initialMd
                          : tier === "sm"
                            ? cloud.initialSm
                            : cloud.initial;
                // 雲ごとの scale 補正: lg は lgScaleBoost、sm/md は smScaleBoost
                const cloudStartScale =
                    startScale *
                    (tier === "lg"
                        ? cloud.lgScaleBoost
                        : tier === "sm" || tier === "md"
                          ? cloud.smScaleBoost
                          : 1);
                // lg / base（スマホ）は exit 方向を個別に上書きできる
                const cloudAnimate =
                    tier === "lg"
                        ? cloud.animateLg
                        : tier === "md"
                          ? cloud.animateMd
                          : tier === "base"
                            ? cloud.animateSp
                            : cloud.animate;
                const cloudDelay = cloudStart + (tier === "lg" ? cloud.delayLg : cloud.delay);

                const isLg = tier === "lg";
                const cloudEase = isLg ? DRIFT_EASE_LG : DRIFT_EASE;
                const cloudOpacity = isLg
                    ? CLOUD_OPACITY_LG
                    : tier === "md"
                      ? CLOUD_OPACITY_MD
                      : tier === "base"
                        ? CLOUD_OPACITY_SP
                        : CLOUD_OPACITY;
                const cloudOpacityTimes = isLg
                    ? CLOUD_OPACITY_TIMES_LG
                    : tier === "md"
                      ? CLOUD_OPACITY_TIMES_MD
                      : tier === "base"
                        ? CLOUD_OPACITY_TIMES_SP
                        : CLOUD_OPACITY_TIMES;

                const opacityDelay = isLg
                    ? cloudDelay
                    : cloudStart + clouds[0].delay;
   
                const cloudScale = isLg
                    ? [cloudStartScale, cloudStartScale * 0.56, 0.35, 0.2]
                    : [
                          cloudStartScale,
                          cloudStartScale * 0.82,
                          cloudStartScale * 0.6,
                          cloudStartScale * 0.45,
                      ];
                return (
                <motion.div
                    key={cloud.src}
                    className={`absolute z-30  h-[75vmax] w-[120vmax] lg:h-[72vw] lg:w-[110vw] blur-[1px] ${cloud.position}`}
                    initial={{ ...start, opacity: 1, scale: cloudStartScale }}
                    animate={{ ...cloudAnimate, opacity: [...cloudOpacity], scale: cloudScale }}
                    transition={{
                        duration: driftDuration,
                        delay: cloudDelay,
                        ease: cloudEase,
                        opacity: {
                            duration: driftDuration,
                            delay: opacityDelay,
                            times: [...cloudOpacityTimes],
                            ease: "linear",
                        },
                        scale: {
                            duration: driftDuration,
                            delay: cloudDelay,
                            times: [0, 0.35, 0.7, 1],
                            ease: "linear",
                        },
                    }}
                >

                    <Image src={cloud.src2} alt="" fill className="object-contain lg:hidden" />
                    <Image src={cloud.src} alt="" fill className="hidden object-contain lg:block" />
                </motion.div>
                );
            })}

            <motion.div
                className="absolute inset-0 z-40"
                style={{ maskImage: logoWipeMask, WebkitMaskImage: logoWipeMask }}
            >

                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ y: heartStartY }}
                >
                    <div className="relative flex h-[172px] w-[172px] sm:h-[296px] sm:w-[296px] lg:h-[252px] lg:w-[252px] items-center justify-center">
                       
                        <motion.div
                            className="absolute inset-0 z-10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: LOGO_IN_DELAY, ease: "easeOut" }}
                        >
                            <Image src="/images/svg/loadinglogo.svg" alt="Logo" fill />
                        </motion.div>

                        <motion.div
                            className="absolute left-0 top-0 z-20 h-full overflow-hidden"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: LINE_DURATION, delay: LINE_DELAY, ease: "easeInOut" }}
                        >
                            <div className="absolute left-0 top-0 h-full w-[172px] sm:w-[296px] lg:w-[252px]">
                                <Image src="/images/svg/loadingline.svg" alt="" fill />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ y: titleStartY }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: TITLE_IN_DURATION, delay: TITLE_IN_DELAY }}
                >
                    <Image
                        src="/images/svg/TitleCatchcopy-primary.svg"
                        alt=""
                        width={4883}
                        height={1167}
                        priority
                        className="h-auto w-[168px] sm:w-[272px] lg:w-[240px]"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute left-0 top-1/2 z-50"
                style={{ x: planeX, y: "-50%" }}
            >
                <Image src="/images/svg/airplane.svg" alt="" width={airplaneSize} height={airplaneSize} />
            </motion.div>
        </motion.div>
    );
}

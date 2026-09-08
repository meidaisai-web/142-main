"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

interface LoadingProps {
    setLoading: (finished: boolean) => void;
}

// 非lg: 前半ゆっくり（雲がほぼ止まって透けていく）→ 後半で一気にはける ease-in
const DRIFT_EASE = [0.55, 0, 0.85, 0.35] as const;
// lg: 透明度調整前の前寄りイージング（lg は従来のはけ方に戻す）
const DRIFT_EASE_LG = [0.25, 0.3, 0.5, 0.9] as const;
const DRIFT_DURATION = 3.1; // base
const DRIFT_DURATION_SM = 3.1;
const DRIFT_DURATION_MD = 3;
const DRIFT_DURATION_LG = 9.5;

// 雲の透明度カーブ: base/sm は「止まって透ける」演出、md は少し透け強め、lg は従来
const CLOUD_OPACITY = [1, 0.95, 0.32, 0] as const;
const CLOUD_OPACITY_TIMES = [0, 0.3, 0.65, 1] as const;
const CLOUD_OPACITY_MD = [1, 0.87, 0.26, 0] as const;
const CLOUD_OPACITY_TIMES_MD = [0, 0.29, 0.62, 1] as const;
const CLOUD_OPACITY_LG = [1, 0.22, 0.02, 0] as const;
const CLOUD_OPACITY_TIMES_LG = [0, 0.28, 0.55, 1] as const;

// シーケンス:
//   1. ハート(loadinglogo)フェードイン ＋ その下にタイトル(TitleCatchcopy)を配置
//   2. 心電図ライン(loadingline)を左→右に描画
//   3. ハート＋ラインだけフェードアウト
//   4. 下にあったタイトルが拡大しながら画面中央へ移動 → 少しキープ → フェードアウト
//   5. 飛行機が横断（後ろに点線トレイル）→ 画面外へ抜けてトレイルがフェードアウト
//   6. 雲アニメ開始（飛行機の横断時間ぶん後ろ倒し = cloudStart）
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
const TITLE_HOLD = 1.7; // 中央でとどまる時間（飛行機がワイプするまで消えないように長め）
const TITLE_OUT_DELAY = TITLE_MOVE_DELAY + TITLE_MOVE_DURATION + TITLE_HOLD; // 5.0
const TITLE_OUT_DURATION = 0.6;
const TITLE_ANIM_TOTAL = TITLE_OUT_DELAY + TITLE_OUT_DURATION; // 5.6（タイトルの opacity/y/scale 用の総尺）

// 雲開始の下限（飛行機が短時間で終わる場合用）。実際は飛行機の横断時間で後ろ倒しされる。
// base/sm はタイトルを長く見せる（TITLE_OUT_DELAY まで待つ）が、
// md/lg はタイトルが飛行機のワイプで先に消えるので、待たずに早めに開始できる。
const CLOUD_START = TITLE_OUT_DELAY + 0.15;
const CLOUD_START_MD = TITLE_MOVE_DELAY + TITLE_MOVE_DURATION + 0.3; // ≒4.6

// 飛行機: 画面左外から右外へ横断。タイトルが画面中央付近に来ているタイミングで通過する。
const AIRPLANE_DELAY = 3.5; // lg
const AIRPLANE_DELAY_MD = 4.3; // md はロゴ文字を少し長めに見せてから飛行機
const AIRPLANE_DELAY_SP = 4.7; // base / sm はさらに長め
// 画面幅によらず一定速度（px/秒）で飛ぶ。横断時間 = 移動距離 / この速度。
const AIRPLANE_SPEED = 480;
const AIRPLANE_SPEED_LG = 530; // lg は少し速く
const AIRPLANE_DURATION_MIN = 2.4; // 狭い画面（スマホ）で速すぎないように下限
const AIRPLANE_DURATION_MAX = 5; // 極端に広い画面で遅すぎ・全体尺オーバーしないように上限
const AIRPLANE_SIZE = 140; // sm/lg のサイズ
const AIRPLANE_SIZE_SP = 112; // スマホ幅（base）のサイズ
const AIRPLANE_OFFSCREEN = 160; // 画面外に置くマージン（開始 -160px / 終了 100vw+160px）
// 飛行機ボックス左端から見た「先端」の比率。ノーズが画像右寄りにある前提。
// 文字が消えるラインをこの先端に合わせる。ズレる場合はここを調整。
const AIRPLANE_TIP_RATIO = 0.9;
// 文字が消える切り口のぼかし幅(px)。大きいほどふんわり溶けるように消える。
const TITLE_WIPE_FEATHER = 24;

// 飛行機の後ろに残る点線（飛行機雲）。飛行機のお尻あたりから後方へ、planeProgress 駆動で左から出現。
const TRAIL_COLOR = "var(--color-secondary)"; // globals.css: #F6BDC6
const TRAIL_DASH = 14; // ダッシュ1個の長さ(px)
const TRAIL_GAP = 16; // ダッシュ間の隙間(px)
const TRAIL_THICK = 5; // 線の太さ(px)
const TRAIL_TAIL_RATIO = 0.14; // 点線の先端 = 飛行機ボックス左端からサイズ×この比率（機体の後ろの先端に合わせる）
const TRAIL_FADE_DISTANCE = 140; // 飛行機が画面右端をこの距離ぶん越えたら点線が消えきる(px)

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
        animateSp: { x: "-58%", y: "-175%" }, // base のみ: ほぼ真上へ（横流れを消す）。initial.x -54% とほぼ同じ x
        animateMd: { x: "-100%", y: "-125%" }, // md: 一旦 animate と同じ（縦目にすると中央が空くため保留）
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
        initialLg: { x: "-98%", y: "-44%" }, // cloudtl とほぼミラー（同じ距離・同じはけ方）
        animate: { x: "100%", y: "-125%" },
        animateSp: { x: "62%", y: "-175%" },
        animateMd: { x: "100%", y: "-125%" },
        animateLg: { x: "100%", y: "-125%" }, // cloudtl の { -100%, -125% } のミラー
        delay: 0.2,
        delayLg: 0.05, // cloudtl と同タイミング
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
    // 画面幅の段階（雲のスタート位置の切り替えに使う）: base < sm < md < lg
    const [tier, setTier] = useState<Tier>("base");
    // 飛行機の横断時間・開始遅延（マウント時に画面幅から算出）。雲アニメの開始タイミングにも使う。
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
    // 雲は飛行機が画面外へ抜けるのに重ねて開始する（真っ白な間を作らない）。
    // 非lg は ease-in で序盤ほぼ動かないので、飛行機がまだ右端付近にいても雲を出し始めてOK。
    const cloudStartFloor = tier === "base" || tier === "sm" ? CLOUD_START : CLOUD_START_MD;
    // 飛行機の横断終了より前に、この秒数ぶん先行して雲を出し始める（真っ白な間を消す）。
    // ease-in で序盤ほぼ動かないので、飛行機が飛んでいる間に雲を置いておいてもOK。
    const cloudLead = tier === "lg" ? 0 : tier === "md" ? 1.5 : 0.6;
    const cloudStart = Math.max(cloudStartFloor, planeDelay + planeDuration - cloudLead);
    const totalDuration = Math.round((cloudStart + driftDuration + 1.5) * 1000);
    // lg 未満は縦長画面で1枚の雲が画面高さを覆いきれず隙間が出やすいので、
    // スタート時の scale を大きめにして4枚で画面を確実に覆う。
    const startScale = tier === "lg" ? 1.6 : tier === "md" ? 2.7 : 2.2;

    // ハートとタイトルの初期位置（画面中央からの px オフセット）。
    // ハートを上に、タイトルを下に置いて「ロゴ＋キャッチコピー」の並びにする。
    // タイトルは後で y:0（画面中央）へ移動する。
    const heartStartY = tier === "lg" ? -96 : tier === "sm" || tier === "md" ? -106 : -46;
    const titleStartY = tier === "lg" ? 126 : tier === "sm" || tier === "md" ? 138 : 62;

    // 飛行機サイズ（スマホ幅は少し小さく）と、それに比例する先端・尾の位置
    const airplaneSize = tier === "base" ? AIRPLANE_SIZE_SP : AIRPLANE_SIZE;
    const airplaneTipOffset = airplaneSize * AIRPLANE_TIP_RATIO;
    const trailTailOffset = airplaneSize * TRAIL_TAIL_RATIO;

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
    // 点線トレイル: 飛行機のお尻まで左から表示。右側の未表示分を inset で隠す。
    const trailHideRight = useMotionValue(100); // 100: 全部隠す / 0: 全部表示
    const trailClip = useMotionTemplate`inset(0 ${trailHideRight}% 0 0)`;
    const trailOpacity = useMotionValue(1); // 飛行機が画面外へ抜けるとともに 0 へ

    useEffect(() => {
        // 移動距離（画面幅＋左右マージン）に比例した時間にして、速度を画面幅によらず一定にする
        const distance = window.innerWidth + AIRPLANE_OFFSCREEN * 2;
        const speed = window.matchMedia(LG_QUERY).matches ? AIRPLANE_SPEED_LG : AIRPLANE_SPEED;
        const duration = Math.min(
            AIRPLANE_DURATION_MAX,
            Math.max(AIRPLANE_DURATION_MIN, distance / speed),
        );
        setPlaneDuration(duration);
        // ロゴ文字を見せる時間を tier で変える（lg 短め → md → base/sm 長め）
        const delay = window.matchMedia(LG_QUERY).matches
            ? AIRPLANE_DELAY
            : window.matchMedia(MD_QUERY).matches
              ? AIRPLANE_DELAY_MD
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
        // 飛行機ボックス左端の画面 x（planeX の calc と同じ式）
        const vw = window.innerWidth;
        const travel = vw + AIRPLANE_OFFSCREEN * 2;
        const planeBoxLeft = -AIRPLANE_OFFSCREEN + p * travel;

        // 点線トレイル: 飛行機のお尻の先端まで左から表示
        const tailX = planeBoxLeft + trailTailOffset;
        trailHideRight.set(Math.min(100, Math.max(0, 100 - (tailX / vw) * 100)));

        // 飛行機が画面右端を越えたら、越えた距離に応じて点線をフェードアウト
        const planeRight = planeBoxLeft + airplaneSize;
        const overshoot = planeRight - vw;
        trailOpacity.set(1 - Math.min(1, Math.max(0, overshoot / TRAIL_FADE_DISTANCE)));

        // タイトルのワイプ: 飛行機の先端に合わせる
        const el = titleRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.width === 0) return;
        const tipX = planeBoxLeft + airplaneTipOffset;
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
                transition={{ duration: 0.6, delay: cloudStart - 0.4 }}
            />

            {/* 雲: スタート時は scale 1.45 で大きく画面を隙間なく覆い、
                はけていくにつれて小さくしながら（scale → 0.6）白く透けて消える */}
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
                // lg は「透明度の話」より前の挙動に戻す。非lg は現行（止まって透ける）版。
                const isLg = tier === "lg";
                const cloudEase = isLg ? DRIFT_EASE_LG : DRIFT_EASE;
                const cloudOpacity = isLg
                    ? CLOUD_OPACITY_LG
                    : tier === "md"
                      ? CLOUD_OPACITY_MD
                      : CLOUD_OPACITY;
                const cloudOpacityTimes = isLg
                    ? CLOUD_OPACITY_TIMES_LG
                    : tier === "md"
                      ? CLOUD_OPACITY_TIMES_MD
                      : CLOUD_OPACITY_TIMES;
                // 非lg は透明度を全雲そろえる（位置は delay でずらすが透け方は同じ）。lg は従来どおり位置と同じ delay。
                const opacityDelay = isLg
                    ? cloudDelay
                    : cloudStart + clouds[0].delay;
                // scale の縮小: lg は大きく縮む、非lg は控えめ
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

            {/* 飛行機雲: 飛行機のお尻から後方へ伸びる点線（planeProgress 駆動で左から出現） */}
            <motion.div
                className="pointer-events-none absolute inset-x-0 top-1/2 z-[45] bg-left bg-repeat-x"
                style={{
                    y: "-50%",
                    height: TRAIL_THICK,
                    clipPath: trailClip,
                    opacity: trailOpacity,
                    backgroundImage: `linear-gradient(to right, ${TRAIL_COLOR} 0 ${TRAIL_DASH}px, transparent ${TRAIL_DASH}px)`,
                    backgroundSize: `${TRAIL_DASH + TRAIL_GAP}px ${TRAIL_THICK}px`,
                }}
            />

            {/* 飛行機: 画面左外から右外へ横断（x はタイトルのワイプと同じ planeProgress 駆動） */}
            <motion.div
                className="absolute left-0 top-1/2 z-50"
                style={{ x: planeX, y: "-50%" }}
            >
                <Image src="/images/svg/airplane.svg" alt="" width={airplaneSize} height={airplaneSize} />
            </motion.div>
        </motion.div>
    );
}

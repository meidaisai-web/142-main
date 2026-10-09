"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "framer-motion";
import CloudPageContainer from "@/components/base/CloudPageContainer";
import PageTitle from "@/components/texts/PageTitle";
import { question } from "./question";

type Answer = "a" | "b";

const SWIPE_THRESHOLD = 100;
// A/B ラベルが完全に表示される距離
const LABEL_FADE = SWIPE_THRESHOLD / 2;
// globals.css の --color-primary / --color-secondary と同じ値（motion の補間には実色が必要）
const PRIMARY = "#9AD2C9";
const SECONDARY = "#F6BDC6";
const PRIMARY_BORDER = "#5EB5B8"; // --color-primary-900
const SECONDARY_BORDER = "#F2B6BF"; // --color-secondary-900
const DEFAULT_BORDER = "#C0B4D1"; // --color-accent

export default function Page() {
    const router = useRouter();
    const [isSmartPhone, setIsSmartPhone] = useState<boolean | null>(null);
    const [answers, setAnswers] = useState<Answer[]>([]);

    useEffect(() => {
        setIsSmartPhone(/iPhone|Android.+Mobile/.test(navigator.userAgent));
    }, []);

    function answer(choice: Answer) {
        setAnswers((prev) => [...prev, choice]);
    }

    const index = answers.length;
    const first = question.filter((q) => q.section === "first");
    // first を全て答えたら、A が多ければ second、B が多ければ third に進む
    const firstAnswers = answers.slice(0, first.length);
    const nextSection =
        firstAnswers.length < first.length
            ? null
            : firstAnswers.filter((a) => a === "a").length > firstAnswers.length / 2
              ? "second"
              : "third";
    const questions = nextSection
        ? [...first, ...question.filter((q) => q.section === nextSection)]
        : first;
    // 分岐前は second の問題数で仮置きする（second・third は同じ問題数）
    const total = first.length + question.filter((q) => q.section === (nextSection ?? "second")).length;
    const current = questions[index];
    const finished = !current;

    // 全問答え終わったら、回答（左="a"・右="b"を順に並べた文字列）を付けて結果ページへ
    useEffect(() => {
        if (finished) router.replace(`/mtype/answer?r=${answers.join("")}`);
    }, [finished, answers, router]);

    return (
        <CloudPageContainer>
            <PageTitle>M-TYPE</PageTitle>
            {isSmartPhone === null || !current ? null : isSmartPhone ? (
                <SmartPhone key={current.id} q={current} index={index} total={total} onAnswer={answer} />
            ) : (
                <PC key={current.id} q={current} index={index} total={total} onAnswer={answer} />
            )}
        </CloudPageContainer>
    )
}

// section が first は A/B、second・third は C/D と表示する（回答の値は左="a"・右="b"のまま）
function labelsOf(q: (typeof question)[number]) {
    return q.section === "first" ? { a: "A", b: "B" } : { a: "C", b: "D" };
}

type QuestionProps = {
    q: (typeof question)[number];
    onAnswer: (choice: Answer) => void;
}

function SmartPhone({ q, index, total, onAnswer }: QuestionProps & { index: number; total: number }) {
    const label = labelsOf(q);
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-15, 15]);
    const opacityA = useTransform(x, [-LABEL_FADE, 0], [1, 0]);
    const opacityB = useTransform(x, [0, LABEL_FADE], [0, 1]);
    const backgroundColor = useTransform(
        x,
        [-SWIPE_THRESHOLD, 0, SWIPE_THRESHOLD],
        [PRIMARY, "#ffffff", SECONDARY],
    );
    const borderColor = useTransform(
        x,
        [-SWIPE_THRESHOLD, 0, SWIPE_THRESHOLD],
        [PRIMARY_BORDER, DEFAULT_BORDER, SECONDARY_BORDER],
    );

    const [hinting, setHinting] = useState(index === 0);

    // 最初の問題だけ、左右に1回ずつ動かしてスワイプできることを伝える
    useEffect(() => {
        if (index !== 0) return;
        const controls = animate(x, [0, -80, 0, 80, 0], {
            duration: 1.8,
            delay: 0.6,
            ease: "easeInOut",
            onComplete: () => setHinting(false),
        });
        return () => controls.stop();
    }, [index, x]);

    // カードを画面外へ飛ばしても横スクロールが出ないようにする（親でクリップするとカードや影が見切れるため）
    useEffect(() => {
        const prev = document.body.style.overflowX;
        document.body.style.overflowX = "hidden";
        return () => {
            document.body.style.overflowX = prev;
        };
    }, []);

    function fling(choice: Answer) {
        const target = (choice === "a" ? -1 : 1) * window.innerWidth;
        animate(x, target, { duration: 0.25 }).then(() => onAnswer(choice));
    }

    return (
        <div className="flex flex-col items-center gap-4 pb-8 touch-pan-y">
            <p className="text-sm">{index + 1} / {total}</p>
            <motion.div
                className="relative flex h-96 w-full max-w-xs flex-col justify-center overflow-hidden rounded-2xl border-2 p-6 shadow-xl select-none"
                style={{ x, rotate, backgroundColor, borderColor }}
                drag={hinting ? false : "x"}
                dragSnapToOrigin
                dragElastic={0.8}
                onDragEnd={(_, info) => {
                    if (info.offset.x <= -SWIPE_THRESHOLD) fling("a");
                    else if (info.offset.x >= SWIPE_THRESHOLD) fling("b");
                }}
            >
                <AnimatePresence>
                    {hinting && (
                        <motion.div
                            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-accent/50"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="font-bold text-text">選択方向にスワイプ</p>
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.span
                    className="absolute right-3 top-3 z-20 rounded border-2 border-primary-900 bg-white px-3 py-0.5 text-lg font-bold text-primary-900 shadow"
                    style={{ opacity: opacityA }}
                >
                    {label.a}
                </motion.span>
                <motion.span
                    className="absolute left-3 top-3 z-20 rounded border-2 border-primary-text bg-white px-3 py-0.5 text-lg font-bold text-primary-text shadow"
                    style={{ opacity: opacityB }}
                >
                    {label.b}
                </motion.span>
                {/* 背景の装飾 */}
                <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-secondary/30" />
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-primary/40" />
                <div className="relative flex flex-col items-center gap-5">
                    <span className="rounded-full bg-accent px-4 py-1 text-sm font-bold tracking-widest text-white">
                        Q{index + 1}
                    </span>
                    <p className="text-center text-lg font-bold">{q.question}</p>
                    <div className="flex w-full items-center gap-2 text-xs text-gray-400">
                        <span className="h-px flex-1 bg-gray-300" />
                        <span>どっち？</span>
                        <span className="h-px flex-1 bg-gray-300" />
                    </div>
                    <div className="flex w-full gap-3">
                        <div className="flex flex-1 flex-col items-center gap-2 rounded-xl bg-white/80 p-3 text-center text-sm shadow-sm">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white">{label.a}</span>
                            <p>{q.a}</p>
                            <span className="text-primary-900">← 左</span>
                        </div>
                        <div className="flex flex-1 flex-col items-center gap-2 rounded-xl bg-white/80 p-3 text-center text-sm shadow-sm">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-900 font-bold text-white">{label.b}</span>
                            <p>{q.b}</p>
                            <span className="text-primary-text">右 →</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

function PC({ q, index, total, onAnswer }: QuestionProps & { index: number; total: number }) {
    const label = labelsOf(q);
    // 選択肢にマウスを乗せると、スマホでスワイプしたときと同じようにカードの色が変わる
    const [hovered, setHovered] = useState<Answer | null>(null);
    const cardColor =
        hovered === "a"
            ? { backgroundColor: PRIMARY, borderColor: PRIMARY_BORDER }
            : hovered === "b"
              ? { backgroundColor: SECONDARY, borderColor: SECONDARY_BORDER }
              : { backgroundColor: "#ffffff", borderColor: DEFAULT_BORDER };

    const optionClassName = "flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-xl bg-white/80 p-4 text-center shadow-sm transition-transform duration-150 hover:-translate-y-1 hover:bg-white hover:shadow-md active:translate-y-0";

    return (
        <div className="flex flex-col items-center gap-4 pb-8">
            <p className="text-sm">{index + 1} / {total}</p>
            <div
                className="relative flex h-96 w-full max-w-xl flex-col justify-center overflow-hidden rounded-2xl border-2 p-8 shadow-xl transition-colors duration-300 select-none"
                style={cardColor}
            >
                {/* 背景の装飾 */}
                <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-secondary/30" />
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-primary/40" />
                <div className="relative flex flex-col items-center gap-5">
                    <span className="rounded-full bg-accent px-4 py-1 text-sm font-bold tracking-widest text-white">
                        Q{index + 1}
                    </span>
                    <p className="text-center text-xl font-bold">{q.question}</p>
                    <div className="flex w-full items-center gap-2 text-xs text-gray-400">
                        <span className="h-px flex-1 bg-gray-300" />
                        <span>どっち？</span>
                        <span className="h-px flex-1 bg-gray-300" />
                    </div>
                    <div className="flex w-full gap-4">
                        <button
                            type="button"
                            className={optionClassName}
                            onClick={() => onAnswer("a")}
                            onMouseEnter={() => setHovered("a")}
                            onMouseLeave={() => setHovered(null)}
                            onFocus={() => setHovered("a")}
                            onBlur={() => setHovered(null)}
                        >
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-white">{label.a}</span>
                            <span>{q.a}</span>
                        </button>
                        <button
                            type="button"
                            className={optionClassName}
                            onClick={() => onAnswer("b")}
                            onMouseEnter={() => setHovered("b")}
                            onMouseLeave={() => setHovered(null)}
                            onFocus={() => setHovered("b")}
                            onBlur={() => setHovered(null)}
                        >
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-900 font-bold text-white">{label.b}</span>
                            <span>{q.b}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

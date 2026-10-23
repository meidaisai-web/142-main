'use client';

import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import ModalPortal from "./ModalPortal";

const LOGO_SRC = "/images/carousel/logo.svg";

// 画面を抽選券そのものと勘違いされないための案内（引換カードと完了画面で共通。1文目と2文目で改行する）
export function VoucherNotice({ className = "" }: { className?: string }) {
    return (
        <p className={`text-xs sm:text-sm text-center bg-accent-50 rounded-lg px-3 py-2 leading-relaxed ${className}`}>
            こちらは抽選券ではありません。<br />
            和泉図書館前Meidaisai Championship受付にて紙の抽選券に引き換えられます。
        </p>
    )
}

interface VoucherCompleteOverlayProps {
    onClose: () => void; // スライダーを最後まで動かし、完了表示が終わったあとに呼ばれる
}

// 抽選券の引換完了画面
// 受付スタッフの前でスライダーを右端まで動かすと、ロゴに色が付いて「引き換えが完了しました。」と表示される
export default function VoucherCompleteOverlay({ onClose }: VoucherCompleteOverlayProps) {
    const [sliderValue, setSliderValue] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    // 表示中は背面をスクロールさせない
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    // 完了したら3秒後に画面を閉じる
    useEffect(() => {
        if (!isCompleted) return;
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [isCompleted, onClose]);

    function handleSliderChange(e: ChangeEvent<HTMLInputElement>) {
        if (isCompleted) return;
        const value = Number(e.target.value);
        setSliderValue(value);
        if (value >= 99) {
            setSliderValue(100);
            setIsCompleted(true);
        }
    }

    return (
        <ModalPortal>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-text/50 px-6">
                <div className="w-full max-w-md max-h-[90dvh] overflow-y-auto bg-background border-[6px] border-accent-700 rounded-3xl text-text px-6 sm:px-10 py-8 shadow-lg flex flex-col items-center">
                    {/* ロゴ：灰色のロゴの上に、スライダーの進み具合に合わせて色付きのロゴを下から重ねる */}
                    <div className="relative w-36 h-36 shrink-0">
                        <div
                            className="absolute -inset-4 rounded-full"
                            style={{
                                background: "radial-gradient(circle, var(--color-primary-100) 0%, transparent 70%)",
                                opacity: sliderValue / 100,
                            }}
                        />
                        <Image src={LOGO_SRC} alt="" fill sizes="144px" className="object-contain grayscale opacity-30" />
                        <div className="absolute inset-0" style={{ clipPath: `inset(${100 - sliderValue}% 0 0 0)` }}>
                            <Image src={LOGO_SRC} alt="明大祭ロゴ" fill sizes="144px" className="object-contain" />
                        </div>
                    </div>

                    <p className={`mt-6 text-center font-bold ${isCompleted ? 'text-xl text-primary-900' : 'text-sm sm:text-base'}`} aria-live="polite">
                        {isCompleted ? '引き換えが完了しました。' : '受付スタッフの前で、右端までスライドしてください。'}
                    </p>

                    {/* スライダー：見た目は自前で描き、操作は透明な range 入力で受け取る */}
                    {/* 丸はバーと同じ高さ（3rem）の円。左端0%〜右端100%で、丸がバーの内側に収まるよう位置を補正する */}
                    <div className="relative w-full max-w-xs h-12 mt-5 rounded-full bg-accent-50 overflow-hidden">
                        <div
                            className="absolute inset-y-0 left-0 rounded-full"
                            style={{
                                width: `calc(${sliderValue}% + ${(1 - sliderValue / 100) * 3}rem)`, // 丸の右端まで塗る
                                backgroundImage: "linear-gradient(90deg, var(--color-secondary), var(--color-accent-700), var(--color-primary-900))",
                            }}
                        />
                        <div
                            className="absolute inset-y-0 w-12 rounded-full bg-background border-2 border-primary-900 shadow flex items-center justify-center text-primary-900 font-bold pointer-events-none"
                            style={{ left: `calc(${sliderValue}% - ${sliderValue / 100 * 3}rem)` }}
                            aria-hidden="true"
                        >
                            {isCompleted ? '✓' : '→'}
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={sliderValue}
                            onChange={handleSliderChange}
                            disabled={isCompleted}
                            aria-label="右端まで動かして引き換えを完了する"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-default"
                        />
                    </div>

                    <VoucherNotice className="mt-6" />
                </div>
            </div>
        </ModalPortal>
    )
}

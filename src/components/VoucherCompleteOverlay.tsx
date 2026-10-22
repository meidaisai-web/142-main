'use client';

import { useState } from "react";
import Image from "next/image";
import { Slider } from "@heroui/slider";

const LOGO_SRC = "/images/carousel/logo.svg";

interface VoucherCompleteOverlayProps {
    onClose: () => void; // スライダーを最後まで動かし、完了表示が終わったあとに呼ばれる
}

// 抽選券の引換完了画面（去年のデザインを流用）
// 受付スタッフの前でスライダーを右端まで動かすと、ロゴに色が付いて「引き換えが完了しました。」と表示される
export default function VoucherCompleteOverlay({ onClose }: VoucherCompleteOverlayProps) {
    const [sliderValue, setSliderValue] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    function handleSliderChange(value: number | number[]) {
        const val = Array.isArray(value) ? value[0] : value;
        setSliderValue(val);

        // スライダーが最大値に到達したら完了
        if (val >= 99 && !isCompleted) {
            setIsCompleted(true);
            // 3秒後に画面を自動で閉じる
            setTimeout(() => {
                setSliderValue(0);
                setIsCompleted(false);
                onClose();
            }, 3000);
        }
    }

    return (
        <>
            <style>{`
                .completion-text {
                    animation: voucher-fade-in 0.5s ease-in 0.5s forwards;
                    opacity: 0;
                }
                @keyframes voucher-fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .slider-hide-value [data-testid="slider-value"],
                .slider-hide-value .slider-value {
                    display: none !important;
                }
                .gradient-track {
                    background: linear-gradient(90deg, #E5E7EB 0%, #F3F4F6 100%) !important;
                    border: none !important;
                    border-radius: 0.5rem !important;
                    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1) !important;
                }
                .gradient-filler {
                    background: linear-gradient(135deg, #B5364A 0%, #D63A52 50%, #F59E0B 100%) !important;
                    border-radius: 0.5rem !important;
                    box-shadow: 0 2px 8px rgba(181, 54, 74, 0.3) !important;
                }
                @keyframes voucher-arrow-slide {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(8px); }
                }
                .arrow-animate {
                    animation: voucher-arrow-slide 1.5s ease-in-out infinite;
                    display: inline-block;
                }
                @media (prefers-reduced-motion: reduce) {
                    .arrow-animate, .completion-text { animation: none; opacity: 1; }
                }
            `}</style>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-text/50 px-10">
                <div className="relative w-full h-full flex justify-center items-center">
                    {/* 背景の傾いた枠 */}
                    <div className="absolute border-4 border-secondary -z-10 rotate-3 rounded-4xl w-full sm:w-2xl min-h-[320px] shadow-lg" />
                    {/* 本体 */}
                    <div className="flex flex-col items-center bg-white border-4 border-accent rounded-4xl text-text pt-8 px-8 pb-6 w-full sm:w-2xl shadow-lg relative min-h-[320px]" onClick={(e) => e.stopPropagation()}>
                        <div className="h-[140px] flex items-center justify-center relative">
                            {sliderValue > 0 && (
                                <div
                                    className="absolute rounded-full"
                                    style={{
                                        width: "160px",
                                        height: "160px",
                                        background: "radial-gradient(circle, rgba(251, 146, 60, 0.5) 0%, rgba(251, 146, 60, 0) 70%)",
                                        opacity: sliderValue / 100,
                                    }}
                                />
                            )}
                            <div className="relative">
                                {/* 灰色のロゴの上に、スライダーの進み具合に合わせて色付きのロゴを下から重ねる */}
                                <Image
                                    src={LOGO_SRC}
                                    alt=""
                                    width={140}
                                    height={140}
                                    className="absolute"
                                    style={{ filter: "grayscale(100%) brightness(1.3)" }}
                                />
                                <div style={{ clipPath: `polygon(0 ${100 - sliderValue}%, 100% ${100 - sliderValue}%, 100% 100%, 0 100%)` }}>
                                    <Image src={LOGO_SRC} alt="明大祭ロゴ" width={140} height={140} className="relative z-[1]" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6 flex justify-center items-center min-h-[60px]">
                            <div className="w-full max-w-xs flex items-center justify-center">
                                {!isCompleted ? (
                                    <div className="slider-hide-value w-full px-0">
                                        <Slider
                                            aria-label="右端まで動かして引き換えを完了する"
                                            className="w-full text-primary font-bold"
                                            label={<span className="arrow-animate text-primary text-4xl translate-y-3">→</span>}
                                            value={sliderValue}
                                            onChange={handleSliderChange}
                                            minValue={0}
                                            maxValue={100}
                                            classNames={{
                                                label: "mb-4 text-primary",
                                                track: "gradient-track h-10",
                                                thumb: "bg-primary w-6 h-10 rounded-sm shadow-lg hover:shadow-xl transition-shadow mt-5",
                                                base: "gap-4",
                                                filler: "gradient-filler",
                                                mark: "hidden",
                                                value: "hidden",
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <p className="text-xl font-bold text-primary-900 completion-text text-center mt-8">引き換えが完了しました。</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

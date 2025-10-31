'use client';

import { exchange, isAlreadyExchange, isInTime } from "@/utils/managers/voucherManager"
import { useEffect, useState } from "react"
import Image from "next/image"
import Button from "./buttons/Button";
import { hasVotedToday } from "@/utils/managers/meichamManager";
import Alert from "./Alert";
import detectIncognito from "detectincognitojs";
import { Slider } from "@heroui/slider";


export default function Voucher() {
    const [error, setError] = useState<string | null>(null);
    const [disabled, setDisabled] = useState(true);
    const [buttonText, setButtonText] = useState("引き換え不可");
    const [hiddenAlert, setHiddenAlert] = useState(true);
    const [showCompletionMessage, setShowCompletionMessage] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    async function isEnableExchange(): Promise<boolean> {
        if (!isInTime()) {
            setError('引換可能期間外です。')
            setButtonText("引換不可")
            setDisabled(true);
            return false;
        }
        if (!hasVotedToday()) {
            setError('本日投票していないため、まだ引き換えできません。')
            setButtonText("引き換え不可")
            setDisabled(true);
            return false;
        }
        if (isAlreadyExchange()) {
            setError(null)
            setButtonText("引き換え済み")
            setDisabled(true);
            return false;
        }
        const incognito = await detectIncognito();
        if (incognito.isPrivate) {
            setError("プライベートモードでは引き換えできません。通常モードでアクセスしてください。");
            setButtonText("引き換え不可");
            setDisabled(true);
            return false;
        }
        setError(null);
        setButtonText("引き換え画面へ")
        setDisabled(false);
        return true;
    }

    useEffect(() => {
        if (!isEnableExchange()) {
            return;
        }
    })

    function onTapExchange() {
        setHiddenAlert(false);
    }

    function handleAlertYes() {
        setHiddenAlert(true);

        // 完了メッセージを即座に表示
        if (!isEnableExchange()) {
            return;
        }
        exchange();
        setShowCompletionMessage(true);
        setSliderValue(0);
        setIsCompleted(false);
        setError("引き換えが完了しました。")
        setButtonText("引き換え済み")
        setDisabled(true);
    }

    function handleSliderChange(value: number | number[]) {
        const val = Array.isArray(value) ? value[0] : value;
        setSliderValue(val);

        // スライダーが最大値に到達したら完了
        if (val >= 99) {
            setIsCompleted(true);

            // 3秒後に画面を自動で閉じる
            setTimeout(() => {
                setShowCompletionMessage(false);
                setSliderValue(0);
                setIsCompleted(false);
            }, 3000);
        }
    }

    function handleExchange() {
        if (!isEnableExchange()) {
            return;
        }
        exchange();
        setError("引き換えが完了しました。")
        setButtonText("引き換え済み")
        setDisabled(true);
    }

    return (
        <>
            <style>{`
                @keyframes stamp-bounce {
                    0% {
                        transform: scale(0.3) rotate(-15deg);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1.1) rotate(5deg);
                    }
                    100% {
                        transform: scale(1) rotate(0deg);
                        opacity: 1;
                    }
                }
                .stamp-animation {
                    animation: stamp-bounce 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }
                .completion-text {
                    animation: fadeIn 0.5s ease-in 0.5s forwards;
                    opacity: 0;
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
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
                .logo-color-up {
                    position: relative;
                    overflow: hidden;
                }
                @keyframes arrow-slide {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    50% {
                        transform: translateX(8px);
                    }
                }
                .arrow-animate {
                    animation: arrow-slide 1.5s ease-in-out infinite;
                    display: inline-block;
                }
            `}</style>
            <div className="relative mx-auto w-lg max-w-full my-16">
                <div className="absolute rotate-3 -z-10 mx-auto py-10 rounded-2xl border-accent border-4 w-full text-primary px-10">
                    <p className="font-bold text-xl text-center">抽選券への引き換えはこちら！</p>
                    <p className="text-primary font-semibold mt-3">必ず総合インフォメーションで、抽選券引き換え時にタップしてください。</p>
                    <Button onClick={handleExchange} disabled={disabled} className="mt-3">{buttonText}</Button>
                    {error &&
                        <p className="text-center font-bold text-primary mt-5">※{error}</p>
                    }
                </div>
                <div className="mx-auto bg-white py-10 rounded-2xl border-secondary border-4 w-full text-black px-10">
                    <p className="font-bold text-xl text-center">抽選券への引き換えはこちら！</p>
                    <p className="text-primary font-semibold mt-3">必ず総合インフォメーションで、抽選券引き換え時にタップしてください。</p>
                    <Button onClick={onTapExchange} disabled={disabled} className="mt-3">{buttonText}</Button>
                    {error &&
                        <p className="text-center font-bold text-primary mt-5">※{error}</p>
                    }
                </div>
                {!hiddenAlert &&
                    <Alert title="本当に引き換えますか？" hidden={hiddenAlert} setHidden={setHiddenAlert} addAction={{ title: "引き換える", action: handleAlertYes }}>総合インフォメーションブースで引き換える時のみ引き換えてください。</Alert>
                }
                {showCompletionMessage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-cover px-10">
                        <div className="relative w-full h-full flex justify-center items-center">
                            <div className="absolute flex flex-col items-center border-4 border-secondary -z-10 rotate-3 rounded-4xl pt-10 px-10 pb-5 w-full sm:w-2xl shadow-lg">
                                <div className="opacity-0">
                                    <Image
                                        src="/images/svg/official/logo.svg"
                                        alt="logo"
                                        width={120}
                                        height={120}
                                        className="stamp-animation mx-auto"
                                    />
                                    <p className="text-2xl font-bold text-primary completion-text mt-8">引き換えが完了しました。</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center bg-white border-4 border-accent rounded-4xl text-black pt-8 px-8 pb-6 w-full sm:w-2xl shadow-lg relative min-h-[320px]" onClick={(e) => e.stopPropagation()}>
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
                                    <div
                                        style={{
                                            position: "relative",
                                        }}
                                    >
                                        <Image
                                            src="/images/svg/official/logo.svg"
                                            alt="logo-gray"
                                            width={140}
                                            height={140}
                                            style={{
                                                filter: "grayscale(100%) brightness(1.3)",
                                                position: "absolute",
                                            }}
                                        />
                                        <div
                                            className="logo-color-up"
                                            style={{
                                                clipPath: `polygon(0 ${100 - sliderValue}%, 100% ${100 - sliderValue}%, 100% 100%, 0 100%)`,
                                            }}
                                        >
                                            <Image
                                                src="/images/svg/official/logo.svg"
                                                alt="logo"
                                                width={140}
                                                height={140}
                                                style={{
                                                    position: "relative",
                                                    zIndex: 1,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-6 flex justify-center items-center min-h-[60px]">
                                    <div className="w-full max-w-xs flex items-center justify-center">
                                        {!isCompleted && (
                                            <div className="slider-hide-value slider-gradient-border w-full px-0">
                                                <Slider
                                                    className="w-full text-primary font-bold slider-gradient"
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
                                        )}
                                        {isCompleted && (
                                            <p className="text-xl font-bold text-primary completion-text text-center mt-8">引き換えが完了しました。</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
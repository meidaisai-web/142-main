'use client';

import { exchange, isAlreadyExchange } from "@/utils/managers/voucherManager"
import { useEffect, useState } from "react"
import Button from "./buttons/Button";
import { hasVotedToday } from "@/utils/managers/meichamManager";
import Alert from "./Alert";
import Image from "next/image";


export default function Voucher() {
    const [error, setError] = useState<string | null>(null);
    const [disabled, setDisabled] = useState(true);
    const [buttonText, setButtonText] = useState("引き換え不可");
    const [hiddenAlert, setHiddenAlert] = useState(true);
    const [showCompletionPopup, setShowCompletionPopup] = useState(false);
    const [showImage, setShowImage] = useState(false);

    function isEnableExchange(): boolean {
        // if (!isInTime()) {
        //     setError('引換可能期間外です。')
        //     setButtonText("引換不可")
        //     setDisabled(true);
        //     return false;
        // }
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

    function handleExchange() {
        if (!isEnableExchange()) {
            return;
        }
        exchange();
        setError("引き換えが完了しました。")
        setButtonText("引き換え済み")
        setDisabled(true);
        setHiddenAlert(true);
        setShowCompletionPopup(true);
        setShowImage(false);
    }

    return (
        <>
            {/* アニメーション第一案（コメントアウト中）
            <style>{`
                @keyframes scaleUpWithRotate {
                    0% {
                        transform: scale(0) rotate(0deg);
                        opacity: 0;
                    }
                    25% {
                        transform: scale(0.3) rotate(-15deg);
                    }
                    50% {
                        transform: scale(0.6) rotate(15deg);
                    }
                    75% {
                        transform: scale(0.85) rotate(-10deg);
                    }
                    100% {
                        transform: scale(1) rotate(0deg);
                        opacity: 1;
                    }
                }
                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                }
                @keyframes showAndPulse {
                    0% {
                        opacity: 0;
                        transform: scale(1);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-scale-up {
                    animation: scaleUpWithRotate 2s ease-out, pulse 0.6s ease-in-out 2s;
                }
                .animate-text-pulse {
                    animation: showAndPulse 0s ease-out 2s forwards, pulse 0.6s ease-in-out 2s;
                    opacity: 0;
                }
                @keyframes starFadeIn {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            `}</style>
            */}
            <style>{`
                /* アニメーション第二案：スタンプ押下効果 */
                @keyframes stampPress {
                    0% {
                        transform: scale(0) rotate(-25deg);
                        opacity: 0;
                    }
                    70% {
                        transform: scale(1.15) rotate(5deg);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1) rotate(0deg);
                        opacity: 1;
                    }
                }
                .animate-stamp {
                    animation: stampPress 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                @keyframes textFadeIn {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
                .animate-text-fade {
                    animation: textFadeIn 0.4s ease-out 0.4s forwards;
                    opacity: 0;
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
                    <Alert title="本当に引き換えますか？" hidden={hiddenAlert} setHidden={setHiddenAlert} addAction={{ title: "引き換える", action: handleExchange }}>総合インフォメーションブースで引き換える時のみ引き換えてください。</Alert>
                }
                {showCompletionPopup &&
                    <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center px-10 bg-gray-cover">
                        <div className="relative w-full h-full flex justify-center items-center">
                            <button className="bg-white border-4 border-accent rounded-4xl text-primary h-full max-h-[50%] w-full shadow-lg" onClick={() => {
                                setShowImage(true);
                                setTimeout(() => setShowCompletionPopup(false), 3000);
                            }}>
                                {/* 文字が表示される */}
                                {!showImage && <div className="text-lg font-semibold mx-auto my-auto">ここをタップ！</div>}
                                {/* 画像が表示される */}
                                {showImage && (
                                    <div className="flex flex-col items-center justify-center">
                                        <Image
                                            src="/images/svg/official/logo.svg"
                                            alt="完了画像"
                                            width={200}
                                            height={200}
                                            className="mx-auto mt-10 animate-stamp"
                                        />
                                        <p className="text-lg font-semibold text-primary mt-10 animate-text-fade">引き換えが完了しました</p>
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
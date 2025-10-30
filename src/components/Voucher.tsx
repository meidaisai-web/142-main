'use client';

import { exchange, isAlreadyExchange } from "@/utils/managers/voucherManager"
import { useEffect, useState } from "react"
import Image from "next/image"
import Button from "./buttons/Button";
import { hasVotedToday } from "@/utils/managers/meichamManager";
import Alert from "./Alert";


export default function Voucher() {
    const [error, setError] = useState<string | null>(null);
    const [disabled, setDisabled] = useState(true);
    const [buttonText, setButtonText] = useState("引き換え不可");
    const [hiddenAlert, setHiddenAlert] = useState(true);
    const [showCompletionMessage, setShowCompletionMessage] = useState(false);

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

    function handleAlertYes() {
        setHiddenAlert(true);

        // 完了メッセージを即座に表示
        if (!isEnableExchange()) {
            return;
        }
        exchange();
        setShowCompletionMessage(true);
        setError("引き換えが完了しました。")
        setButtonText("引き換え済み")
        setDisabled(true);

        // 完了メッセージを自動で閉じる
        setTimeout(() => {
            setShowCompletionMessage(false);
        }, 5000);
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
                            <div className="flex flex-col items-center bg-white border-4 border-accent rounded-4xl text-black pt-10 px-10 pb-5 w-full sm:w-2xl shadow-lg" onClick={(e) => e.stopPropagation()}>
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
                    </div>
                )}
            </div>
        </>
    )
}
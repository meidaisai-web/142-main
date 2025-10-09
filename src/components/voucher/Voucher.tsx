'use client';

import { exchange, isAlreadyExchange } from "@/utils/managers/voucherManager"
import { useEffect, useState } from "react"
import Button from "../buttons/Button";
import { hasVotedToday } from "@/utils/managers/meichamManager";


export default function Voucher() {
    const [error, setError] = useState<string | null>(null);
    const [disabled, setDisabled] = useState(true);
    const [buttonText, setButtonText] = useState("引き換え不可");

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
        setButtonText("引き換え")
        setDisabled(false);
        return true;
    }

    useEffect(() => {
        if (!isEnableExchange()) {
            return;
        }
    })

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
                <Button onClick={handleExchange} disabled={disabled} className="mt-3">{buttonText}</Button>
                {error &&
                    <p className="text-center font-bold text-primary mt-5">※{error}</p>
                }
            </div>
        </div>
    )
}
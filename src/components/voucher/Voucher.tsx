import { exchange, isAlreadyExchange, isInTime } from "@/utils/managers/voucherManager"
import { useEffect, useState } from "react"
import Button from "../buttons/Button";
import { hasVotedToday } from "@/utils/managers/meichamManager";


export default function Voucher() {
    const [error, setError] = useState<string>("");
    const [disabled, setDisabled] = useState(true);
    const [buttonText, setButtonText] = useState("引換");

    function isEnableExchange(): boolean {
        if (!isInTime()) {
            setError('引換可能期間外です。')
            setButtonText("引換不可")
            setDisabled(true);
            return false;
        }
        if (!hasVotedToday()) {
            setError('本日投票していないため、まだ引換できません。')
            setButtonText("引換不可")
            setDisabled(true);
            return false;
        }
        if (isAlreadyExchange()) {
            setError('すでに引換済みです。')
            setButtonText("引換済み")
            setDisabled(true);
            return false;
        }
        setError("");
        setButtonText("引換")
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
    }

    return (
        <div>
            <Button onClick={handleExchange} disabled={disabled}>{buttonText}</Button>
        </div>
    )
}
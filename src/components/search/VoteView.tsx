import { isAlreadyVoted, isVoteTime, saveVotedId } from "@/utils/managers/meichamManager";
import { voteMeicham } from "@/utils/supabase/meichamAction";
import { useEffect, useState } from "react";
import Button from "../buttons/Button";
import Text from "../texts/Text";

interface VoteViewProps {
    id: string;
    groupId: string;
    type: string;
}

export default function VoteView({ id, groupId, type }: VoteViewProps) {

    const [hasVoted, setHasVoted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [buttonText, setButtonText] = useState("投票する");

    useEffect(() => {
        if (!isVoteTime) {
            setButtonText("投票可能時間外です。")
        }
        if (isAlreadyVoted(id, groupId, type)) {
            setHasVoted(true);
        }
    }, [id])

    async function handleVote() {
        if (isLoading) return; // 連打防止
        setIsLoading(true);
        setError(null);
        if (!isVoteTime) {
            setError("投票可能な時間ではありません。");
            setButtonText("投票可能時間外です。");
            setIsLoading(false);
            return;
        }
        // すでにその日に、その企画に投票しているか確認
        if (isAlreadyVoted(id, groupId, type)) {
            setError("本日すでにこの企画に投票しています。");
            setIsLoading(false);
            return;
        }
        // 投票していなければ、投票を実行
        const success = await voteMeicham(id, groupId, type);
        if (!success) {
            setError("投票に失敗しました。もう一度お試しください。");
            setIsLoading(false);
            return;
        }
        setHasVoted(true);
        setError(null);
        // localStorageに投票済みの企画IDを保存
        saveVotedId(id, groupId, type);
        setIsLoading(false);
    }

    return (
        <div>
            <Button onClick={handleVote} disabled={hasVoted || isLoading}>
                {hasVoted ? "投票済み" : isLoading ? "投票中..." : "投票する"}
            </Button>
            <Text>{error}</Text>
        </div>
    )
}
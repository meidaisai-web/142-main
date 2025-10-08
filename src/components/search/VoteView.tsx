import { isAlreadyVoted, isVoteTime, saveVotedId } from "@/utils/managers/meichamManager";
import { voteMeicham } from "@/utils/supabase/meichamAction";
import { useEffect, useState } from "react";
import Button from "../buttons/Button";
import Text from "../texts/Text";
import Image from "next/image";
import { List, ListItem } from "../texts/List";
import Link from "next/link";

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
            setButtonText("投票可能時間外です")
        }
        if (isAlreadyVoted(id, groupId, type)) {
            setHasVoted(true);
            setButtonText("投票済み");
        }
    }, [id])

    async function handleVote() {
        if (isLoading) return; // 連打防止
        setIsLoading(true);
        setError(null);
        setButtonText("投票中...");
        if (!isVoteTime) {
            setError("投票可能な時間ではありません。");
            setButtonText("投票可能時間外です");
            setIsLoading(false);
            return;
        }
        // すでにその日に、その企画に投票しているか確認
        if (isAlreadyVoted(id, groupId, type)) {
            setError("本日すでにこの企画に投票しています。");
            setButtonText("投票済み");
            setIsLoading(false);
            return;
        }
        // 投票していなければ、投票を実行
        const success = await voteMeicham(id, groupId, type);
        if (!success) {
            setError("投票に失敗しました。もう一度お試しください。");
            setIsLoading(false);
            setButtonText("投票する");
            return;
        }
        setHasVoted(true);
        setError(null);
        setButtonText("投票済み");
        // localStorageに投票済みの企画IDを保存
        saveVotedId(id, groupId, type);
        setIsLoading(false);
    }

    return (
        <div className="relative mt-16 max-w-5xl mx-auto">
            {/* 背景の四角分 */}
            <div className="absolute border-4 border-secondary rounded-3xl rotate-3 -z-10 w-full">
                <div className="opacity-0 flex flex-col items-center font-medium p-7 text-sm sm:text-base">
                    <Image src="/images/meichamp-logo.jpg" alt="Meidaisai Championship ロゴ" width={200} height={200} />
                    <div className="flex flex-wrap justify-center font-bold text-lg">
                        <p>明大祭のチャンピオンに</p>
                        <p>輝くのは誰だ！</p>
                    </div>
                    <div className="flex flex-wrap justify-center pt-3">
                        <p>みなさまの投票によって</p>
                        <p>明大祭No.1企画が決定します！</p>
                    </div>
                    <List mark="※" className="pt-3">
                        <ListItem>企画へのお問い合わせは、総合インフォメーションまでお越しください。</ListItem>
                    </List>
                    <VoteButton onClick={handleVote} disabled={hasVoted || isLoading}>
                        {buttonText}
                    </VoteButton>
                    <div className="rounded-full px-8 py-2 mt-5 text-center">
                        詳しくはこちら
                    </div>
                    <Text>{error}</Text>
                </div>
            </div>
            {/* 本体 */}
            <div className="flex flex-col items-center bg-white border-4 rounded-3xl border-accent text-black font-medium p-7 text-sm sm:text-base">
                <Image src="/images/meichamp-logo.jpg" alt="Meidaisai Championship ロゴ" width={200} height={200} />
                <div className="flex flex-wrap justify-center font-bold text-lg">
                    <p>明大祭のチャンピオンに</p>
                    <p>輝くのは誰だ！</p>
                </div>
                <div className="flex flex-wrap justify-center pt-3">
                    <p>みなさまの投票によって</p>
                    <p>明大祭No.1企画が決定します！</p>
                </div>
                <List mark="※" className="pt-3">
                    <ListItem>企画へのお問い合わせは、総合インフォメーションまでお越しください。</ListItem>
                </List>
                <VoteButton onClick={handleVote} disabled={hasVoted || isLoading}>
                    {buttonText}
                </VoteButton>
                <Link href='/champ'>
                    <div className="bg-secondary hover:bg-secondary-700 text-white rounded-full px-8 py-2 mt-5 text-center">
                        詳しくはこちら
                    </div>
                </Link>
                <Text>{error}</Text>
            </div>
        </div>
    )
}

interface VoteButtonProps {
    onClick: () => void;
    disabled: boolean;
    children: React.ReactNode;
}

function VoteButton({ onClick, disabled, children }: VoteButtonProps) {
    return (
        <button onClick={onClick} disabled={disabled} className="relative whitespace-nowrap cursor-pointer z-0 py-5">
            <div className={`-rotate-3 rounded-full border-4 border-accent py-3 w-60 text-center absolute -z-10`}>
                <p className='opacity-0'>{children}</p>
            </div>
            <div className={`font-bold rounded-full hover:bg-primary-700 transition duration-100 py-3 w-60 ${disabled ? 'bg-primary-700 text-gray-300 cursor-not-allowed' : 'bg-primary text-white'}`}>
                {children}
            </div>
        </button>
    )
}
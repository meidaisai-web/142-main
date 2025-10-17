import { isAlreadyVoted, isVoteTime, saveVotedId } from "@/utils/managers/meichamManager";
import { voteMeicham } from "@/utils/supabase/meichamAction";
import { useEffect, useState } from "react";
import Image from "next/image";
import { List, ListItem } from "../texts/List";
import Link from "next/link";
import Alert from "../Alert";

interface VoteViewProps {
    id: string;
    groupId: string;
    type: string;
    eventName: string;
    groupName: string;
    eventDate: string;
}

export default function VoteView({ id, groupId, type, eventName, groupName, eventDate }: VoteViewProps) {

    const [isEnable, setIsEnable] = useState(true);
    const [hiddenAlert, setHiddenAlert] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [buttonText, setButtonText] = useState("投票する");

    useEffect(() => {
        // if (!isVoteTime(eventDate)) {
        //     setButtonText("投票可能時間外です")
        //     setIsEnable(false);
        //     return;
        // }
        if (isAlreadyVoted(id)) {
            setIsEnable(false);
            setButtonText("投票済み");
        }
    }, [])

    function onTapVote() {
        setHiddenAlert(false);
    }

    async function handleVote() {
        if (!isEnable) return; // 連打防止
        setIsEnable(false);
        setError(null);
        setButtonText("投票中...");
        // if (!isVoteTime(eventDate)) {
        //     setError("投票可能な時間ではありません。");
        //     setButtonText("投票可能時間外です");
        //     setIsEnable(false);
        //     return;
        // }
        // すでにその日に、その企画に投票しているか確認
        if (isAlreadyVoted(id)) {
            setError("本日すでにこの企画に投票しています。");
            setButtonText("投票済み");
            setIsEnable(false);
            return;
        }
        // 投票していなければ、投票を実行
        const success = await voteMeicham(id, groupId, type);
        if (!success) {
            setError("投票に失敗しました。もう一度お試しください。");
            setIsEnable(true);
            setButtonText("投票する");
            return;
        }
        setIsEnable(false);
        setError(null);
        setButtonText("投票済み");
        // localStorageに投票済みの企画IDを保存
        saveVotedId(id, groupId, type);
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
                    <VoteButton onClick={handleVote} disabled={!isEnable}>
                        {buttonText}
                    </VoteButton>
                    <p className="text-center">{error}</p>
                    <div className="flex flex-col gap-5 w-full mt-5 items-center">
                        <p>Meidaisai Championsipとは</p>
                        <p>抽選券引き換え画面</p>
                    </div>
                </div>
            </div>
            {/* 本体 */}
            <div className="flex flex-col items-center bg-white border-4 rounded-3xl border-accent text-black font-medium p-7 text-sm sm:text-base">
                <Image src="/images/meichamp-logo.jpg" alt="Meidaisai Championship ロゴ" width={200} height={200} className="max-w-full w-64" />
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
                <VoteButton onClick={onTapVote} disabled={!isEnable}>
                    {buttonText}
                </VoteButton>
                <p className="text-primary text-center">{error}</p>
                <div className="flex flex-col gap-5 w-full mt-5 items-center">
                    <Link href='/champ' className="text-secondary hover:underline">Meidaisai Championsipとは</Link>
                    <Link href='/voucher' className="text-secondary hover:underline">抽選券引き換え画面</Link>
                </div>
            </div>
            <Alert title="この企画に投票しますか？" hidden={hiddenAlert} setHidden={setHiddenAlert} addAction={{ title: '投票する', action: () => handleVote() }}>企画名: {eventName}<br />団体名: {groupName}</Alert>
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
            <div className={`-rotate-3 rounded-full border-4 border-accent py-3 w-52 text-center absolute -z-10`}>
                <p className='opacity-0'>{children}</p>
            </div>
            <div className={`font-bold rounded-full hover:bg-primary-700 transition duration-100 py-3 w-52 ${disabled ? 'bg-primary-700 text-gray-300 cursor-not-allowed' : 'bg-primary text-white'}`}>
                {children}
            </div>
        </button>
    )
}
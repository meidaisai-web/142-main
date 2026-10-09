import { isAlreadyVoted, isVoteTime, isVoucherAvailableToday, saveVotedId } from "@/utils/managers/meichamManager";
import { voteMeicham } from "@/utils/supabase/meichamAction";
import { useEffect, useState } from "react";
import Image from "next/image";
import { List, ListItem } from "../texts/List";
import Link from "next/link";
import MeichamVoteModal, { MeichamVoteModalStep } from "./MeichamVoteModal";
import { detectIncognito } from "detectincognitojs";
import { MeichamCategory } from "@/utils/models/MeichamGenre";

// UUIDを取得または生成する関数
function getUserUUID(): string {
    const STORAGE_KEY = 'meicham_user_uuid';

    // 既存のUUIDを取得
    let uuid = localStorage.getItem(STORAGE_KEY);

    // なければ新規生成
    if (!uuid) {
        uuid = crypto.randomUUID();
        localStorage.setItem(STORAGE_KEY, uuid);
    }

    return uuid;
}

interface VoteViewProps {
    id: string;
    groupId: string;
    type: string;
    eventName: string;
    groupName: string;
    eventDate: string;
    category: MeichamCategory;
}

export default function VoteView({ id, groupId, type, eventName, groupName, eventDate, category }: VoteViewProps) {

    const [isEnable, setIsEnable] = useState(true);
    const [hiddenAlert, setHiddenAlert] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [buttonText, setButtonText] = useState("投票する");
    const [modalStep, setModalStep] = useState<MeichamVoteModalStep>('confirm');
    const [isVoting, setIsVoting] = useState(false);

    useEffect(() => {
        async function initialize() {
            if (!isVoteTime(eventDate)) {
                setButtonText("投票時間外です");
                setError("現在は投票時間外です。投票は明大祭の開催時間中にお願いいたします。");
                setIsEnable(false);
                return;
            }
            const incognito = await detectIncognito();
            if (incognito.isPrivate) {
                setError("プライベートモードでは投票できません。通常モードでアクセスしてください。");
                setButtonText("投票できません");
                setIsEnable(false);
                return;
            }
            console.log(incognito.browserName)
            if (isAlreadyVoted(id)) {
                setIsEnable(false);
                setButtonText("投票済み");
            }
        }
        initialize();
    }, [])

    function onTapVote() {
        setModalStep('confirm');
        setHiddenAlert(false);
    }

    // 投票できなかったときは、モーダルを閉じてボタン下にエラーを表示する
    function failVote(message: string, text: string, enable: boolean) {
        setError(message);
        setButtonText(text);
        setIsEnable(enable);
        setIsVoting(false);
        setHiddenAlert(true);
    }

    async function handleVote() {
        if (!isEnable || isVoting) return; // 連打防止
        setIsVoting(true);
        setIsEnable(false);
        setError(null);
        setButtonText("投票中...");
        if (!isVoteTime(eventDate)) {
            failVote("現在は投票時間外です。投票は明大祭の開催時間中にお願いいたします。", "投票時間外です", false);
            return;
        }

        // プライベートモードの場合はエラー（localStorageにうまく保存できないため）
        // おそらくsafariのみでChrome系は大丈夫だと思われるが一応プライベートモードの場合はすべて投票不可にする
        const incognito = await detectIncognito();
        if (incognito.isPrivate) {
            failVote("プライベートモードでは投票できません。通常モードでアクセスしてください。", "投票できません", false);
            return;
        }
        // すでにその企画に投票しているか確認
        if (isAlreadyVoted(id)) {
            failVote("すでにこの企画に投票しています。", "投票済み", false);
            return;
        }
        // ユーザーのUUIDを取得または生成
        const userUUID = getUserUUID();

        // 投票していなければ、投票を実行
        const success = await voteMeicham(id, groupId, type, category, userUUID);
        if (!success) {
            failVote("投票に失敗しました。もう一度お試しください。", "投票する", true);
            return;
        }
        setIsEnable(false);
        setError(null);
        setButtonText("投票済み");
        // localStorageに投票済みの企画IDを保存
        saveVotedId(id, groupId, type, category);
        // モーダルを閉じずに完了画面へ切り替える（保存後なので未投票部門の表示に今回の投票が反映される）
        setIsVoting(false);
        setModalStep('done');
    }

    return (
        <div className="relative mt-16 max-w-5xl mx-auto">
            {/* 背景の四角分 */}
            <div className="opacity-0 flex flex-col items-center font-medium p-7 text-sm sm:text-base">
                <Image src="/images/meicham/meicham.jpg" alt="Meidaisai Championship ロゴ" width={200} height={200} />
                <div className="flex flex-wrap justify-center font-bold text-lg">
                    <p>明大祭のチャンピオンに</p>
                    <p>輝くのは誰だ！</p>
                </div>
                <div className="flex flex-wrap justify-center pt-3">
                    <p>みなさまの投票によって</p>
                    <p>明大祭No.1企画が決定します！</p>
                </div>
                <List mark="※" className="pt-3">
                    <ListItem>企画へのお問い合わせは、和泉図書館前アンケート回収受付までお越しください。</ListItem>
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
            {/* 本体 */}
            <div className="flex flex-col items-center bg-white border-4 rounded-3xl border-accent text-black font-medium p-7 text-sm sm:text-base">
                <Image src="/images/meicham/meicham.jpg" alt="Meidaisai Championship ロゴ" width={200} height={200} className="max-w-full w-64" />
                <div className="flex flex-wrap justify-center font-bold text-lg">
                    <p>明大祭のチャンピオンに</p>
                    <p>輝くのは誰だ！</p>
                </div>
                <div className="flex flex-wrap justify-center pt-3">
                    <p>みなさまの投票によって</p>
                    <p>明大祭No.1企画が決定します！</p>
                </div>
                <List mark="※" className="pt-3">
                    <ListItem>企画へのお問い合わせは、和泉図書館前アンケート回収受付までお越しください。</ListItem>
                </List>
                <VoteButton onClick={onTapVote} disabled={!isEnable}>
                    {buttonText}
                </VoteButton>
                <p className="text-primary text-center">{error}</p>
                <div className="flex flex-col gap-5 w-full mt-5 items-center">
                    <Link href='/champ' className="text-secondary hover:underline">Meidaisai Championshipとは</Link>
                    <Link href='/voucher' className="text-secondary hover:underline">抽選券引き換え画面</Link>
                </div>
            </div>
            <MeichamVoteModal
                step={modalStep}
                hidden={hiddenAlert}
                onClose={() => { if (!isVoting) setHiddenAlert(true); }}
                onVote={handleVote}
                eventName={eventName}
                groupName={groupName}
                category={category}
                isVoting={isVoting}
                isVoucherAvailable={isVoucherAvailableToday()}
            />
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
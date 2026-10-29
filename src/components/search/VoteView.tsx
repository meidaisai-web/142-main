import { getVoteTimeStatus, isAlreadyVoted, isVoucherAvailableToday, saveVotedId, VoteTimeStatus } from "@/utils/managers/meichamManager";
import { voteMeicham } from "@/utils/supabase/meichamAction";
import { useEffect, useState } from "react";
import Image from "next/image";
import { List, ListItem } from "../texts/List";
import TransitionLink from "../buttons/TransitionLink";
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

// 投票できないときのボタンの文字とボタン下の案内文
const VOTE_TIME_MESSAGES: Record<Exclude<VoteTimeStatus, 'ok'>, { button: string, message: string }> = {
    outOfHours: { button: "投票時間外です", message: "現在は投票時間外です。投票は明大祭の開催時間中にお願いいたします。" },
    notEventDay: { button: "企画実施日ではありません", message: "本日はこの企画の実施日ではありません。投票は企画の実施日にお願いいたします。" },
};

interface VoteViewProps {
    id: string;
    groupId: string;
    type: string;
    eventName: string;
    groupName: string;
    eventDate: string;
    category: MeichamCategory | null; // nullは投票対象外の企画
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
            if (!category) return; // 投票対象外の企画はボタンを出さない
            const timeStatus = getVoteTimeStatus(eventDate);
            if (timeStatus !== 'ok') {
                setButtonText(VOTE_TIME_MESSAGES[timeStatus].button);
                setError(VOTE_TIME_MESSAGES[timeStatus].message);
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
        if (!category || !isEnable || isVoting) return; // 投票対象外・連打防止
        setIsVoting(true);
        setIsEnable(false);
        setError(null);
        setButtonText("投票中...");
        const timeStatus = getVoteTimeStatus(eventDate);
        if (timeStatus !== 'ok') {
            failVote(VOTE_TIME_MESSAGES[timeStatus].message, VOTE_TIME_MESSAGES[timeStatus].button, false);
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
                    <ListItem>企画へのお問い合わせは、和泉図書館前 Meidaisai Championship受付までお越しください。</ListItem>
                </List>
                {category ? (
                    <>
                        <VoteButton onClick={onTapVote} disabled={!isEnable}>
                            {buttonText}
                        </VoteButton>
                        <p className="text-primary-900 font-bold text-center">{error}</p>
                    </>
                ) : (
                    <p className="text-primary-900 font-bold text-center my-5">この企画は Meidaisai Championship の投票対象ではありません。</p>
                )}
                <div className="flex flex-col gap-5 w-full mt-5 items-center">
                    <TransitionLink href='/champ'>Meidaisai Championshipとは</TransitionLink>
                    <TransitionLink href='/voucher'>抽選券引き換え画面</TransitionLink>
                </div>
            </div>
            {category &&
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
            }
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
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center gap-1.5 px-8 py-2.5 my-5 min-w-48 rounded-full bg-secondary text-white transition-colors duration-100 ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent cursor-pointer'}`}
        >
            <span className="whitespace-nowrap text-base font-bold">{children}</span>
            <Image src="/images/svg/arrow-white.svg" width={20} height={20} alt="" className="w-3.5 h-3.5 select-none" />
        </button>
    )
}
'use client';

import { useEffect, useState } from "react";
import { detectIncognito } from "detectincognitojs";
import TransitionLink from "./buttons/TransitionLink";
import VoucherCompleteOverlay, { VoucherNotice } from "./VoucherCompleteOverlay";
import ModalPortal from "./ModalPortal";
import { hasVotedAllCategories, isVoucherAvailableToday } from "@/utils/managers/meichamManager";
import { exchange, isAlreadyExchange, isInTime } from "@/utils/managers/voucherManager";

// 抽選券引換カードの表示状態
// outOfPeriod: 開催日以外 / private: プライベートモード / exchanged: 今日すでに引換済み
// closed: 本日の配布が終了 / notReady: まだ3部門に投票していない / available: 引き換えできる
export type VoucherExchangeStatus = 'outOfPeriod' | 'private' | 'exchanged' | 'closed' | 'notReady' | 'available';

// 上から順に判定する
// 引換済みは配布終了より先に見る（受け取った人に「終了」と見せないため）
// 配布終了は3部門より先に見る（終了後に投票しても引き換えられないため、「終了」を案内する）
async function judgeStatus(): Promise<VoucherExchangeStatus> {
    if (!isInTime()) return 'outOfPeriod';
    const incognito = await detectIncognito();
    if (incognito.isPrivate) return 'private'; // 引換記録を保存できないため
    if (isAlreadyExchange()) return 'exchanged';
    if (!isVoucherAvailableToday()) return 'closed';
    if (!hasVotedAllCategories()) return 'notReady';
    return 'available';
}

// 抽選券への引き換えカード
// 判定・確認・引換記録・完了画面までをこの中で行うので、ページには置くだけでよい
export default function VoucherExchangeCard() {
    // 投票・引換の記録はlocalStorageにあるので、判定は描画後にブラウザ側で行う（判定前はボタンを押せない状態で表示）
    const [status, setStatus] = useState<VoucherExchangeStatus | null>(null);
    const [hiddenAlert, setHiddenAlert] = useState(true);
    const [showComplete, setShowComplete] = useState(false);

    useEffect(() => {
        judgeStatus().then(setStatus);
    }, []);

    const isAvailable = status === 'available';

    // 確認ダイアログで「引き換える」を押したとき
    async function handleExchange() {
        // 画面を開いたまま日付が変わった・配布が終わった場合に備えて、もう一度判定する
        const latest = await judgeStatus();
        if (latest !== 'available') {
            setStatus(latest);
            return;
        }
        exchange();
        setStatus('exchanged');
        setShowComplete(true);
    }

    return (
        <>
            <div className="w-full max-w-md mx-auto bg-white border-[6px] border-accent-700 rounded-3xl text-text px-6 sm:px-10 py-8 flex flex-col items-center">
                <h3 className="text-lg sm:text-xl font-medium border-b border-accent-700 pb-1 px-2">抽選券への引き換えはこちら！</h3>

                <p className="text-red-600 font-bold text-xs sm:text-sm text-center mt-5 leading-relaxed">
                    以下のボタンは必ず、<br />
                    和泉図書館前総合インフォメーションブースMeidaisai Championship受付<br />
                    でタップしてください。
                </p>
                <VoucherNotice className="mt-3" />

                <button
                    type="button"
                    onClick={isAvailable ? () => setHiddenAlert(false) : undefined}
                    disabled={!isAvailable}
                    className={`mt-6 rounded-full border-2 px-10 py-1.5 min-w-48 text-sm sm:text-base transition-colors duration-100 ${isAvailable ? 'border-accent-700 text-accent-900 hover:bg-accent-50 cursor-pointer' : 'border-accent-100 text-accent-300 cursor-not-allowed'}`}
                >
                    {status === 'exchanged' ? '引き換え済み' : isAvailable ? '引き換える' : '引き換え不可'}
                </button>

                {status === 'outOfPeriod' && (
                    <p className="text-sm text-center mt-5">引き換え可能期間外です。<br />抽選券の引き換えは明大祭の開催期間中にお願いいたします。</p>
                )}
                {status === 'private' && (
                    <p className="text-sm text-center mt-5">プライベートモードでは引き換えできません。<br />通常モードでアクセスしてください。</p>
                )}
                {status === 'exchanged' && (
                    <p className="text-sm text-center mt-5">本日の抽選券は引き換え済みです。</p>
                )}
                {status === 'closed' && (
                    <p className="text-sm text-center mt-5">本日の抽選券への引き換えは終了いたしました。</p>
                )}
                {status === 'notReady' && (
                    <p className="text-sm text-center mt-5">
                        投票が完了していない部門があります。<br />
                        詳しくは<TransitionLink href="/bigLottery">こちら</TransitionLink>
                    </p>
                )}
            </div>

            {!hiddenAlert &&
                <ExchangeConfirmModal
                    onClose={() => setHiddenAlert(true)}
                    onConfirm={() => { setHiddenAlert(true); handleExchange(); }}
                />
            }
            {showComplete &&
                <VoucherCompleteOverlay onClose={() => setShowComplete(false)} />
            }
        </>
    )
}

interface ExchangeConfirmModalProps {
    onClose: () => void;
    onConfirm: () => void;
}

// 引き換え前の確認モーダル（投票確認モーダルと同じ作り）
function ExchangeConfirmModal({ onClose, onConfirm }: ExchangeConfirmModalProps) {

    // モーダル表示中は背面をスクロールさせない
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <ModalPortal>
        <div className="fixed inset-0 z-50 flex justify-center items-center px-6 bg-text/50" onClick={onClose}>
            <div
                className="relative w-full max-w-md max-h-[90dvh] overflow-y-auto bg-background border-[6px] border-accent-700 rounded-3xl text-text px-6 sm:px-10 pt-12 pb-8 shadow-lg flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-3 right-4 cursor-pointer p-1" aria-label="閉じる">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M5 5l14 14M19 5L5 19" />
                    </svg>
                </button>
                <h3 className="text-lg sm:text-xl font-medium border-b border-text pb-1 px-2">本当に引き換えますか？</h3>
                <p className="text-red-600 font-bold text-xs sm:text-sm text-center mt-5 leading-relaxed">
                    受付スタッフの前でのみ引き換えてください。<br />
                    引き換えは1日1回です。
                </p>
                <button
                    type="button"
                    onClick={onConfirm}
                    className="mt-8 rounded-full px-8 py-2 font-bold text-background bg-secondary hover:bg-primary-text cursor-pointer transition-colors duration-100"
                >
                    引き換える ＞
                </button>
            </div>
        </div>
        </ModalPortal>
    )
}

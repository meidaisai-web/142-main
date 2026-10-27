'use client';

import { useEffect, useState } from "react";
import { detectIncognito } from "detectincognitojs";
import VoucherCompleteOverlay, { VoucherNotice } from "./VoucherCompleteOverlay";
import ModalPortal from "./ModalPortal";
import Link from "next/link";
import TransitionLink from "./buttons/TransitionLink";
import { getSearchUrlOfCategory, getUnvotedCategories, hasVotedAllCategories, isVoucherAvailableToday } from "@/utils/managers/meichamManager";
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
                    和泉図書館前 Meidaisai Championship受付<br />
                    でタップしてください。
                </p>
                <VoucherNotice className="mt-3" />

                <button
                    type="button"
                    onClick={isAvailable ? () => setHiddenAlert(false) : undefined}
                    disabled={!isAvailable}
                    className={`mt-6 rounded-full px-10 py-2.5 min-w-52 font-bold text-base transition-colors duration-100 ${isAvailable ? 'bg-secondary text-background hover:bg-primary-text cursor-pointer shadow' : 'bg-accent-50 text-accent-300 cursor-not-allowed'}`}
                >
                    {status === 'exchanged' ? '引き換え済み' : isAvailable ? '引き換える ＞' : '引き換え不可'}
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
                    <>
                        <p className="text-sm text-center mt-5">投票が完了していない部門があります。</p>
                        {/* 判定後（ブラウザ側）にだけ描画されるので、ここで投票記録を読んでよい */}
                        <div className="flex flex-col gap-3 mt-4 w-full max-w-60">
                            {getUnvotedCategories().map(unvoted => (
                                <Link
                                    key={unvoted}
                                    href={getSearchUrlOfCategory(unvoted)}
                                    className="flex justify-between items-center rounded-full border-2 border-primary text-primary-900 px-6 py-1.5 text-sm sm:text-base hover:bg-primary-100 transition-colors duration-100"
                                >
                                    <span className="flex-1 text-center">{unvoted}部門</span>
                                    <span>＞</span>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* 大抽選会はめいちゃん以外の内容も多いので、カードの外に案内する。左右の強調線（＼ ／）で目立たせる */}
            <p className="mt-10 pb-20 flex items-center justify-center gap-2 text-sm sm:text-base">
                <EmphasisLines />
                <span>明大祭大抽選会については<TransitionLink href="/bigLottery">こちら</TransitionLink></span>
                <EmphasisLines flip />
            </p>

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

// 文の左右に付ける漫画調の強調線。
function EmphasisLines({ flip = false }: { flip?: boolean }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 24"
            className={`shrink-0 w-[1.1em] h-[1.3em] text-primary ${flip ? '-scale-x-100' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
        >
            <line x1="3" y1="4" x2="10" y2="9.5" />
            <line x1="2" y1="12" x2="11" y2="12" />
            <line x1="3" y1="20" x2="10" y2="14.5" />
        </svg>
    )
}

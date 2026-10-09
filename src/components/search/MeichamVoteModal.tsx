'use client';

import { ReactNode, useEffect } from "react";
import Link from "next/link";
import { MeichamCategory } from "@/utils/models/MeichamGenre";
import { getUnvotedCategories } from "@/utils/managers/meichamManager";

export type MeichamVoteModalStep = 'confirm' | 'done';

interface MeichamVoteModalProps {
    step: MeichamVoteModalStep;
    hidden: boolean;
    onClose: () => void;
    onVote: () => void;
    eventName: string;
    groupName: string;
    category: MeichamCategory;
    isVoting: boolean;           // 投票処理中（ボタン連打防止）
    isVoucherAvailable: boolean; // 本日の抽選券がまだ配布中か
}

export default function MeichamVoteModal({ step, hidden, onClose, onVote, eventName, groupName, category, isVoting, isVoucherAvailable }: MeichamVoteModalProps) {

    // モーダル表示中は背面をスクロールさせない
    useEffect(() => {
        const body = document.body;
        if (!hidden) {
            body.classList.add("overflow-hidden");
        } else {
            body.classList.remove("overflow-hidden");
        }
        return () => {
            body.classList.remove("overflow-hidden");
        };
    }, [hidden]);

    if (hidden) return null;

    // 完了画面のときだけ、本日まだ投票していない部門を計算する（投票直後の状態を反映するため描画時に取得）
    const unvotedCategories = step === 'done' ? getUnvotedCategories() : [];

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center px-6 bg-text/50" onClick={onClose}>
            <div
                className="relative w-full max-w-md bg-background border-[6px] border-primary rounded-3xl text-text px-6 sm:px-10 pt-12 pb-8 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-3 right-4 cursor-pointer p-1" aria-label="閉じる">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M5 5l14 14M19 5L5 19" />
                    </svg>
                </button>

                {step === 'confirm' ? (
                    <div className="flex flex-col items-center">
                        <h3 className="text-lg sm:text-xl font-medium border-b border-text pb-1 px-2">本当にこの企画に投票しますか？</h3>
                        <p className="text-primary-text font-bold text-xs sm:text-sm mt-4 text-center">※参加団体が投票を誘導・強制することはできません。</p>
                        <div className="grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-4 mt-8 w-full max-w-xs text-sm sm:text-base">
                            <InfoRow label="企画名">{eventName}</InfoRow>
                            <InfoRow label="団体名">{groupName}</InfoRow>
                            <InfoRow label="投票部門">{category}部門</InfoRow>
                        </div>
                        <button
                            onClick={onVote}
                            disabled={isVoting}
                            className={`mt-10 rounded-full px-8 py-2 font-bold text-background transition-colors duration-100 ${isVoting ? 'bg-secondary-100 cursor-not-allowed' : 'bg-secondary hover:bg-primary-text cursor-pointer'}`}
                        >
                            {isVoting ? '投票中...' : '投票する ＞'}
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <CheckIcon />
                        <p className="text-primary-900 font-bold mt-2">投票完了！</p>
                        <div className="grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-3 mt-6 w-full max-w-xs text-sm sm:text-base">
                            <InfoRow label="投票した企画">{eventName}</InfoRow>
                            <InfoRow label="投票部門">{category}部門</InfoRow>
                        </div>
                        <hr className="w-full border-t-2 border-dashed border-accent my-6" />
                        {unvotedCategories.length > 0 ? (
                            <>
                                <p className="text-sm sm:text-base">あなたがまだ投票していない部門</p>
                                <div className="flex flex-col gap-3 mt-4 w-full max-w-60">
                                    {unvotedCategories.map(unvoted => (
                                        <OutlineLink key={unvoted} href={`/search?category=${encodeURIComponent(unvoted)}`}>
                                            {unvoted}部門
                                        </OutlineLink>
                                    ))}
                                </div>
                            </>
                        ) : isVoucherAvailable ? (
                            <>
                                <p className="text-sm sm:text-base text-center">すべての部門に投票しました！<br />抽選券をお受け取りいただけます！</p>
                                <div className="mt-5 w-full max-w-60">
                                    <OutlineLink href="/voucher">抽選券をGET！</OutlineLink>
                                </div>
                            </>
                        ) : (
                            <p className="text-sm sm:text-base text-center">
                                すべての部門に投票しました！<br /><br />
                                申し訳ありません。<br />
                                本日分の抽選券の配布は終了いたしました。
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

// ピンクのラベル + 値の1行（親の2列グリッドに並べて、ラベルの幅を揃える）
function InfoRow({ label, children }: { label: string, children: ReactNode }) {
    return (
        <>
            <span className="bg-secondary-100 px-3 text-center whitespace-nowrap">{label}</span>
            <span className="break-all">{children}</span>
        </>
    )
}

// 枠線だけのボタン型リンク
function OutlineLink({ href, children }: { href: string, children: ReactNode }) {
    return (
        <Link
            href={href}
            className="flex justify-between items-center rounded-full border-2 border-primary text-primary-900 px-6 py-1.5 text-sm sm:text-base hover:bg-primary-100 transition-colors duration-100"
        >
            <span className="flex-1 text-center">{children}</span>
            <span>＞</span>
        </Link>
    )
}

// 丸の中にチェックマーク
function CheckIcon() {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="text-primary-900" aria-hidden="true">
            <circle cx="36" cy="36" r="33" stroke="currentColor" strokeWidth="4" />
            <path d="M22 37l10 10 19-21" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

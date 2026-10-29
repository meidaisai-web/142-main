'use client';

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MeichamCategory } from "@/utils/models/MeichamGenre";
import { MEICHAM_CATEGORIES, getGenresOfCategory, getVotedCategories, isVoucherAvailableToday } from "@/utils/managers/meichamManager";

// カードの並び順（デザイン準拠）
const DISPLAY_ORDER: MeichamCategory[] = ['飲食', 'パフォーマンス', 'エンタメ'];

// 本日のめいちゃん投票状況（大抽選会ページ用）
export default function MeichamVoteStatus() {
    // localStorageはクライアントでしか読めないため、読み込むまではnull
    const [votedCategories, setVotedCategories] = useState<MeichamCategory[] | null>(null);

    useEffect(() => {
        // マウント後にlocalStorageの投票状況を state に反映する
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVotedCategories(getVotedCategories());
    }, []);

    if (votedCategories === null) return null;

    const hasVotedAll = votedCategories.length === MEICHAM_CATEGORIES.length;

    return (
        <div className="my-6">
            <p className="text-sm sm:text-base mb-4">・あなたの投票状況</p>
            {/* ここだけページの左右余白を無視して広げる（CloudPageContainer の px と揃えること） */}
            <div className="-mx-12 sm:-mx-20 md:-mx-25 lg:-mx-40 px-4">
                {hasVotedAll ? (
                    <div className="flex flex-col items-center mx-auto max-w-sm rounded-lg border-2 border-primary bg-primary-100/50 px-3 sm:px-6 py-6 text-[min(14px,3.6vw)] sm:text-base text-center">
                        {isVoucherAvailableToday() ? (
                            <>
                                <p>すべての部門に投票しています！<br />抽選券をお受け取りいただけます！</p>
                                <div className="mt-5 w-full max-w-60">
                                    <OutlineLink href="/voucher">抽選券をGET！</OutlineLink>
                                </div>
                            </>
                        ) : (
                            <p>すべての部門に投票しています！<br /><br />申し訳ありません。<br />本日分の抽選券の配布は終了いたしました。</p>
                        )}
                    </div>
                ) : (
                    // スマホでは2枚+1枚（2段目は中央揃え）、sm以上は横に3枚並べる
                    <div className="flex flex-wrap justify-center items-end gap-3 sm:flex-nowrap sm:gap-4">
                        {DISPLAY_ORDER.map(category => (
                            <CategoryCard key={category} category={category} voted={votedCategories.includes(category)} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

// 部門ごとのカード（投票済みは白地グレー、未投票は色付きでカード全体が投票先へのリンク）
// 画面幅が変わっても縦横比が崩れないよう、カードを6:7に固定し、中身はカード幅基準(cqw)で拡縮する
function CategoryCard({ category, voted }: { category: MeichamCategory, voted: boolean }) {
    const icon = CATEGORY_ICONS[category];
    const cardClass = 'aspect-[6/7] flex flex-col items-center justify-between rounded-lg border px-[5cqw] py-[9cqw]';
    const content = (
        <>
            {/* 収まらないときは「部門」の前で改行する */}
            <p className="text-[max(8px,9.5cqw)] leading-tight text-center tracking-tighter border-b border-current px-[2cqw]">
                <span className="whitespace-nowrap">{category}</span><wbr /><span className="whitespace-nowrap">部門</span>
            </p>
            <Image src={voted ? icon.voted : icon.active} alt="" width={64} height={64} className="h-[38cqw] w-auto max-w-full object-contain" />
            {voted ? (
                <p className="text-[max(8px,8.5cqw)] leading-snug">投票済み</p>
            ) : (
                <span className={`${PILL_CLASS} px-[4cqw] py-[1.5cqw] text-[max(8px,8.5cqw)] leading-snug whitespace-nowrap tracking-tighter`}>
                    <span className="flex-1 text-center">投票はこちら</span>
                    <span>＞</span>
                </span>
            )}
        </>
    );
    return (
        // スマホでは1段に2枚（gap-3の半分を引いた幅）、sm以上は均等に広がる
        // 未投票のカードを目立たせるため、投票済みのカードは少し小さくする（スマホは枠の85%、sm以上は最大幅を小さく）
        <div className={`flex justify-center w-[calc(50%-0.375rem)] max-w-48 sm:w-auto sm:flex-1 min-w-0 ${voted ? 'sm:max-w-48' : 'sm:max-w-60'}`}>
            <div className={`@container ${voted ? 'w-[85%] sm:w-full' : 'w-full'}`}>
                {voted ? (
                    <div className={`${cardClass} border-text bg-background text-text`}>{content}</div>
                ) : (
                    <Link href={searchHref(category)} className={`${cardClass} border-primary-900 bg-primary-100/50 text-primary-900 active:scale-95 transition-transform duration-100`}>
                        {content}
                    </Link>
                )}
            </div>
        </div>
    )
}

// その部門のジャンルで絞り込んだ企画検索のURL
function searchHref(category: MeichamCategory): string {
    const params = new URLSearchParams();
    getGenresOfCategory(category).forEach(genre => params.append('genre', genre));
    return `/search?${params.toString()}`;
}

// 枠線だけのボタンの見た目
const PILL_CLASS = 'flex justify-between items-center w-full rounded-full border-2 border-primary bg-background text-primary-900';

// 枠線だけのボタン型リンク
function OutlineLink({ href, children }: { href: string, children: ReactNode }) {
    return (
        <Link
            href={href}
            className={`${PILL_CLASS} px-6 py-1.5 text-sm sm:text-base active:scale-95 transition-transform duration-100`}
        >
            <span className="flex-1 text-center">{children}</span>
            <span>＞</span>
        </Link>
    )
}

// 部門ごとのアイコン（未投票: 色付き / 投票済み: グレー）
const CATEGORY_ICONS: Record<MeichamCategory, { active: string, voted: string }> = {
    '飲食': { active: '/images/bigLottery/bigLottery01.svg', voted: '/images/bigLottery/bigLotery02.svg' },
    'パフォーマンス': { active: '/images/bigLottery/bigLottery03.svg', voted: '/images/bigLottery/bigLottery04.svg' },
    'エンタメ': { active: '/images/bigLottery/bigLottery05.svg', voted: '/images/bigLottery/bigLottery06.svg' },
};

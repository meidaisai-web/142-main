
"use client";

import Image from "next/image";

interface TicketProps {
    title: string;
    time: string;
    subtitle: string;
    imageSrc: string;
    imageAlt?: string;
}

export default function Ticket({
    title,
    time,
    subtitle,
    imageSrc,
    imageAlt = "",
}: TicketProps) {
    return (
        <div className="sm:px-20">
        <div className="@container relative w-full aspect-[820/347] min-w-0 max-w-[500px] mx-auto">
            {/* チケット本体 */}
            <Image
                src="/images/tt/ticket.svg"
                alt=""
                fill
                priority
                className="pointer-events-none select-none"
            />

            {/* チケットの中身 */}
            <div className="absolute inset-[8%_4%] flex items-center">
                {/* 左：時間 */}
                <div className="flex h-full w-[15%] shrink-0 items-center justify-center border-r border-dashed border-[#777] pr-[2%]">
                    <p className="whitespace-pre-line text-center font-serif text-[max(13px,3.1cqw)] leading-[2.3] text-[#66616A]">
                        {time}
                    </p>
                </div>

                {/* 中央：企画名・団体名 */}
                <div className="flex h-full min-w-0 flex-1 flex-col items-center justify-center px-[2%] pt-2">
                    {/* 企画名と装飾 */}
                    {/* 高さは枠画像の縦横比(1613:521)が最低ライン。3行になると文字の高さに合わせて枠が伸びる */}
                    {/* 余白は縮められるスペーサー。中身が高さに収まらない時だけ0まで詰めて、下線がチケットから出ないようにする */}
                    <div className="h-[4.4cqw] shrink" />
                    <div className="relative flex min-h-[15.1cqw] w-full shrink-0 items-center justify-center">
                        <Image
                            src="/images/tt/waku2.svg"
                            alt=""
                            fill
                            className="pointer-events-none object-fill"
                        />

                        {/* 枠の内側(左右の飾り括弧を除いた幅)に収め、3行を超える分は省略 */}
                        <h2 className="relative z-10 line-clamp-3 w-[74%] break-words whitespace-pre-line py-[0.7em] text-center font-serif text-[max(13px,2.6cqw)] leading-[1.2] text-[#66616A]">
                            {title}
                        </h2>
                    </div>

                    {/* 団体名 */}
                    <div className="h-[5.9cqw] shrink" />
                    {/* 下線はチケット下の切り欠き(半円)の右端より内側から引く */}
                    {/* 余白(pb)をline-clampと同じ要素に付けると3行目が余白部分に見えてしまうので、下線と余白は外側の要素に分ける */}
                    <div className="w-[calc(100%-17.4cqw)] shrink-0 border-b border-[#F6BDC6] pb-[2%]">
                        <p className="line-clamp-2 break-words text-center font-serif text-[max(13px,2.2cqw)] leading-[1.2] text-[#66616A]">
                            {subtitle}
                        </p>
                    </div>
                </div>

                {/* 右：写真 */}
                <div className="relative aspect-square w-[30%] shrink-0 overflow-hidden rounded-[8%] mt-[3.9cqw]">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        sizes="280px"
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
        </div>
    );
}

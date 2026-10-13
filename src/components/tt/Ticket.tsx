
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
                src="/images/tt/ticket2.svg"
                alt=""
                fill
                priority
                className="pointer-events-none select-none"
            />

            {/* チケットの中身 */}
            <div className="absolute inset-[8%_4%] flex items-center">
                {/* 左：時間 */}
                <div className="flex h-full w-[18%] shrink-0 flex-col items-center border-r border-dashed border-[#777] pr-[2%]">
                    {/* 写真:点線までいっぱい(列の幅) */}
                    
                    {/* 時間:写真の下の残りの高さの中央に置く */}
                    <div className="flex min-h-0 flex-1 items-center">
                        <p className="whitespace-pre-line text-center font-serif text-[max(13px,3.6cqw)] leading-[1.7] text-[#66616A]">
                            {time}
                        </p>
                    </div>
                </div>

                {/* 中央：企画名・団体名 */}
                <div className="flex h-full min-w-0 flex-1 justify-center">
                <div className="flex h-full w-[90%] flex-col items-center justify-end pb-[2cqw] pt-2">
                    {/* 企画名と装飾 */}
                    {/* 高さは枠画像の縦横比(1613:521)が最低ライン。3行になると文字の高さに合わせて枠が伸びる */}
                    {/* 余白は縮められるスペーサー。中身が高さに収まらない時だけ0まで詰めて、下線がチケットから出ないようにする */}
                    <div className="h-[4.4cqw] shrink" />
                    {/* 括弧(左右)は高さに合わせて拡縮し、間(文字の部分)は幅いっぱいに広がる。画像を横に引き伸ばさない */}
                    <div
                        className="relative flex min-h-[16.1cqw] w-full shrink-0 items-center justify-center"
                        style={{
                            backgroundImage: "url(/images/tt/waku2-left.svg), url(/images/tt/waku2-right.svg)",
                            backgroundPosition: "left center, right center",
                            backgroundSize: "auto 100%",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        {/* 括弧の内側に収め、3行を超える分は省略 */}
                        <h2 className="relative z-10 line-clamp-3 w-full break-words px-[7cqw] whitespace-pre-line py-[0.7em] text-center font-serif text-[max(13px,2.6cqw)] leading-[1.2]">
                            {title}
                        </h2>
                    </div>

                    {/* 団体名 */}
                    <div className="h-[5.9cqw] shrink" />
                    {/* 余白(pb)をline-clampと同じ要素に付けると3行目が余白部分に見えてしまうので、下線と余白は外側の要素に分ける */}
                    <div className="w-full shrink-0 border-b border-[#F6BDC6] pb-[2%]">
                        <p className="line-clamp-2 break-words text-center font-serif text-[max(13px,2.2cqw)] leading-[1.2]">
                            {subtitle}
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}


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
                <div className="flex h-full w-[19%] shrink-0 items-center justify-center border-r border-dashed border-[#777] pr-[2%]">
                    <p className="whitespace-pre-line text-center font-serif text-[3.1cqw] leading-[2.3] text-[#66616A]">
                        {time}
                    </p>
                </div>

                {/* 中央：タイトル・企画名 */}
                <div className="flex h-full min-w-0 flex-1 flex-col items-center justify-center px-[2%]">
                    {/* タイトルと装飾 */}
                    <div className="relative mt-[4.4cqw] flex aspect-[1613/521] w-full items-center justify-center">
                        <Image
                            src="/images/tt/waku2.svg"
                            alt=""
                            fill
                            className="pointer-events-none"
                        />

                        {/* 枠の内側(左右の飾り括弧を除いた幅)に収め、2行を超える分は省略 */}
                        <h2 className="relative z-10 line-clamp-2 w-[74%] break-words whitespace-pre-line text-center font-serif text-[2.6cqw] leading-[1.2] text-[#66616A]">
                            {title}
                        </h2>
                    </div>

                    {/* 企画名 */}
                    <p className="mt-[15%] line-clamp-2 w-full break-words border-b border-[#F6BDC6] pb-[2%] text-center font-serif text-[2.2cqw] leading-relaxed text-[#66616A]">
                        {subtitle}
                    </p>
                </div>

                {/* 右：写真 */}
                <div className="relative aspect-square w-[34%] shrink-0 overflow-hidden rounded-[8%] mt-[3.9cqw]">
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

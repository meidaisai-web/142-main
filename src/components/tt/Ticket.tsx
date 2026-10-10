
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
        <div className="relative w-full aspect-[820/347] min-w-0">
            {/* チケット本体 */}
            <Image
                src="/images/ticket.svg"
                alt=""
                fill
                priority
                className="pointer-events-none select-none"
            />

            {/* チケットの中身 */}
            <div className="absolute inset-[8%_4%] flex items-center">
                {/* 左：時間 */}
                <div className="flex h-full w-[19%] shrink-0 items-center justify-center border-r border-dashed border-[#777] pr-[2%]">
                    <p className="whitespace-pre-line text-center font-serif text-[clamp(10px,2.1vw,22px)] leading-[2.3] text-[#66616A]">
                        {time}
                    </p>
                </div>

                {/* 中央：タイトル・企画名 */}
                <div className="flex h-full min-w-0 flex-1 flex-col items-center justify-center px-[2%]">
                    {/* タイトルと装飾 */}
                    <div className="relative flex w-full items-center justify-center">
                        <Image
                            src="/images/waku.svg"
                            alt=""
                            width={300}
                            height={82}
                            className="pointer-events-none absolute h-auto w-full max-w-[300px]"
                        />

                        <h2 className="relative z-10 whitespace-pre-line px-[5%] text-center font-serif text-[clamp(11px,2.3vw,24px)] leading-[1.2] text-[#66616A]">
                            {title}
                        </h2>
                    </div>

                    {/* 企画名 */}
                    <p className="mt-[5%] w-full border-b border-[#F6BDC6] pb-[2%] text-center font-serif text-[clamp(9px,1.8vw,18px)] leading-relaxed text-[#66616A]">
                        {subtitle}
                    </p>
                </div>

                {/* 右：写真 */}
                <div className="relative h-full w-[34%] shrink-0 overflow-hidden rounded-[8%]">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 768px) 34vw, 280px"
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

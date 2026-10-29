
"use client";

import Image from "next/image";

const TICKET_SRC = "/images/tt/new_ticket.svg";

interface TicketProps {
    title: string;
    time: string;
    subtitle: string;
    imageSrc?: string;
    imageAlt?: string;
    layout?: "default" | "timeline";
}

export default function Ticket({
    title,
    time,
    subtitle,
    imageSrc,
    imageAlt = "",
    layout = "default",
}: TicketProps) {
    if (layout === "timeline") {
        return (
            <div className="relative h-full w-full overflow-hidden bg-white [container-type:size]">
                <div className="pointer-events-none absolute inset-0 flex select-none flex-col" aria-hidden="true">
                    <svg className="block h-auto w-full flex-none aspect-[73.34/5]" viewBox="0 0 73.34 5" preserveAspectRatio="none">
                        <image href={TICKET_SRC} width="73.34" height="32.53" />
                    </svg>
                    <svg className="block min-h-0 w-full flex-1" viewBox="0 5 73.34 22.5" preserveAspectRatio="none">
                        <image href={TICKET_SRC} width="73.34" height="32.53" />
                    </svg>
                    <svg className="block h-auto w-full flex-none aspect-[73.34/5.03]" viewBox="0 27.5 73.34 5.03" preserveAspectRatio="none">
                        <image href={TICKET_SRC} width="73.34" height="32.53" />
                    </svg>
                </div>
                <span aria-hidden="true" className="pointer-events-none absolute z-[1] left-[calc(100cqw*14.59/73.34-1px)] top-[calc(100cqw*6/73.34)] bottom-[calc(100cqw*6/73.34)] w-[2px] bg-[repeating-linear-gradient(to_bottom,#777_0_5px,transparent_5px_11px)]" />
                <div className="absolute inset-[max(14px,13%)_6%_max(8px,9%,calc(100cqw*5/73.34))_4%] grid min-h-0 min-w-0 grid-cols-[15.5cqw_minmax(0,1fr)] gap-[10px] overflow-hidden [@container(max-height:100px)]:gap-[2px] [@container(max-height:65px)]:top-[8px] [@container(max-width:180px)]:inset-x-[4%]">
                    <div className="relative flex min-w-0 items-center justify-center pr-[6px]">
                        <p className="flex min-w-0 max-w-full flex-col items-center gap-[clamp(2px,4cqh,12px)] overflow-hidden text-ellipsis whitespace-nowrap text-xs text-[#66616a] [@container(max-height:65px)]:gap-0 [@container(max-height:65px)]:leading-[12px]">
                            {time.split(/([〜～~])/).map((part, index) => (
                                <span key={index} className={`[@container(max-height:65px)]:shrink-0 ${/^[〜～~]$/.test(part) ? "inline-block rotate-90" : ""}`}>{part.trim()}</span>
                            ))}
                        </p>
                    </div>
                    <div className="flex min-h-0 min-w-0 items-center gap-[8px] overflow-hidden [@container(max-height:130px)]:grid [@container(max-height:130px)]:h-full [@container(max-height:130px)]:grid-cols-[minmax(0,1fr)_auto] [@container(max-height:130px)]:grid-rows-[minmax(0,1fr)_auto] [@container(max-height:130px)]:gap-y-[2px] [@container(max-width:180px)]:gap-0">
                        <div className="flex max-h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden [@container(max-height:130px)]:contents">
                            <div className="min-h-0 shrink overflow-hidden px-[17px] py-[3px] [background:url('/images/tt/waku2-left.svg')_left_center/auto_min(100%,44px)_no-repeat,url('/images/tt/waku2-right.svg')_right_center/auto_min(100%,44px)_no-repeat] [@container(max-height:100px)]:px-[12px] [@container(max-height:100px)]:py-px [@container(max-height:130px)]:col-start-1 [@container(max-height:130px)]:row-start-1 [@container(max-height:130px)]:self-center [@container(max-width:180px)]:px-[12px]">
                                <h3 className="line-clamp-3 pb-[0.12em] text-center text-[14px] leading-[1.2] [overflow-wrap:anywhere] [@container(max-height:100px)]:line-clamp-2 [@container(max-height:100px)]:text-[12px] [@container(max-height:65px)]:text-[11px] [@container(max-width:180px)]:text-[11px]">{title}</h3>
                            </div>
                            <div className="mt-[4px] shrink-0 border-b border-[#f6bdc6] [@container(max-height:100px)]:mt-[2px] [@container(max-height:130px)]:col-span-2 [@container(max-height:130px)]:row-start-2 [@container(max-height:130px)]:mt-0">
                                <p className="line-clamp-2 pb-[0.12em] text-center text-[11px] leading-[14px] [overflow-wrap:anywhere]">{subtitle}</p>
                            </div>
                        </div>
                        {imageSrc && <div className="relative flex h-[min(78px,100%)] w-[min(78px,25cqw)] shrink-0 items-center justify-center overflow-hidden rounded-[8px] [@container(min-width:480px)_and_(min-height:130px)]:h-[min(98px,100%)] [@container(min-width:480px)_and_(min-height:130px)]:w-[min(98px,21cqw)] [@container(max-height:130px)]:col-start-2 [@container(max-height:130px)]:row-start-1 [@container(max-height:130px)]:h-[min(64px,100%)] [@container(max-height:130px)]:w-[min(64px,22cqw)] [@container(max-height:65px)]:w-[20px] [@container(max-width:180px)]:hidden"><Image src={imageSrc} alt={imageAlt} width={224} height={224} sizes="112px" className="pointer-events-none block h-auto max-h-full w-auto max-w-full rounded-[8px] object-contain" /></div>}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="px-5 sm:px-8">
        <div className="@container relative w-full aspect-[820/347] min-w-0 max-w-[820px] mx-auto">
            {/* チケット本体 */}
            <Image
                src={TICKET_SRC}
                alt=""
                fill
                priority
                className="pointer-events-none select-none"
            />

            {/* チケットの中身 */}
            <div className="absolute inset-[8%_4%] flex items-center">
                {/* 左：時間 */}
                <div className="relative flex h-full w-[18%] shrink-0 flex-col items-center pr-[2%]">
                    {/* 破線の長さと間隔を、チケットの幅に合わせて調整する */}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-[6%] right-0 w-px"
                        style={{
                            backgroundImage: "repeating-linear-gradient(to bottom, #777 0, #777 max(5px, 1cqw), transparent max(5px, 1cqw), transparent max(10px, 1.9cqw))",
                        }}
                    />
                    {/* 時間は左の列の中央に置く */}
                    <div className="flex min-h-0 flex-1 items-center">
                        <p className="whitespace-pre-line text-center font-serif text-[max(13px,3.6cqw)] leading-[1.7] text-[#66616A]">
                            {time.split(/([〜～])/).map((part, index) =>
                                part === "〜" || part === "～" ? (
                                    <span key={index} className="inline-block rotate-90">{part}</span>
                                ) : part,
                            )}
                        </p>
                    </div>
                </div>

                {/* 中央：企画名・団体名 */}
                <div className="flex h-full min-w-0 flex-1 flex-col items-center justify-center gap-[3cqw] px-[3%]">
                    {/* 括弧(左右)は高さに合わせて拡縮し、間(文字の部分)は幅いっぱいに広がる。画像を横に引き伸ばさない */}
                    <div
                        className="relative flex min-h-[14cqw] w-full shrink-0 items-center justify-center"
                        style={{
                            backgroundImage: "url(/images/tt/waku2-left.svg), url(/images/tt/waku2-right.svg)",
                            backgroundPosition: "left center, right center",
                            backgroundSize: "auto 100%",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        {/* 括弧の内側に収め、3行を超える分は省略 */}
                        <h2 className="relative z-10 line-clamp-3 w-full break-words px-[4cqw] whitespace-pre-line text-center font-serif text-[max(13px,2.6cqw)] leading-[1.2]">
                            {title}
                        </h2>
                    </div>

                    {/* 団体名 */}
                    {/* 余白(pb)をline-clampと同じ要素に付けると3行目が余白部分に見えてしまうので、下線と余白は外側の要素に分ける */}
                    <div className={`w-[85%] shrink-0 border-b border-[#F6BDC6] pb-[2%]`}>
                        <p className="line-clamp-2 break-words text-center font-serif text-[max(11px,2.2cqw)] leading-[1.2]">
                            {subtitle}
                        </p>
                    </div>
                </div>

                {/* 右：企画画像。画像がない場合も写真用のスペースを確保する */}
                <div className="relative mr-[1%] aspect-square w-[32%] shrink-0 translate-y-[1.5cqw] overflow-hidden rounded-[2cqw] bg-[#eee]">
                    {imageSrc && (
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            sizes="(max-width: 639px) 28vw, (max-width: 883px) 29vw, 242px"
                            className="object-contain"
                        />
                    )}
                </div>
            </div>
        </div>
        </div>
    );
}

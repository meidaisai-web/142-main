
"use client";

import Image from "next/image";
import styles from "./Ticket.module.css";

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
            <div className={styles.timeline}>
                <Image src="/images/tt/new_ticket.svg" alt="" fill unoptimized className="pointer-events-none select-none" />
                <div className={styles.contents}>
                    <div className={styles.timeColumn}>
                        <p className={styles.time}>
                            {time.split(/([〜～~])/).map((part, index) => (
                                <span key={index} className={/^[〜～~]$/.test(part) ? styles.timeSeparator : undefined}>{part.trim()}</span>
                            ))}
                        </p>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.text}>
                            <div className={styles.frame}>
                                <h3 className={styles.title}>{title}</h3>
                            </div>
                            <p className={styles.subtitle}>{subtitle}</p>
                        </div>
                        {imageSrc && <div className={styles.photo}><Image src={imageSrc} alt={imageAlt} width={224} height={224} sizes="112px" className={styles.photoImage} /></div>}
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
                src="/images/tt/ticket2.svg"
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

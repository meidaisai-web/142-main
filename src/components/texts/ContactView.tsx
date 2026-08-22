import Link from "next/link";

const phoneNumber = "03-3327-4363"

type ContactViewProps = {
    department: string;
    mail?: string;
    showPhone?: boolean;
    showAddress?: boolean;
    noPadding?: boolean;
};

export default function ContactView({ department, mail, showPhone, showAddress, noPadding }: ContactViewProps) {
    return (
        <div className={`w-full flex flex-col items-center pb-10 ${noPadding ? "pt-0" : "pt-20"}`}>
            <p className="text-lg text-center py-5">
                第142回明大祭実行委員会<br/>
                {department}
            </p>
            <div className="flex flex-col sm:flex-row items-center">
                {showAddress && <Address />}
                {mail ?
                    (showPhone ? <MailPhone mail={mail} /> : <Mail mail={mail} />)
                    :
                    (showPhone && <Phone />)
                }
            </div>
        </div>
    )
}

function Address() {
    return (
        <Base>
            <h2 className="w-full text-center pb-5 font-bold">住所</h2>
            <p className="leading-6 text-sm">
                〒168-8555<br />
                東京都杉並区永福1-9-1<br />
                明治大学 和泉キャンパス食堂3階<br />
                明大祭実行委員会室
            </p>
        </Base>
    )
}

function Mail({ mail }: { mail: string }) {
    return (
        <Base>
            <h2 className="w-full text-center pb-3 text-sm">メール</h2>
            <Link href={`mailto:${mail}`}>
                <p className="text-primary hover:text-secondary text-center text-lg font-bold underline">{mail}</p>
            </Link>
        </Base>
    )
}

function Phone() {
    return (
        <Base>
            <div className="flex flex-col items-center gap-5">
                <h2 className="w-full text-center text-sm">電話</h2>
                <Link href={`tel:${phoneNumber}`}>
                    <p className="text-primary hover:text-secondary text-center text-2xl font-bold underline">
                        {phoneNumber}
                    </p>
                </Link>
                <p className="text-center text-xs">※開室時間：11：00〜18：00（平日のみ）</p>
            </div>
        </Base>
    )
}

function MailPhone({ mail }: { mail: string; }) {
    return (
        <Base>
            <div className="pb-5">
                <h2 className="w-full text-center pb-1 text-sm">メール</h2>
                <Link href={`mailto:${mail}`}>
                    <p className="text-primary hover:text-secondary text-center text-lg font-bold underline">
                        {mail}
                    </p>
                </Link>
            </div>
            <div className="flex flex-col items-center gap-1">
                <h2 className="w-full text-center text-sm">お電話</h2>
                <Link href={`tel:${phoneNumber}`}>
                    <p className="text-primary hover:text-secondary text-center text-lg font-bold underline">
                        {phoneNumber}
                    </p>
                </Link>
                <p className="text-center text-xs">開室時間　11：00〜18：00（平日のみ）</p>
            </div>
        </Base>
    )
}

function Base({ children }: { children: React.ReactNode }) {
    return (
        <div className="m-6">
            <div className="relative bg-background w-80 md:w-72 lg:w-80 pt-5 pb-10 px-10 md:px-6 lg:px-10 rounded-xl outline-3 outline-accent-900 outline-solid">
                <CornerBolt position="tl" />
                <CornerBolt position="tr" />
                <CornerBolt position="bl" />
                <CornerBolt position="br" />
                <div className="text-black">
                    {children}
                </div>
            </div>
        </div>
    )
}

function CornerBolt({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const positionClasses: Record<typeof position, string> = {
    tl: "top-[7%] left-[5%] lg:left-[6%] -translate-x-1/2 -translate-y-1/2",
    tr: "top-[7%] right-[5%] lg:right-[6%] translate-x-1/2 -translate-y-1/2",
    bl: "bottom-[7%] left-[5%] lg:left-[6%] -translate-x-1/2 translate-y-1/2",
    br: "bottom-[7%] right-[5%] lg:right-[6%] translate-x-1/2 translate-y-1/2",
  };
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-10 h-3 w-3 rounded-full bg-gradient-to-b from-primary to-accent-100 shadow-[0_1px_2px_rgba(0,0,0,0.15)] ${positionClasses[position]}`}
    />
  );
}
import Link from "next/link";

const phoneNumber = "03-3327-4363"

type ContactViewProps = {
    department: string;
    mail: string;
    showPhone?: boolean;
    showAddress?: boolean;
};

export default function ContactView({ department, mail, showPhone, showAddress }: ContactViewProps) {
    return (
        <div className="w-full flex flex-col items-center pb-10 pt-20">
            <p className="text-lg text-center py-5">
                第141回明大祭実行委員会<br/>
                {department}
            </p>
            <div className="flex flex-col sm:flex-row items-center">
                {showAddress && <Address />}
                {showPhone ? <MailPhone mail={mail} /> : <Mail mail={mail} />}
            </div>
        </div>
    )
}

function Address() {
    return (
        <Base>
            <h2 className="w-full text-center pb-5">住所</h2>
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
                <h2 className="w-full text-center text-sm">電話</h2>
                <Link href={`tel:${phoneNumber}`}>
                    <p className="text-primary hover:text-secondary text-center text-lg font-bold underline">
                        {phoneNumber}
                    </p>
                </Link>
                <p className="text-center text-xs">※開室時間：11:00〜18:00（平日のみ）</p>
            </div>
        </Base>
    )
}

function Base({ children }: { children: React.ReactNode }) {
    return (
        <div className="m-6">
            <div className="absolute w-80 md:w-72 lg:w-80 py-10 px-10 md:px-6 lg:px-10 rounded-2xl outline-8 outline-secondary outline-solid rotate-5">
                <div className="opacity-0">
                    {children}
                </div>
            </div>
            <div className="relative bg-white w-80 md:w-72 lg:w-80 py-10 px-10 md:px-6 lg:px-10 rounded-2xl outline-8 outline-accent outline-solid">
                <div className="text-black">
                    {children}
                </div>
            </div>
        </div>
    )
}
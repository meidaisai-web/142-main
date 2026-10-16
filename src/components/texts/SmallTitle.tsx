import Image from "next/image"

type SmallTitleProps = {
    className?: string;
    children?: React.ReactNode;
    // 見出しのid。sectionのaria-labelledbyなどから参照するときに指定する。
    id?: string;
    // trueのとき見出しを中央ぞろえにする。省略時は従来どおり左寄せ。
    center?: boolean;
}

export default function SmallTitle({ className, children, id, center = false }: SmallTitleProps) {
    return (
        <div className={`flex flex-row mt-12 ${center ? "justify-center" : ""} ${className ?? ""}`}>
            {/* 飾りの画像を見出しの文字の左上に置くため、文字と一緒にrelativeな枠で囲む。 */}
            <div className="relative">
                <Image
                    src="/images/svg/titles/smallTitle.svg"
                    alt=""
                    width="40"
                    height="40"
                    className="absolute transform -translate-x-7 -translate-y-5"
                />
                <h2 id={id} className="text-xl font-bold">
                    {children}
                </h2>
            </div>
        </div>
    )
}

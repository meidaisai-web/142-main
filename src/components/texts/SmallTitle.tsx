import Image from "next/image"

type SmallTitleProps = {
    className?: string;
    children?: React.ReactNode;
    // 見出しのid。sectionのaria-labelledbyなどから参照するときに指定する。
    id?: string;
    center?: boolean;
}

export default function SmallTitle({ className, children, id, center = false }: SmallTitleProps) {
    return (
        <div className={`flex flex-row mt-12 ${center ? "justify-center" : ""} ${className ?? ""}`}>
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

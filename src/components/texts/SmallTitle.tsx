import Image from "next/image"

type SmallTitleProps = {
    className?: string;
    children?: React.ReactNode;
}

export default function SmallTitle({ className, children }: SmallTitleProps) {
    return (
        <div className={`flex flex-row ${className ?? ""}`}>
            <Image
                src="/images/svg/titles/smallTitle.svg"
                alt=""
                width="40"
                height="40"
                className="absolute transform -translate-x-7 -translate-y-5"
            />
            <h2 className="text-xl font-bold">
                {children}
            </h2>
        </div>
    )
}
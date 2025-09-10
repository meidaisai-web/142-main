import Image from "next/image"

type SmallTitleProps = {
    className?: string;
    children?: React.ReactNode;
}

export default function SmallTitle({ className, children }: SmallTitleProps) {
    return (
        <div className={`flex items-center gap-2 relative pt-8 pb-2 ${className}`}>
            <Image
                src={"/images/svg/title/SmallTitle.svg"}
                alt=""
                width={40}
                height={40}
                className="absolute -left-6 w-10 -z-10"
            />
            <h1 className="text-xl font-bold text-white">
                {children}
            </h1>
        </div>
    )
}
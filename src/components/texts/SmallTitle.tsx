import Image from "next/image"

type SmallTitleProps = {
    className?: string;
    children?: React.ReactNode;
}

export default function SmallTitle({ className, children }: SmallTitleProps) {
    return (
        <div className={`flex items-center gap-2 relative pt-8 ${className}`}>
            <Image 
                src={"/images/svg/SmallTitle.svg"} 
                alt="" 
                width={40} 
                height={40}
                className="absolute -left-12 w-10"
            />
            <h1 className="text-2xl font-bold text-white">
                {children}
            </h1>
        </div>
    )
}
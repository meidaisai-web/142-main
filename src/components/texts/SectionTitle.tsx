import { ReactNode } from "react";
import Image from "next/image";

type SectionTitleProps = {
    children: ReactNode;
    className?: string;
};

export default function SectionTitle({
    children,
    className,
}: SectionTitleProps) {
    return (
        <div className="relative items-center justify-center w-fit mx-auto mt-10 mb-8 px-8 py-5">
            {/* 左上の飾り */}
            <Image
                src="/images/svg/section-blue.svg"
                alt="SectionTitle-blue"
                width={55}
                height={55}
                className="absolute -left-1 -top-1"
            />

            {/* タイトル */}
            <h1 className={`relative z-10 text-center text-2xl font-bold ${className ?? ""}`}>
                {children}
            </h1>

            {/* 右下の飾り */}
            <Image
                src="/images/svg/section-pink.svg"
                alt="SectionTitle-pink"
                width={55}
                height={55}
                className="absolute -right-1 -bottom-1"
            />
        </div>
    );
}
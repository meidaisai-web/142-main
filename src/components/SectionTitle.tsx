import { ReactNode } from "react";
import Image from "next/image";

type SectionTitleProps = {
    children: ReactNode;
};

export default function SectionTitle({ children}: SectionTitleProps) {
    return (
        <h2 className="flex items-center justify-center gap-2 md:gap-4 text-xl sm:text-2xl md:text-4xl lg:text-5xl dela-font text-white px-4">
            <Image 
                src="/images/svg/SectionTitleL.svg" 
                alt="" 
                width={80} 
                height={80} 
                className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[150px] lg:h-[150px]"
                aria-hidden 
            />
            <span className="whitespace-nowrap text-center">{children}</span>
            <Image 
                src="/images/svg/SectionTitleR.svg" 
                alt="" 
                width={60} 
                height={60} 
                className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]"
                aria-hidden 
            />
        </h2>
    );
}
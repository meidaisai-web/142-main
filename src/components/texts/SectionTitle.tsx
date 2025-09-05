import { ReactNode } from "react";
import Image from "next/image";

type SectionTitleProps = {
    children: ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
    return (
        <div className='w-full flex items-center justify-center pt-20 pb-2'>
            <div className="relative w-fit flex items-center justify-center">
                <Image
                    src="/images/svg/SectionTitleL.svg"
                    alt=""
                    width={80}
                    height={80}
                    className="absolute w-14 h-14 -left-6 -z-10"
                />
                <h2 className="text-center font-bold text-2xl">{children}</h2>
                <Image
                    src="/images/svg/SectionTitleR.svg"
                    alt=""
                    width={60}
                    height={60}
                    className="absolute w-14 h-14 -right-6 -z-10"
                />
            </div>
        </div>
    );
}
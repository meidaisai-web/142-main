import { ReactNode } from "react";
import { delaGothic } from "@/utils/fonts";

type IndexTitleProps = {
    children: ReactNode;
};

export default function IndexTitle({ children }: IndexTitleProps) {
    return (
        <h1 className={`w-full text-center text-2xl sm:text-4xl whitespace-nowrap p-4 pt-8 ${delaGothic.className}`}>
            {children}
        </h1>
    );
}
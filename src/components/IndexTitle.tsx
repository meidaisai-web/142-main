import { ReactNode } from "react";
import { delaGothic } from "@/utils/fonts";

type IndexTitleProps = {
    children: ReactNode;
};

export default function IndexTitle({ children }: IndexTitleProps) {
    return (
        <h1 className={`w-full text-center text-2xl md:text-5xl whitespace-nowrap ${delaGothic.className}`}>
            {children}
        </h1>
    );
}
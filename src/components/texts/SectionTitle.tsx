import { ReactNode } from "react";
import Image from "next/image";

type SectionTitleProps = {
    children: ReactNode;
    className?: string;
};

export default function SectionTitle({ children, className }: SectionTitleProps) {
    return (
        <h1 className="">
            {children}
        </h1>
    );
}
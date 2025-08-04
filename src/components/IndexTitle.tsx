import { ReactNode } from "react";

type IndexTitleProps = {
    children: ReactNode;
};

export default function IndexTitle({ children }: IndexTitleProps) {
    return (
        <h1 className="w-22 w-full text-center text-2xl md:text-5xl dela-font text-white whitespace-nowrap">
            {children}
        </h1>
    );
}
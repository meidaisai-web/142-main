import type { ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode;
    className?: string;
    reserveFooterSpace?: boolean;
}

export default function PageContainer({
    children,
    className = "",
    reserveFooterSpace = true,
}: PageContainerProps) {
    return (
        <div className={`w-full px-12 sm:px-20 md:px-25 lg:px-40 max-w-320 mx-auto ${reserveFooterSpace ? "pb-60" : ""} ${className}`}>
            {children}
        </div>
    );
}

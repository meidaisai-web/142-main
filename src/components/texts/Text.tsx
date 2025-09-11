type TextProps = {
    children: React.ReactNode;
    className?: string;
    noTopPadding?: boolean;
    moreTopPadding?: boolean;
};

export default function Text({ children, noTopPadding, className, moreTopPadding }: TextProps) {
    return (
        <p className={`w-full text-justify ${noTopPadding ? "pt-0" : "pt-2"} ${moreTopPadding ? "mt-5" : ""} ${className}`}>
            {children}
        </p>
    )
}
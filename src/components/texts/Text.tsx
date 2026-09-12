type TextProps = {
    children: React.ReactNode;
    className?: string;
    noTopPadding?: boolean;
    noJustify?: boolean;
    moreTopPadding?: boolean;
};

export default function Text({ children, noTopPadding, className, noJustify, moreTopPadding }: TextProps) {
    return (
        <p className={`w-full font-semibold ${noTopPadding ? "pt-0" : "pt-2"} ${noJustify ? "" : "text-justify"} ${moreTopPadding ? "mt-5" : ""} ${className}`}>
            {children}
        </p>
    )
}
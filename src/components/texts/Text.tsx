type TextProps = {
    children: React.ReactNode;
    className?: string;
    noTopPadding?: boolean;
    noJustify?: boolean;
    center?: boolean;
    moreTopPadding?: boolean;
};

export default function Text({ children, noTopPadding, className, noJustify, center, moreTopPadding }: TextProps) {
    return (
        <p className={`w-full font-semibold ${noTopPadding ? "pt-0" : "pt-2"} ${noJustify ? "" : "text-justify"} ${center ? "!text-center" : ""} ${moreTopPadding ? "mt-5" : ""} ${className}`}>
            {children}
        </p>
    )
}
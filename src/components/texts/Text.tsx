type TextProps = {
    children: React.ReactNode;
    className?: string;
    noTopPadding?: boolean;
    noJustify?: boolean;
};

export default function Text({ children, noTopPadding, className, noJustify }: TextProps) {
    return (
        <p className={`w-full ${noTopPadding ? "pt-0" : "pt-2"} ${noJustify ? "" : "text-justify"} ${className}`}>
            {children}
        </p>
    )
}
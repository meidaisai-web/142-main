type TextProps = {
    children: React.ReactNode;
    className?: string;
    noTopPadding?: boolean;
};

export default function Text({ children, noTopPadding, className }: TextProps) {
    return (
        <p className={`${noTopPadding ? "pt-0" : "pt-2"} ${className}`}>
            {children}
        </p>
    )
}
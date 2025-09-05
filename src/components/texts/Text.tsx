type TextProps = {
    children: React.ReactNode;
    noTopPadding?: boolean;
};

export default function Text({ children, noTopPadding }: TextProps) {
    return (
        <p className={`${noTopPadding ? "pt-0" : "pt-2"}`}>
            {children}
        </p>
    )
}
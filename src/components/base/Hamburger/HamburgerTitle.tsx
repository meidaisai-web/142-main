interface HamburgerTitleProps {
    children: React.ReactNode;
    className?: string;
}

export default function HamburgerTitle({ children, className }: HamburgerTitleProps) {
    return (
        <div className={`text-xl font-bold pt-10 pb-2 border-b-2 border-white ${className}`}>
            {children}
        </div>
    )
}
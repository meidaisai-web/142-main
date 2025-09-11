interface HamburgerTitleProps {
    children: React.ReactNode;
    className?: string;
}

export default function HamburgerTitle({ children, className }: HamburgerTitleProps) {
    return (
        <div className={`text-lg sm:text-xl w-full font-bold sm:pt-10 sm:pb-2 border-b-2 border-white text-wrap ${className}`}>
            {children}
        </div>
    )
}
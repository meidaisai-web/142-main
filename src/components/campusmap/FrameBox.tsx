interface FrameBoxProps {
    children?: React.ReactNode;
    className?: string;
}

const cornerClasses = [
    "top-2 left-2",
    "top-2 right-2",
    "bottom-2 left-2",
    "bottom-2 right-2",
];

export default function FrameBox({ children, className = "" }: FrameBoxProps) {
    return (
        <div className={`relative border-3 border-[#F6BDC6] bg-[#FFFBFB] text-black rounded-xl p-6 ${className}`}>
            {cornerClasses.map((position) => (
                <span
                    key={position}
                    aria-hidden="true"
                    className={`absolute ${position} w-4 h-4 rounded-full bg-[#F6BDC6]`}
                />
            ))}
            {children}
        </div>
    );
}

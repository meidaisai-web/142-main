interface LabelProps {
    children: React.ReactNode;
}

export default function Label({ children }: LabelProps) {
    return (
        <div className="pr-1 py-1">
            <div className={`-rotate-3 rounded-full border-2 border-accent py-1 text-center absolute -translate-y-0.5 w-24`}>
                <p className='opacity-0 text-sm text-center'>{children}</p>
            </div>
            <div className={`rounded-full transition duration-100 bg-secondary py-1 relative z-10 w-24`}>
                <p className='text-sm font-bold text-center'>{children}</p>
            </div>
        </div>
    )
}

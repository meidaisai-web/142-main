interface SearchCloudProps {
    children: React.ReactNode;
}

export default function SearchCloud({ children }: SearchCloudProps) {
    return (
        <div className="shrink-0 pr-1 py-1">
            <div className="w-fit min-w-24 max-w-40 min-h-12 px-4 py-2 bg-center bg-no-repeat bg-contain flex items-center justify-center" style={{ backgroundImage: "url('/images/searchdetail/cloud.svg')" }}>
                <p className="text-sm font-bold text-center break-words">{children}</p>
            </div>
        </div>
    );
}
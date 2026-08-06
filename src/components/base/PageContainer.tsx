export default function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full px-18 sm:px-20 md:px-25 lg:px-40">
            {children}
        </div>
    );
}
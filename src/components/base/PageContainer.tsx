export default function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full px-8 sm:px-14 md:px-18 lg:px-24">
            {children}
        </div>
    );
}
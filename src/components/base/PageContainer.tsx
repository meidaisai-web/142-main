export default function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full px-12 sm:px-16 md:px-20 lg:px-28">
            {children}
        </div>
    );
}
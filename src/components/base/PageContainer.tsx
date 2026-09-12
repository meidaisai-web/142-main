export default function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full px-12 sm:px-20 md:px-25 lg:px-40 max-w-320 mx-auto">
            {children}
        </div>
    );
}
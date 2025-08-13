export default function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full px-5 sm:px-10 lg:px-20">
            {children}
        </div>
    );
}
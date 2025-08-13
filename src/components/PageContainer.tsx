export default function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full px-5 md:px-10 lg:px-16">
            {children}
        </div>
    );
}
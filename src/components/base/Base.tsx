import ToTop from "../buttons/ToTop";
import Footer from "./Footer";
import Header from "./Header";

export default function Base({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            <Header />
            {children}
            <ToTop />
            <Footer />
        </div>
    )
}
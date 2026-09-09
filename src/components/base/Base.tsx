import { Suspense } from "react";
import Header from "../base/Header";
import Footer from "../base/Footer";
import ToTop from "../buttons/ToTop";

export default function Base({ children }: { children: React.ReactNode }) {
    return (
        <Suspense>
            <div className="min-h-screen">
                <Header />
                <main>
                    {children}
                </main>
                <ToTop />
                <Footer />
            </div>
        </Suspense>
    )
}
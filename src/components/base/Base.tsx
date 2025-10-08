import { Suspense } from "react";
import ToTop from "../buttons/ToTop";
import Footer from "./Footer";
import Header from "./Header";
import { Loading } from "./Loading";

export default function Base({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<Loading />}>
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
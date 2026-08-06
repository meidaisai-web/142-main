import { Suspense } from "react"; 
import Header from "../base/Header";

export default function Base({ children }: { children: React.ReactNode }) {
    return (
        <Suspense> {/* データ読み込み中だけ fallback の中身が表示される */}
            <div className="min-h-screen">
                <Header />
                <main>
                    {children}
                </main>
            </div>
        </Suspense>
    )
}
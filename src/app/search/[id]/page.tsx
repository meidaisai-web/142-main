import DetailEventContent from "@/components/search/DetailEventContent";
import VoucherExchangeCard from "@/components/VoucherExchangeCard"; // TODO: テスト用。コミット前に消す

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <main className="flow-root bg-top-gradient pb-[max(15rem,18vw)]">
            <DetailEventContent id={id} />
            {/* TODO: テスト用。コミット前に消す */}
            <div className="px-6 mt-16">
                <VoucherExchangeCard />
            </div>
        </main>
    )
}

import DetailEventContent from "@/components/search/DetailEventContent";
import VoucherExchangeCard from "@/components/VoucherExchangeCard";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <main className="flow-root bg-top-gradient pb-[max(15rem,18vw)]">
            <DetailEventContent id={id} />
            <div className="px-6 mt-16">
                <VoucherExchangeCard />
            </div>
        </main>
    )
}

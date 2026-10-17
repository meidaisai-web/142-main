import DetailEventContent from "@/components/search/DetailEventContent";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <main className="flow-root bg-top-gradient pb-60">
            <DetailEventContent id={id} />
        </main>
    )
}
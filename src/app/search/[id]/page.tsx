import DetailEventContent from "@/components/search/DetailEventContent";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <main className="flow-root bg-top-gradient pb-[max(15rem,18vw)]">
            <DetailEventContent id={id} />
        </main>
    )
}
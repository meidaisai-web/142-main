import DetailEventContent from "@/components/search/DetailEventContent";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div className="pb-[18vw]">
            <DetailEventContent id={id} />
        </div>
    )
}
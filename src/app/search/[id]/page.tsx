import DetailContent from "@/components/search/DetailContent";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div>
            <DetailContent id={id} />
        </div>
    )
}
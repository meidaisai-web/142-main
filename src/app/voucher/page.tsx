import VoucherExchangeCard from "@/components/VoucherExchangeCard";
import CloudPageContainer from "@/components/base/CloudPageContainer";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <CloudPageContainer>
            <div className="h-30"/>
                <VoucherExchangeCard />
        </CloudPageContainer>
    )
}
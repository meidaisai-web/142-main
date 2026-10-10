import Ticket from "@/components/tt/Ticket";

export default function Page() {
    return (
        <main className="mx-auto w-full max-w-[820px]">
            <Ticket
                title={"ACEオドリマツリ\n2025"}
                time={"10:00\n〜\n10:50"}
                subtitle="ダンスサークルACE"
                imageSrc="/images/ace.jpg"
                imageAlt="ダンスサークルACEのステージ"
            />
        </main>
    );
}
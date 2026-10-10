import CloudPageContainer from "@/components/base/CloudPageContainer";
import Ticket from "@/components/tt/Ticket";

export default function Page() {
    return (
        <main className="h-3000">
                <div className="mt-50"/>
            <Ticket
                title={"ああああああああああああああああああああ"}
                time={"10:00\n〜\n10:50"}
                subtitle="ああああああああああああああああああああ"
                imageSrc="/images/tt/ace.svg"
                imageAlt="ダンスサークルACEのステージ"
            />
            <div className="mt-5"/>
            <Ticket
                title={"ああああああああああああああああああああ"}
                time={"10:00\n〜\n10:50"}
                subtitle="ああああああああああああああああああああ"
                imageSrc="/images/tt/ace.svg"
                imageAlt="ダンスサークルACEのステージ"
            />
            <div className="mt-5"/>
            <Ticket
                title={"ああああああああああああああああああああ"}
                time={"10:00\n〜\n10:50"}
                subtitle="ああああああああああああああああああああ"
                imageSrc="/images/tt/ace.svg"
                imageAlt="ダンスサークルACEのステージ"
            />
        </main>
    );
}
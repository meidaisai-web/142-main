import Ticket from "@/components/tt/Ticket";

const tickets = [
    {
        title: "マーケティング研究会　エステー社長対談会",
        subtitle: "体育同好会連合会男子チアリーディング　ANCHORS",
    },
    {
        title: "ああああああああああああああああああああ",
        subtitle: "ああああああああああああああああああああ",
    },
    {
        title: "ああああああああああああああああああああ",
        subtitle: "ああああああああああああああああああああ",
    },
    {
        title: "マーケティング研究会　エステー社長対談会",
        subtitle: "体育同好会連合会男子チアリーディング　ANCHORS",
    },
    {
        title: "ああああああああああああああああああああ",
        subtitle: "ああああああああああああああああああああ",
    },
    {
        title: "ああああああああああああああああああああ",
        subtitle: "ああああああああああああああああああああ",
    },
];

export default function Page() {
    return (
        <main className="h-3000">
            <div className="mt-50" />
            {tickets.map((t, i) => (
                <div key={i} className={i > 0 ? "mt-10" : ""}>
                    <Ticket
                        title={t.title}
                        time={"10:00\n〜\n10:50"}
                        subtitle={t.subtitle}
                        variant={i % 2 === 0 ? "pink" : "green"}
                    />
                </div>
            ))}
        </main>
    );
}

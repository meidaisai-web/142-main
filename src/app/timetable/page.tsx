import PageTitle from "@/components/texts/PageTitle";
import Timetable from "@/components/tt/Timetable";

export default function Page() {
    return (
        // フッターの雲は画面幅に比例して上へ張り出すため、その分の余白も確保する。
        <main className="pb-[max(10rem,calc(15vw+3rem))]">
            <PageTitle>タイムテーブル</PageTitle>
            <Timetable />
        </main>
    );
}

import PageTitle from "@/components/texts/PageTitle"
import PageContainer from "@/components/base/PageContainer"
import Image from "next/image";
import SectionTitle from "@/components/texts/SectionTitle";
export default function Page() {
    return (
        <>
            <PageTitle>タイムテーブル</PageTitle>
            <PageContainer>
                <SectionTitle className="mt-15 mb-10">11月1日(土)</SectionTitle>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <a rel="noopener noreferrer" target="_blank" className="transition-transform transform hover:scale-105 hover:shadow-lg" href="https://asset.meidaisai.jp/141-tt/tt_1-ls.pdf">
                        <Image src='/images/timetable/TT_1-ls.jpg' alt='タイムテーブル1-1' width={500} height={300} />
                    </a>
                    <a rel="noopener noreferrer" target="_blank" className="transition-transform transform hover:scale-105 hover:shadow-lg" href="https://asset.meidaisai.jp/141-tt/tt_1-main.pdf">
                        <Image src='/images/timetable/TT_1-main.jpg' alt='タイムテーブル1-2' width={500} height={300} />
                    </a>
                </div>
                <SectionTitle className="mt-10 mb-10">11月2日(日)</SectionTitle>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <a rel="noopener noreferrer" target="_blank" className="transition-transform transform hover:scale-105 hover:shadow-lg" href="https://asset.meidaisai.jp/141-tt/tt_2-ls.pdf">
                        <Image src='/images/timetable/TT_2-ls.jpg' alt='タイムテーブル2-1' width={500} height={300} />
                    </a>
                    <a rel="noopener noreferrer" target="_blank" className="transition-transform transform hover:scale-105 hover:shadow-lg" href="https://asset.meidaisai.jp/141-tt/tt_2-main.pdf">
                        <Image src='/images/timetable/TT_2-main.jpg' alt='タイムテーブル2-2' width={500} height={300} />
                    </a>
                </div>
                <SectionTitle className="mt-10 mb-10">11月3日(月・祝)</SectionTitle>
                <div className="flex justify-center">
                    <a rel="noopener noreferrer" target="_blank" className="transition-transform transform hover:scale-105 hover:shadow-lg" href="https://asset.meidaisai.jp/141-tt/tt_3.pdf">
                        <Image src='/images/timetable/TT_3.jpg' alt='タイムテーブル3' width={500} height={300} />
                    </a>
                </div>
            </PageContainer>
        </>
    )
}
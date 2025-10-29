import PageTitle from "@/components/texts/PageTitle"
import PageContainer from "@/components/base/PageContainer"
import Image from "next/image";
import SmallTitle from "@/components/texts/SmallTitle";
export default function Page() {
    return (
        <>
            <PageTitle>タイムテーブル</PageTitle>
            <PageContainer>
               
                <SmallTitle className="mt-15 mb-5">11月1日(土)</SmallTitle>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <a rel="noopener noreferrer" target="_blank" className="transition-transform transform hover:scale-105 hover:shadow-lg" href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:8e2b3059-a0a8-4028-ac55-efe6e39cab96">
                        <Image src='/images/timetable/TT_1-ls.jpg' alt='タイムテーブル1-1' width={500} height={300} />
                    </a>
                    <a rel="noopener noreferrer" target="_blank" className="transition-transform transform hover:scale-105 hover:shadow-lg" href="https://acrobat.adobe.com/id/urn:aaid:sc:ap:a20a131e-cf13-4997-8e02-c3a262e7907d">
                        <Image src='/images/timetable/TT_1-main.jpg' alt='タイムテーブル1-2' width={500} height={300} />
                    </a>
                </div>
                <SmallTitle className="mt-10 mb-5">11月2日(日)</SmallTitle>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <a rel="noopener noreferrer" target="_blank" className="transition-transform transform hover:scale-105 hover:shadow-lg" href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:7cc6aff0-25e6-4699-b112-83e13129f6c7">
                        <Image src='/images/timetable/TT_2-ls.jpg' alt='タイムテーブル2-1' width={500} height={300} />
                    </a>
                    <a rel="noopener noreferrer" target="_blank" className="transition-transform transform hover:scale-105 hover:shadow-lg" href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:090565cf-afdd-47e7-a919-d5c8e08b60cc">
                        <Image src='/images/timetable/TT_2-main.jpg' alt='タイムテーブル2-2' width={500} height={300} />
                    </a>
                </div>
                <SmallTitle className="mt-10 mb-5">11月3日(月・祝)</SmallTitle>
                <div className="flex justify-center">
                <a rel="noopener noreferrer" target="_blank" className="transition-transform transform hover:scale-105 hover:shadow-lg" href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:3df71b0a-0392-4d48-a880-5fa57fcb4f4d">
                    <Image src='/images/timetable/TT_3.jpg' alt='タイムテーブル3' width={500} height={300} />
                </a>
                </div>
                


            </PageContainer>

        </>
    )
}
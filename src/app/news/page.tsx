import NewsItem from '@/components/index/NewsMaterials/NewsItem';
import PageTitle from '@/components/texts/PageTitle'
import { NewsData } from "@/utils/datas/NewsData";


const page = () => {
    return (
        <div>
            <PageTitle>お知らせ</PageTitle>
            <div className="w-full px-8 sm:px-28 flex flex-col items-center">
                <Contents />
            </div>
        </div>
    )
};

export default page

function Contents() {
    return (
        <div className="mt-10 px-8 bg-white rounded-4xl w-full max-w-2xl overflow-hidden">
            <div className="py-4">
                {NewsData.map((item, index) => (
                    <NewsItem
                        key={item.id}
                        item={item}
                        isLast={index === NewsData.length - 1}
                    />
                ))}
            </div>
        </div>
    )
};
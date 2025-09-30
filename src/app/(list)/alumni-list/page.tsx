import PageContainer from "@/components/base/PageContainer";
import PageTitle from "@/components/texts/PageTitle";
import SectionTitle from "@/components/texts/SectionTitle";
import Text from "@/components/texts/Text";
import { alumniList } from "@/utils/datas/alumniData";

export default function Page() {
    return (
        <div>
            <PageTitle>ご賛助ご芳名</PageTitle>
            <PageContainer>
                <Text moreTopPadding>明大祭の開催にあたりまして､多くの方々に多大なるご支援をいただきました｡ この場をお借りしまして､ご支援いただきましたみなさまのご紹介をさせていただきます｡（敬称略）</Text>
                <SectionTitle>ご芳名一覧</SectionTitle>
                <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-x-28 gap-y-5">
                    {alumniList.map((alumni) => (
                        <AlumniItem key={alumni.id} {...alumni} />
                    ))}
                </div>
            </PageContainer>
        </div>
    )
}

interface Alumni {
    name: string;
    year?: string;
    division?: string;
    position?: string;
    message?: string;
}
function AlumniItem({ name, year, division, position, message }: Alumni) {
    return (
        <div>
            <Text className="font-bold">{name}</Text>
            <Text noTopPadding>{position}</Text>
            {year && division && (
                <Text noTopPadding>{year}{division}学部卒業</Text>
            )}
            {year && !division && (
                <Text noTopPadding>{year}卒業</Text>
            )}
            {!year && division && (
                <Text noTopPadding>{division}学部卒業</Text>
            )}
            {message && (
                <div>
                    <Text noTopPadding>{message}</Text>
                </div>
            )}
        </div>
    )
}
import CloudPageContainer from "@/components/base/CloudPageContainer";
import Tab from "@/components/Tab";
import PageTitle from "@/components/texts/PageTitle";
import { officialProjects } from '@/utils/datas/officialProjectData';
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    const firstDay = officialProjects.filter((project) => project.date.includes(1));
    const secondDay = officialProjects.filter((project) => project.date.includes(2));
    const thirdDay = officialProjects.filter((project) => project.date.includes(3));
    const tabs = [
        { key: 1, label: '10.30 Fri', data: firstDay },
        { key: 2, label: '10.31 Sat', data: secondDay },
        { key: 3, label: '11.01 Sun', data: thirdDay },
    ]
    const tabsArray = tabs.map((tab) => {
        return {
            key: tab.key,
            label: tab.label,
            content: (
                <div className='flex flex-wrap gap-6 justify-center'>
                    {tab.data.map((data) => (
                        <Project
                            key={data.title}
                            title={data.title}
                            description={data.description}
                            image={data.image}
                            alt={data.alt}
                            time={tab.label === '10.31 Sat' ? data.secondTime || data.time : tab.label === '11.01 Sun' ? data.thirdTime || data.time : data.time}
                            place={data.place}
                            link={data.link}
                        />
                    ))}
                </div>
            )
        }
    })
    return (
        <CloudPageContainer noPadding>
            <PageTitle>実行委員会企画</PageTitle>
            <Tab tabs={tabsArray} />
        </CloudPageContainer>
    )
}

type ProjectProps = {
    title: string;
    description: string;
    image?: string;
    alt?: string;
    time?: string;
    place: string;
    link: string;
}

function Project({ title, description, image, alt, time, place, link }: ProjectProps) {
    const showImageSrc = image ? image : '/images/official-projects/logo.svg';
    const showImageAlt = alt ? alt : title;
    return (
        <div>
            <Link href={link} className="absolute transition-transform duration-150 ease-out hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1">
                <div className="bg-primary rounded-2xl p-2 w-76 sm:w-120 border-primary-900 border-4">
                    <div className="flex gap-2 mb-2">
                        <div className="bg-secondary-900 w-3 aspect-square rounded-full" />
                        <div className="bg-accent-900 w-3 aspect-square rounded-full" />
                        <div className="bg-primary-900 w-3 aspect-square rounded-full" />
                    </div>
                    <div className="bg-white flex flex-col sm:flex-row gap-6 sm:gap-0 sm:pl-3 py-3 items-center rounded-xl min-h-60">
                        <Image src={showImageSrc} alt={showImageAlt} width={600} height={600} className="w-1/3 aspect-square object-contain rounded-xl border-accent border-4" />
                        <div className="flex flex-1 flex-col gap-2 w-full">
                            <div>
                                <h3 className="text-sm font-extrabold pl-7 pr-3">{title}</h3>
                                <div className="flex items-center -mt-4">
                                    <Image src="/images/official-projects/svg/title-accessory.svg" alt="" width={40} height={40} className="h-10 w-auto shrink-0 inline-block" />
                                    <div className="h-0.5 flex-1 bg-secondary" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xs pl-7 pr-3">{description}</h3>
                                <div className="flex items-center -mt-4">
                                    <Image src="/images/official-projects/svg/description-accessory.svg" alt="" width={40} height={40} className="h-10 w-auto shrink-0 inline-block" />
                                    <div className="h-0.5 flex-1 bg-accent" />
                                </div>
                            </div>
                            <div className={`flex items-center ${time === undefined ? 'hidden' : ''}`}>
                                <Image src="/images/official-projects/svg/clock.svg" alt="" width={40} height={40} className="h-6 w-6 object-contain mx-2 shrink-0 inline-block" />
                                <p className="text-xs leading-3 bg-secondary rounded-full py-1 px-2 pr-3 w-fit">{time}</p>
                            </div>
                            <div className="flex items-center">
                                <Image src="/images/official-projects/svg/pin.svg" alt="" width={40} height={40} className="h-6 w-6 object-contain mx-2 shrink-0 inline-block" />
                                <p className="text-xs leading-3 bg-accent rounded-full py-1 px-2 mr-3 w-fit">{place}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="bg-primary-700 rounded-2xl p-2 w-76 sm:w-120 text-primary mt-3 ml-3 border-primary-900 border-4">
                <div className="flex gap-2 mb-2">
                    <div className="h-3" />
                </div>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:pl-3 py-3 items-center min-h-60">
                    <div className="w-1/3 aspect-square" />
                    <div className="flex flex-1 flex-col gap-2 w-full">
                        <div>
                            <h3 className="text-sm font-extrabold pl-7 pr-3">{title}</h3>
                            <div className="flex items-center -mt-4">
                                <Image src="/images/official-projects/svg/title-accessory.svg" alt="" width={40} height={40} className="h-10 w-auto shrink-0 inline-block" />
                                <div className="h-0.5 flex-1" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xs pl-7 pr-3">{description}</h3>
                            <div className="flex items-center -mt-4">
                                <Image src="/images/official-projects/svg/description-accessory.svg" alt="" width={40} height={40} className="h-10 w-auto shrink-0 inline-block" />
                                <div className="h-0.5 flex-1" />
                            </div>
                        </div>
                        <div className={`flex items-center ${time === undefined ? 'hidden' : ''}`}>
                            <div className="h-6 w-6 mx-2 shrink-0 inline-block" />
                            <p className="text-xs leading-3 py-1 px-2 pr-3 w-fit">{time}</p>
                        </div>
                        <div className="flex items-center">
                            <div className="h-6 w-6 mx-2 shrink-0 inline-block" />
                            <p className="text-xs leading-3 py-1 px-2 mr-3 w-fit">{place}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
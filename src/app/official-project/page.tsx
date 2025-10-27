'use client';

import { useRef } from 'react';
import PageTitle from '@/components/texts/PageTitle';
import Link from 'next/link';
import Image from 'next/image';
import { officialProjects } from '@/utils/datas/officialProjectData';
import Tab from '@/components/Tab';

export default function TabsSwipe() {
	const buttonRefs = useRef<HTMLButtonElement[]>([]);
	buttonRefs.current = [];

	const firstDay = officialProjects.filter((project) => project.date.includes(1));
	const secondDay = officialProjects.filter((project) => project.date.includes(2));
	const thirdDay = officialProjects.filter((project) => project.date.includes(3));
	const tabs = [
		{ key: 1, label: '11月1日', data: firstDay },
		{ key: 2, label: '11月2日', data: secondDay },
		{ key: 3, label: '11月3日', data: thirdDay },
	]
	const tabsArray = tabs.map((tab) => {
		return {
			key: tab.key,
			label: tab.label,
			content: (
				<div className='flex flex-wrap gap-y-8 gap-10 justify-center py-3'>
					{tab.data.map((data) => (
						<Project
							key={data.title}
							title={data.title}
							description={data.description}
							image={data.image}
							time={tab.label === '11月3日' ? data.thirdTime || data.time : data.time}
							place={data.place}
							alt={data.alt}
							link={data.link}
						/>
					))}
				</div>
			)
		}
	})

	return (
		<div className="w-full">
			<PageTitle>実行委員企画</PageTitle>
			<Tab tabs={tabsArray} />
		</div>
	);
}

type ProjectProps = {
	title: string;
	description: string;
	image: string;
	alt: string;
	time: string;
	place: string;
	link: string;
}

function Project({ title, description, image, alt, time, place, link }: ProjectProps) {
	return (
		<Link href={link}>
			<div className="bg-white h-full rounded-2xl p-4 flex flex-col items-center gap-6 border-7 border-accent shadow-[10px_10px_0px_0px_#3571B8] w-80 transition duration-200 transform hover:-translate-y-1 hover:-translate-x-1">
				<div className="w-2/3 md:w-full flex justify-center">
					<Image src={image} alt={alt} width={200} height={200} className="rounded-lg object-cover" />
				</div>
				<div className="flex-1 flex flex-col gap-4 w-full">
					<h2 className="text-xl text-black font-bold">{title}</h2>
					<p className="text-base text-black">{description}</p>
					<div className="flex flex-wrap gap-2 mt-auto">
						<span className="bg-secondary rounded-full px-3 py-1 text-sm font-semibold">
							{time}
						</span>
						<span className="bg-secondary rounded-full px-3 py-1 text-sm font-semibold">
							{place}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
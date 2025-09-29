'use client';

import { useState } from 'react';
import TabButton from '@/components/buttons/TabButton';
import PageTitle from '@/components/texts/PageTitle';
import Project from '@/components/project';
import PageContainer from '@/components/base/PageContainer';


export default function TabsExample() {
    const [activeTab, setActiveTab] = useState('day1');

    return (
        <div>
            <PageTitle>実行委員企画</PageTitle>
            <PageContainer>
                <div className="flex">
                    <TabButton
                        label="１日目"
                        isActive={activeTab === 'day1'}
                        onClick={() => setActiveTab('day1')}
                    />
                    <div className="w-1 bg-white/70 my-2" />
                    <TabButton
                        label="２日目"
                        isActive={activeTab === 'day2'}
                        onClick={() => setActiveTab('day2')}
                    />
                    <div className="w-1 bg-white/70 my-2" />
                    <TabButton
                        label="３日目"
                        isActive={activeTab === 'day3'}
                        onClick={() => setActiveTab('day3')}
                    />
                </div>
                <div className="h-6" />
                <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-6">
                    {activeTab === 'day1' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Project
                                title="I♡Fes!"
                                description="Description for Day 1 Project"
                                image="/images/nogi/k1.jpg"
                                alt="Image for Day 1 Project"
                                tags={['12:00~1400', 'LS101']}
                            />
                            <Project
                                title="Luminous Stage"
                                description="Description for Day 1 Project2"
                                image="/images/nogi/k2.jpg"
                                alt="Image for Day 1 Project2"
                                tags={['tag1', 'tag2']}
                            />
                            <Project
                                title="Meiji United Clash"
                                description="Description for Day 1 Project3"
                                image="/images/nogi/k4.jpg"
                                alt="Image for Day 1 Project3"
                                tags={['tag1', 'tag2']}
                            />
                            <Project
                                title="Meidaisai Championship"
                                description="Description for Day 1 Project4"
                                image="/images/nogi/k3.jpg"
                                alt="Image for Day 1 Project4"
                                tags={['tag1', 'tag2']}
                            />
                        </div>
                    )}
                    {activeTab === 'day2' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Project
                                title="Day 2 Project"
                                description="Description for Day 2 Project"
                                image="/path/to/image2.jpg"
                                alt="Image for Day 2 Project"
                                tags={['tag3', 'tag4']}
                            />
                        </div>
                    )}
                    {activeTab === 'day3' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Project
                                title="Day 3 Project"
                                description="Description for Day 3 Project"
                                image="/path/to/image3.jpg"
                                alt="Image for Day 3 Project"
                                tags={['tag5', 'tag6']}
                            />
                        </div>
                    )}
                </div>
            </PageContainer>
        </div>
    );
}

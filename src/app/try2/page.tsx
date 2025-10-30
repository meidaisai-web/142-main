'use client';

import TabsSwipe, { Tab } from '@/components/TabsSwipe';
import PageContainer from '@/components/base/PageContainer';
import PageTitle from '@/components/texts/PageTitle';
import Text  from '@/components/texts/Text';

const tabs: Tab[] = [
    {
        label: '現在地から探す',
        content:
            <div>
                <Text>現在地から探す</Text>
            </div>,
    },
    {
        label: '凡例から探す',
        content:
            <div>
                <Text>凡例から探す</Text>
            </div>,
    },
];

export default function Page() {
    return (
        <div className='w-full'>
            <PageTitle>キャンパスマップ</PageTitle>
            <div className='h-6'/>
            <PageContainer>
                <TabsSwipe tabs={tabs} />
            </PageContainer>
        </div>
    );
}
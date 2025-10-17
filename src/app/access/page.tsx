import React from 'react';
import { Metadata } from "next";
import PageContainer from '@/components/base/PageContainer';
import Text from '@/components/texts/Text';
import { List, ListItem } from '@/components/texts/List';
import SmallTitle from '@/components/texts/SmallTitle';
import Image from 'next/image'
import PageTitle from '@/components/texts/PageTitle';

export const metadata: Metadata = {
    title: "アクセス",
};

const page = () => {
    return (
        <div>
            <PageTitle>アクセス</PageTitle>
            <PageContainer>
                <Text moreTopPadding>
                    第141回明大祭が開催される明治大学和泉キャンパスまでのアクセス方法です。
                </Text>
                <Text moreTopPadding>
                    ご来場の際は公共交通機関のご利用をお願いいたします。
                </Text>
                <List mark="※">
                    <ListItem>
                        明大祭当日はキャンパス内の駐車場、駐輪場はご利用いただけません。
                    </ListItem>
                </List>
                <SmallTitle>
                    和泉キャンパス所在地
                </SmallTitle>
                <Text>
                    〒168-855<br />東京都杉並区永福1-9-1<br />明治大学和泉キャンパス
                </Text>
                <SmallTitle>
                    明大前駅までのアクセス
                </SmallTitle>
                <div className="mt-5 sm:w-3/4 lg:w-5/12 mx-auto rounded-lg overflow-hidden">
                    <Image src="/images/map/accessmap.jpg" alt="アクセスマップ" width={400} height={400} className="w-full" />
                </div>
                <SmallTitle>
                    明大前駅から和泉キャンパスまでのアクセス
                </SmallTitle>
                <Text moreTopPadding>
                    京王線・京王井の頭線「明大前駅」より徒歩５分
                </Text>
                <div className="mt-5 sm:w-3/4 lg:w-3/4 h-[75vh] mx-auto rounded-lg overflow-hidden">
                    <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1620.646167114116!2d139.64811683886393!3d35.66980322215147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x6018f3078a4992df%3A0xc09fbf5d8c170111!2z5piO5aSn5YmN6aeF44CB44CSMTU2LTAwNDMg5p2x5Lqs6YO95LiW55Sw6LC35Yy65p2-5Y6f77yS5LiB55uu77yU77yV!3m2!1d35.6684407!2d139.6504908!4m5!1s0x6018f3aa28f1e167%3A0x390585765d39611c!2z5p2x5Lqs6YO95p2J5Lim5Yy65rC456aP77yR5LiB55uu77yZ4oiS77yRIOaYjuayu-Wkp-WtpiDlkozms4njgq3jg6Pjg7Pjg5Hjgrk!3m2!1d35.671161399999995!2d139.6483178!5e0!3m2!1sja!2sjp!4v1730416884844!5m2!1sja!2sjp" width="600" height="450" loading="lazy"></iframe>
                </div>
            </PageContainer>
        </div >
    )
}

export default page

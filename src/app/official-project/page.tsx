'use client';

import { Fragment, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import TabButton from '@/components/buttons/TabButton';
import PageTitle from '@/components/texts/PageTitle';
import PageContainer from '@/components/base/PageContainer';
import Project from '@/components/project';

type Tab = { key: string; label: string; content: React.ReactNode };

const TABS: Tab[] = [
  {
    key: 'tab1',
    label: '１日目',
    content: (
      <div className="flex flex-col md:flex-row md:flex-wrap gap-9">
        <Project
          title="Meiji United Clash"
          description="共闘の刻ー賭けろ、すべてを。"
          image="/images/nogi/k4.jpg"
          alt="Image for Day 1 Project3"
          tags={['17:00~18:00', 'メインステージ']}
        />
      </div>
    )
  },
  {
    key: 'tab2',
    label: '２日目',
    content: (
      <div className="flex flex-col md:flex-row md:flex-wrap gap-9">
        <Project
          title="Luminous Stage"
          description="響鳴せよ、輝く舞台で。"
          image="/images/nogi/k2.jpg"
          alt="Image for Day 1 Project2"
          tags={['10:30~11:30', '和泉ラーニングスクエアLS101']}
        />
        <Project
          title="中夜祭"
          description="Description for Day 2 Project"
          image="/images/nogi/day2.jpg"
          alt="Image for Day 2 Project"
          tags={['17:10~18:00', 'メインステージ']}
        />
      </div>
    )
  },
  {
    key: 'tab3',
    label: '３日目',
    content: (
      <div className="flex flex-col md:flex-row md:flex-wrap gap-9">
        <Project
          title="I♡Fes!"
          description="踊って、叫んで、また好きになる。"
          image="/imagmdes/nogi/k1.jpg"
          alt="Image for Day 1 Project"
          tags={['13:00~14:00', 'エントランスエリア']}
        />
        <Project
          title="Day 3 Project"
          description="Description for Day 3 Project"
          image="/images/nogi/day3.jpg"
          alt="Image for Day 3 Project"
          tags={['tag5', 'tag6']}
        />
      </div>
    )
  },
];

export default function TabsSwipe() {
  const [active, setActive] = useState(0);
  const contentRef = useRef<SwiperType | null>(null);

  // タブクリックで内容をスライド
  const go = (idx: number) => {
    setActive(idx);
    contentRef.current?.slideTo(idx);
  };

  return (
    <div className="w-full">
        <PageTitle>実行委員企画</PageTitle>
      <div className="h-6" />
      <PageContainer>
        <div className="flex">
          {TABS.map((tab, index) => (
            <Fragment key={tab.key}>
              <TabButton
                label={tab.label}
                isActive={active === index}
                onClick={() => go(index)}
              />
              {index < TABS.length - 1 && <div className="w-1 bg-white/70 my-2" />}
            </Fragment>
          ))}
        </div>

        <div className="h-6" />

        <Swiper
            onSwiper={(s) => (contentRef.current = s)}
            onSlideChange={(s) => setActive(s.activeIndex)}
            className="!mt-4"
        >
            {TABS.map((t) => (
                <SwiperSlide key={t.key}>
                    <div>
                        {t.content}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </PageContainer>
    </div>
);
}
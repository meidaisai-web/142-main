'use client';

import { Fragment, useRef, useState } from 'react';
import type { TouchEvent } from 'react';
import TabButton from '@/components/buttons/TabButton';
import PageTitle from '@/components/texts/PageTitle';
import Project from '@/components/project';
import PageContainer from '@/components/base/PageContainer';

const tabs = [
  { key: 'day1', label: '１日目' },
  { key: 'day2', label: '２日目' },
  { key: 'day3', label: '３日目' },
] as const;
type TabKey = typeof tabs[number]['key'];

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState<TabKey>(tabs[0].key);
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 50;
  const VERTICAL_THRESHOLD = 30;

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (startX.current == null || startY.current == null) return;

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const dx = endX - startX.current;
    const dy = endY - startY.current;

    startX.current = null;
    startY.current = null;

    if (Math.abs(dy) > VERTICAL_THRESHOLD && Math.abs(dy) > Math.abs(dx)) return;

    if (Math.abs(dx) < SWIPE_THRESHOLD) return;

    const idx = tabs.findIndex(t => t.key === activeTab);
    if (dx < 0 && idx < tabs.length - 1) {

      setActiveTab(tabs[idx + 1].key);
    } else if (dx > 0 && idx > 0) {

      setActiveTab(tabs[idx - 1].key);
    }
  };

  return (
    <div>
      <PageTitle>実行委員企画</PageTitle>
      <div className="h-6" />
      <PageContainer>
        <div className="flex">
          {tabs.map((tab, index) => (
            <Fragment key={tab.key}>
              <TabButton
                label={tab.label}
                isActive={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
              />
              {index < tabs.length - 1 && <div className="w-1 bg-white/70 my-2" />}
            </Fragment>
          ))}
        </div>

        <div className="h-6" />

        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{ touchAction: 'pan-y' }}
        >
          {activeTab === 'day1' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Project
                title="I♡Fes!"
                description="Description for Day 1 Project"
                image="/images/nogi/k1.jpg"
                alt="Image for Day 1 Project"
                tags={['12:00~14:00', 'LS101']}
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
            </div>
          )}

          {activeTab === 'day2' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Project
                title="Day 2 Project"
                description="Description for Day 2 Project"
                image="/images/nogi/day2.jpg"
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
                image="/images/nogi/day3.jpg"
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
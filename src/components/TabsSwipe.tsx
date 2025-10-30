'use client';

import { Fragment, useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import TabButton from '@/components/buttons/TabButton';
import 'swiper/css';
import 'swiper/css/free-mode';

export type Tab = {
  key?: string;
  label: string;
  content: React.ReactNode;
};

export default function TabsSwipe({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const contentRef = useRef<SwiperType | null>(null);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const tabsWrapRef = useRef<HTMLDivElement | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const go = (idx: number) => {
    setActive(idx);
    contentRef.current?.slideTo(idx);
    enableIndicatorTransition();
    snapIndicatorToIndex(idx);
  };

  const snapIndicatorToIndex = (idx: number) => {
    const wrapLeft = tabsWrapRef.current?.getBoundingClientRect().left ?? 0;
    const btn = buttonRefs.current[idx];
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    setIndicator({
      left: rect.left - wrapLeft,
      width: rect.width,
    });
  };

  const enableIndicatorTransition = () => {
    const el = indicatorRef.current;
    if (el) el.style.transition = 'transform 200ms, width 200ms';
  };
  const disableIndicatorTransition = () => {
    const el = indicatorRef.current;
    if (el) el.style.transition = 'none';
  };

  useEffect(() => {
    snapIndicatorToIndex(active);
    const onResize = () => snapIndicatorToIndex(active);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [active]);

  return (
    <div>
      <div className="relative">
        <div ref={tabsWrapRef} className="flex">
          {tabs.map((tab, index) => (
            <Fragment key={tab.key ?? index}>
              <TabButton
                label={tab.label}
                isActive={active === index}
                onClick={() => go(index)}
                ref={(el) => {
                  if (el) buttonRefs.current[index] = el;
                }}
              />
              {index < tabs.length - 1 && <div className="w-1 bg-white/70 my-2" />}
            </Fragment>
          ))}
        </div>

        <div
          ref={indicatorRef}
          aria-hidden
          className="pointer-events-none absolute bottom-0 h-[3px] bg-white"
          style={{
            transform: `translateX(${indicator.left}px)`,
            width: `${indicator.width}px`,
          }}
        />
      </div>
      <div className='h-6'/>
      <Swiper
        spaceBetween={100}
        onSwiper={(s) => (contentRef.current = s)}
        onSlideChange={(s) => {
          setActive(s.activeIndex);
          snapIndicatorToIndex(s.activeIndex);
        }}
        onProgress={(s, progress) => {
          const maxSeg = tabs.length - 1;
          const t = Math.min(Math.max(progress * maxSeg, 0), maxSeg);
          const i = Math.floor(t);
          const frac = t - i;

          const wrapLeft = tabsWrapRef.current?.getBoundingClientRect().left ?? 0;
          const a = buttonRefs.current[i];
          const b = buttonRefs.current[i + 1];

          if (!a) return;
          const ra = a.getBoundingClientRect();
          const la = ra.left - wrapLeft;
          const wa = ra.width;

          if (!b || frac <= 0) {
            setIndicator({ left: la, width: wa });
            return;
          }

          const rb = b.getBoundingClientRect();
          const lb = rb.left - wrapLeft;
          const wb = rb.width;

          const left = la + (lb - la) * frac;
          const width = wa + (wb - wa) * frac;

          setIndicator({ left, width });
        }}

        onTouchEnd={() => enableIndicatorTransition()}
        className="!mt-4"
      >
        {tabs.map((tab, i) => (
          <SwiperSlide key={tab.key ?? i}>{tab.content}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
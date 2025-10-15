'use client';

import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
          title="Opening"
          description="今鳴り響く開幕の合図"
          image="/images/project/opening.jpg"
          alt="Opening"
          tags={['10:00~10:50', 'メインステージ']}
        />
        <Project
          title="松原小学校×明大祭"
          description="小学生と大学生とのコラボ企画！"
          image="/images/project/matsubara.jpg"
          alt="松原小学校×明大祭"
          tags={['10:00~18:00', 'メディア棟M509教室']}
        />
        <Project
          title="校友歓迎スペース"
          description="おかえりなさい！明大生"
          image="/images/project/koyuwelcome.jpg"
          alt="校友歓迎スペース"
          tags={['10:00~18:00', '第一校舎316･317教室']}
        />
        <Project
          title="KEIO×第141回明大祭デジタルスタンプラリー"
          description="京王電鉄株式会社とコラボしたデジタルスタンプラリー！"
          image="/images/project/keio-stamp.jpg"
          alt="KEIO×第141回明大祭デジタルスタンプラリー"
          tags={['11:00~18:00', 'メディア棟入口付近']}
        />
        <Project
          title="KEIO×第141回明大祭デジタルスタンプラリー"
          description="京王電鉄株式会社とコラボしたデジタルスタンプラリー！"
          image="/images/project/keio-stamp.jpg"
          alt="KEIO×第141回明大祭デジタルスタンプラリー"
          tags={['11:00~18:00', 'メディア棟入口付近']}
        />
        <Project
          title="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
          description="明大前商店街振興組合とコラボした抽選企画！"
          image="/images/project/meidaimae-lottery.jpg"
          alt="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
          tags={['11:00~18:00', 'メディア棟入口横']}
        />
        <Project
          title="Stand by Memory"
          description="この一瞬を永遠に。"
          image="/images/project/memory.jpg"
          alt="Stand by Memory"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS201教室']}
        />
        <Project
          title="ポンdeクエスト"
          description="スタンプを集めて魔王を倒せ！！"
          image="/images/project/ponde.jpg"
          alt="ポンdeクエスト"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS506教室']}
        />
        <Project
          title="明大SAY！"
          description="共感と謎解きの世界へようこそ！"
          image="/images/project/meidaisay.jpg"
          alt="明大SAY！"
          tags={['10:00~18:00', '和泉ラーニングスクエアGB2-1~3・3-3･4']}
        />
        <Project
          title="跡巡ーあとめぐー"
          description="君は解ける？謎解きクイズラリー"
          image="/images/project/atomegu.jpg"
          alt="跡巡ーあとめぐー"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS506教室、図書館前受付']}
        />
        <Project
          title="EXPOrts2025 in 明治"
          description="明大スポーツ万博、開幕！"
          image="/images/project/exports2025.jpg"
          alt="EXPOrts2025 in 明治"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS406･407教室・4階アゴラ']}
        />
        <Project
          title="一灯一想"
          description="扉を開けるとランタンの世界へ！"
          image="/images/project/ittouisso.jpg"
          alt="一灯一想"
          tags={['10:00~18:00', '第一校舎403・405教室']}
        />
        <Project
          title="明治に恋する5秒前"
          description="This is Meijism."
          image="/images/project/mk5.jpg"
          alt="明治に恋する5秒前"
          tags={['10:00~18:00', 'メディア棟M402･403教室・4階ラウンジ']}
        />
        <Project
          title="Meiji United Clash"
          description="共闘の刻ー賭けろ、すべてを。"
          image="/images/project/clash.jpg"
          alt="Meiji United Clash"
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
          image="/images/project/luminous.jpg"
          alt="Luminous Stage"
          tags={['10:30~11:30', '和泉ラーニングスクエアLS101']}
        />
        <Project
          title="松原小学校×明大祭"
          description="小学生と大学生とのコラボ企画！"
          image="/images/project/matsubara.jpg"
          alt="松原小学校×明大祭"
          tags={['10:00~18:00', 'メディア棟M509教室']}
        />
        <Project
          title="校友歓迎スペース"
          description="おかえりなさい！明大生"
          image="/images/project/koyuwelcome.jpg"
          alt="校友歓迎スペース"
          tags={['10:00~18:00', '第一校舎316･317教室']}
        />
        <Project
          title="KEIO×第141回明大祭デジタルスタンプラリー"
          description="京王電鉄株式会社とコラボしたデジタルスタンプラリー！"
          image="/images/project/keio-stamp.jpg"
          alt="KEIO×第141回明大祭デジタルスタンプラリー"
          tags={['11:00~18:00', 'メディア棟入口付近']}
        />
        <Project
          title="KEIO×第141回明大祭デジタルスタンプラリー"
          description="京王電鉄株式会社とコラボしたデジタルスタンプラリー！"
          image="/images/project/keio-stamp.jpg"
          alt="KEIO×第141回明大祭デジタルスタンプラリー"
          tags={['11:00~18:00', 'メディア棟入口付近']}
        />
        <Project
          title="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
          description="明大前商店街振興組合とコラボした抽選企画！"
          image="/images/project/meidaimae-lottery.jpg"
          alt="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
          tags={['11:00~18:00', 'メディア棟入口横']}
        />
        <Project
          title="Stand by Memory"
          description="この一瞬を永遠に。"
          image="/images/project/memory.jpg"
          alt="Stand by Memory"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS201教室']}
        />
        <Project
          title="ポンdeクエスト"
          description="スタンプを集めて魔王を倒せ！！"
          image="/images/project/ponde.jpg"
          alt="ポンdeクエスト"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS506教室']}
        />
        <Project
          title="明大SAY！"
          description="共感と謎解きの世界へようこそ！"
          image="/images/project/meidaisay.jpg"
          alt="明大SAY！"
          tags={['10:00~18:00', '和泉ラーニングスクエアGB2-1~3・3-3･4']}
        />
        <Project
          title="跡巡ーあとめぐー"
          description="君は解ける？謎解きクイズラリー"
          image="/images/project/atomegu.jpg"
          alt="跡巡ーあとめぐー"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS506教室、図書館前受付']}
        />
        <Project
          title="EXPOrts2025 in 明治"
          description="明大スポーツ万博、開幕！"
          image="/images/project/exports2025.jpg"
          alt="EXPOrts2025 in 明治"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS406･407教室・4階アゴラ']}
        />
        <Project
          title="一灯一想"
          description="扉を開けるとランタンの世界へ！"
          image="/images/project/ittouisso.jpg"
          alt="一灯一想"
          tags={['10:00~18:00', '第一校舎403・405教室']}
        />
        <Project
          title="明治に恋する5秒前"
          description="This is Meijism."
          image="/images/project/mk5.jpg"
          alt="明治に恋する5秒前"
          tags={['10:00~18:00', 'メディア棟M402･403教室・4階ラウンジ']}
        />
        <Project
          title="UNI ROCK FES"
          description="響け、叫べ、ひとつになれ。"
          image="/images/project/fes.jpg"
          alt="UNI ROCK FES"
          tags={['13:40~14:25', 'メインステージ']}
        />
        <Project
          title="中夜祭"
          description="Description for Day 2 Project"
          image="/images/project/midnight.jpg"
          alt="中夜祭"
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
          title="松原小学校×明大祭"
          description="小学生と大学生とのコラボ企画！"
          image="/images/project/matsubara.jpg"
          alt="松原小学校×明大祭"
          tags={['10:00~18:00', 'メディア棟M509教室']}
        />
        <Project
          title="校友歓迎スペース"
          description="おかえりなさい！明大生"
          image="/images/project/koyuwelcome.jpg"
          alt="校友歓迎スペース"
          tags={['10:00~18:00', '第一校舎316･317教室']}
        />
        <Project
          title="KEIO×第141回明大祭デジタルスタンプラリー"
          description="京王電鉄株式会社とコラボしたデジタルスタンプラリー！"
          image="/images/project/keio-stamp.jpg"
          alt="KEIO×第141回明大祭デジタルスタンプラリー"
          tags={['11:00~18:00', 'メディア棟入口付近']}
        />
        <Project
          title="KEIO×第141回明大祭デジタルスタンプラリー"
          description="京王電鉄株式会社とコラボしたデジタルスタンプラリー！"
          image="/images/project/keio-stamp.jpg"
          alt="KEIO×第141回明大祭デジタルスタンプラリー"
          tags={['11:00~18:00', 'メディア棟入口付近']}
        />
        <Project
          title="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
          description="明大前商店街振興組合とコラボした抽選企画！"
          image="/images/project/meidaimae-lottery.jpg"
          alt="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
          tags={['11:00~18:00', 'メディア棟入口横']}
        />
        <Project
          title="Stand by Memory"
          description="この一瞬を永遠に。"
          image="/images/project/memory.jpg"
          alt="Stand by Memory"
          tags={['10:00~17:00', '和泉ラーニングスクエアLS201教室']}
        />
        <Project
          title="ポンdeクエスト"
          description="スタンプを集めて魔王を倒せ！！"
          image="/images/project/ponde.jpg"
          alt="ポンdeクエスト"
          tags={['10:00~17:00', '和泉ラーニングスクエアLS506教室']}
        />
        <Project
          title="明大SAY！"
          description="共感と謎解きの世界へようこそ！"
          image="/images/project/meidaisay.jpg"
          alt="明大SAY！"
          tags={['10:00~18:00', '和泉ラーニングスクエアGB2-1~3・3-3･4']}
        />
        <Project
          title="跡巡ーあとめぐー"
          description="君は解ける？謎解きクイズラリー"
          image="/images/project/atomegu.jpg"
          alt="跡巡ーあとめぐー"
          tags={['10:00~17:00', '和泉ラーニングスクエアLS506教室、図書館前受付']}
        />
        <Project
          title="EXPOrts2025 in 明治"
          description="明大スポーツ万博、開幕！"
          image="/images/project/exports2025.jpg"
          alt="EXPOrts2025 in 明治"
          tags={['10:00~17:00', '和泉ラーニングスクエアLS406･407教室・4階アゴラ']}
        />
        <Project
          title="一灯一想"
          description="扉を開けるとランタンの世界へ！"
          image="/images/project/ittouisso.jpg"
          alt="一灯一想"
          tags={['10:00~17:00', '第一校舎403・405教室']}
        />
        <Project
          title="明治に恋する5秒前"
          description="This is Meijism."
          image="/images/project/mk5.jpg"
          alt="明治に恋する5秒前"
          tags={['10:00~17:30', 'メディア棟M402･403教室・4階ラウンジ']}
        />
        <Project
          title="I♡Fes!"
          description="踊って、叫んで、また好きになる。"
          image="/images/project/idol.jpg"
          alt="I♡Fes!"
          tags={['13:00~14:00', 'エントランスエリア']}
        />
        <Project
          title="Ending"
          description="「祭、終結」"
          image="/images/project/ending.jpg"
          alt="Ending"
          tags={['17:25~18:00', 'メインステージ']}
        />
      </div>
    )
  },
];

export default function TabsSwipe() {
  const [active, setActive] = useState(0);
  const contentRef = useRef<SwiperType | null>(null);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  buttonRefs.current = [];

  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const tabsWrapRef = useRef<HTMLDivElement | null>(null);

  const go = (idx: number) => {
    setActive(idx);

    enableIndicatorTransition();
    contentRef.current?.slideTo(idx);

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

  const lerpIndicator = (i: number, frac: number) => {
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

    const left = la + (lb - la) * Math.min(Math.max(frac, 0), 1);
    const width = wa + (wb - wa) * Math.min(Math.max(frac, 0), 1);
    setIndicator({ left, width });
  };


  const enableIndicatorTransition = () => {
    const el = indicatorRef.current;
    if (!el) return;
    el.style.transition = 'transform 200ms, width 200ms';
  };
  const disableIndicatorTransition = () => {
    const el = indicatorRef.current;
    if (!el) return;
    el.style.transition = 'none';
  };


  useEffect(() => {
    snapIndicatorToIndex(active);
    const onResize = () => snapIndicatorToIndex(active);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);

  }, []);

  return (
    <div className="w-full">
      <PageTitle>実行委員企画</PageTitle>
      <div className="h-6" />
      <PageContainer>
        <div className="relative">
          <div ref={tabsWrapRef} className="flex">
            {TABS.map((tab, index) => (
              <Fragment key={tab.key}>
                <TabButton
                  label={tab.label}
                  isActive={active === index}
                  onClick={() => go(index)}
                  ref={(el) => {
                    if (el) buttonRefs.current[index] = el;
                  }}
                />
                {index < TABS.length - 1 && (
                  <div className="w-1 bg-white/70 my-2" />
                )}
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

        <div className="h-6" />

        <Swiper
          spaceBetween={100}
          onSwiper={(s) => {
            contentRef.current = s;
            enableIndicatorTransition();
          }}
          onSlideChange={(s) => {
            setActive(s.activeIndex);
            enableIndicatorTransition();
            snapIndicatorToIndex(s.activeIndex);
          }}
          onProgress={(s, progress) => {
            disableIndicatorTransition();

            const maxSeg = TABS.length - 1;
            const t = Math.min(Math.max(progress * maxSeg, 0), maxSeg);
            const i = Math.floor(t);
            const frac = t - i;

            lerpIndicator(i, frac);
          }}
          onTouchStart={() => {
            disableIndicatorTransition();
          }}
          onTouchEnd={() => {
            enableIndicatorTransition();
          }}
          className="!mt-4"
        >
          {TABS.map((t) => (
            <SwiperSlide key={t.key}>
              <div>{t.content}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </PageContainer>
    </div>
  );
}

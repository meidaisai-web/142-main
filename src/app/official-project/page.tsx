'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import TabButton from '@/components/buttons/TabButton';
import PageTitle from '@/components/texts/PageTitle';
import PageContainer from '@/components/base/PageContainer';
import Link from 'next/link';
import Image from 'next/image';

type Tab = { key: string; label: string; content: React.ReactNode };

const TABS: Tab[] = [
  {
    key: 'tab1',
    label: '１日目',
    content: (
      <div className="flex flex-col md:flex-row md:flex-wrap gap-9 p-1">
        <Project
          title="Opening"
          description="今鳴り響く開幕の合図"
          image="/images/project/opening.png"
          alt="Opening"
          tags={['10:00~10:50', 'メインステージ']}
          link="/opening"
        />
        <Project
          title="松原小学校×明大祭"
          description="小学生と大学生とのコラボ企画！"
          image="/images/project/matsubara.png"
          alt="松原小学校×明大祭"
          tags={['10:00~18:00', 'メディア棟M509教室']}
          link="/matsubara"
        />
        <Project
          title="校友歓迎スペース"
          description="おかえりなさい！明大生"
          image="/images/project/alumni.png"
          alt="校友歓迎スペース"
          tags={['10:00~18:00', '第一校舎316･317教室']}
          link="/alumni"
        />
        <Project
          title="KEIO×第141回明大祭デジタルスタンプラリー"
          description="京王電鉄株式会社とコラボしたデジタルスタンプラリー！"
          image="/images/project/keio-stamp.png"
          alt="KEIO×第141回明大祭デジタルスタンプラリー"
          tags={['11:00~18:00', 'メディア棟入口付近']}
          link="/keio"
        />
        <Project
          title="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
          description="明大前商店街振興組合とコラボした抽選企画！"
          image="/images/project/meidaimae-lottery.jpg"
          alt="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
          tags={['11:00~18:00', 'メディア棟入口横']}
          link="/lottry-shop"
        />
        <Project
          title="Stand by Memory"
          description="この一瞬を永遠に。"
          image="/images/project/memory.png"
          alt="Stand by Memory"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS201教室']}
          link="/memory"
        />
        <Project
          title="ポンdeクエスト"
          description="スタンプを集めて魔王を倒せ！！"
          image="/images/project/quest.png"
          alt="ポンdeクエスト"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS506教室']}
          link='/quest'
        />
        <Project
          title="明大SAY！"
          description="共感と謎解きの世界へようこそ！"
          image="/images/project/say.png"
          alt="明大SAY！"
          tags={['10:00~18:00', '和泉ラーニングスクエアGB2-1~3・3-3･4']}
          link="/say"
        />
        <Project
          title="跡巡ーあとめぐー"
          description="君は解ける？謎解きクイズラリー"
          image="/images/project/rally.png"
          alt="跡巡ーあとめぐー"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS506教室、図書館前受付']}
          link="/rally"
        />
        <Project
          title="EXPOrts2025 in 明治"
          description="明大スポーツ万博、開幕！"
          image="/images/project/exports2025.png"
          alt="EXPOrts2025 in 明治"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS406･407教室・4階アゴラ']}
          link="/sports"
        />
        <Project
          title="一灯一想"
          description="扉を開けるとランタンの世界へ！"
          image="/images/project/wish.png"
          alt="一灯一想"
          tags={['10:00~18:00', '第一校舎403・405教室']}
          link="/wish"
        />
        <Project
          title="明治に恋する5秒前"
          description="This is Meijism."
          image="/images/project/mk5.png"
          alt="明治に恋する5秒前"
          tags={['10:00~18:00', 'メディア棟M402･403教室・4階ラウンジ']}
          link="/love"
        />
        <Project
          title="明大祭公式グッズ企画"
          description="手にすれば、もっと明大祭。"
          image="/images/project/goods.png"
          alt="明大祭公式グッズ企画"
          tags={['10:00~18:00', '和泉図書館前']}
          link="/goods"
        />
        <Project
          title="Meiji United Clash"
          description="共闘の刻ー賭けろ、すべてを。"
          image="/images/project/clash.png"
          alt="Meiji United Clash"
          tags={['17:00~18:00', 'メインステージ']}
          link="/clash"
        />
      </div>
    )
  },
  {
    key: 'tab2',
    label: '２日目',
    content: (
      <div className="flex flex-col md:flex-row md:flex-wrap gap-9 p-1">
        <Project
          title="Luminous Stage"
          description="響鳴せよ、輝く舞台で。"
          image="/images/project/luminous.png"
          alt="Luminous Stage"
          tags={['10:30~11:30', '和泉ラーニングスクエアLS101']}
          link="/luminous"
        />
        <Project
          title="松原小学校×明大祭"
          description="小学生と大学生とのコラボ企画！"
          image="/images/project/matsubara.png"
          alt="松原小学校×明大祭"
          tags={['10:00~18:00', 'メディア棟M509教室']}
          link="/matsubara"
        />
        <Project
          title="校友歓迎スペース"
          description="おかえりなさい！明大生"
          image="/images/project/alumni.png"
          alt="校友歓迎スペース"
          tags={['10:00~18:00', '第一校舎316･317教室']}
          link="/alumni"
        />
        <Project
          title="KEIO×第141回明大祭デジタルスタンプラリー"
          description="京王電鉄株式会社とコラボしたデジタルスタンプラリー！"
          image="/images/project/keio-stamp.png"
          alt="KEIO×第141回明大祭デジタルスタンプラリー"
          tags={['11:00~18:00', 'メディア棟入口付近']}
          link="/keio"
        />
        <Project
          title="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
          description="明大前商店街振興組合とコラボした抽選企画！"
          image="/images/project/meidaimae-lottery.png"
          alt="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
          tags={['11:00~18:00', 'メディア棟入口横']}
          link="/lottry-shop"
        />
        <Project
          title="Stand by Memory"
          description="この一瞬を永遠に。"
          image="/images/project/memory.png"
          alt="Stand by Memory"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS201教室']}
          link="/memory"
        />
        <Project
          title="ポンdeクエスト"
          description="スタンプを集めて魔王を倒せ！！"
          image="/images/project/quest.png"
          alt="ポンdeクエスト"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS506教室']}
          link='/quest'
        />
        <Project
          title="明大SAY！"
          description="共感と謎解きの世界へようこそ！"
          image="/images/project/say.png"
          alt="明大SAY！"
          tags={['10:00~18:00', '和泉ラーニングスクエアGB2-1~3・3-3･4']}
          link="/say"
        />
        <Project
          title="跡巡ーあとめぐー"
          description="君は解ける？謎解きクイズラリー"
          image="/images/project/rally.png"
          alt="跡巡ーあとめぐー"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS506教室、図書館前受付']}
          link="/rally"
        />
        <Project
          title="EXPOrts2025 in 明治"
          description="明大スポーツ万博、開幕！"
          image="/images/project/exports2025.png"
          alt="EXPOrts2025 in 明治"
          tags={['10:00~18:00', '和泉ラーニングスクエアLS406･407教室・4階アゴラ']}
          link="/sports"
        />
        <Project
          title="一灯一想"
          description="扉を開けるとランタンの世界へ！"
          image="/images/project/wish.png"
          alt="一灯一想"
          tags={['10:00~18:00', '第一校舎403・405教室']}
          link="/wish"
        />
        <Project
          title="明治に恋する5秒前"
          description="This is Meijism."
          image="/images/project/mk5.png"
          alt="明治に恋する5秒前"
          tags={['10:00~18:00', 'メディア棟M402･403教室・4階ラウンジ']}
          link="/love"
        />
        <Project
          title="明大祭公式グッズ企画"
          description="手にすれば、もっと明大祭。"
          image="/images/project/goods.png"
          alt="明大祭公式グッズ企画"
          tags={['10:00~18:00', '和泉図書館前']}
          link="/goods"
        />
        <Project
          title="UNI ROCK FES"
          description="響け、叫べ、ひとつになれ。"
          image="/images/project/rock.png"
          alt="UNI ROCK FES"
          tags={['13:40~14:25', 'メインステージ']}
          link="/fes"
        />
        <Project
          title="中夜祭"
          description="Description for Day 2 Project"
          image="/images/project/midnight.png"
          alt="中夜祭"
          tags={['17:10~18:00', 'メインステージ']}
          link="/midnight"
        />
      </div>
    )
  },
  {
    key: 'tab3',
    label: '３日目',
    content: (
      <div className="flex flex-col md:flex-row md:flex-wrap gap-9 p-1">
        <Project
          title="松原小学校×明大祭"
          description="小学生と大学生とのコラボ企画！"
          image="/images/project/matsubara.png"
          alt="松原小学校×明大祭"
          tags={['10:00~18:00', 'メディア棟M509教室']}
          link="/matsubara"
        />
        <Project
          title="校友歓迎スペース"
          description="おかえりなさい！明大生"
          image="/images/project/alumni.png"
          alt="校友歓迎スペース"
          tags={['10:00~18:00', '第一校舎316･317教室']}
          link="/alumni"
        />
        <Project
          title="KEIO×第141回明大祭デジタルスタンプラリー"
          description="京王電鉄株式会社とコラボしたデジタルスタンプラリー！"
          image="/images/project/keio-stamp.png"
          alt="KEIO×第141回明大祭デジタルスタンプラリー"
          tags={['11:00~18:00', 'メディア棟入口付近']}
          link="/keio"
        />
        <Project
          title="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
          description="明大前商店街振興組合とコラボした抽選企画！"
          image="/images/project/meidaimae-lottery.png"
          alt="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
          tags={['11:00~18:00', 'メディア棟入口横']}
          link="/lottry-shop"
        />
        <Project
          title="Stand by Memory"
          description="この一瞬を永遠に。"
          image="/images/project/memory.png"
          alt="Stand by Memory"
          tags={['10:00~17:00', '和泉ラーニングスクエアLS201教室']}
          link="/memory"
        />
        <Project
          title="ポンdeクエスト"
          description="スタンプを集めて魔王を倒せ！！"
          image="/images/project/quest.png"
          alt="ポンdeクエスト"
          tags={['10:00~17:00', '和泉ラーニングスクエアLS506教室']}
          link='/quest'
        />
        <Project
          title="明大SAY！"
          description="共感と謎解きの世界へようこそ！"
          image="/images/project/say.png"
          alt="明大SAY！"
          tags={['10:00~18:00', '和泉ラーニングスクエアGB2-1~3・3-3･4']}
          link="/say"
        />
        <Project
          title="跡巡ーあとめぐー"
          description="君は解ける？謎解きクイズラリー"
          image="/images/project/rally.png"
          alt="跡巡ーあとめぐー"
          tags={['10:00~17:00', '和泉ラーニングスクエアLS506教室、図書館前受付']}
          link="/rally"
        />
        <Project
          title="EXPOrts2025 in 明治"
          description="明大スポーツ万博、開幕！"
          image="/images/project/exports2025.png"
          alt="EXPOrts2025 in 明治"
          tags={['10:00~17:00', '和泉ラーニングスクエアLS406･407教室・4階アゴラ']}
          link="/sports"
        />
        <Project
          title="一灯一想"
          description="扉を開けるとランタンの世界へ！"
          image="/images/project/wish.png"
          alt="一灯一想"
          tags={['10:00~17:00', '第一校舎403・405教室']}
          link="/wish"
        />
        <Project
          title="明治に恋する5秒前"
          description="This is Meijism."
          image="/images/project/mk5.png"
          alt="明治に恋する5秒前"
          tags={['10:00~17:30', 'メディア棟M402･403教室・4階ラウンジ']}
          link="/love"
        />
        <Project
          title="明大祭公式グッズ企画"
          description="手にすれば、もっと明大祭。"
          image="/images/project/goods.png"
          alt="明大祭公式グッズ企画"
          tags={['10:00~18:00', '和泉図書館前']}
          link="/goods"
        />
        <Project
          title="I♡Fes!"
          description="踊って、叫んで、また好きになる。"
          image="/images/project/ifes.png"
          alt="I♡Fes!"
          tags={['13:00~14:00', 'エントランスエリア']}
          link="/idol"
        />
        <Project
          title="Ending"
          description="「祭、終結」"
          image="/images/project/ending.png"
          alt="Ending"
          tags={['17:25~18:00', 'メインステージ']}
          link="/ending"
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

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  link: string;
}

function Project({ title, description, image, alt, tags, link }: ProjectProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition duration-200 rounded-2xl"
    >
      <div className="bg-white rounded-2xl p-4 flex flex-row md:flex-col items-center gap-6 border-7 border-accent shadow-[10px_10px_0px_0px_#3571B8] w-full md:w-[380px] transition duration-200 transform hover:-translate-y-1 hover:-translate-x-1">
        <div className="w-1/2 md:w-full flex justify-center">
          <Image src={image} alt={alt} width={200} height={200} className="rounded-lg object-cover" />
        </div>
        <div className="flex-1 md:flex-none md:w-full flex flex-col gap-4">
          <h2 className="text-xl text-black font-bold">{title}</h2>
          <p className="text-base text-black">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-secondary rounded-full px-3 py-1 text-sm font-semibold">
                {`#${tag}`}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

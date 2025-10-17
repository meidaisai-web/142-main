"use client";

import TabsSwipe, { Tab } from '@/components/TabsSwipe';
import PageContainer from '@/components/base/PageContainer';
import PageTitle from '@/components/texts/PageTitle';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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

export default function OfficialProjectPage() {
  const tabs: Tab[] = [
    {
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
            tags={['10:00~18:00', 'メディア棠M509教室']}
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
            tags={['11:00~18:00', 'メディア棠入口付近']}
            link="/keio"
          />
          <Project
            title="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
            description="明大前商店街振興組合とコラボした抽選企画！"
            image="/images/project/meidaimae-lottery.jpg"
            alt="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
            tags={['11:00~18:00', 'メディア棠入口横']}
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
            link="/quest"
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
            tags={['10:00~18:00', 'メディア棠M402･403教室・4階ラウンジ']}
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
      ),
    },
    {
      label: '２日目',
      content: (
        <div className="flex flex-col md:flex-row md:flex-wrap gap-9 p-1">
          <Project
            title="Luminous Stage"
            description="光の演出で彩るステージ"
            image="/images/project/luminous.png"
            alt="Luminous Stage"
            tags={['10:00~18:00', 'メインステージ']}
            link="/luminous"
          />
          <Project
            title="松原小学校×明大祭"
            description="小学生と大学生とのコラボ企画！"
            image="/images/project/matsubara.png"
            alt="松原小学校×明大祭"
            tags={['10:00~18:00', 'メディア棠M509教室']}
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
            tags={['11:00~18:00', 'メディア棠入口付近']}
            link="/keio"
          />
          <Project
            title="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
            description="明大前商店街振興組合とコラボした抽選企画！"
            image="/images/project/meidaimae-lottery.jpg"
            alt="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
            tags={['11:00~18:00', 'メディア棠入口横']}
            link="/lottry-shop"
          />
          <Project
            title="ポンdeクエスト"
            description="スタンプを集めて魔王を倒せ！！"
            image="/images/project/quest.png"
            alt="ポンdeクエスト"
            tags={['10:00~18:00', '和泉ラーニングスクエアLS506教室']}
            link="/quest"
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
            tags={['10:00~18:00', 'メディア棠M402･403教室・4階ラウンジ']}
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
      ),
    },
    {
      label: '３日目',
      content: (
        <div className="flex flex-col md:flex-row md:flex-wrap gap-9 p-1">
          <Project
            title="松原小学校×明大祭"
            description="小学生と大学生とのコラボ企画！"
            image="/images/project/matsubara.png"
            alt="松原小学校×明大祭"
            tags={['10:00~18:00', 'メディア棠M509教室']}
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
            tags={['11:00~18:00', 'メディア棠入口付近']}
            link="/keio"
          />
          <Project
            title="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
            description="明大前商店街振興組合とコラボした抽選企画！"
            image="/images/project/meidaimae-lottery.jpg"
            alt="明大前商店街×明大祭～明大祭で当てるぞ！豪華景品～"
            tags={['11:00~18:00', 'メディア棠入口横']}
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
            link="/quest"
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
            tags={['10:00~17:30', 'メディア棠M402･403教室・4階ラウンジ']}
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
      ),
    },
  ];

  return (
    <div className='w-full'>
      <PageTitle>実行委員企画</PageTitle>
      <div className='h-6'/>
      <PageContainer>
        <TabsSwipe tabs={tabs} />
      </PageContainer>
    </div>
  )
}
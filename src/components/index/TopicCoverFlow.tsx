"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
  Pagination,
} from "swiper/modules";
import IndexTitle from "../texts/IndexTitle";

type Topic = {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const topics: Topic[] = [
  {
    id: "events",
    title: "学内イベントカレンダー",
    href: "/events",
    imageSrc: "/images/goods/acrylic.jpg",
    imageAlt: "キャンパスで開催されるイベントの風景",
  },
  {
    id: "clubs",
    title: "部活・サークル特集",
    href: "/circle",
    imageSrc: "/images/goods/acrylic.jpg",
    imageAlt: "サークル活動を楽しむ学生たち",
  },
  {
    id: "support",
    title: "学生サポートガイド",
    href: "/support",
    imageSrc: "/images/goods/acrylic.jpg",
    imageAlt: "相談カウンターで話をする学生",
  },
  {
    id: "library",
    title: "図書館のおすすめ",
    href: "/library",
    imageSrc: "/images/goods/acrylic.jpg",
    imageAlt: "本棚が並ぶ図書館の様子",
  },
  {
    id: "career",
    title: "キャリアセンター通信",
    href: "/career",
    imageSrc: "/images/goods/acrylic.jpg",
    imageAlt: "面談で将来について相談する学生",
  },
];

export default function TopicCoverFlow() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative px-4 py-16 sm:py-20">
      <div
        className="absolute inset-x-0 top-12 -z-10 h-72 bg-gradient-to-b from-secondary/40 via-transparent to-transparent blur-3xl opacity-60"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <IndexTitle>注目のトピック</IndexTitle>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            写真で雰囲気を感じながら、最新のおすすめコンテンツをチェックしましょう。
          </p>
        </div>

        <div className="mt-16">
          <Swiper
            className="topic-coverflow"
            modules={[EffectCoverflow, Pagination, Mousewheel, Keyboard, Autoplay]}
            effect="coverflow"
            coverflowEffect={{
              stretch: 20,
              depth: 200,
              rotate: -20,
              modifier: 1,
              slideShadows: false,
            }}
            centeredSlides
            loop
            autoplay={{ delay: 4200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            slidesPerGroup={1}
            spaceBetween={24}
            breakpoints={{
              540: {
                slidesPerView: 1,
                spaceBetween: 28,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 36,
                coverflowEffect: { stretch: 120, depth: 220 },
              },
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {topics.map((topic, index) => {
              const isActive = index === activeIndex;

              return (
                <SwiperSlide
                  key={topic.id}
                  className="!h-auto w-full"
                >
                  <Link
                    href={topic.href}
                    className={`group flex h-[28rem] w-64 flex-col overflow-hidden rounded-[1.75rem] bg-white/5 ring-1 ring-white/10 transition-transform duration-500 backdrop-blur-md ${
                      isActive ? "scale-100" : "scale-95 hover:scale-100"
                    }`}
                    aria-label={`${topic.title}へ移動`}
                  >
                    <div className="relative h-2/3 w-full overflow-hidden">
                      <Image
                        src={topic.imageSrc}
                        alt={topic.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 80vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={index === 0}
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-4 px-6 pb-8 pt-6">
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {topic.title}
                      </h3>
                    </div>

                    <span
                      className={`pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-b opacity-0 transition-opacity duration-500 ${
                        isActive
                          ? "from-white/10 to-transparent opacity-100"
                          : "from-white/0 to-white/0 group-hover:opacity-60"
                      }`}
                      aria-hidden
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .topic-coverflow {
          padding-bottom: 3.75rem;
        }

        .topic-coverflow .swiper-pagination {
          bottom: 0;
        }

        .topic-coverflow .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          width: 10px;
          height: 10px;
          opacity: 1;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .topic-coverflow .swiper-pagination-bullet-active {
          background: #ffffff;
          transform: scale(1.3);
        }

        .topic-coverflow .swiper-slide {
          transition: transform 0.6s ease, opacity 0.6s ease;
        }

        .topic-coverflow .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.9;
        }

        @media (prefers-reduced-motion: reduce) {
          .topic-coverflow .swiper-slide,
          .topic-coverflow .swiper-pagination-bullet {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

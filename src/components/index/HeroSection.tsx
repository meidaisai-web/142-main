"use client";

import Image from "next/image";
import Link from "next/link";
import { notoSerifJP } from "@/utils/fonts";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden h-[100svh] w-screen">
      {/* ヘッダーの高さ分だけ余白を作る */}
      <div className="w-full h-18" />
      <div className="relative h-[calc(100svh-4.5rem)] w-full">
        {/* 微妙にはみ出て白い線になってしまうことがあったため、ヒーローセクションの高さより少し小さくした白背景を追加 */}
        <div className="absolute -z-10 bg-white h-[calc(100svh-5.5rem)] w-full" />
        <Image
          src="/images/svg/heroSection/background-accent.svg"
          alt="Background Image"
          width={1920}
          height={1080}
          className="absolute w-[70vw] h-[50svh] object-fill z-0 min-w-[40rem] mr-[30vw]"
        />
        <Image
          src="/images/svg/heroSection/background-secondary.svg"
          alt="Background Image"
          width={1920}
          height={1080}
          className="absolute w-[80vw] max-w-lg h-[100svh] object-fill z-10 min-w-80"
        />
        <Image
          src="/images/svg/heroSection/background-primary.svg"
          alt="Background Image"
          width={1920}
          height={1080}
          className="absolute w-full h-[40%] bottom-0 object-fill z-20"
        />
        <div className="w-[63vw] h-[30svh]">
          <Image
            src="/images/svg/heroSection/title.svg"
            alt="第141回明大祭"
            width={1200}
            height={600}
            className="absolute ml-20 mt-10 w-64 min-[500px]:w-[45vw] md:w-[45vw] max-w-2xl"
          />
        </div>
        <div className="relative transform translate-y-[1svh] translate-x-5 sm:-translate-x-12">
          {/* ロゴとコンセプト画像 */}
          <Image
            src="/images/svg/official/logo-concept.svg"
            alt="熱狂の、その先へ。"
            width={1200}
            height={600}
            className="absolute right-0 hidden sm:block w-[60vw] max-h-[30svh] object-contain"
          />
        </div>
        {/* ロゴだけ画像 */}
        <div className="absolute w-screen h-screen flex items-center justify-end top-0">
          <Image
            src="/images/svg/official/logo.svg"
            alt="第141回明大祭ロゴ"
            width={1200}
            height={600}
            className="w-[45vw] ml-[35vw] max-w-72 max-h-[40svh] mr-[10vw] transform -translate-y-[10vw] sm:hidden object-contain"
          />
        </div>
        <PlaceTime />
        <div className="absolute w-3/5 max-w-80 flex flex-col items-end bottom-0 right-0">
          {/* 熱狂のその先へ（文字だけ）画像 */}
          <Image
            src="/images/svg/official/concept.svg"
            alt="熱狂の、その先へ。"
            width={1200}
            height={600}
            className="relative w-[70%] right-0 sm:hidden z-30 mr-5"
          />
          <AboutButton />
        </div>
      </div>
    </div>
  );
}

function PlaceTime() {
  return (
    <div className="absolute z-30 bottom-[20vh] left-5 w-[33vw]">
      <div className="flex flex-col items-start">
        <div className="flex items-end mb-4">
          <Image
            src="/images/svg/heroSection/open.svg"
            alt="開場"
            width={1200}
            height={600}
            className="flex w-[35%] max-w-20"
          />
          <Image
            src="/images/svg/heroSection/opentime.svg"
            alt="10:00"
            width={1200}
            height={600}
            className="flex w-[65%] h-auto mx-[3%] max-w-32"
          />
        </div>
        <div>
          <Image
            src="/images/svg/heroSection/date.svg"
            alt="2025年11月1日(土).2日(日).3日(月・祝) @明治大学和泉キャンパス"
            width={1200}
            height={600}
            className="w-full max-w-72 min-w-40 max-h-[8vh] object-contain"
          />
        </div>
      </div>
    </div>
  )
}

function AboutButton() {
  return (
    <div className="relative p-5 h-28 sm:h-36 z-30 -right-14">
      <Link href='/about' className="whitespace-nowrap w-full h-full">
        <div className='-rotate-3 rounded-l-full border-4 border-e-0 border-secondary text-4xl py-3 pl-16 pr-24 text-center absolute'>
          <div className='opacity-0 flex'>
            明大祭とは
            <Image
              src="/images/svg/heroSection/arrow.svg"
              alt="Arrow Icon"
              width={60}
              height={60}
              className="ml-5 sm:ml-7 w-8 min-[375px]:w-10"
            />
          </div>
        </div>
        <div className={`flex items-center font-bold rounded-l-full hover:bg-accent-700 duration-100 bg-accent text-primary text-4xl py-3 pl-16 pr-24 relative z-10 ${notoSerifJP.className}`}>
          明大祭とは
          <AnimatePresence>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [-5, 10, -5] }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "easeInOut"
              }}
              className="w-8 min-[375px]:w-10"
            >
              <Image
                src="/images/svg/heroSection/arrow.svg"
                alt="Arrow Icon"
                width={60}
                height={60}
                className="ml-5 sm:ml-7 w-8 min-[375px]:w-10"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Link>
    </div>
  )
}
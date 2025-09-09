import Image from "next/image";
import Link from "next/link";
import { delaGothic } from "@/utils/fonts";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden h-screen w-screen">
      {/* ヘッダーの高さ分だけ余白を作る */}
      <div className="w-full h-18" />
      <div className="relative h-[calc(100vh-4.5rem)] w-full">
        {/* 微妙にはみ出て白い線になってしまうことがあったため、ヒーローセクションの高さより少し小さくした白背景を追加 */}
        <div className="absolute -z-10 bg-white h-[calc(100vh-5.5rem)] w-full" />
        <Image
          src="/images/svg/background-accent.svg"
          alt="Background Image"
          width={1920}
          height={1080}
          className="absolute w-[70vw] h-[50vh] object-fill z-0 min-w-[40rem] mr-[30vw]"
        />
        <Image
          src="/images/svg/background-secondary.svg"
          alt="Background Image"
          width={1920}
          height={1080}
          className="absolute w-[80vw] max-w-lg h-screen object-fill z-10 min-w-80"
        />
        <Image
          src="/images/svg/background-primary.svg"
          alt="Background Image"
          width={1920}
          height={1080}
          className="absolute w-full h-[40%] bottom-0 object-fill z-20"
        />

        <div className="absolute inset-0 flex flex-col z-30">
          <div className="w-[63vw] h-[30vh]">
            <Image
              src="/images/svg/title.svg"
              alt="第141回明大祭"
              width={1200}
              height={600}
              className="absolute ml-20 mt-10 w-64 min-[500px]:w-[45vw] md:w-[45vw] max-w-2xl"
            />
          </div>
          <div className="relative transform translate-y-[1vh] translate-x-5 sm:-translate-x-12">
            {/* ロゴとコンセプト画像 */}
            <Image
              src="/images/svg/logo-concept.svg"
              alt="熱狂の、その先へ。"
              width={1200}
              height={600}
              className="absolute right-0 hidden sm:block w-[60vw]"
            />
            {/* ロゴだけ画像 */}
            <Image
              src="/images/svg/logo.svg"
              alt="第141回明大祭ロゴ"
              width={1200}
              height={600}
              className="absolute w-[48vw] ml-[35vw] transform translate-x-10 -translate-y-6 sm:hidden object-contain"
            />
          </div>
        </div>
        <PlaceTime />
        <div className="absolute w-3/5 max-w-80 flex flex-col items-end bottom-0 right-0">
          {/* 熱狂のその先へ（文字だけ）画像 */}
          <Image
            src="/images/svg/concept.svg"
            alt="熱狂の、その先へ。"
            width={1200}
            height={600}
            className="relative w-4/5 right-0 sm:hidden z-30 mr-5"
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
      <div className="flex items-end mb-4">
        <Image
          src="/images/svg/open.svg"
          alt="開場"
          width={1200}
          height={600}
          className="flex w-[35%] max-w-20"
        />
        <Image
          src="/images/svg/opentime.svg"
          alt="10:00"
          width={1200}
          height={600}
          className="flex w-[65%] h-auto mx-[3%] max-w-32"
        />
      </div>
      <div>
        <Image
          src="/images/svg/date.svg"
          alt="2025年11月1日(土).2日(日).3日(月・祝) @明治大学和泉キャンパス"
          width={1200}
          height={600}
          className="w-full max-w-72 min-w-40"
        />
      </div>
    </div>
  )
}

function AboutButton() {
  return (
    <div className="relative p-5 h-28 z-30 -right-14">
      <Link href='/about' className="whitespace-nowrap w-full h-full">
        <div className='-rotate-3 rounded-l-full border-4 border-e-0 border-secondary text-4xl py-3 pl-16 pr-24 text-center absolute'>
          <div className='opacity-0 flex'>
            明大祭とは
            <Image
              src="/images/svg/arrow.svg"
              alt="Arrow Icon"
              width={60}
              height={60}
              className="ml-5 sm:ml-10 w-8 min-[375px]:w-10"
            />
          </div>
        </div>
        <div className={`flex items-center font-bold rounded-l-full hover:bg-accent-700 duration-100 bg-accent text-primary text-4xl py-3 pl-16 pr-24 relative z-10 ${delaGothic.className}`}>
          明大祭とは
          <Image
            src="/images/svg/arrow.svg"
            alt="Arrow Icon"
            width={60}
            height={60}
            className="ml-5 sm:ml-10 w-8 min-[375px]:w-10"
          />
        </div>
      </Link>
    </div>
  )
}
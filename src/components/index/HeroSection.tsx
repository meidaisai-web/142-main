"use client";

import Image from "next/image";
import Link from "next/link";
import { notoSerifJP } from "@/utils/fonts";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative flex justify-center overflow-hidden">
      <div className="w-full h-18" />
      <div className="absolute -z-10 w-screen h-screen overflow-hidden">
        {/* 微妙にはみ出て白い線になってしまうことがあったため、ヒーローセクションの高さより少し小さくした白背景を追加 */}
        <Image
          src="/images/svg/hero/background.svg"
          alt="Background Image"
          width={500}
          height={500}
          className="absolute w-full h-full object-cover"
        />
        <Image
          src="/images/svg/hero/shadow.svg"
          alt="Foreground Image"
          width={500}
          height={500}
          className="hidden md:block absolute right-0  h-full object-fit -top-40"
        />
        <Image
          src="/images/svg/hero/fireflower.svg"
          alt="Foreground Image"
          width={500}
          height={500}
          className="absolute 
           md:right-17 
           md:w-25 md:h-25 
           object-fit
           md:bottom-57"
        />
        <Image
          src="/images/svg/hero/fireflower.svg"
          alt="Foreground Image"
          width={500}
          height={500}
          className="absolute left-10  w-25 h-25 object-fit top-30"
        />
      </div>
      <div className="absolute w-4/5 h-screen flex items-center justify-center gap-25 top-0">
        <div className="relative w-2/5 aspect-square">
          <div className="absolute aspect-square rounded-full blur-lg bg-white w-full h-full" />

          {/* ロゴのPC版 */}
          <Image
            src="/images/svg/hero/142logo.svg"
            alt="第142回明大祭ロゴ"
            width={250}
            height={250}
            className="hidden md:block absolute z-10 m-auto top-10 left-0 right-0 bottom-0 w-3/4 h-3/4"
          />


          {/*ロゴのスマホ版*/}
          <Image
            src="/images/svg/hero/142logo.svg"
            alt="第142回明大祭ロゴ"
            width={200}
            height={200}
            className="block md:hidden absolute z-20 left-1/2 -translate-x-1/2 top-[18vh] w-[55vw] max-w-[350px]"
          />
        </div>
        {/* 第142回明大祭のPC版 */}
        <div className="flex flex-col items-center gap-4 w-1/2">
          <Image
            src="/images/svg/hero/meidaisai.svg"
            alt="第142回明大祭"
            width={550}
            height={550}
            className="hidden md:block drop-shadow-[0_6px_6px_rgba(0,0,0,0.4)]"
          />
        </div>

        {/* 第142回明大祭のスマホ版 */}
        <Image
          src="/images/svg/hero/meidaisai.svg"
          alt="第142回明大祭"
          width={500}
          height={150}
          className="block md:hidden absolute z-20
             top-[68vh] left-1/2 -translate-x-1/2
             w-[80vw] h-auto"
        />
        {/* キャッチコピーPC版 */}
        <div className="border-b-4 border-primary px-10 pb-4">
          <Image
            src="/images/svg/hero/concept.svg"
            alt="鳴らせ鼓動、響かせ青春"
            width={440}
            height={440}
            className="hidden md:block drop-shadow-[0_6px_6px_rgba(0,0,0,0.4)]"
          />
        </div>

        {/* キャッチコピーのスマホ版 */}
        <Image
          src="/images/svg/hero/concept.svg"
          alt="鳴らせ鼓動、響かせ青春"
          width={440}
          height={440}
          className="block md:hidden absolute z-30
             top-[79vh] left-1/2 -translate-x-1/2
             w-[65vw] h-auto"


        />
      </div>
    </div>



  );
}

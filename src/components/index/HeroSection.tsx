"use client";

import Image from "next/image";
import Link from "next/link";
import { notoSerifJP } from "@/utils/fonts";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative flex justify-center">
      <div className="w-full h-18 " />
      <div className="absolute -z-10 w-screen h-screen overflow-hidden">
        {/* 微妙にはみ出て白い線になってしまうことがあったため、ヒーローセクションの高さより少し小さくした白背景を追加 */}
        <img
          src="/images/svg/hero/background.jpg"
          alt="Background Image"
          width={500}
          height={500}
          className="absolute !w-full !h-full object-fill"
        />
        
        <Image
          src="/images/svg/hero/shadow.svg"
          alt="Foreground Image"
          width={500}
          height={500}
          className="hidden sm:block absolute right-0  h-full object-fit -top-40"
        />
         <Image
          src="/images/svg/hero/fireflower.svg"
          alt="Foreground Image"
          width={500}
          height={500}
          className="absolute left-10  w-25 h-25 object-fit top-30"
        />
      </div>
      <div className="absolute w-4/5 h-screen flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-25 top-0">
        <div className="relative w-2/3 sm:w-2/5 aspect-square max-w-80 min-w-50">
          <div className="absolute aspect-square rounded-full blur-lg bg-white w-full h-full" />
          <Image
            src="/images/svg/hero/142logo.svg"
            alt="第142回明大祭ロゴ"
            width={250}
            height={250}
            className="absolute z-10 m-auto top-10 left-0 right-0 bottom-0 w-4/5"
          />
          
        </div>

        <div className="relative flex flex-col items-center gap-4 w-4/5 sm:w-1/2">
          <Image
            src="/images/svg/hero/meidaisai.svg"
            alt="第142回明大祭"
            width={550}
            height={550}
            className=" drop-shadow-[0_6px_6px_rgba(0,0,0,0.4)]"  
          />
          <div className="sm:border-b-4 border-primary px-10 pb-4">
            <Image
              src="/images/svg/hero/concept.svg"
              alt="鳴らせ鼓動、響かせ青春"
              width={440}
              height={440}
              className="drop-shadow-[0_6px_6px_rgba(0,0,0,0.4)]"  
            />
          </div>
          <Image
            src="/images/svg/hero/fireflower.svg"
            alt="Foreground Image"
            width={500}
            height={500}
            className="absolute w-25 h-25 object-fit -translate-y-20 -right-20 sm:translate-0 sm:-bottom-10"
          />
        </div>
      </div>

    </div>
  );
}

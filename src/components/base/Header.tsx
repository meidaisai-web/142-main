'use client';

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Hamburger from "./Hamburger/Hamburger";

// 雲を同じ方向に振り子のように揺らす(動きを減らす設定の人には停止)
const MotionLink = motion.create(Link);
const cloudSwing = {
  animate: { rotate: [-2.5, 2.5, -2.5] },
  transition: { duration: 3, ease: "easeInOut" as const, repeat: Infinity },
};

export default function Header() {
  const reduceMotion = useReducedMotion();
  const swing = reduceMotion ? {} : cloudSwing;
  const [isOpenHamburger, setOpenHamburger] = useState(false);

  const pathname = usePathname()

  // ページ移動を検知
  const [prevPathname, setPrevPathname] = useState(pathname)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    setOpenHamburger(false)
  }

  // ハンバーガーメニューが開いてる時は裏のスクロールを無効化
  useEffect(() => {
    const body = document.body;

    if (isOpenHamburger) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isOpenHamburger]);

  const isHome = pathname === "/";
  return (
    <>
    <header className={`w-full ${isHome ? "bg-accent-300" : "bg-header-gradient"} flex justify-between items-center px-5 fixed opacity-100 h-14 z-50 top-0`}

>
      {/* 下層ページでのみ */}
      {!isHome && (
        <div className="absolute right-25 flex items-center gap-7 pointer-events-none inset-y-0">
          <Link href="/search" className="pointer-events-auto">
            <Image
              src="/images/header/search-white.svg"
              alt=""
              width={31}
              height={31}
              className="block"
            />
          </Link>

          <Link href="/map" className="pointer-events-auto">
            <Image
              src="/images/header/map-white.svg"
              alt=""
              width={31}
              height={31}
              className="block"
            />
          </Link>
        </div>
      )}

      <Link href="/" className="absolute left-5">
        <Image
          src="/images/svg/logo-white.svg"
          alt="Logo"
          width={42}
          height={42}
        />
      </Link>

        <HamburgerIcon isOpen={isOpenHamburger} setOpen={setOpenHamburger} />
        <Hamburger isOpen={isOpenHamburger} />
      </header>

      {isHome && (
        <div className="fixed right-[40px] max-sm:right-[15px] top-6 max-sm:top-[50px] z-[49] flex items-start gap-0 max-sm:gap-1 max-sm:-mr-2 sm:right-[30px] sm:gap-4">
          {/* 虫眼鏡 */}
          <MotionLink
            {...swing}
            style={{ transformOrigin: "top center" }}
            href="/search"
            aria-label="企画を検索"
            className="relative flex h-[80px] w-[89px] max-sm:-mr-4 items-start justify-center sm:h-[60px] sm:w-[88px] -top-1"
          >
            <Image
              src="/images/header/search.svg"
              alt="検索"
              width={200}
              height={160}
              className="h-[75px] w-[89px] object-contain sm:h-[150px] sm:w-[180px] sm:-translate-y-1 z-0"
            />
          </MotionLink>

          {/* マップ */}
          <MotionLink
            {...swing}
            style={{ transformOrigin: "top center" }}
            href="/map"
            aria-label="マップ"
            className="relative flex h-[85px] w-[97px] items-start justify-center sm:mt-4 sm:h-[60px] sm:w-[88px] -top-1"
          >
            <Image
              src="/images/header/map.svg"
              alt="マップ"
              width={200}
              height={160}
              className="h-[81px] w-[97px] object-contain sm:h-[130px] sm:w-[160px]"
            />
          </MotionLink>
        </div>
      )}
    </>
  );




interface HamburgerIconProps {
  isOpen: boolean;
  setOpen: (v: (prev: boolean) => boolean) => void;
}

function HamburgerIcon({ isOpen, setOpen }: HamburgerIconProps) {
  return (
    <motion.button
      className="translate-y-[3px] absolute cursor-pointer right-5 z-50"
      onClick={() => setOpen((v) => !v)}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 23 23"
        className="w-11 h-10"
      >
        {/* ↓アイコン */}
        <motion.path
          fill="transparent"
          strokeWidth="2.5"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" , stroke: "#ffffff"},
            open: { d: "M 3 16.5 L 17 2.5" , stroke: "#B19FCA" }
          }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="2.5"
          stroke="#ffffff"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="2.5"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" , stroke: "#ffffff" },
            open: { d: "M 3 2.5 L 17 16.346" , stroke: "#B19FCA" }
          }}
        />
      </motion.svg>
    </motion.button>
  )
}


}

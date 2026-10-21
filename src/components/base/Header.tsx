'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Hamburger from "./Hamburger/Hamburger";

export default function Header() {
  const [isOpenHamburger, setOpenHamburger] = useState(false);

  const pathname = usePathname()

  // ページ移動を検知
  useEffect(() => {
    setOpenHamburger(false)
  }, [pathname])

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
    <header className={`w-full ${isHome ? "bg-accent-300" : "bg-header-gradient"} flex justify-between items-center px-5 fixed opacity-100 h-14 z-50 top-0`}
>
      <Link href="/" className="absolute left-5">
        <Image
          src="/images/svg/logo-white.svg"
          alt="Logo"
          width={42}
          height={42}
        />
      </Link>

          {/* 虫眼鏡・マップアイコン：トップページのみ表示 */}
      {isHome && (
        <div className="absolute right-[40px] max-sm:right-[15px] top-6 max-sm:top-[50px] z-40 flex items-start gap-0 max-sm:-mr-2 sm:right-[30px] sm:gap-4">

          {/* 虫眼鏡 */}
          <Link
            href="/search"
            aria-label="企画を検索"
            className="cloud-swing relative flex h-[80px] w-[90px] max-sm:-mr-4 items-start justify-center sm:h-[60px] sm:w-[88px]"
          >
            <Image
              src="/images/header/search.svg"
              alt="検索"
              width={200}
              height={160}
              className="h-[75px] w-[90px] object-contain sm:h-[150px] sm:w-[180px] sm:-translate-y-1"
            />
          </Link>

          {/* マップ */}
          <Link
            href="/map"
            aria-label="マップ"
            className="cloud-swing cloud-swing-delayed relative flex h-[85px] w-[100px] items-start justify-center sm:mt-4 sm:h-[60px] sm:w-[88px]"
          >
            <Image
              src="/images/header/map.svg"
              alt="マップ"
              width={200}
              height={160}
              className="h-[82px] w-[100px] object-contain sm:h-[130px] sm:w-[160px]"
            />
          </Link>
        </div>
      )}

      <HamburgerIcon isOpen={isOpenHamburger} setOpen={setOpenHamburger} />
      <Hamburger isOpen={isOpenHamburger} />
    </header>
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

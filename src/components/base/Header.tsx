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

  if (pathname === "/fight-vote") return null;

  return (
    <header className="w-full bg-primary-trans flex justify-between items-center px-5 fixed opacity-100 h-18 z-50">
      <Link href="/" className="absolute left-5 z-50">
        <Image
          src="/images/svg/official/logo-white.svg"
          alt="Logo"
          width={40}
          height={40}
          className="h-11"
        />
      </Link>

      <HamburgerIcon isOpen={isOpenHamburger} setOpen={setOpenHamburger} />
      <Hamburger isOpen={isOpenHamburger} />
    </header>
  );
}




interface HamburgerIconProps {
  isOpen: boolean;
  setOpen: (v: (prev: boolean) => boolean) => void;
}

function HamburgerIcon({ isOpen, setOpen }: HamburgerIconProps) {
  return (
    <motion.button
      className="absolute cursor-pointer right-6 z-50"
      onClick={() => setOpen((v) => !v)}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        className="w-11 h-10"
      >
        {/* ↓アイコン */}
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="#605D66"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="#605D66"
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
          strokeWidth="3"
          stroke="#605D66"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </motion.svg>
    </motion.button>
  )
}
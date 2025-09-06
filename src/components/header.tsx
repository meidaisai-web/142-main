import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-primary-trans flex justify-between items-center px-5 fixed opacity-100 bg primary">
      <Image 
      src="/images/svg/logo-white.svg" 
      alt="Logo" 
      width={40} 
      height={40} 
      />

      <ul className="flex gap-8 items-center py-5">
        {/* 35rem以上 */}
        <li className="max-[37rem]:hidden">
          <Link href= "/guest" className="flex gap-5 my-auto text-white font-bold">ご来場者のみなさまへ</Link>
        </li>
        <li className="max-[37rem]:hidden">
          <Link href="/search" className="flex gap-5 my-auto text-white font-bold">特集</Link>
        </li>
        <li className="max-[37rem]:hidden">
          <Link href="/participation"  className="flex gap-5 my-auto text-white font-bold">企画を探す</Link>
        </li>

        {/* 35rem以下 */}
        <li className="hidden max-[37rem]:flex gap-2 items-center">
          
          <Image
            src="/images/svg/people2.png"
            alt="people2"
            width={30}
            height={30}
          />
          <Image
            src="/images/svg/point2.png"
            alt="Point2"
            width={26}
            height={30}
            style={{ margin: "3px 15px 3px 15px" }}
          />
          <Image
            src="/images/svg/glass-white.svg"
            alt="Mark 2"
            width={25}
            height={20}
          />
        </li>
      </ul>

      {/* ハンバーガーアイコンとロゴ(上)は常に表示 */}
      <Image
        src="/images/svg/hamburgerIcon.svg"
        alt="Hamburger"
        width={25}
        height={10}
        className="relative"
      />
    </header>
  );
}
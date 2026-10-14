"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  target?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  target,
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  const buttonClassName = `
    flex items-center justify-center gap-1 px-6 py-2 rounded-full
    bg-secondary text-white transition-colors duration-100
    hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-secondary
    ${disabled ? "opacity-50 pointer-events-none" : ""}
    ${className}
  `;

  const content = (
    <>
      <span className="whitespace-nowrap text-sm font-bold">{children}</span>
      <Image
        src="/images/svg/arrow-white.svg"
        width={20}
        height={20}
        alt=""
        className="w-3 h-3 select-none"
      />
    </>
  );

  // 遷移先がない場合と無効時は、ページ移動しないボタンとして扱う。
  if (!href || disabled) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={buttonClassName}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={buttonClassName}
    >
      {content}
    </Link>
  );
}

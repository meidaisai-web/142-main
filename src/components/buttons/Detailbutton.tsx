"use client";

import { useState } from "react";
import Link from "next/link";
import type { ReactNode } from "react";

type DetailButtonProps = {
  href?: string;
  className?: string;
  children?: ReactNode;
};

export default function DetailButton({
  href,
  className = "",
  children,
}: DetailButtonProps) {
  const [isAnimated, setIsAnimated] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  return (
    <Link
      href={href ?? "#"}
      className={`${className} inline-block`}
    >
      <div 
        className="w-[150px]"
        onMouseEnter={() => {
          setIsAnimated(false);
        
          setAnimationKey((prev) => prev + 1);

          requestAnimationFrame(() => {
            setIsAnimated(true);
          });
        }}
      >
        
        <span 
            className="
                block
                text-center
                text-[15px]
                font-medium
                tracking-[0.04em]
                leading-[1.2]
                text-text
                [text-shadow:0px_4px_3px_rgba(80,80,80,0.35)]
                mb-[1px]
            "
        >
            {children}
        </span>

        <div 
          key={animationKey}
          className="relative w-[150px] h-[14px] overflow-hidden"
        >

          <div
              className={`
                absolute
                left-0
                top-[6px]
                w-[150px]
                h-[1px]
                transition-transform
                duration-[800ms]
                ease-in-out
                ${
                  isAnimated
                    ? "translate-x-[150px]"
                    : "translate-x-0"
                }
              `}
            >
              <span 
                className="
                  absolute
                  left-0
                  top-0
                  w-[150px]
                  h-[1px]
                  bg-text
                  shadow-[0px_4px_3px_rgba(80,80,80,0.35)]
                "
            />

            <span 
              className="
                absolute
                right-0
                top-0
                w-[13px]
                h-[1px]
                bg-text
                rotate-[40deg]
                origin-right
                shadow-[0px_4px_3px_rgba(80,80,80,0.35)]
              "
            />
          </div>

          <div
            className={`
              absolute 
              left-0
              top-[6px]
              w-[150px] 
              h-[1px]
              transition-transform
              duration-[800ms]
              delay-[800ms]
              ease-in-out
              ${
                isAnimated
                  ? "translate-x-0"
                  : "translate-x-[-150px]"
              }
            `}
          
          >
            <span 
              className="
                absolute
                left-0
                top-0
                w-[150px]
                h-[1px]
                bg-text
                shadow-[0px_4px_3px_rgba(80,80,80,0.35)]
              "
            />

            <span 
              className="
                absolute
                right-0
                top-0
                w-[13px]
                h-[1px]
                bg-text
                rotate-[40deg]
                origin-right
                shadow-[0px_4px_3px_rgba(80,80,80,0.35)]
              "
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

type CountdownProps = {
  className?: string;
};

export default function Countdown({ }: CountdownProps) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    let result = null;

    if (month === 8) {
      result = 91 - day;
    } else if (month === 9) {
      result = 60 - day;
    } else if (month === 10) {
      result = 30 - day;
    }

    setLeft(result);
  }, []);

  return (
    <div>
      <div className="relative w-full flex items-center justify-center">
        <div className="absolute w-full z-0 pointer-events-none">
          <img
            src="/images/countdown/belt.png"
            alt="帯"
            className="w-full h-40 sm:h-62 md:h-70 object-fill"
          />
        </div>
        <div className="sm:flex w-full justify-between items-center gap-16 px-4 sm:px-10 lg:px-20">
          <div className="relative w-2/3 min-w-58 sm:w-full max-w-140">
            <Image
              src="/images/countdown/DayLocate.svg"
              alt="DayLocate"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute sm:relative w-fit right-6 sm:right-auto flex flex-col items-end sm:items-start justify-start mt-2 sm:mt-0">
            <p className="absolute font-black text-primary-700 text-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] text-nowrap z-10 -mt-6">
              <span className="text-4xl sm:text-5xl">開催</span><span className="text-2xl sm:text-3xl">まで</span>
            </p>
            <div className="relative flex items-end justify-end">
              <div className="flex items-center justify-center w-28 sm:w-40 aspect-square">
                <Image
                  src="/images/countdown/circle.svg"
                  alt="Date"
                  width={250}
                  height={250}
                  className="w-full h-full absolute"
                />
                <p className="z-10 relative text-white text-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-5xl sm:text-7xl font-bold">
                  {left !== null ? left : ""}
                </p>
              </div>
              <div className="relative w-16 sm:w-20 aspect-square flex items-center justify-center -translate-x-6">
                <Image
                  src="/images/countdown/smallcircle.svg"
                  alt="小円"
                  width={100}
                  height={100}
                  className="w-full h-full absolute"
                />
                <p className="z-10 relative text-white text-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-4xl sm:text-5xl font-bold">
                  日
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CloudDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 -40 1537 449"
      className={`w-full h-full text-white ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 -15.6764C0 102.208 1537 -171.8872 1537 13.2632C1537 158.414 1537 215.351 1537 215.351H0C0 215.351 0 -133.561 0 -15.6764Z" />

      <path d="M1537 384.71C1537 266.987 0 500.761 0 355.81C0 210.859 0 154 0 154L1537 154C1537 154 1537 502.432 1537 384.71Z" />
    </svg>
  );
}

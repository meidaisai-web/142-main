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
    <h1>
      <div className="relative w-full">
        <div className="h-[180px] sm:h-[220px] md:h-[350px]">
          <CloudDivider />
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full z-0 pointer-events-none">
          <img
            src="/images/svg/line.svg"
            alt="帯"
            className="w-full h-[180px] sm:h-[220px] md:h-[350px] object-cover object-center"
          />
        </div>
          
        {/* 全体のコンテナ */}
        <div className="absolute top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-[30%] w-full z-10 pointer-events-none">
          
          {/* 💡 常にPCと同じ絶対配置ベースで、スマホ〜PCまで同じ間隔をキープします！ */}
          <div className="relative w-full h-[120px] sm:h-[150px] md:h-0 pointer-events-none px-4">
            
            {/* 左側：日時 */}
            <div className="absolute left-[5%] sm:left-[8%] md:left-[10%] top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-[20%] pointer-events-auto">
              <Image
                src="/images/svg/DayLocate.svg"
                alt="DayLocate"
                width={500}
                height={300}
                className="w-[clamp(200px,45vw,340px)] md:w-[clamp(260px,55vw,700px)] h-auto"
              />
            </div>
            
            {/* 右側：カウントダウンの箱 */}
            <div className="absolute right-[5%] sm:right-[8%] md:right-20 lg:right-28 top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-[10%] w-[clamp(110px,28vw,150px)] md:w-48 lg:w-57 pointer-events-auto">
              
              <Image 
                src="/images/svg/Ellipse 106.svg" 
                alt="Dayte" 
                width={250} 
                height={250} 
                className="w-full h-full relative top-[5%] md:top-7"
              />

              <div className="absolute -top-[5%] left-1/2 transform -translate-x-1/2 w-[90%]">
                <Image 
                  src="/images/svg/kaisai.svg" 
                  alt="開催まで" 
                  width={160} 
                  height={50} 
                  className="w-full h-full relative top-0 md:top-5"
                />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-6xl sm:text-7xl md:text-8xl font-bold mt-[8%] md:mt-15">
                  {left !== null ? left : ""}
                </p>
              </div>

              <div className="absolute -bottom-[5%] -right-[10%] w-[40%]">
                <Image 
                  src="/images/svg/Ellipse 106.svg" 
                  alt="小円" 
                  width={100} 
                  height={100} 
                  className="w-full h-full relative top-[5%] left-[5%] md:top-5 md:left-5" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image 
                    src="/images/svg/nichi.svg" 
                    alt="日" 
                    width={40} 
                    height={40} 
                    className="w-[45%] h-full relative top-[5%] left-[5%] md:top-5 md:left-5"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </h1>
  );
}

export function CloudDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1537 369"
      preserveAspectRatio="none"
      className={`w-full h-full text-white ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 24.3236C0 142.208 1537 -91.8872 1537 53.2632C1537 198.414 1537 255.351 1537 255.351H0C0 255.351 0 -93.561 0 24.3236Z" />
      <path d="M1537 344.71C1537 226.987 0 460.761 0 315.81C0 170.859 0 114 0 114L1537 114C1537 114 1537 462.432 1537 344.71Z" />
    </svg>
  );
}
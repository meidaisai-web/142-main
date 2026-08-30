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
      <div className="relative w-full ">
        <div className="w-full aspect-[1620/500]">
          <CloudDivider />
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full z-0 pointer-events-none">
          <img
            src="/images/svg/line.svg"
            alt="帯"
            className="w-full h-full"
          />
        </div>
          
        <div className="absolute top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-[30%] w-full z-10 pointer-events-none">
          
          <div className="relative w-full h-[120px] sm:h-[150px] md:h-0 pointer-events-none px-4">
            
            <div className="absolute left-[5%] sm:left-[8%] md:left-[10%] top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-[20%] pointer-events-auto">
              <Image
                src="/images/svg/DayLocate.svg"
                alt="DayLocate"
                width={500}
                height={300}
                className="w-[clamp(200px,45vw,340px)] md:w-[clamp(260px,55vw,700px)] h-auto"
              />
            </div>
            
            <div className="absolute right-[20%] sm:right-[8%] md:right-20 lg:right-28 top-[110%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-[10%] w-[clamp(110px,28vw,150px)] lg:w-48 xl:w-57 pointer-events-auto">
              
              <Image 
                src="/images/svg/circle.svg" 
                alt="Dayte" 
                width={250} 
                height={250} 
                className="w-full h-full relative top-[5%] lg:top-7"
              />

              <div className="absolute -top-[5%] left-[105%] sm:left-1/2 transform -translate-x-1/2 w-[90%]">
                <Image 
                  src="/images/svg/kaisaimade.svg" 
                  alt="開催まで" 
                  width={160} 
                  height={50} 
                  className="w-full h-full relative top-0 lg:top-5"
                />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-6xl sm:text-7xl lg:text-8xl font-bold mt-[8%] lg:mt-15">
                  {left !== null ? left : ""}
                </p>
              </div>

              <div className="absolute -bottom-[2%] -right-[20%] w-[40%]">
                <Image 
                  src="/images/svg/smallcircle.svg" 
                  alt="小円" 
                  width={100} 
                  height={100} 
                  className="w-full h-full relative top-[5%] left-[5%] lg:top-5 lg:left-5" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-5xl sm:text-5xl lg:text-6xl font-bold relative top-[1%] left-[5%] lg:top-5 lg:left-5">
                    日
                  </p>
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

import { useEffect, useState } from "react";
import Image from "next/image";
type CountdownProps = {
  className?: string;
};



export default function Countdown({  }: CountdownProps) {
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
      <main className="bg-top-gradient">
          <style>{`@import url('https://fonts.googleapis.com/css2?family=Zen+Antique+Soft&display=swap');`}</style>
      <div className="relative w-full">
        <div className="w-full h-[60vh] md:h-[60vh] relative">
          <Image src="/images/svg/Group 196.svg" alt="Dayte" fill className="object-cover" />
        </div>
        <div className="absolute bottom-[10%] md:bottom-[20%] left-0 w-full px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center md:items-center justify-between z-10 pointer-events-none gap-8 md:gap-0">
          <div className="w-full md:w-[60%] lg:w-[65%] max-w-[800px] mb-8 md:mb-0 pointer-events-auto">
            <Image src="/images/svg/DayLocate.svg" alt="DayLocate" width={500} height={300} className="w-full h-auto"/>
          </div>
          <div className="relative w-36 sm:w-40 md:w-48 lg:w-56 self-center md:self-end pointer-events-auto">
            <Image src="/images/svg/Ellipse 106.svg" alt="Dayte" width={250} height={250} className="w-full h-auto"/>
            <div className="absolute -top-[5%] left-1/2 transform -translate-x-1/2 w-[90%]">
              <Image src="/images/svg/kaisai.svg" alt="Dayte" width={160} height={50} className="w-full h-auto"/>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p
                style={{ fontFamily: "'Zen Antique Soft', serif" }}
                className="text-[#FFFFFF] text-5xl sm:text-6xl md:text-7xl font-bold mt-2 md:mt-4"
              >
                {left !== null ? left : ""}
              </p>
            </div>
            <div className="absolute -bottom-[5%] -right-[10%] w-[40%]">
              <Image 
                src="/images/svg/Ellipse 106.svg" 
                alt="小円" 
                width={100} 
                height={100} 
                className="w-full h-auto"
              />
                <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src="/images/svg/nichi.svg" 
                  alt="日" 
                  width={40} 
                  height={40} 
                  className="w-[45%] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
    </h1>
  );
}

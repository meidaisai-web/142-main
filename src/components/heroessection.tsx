import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white h-screen flex justify-center">
      <Image
        src="/images/svg/background-accent.svg"
        alt="Background Image"
        width={1920}
        height={1080}
        className="absolute w-[70vw] h-[50vh] object-fill z-10 min-w-[40rem] mr-[30vw]"
      />
      <Image
        src="/images/svg/background-secondary.svg"
        alt="Background Image"
        width={1920}
        height={1080}
        className="absolute w-[80vw] h-screen object-fill z-20 min-w-[40rem] mr-[20vw]"
      />
      <Image
        src="/images/svg/background-primary.svg"
        alt="Background Image"
        width={1920}
        height={1080}
        className="absolute w-full mt-[60vh] h-[40vh] object-fill z-30"
      />

      <div className="absolute inset-0 flex flex-col z-30">
        <div className="w-[63vw] h-[30vh]">
          <Image
            src="/images/svg/title.svg"
            alt="第141回明大祭"
            width={1200}
            height={600}
            className="ml-[10vw] sm:mt-[5vh] mt-[7vh] transform -translate-x-10 -translate-y-8 sm:w-[45vw] sm:transform sm:-translate-y-3 sm:translate-x-0 md:w-[40vw] lg:w-[35vw] lg:transform lg:translate-x-5"
          />
        </div>
        <div className="md:w-[90vw] h-[40vh] w-[100vw] transform translate-y-12 translate-x-7">
          {/* 学祭ロゴと熱狂画像 */}
          <Image
            src="/images/svg/logo-concept.svg"
            alt="熱狂のその先に"
            width={1200}
            height={600}
            className="w-[55vw] h-[20vh] mr-[5%] ml-[30%] mt-[10%] transform -translate-y-25 translate-x-10 md:block hidden md:w-[60vw] md:h-[30vh] md:transform md:-translate-y-35 md:translate-x-18 lg:w-[60vw] lg:h-[30vh] lg:transform lg:-translate-y-35 lg:translate-x-28"
          />
          {/* ロゴだけ画像 */}
          <Image
            src="/images/svg/logo.svg"
            alt="第141回明大祭ロゴ"
            width={1200}
            height={600}
            className="w-[60vw] h-[35vh] ml-[30vw] transform translate-x-10 -translate-y-15 md:hidden"
          />

          {/* 熱狂のその先へ（文字だけ）画像 */}
          <Image
            src="/images/svg/concept.svg"
            alt="Line Decoration"
            width={1200}
            height={600}
            className="w-[43vw] h-[40vh] ml-[50vw] mb-[10vh] transform -translate-y-8 sm:w-[38vw] sm:h-[38vh] sm:transform sm:translate-x-10 sm:-translate-y-5 md:hidden"
          />
        </div>
        {/* 開場時間、場所 */}
        <div className="flex w-[50vw] h-[5vh] items-end mb-[2%]">
          <Image
            src="/images/svg/open.svg"
            alt="Hero Image 2"
            width={1200}
            height={600}
            className="flex w-[20%] h-auto ml-[3%] lg:w-[15%]"
          />
          <Image
            src="/images/svg/opentime.svg"
            alt="Hero Image 3"
            width={1200}
            height={600}
            className="flex w-[30%] h-auto mx-[3%] lg:w-[20%]"
          />
        </div>
        <div className="w-full h-[40vh]">
          <Image
            src="/images/svg/date.svg"
            alt="Heroes Section"
            width={1200}
            height={600}
            className="w-[45%] mx-[3%] lg:w-[30%]"
          />
        </div>

        <div className="absolute right-0 inset-0 mt-15 w-full h-full">
          <div className="relative justify-end h-[45rem]">
            <div className="absolute right-0 bottom-[8%]">
              <div className="relative z-30">
                <Link href="/about">
                  <div
                    className="bg-accent text-primary rounded-l-full px-12 py-6  flex items-center dela-font md:text-[3vw] text-2xl
                                        hover:brightness-95 transition w-[40vw] h-[5rem] min-w-[18rem] justify-between z-10"
                  >
                    明大祭とは
                    <Image
                      src="/images/svg/arrow.svg"
                      alt="Arrow Icon"
                      width={60}
                      height={60}
                      className="ml-10 w-[4vw] h-[5vh]"
                    />
                  </div>
                </Link>
              </div>
              <div className="absolute inset-0 ml-20 w-[28rem] h-[14rem] z-20">
                <p className="absolute right-0 mb-100 w-[35rem] h-[6rem] border rounded-l-full border-blue-500 rotate-6 border-2 border-r-0 translate-x-6"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

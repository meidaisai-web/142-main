import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {  
    return (
        <div className="relative overflow-hidden bg-primary border border-primary">
            <Image
                src="/images/svg/background.svg"
                alt=""
                width={1200}
                height={600}
                className="w-full h-auto"
            />
            <div className="absolute inset-0 flex flex-col ">
                <div className="w-full">
                    <Image
                        src="/images/svg/title.svg"
                        alt="第141回明大祭"
                        width={1200}
                        height={600}
                        className="w-[35%] ml-[15%] mt-[5%]"
                    />
                </div>
                <div className="w-full">
                    <Image
                        src="/images/svg/logo-concept.svg"
                        alt="熱狂のその先に"
                        width={1200}
                        height={600}
                        className="w-1/2 ml-[40%] mt-[10%] "
                    />
                </div>

                <div className="flex w-full items-end mb-[2%]">
                    <Image
                        src="/images/svg/open.svg"
                        alt="Hero Image 2"
                        width={1200}
                        height={600}
                        className="flex w-[5%] h-auto object-contain ml-[3%]"
                    />
                    <Image
                        src="/images/svg/opentime.svg"
                        alt="Hero Image 3"
                        width={1200}
                        height={600}
                        className="flex w-[15%] h-auto object-contains mx-[3%]"
                    />
                </div>
                <div className="w-full">
                    <Image
                        src="/images/svg/date.svg"
                        alt="Heroes Section"
                        width={1200}
                        height={600}
                        className="w-[30%] mx-[3%] "
                    />
                </div>
                
                <Link href="/about">
                    <div className="absolute right-0 inset-0 mt-15  w-full h-full">
                        <div className="relative justify-end h-full">
                            <div className="absolute right-0 bottom-[20%]">
                                <div className="relative z-30">
                                    <div className="bg-accent text-primary rounded-l-full px-12 py-6  flex items-center dela-font lg:text-5xl md:text-4xl sm:text-3xl text-2xl
                                        hover:brightness-95 transition lg:w-[28rem] md:w-[22rem] sm:w-[20rem] w-[18rem] md:h-[6rem] lg:h-[8rem] justify-between z-10">
                                        明大祭とは
                                        <Image
                                            src="/images/svg/arrow.svg"
                                            alt="Arrow Icon"
                                            width={60}
                                            height={60}
                                            className="ml-6 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                                        />
                                    </div>
                                </div>
                                <div className="absolute inset-0 ml-20 w-[28rem] h-[14rem] z-20">
                                    <p className="absolute right-0 mb-100 w-[35rem] lg:h-[8rem] md:h-[6rem] sm:h-[6rem] h-[6rem] border rounded-l-full border-blue-500 rotate-6 border-2 border-r-0 translate-x-6"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

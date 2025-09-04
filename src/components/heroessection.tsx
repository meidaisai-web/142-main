import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {  
    return (
        <div className="relative overflow-hidden bg-primary h-screen bg-white">
            <div className="">
                <div className="absolute -translate-x-10 -translate-y-110 -rotate-25 bg-accent w-[60rem] h-[40rem] z-0"></div>
                <div className="absolute -translate-x-169 translate-y-50 rotate-50 bg-secondary w-[100vw] max-w-[200rem] h-[50rem] z-10"></div>
                <div className="absolute -translate-x-40 translate-y-196 -rotate-15 bg-primary w-[100rem] h-[40rem] z-20"></div>
            </div>
            <div className="absolute inset-0 flex flex-col z-30">
                <div className="lg:w-[40vw] md:w-[45vw] sm:w-[50vw] sm:h-[25vh] w-[55vw] h-[30vh]">
                    <Image
                        src="/images/svg/title.svg"
                        alt="第141回明大祭"
                        width={1200}
                        height={600}
                        className="sm:ml-[10vw] ml-[5vw] mt-[5vh]"
                    />
                </div>
                <div className="md:w-[90vw] h-[40vh] w-[100vw]">
                    <Image
                        src="/images/svg/logo-concept.svg"
                        alt="熱狂のその先に"
                        width={1200}
                        height={600}
                        className="w-[60vw] h-[25vh] ml-[40%] mt-[10%] md:block hidden"
                    />
                    <Image
                        src="/images/svg/logo.svg"
                        alt="第141回明大祭ロゴ"
                        width={1200}
                        height={600}
                        className="w-[60vw] h-[32vh] ml-[30vw] md:hidden "
                    />
                    <Image
                        src="/images/svg/concept.svg"
                        alt="Line Decoration"
                        width={1200}
                        height={600}
                        className="w-[45vw] h-[40vh] ml-[50vw] mb-[10vh] md:hidden"
                    />
                </div>

                <div className="flex w-full h-[5vh] items-end mb-[2%]">
                    <Image
                        src="/images/svg/open.svg"
                        alt="Hero Image 2"
                        width={1200}
                        height={600}
                        className="flex w-[5%] h-auto ml-[3%]"
                    />
                    <Image
                        src="/images/svg/opentime.svg"
                        alt="Hero Image 3"
                        width={1200}
                        height={600}
                        className="flex w-[15%] h-auto mx-[3%]"
                    />
                </div>
                <div className="w-full h-[40vh]">
                    <Image
                        src="/images/svg/date.svg"
                        alt="Heroes Section"
                        width={1200}
                        height={600}
                        className="w-[30%] mx-[3%] "
                    />
                </div>
                
                <div className="absolute right-0 inset-0 mt-15 w-full h-full">
                    <div className="relative justify-end h-[45rem]">
                        <div className="absolute right-0 bottom-[15%]">
                            <div className="relative z-30">
                                <Link href="/about">
                                    <div className="bg-accent text-primary rounded-l-full px-12 py-6  flex items-center dela-font md:text-[3vw] text-2xl
                                        hover:brightness-95 transition w-[40vw] h-[5rem] min-w-[18rem] justify-between z-10">
                                        明大祭とは
                                        <Image
                                            src="/images/svg/arrow.svg"
                                            alt="Arrow Icon"
                                            width={60}
                                            height={60}
                                            className="ml-10 w-[5vw] h-[5vh]"
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

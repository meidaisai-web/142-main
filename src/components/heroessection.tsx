import Image from 'next/image';
import Link from 'next/link';

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
                <div className="w-[70vw] [@media(min-width:375px)]:w-[50vw] [@media(min-width:425px)]:w-[40vw] [@media(min-width:768px)]:w-[40vw] md:w-[40vw] lg:w-[40vw] sm:h-[25vh]  h-[30vh]">
                    <Image
                        src="/images/svg/title.svg"
                        alt="第141回明大祭"
                        width={1200}
                        height={600}
                        className="ml-[10vw] sm:mt-[5vh] mt-[7vh]"
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

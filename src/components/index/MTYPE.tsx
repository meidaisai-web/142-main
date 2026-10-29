import Image from "next/image";
import Link from "next/link";
import Text from "../texts/Text";

const corners = [
    { src: "/images/starcontainer/pink-star.svg", width: 40, height: 31, className: "top-5 left-3 md:left-5 w-[36px] md:w-[40px]" },
    { src: "/images/starcontainer/green-star.svg", width: 40, height: 28, className: "top-4 md:top-3 right-7 md:right-6 w-[32px] md:w-[40px]" },
    { src: "/images/starcontainer/purple-star.svg", width: 36, height: 28, className: "bottom-7 left-4 w-[30px] md:w-[36px]" },
    { src: "/images/starcontainer/purpleline-star.svg", width: 26, height: 18, className: "top-2 left-12" },
    { src: "/images/starcontainer/pink-star.svg", width: 24, height: 31, className: "top-12 right-1" },
    { src: "/images/starcontainer/green-star.svg", width: 20, height: 18, className: "bottom-3 left-12 md:left-13 w-[18px] md:w-[20px]" },



];

export default function MType() {
    return (
        <section className="mx-auto my-20 w-[90%] max-w-3xl">
            <div className="rounded-3xl border-4 border-white p-3 shadow-lg md:p-5">
                <div className="relative rounded-2xl bg-white px-6 py-10 pb-16 md:py-12 md:pb-20">
                    {corners.map((star) => (
                        <Image
                            key={star.src}
                            src={star.src}
                            alt=""
                            width={star.width}
                            height={star.height}
                            className={`pointer-events-none absolute ${star.className}`}
                        />
                    ))}

                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold md:text-4xl">M-TYPE</h1>
                        <div className="flex items-center -translate-4 translate-x-6">
                            <span className="block h-[3px] w-40 md:w-56 bg-[repeating-linear-gradient(to_right,var(--color-accent-900)_0_14px,transparent_14px_26px)]" />
                            <Image
                                src="/images/svg/airplane-purple.svg"
                                alt=""
                                width={60}
                                height={60}
                                className="relative block h-16 w-16 transform "

                            />
                        </div>
                    </div>

                    <Text center>
                        今日のあなたを全4タイプから診断！<br />
                        あなたのタイプに合わせたおすすめの企画をご紹介します。<br />
                        迷わず、もっと楽しく、明大祭を満喫してみませんか？
                    </Text>

                    <Link
                        href="/mtype"
                        className="absolute -bottom-13 -right-3 w-48 transition-transform hover:translate-y-1 md:-bottom-15 md:-right-6 md:w-56"
                    >
                        <div className="relative">
                            <Image
                                src="/images/EventListView/pcloud.svg"
                                alt=""
                                width={454}
                                height={252}
                                className="h-auto w-full"
                            />
                            <span className="absolute inset-0 flex items-center justify-center text-sm md:text-md font-semibold">
                                診断はこちらから ▶
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

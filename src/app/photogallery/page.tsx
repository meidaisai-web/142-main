"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ShadowText from "@/components/texts/ShadowText";

const photos = [
    "/images/photogallery/photo-1.jpg",
    "/images/photogallery/photo-2.jpg",
    "/images/photogallery/photo-3.jpg",
    "/images/photogallery/photo-4.jpg",
    "/images/photogallery/photo-5.jpg",
    "/images/photogallery/photo-6.jpg",
    "/images/photogallery/photo-7.jpg",
    "/images/photogallery/photo-8.jpg",
    "/images/photogallery/photo-9.jpg",
    "/images/photogallery/photo-10.jpg",
    "/images/photogallery/photo-11.jpg",
    "/images/photogallery/photo-12.jpg",
    "/images/photogallery/photo-13.jpg",
    "/images/photogallery/photo-14.jpg",
    "/images/photogallery/photo-15.jpg",
    "/images/photogallery/photo-16.jpg",
    "/images/photogallery/photo-17.jpg",
    "/images/photogallery/photo-18.jpg",
    "/images/photogallery/photo-19.jpg",
    "/images/photogallery/photo-20.jpg",
    "/images/photogallery/photo-21.jpg",
    "/images/photogallery/photo-22.jpg",
    "/images/photogallery/photo-23.jpg",
];

// 5枚の写真に重複しない番号を割り当てる
function getUniqueIndexes(mainIndex: number) {
    const indexes = [mainIndex];

    for (let i = 1; i < photos.length && indexes.length < 5; i++) {
        const index = (mainIndex + i) % photos.length;
        indexes.push(index);
    }

    return indexes;
}

type PhotoFrameProps = {
    src: string;
    alt: string;
    className: string;
};

function PhotoFrame({ src, alt, className }: PhotoFrameProps) {
    return (
        <div className={className}>
            <div className="relative h-full w-full md:p-1">
                <div className="relative h-full w-full overflow-hidden">
                    <AnimatePresence mode="sync">
                        <motion.div
                            key={src}
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                sizes="(max-width: 767px) 100vw, 450px"
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default function PhotoGallery() {
    // 写真ごとに独立したインデックスを用意
    const [mainIndex, setMainIndex] = useState(0);
    const [topLeftIndex, setTopLeftIndex] = useState(1);
    const [topRightIndex, setTopRightIndex] = useState(2);
    const [bottomLeftIndex, setBottomLeftIndex] = useState(3);
    const [bottomRightIndex, setBottomRightIndex] = useState(4);

    const [photoIndexes, setPhotoIndexes] = useState([0, 1, 2, 3, 4]);

    useEffect(() => {
        const timers = [
            setInterval(() => {
                setPhotoIndexes((prev) => {
                    const next = [...prev];
                    const used = new Set(next.filter((_, i) => i !== 0));
                    const candidates = photos
                        .map((_, i) => i)
                        .filter((i) => !used.has(i) && i !== prev[0]);

                    if (candidates.length > 0) {
                        next[0] = candidates[
                            Math.floor(Math.random() * candidates.length)
                        ];
                    }

                    return next;
                });
            }, 4000),

            ...[1, 2, 3, 4].map((position) =>
                setInterval(() => {
                    setPhotoIndexes((prev) => {
                        const next = [...prev];
                        const used = new Set(
                            next.filter((_, i) => i !== position)
                        );
                        const candidates = photos
                            .map((_, i) => i)
                            .filter((i) => !used.has(i));

                        if (candidates.length > 0) {
                            next[position] = candidates[
                                Math.floor(Math.random() * candidates.length)
                            ];
                        }

                        return next;
                    });
                }, [5300, 6700, 5900, 7300][position - 1])
            ),
        ];

        return () => timers.forEach(clearInterval);
    }, []);

    return (
        <>
            <ShadowText>フォトギャラリー</ShadowText>
            <section className="w-full overflow-hidden py-8 md:py-12">
                <div className="relative mx-auto hidden aspect-[1.4/1] w-[80%] max-w-[900px] md:block pt-5">
                    <div className="absolute inset-[-7%] z-0 rounded-2xl border-2 border-white/100" />
                    <PhotoFrame
                        src={photos[photoIndexes[1]]}
                        alt="明大祭の写真"
                        className="absolute left-[-1%] top-[-1%] z-0 aspect-[4/5] w-[28%] rotate-[-12deg]"
                    />
                    <PhotoFrame
                        src={photos[photoIndexes[2]]}
                        alt="明大祭の写真"
                        className="absolute right-[-1%] top-[-1%] z-0 aspect-[4/5] w-[28%] rotate-[10deg]"
                    />
                    <PhotoFrame
                        src={photos[photoIndexes[3]]}
                        alt="明大祭の写真"
                        className="absolute bottom-[-1%] left-[-1%] z-0 aspect-[4/5] w-[28%] rotate-[8deg]"
                    />
                    <PhotoFrame
                        src={photos[photoIndexes[4]]}
                        alt="明大祭の写真"
                        className="absolute bottom-[-1%] right-[-1%] z-0 aspect-[4/5] w-[28%] rotate-[-9deg]"
                    />
                    <PhotoFrame
                        src={photos[photoIndexes[0]]}
                        alt="明大祭のメイン写真"
                        className="absolute left-1/2 top-1/2 z-10 aspect-[4/5] w-[45%] max-w-[400px] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg]"
                    />
                </div>
                <div className="mx-auto w-[85%] max-w-[360px] md:hidden">
                    <PhotoFrame
                        src={photos[photoIndexes[0]]}
                        alt="明大祭のメイン写真"
                        className="aspect-[4/5] w-full rotate-[-2deg]"
                    />
                </div>
                <div className="mt-10 w-full overflow-hidden md:hidden">
                    <motion.div
                        className="flex w-max gap-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 80,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[...photos, ...photos].map((src, index) => (
                            <div
                                key={index}
                                className="relative h-36 w-48 shrink-0 p-2 shadow-md"
                            >
                                <div className="relative h-full w-full overflow-hidden">
                                    <Image
                                        src={src}
                                        alt={`明大祭の写真 ${index + 1}`}
                                        fill
                                        sizes="144px"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
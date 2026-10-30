"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ShadowText from "@/components/texts/ShadowText";
import Frame from "@/components/index/Frame";

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
    "/images/photogallery/photo-22.jpg"
];

type PhotoFrameProps = {
    src: string;
    alt: string;
    className: string;
};

function PhotoFrame({ src, alt, className }: PhotoFrameProps) {
    return (
        <div className={`rounded-xl ${className}`}>
            <div className="relative h-full w-full rounded-xl md:p-1">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <AnimatePresence mode="sync">
                        <motion.div
                            key={src}
                            className="absolute inset-0 rounded-xl"
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
                                className="rounded-xl object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default function PhotoGallery() {
    const [photoIndexes, setPhotoIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);

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
                        next[0] = candidates[Math.floor(Math.random() * candidates.length)];
                    }
                    return next;
                });
            }, 8000),

            ...[1, 2, 3, 4, 5, 6].map((position) =>
                setInterval(() => {
                    setPhotoIndexes((prev) => {
                        const next = [...prev];
                        const used = new Set(next.filter((_, i) => i !== position));
                        const candidates = photos
                            .map((_, i) => i)
                            .filter((i) => !used.has(i));
                        if (candidates.length > 0) {
                            next[position] = candidates[Math.floor(Math.random() * candidates.length)];
                        }
                        return next;
                    });
                }, [10000, 13000, 11000, 14000, 12000, 15000][position - 1])
            ),
        ];

        return () => timers.forEach(clearInterval);
    }, []);

    return (
        <section className="w-full overflow-hidden py-8 md:py-12">
            
            <ShadowText>フォトギャラリー</ShadowText>
            <ShadowText>－明大祭1日目－</ShadowText>
            <Frame className="!max-w-5xl">
                <div className="relative mx-auto hidden aspect-[1.4/1] w-full max-w-[900px] md:block pt-5 drop-shadow-[4px_5px_10px_rgba(0,0,0,0.2)]">
                    <PhotoFrame
                        src={photos[photoIndexes[1]]}
                        alt="明大祭の写真"
                        className="absolute left-[-2%] top-[0%] z-0 aspect-[4/5] w-[24%] rotate-[-13deg] bg-white/80 p-0.5 drop-shadow-[4px_5px_10px_rgba(0,0,0,0.2)]"
                    />
                    <PhotoFrame
                        src={photos[photoIndexes[2]]}
                        alt="明大祭の写真"
                        className="absolute left-[6%] top-[25%] z-0 aspect-[4/5] w-[26%] rotate-[9deg] bg-white/80 p-0.5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
                    />
                    <PhotoFrame
                        src={photos[photoIndexes[3]]}
                        alt="明大祭の写真"
                        className="absolute left-[-3%] bottom-[2%] z-0 aspect-[4/5] w-[23%] rotate-[-6deg] bg-white/80 p-0.5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
                    />
                    <PhotoFrame
                        src={photos[photoIndexes[4]]}
                        alt="明大祭の写真"
                        className="absolute right-[-1%] top-[5%] z-0 aspect-[4/5] w-[22%] rotate-[12deg] bg-white/80 p-0.5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
                    />
                    <PhotoFrame
                        src={photos[photoIndexes[5]]}
                        alt="明大祭の写真"
                        className="absolute right-[6%] top-[28%] z-0 aspect-[4/5] w-[25%] rotate-[-8deg] bg-white/80 p-0.5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
                    />
                    <PhotoFrame
                        src={photos[photoIndexes[6]]}
                        alt="明大祭の写真"
                        className="absolute right-[-2%] bottom-[2%] z-0 aspect-[3/4] w-[22%] rotate-[5deg] bg-white/80 p-0.5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
                    />
                    <PhotoFrame
                        src={photos[photoIndexes[0]]}
                        alt="明大祭のメイン写真"
                        className="absolute left-1/2 top-1/2 z-10 aspect-[4/5] w-[40%] max-w-[400px] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] bg-white/80 p-0.5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
                    />
                </div>
                <div className="relative mx-auto w-[85%] max-w-[360px] md:hidden 
                rounded-xl 
                after:absolute after:inset-0 
                after:translate-x-3 after:translate-y-3
                after:rounded-xl after:bg-secondary-100
                after:-z-10">

                    <PhotoFrame
                        src={photos[photoIndexes[0]]}
                        alt="明大祭のメイン写真"
                        className="relative z-0 aspect-[4/5] w-full rounded-xl"
                    />
                </div>
                <div className="mt-10 w-full overflow-hidden md:hidden">
                    <motion.div
                        className="flex w-max gap-4"
                        style={{ willChange: "transform" }}
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
                                className="relative h-36 w-48 shrink-0 overflow-hidden rounded-xl"
                            >
                                <Image
                                    src={src}
                                    alt={`明大祭の写真 ${index + 1}`}
                                    fill
                                    sizes="192px"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Frame>
        </section>
    );
}

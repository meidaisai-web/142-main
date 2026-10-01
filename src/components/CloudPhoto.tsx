"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Fragment } from "react";

type CloudPhotoProps = {
    src: string;
    name: string;
    delay?: number;
    className?: string;
};

export default function CloudPhoto({ src, name, delay = 0, className = "" }: CloudPhotoProps) {
    return (
        <motion.div
            className={`w-full min-w-0 ${className}`}
            animate={{ x: [-8, 4, -8], y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        >
            <div className="relative aspect-[225/141] w-full mask-[url(/images/svg/animation/Pink-Cloud.svg)] mask-contain mask-no-repeat mask-center">
                <Image src={src} alt={name.replaceAll("|", "")} fill sizes="(min-width: 1024px) 600px, 50vw" className="object-cover" />
            </div>
            <p className="mt-2 text-center text-sm lg:text-base font-semibold break-keep">
                {name.split("|").map((part, i) => (
                    <Fragment key={i}>
                        {i > 0 && <wbr />}
                        {part}
                    </Fragment>
                ))}
            </p>
        </motion.div>
    );
}

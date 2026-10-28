"use client";
import { useEffect, useState } from "react";

const MOBILE_QUERY = "(max-width: 639px)";
const MOBILE_SCALE = 0.4;

export function useMotionScale() {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const mq = window.matchMedia(MOBILE_QUERY);
        const update = () => setScale(mq.matches ? MOBILE_SCALE : 1);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    return scale;
}

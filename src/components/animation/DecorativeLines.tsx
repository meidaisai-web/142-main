"use client";

import Line from "./Line";

export default function DecorativeLines() {
    const topLinePath =
        "M 0 180 C 120 80, 260 40, 400 70 C 500 90, 620 120, 650 70 C 680 20, 590 0, 550 60 C 520 110, 620 160, 700 110 C 800 50, 900 50, 1000 70";
    const bottomLinePath =
        "M 0 30 C 150 20, 260 60, 380 130 C 500 200, 580 300, 660 250 C 760 190, 850 250, 1000 300";

    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full overflow-hidden">
                <Line
                    path={topLinePath}
                    className=" w-[900px]
                                max-w-none
                                md:w-full"
                    duration={2.5}
                />
            </div>
            <Line
                path={bottomLinePath}
                className="absolute bottom-0 left-0 h-[350px] w-full"
                duration={3}
                delay={0.3}
            />
        </div>
    );
}
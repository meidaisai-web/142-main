import React from "react";
import Image from 'next/image'
import Link from 'next/link';
import { BIZ_UDPMincho } from 'next/font/google';

const bizUDPMincho = BIZ_UDPMincho({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
});

// 文字列の長さに応じて半円の始点・終点を計算する
// 中心角 225°(単位円とy軸が逆)、半径 75
// 弧の長さ = 文字数 × フォントサイズ → ラジアン = 弧の長さ / 半径
const CENTER = { x: 68, y: 68 };
const RADIUS = 75;
const FONT_SIZE = 16;
const CENTER_ANGLE_DEG = 225;

function getArcPath(text: string): string {
    const arcLength = text.length * FONT_SIZE;
    const halfAngleDeg = (arcLength / RADIUS) * (180 / Math.PI) / 2;
    const startDeg = CENTER_ANGLE_DEG - halfAngleDeg;
    const endDeg = CENTER_ANGLE_DEG + halfAngleDeg;
    const startRad = (startDeg * Math.PI) / 180;
    const endRad = (endDeg * Math.PI) / 180;
    const x1 = CENTER.x + RADIUS * Math.cos(startRad);
    const y1 = CENTER.y + RADIUS * Math.sin(startRad);
    const x2 = CENTER.x + RADIUS * Math.cos(endRad);
    const y2 = CENTER.y + RADIUS * Math.sin(endRad);
    return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${RADIUS} ${RADIUS} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

export default function Element() {
    const images = [
        { src: "images/IndexSearch/Indexcircle.svg", href: "/campusmap", label: "キャンパスマップ" },
        { src: "images/IndexSearch/Indexcircle.svg", href: "/tt", label: "タイムテーブル" },
        { src: "images/IndexSearch/Indexcircle.svg", href: "/meichan", label: "Meidaisaihcampionship" }
    ];
    return (
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4 p-8 w-[80vw] max-w-md lg:max-w-4xl mx-auto">
            {images.map((image, index) => (
                <div key={index} className="relative aspect-square w-full group">
                    <Link href={image.href}>
                        <Image src={image.src} alt={image.label} fill className="object-contain transition-opacity duration-200 group-hover:opacity-0"/>

                        {/* 文字部分のsvgを作成 */}
                        <svg
                            className="absolute inset-0 w-full h-full"
                            // svgの大きさ
                            viewBox="0 0 136 136"
                            overflow="visible"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* 円の形をARC_PATHで定義(見えない半円を文字に沿わせる) */}
                            <defs>
                                <path id={`arc-${index}`} d={getArcPath(image.label)} />
                            </defs>
                            <text style={{ fontFamily: bizUDPMincho.style.fontFamily, fontSize: 16, fill: '#B19FCA' }}>
                                <textPath href={`#arc-${index}`} startOffset="50%" textAnchor="middle">
                                    {image.label}
                                </textPath>
                            </text>
                        </svg>
                    </Link>
                </div>
            ))}
        </div>
    )
}

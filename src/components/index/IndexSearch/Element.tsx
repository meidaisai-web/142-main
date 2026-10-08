'use client';

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

function getTextWidth(text: string): number {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) return text.length * FONT_SIZE;

    context.font = `700 ${FONT_SIZE}px ${bizUDPMincho.style.fontFamily}`;

    return context.measureText(text).width;
}

function getArcPath(text: string): string {
    const arcLength = getTextWidth(text);
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
        { href: "/campusmap", label: "キャンパスマップ", icon: "/images/Indexsearch/map.svg" },
        { href: "/tt", label: "タイムテーブル", icon: "/images/Indexsearch/time.svg" },
        { href: "/meichan", label: "Meidaisaicampionshipとは", icon: "/images/Indexsearch/meicham.svg"  }
    ];
    return (
        <div className="grid grid-cols-3 gap-x-[7%] px-[4%] w-full max-w-2xl mx-auto">
            {images.map((image, index) => (
                <div key={index} className="relative aspect-square w-full group">
                    <Link href={image.href} className="relative block w-full h-full">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id={`circle-grad-${index}`} x1="0" y1="0" x2="0" y2="136" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BDD0CC" />
                                    <stop offset="1" stopColor="#C0B4D1" />
                                </linearGradient>
                                <linearGradient id={`circle-grad-hover-${index}`} x1="0" y1="136" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BDD0CC" />
                                    <stop offset="1" stopColor="#C0B4D1" />
                                </linearGradient>
                            </defs>
                            <circle cx="68" cy="68" r="65.5" fill="none" stroke={`url(#circle-grad-${index})`} strokeWidth="5"
                                className="transition-opacity duration-200 group-hover:opacity-0" />
                            <circle cx="68" cy="68" r="65.5" fill="none" stroke={`url(#circle-grad-hover-${index})`} strokeWidth="5"
                                className="opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                        </svg>

                        {image.icon && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <Image src={image.icon} alt="" width={80} height={80} className="w-3/5 h-3/5 object-contain" />
                            </div>
                        )}

                        {/* 文字部分のsvgを作成 */}
                        <svg className="absolute inset-0 w-full h-full"
                            viewBox="0 0 136 136"
                            overflow="visible"
                            xmlns="http://www.w3.org/2000/svg"
                        >

                            {/* 円の形をARC_PATHで定義(見えない半円を文字に沿わせる) */}
                            <defs>
                                <path id={`arc-${index}`} d={getArcPath(image.label)} />
                            </defs>
                            <text style={{ fontFamily: bizUDPMincho.style.fontFamily, fontSize: 14, fill: '#B19FCA' }}>
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

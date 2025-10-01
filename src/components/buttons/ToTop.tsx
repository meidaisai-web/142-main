'use client'

import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const ToTop: React.FC = () => {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', scrollWindow)
            return () => {
                window.removeEventListener('scroll', scrollWindow)
            }
        }
    }, [])

    const scrollWindow = () => {
        if (typeof window !== 'undefined') {
            const top = 300  //ボタンを表示させたい位置
            let scroll = 0
            scroll = window.scrollY
            if (top <= scroll) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
    }

    const normalStyle: React.CSSProperties = {
        opacity: 0,
        transition: '0.2s ease-in',
        cursor: 'auto',
        pointerEvents: 'none',
    }
    const activeStyle: React.CSSProperties = {
        opacity: 1,
        transition: '0.2s ease-out',
        cursor: 'pointer',
    }

    const style = isVisible ? activeStyle : normalStyle
    const bottomClass = pathname === '/' ? 'bottom-8' : 'bottom-28 md:bottom-20';

    return (
        <div className="w-12 absolute cursor-pointer">
            <button
                onClick={scrollToTop}
                style={style}
                className={`fixed flex flex-col items-center right-8 md:right-12 ${bottomClass} w-18 z-30`}>
                <Image
                    className="w-3/4 object-contain"
                    src="/images/svg/ToTop.svg"
                    alt="Topへ戻る"
                    width={50}
                    height={50}
                />
                <p className={'w-full text-center font-bold text-xl leading-3 stroke-black'}>TOP</p>
            </button>
        </div>
    );
};

export default ToTop;
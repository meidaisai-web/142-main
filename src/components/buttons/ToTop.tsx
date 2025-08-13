'use client'

import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';

const ToTop: React.FC = () => {

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

    return (
        <div className="w-12 absolute cursor-pointer">
            <button
                onClick={scrollToTop}
                style={style}
                className='fixed flex flex-col items-center right-4 sm:right-8 md:right-12 bottom-8 md:bottom-12 w-12 z-30'>
                <Image
                    className="w-3/4 sm:w-full object-contain"
                    onClick={scrollToTop}
                    src="/images/svg/Topbutton.svg"
                    alt="Topへ戻る"
                    width={50}
                    height={50}
                />
                <p className={'w-full text-center font-bold'}>TOP</p>
            </button>
        </div>
    );
};

export default ToTop;
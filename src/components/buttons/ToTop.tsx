'use client'

import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import { Murecho } from 'next/font/google';

const murecho = Murecho({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap', 
});

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
        transition: '0.5s',
        pointerEvents: 'none'
    }
    const activeStyle: React.CSSProperties = {
        opacity: 1,
        transition: '0.5s',
        height: 'max-content',
        width: '50px',
        position: 'fixed',
        bottom: '12vh',
        right: '4vw',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        alignItems: 'center',
        zIndex: 25,
    }

    const style = isVisible ? activeStyle : normalStyle

    return (
        <div className="w-[50px] absolute">
            
                <button 
                onClick={scrollToTop} 
                style={style}>
                    <Image
                        className="w-3/4 sm:w-full object-contain"
                        onClick={scrollToTop}
                        src="/images/svg/Topbutton.svg"
                        alt="Topへ戻る"
                        width={50}
                        height={50}
                    />
                    <p className={murecho.className + ' w-3/4 sm:w-full text-center font-bold text-white'}>TOP</p>
                </button>
            
        </div>
    );
};

export default ToTop;
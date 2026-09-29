'use client';
import React, { useRef, useEffect } from 'react';
type MovieProps = {
    src: string;
    className?: string;
    youtube?: boolean;
}

export default function Movie({
    src,
    className,
    youtube
}: MovieProps) {
    if (youtube) {
        return (
            <div className="flex justify-center">
                <div className="relative w-full max-w-2xl mt-5 aspect-video">
                    <iframe
                        src={src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="absolute top-0 left-0 w-full h-full"
                >
                </iframe>
            </div>
        </div>
        )
    } else {
        const videoRef = useRef<HTMLVideoElement>(null);

        useEffect(() => {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            videoElement.play().catch((error) => {
                                console.log('自動再生がブラウザによってブロックされました:', error);
                            });
                        } else {
                            videoElement.pause();
                        }
                    });
                },
                { threshold: 0.5 }
            );

            observer.observe(videoElement);

            return () => {
                observer.unobserve(videoElement);
                observer.disconnect();
            };
        }, []);

        return (
            <div className={`w-full max-w-2xl mx-auto ${className}`}>
                <video
                    ref={videoRef}
                    controls
                    preload="metadata"
                    muted
                    playsInline
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-auto rounded-lg shadow-md bg-black"
                >
                    <source src={src} type="video/mp4" />
                </video>
            </div>
        );
    }
}

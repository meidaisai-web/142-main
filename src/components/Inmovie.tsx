'use client';

import React, { useRef, useEffect } from 'react';

interface InmovieProps {
  videoUrl: string;
  className?: string;
}

const Inmovie: React.FC<InmovieProps> = ({ videoUrl, className = '' }) => {
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
        className="w-full h-auto rounded-lg shadow-md bg-black"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default Inmovie;
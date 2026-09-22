import React from 'react';

interface InmovieProps {
    videoUrl: string;
    className?: string;
}

const Inmovie: React.FC<InmovieProps> = ({ videoUrl, className = '' }) => {
    return (
        <div className={`w-full max-w-4xl mx-auto ${className}`}>
            <video
                controls
                preload="metadata"
                className="w-full h-auto rounded-lg shadow-md bg-black"
                playsInline
            >
                <source src={videoUrl} type="video/mp4" />
            </video>
        </div>
    );
};

export default Inmovie;
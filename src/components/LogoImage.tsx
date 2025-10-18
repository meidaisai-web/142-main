import Image from "next/image";

interface LogoImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

export default function LogoImage({ src, alt, width, height, className }: LogoImageProps) {
    return (
        <div className="flex justify-center">
            <Image src={src} alt={alt} width={width || 300} height={height || 300} className={`w-56 h-56 rounded-2xl ${className}`} />
        </div>
    )
}
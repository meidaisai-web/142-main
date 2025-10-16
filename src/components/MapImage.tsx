import OnlyImage from "./OnlyImage";

interface MapImageProps {
    src: string;
    alt: string;
    className?: string;
}

export default function MapImage({ src, alt, className }: MapImageProps) {
    return (
        <OnlyImage src={src} alt={alt} className={`max-w-72 ${className}`} />
    )
}
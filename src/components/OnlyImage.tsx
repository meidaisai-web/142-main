import Image from "next/image"

type OnlyImageProps = {
    src: string;
    alt: string;
    className?: string;
    height?: number;
};

export default function OnlyImage({
    src,
    alt,
    className,
    height = 500
}: OnlyImageProps) {

    return (
        <div className={`flex justify-center ${className}`}>
            <Image
                src={src}
                alt={alt}
                width={500}
                height={height}
                className="rounded-md"
            />
        </div>
    );
}
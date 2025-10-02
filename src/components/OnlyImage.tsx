import Image from "next/image"

type OnlyImageProps = {
    src: string;
    alt: string;
    className?: string;
};

export default function OnlyImage({
    src,
    alt,
    className
}: OnlyImageProps) {

    return (
        <div className={`flex justify-center ${className}`}>
            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                className="rounded-2xl"
            />
        </div>
    );
}
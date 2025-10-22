import Image from "next/image";

type ImageTextProps = {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
};

export default function ImageText({
  src,
  alt,
  children,
  className,
}: ImageTextProps) {
  return (
    <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-8 pt-4 ${className}`}>
      <Image src={src} alt={alt} width={500} height={500} className="rounded-2xl w-full max-w-lg sm:max-w-96 sm:w-1/2" />
      <div className="w-full text-justify">{children}</div>
    </div>
  );
}
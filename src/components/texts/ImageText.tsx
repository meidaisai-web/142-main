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
    <div className={`flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-10 py-10 ${className}`}>
      <Image src={src} alt={alt} width={500} height={500} className="rounded-lg w-4/5 max-w-lg sm:w-1/2" />
      <div className="w-full text-justify">{children}</div>
    </div>
  );
}
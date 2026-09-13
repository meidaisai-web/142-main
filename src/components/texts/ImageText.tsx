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
    <div className={`flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-10 mt-2 pb-7 ${className}`}>
      <Image src={src} alt={alt} width={500} height={500} className="rounded-lg w-4/5 max-w-lg sm:w-1/2" />
      <div className="w-full text-justify font-semibold">{children}</div>
    </div>
  );
}
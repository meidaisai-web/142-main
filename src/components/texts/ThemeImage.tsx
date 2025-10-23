import Image from "next/image";
import Text from "./Text";
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
      <Image src={src} alt={alt} width={160} height={160} className="rounded-2xl sm:max-w-40 sm:w-1/2" />
      <div className="w-full text-justify">{children}</div>
    </div>
  );
}
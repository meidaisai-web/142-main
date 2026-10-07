import Image from "next/image";

type ImageLogoProps = {
  src: string;
  logoSrc: string;
  alt: string;
  logoAlt: string;
  className?: string;
};

export default function ImageLogo({
  src,logoSrc,alt,logoAlt,className,
}: 

ImageLogoProps) {
  return (
    <div className="relative">
      {/* 背景画像 */}
      <div className="absolute inset-0 bg-black/40" />
      <Image src={src} alt={alt} width={500} height={500} className="w-full" />

      {/* フレーム画像 */}
      <Image src="/images/ImageLogo/logoframe.svg" alt="フレーム" width={500} height={500} className="absolute inset-0 w-full h-full" />

      {/* 上に重ねるロゴ */}
      <Image src={logoSrc} alt={logoAlt} width={500} height={500} className="absolute inset-0 m-auto w-1/3" />
    </div>
  );
}

import Image from "next/image";

type ImageLogoProps = {
  src: string;
  logoSrc: string;
  alt: string;
  logoAlt: string;
  className?: string;
  LogoClassName?: string;
  logoHeight?: number;
};

export default function ImageLogo({
  src,
  logoSrc,
  alt,
  logoAlt,
  className = "",
  LogoClassName = "",
  logoHeight = 500,
}: ImageLogoProps) {
  return (
    <div className={`relative ${className}`}>
      {/* 背景画像の影 */}
      <div className="absolute inset-0 translate-x-3 translate-y-2 sm:translate-x-7 sm:translate-y-6 bg-black/40 rounded-lg" />

      {/* 背景画像 */}
      <Image src={src} alt={alt} width={500} height={500} className="w-full rounded-lg"/>

      {/* フレーム画像 */}
      <Image src="/images/ImageLogo/logoframe.svg" alt="フレーム" width={500} height={310} className="absolute inset-0 w-full h-full" />

      {/* 上に重ねるロゴ */}
      <Image src={logoSrc} alt={logoAlt} width={500} height={logoHeight} className={`absolute inset-0 m-auto h-auto ${LogoClassName ?? ""}`}/>
    </div>
  );
}

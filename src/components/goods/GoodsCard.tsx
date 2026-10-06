import Image from "next/image";

type GoodsCardProps = {
  image: string | string[];
  name: string;
  price: string;
  type?: string;
  typeImage?: string;
  wide?: boolean;
};

export default function GoodsCard({
  image,
  name,
  price,
  type,
  typeImage,
  wide = false,
}: GoodsCardProps) {
  return (
    <div
      className={`relative rounded-[36px] border-[7px] border-accent bg-white ${wide
        ? "h-[600px] md:col-span-2 md:h-[280px] md:w-[85%] md:justify-self-center"
        : "h-[280px]"
        }`}
    >
      {/* グッズ画像 */}
      <div
        className={`flex h-full items-center justify-center pb-10 ${type || typeImage ? "translate-y-7" : ""
          }`}
      >        {Array.isArray(image) ? (
        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-center">
          {image.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`${name}${index + 1}`}
              width={200}
              height={200}
              className={`w-[90%] max-w-[200px] object-contain md:w-[28%] ${name === "クリアファイル" ? "-translate-y-1" : ""
                }`} />
          ))}
        </div>
      ) : (
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="object-contain"
        />
      )}
      </div>

      {/* 種類タグ */}
      {type && (
        <div className="absolute right-[20px] top-[20px] z-20">
          <div className="relative">
            <Image
              src="/images/goods/goodstypecloud.svg"
              alt=""
              width={80}
              height={50}
            />
            <p className="absolute inset-0 flex items-center justify-center text-[15px]">
              {type}
            </p>
          </div>
        </div>
      )}
      {typeImage && (
        <Image
          src={typeImage}
          alt=""
          width={100}
          height={100}
          className="..."
        />
      )}

      {/* 商品名・価格 */}
      <div className="absolute bottom-[-56px] left-1/2 -translate-x-1/2">
        <div className="relative w-[220px]">
          {/* 雲 */}
          <Image
            src="/images/goods/goodscloud.svg"
            alt=""
            width={220}
            height={86}
            className="w-full"
          />

          {/* 商品名 */}
          <p className="absolute left-0 top-[32px] w-full text-center text-[15px]">
            {name}
          </p>

          {/* 値段 */}
          <p className="absolute top-[70px] w-full translate-x-37 text-[12px]">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}
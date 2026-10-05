import Image from "next/image";

type GoodsCardProps = {
  image: string;
  name: string;
  price: string;
  type?: string;
  wide?: boolean;
};

export default function GoodsCard({
  image,
  name,
  price,
  type,
  wide = false,
}: GoodsCardProps) {
  return (
    <div
      className={`relative h-[280px] rounded-[36px] border-[9px] bg-white border-[#c5b7d8] ${wide ? "md:col-span-2 md:w-[70%] md:justify-self-center" : ""
        }`}
    >
      {/* グッズ画像 */}
      <div className="flex h-full items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* 種類タグ */}
      {type && (
        <div className="absolute right-2 top-2 rounded-full bg-[#d9d3e1] px-3 py-1 text-xs">
          {type}
        </div>
      )}

      {/* 商品名・価格 */}
      <div className="absolute bottom-[-42px] left-1/2 -translate-x-1/2">
        <div className="relative w-[220px]">
          {/* 雲 */}
          <Image
            src="/images/svg/goodscloud.svg"
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